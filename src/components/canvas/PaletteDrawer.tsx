import React, { useState } from 'react';
import { COLOR_PALETTES, ALL_QUICK_COLORS } from '../../data/palette';
import { sound } from '../../services/soundEngine';
import { Pipette, X } from 'lucide-react';

interface PaletteDrawerProps {
  currentColor: string;
  onSelectColor: (color: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const PaletteDrawer: React.FC<PaletteDrawerProps> = ({
  currentColor,
  onSelectColor,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'quick' | string>('quick');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-24 md:bottom-28 z-40 flex justify-center px-4 pointer-events-none animate-bounce-in">
      <div className="bg-white/95 backdrop-blur-md border-4 border-amber-300 rounded-3xl p-4 shadow-2xl w-full max-w-xl pointer-events-auto flex flex-col gap-3">
        {/* Header with tabs and close button */}
        <div className="flex items-center justify-between border-b-2 border-amber-100 pb-2">
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => {
                sound.pop();
                setActiveTab('quick');
              }}
              className={`px-3 py-1.5 rounded-full font-bold text-sm transition-all ${
                activeTab === 'quick'
                  ? 'bg-amber-400 text-amber-950 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🌈 Quick
            </button>
            {COLOR_PALETTES.map((pal) => (
              <button
                key={pal.category}
                onClick={() => {
                  sound.pop();
                  setActiveTab(pal.category);
                }}
                className={`px-3 py-1.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                  activeTab === pal.category
                    ? 'bg-amber-400 text-amber-950 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {pal.category}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              sound.pop();
              onClose();
            }}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500"
            aria-label="Close palette"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-6 sm:grid-cols-9 gap-2.5 max-h-48 overflow-y-auto p-1">
          {activeTab === 'quick' &&
            ALL_QUICK_COLORS.map((hex) => {
              const isSelected = currentColor.toLowerCase() === hex.toLowerCase();
              return (
                <button
                  key={hex}
                  onClick={() => {
                    sound.pop();
                    onSelectColor(hex);
                  }}
                  className={`w-11 h-11 rounded-2xl transition-transform active:scale-90 flex items-center justify-center border-4 shadow-sm ${
                    isSelected ? 'border-amber-400 scale-110 shadow-md ring-4 ring-amber-200' : 'border-black/10'
                  }`}
                  style={{ backgroundColor: hex }}
                  aria-label={`Color ${hex}`}
                >
                  {isSelected && <span className="text-sm drop-shadow font-bold text-white">✓</span>}
                </button>
              );
            })}

          {activeTab !== 'quick' &&
            COLOR_PALETTES.find((p) => p.category === activeTab)?.colors.map((c) => {
              const isSelected = currentColor.toLowerCase() === c.hex.toLowerCase();
              return (
                <button
                  key={c.hex}
                  onClick={() => {
                    sound.pop();
                    onSelectColor(c.hex);
                  }}
                  className={`w-11 h-11 rounded-2xl transition-transform active:scale-90 flex flex-col items-center justify-center border-4 shadow-sm relative group ${
                    isSelected ? 'border-amber-400 scale-110 shadow-md ring-4 ring-amber-200' : 'border-black/10'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                  aria-label={c.name}
                >
                  <span className="text-xs">{c.emoji}</span>
                  {isSelected && <span className="absolute -top-2 -right-2 bg-amber-400 text-amber-950 rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center">✓</span>}
                </button>
              );
            })}
        </div>

        {/* Custom Color Picker Bar */}
        <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-2 border-2 border-slate-200">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl border-2 border-black/20 shadow-inner"
              style={{ backgroundColor: currentColor }}
            />
            <span className="text-sm font-bold text-slate-700">Selected Color</span>
          </div>

          <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-xl border-2 border-amber-300 shadow-sm active:scale-95 transition-transform">
            <Pipette className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-bold text-amber-800">Pick Any Color</span>
            <input
              type="color"
              value={currentColor}
              onChange={(e) => {
                onSelectColor(e.target.value);
              }}
              className="opacity-0 w-0 h-0"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
