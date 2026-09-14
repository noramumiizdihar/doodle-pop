import React from 'react';
import { sound } from '../../services/soundEngine';
import { Trash2, Paintbrush } from 'lucide-react';

interface ClearConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ClearConfirmModal: React.FC<ClearConfirmModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in select-none">
      <div className="bg-white border-4 border-rose-300 rounded-3xl p-6 shadow-2xl w-full max-w-sm text-center flex flex-col items-center gap-4 animate-bounce-in">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center border-4 border-rose-300">
          <span className="text-3xl">🧼</span>
        </div>

        <h2 className="font-extrabold text-2xl text-slate-800">
          Start Fresh?
        </h2>

        <p className="text-sm text-slate-600 font-semibold">
          This will wipe your canvas so you can start a brand new drawing!
        </p>

        <div className="flex flex-col gap-2.5 w-full mt-2">
          <button
            onClick={() => {
              sound.pop();
              onCancel();
            }}
            className="btn-bubbly bg-sky-400 hover:bg-sky-300 text-white font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-md text-base"
          >
            <Paintbrush className="w-5 h-5" />
            <span>Keep Drawing! 🎨</span>
          </button>

          <button
            onClick={() => {
              sound.erase();
              onConfirm();
            }}
            className="btn-bubbly bg-rose-100 hover:bg-rose-200 text-rose-700 border-2 border-rose-300 font-bold py-2.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-sm"
          >
            <Trash2 className="w-4 h-4" />
            <span>Yes, Clean Canvas 🧼</span>
          </button>
        </div>
      </div>
    </div>
  );
};
