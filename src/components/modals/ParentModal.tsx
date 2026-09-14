import React, { useState, useEffect } from 'react';
import { sound } from '../../services/soundEngine';
import { getStorageUsage, clearAllArtworks } from '../../services/storage';
import { Shield, X, Volume2, VolumeX, Trash2, CheckCircle2 } from 'lucide-react';

interface ParentModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onArtworksCleared: () => void;
}

export const ParentModal: React.FC<ParentModalProps> = ({
  isOpen,
  onClose,
  isMuted,
  onToggleMute,
  onArtworksCleared,
}) => {
  // Simple math challenge lock
  const [unlocked, setUnlocked] = useState(false);
  const [num1, setNum1] = useState(3);
  const [num2, setNum2] = useState(4);
  const [userAnswer, setUserAnswer] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Storage stats
  const [storageStats, setStorageStats] = useState({ count: 0, estimatedMb: '0 MB' });
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setUnlocked(false);
      const n1 = Math.floor(Math.random() * 5) + 3;
      const n2 = Math.floor(Math.random() * 5) + 2;
      setNum1(n1);
      setNum2(n2);
      setUserAnswer('');
      setErrorMsg('');
      setConfirmClear(false);
      getStorageUsage().then(setStorageStats);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleVerifyAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer.trim(), 10) === num1 + num2) {
      sound.pop();
      setUnlocked(true);
      setErrorMsg('');
    } else {
      sound.erase();
      setErrorMsg('Oops! Ask a grown-up to help with this question.');
      setUserAnswer('');
    }
  };

  const handleClearAll = async () => {
    sound.erase();
    await clearAllArtworks();
    setStorageStats({ count: 0, estimatedMb: '0 MB' });
    setConfirmClear(false);
    onArtworksCleared();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border-4 border-indigo-300 rounded-3xl p-6 shadow-2xl w-full max-w-md flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-indigo-100 pb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-7 h-7 text-indigo-600" />
            <h2 className="font-bold text-xl text-slate-800">Parents & Settings</h2>
          </div>
          <button
            onClick={() => {
              sound.pop();
              onClose();
            }}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500"
            aria-label="Close parent mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lock Challenge */}
        {!unlocked ? (
          <form onSubmit={handleVerifyAnswer} className="flex flex-col gap-4 py-2">
            <div className="bg-indigo-50 rounded-2xl p-4 text-center border-2 border-indigo-200">
              <p className="font-semibold text-slate-700 mb-2">Parent Gate: Please solve to enter</p>
              <div className="text-3xl font-extrabold text-indigo-700 tracking-wider my-2">
                {num1} + {num2} = ?
              </div>
              <input
                type="number"
                inputMode="numeric"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter answer"
                className="w-36 text-center text-2xl font-bold py-2 px-3 border-2 border-indigo-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-200"
                autoFocus
              />
              {errorMsg && <p className="text-rose-500 text-xs font-bold mt-2">{errorMsg}</p>}
            </div>

            <button
              type="submit"
              className="btn-bubbly bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-2xl shadow-md text-base"
            >
              Unlock Settings
            </button>
          </form>
        ) : (
          /* Unlocked Settings Dashboard */
          <div className="flex flex-col gap-4 py-1">
            {/* Audio Settings */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border-2 border-slate-200">
              <div className="flex items-center gap-2">
                {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-indigo-600" />}
                <div>
                  <div className="font-bold text-slate-800 text-sm">App Sound Effects</div>
                  <div className="text-xs text-slate-500">{isMuted ? 'Muted' : 'Sound ON'}</div>
                </div>
              </div>
              <button
                onClick={onToggleMute}
                className={`btn-bubbly px-4 py-1.5 rounded-xl font-bold text-xs border ${
                  isMuted ? 'bg-slate-200 text-slate-700' : 'bg-emerald-500 text-white'
                }`}
              >
                {isMuted ? 'Turn ON' : 'Mute'}
              </button>
            </div>

            {/* Storage Usage Overview */}
            <div className="p-3 rounded-2xl bg-slate-50 border-2 border-slate-200 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 text-sm">Saved Artwork Storage</span>
                <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-full">
                  {storageStats.count} Drawings ({storageStats.estimatedMb})
                </span>
              </div>
              <p className="text-xs text-slate-500">
                All drawings are saved locally on this device in high resolution using IndexedDB. No login or cloud account is required.
              </p>

              {confirmClear ? (
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-200">
                  <span className="text-xs font-bold text-rose-600">Delete all saved drawings?</span>
                  <button
                    onClick={handleClearAll}
                    className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={() => setConfirmClear(false)}
                    className="px-3 py-1 bg-slate-200 text-slate-700 rounded-xl text-xs"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmClear(true)}
                  className="mt-1 flex items-center justify-center gap-1.5 text-xs text-rose-600 font-bold hover:underline py-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All Saved Artworks</span>
                </button>
              )}
            </div>

            {/* Privacy & Safety Guarantee */}
            <div className="p-3 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-900 leading-relaxed">
                <strong className="block mb-0.5">100% Child-Safe Creative Playground:</strong>
                No personal tracking, no third-party advertisements, no external trackers, and full offline functionality.
              </div>
            </div>

            <button
              onClick={() => {
                sound.pop();
                onClose();
              }}
              className="btn-bubbly bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-2xl shadow-md text-base mt-2"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
