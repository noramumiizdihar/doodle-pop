import React, { useState, useRef } from 'react';
import { PlacedObject } from '../../types/drawing';
import { sound } from '../../services/soundEngine';
import { ALIVE_PRESETS, AliveAnimationType } from '../../services/animationPresets';
import {
  Trash2,
  Copy,
  ArrowUp,
  ArrowDown,
  Sparkles,
  RotateCw,
  Maximize2,
  Palette,
} from 'lucide-react';
import { ALL_QUICK_COLORS } from '../../data/palette';

interface StickerLayerProps {
  objects: PlacedObject[];
  selectedObjectId: string | null;
  onSelectObject: (id: string | null) => void;
  onUpdateObject: (updated: PlacedObject) => void;
  onDeleteObject: (id: string) => void;
  onDuplicateObject: (id: string) => void;
  onBringForward: (id: string) => void;
  onSendBackward: (id: string) => void;
  canvasScale: number;
}

export const StickerLayer: React.FC<StickerLayerProps> = ({
  objects,
  selectedObjectId,
  onSelectObject,
  onUpdateObject,
  onDeleteObject,
  onDuplicateObject,
  onBringForward,
  onSendBackward,
  canvasScale,
}) => {
  const [showAliveMenu, setShowAliveMenu] = useState(false);
  const [showColorMenu, setShowColorMenu] = useState(false);
  const dragRef = useRef<{
    isDragging: boolean;
    isResizing: boolean;
    isRotating: boolean;
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
    initialWidth: number;
    initialHeight: number;
    initialRotation: number;
  }>({
    isDragging: false,
    isResizing: false,
    isRotating: false,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    initialWidth: 0,
    initialHeight: 0,
    initialRotation: 0,
  });

  const selectedObj = objects.find((o) => o.id === selectedObjectId);

  const handlePointerDownMove = (e: React.PointerEvent, obj: PlacedObject) => {
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    onSelectObject(obj.id);
    sound.pop();
    dragRef.current = {
      isDragging: true,
      isResizing: false,
      isRotating: false,
      startX: e.clientX,
      startY: e.clientY,
      initialX: obj.x,
      initialY: obj.y,
      initialWidth: obj.width,
      initialHeight: obj.height,
      initialRotation: obj.rotation,
    };
  };

  const handlePointerDownResize = (e: React.PointerEvent, obj: PlacedObject) => {
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = {
      isDragging: false,
      isResizing: true,
      isRotating: false,
      startX: e.clientX,
      startY: e.clientY,
      initialX: obj.x,
      initialY: obj.y,
      initialWidth: obj.width,
      initialHeight: obj.height,
      initialRotation: obj.rotation,
    };
  };

  const handlePointerDownRotate = (e: React.PointerEvent, obj: PlacedObject) => {
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = {
      isDragging: false,
      isResizing: false,
      isRotating: true,
      startX: e.clientX,
      startY: e.clientY,
      initialX: obj.x,
      initialY: obj.y,
      initialWidth: obj.width,
      initialHeight: obj.height,
      initialRotation: obj.rotation,
    };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!selectedObj) return;
    const {
      isDragging,
      isResizing,
      isRotating,
      startX,
      startY,
      initialX,
      initialY,
      initialWidth,
      initialHeight,
      initialRotation,
    } = dragRef.current;

    const dx = (e.clientX - startX) / canvasScale;
    const dy = (e.clientY - startY) / canvasScale;

    if (isDragging) {
      onUpdateObject({
        ...selectedObj,
        x: initialX + dx,
        y: initialY + dy,
      });
    } else if (isResizing) {
      const newWidth = Math.max(35, initialWidth + dx);
      const newHeight = Math.max(35, initialHeight + dy);
      onUpdateObject({
        ...selectedObj,
        width: newWidth,
        height: newHeight,
      });
    } else if (isRotating) {
      const centerX = initialX + initialWidth / 2;
      const centerY = initialY + initialHeight / 2;
      const rad = Math.atan2(e.clientY / canvasScale - centerY, e.clientX / canvasScale - centerX);
      const deg = Math.round((rad * 180) / Math.PI);
      onUpdateObject({
        ...selectedObj,
        rotation: deg,
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
    dragRef.current.isDragging = false;
    dragRef.current.isResizing = false;
    dragRef.current.isRotating = false;
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-visible"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* Placed objects sorted by zIndex */}
      {objects
        .slice()
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((obj) => {
          const isSelected = selectedObjectId === obj.id;
          const aliveClass = obj.isAlive && obj.aliveAnimation
            ? ALIVE_PRESETS.find((p) => p.id === obj.aliveAnimation)?.cssClass || 'animate-wiggle'
            : '';

          return (
            <div
              key={obj.id}
              className={`absolute cursor-move pointer-events-auto transition-shadow ${
                isSelected ? 'ring-4 ring-amber-400 rounded-2xl z-40' : ''
              }`}
              style={{
                left: `${obj.x}px`,
                top: `${obj.y}px`,
                width: `${obj.width}px`,
                height: `${obj.height}px`,
                transform: `rotate(${obj.rotation}deg)`,
                color: obj.color || '#F59E0B',
              }}
              onPointerDown={(e) => handlePointerDownMove(e, obj)}
            >
              {/* Inner object graphic */}
              <div
                className={`w-full h-full flex items-center justify-center ${aliveClass}`}
                dangerouslySetInnerHTML={{ __html: obj.svgContent }}
              />

              {/* Selection Bounding Box & Touch Controls */}
              {isSelected && (
                <>
                  {/* Top Rotate Handle */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center cursor-grab shadow-lg pointer-events-auto active:scale-125"
                    onPointerDown={(e) => handlePointerDownRotate(e, obj)}
                    title="Rotate"
                  >
                    <RotateCw className="w-4 h-4 text-amber-950" />
                  </div>

                  {/* Bottom-Right Scale/Resize Handle */}
                  <div
                    className="absolute -bottom-3 -right-3 w-8 h-8 bg-amber-400 border-2 border-white rounded-full flex items-center justify-center cursor-nwse-resize shadow-lg pointer-events-auto active:scale-125"
                    onPointerDown={(e) => handlePointerDownResize(e, obj)}
                    title="Resize"
                  >
                    <Maximize2 className="w-4 h-4 text-amber-950" />
                  </div>

                  {/* Context Action Bar on top */}
                  <div
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur border-2 border-amber-300 rounded-2xl p-1.5 shadow-xl flex items-center gap-1.5 pointer-events-auto whitespace-nowrap z-50 animate-fade-in"
                    onPointerDown={(e) => e.stopPropagation()}
                  >
                    {/* Make It Alive button */}
                    <button
                      onClick={() => {
                        sound.sparkle();
                        setShowAliveMenu(!showAliveMenu);
                        setShowColorMenu(false);
                      }}
                      className={`btn-bubbly p-1.5 rounded-xl border flex items-center gap-1 text-xs font-bold ${
                        obj.isAlive
                          ? 'bg-amber-400 text-amber-950 border-amber-500 animate-pulse'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                      }`}
                      title="Make It Alive Animation"
                    >
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>{obj.isAlive ? 'Alive ✨' : 'Make Alive'}</span>
                    </button>

                    {/* Recolor if shape */}
                    {obj.type === 'shape' && (
                      <button
                        onClick={() => {
                          sound.pop();
                          setShowColorMenu(!showColorMenu);
                          setShowAliveMenu(false);
                        }}
                        className="btn-bubbly p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                        title="Recolor Shape"
                      >
                        <Palette className="w-4 h-4 text-purple-600" />
                      </button>
                    )}

                    {/* Layer Up */}
                    <button
                      onClick={() => {
                        sound.pop();
                        onBringForward(obj.id);
                      }}
                      className="btn-bubbly p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                      title="Bring Forward"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>

                    {/* Layer Down */}
                    <button
                      onClick={() => {
                        sound.pop();
                        onSendBackward(obj.id);
                      }}
                      className="btn-bubbly p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                      title="Send Backward"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>

                    {/* Duplicate */}
                    <button
                      onClick={() => {
                        sound.pop();
                        onDuplicateObject(obj.id);
                      }}
                      className="btn-bubbly p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                      title="Duplicate"
                    >
                      <Copy className="w-4 h-4 text-blue-600" />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => {
                        sound.erase();
                        onDeleteObject(obj.id);
                      }}
                      className="btn-bubbly p-1.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-600 border border-rose-200"
                      title="Delete Object"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Make It Alive Preset Picker Popover */}
                  {showAliveMenu && (
                    <div
                      className="absolute -bottom-36 left-1/2 -translate-x-1/2 bg-white border-2 border-amber-300 rounded-2xl p-2 shadow-2xl flex gap-2 pointer-events-auto z-50 animate-bounce-in"
                      onPointerDown={(e) => e.stopPropagation()}
                    >
                      {ALIVE_PRESETS.map((preset) => (
                        <button
                          key={preset.id}
                          onClick={() => {
                            sound.sparkle();
                            onUpdateObject({
                              ...obj,
                              isAlive: true,
                              aliveAnimation: preset.id,
                            });
                            setShowAliveMenu(false);
                          }}
                          className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all ${
                            obj.isAlive && obj.aliveAnimation === preset.id
                              ? 'bg-amber-100 border-amber-400 scale-105'
                              : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                          }`}
                        >
                          <span className="text-xl">{preset.emoji}</span>
                          <span className="text-[10px] font-bold text-slate-700 whitespace-nowrap">
                            {preset.name}
                          </span>
                        </button>
                      ))}
                      {obj.isAlive && (
                        <button
                          onClick={() => {
                            sound.pop();
                            onUpdateObject({
                              ...obj,
                              isAlive: false,
                            });
                            setShowAliveMenu(false);
                          }}
                          className="px-2 py-1 bg-rose-100 text-rose-700 rounded-xl text-xs font-bold"
                        >
                          Stop
                        </button>
                      )}
                    </div>
                  )}

                  {/* Recolor Popover for Shapes */}
                  {showColorMenu && obj.type === 'shape' && (
                    <div
                      className="absolute -bottom-32 left-1/2 -translate-x-1/2 bg-white border-2 border-amber-300 rounded-2xl p-2 shadow-2xl flex gap-1.5 pointer-events-auto z-50 animate-bounce-in"
                      onPointerDown={(e) => e.stopPropagation()}
                    >
                      {ALL_QUICK_COLORS.slice(0, 7).map((color) => (
                        <button
                          key={color}
                          onClick={() => {
                            sound.pop();
                            onUpdateObject({
                              ...obj,
                              color: color,
                            });
                            setShowColorMenu(false);
                          }}
                          className="w-7 h-7 rounded-full border-2 border-black/20 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};
