import React from 'react';
import {
  Home,
  Undo2,
  Redo2,
  Volume2,
  VolumeX,
  Shield,
  Trash2,
  Download,
  Share2,
  Sparkles,
} from 'lucide-react';
import { sound } from '../services/soundEngine';

interface NavbarProps {
  title: string;
  emoji?: string;
  onGoHome: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
  onUndo?: () => void;
  onRedo?: () => void;
  onClear?: () => void;
  onSaveOrExport?: () => void;
  onShare?: () => void;
  onOpenParent: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  showCanvasControls?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  title,
  emoji,
  onGoHome,
  canUndo = false,
  canRedo = false,
  onUndo,
  onRedo,
  onClear,
  onSaveOrExport,
  onShare,
  onOpenParent,
  isMuted,
  onToggleMute,
  showCanvasControls = false,
}) => {
  return (
    <header className="h-16 md:h-20 bg-white/95 backdrop-blur border-b-4 border-amber-200 px-3 md:px-6 flex items-center justify-between shrink-0 shadow-sm z-30 select-none">
      {/* Left: Home Button + Title */}
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={() => {
            sound.pop();
            onGoHome();
          }}
          className="btn-bubbly bg-amber-400 hover:bg-amber-300 text-amber-950 p-2.5 md:p-3 rounded-2xl flex items-center gap-2 font-bold shadow-md active:translate-y-1"
          title="Back to Home"
          aria-label="Back to Home"
        >
          <Home className="w-6 h-6 md:w-7 md:h-7" />
          <span className="hidden sm:inline font-bold text-base md:text-lg">Home</span>
        </button>

        <div className="flex items-center gap-2">
          {emoji && <span className="text-2xl md:text-3xl animate-bounce-slow">{emoji}</span>}
          <h1 className="font-bold text-lg md:text-2xl text-slate-800 tracking-wide truncate max-w-[140px] sm:max-w-[240px] md:max-w-xs">
            {title}
          </h1>
        </div>
      </div>

      {/* Center: Canvas Undo / Redo / Clear (if in drawing mode) */}
      {showCanvasControls && (
        <div className="flex items-center gap-1.5 md:gap-3">
          <button
            onClick={() => {
              if (canUndo && onUndo) {
                sound.pop();
                onUndo();
              }
            }}
            disabled={!canUndo}
            className={`btn-bubbly p-2 md:p-3 rounded-2xl border-2 flex items-center justify-center transition-all ${
              canUndo
                ? 'bg-sky-400 hover:bg-sky-300 text-white border-sky-500 active:translate-y-1 cursor-pointer'
                : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
            title="Undo (Ctrl+Z)"
            aria-label="Undo"
          >
            <Undo2 className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => {
              if (canRedo && onRedo) {
                sound.pop();
                onRedo();
              }
            }}
            disabled={!canRedo}
            className={`btn-bubbly p-2 md:p-3 rounded-2xl border-2 flex items-center justify-center transition-all ${
              canRedo
                ? 'bg-sky-400 hover:bg-sky-300 text-white border-sky-500 active:translate-y-1 cursor-pointer'
                : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
            title="Redo (Ctrl+Y)"
            aria-label="Redo"
          >
            <Redo2 className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {onClear && (
            <button
              onClick={() => {
                sound.pop();
                onClear();
              }}
              className="btn-bubbly bg-rose-100 hover:bg-rose-200 text-rose-600 border-2 border-rose-300 p-2 md:p-3 rounded-2xl active:translate-y-1 transition-all"
              title="Clear Canvas"
              aria-label="Clear Canvas"
            >
              <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}
        </div>
      )}

      {/* Right: Export, Share, Sound, Parent Mode */}
      <div className="flex items-center gap-1.5 md:gap-3">
        {showCanvasControls && onSaveOrExport && (
          <button
            onClick={() => {
              sound.cheer();
              onSaveOrExport();
            }}
            className="btn-bubbly bg-emerald-500 hover:bg-emerald-400 text-white px-3 md:px-4 py-2 md:py-2.5 rounded-2xl font-bold flex items-center gap-1.5 shadow-md active:translate-y-1"
            title="Download Artwork"
            aria-label="Download Artwork"
          >
            <Download className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden md:inline text-base">Save</span>
          </button>
        )}

        {showCanvasControls && onShare && (
          <button
            onClick={() => {
              sound.pop();
              onShare();
            }}
            className="btn-bubbly bg-purple-500 hover:bg-purple-400 text-white p-2 md:p-2.5 rounded-2xl active:translate-y-1 shadow-md"
            title="Share Art"
            aria-label="Share Art"
          >
            <Share2 className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        )}

        {/* Mute Toggle */}
        <button
          onClick={onToggleMute}
          className={`btn-bubbly p-2 md:p-2.5 rounded-2xl border-2 transition-all ${
            isMuted
              ? 'bg-rose-100 text-rose-500 border-rose-300'
              : 'bg-amber-100 text-amber-700 border-amber-300 hover:bg-amber-200'
          }`}
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
        >
          {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6" />}
        </button>

        {/* Parent Mode Lock */}
        <button
          onClick={() => {
            sound.pop();
            onOpenParent();
          }}
          className="btn-bubbly bg-indigo-100 hover:bg-indigo-200 text-indigo-700 border-2 border-indigo-300 p-2 md:p-2.5 rounded-2xl flex items-center gap-1 active:translate-y-1"
          title="Parent Settings"
          aria-label="Parent Settings"
        >
          <Shield className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden lg:inline font-bold text-sm">Parents</span>
        </button>
      </div>
    </header>
  );
};
