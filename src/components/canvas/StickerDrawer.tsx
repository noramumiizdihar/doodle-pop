import React, { useState } from 'react';
import { STICKERS, StickerDef } from '../../data/stickers';
import { SHAPES, ShapeDef } from '../../data/shapes';
import { sound } from '../../services/soundEngine';
import { X, Sparkles } from 'lucide-react';

interface StickerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSticker: (sticker: StickerDef) => void;
  onAddShape: (shape: ShapeDef) => void;
}

const CATEGORIES = ['All', 'Shapes', 'Faces', 'Characters', 'Accessories', 'Nature', 'Objects', 'Decorations'];

export const StickerDrawer: React.FC<StickerDrawerProps> = ({
  isOpen,
  onClose,
  onAddSticker,
  onAddShape,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border-4 border-amber-300 rounded-3xl p-4 md:p-6 shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-amber-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl">⭐</span>
            <h2 className="font-bold text-xl md:text-2xl text-slate-800">Add Shapes & Stickers</h2>
          </div>
          <button
            onClick={() => {
              sound.pop();
              onClose();
            }}
            className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600"
            aria-label="Close stickers"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.pop();
                setSelectedCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-amber-950 shadow-md scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="overflow-y-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 p-1 max-h-[50vh]">
          {/* Shapes section */}
          {(selectedCategory === 'All' || selectedCategory === 'Shapes') &&
            SHAPES.map((shape) => (
              <button
                key={shape.id}
                onClick={() => {
                  sound.pop();
                  onAddShape(shape);
                  onClose();
                }}
                className="btn-bubbly bg-amber-50 hover:bg-amber-100 border-2 border-amber-200 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 transition-transform active:scale-95 group"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform"
                  dangerouslySetInnerHTML={{
                    __html: `<svg viewBox="0 0 130 130" width="100%" height="100%">${shape.svg}</svg>`,
                  }}
                />
                <span className="text-xs font-bold text-slate-700">{shape.name}</span>
              </button>
            ))}

          {/* Stickers section */}
          {STICKERS.filter(
            (st) => selectedCategory === 'All' || selectedCategory === st.category
          ).map((st) => (
            <button
              key={st.id}
              onClick={() => {
                sound.pop();
                onAddSticker(st);
                onClose();
              }}
              className="btn-bubbly bg-slate-50 hover:bg-pink-50 border-2 border-slate-200 hover:border-pink-300 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 transition-transform active:scale-95 group"
            >
              <div
                className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform"
                dangerouslySetInnerHTML={{ __html: st.svg }}
              />
              <span className="text-xs font-bold text-slate-700 truncate w-full text-center">
                {st.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
