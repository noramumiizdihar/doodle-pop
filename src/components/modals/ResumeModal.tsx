import React from 'react';
import { sound } from '../../services/soundEngine';
import { Play, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onContinue: () => void;
  onStartNew: () => void;
  title?: string;
  thumbnail?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onContinue,
  onStartNew,
  title = 'My Drawing',
  thumbnail,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in select-none">
      <div className="bg-white border-4 border-amber-400 rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-sm text-center flex flex-col items-center gap-4 animate-bounce-in">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center border-4 border-amber-300">
          <span className="text-3xl">🎨</span>
        </div>

        <h2 className="font-extrabold text-2xl text-slate-800">
          Continue your drawing?
        </h2>

        {thumbnail ? (
          <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-amber-200 shadow-inner bg-amber-50 mx-auto my-1">
            <img src={thumbnail} alt="Previous Drawing" className="w-full h-full object-contain" />
          </div>
        ) : (
          <p className="text-sm text-slate-600 font-semibold">
            You were working on <strong className="text-amber-700">"{title}"</strong>!
          </p>
        )}

        <div className="flex flex-col gap-2.5 w-full mt-2">
          <button
            onClick={() => {
              sound.pop();
              onContinue();
            }}
            className="btn-bubbly bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-md text-base active:translate-y-1"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>CONTINUE</span>
          </button>

          <button
            onClick={() => {
              sound.pop();
              onStartNew();
            }}
            className="btn-bubbly bg-amber-100 hover:bg-amber-200 text-amber-900 border-2 border-amber-300 font-bold py-2.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm active:translate-y-1"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>START NEW</span>
          </button>
        </div>
      </div>
    </div>
  );
};
