import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '../../services/soundEngine';
import { Sparkles, Download, ArrowRight, Paintbrush } from 'lucide-react';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  onSaveToGallery?: () => void;
  onContinueDrawing?: () => void;
  onNextActivity?: () => void;
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  isOpen,
  onClose,
  title = 'You Made It! 🌟',
  message = 'So creative! Look at what an incredible masterpiece you created!',
  onSaveToGallery,
  onContinueDrawing,
  onNextActivity,
}) => {
  useEffect(() => {
    if (isOpen) {
      sound.cheer();
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF66C4', '#FFDE59', '#5CE1E6', '#7ED957', '#FF914D'],
        });
      } catch {}
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in select-none">
      <div className="bg-white border-4 border-amber-400 rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-md text-center flex flex-col items-center gap-4 animate-bounce-in">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center border-4 border-amber-300 shadow-md">
          <span className="text-4xl animate-bounce">🏆</span>
        </div>

        <h2 className="font-extrabold text-2xl md:text-3xl text-slate-800 tracking-wide">
          {title}
        </h2>

        <p className="text-base md:text-lg text-slate-600 font-semibold leading-relaxed">
          {message}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
          {onSaveToGallery && (
            <button
              onClick={() => {
                sound.pop();
                onSaveToGallery();
                onClose();
              }}
              className="btn-bubbly flex-1 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-md text-base active:translate-y-1"
            >
              <Download className="w-5 h-5" />
              <span>Save Art</span>
            </button>
          )}

          {onContinueDrawing && (
            <button
              onClick={() => {
                sound.pop();
                onContinueDrawing();
                onClose();
              }}
              className="btn-bubbly flex-1 bg-sky-400 hover:bg-sky-300 text-white font-bold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-md text-base active:translate-y-1"
            >
              <Paintbrush className="w-5 h-5" />
              <span>Keep Drawing</span>
            </button>
          )}

          {onNextActivity && (
            <button
              onClick={() => {
                sound.pop();
                onNextActivity();
                onClose();
              }}
              className="btn-bubbly flex-1 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-md text-base active:translate-y-1"
            >
              <Sparkles className="w-5 h-5" />
              <span>Next</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
