import React, { useState } from 'react';
import { CHARACTER_PARTS, CharacterPart, CharacterCategory } from '../../data/characterParts';
import { PlacedObject } from '../../types/drawing';
import { sound } from '../../services/soundEngine';
import { Sparkles, ArrowRight, RefreshCw, Check } from 'lucide-react';

interface CreateViewProps {
  onOpenCharacterInCanvas: (objects: PlacedObject[]) => void;
  onOpenFreeScene: () => void;
}

const CATEGORIES: { id: CharacterCategory; label: string; emoji: string }[] = [
  { id: 'body', label: 'Body', emoji: '🧍' },
  { id: 'eyes', label: 'Eyes', emoji: '👀' },
  { id: 'mouth', label: 'Mouth', emoji: '👄' },
  { id: 'hair', label: 'Hair', emoji: '💇' },
  { id: 'hats', label: 'Hats', emoji: '🎩' },
  { id: 'wings', label: 'Wings', emoji: '🪽' },
  { id: 'tails', label: 'Tails', emoji: '🦊' },
];

export const CreateView: React.FC<CreateViewProps> = ({
  onOpenCharacterInCanvas,
  onOpenFreeScene,
}) => {
  const [activeTab, setActiveTab] = useState<'character' | 'scene'>('character');
  const [selectedCategory, setSelectedCategory] = useState<CharacterCategory>('body');

  // Selected components map: category -> CharacterPart
  const [chosenParts, setChosenParts] = useState<Record<string, CharacterPart>>({
    body: CHARACTER_PARTS.find((p) => p.id === 'body-kitty')!,
    eyes: CHARACTER_PARTS.find((p) => p.id === 'eyes-anime')!,
    mouth: CHARACTER_PARTS.find((p) => p.id === 'mouth-toothy')!,
  });

  const handleSelectPart = (part: CharacterPart) => {
    sound.pop();
    setChosenParts((prev) => ({
      ...prev,
      [part.category]: part,
    }));
  };

  const handleRemovePart = (cat: CharacterCategory) => {
    if (cat === 'body') return; // Keep body
    sound.erase();
    setChosenParts((prev) => {
      const next = { ...prev };
      delete next[cat];
      return next;
    });
  };

  const handleRandomize = () => {
    sound.sparkle();
    const newParts: Record<string, CharacterPart> = {};
    CATEGORIES.forEach((cat) => {
      const partsInCat = CHARACTER_PARTS.filter((p) => p.category === cat.id);
      if (partsInCat.length > 0) {
        if (cat.id === 'body' || Math.random() > 0.4) {
          const randomPart = partsInCat[Math.floor(Math.random() * partsInCat.length)];
          newParts[cat.id] = randomPart;
        }
      }
    });
    setChosenParts(newParts);
  };

  const handleDone = () => {
    sound.cheer();
    // Convert chosen parts into PlacedObjects for DrawingCanvas
    const objects: PlacedObject[] = Object.values(chosenParts).map((part) => ({
      id: `char_${part.id}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      type: 'characterPart',
      category: part.category,
      svgContent: part.svg,
      name: part.name,
      x: part.defaultX,
      y: part.defaultY,
      width: part.defaultWidth,
      height: part.defaultHeight,
      rotation: 0,
      scale: 1,
      zIndex: part.zIndex,
      isAlive: true,
      aliveAnimation: 'wiggle',
    }));

    onOpenCharacterInCanvas(objects);
  };

  return (
    <div className="w-full h-full overflow-y-auto px-4 py-6 md:py-8 flex flex-col items-center max-w-5xl mx-auto select-none">
      {/* Sub-mode switcher */}
      <div className="flex bg-white p-1.5 rounded-3xl border-4 border-purple-300 shadow-md mb-6 gap-2">
        <button
          onClick={() => {
            sound.pop();
            setActiveTab('character');
          }}
          className={`px-5 py-2.5 rounded-2xl font-bold text-sm md:text-base transition-all ${
            activeTab === 'character'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🧍 Build Character
        </button>
        <button
          onClick={() => {
            sound.pop();
            onOpenFreeScene();
          }}
          className={`px-5 py-2.5 rounded-2xl font-bold text-sm md:text-base transition-all ${
            activeTab === 'scene'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🌄 Free Scene Playground
        </button>
      </div>

      {/* Character Builder Studio */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left / Top: Live Character Stage */}
        <div className="md:col-span-6 flex flex-col items-center gap-4">
          <div className="relative w-full max-w-sm aspect-square bg-gradient-to-b from-purple-100 to-pink-50 rounded-4xl border-8 border-white shadow-xl overflow-hidden flex items-center justify-center p-4">
            {/* Render chosen parts stacked by zIndex */}
            {Object.values(chosenParts)
              .sort((a, b) => a.zIndex - b.zIndex)
              .map((part) => (
                <div
                  key={part.id}
                  className="absolute animate-wiggle"
                  style={{
                    left: `${(part.defaultX / 500) * 100}%`,
                    top: `${(part.defaultY / 500) * 100}%`,
                    width: `${(part.defaultWidth / 500) * 100}%`,
                    height: `${(part.defaultHeight / 500) * 100}%`,
                    zIndex: part.zIndex,
                  }}
                  dangerouslySetInnerHTML={{ __html: part.svg }}
                />
              ))}

            {/* Sparkle badge */}
            <div className="absolute top-3 left-3 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-purple-800 border border-purple-200">
              Live Preview ✨
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 w-full max-w-sm">
            <button
              onClick={handleRandomize}
              className="btn-bubbly flex-1 bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 text-amber-900 font-bold py-3 rounded-2xl flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Surprise Me!</span>
            </button>

            <button
              onClick={handleDone}
              className="btn-bubbly flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md text-sm md:text-base"
            >
              <span>Play With Character</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right: Component Picker Categories & Items */}
        <div className="md:col-span-6 bg-white border-4 border-purple-200 rounded-3xl p-4 md:p-6 shadow-md flex flex-col gap-4">
          <h3 className="font-extrabold text-lg md:text-xl text-slate-800">
            Pick Character Parts
          </h3>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.pop();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-full font-bold text-xs md:text-sm whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-sm scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="mr-1">{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Items in Category */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-72 overflow-y-auto p-1">
            {CHARACTER_PARTS.filter((p) => p.category === selectedCategory).map((part) => {
              const isSelected = chosenParts[part.category]?.id === part.id;
              return (
                <button
                  key={part.id}
                  onClick={() => handleSelectPart(part)}
                  className={`btn-bubbly rounded-2xl p-3 border-4 flex flex-col items-center gap-2 transition-all active:scale-95 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 ring-4 ring-purple-200 scale-105 shadow-md'
                      : 'border-slate-200 hover:border-purple-300 bg-slate-50'
                  }`}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center pointer-events-none"
                    dangerouslySetInnerHTML={{ __html: part.svg }}
                  />
                  <span className="text-xs font-bold text-slate-800 truncate w-full text-center">
                    {part.name}
                  </span>
                  {isSelected && (
                    <span className="text-xs bg-purple-600 text-white rounded-full px-2 py-0.5 font-bold">
                      Equipped
                    </span>
                  )}
                </button>
              );
            })}

            {/* Option to clear accessory/wings/hat */}
            {selectedCategory !== 'body' && chosenParts[selectedCategory] && (
              <button
                onClick={() => handleRemovePart(selectedCategory)}
                className="btn-bubbly rounded-2xl p-3 border-4 border-rose-200 bg-rose-50 flex flex-col items-center justify-center gap-2 text-rose-700 font-bold text-xs"
              >
                <span>❌ None</span>
                <span>Remove {selectedCategory}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
