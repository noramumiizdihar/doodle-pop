import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/views/HomeView';
import { ColorView } from './components/views/ColorView';
import { CreateView } from './components/views/CreateView';
import { ChallengeView } from './components/views/ChallengeView';
import { AdventureView } from './components/views/AdventureView';
import { GalleryView } from './components/views/GalleryView';
import { ConnectDotsPlayer } from './components/views/ConnectDotsPlayer';
import { DrawingCanvas } from './components/canvas/DrawingCanvas';
import { Toolbar } from './components/canvas/Toolbar';
import { PaletteDrawer } from './components/canvas/PaletteDrawer';
import { SizeDrawer } from './components/canvas/SizeDrawer';
import { StickerDrawer } from './components/canvas/StickerDrawer';
import { BackgroundDrawer } from './components/canvas/BackgroundDrawer';
import { ParentModal } from './components/modals/ParentModal';
import { ClearConfirmModal } from './components/modals/ClearConfirmModal';
import { CelebrationModal } from './components/modals/CelebrationModal';
import { ResumeModal } from './components/modals/ResumeModal';

import { ToolType, BrushSize, Artwork, PlacedObject } from './types/drawing';
import { ColoringPage } from './data/coloringPages';
import { ConnectDotPuzzle } from './data/connectTheDots';
import { FinishPictureDef } from './data/finishThePicture';
import { DrawingChallenge } from './data/challenges';
import { AdventureWorld } from './data/adventures';
import { StickerDef } from './data/stickers';
import { ShapeDef } from './data/shapes';
import { BackgroundDef } from './data/backgrounds';

import { sound } from './services/soundEngine';
import {
  saveArtwork,
  getArtwork,
  getAllArtworks,
  deleteArtwork,
  duplicateArtwork,
  getLastActiveArtworkId,
  setLastActiveArtworkId,
  exportCanvasAsPng,
  shareArtwork,
} from './services/storage';

export type AppView =
  | 'home'
  | 'canvas'
  | 'color'
  | 'create'
  | 'challenge'
  | 'connectDots'
  | 'adventure'
  | 'gallery';

export const App: React.FC = () => {
  // Navigation
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [viewTitle, setViewTitle] = useState<string>('DoodlePop');
  const [viewEmoji, setViewEmoji] = useState<string>('🎨');

  // Drawing tools state
  const [tool, setTool] = useState<ToolType>('brush');
  const [color, setColor] = useState<string>('#FF3B30');
  const [size, setSize] = useState<BrushSize>('medium');
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');
  const [templateSvg, setTemplateSvg] = useState<string | undefined>(undefined);
  const [placedObjects, setPlacedObjects] = useState<PlacedObject[]>([]);
  const [initialCanvasData, setInitialCanvasData] = useState<string | undefined>(undefined);

  // Active artwork tracking
  const [currentArtworkId, setCurrentArtworkId] = useState<string>(
    `art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`
  );
  const [artworkTitle, setArtworkTitle] = useState<string>('My Masterpiece');
  const [artworkType, setArtworkType] = useState<Artwork['type']>('draw');

  // Saved artworks for gallery
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  // Sub-activity states
  const [activeDotsPuzzle, setActiveDotsPuzzle] = useState<ConnectDotPuzzle | null>(null);
  const [activeChallenge, setActiveChallenge] = useState<DrawingChallenge | null>(null);
  const [activeAdventure, setActiveAdventure] = useState<AdventureWorld | null>(null);
  const [adventureStep, setAdventureStep] = useState<number>(1);

  // Drawers & Modals
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isStickersOpen, setIsStickersOpen] = useState(false);
  const [isBackgroundsOpen, setIsBackgroundsOpen] = useState(false);
  const [isParentModalOpen, setIsParentModalOpen] = useState(false);
  const [isClearConfirmOpen, setIsClearConfirmOpen] = useState(false);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false);
  const [celebrationData, setCelebrationData] = useState<{ title: string; message: string }>({
    title: 'Awesome! 🌟',
    message: 'Look at what an incredible drawing you made!',
  });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [lastArtworkToResume, setLastArtworkToResume] = useState<Artwork | null>(null);

  // Canvas Action Triggers
  const [undoTrigger, setUndoTrigger] = useState<number>(0);
  const [redoTrigger, setRedoTrigger] = useState<number>(0);
  const [clearTrigger, setClearTrigger] = useState<number>(0);
  const [exportTrigger, setExportTrigger] = useState<number>(0);
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [canRedo, setCanRedo] = useState<boolean>(false);

  // Mute state
  const [isMuted, setIsMuted] = useState<boolean>(sound.isMuted());

  // Autosave debouncing ref
  const autosaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestCanvasDataRef = useRef<string>('');

  // Refresh saved gallery artworks
  const refreshArtworks = useCallback(async () => {
    const list = await getAllArtworks();
    setArtworks(list);
  }, []);

  // Check for unfinished artwork on initial mount
  useEffect(() => {
    refreshArtworks();
    const lastId = getLastActiveArtworkId();
    if (lastId) {
      getArtwork(lastId).then((art) => {
        if (art && (art.canvasDataUrl || art.objects.length > 0)) {
          setLastArtworkToResume(art);
          setIsResumeModalOpen(true);
        }
      });
    }
  }, [refreshArtworks]);

  // Autosave handler called when canvas changes
  const handleCanvasChange = useCallback((dataUrl: string) => {
    latestCanvasDataRef.current = dataUrl;

    if (autosaveTimerRef.current) {
      clearTimeout(autosaveTimerRef.current);
    }

    autosaveTimerRef.current = setTimeout(async () => {
      if (!dataUrl) return;
      const art: Artwork = {
        id: currentArtworkId,
        title: artworkTitle,
        type: artworkType,
        canvasDataUrl: dataUrl,
        thumbnailDataUrl: dataUrl,
        objects: placedObjects,
        backgroundColor: backgroundColor,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      await saveArtwork(art);
      refreshArtworks();
    }, 1500);
  }, [currentArtworkId, artworkTitle, artworkType, placedObjects, backgroundColor, refreshArtworks]);

  // Save current artwork immediately
  const forceSaveCurrentArtwork = useCallback(async (customDataUrl?: string) => {
    const finalData = customDataUrl || latestCanvasDataRef.current;
    if (!finalData) return;

    const art: Artwork = {
      id: currentArtworkId,
      title: artworkTitle,
      type: artworkType,
      canvasDataUrl: finalData,
      thumbnailDataUrl: finalData,
      objects: placedObjects,
      backgroundColor: backgroundColor,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    await saveArtwork(art);
    refreshArtworks();
  }, [currentArtworkId, artworkTitle, artworkType, placedObjects, backgroundColor, refreshArtworks]);

  // Keyboard Shortcuts (Desktop Support)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          setRedoTrigger((prev) => prev + 1);
        } else {
          setUndoTrigger((prev) => prev + 1);
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        setRedoTrigger((prev) => prev + 1);
      } else if (e.key === 'Escape') {
        setIsPaletteOpen(false);
        setIsSizeOpen(false);
        setIsStickersOpen(false);
        setIsBackgroundsOpen(false);
        setIsParentModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handlers
  const handleGoHome = () => {
    forceSaveCurrentArtwork();
    setCurrentView('home');
    setViewTitle('DoodlePop');
    setViewEmoji('🎨');
    setActiveAdventure(null);
    setActiveChallenge(null);
  };

  const handleStartDraw = () => {
    const newId = `art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    setCurrentArtworkId(newId);
    setLastActiveArtworkId(newId);
    setArtworkTitle('My Drawing');
    setArtworkType('draw');
    setTemplateSvg(undefined);
    setInitialCanvasData(undefined);
    setPlacedObjects([]);
    setBackgroundColor('#FFFFFF');
    setTool('brush');
    setCurrentView('canvas');
    setViewTitle('Free Draw');
    setViewEmoji('✏️');
  };

  const handleStartColor = (page: ColoringPage) => {
    const newId = `art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    setCurrentArtworkId(newId);
    setLastActiveArtworkId(newId);
    setArtworkTitle(page.title);
    setArtworkType('color');
    setTemplateSvg(page.svgContent);
    setInitialCanvasData(undefined);
    setPlacedObjects([]);
    setBackgroundColor('#FFFFFF');
    setTool('fill'); // Start with magic bucket for coloring!
    setCurrentView('canvas');
    setViewTitle(`Color: ${page.title}`);
    setViewEmoji(page.emoji);
  };

  const handleStartChallenge = (challenge: DrawingChallenge) => {
    const newId = `art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    setCurrentArtworkId(newId);
    setLastActiveArtworkId(newId);
    setActiveChallenge(challenge);
    setArtworkTitle(challenge.prompt);
    setArtworkType('challenge');
    setTemplateSvg(undefined);
    setInitialCanvasData(undefined);
    setPlacedObjects([]);
    setBackgroundColor('#FFFFFF');
    setTool('crayon');
    setCurrentView('canvas');
    setViewTitle('Challenge');
    setViewEmoji(challenge.emoji);
  };

  const handleStartConnectDots = (puzzle: ConnectDotPuzzle) => {
    setActiveDotsPuzzle(puzzle);
    setCurrentView('connectDots');
    setViewTitle(`Dot to Dot: ${puzzle.title}`);
    setViewEmoji(puzzle.emoji);
  };

  const handleDoneDotsColoring = (revealedSvg: string) => {
    const newId = `art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    setCurrentArtworkId(newId);
    setLastActiveArtworkId(newId);
    setArtworkTitle(activeDotsPuzzle ? activeDotsPuzzle.title : 'Dot to Dot Art');
    setArtworkType('connectDots');
    setTemplateSvg(revealedSvg);
    setInitialCanvasData(undefined);
    setPlacedObjects([]);
    setBackgroundColor('#FFFFFF');
    setTool('fill');
    setCurrentView('canvas');
    setViewTitle(activeDotsPuzzle ? activeDotsPuzzle.title : 'Color Your Art');
    setViewEmoji(activeDotsPuzzle ? activeDotsPuzzle.emoji : '🎨');
  };

  const handleStartFinishPicture = (tmpl: FinishPictureDef) => {
    const newId = `art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    setCurrentArtworkId(newId);
    setLastActiveArtworkId(newId);
    setArtworkTitle(tmpl.title);
    setArtworkType('finishPicture');
    setTemplateSvg(tmpl.svgBackground);
    setInitialCanvasData(undefined);
    setPlacedObjects([]);
    setBackgroundColor('#FFFFFF');
    setTool('pencil');
    setCurrentView('canvas');
    setViewTitle(tmpl.title);
    setViewEmoji(tmpl.emoji);
  };

  const handleStartAdventure = (adv: AdventureWorld) => {
    const newId = `art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    setCurrentArtworkId(newId);
    setLastActiveArtworkId(newId);
    setActiveAdventure(adv);
    setAdventureStep(1);
    setArtworkTitle(adv.name);
    setArtworkType('adventure');
    setTemplateSvg(adv.backgroundSvg);
    setInitialCanvasData(undefined);
    setPlacedObjects([]);
    setBackgroundColor(adv.backgroundColor);
    setTool('crayon');
    setCurrentView('canvas');
    setViewTitle(adv.name);
    setViewEmoji(adv.emoji);
  };

  const handleNextAdventureStep = () => {
    if (!activeAdventure) return;
    if (adventureStep < activeAdventure.steps.length) {
      sound.sparkle();
      setAdventureStep((prev) => prev + 1);
    } else {
      // Adventure Completed!
      setCelebrationData({
        title: activeAdventure.completedCheer,
        message: 'You completed every step and brought this magical world to life!',
      });
      setIsCelebrationOpen(true);
    }
  };

  const handleOpenCharacterInCanvas = (objs: PlacedObject[]) => {
    const newId = `art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    setCurrentArtworkId(newId);
    setLastActiveArtworkId(newId);
    setArtworkTitle('My Character');
    setArtworkType('create');
    setTemplateSvg(undefined);
    setInitialCanvasData(undefined);
    setPlacedObjects(objs);
    setBackgroundColor('#FFFBEB');
    setTool('brush');
    setCurrentView('canvas');
    setViewTitle('Character Studio');
    setViewEmoji('🧍');
  };

  const handleOpenFreeScene = () => {
    const newId = `art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    setCurrentArtworkId(newId);
    setLastActiveArtworkId(newId);
    setArtworkTitle('My Creative Scene');
    setArtworkType('create');
    setTemplateSvg(undefined);
    setInitialCanvasData(undefined);
    setPlacedObjects([]);
    setBackgroundColor('#ECFDF5');
    setTool('brush');
    setCurrentView('canvas');
    setViewTitle('Scene Maker');
    setViewEmoji('🌄');
  };

  // Open artwork from Gallery
  const handleOpenArtwork = (art: Artwork) => {
    setCurrentArtworkId(art.id);
    setLastActiveArtworkId(art.id);
    setArtworkTitle(art.title);
    setArtworkType(art.type);
    setTemplateSvg(undefined);
    setInitialCanvasData(art.canvasDataUrl);
    setPlacedObjects(art.objects || []);
    setBackgroundColor(art.backgroundColor || '#FFFFFF');
    setTool('brush');
    setCurrentView('canvas');
    setViewTitle(art.title);
    setViewEmoji('🖼️');
  };

  // Resume unfinished session
  const handleResumeArtwork = () => {
    if (!lastArtworkToResume) return;
    handleOpenArtwork(lastArtworkToResume);
    setIsResumeModalOpen(false);
  };

  // Duplicate artwork
  const handleDuplicate = async (id: string) => {
    const copy = await duplicateArtwork(id);
    if (copy) refreshArtworks();
  };

  // Delete artwork
  const handleDelete = async (id: string) => {
    await deleteArtwork(id);
    refreshArtworks();
  };

  // Rename artwork
  const handleRename = async (id: string, newTitle: string) => {
    const art = await getArtwork(id);
    if (art) {
      art.title = newTitle;
      await saveArtwork(art);
      refreshArtworks();
    }
  };

  // Add Sticker to canvas
  const handleAddSticker = (sticker: StickerDef) => {
    const newObj: PlacedObject = {
      id: `stk_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      type: 'sticker',
      category: sticker.category,
      svgContent: sticker.svg,
      name: sticker.name,
      x: 180 + (Math.random() - 0.5) * 60,
      y: 180 + (Math.random() - 0.5) * 60,
      width: sticker.defaultWidth * 1.3,
      height: sticker.defaultHeight * 1.3,
      rotation: 0,
      scale: 1,
      zIndex: Math.max(...placedObjects.map((o) => o.zIndex), 0) + 1,
      isAlive: false,
    };
    setPlacedObjects((prev) => [...prev, newObj]);
  };

  // Add Shape to canvas
  const handleAddShape = (shape: ShapeDef) => {
    const newObj: PlacedObject = {
      id: `shp_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      type: 'shape',
      category: 'Shapes',
      svgContent: `<svg viewBox="0 0 ${shape.defaultWidth} ${shape.defaultHeight}">${shape.svg}</svg>`,
      name: shape.name,
      x: 180,
      y: 180,
      width: shape.defaultWidth * 1.2,
      height: shape.defaultHeight * 1.2,
      rotation: 0,
      scale: 1,
      color: color,
      zIndex: Math.max(...placedObjects.map((o) => o.zIndex), 0) + 1,
      isAlive: false,
    };
    setPlacedObjects((prev) => [...prev, newObj]);
  };

  // Export / Share Trigger
  const handleExportRequested = () => {
    setExportTrigger((prev) => prev + 1);
  };

  const handleExportReady = async (dataUrl: string) => {
    // Create temporary image for PNG export
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.width;
      c.height = img.height;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        exportCanvasAsPng(c, artworkTitle);
      }
    };
    img.src = dataUrl;
    forceSaveCurrentArtwork(dataUrl);

    setCelebrationData({
      title: 'Saved to Device! 💾',
      message: 'Your artwork has been saved and is ready to show everyone!',
    });
    setIsCelebrationOpen(true);
  };

  const handleShare = async () => {
    // Create canvas blob for sharing
    const img = new Image();
    img.onload = async () => {
      const c = document.createElement('canvas');
      c.width = img.width;
      c.height = img.height;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        await shareArtwork(c, artworkTitle);
      }
    };
    img.src = latestCanvasDataRef.current;
  };

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-amber-50 select-none">
      {/* Universal Kid-Friendly Top Navigation */}
      <Navbar
        title={viewTitle}
        emoji={viewEmoji}
        onGoHome={handleGoHome}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={() => setUndoTrigger((prev) => prev + 1)}
        onRedo={() => setRedoTrigger((prev) => prev + 1)}
        onClear={() => setIsClearConfirmOpen(true)}
        onSaveOrExport={handleExportRequested}
        onShare={handleShare}
        onOpenParent={() => setIsParentModalOpen(true)}
        isMuted={isMuted}
        onToggleMute={() => {
          const next = sound.toggleMute();
          setIsMuted(next);
        }}
        showCanvasControls={currentView === 'canvas'}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {/* 1. HOME VIEW */}
        {currentView === 'home' && (
          <HomeView
            onNavigate={(mode) => {
              if (mode === 'draw') handleStartDraw();
              else setCurrentView(mode);
            }}
          />
        )}

        {/* 2. COLOR LIBRARY VIEW */}
        {currentView === 'color' && (
          <ColorView onSelectColoringPage={handleStartColor} />
        )}

        {/* 3. CREATE STUDIO VIEW */}
        {currentView === 'create' && (
          <CreateView
            onOpenCharacterInCanvas={handleOpenCharacterInCanvas}
            onOpenFreeScene={handleOpenFreeScene}
          />
        )}

        {/* 4. CHALLENGES VIEW */}
        {currentView === 'challenge' && (
          <ChallengeView
            onStartChallenge={handleStartChallenge}
            onStartConnectDots={handleStartConnectDots}
            onStartFinishPicture={handleStartFinishPicture}
          />
        )}

        {/* 5. CONNECT THE DOTS INTERACTIVE PLAYER */}
        {currentView === 'connectDots' && activeDotsPuzzle && (
          <ConnectDotsPlayer
            puzzle={activeDotsPuzzle}
            onDoneColoring={handleDoneDotsColoring}
            onBack={() => setCurrentView('challenge')}
          />
        )}

        {/* 6. ADVENTURE WORLDS PICKER */}
        {currentView === 'adventure' && (
          <AdventureView onSelectAdventure={handleStartAdventure} />
        )}

        {/* 7. MY ART GALLERY */}
        {currentView === 'gallery' && (
          <GalleryView
            artworks={artworks}
            onOpenArtwork={handleOpenArtwork}
            onDuplicateArtwork={handleDuplicate}
            onDeleteArtwork={handleDelete}
            onRenameArtwork={handleRename}
            onStartNewDrawing={handleStartDraw}
          />
        )}

        {/* 8. ACTIVE DRAWING CANVAS STUDIO */}
        {currentView === 'canvas' && (
          <div className="relative w-full h-full flex flex-col">
            {/* Adventure Step Banner (if in Adventure Mode) */}
            {activeAdventure && (
              <div className="w-full bg-white/95 backdrop-blur border-b-2 border-sky-300 px-4 py-2 flex items-center justify-between shadow-sm z-20">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeAdventure.steps[adventureStep - 1].emoji}</span>
                  <div>
                    <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                      Step {adventureStep} of {activeAdventure.steps.length}
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-800">
                      {activeAdventure.steps[adventureStep - 1].prompt}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleNextAdventureStep}
                  className="btn-bubbly bg-sky-500 hover:bg-sky-400 text-white font-bold px-4 py-1.5 rounded-xl text-sm"
                >
                  {adventureStep === activeAdventure.steps.length ? 'Finish! 🏆' : 'Next Step ➡️'}
                </button>
              </div>
            )}

            {/* Challenge Banner (if in Challenge Mode) */}
            {activeChallenge && (
              <div className="w-full bg-white/95 backdrop-blur border-b-2 border-emerald-300 px-4 py-2 flex items-center justify-between shadow-sm z-20">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeChallenge.emoji}</span>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                      Creative Challenge
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-800">
                      {activeChallenge.prompt}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCelebrationData({
                      title: 'Challenge Completed! ⭐',
                      message: activeChallenge.cheerMessage,
                    });
                    setIsCelebrationOpen(true);
                  }}
                  className="btn-bubbly bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-4 py-1.5 rounded-xl text-sm"
                >
                  I Finished! 🌟
                </button>
              </div>
            )}

            {/* Multi-Touch Canvas */}
            <div className="flex-1 relative">
              <DrawingCanvas
                tool={tool}
                color={color}
                size={size}
                backgroundColor={backgroundColor}
                templateSvg={templateSvg}
                initialCanvasData={initialCanvasData}
                objects={placedObjects}
                onObjectsChange={setPlacedObjects}
                onCanvasChange={handleCanvasChange}
                canUndoChange={setCanUndo}
                canRedoChange={setCanRedo}
                undoTrigger={undoTrigger}
                redoTrigger={redoTrigger}
                clearTrigger={clearTrigger}
                exportTrigger={exportTrigger}
                onExportReady={handleExportReady}
              />
            </div>

            {/* Responsive Bottom Drawing Toolbar */}
            <Toolbar
              currentTool={tool}
              onSelectTool={setTool}
              currentSize={size}
              currentColor={color}
              onTogglePalette={() => setIsPaletteOpen(!isPaletteOpen)}
              onToggleSize={() => setIsSizeOpen(!isSizeOpen)}
              onToggleStickers={() => setIsStickersOpen(!isStickersOpen)}
              onToggleBackgrounds={() => setIsBackgroundsOpen(!isBackgroundsOpen)}
            />

            {/* Floating Drawers */}
            <PaletteDrawer
              currentColor={color}
              onSelectColor={setColor}
              isOpen={isPaletteOpen}
              onClose={() => setIsPaletteOpen(false)}
            />

            <SizeDrawer
              currentSize={size}
              onSelectSize={setSize}
              currentColor={color}
              isOpen={isSizeOpen}
              onClose={() => setIsSizeOpen(false)}
            />

            <StickerDrawer
              isOpen={isStickersOpen}
              onClose={() => setIsStickersOpen(false)}
              onAddSticker={handleAddSticker}
              onAddShape={handleAddShape}
            />

            <BackgroundDrawer
              currentBgColor={backgroundColor}
              onSelectBackground={(bg) => setBackgroundColor(bg.color)}
              isOpen={isBackgroundsOpen}
              onClose={() => setIsBackgroundsOpen(false)}
            />
          </div>
        )}
      </main>

      {/* Global Modals */}
      <ParentModal
        isOpen={isParentModalOpen}
        onClose={() => setIsParentModalOpen(false)}
        isMuted={isMuted}
        onToggleMute={() => {
          const next = sound.toggleMute();
          setIsMuted(next);
        }}
        onArtworksCleared={refreshArtworks}
      />

      <ClearConfirmModal
        isOpen={isClearConfirmOpen}
        onConfirm={() => {
          setClearTrigger((prev) => prev + 1);
          setPlacedObjects([]);
          setIsClearConfirmOpen(false);
        }}
        onCancel={() => setIsClearConfirmOpen(false)}
      />

      <CelebrationModal
        isOpen={isCelebrationOpen}
        onClose={() => setIsCelebrationOpen(false)}
        title={celebrationData.title}
        message={celebrationData.message}
        onSaveToGallery={handleExportRequested}
        onContinueDrawing={() => setIsCelebrationOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onContinue={handleResumeArtwork}
        onStartNew={() => setIsResumeModalOpen(false)}
        title={lastArtworkToResume?.title}
        thumbnail={lastArtworkToResume?.thumbnailDataUrl}
      />
    </div>
  );
};

export default App;
