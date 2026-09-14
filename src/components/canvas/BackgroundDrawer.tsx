import React from 'react';
import { BACKGROUNDS, BackgroundDef } from '../../data/backgrounds';
import { sound } from '../../services/soundEngine';
import { X } from 'lucide-react';

interface BackgroundDrawerProps {
  currentBgColor: string;
  onSelectBackground: (bg: BackgroundDef) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const BackgroundDrawer: React.FC<BackgroundDrawerProps> = ({
  currentBgColor,
  onSelectBackground,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border-4 border-amber-300 rounded-3xl p-4 md:p-6 shadow-2xl w-full max-w-lg flex flex-col gap-4">
        <div className="flex items-center justify-between border-b-2 border-amber-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl">📜</span>
            <h2 className="font-bold text-xl text-slate-800">Canvas Paper Background</h2>
          </div>
          <button
            onClick={() => {
              sound.pop();
              onClose();
            }}
            className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600"
            aria-label="Close backgrounds"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto p-1">
          {BACKGROUNDS.map((bg) => {
            const isSelected = currentBgColor.toLowerCase() === bg.color.toLowerCase();
            return (
              <button
                key={bg.id}
                onClick={() => {
                  sound.pop();
                  onSelectBackground(bg);
                  onClose();
                }}
                className={`btn-bubbly rounded-2xl p-3 border-4 flex flex-col items-center gap-2 transition-transform active:scale-95 ${
                  isSelected
                    ? 'border-amber-400 ring-4 ring-amber-200 scale-105 shadow-md'
                    : 'border-slate-200 hover:border-amber-300'
                }`}
                style={{ backgroundColor: bg.color }}
              >
                <span className="text-2xl">{bg.emoji}</span>
                <span className={`text-xs font-bold ${bg.id === 'bg-night' ? 'text-white' : 'text-slate-800'}`}>
                  {bg.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
