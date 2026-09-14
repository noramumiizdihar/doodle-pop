import React from 'react';
import { BrushSize, BRUSH_SIZES } from '../../types/drawing';
import { sound } from '../../services/soundEngine';
import { X } from 'lucide-react';

interface SizeDrawerProps {
  currentSize: BrushSize;
  onSelectSize: (size: BrushSize) => void;
  currentColor: string;
  isOpen: boolean;
  onClose: () => void;
}

const SIZES: { id: BrushSize; label: string; previewPx: number; emoji: string }[] = [
  { id: 'tiny', label: 'Tiny', previewPx: 6, emoji: '🌱' },
  { id: 'small', label: 'Small', previewPx: 12, emoji: '🐣' },
  { id: 'medium', label: 'Medium', previewPx: 20, emoji: '🦊' },
  { id: 'large', label: 'Large', previewPx: 32, emoji: '🐻' },
  { id: 'xlarge', label: 'Super Big', previewPx: 48, emoji: '🐘' },
];

export const SizeDrawer: React.FC<SizeDrawerProps> = ({
  currentSize,
  onSelectSize,
  currentColor,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-24 md:bottom-28 z-40 flex justify-center px-4 pointer-events-none animate-bounce-in">
      <div className="bg-white/95 backdrop-blur-md border-4 border-amber-300 rounded-3xl p-4 shadow-2xl w-full max-w-md pointer-events-auto flex flex-col gap-3">
        <div className="flex items-center justify-between border-b-2 border-amber-100 pb-2">
          <span className="font-bold text-base text-slate-800 flex items-center gap-2">
            <span>✏️</span> Pick Brush Thickness
          </span>
          <button
            onClick={() => {
              sound.pop();
              onClose();
            }}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500"
            aria-label="Close size drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual size bubbles */}
        <div className="grid grid-cols-5 gap-2 py-2">
          {SIZES.map((s) => {
            const isSelected = currentSize === s.id;
            return (
              <button
                key={s.id}
                onClick={() => {
                  sound.pop();
                  onSelectSize(s.id);
                }}
                className={`flex flex-col items-center justify-center p-2 rounded-2xl border-4 transition-all active:scale-95 ${
                  isSelected
                    ? 'border-amber-400 bg-amber-50 shadow-md ring-4 ring-amber-200 scale-105'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                {/* Visual circle preview */}
                <div className="w-14 h-14 flex items-center justify-center">
                  <div
                    className="rounded-full shadow-sm"
                    style={{
                      width: `${s.previewPx}px`,
                      height: `${s.previewPx}px`,
                      backgroundColor: currentColor === '#FFFFFF' ? '#64748B' : currentColor,
                    }}
                  />
                </div>
                <span className="text-xs font-bold text-slate-700 mt-1">{s.label}</span>
                <span className="text-xs">{s.emoji}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
