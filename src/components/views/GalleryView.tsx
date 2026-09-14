import React, { useState } from 'react';
import { Artwork } from '../../types/drawing';
import { sound } from '../../services/soundEngine';
import { exportCanvasAsPng, shareArtwork } from '../../services/storage';
import {
  Download,
  Share2,
  Trash2,
  Copy,
  Pencil,
  Play,
  Sparkles,
  Images,
} from 'lucide-react';

interface GalleryViewProps {
  artworks: Artwork[];
  onOpenArtwork: (artwork: Artwork) => void;
  onDuplicateArtwork: (id: string) => void;
  onDeleteArtwork: (id: string) => void;
  onRenameArtwork: (id: string, newTitle: string) => void;
  onStartNewDrawing: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({
  artworks,
  onOpenArtwork,
  onDuplicateArtwork,
  onDeleteArtwork,
  onRenameArtwork,
  onStartNewDrawing,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState<string>('');

  const handleStartRename = (art: Artwork) => {
    sound.pop();
    setEditingId(art.id);
    setEditTitle(art.title);
  };

  const handleSaveRename = (id: string) => {
    sound.pop();
    if (editTitle.trim()) {
      onRenameArtwork(id, editTitle.trim());
    }
    setEditingId(null);
  };

  const handleDownload = (art: Artwork) => {
    sound.cheer();
    // Convert data URL to temporary image/canvas for export
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.width || 800;
      c.height = img.height || 800;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = art.backgroundColor || '#FFFFFF';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0);
        exportCanvasAsPng(c, art.title);
      }
    };
    img.src = art.canvasDataUrl;
  };

  const handleShare = async (art: Artwork) => {
    sound.pop();
    const img = new Image();
    img.onload = async () => {
      const c = document.createElement('canvas');
      c.width = img.width || 800;
      c.height = img.height || 800;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.fillStyle = art.backgroundColor || '#FFFFFF';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0);
        await shareArtwork(c, art.title);
      }
    };
    img.src = art.canvasDataUrl;
  };

  return (
    <div className="w-full h-full overflow-y-auto px-4 py-6 md:py-8 flex flex-col items-center max-w-6xl mx-auto select-none">
      {/* Header */}
      <div className="text-center mb-6 flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🖼️</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            My Art Gallery
          </h2>
          <span className="text-3xl">⭐</span>
        </div>
        <p className="text-sm md:text-base font-semibold text-slate-600">
          All your wonderful drawings are saved here automatically!
        </p>
      </div>

      {/* Empty State */}
      {artworks.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center bg-white border-4 border-amber-300 rounded-4xl shadow-xl max-w-md my-auto">
          <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-5xl mb-4 border-4 border-amber-200 animate-bounce-slow">
            🎨
          </div>
          <h3 className="text-2xl font-extrabold text-slate-800 mb-2">
            Your art will appear here! 🎨
          </h3>
          <p className="text-sm text-slate-600 font-semibold mb-6">
            Pick your favorite colors and brushes to create your first masterpiece!
          </p>
          <button
            onClick={() => {
              sound.pop();
              onStartNewDrawing();
            }}
            className="btn-bubbly bg-amber-400 hover:bg-amber-300 text-amber-950 font-extrabold text-lg py-4 px-8 rounded-3xl shadow-lg flex items-center gap-2"
          >
            <Sparkles className="w-6 h-6" />
            <span>START DRAWING</span>
          </button>
        </div>
      ) : (
        /* Artwork Cards Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full pb-20">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="bg-white border-4 border-amber-200 hover:border-amber-400 rounded-3xl p-3.5 shadow-md flex flex-col gap-3 transition-all hover:shadow-lg"
            >
              {/* Thumbnail Container */}
              <div
                onClick={() => {
                  sound.pop();
                  onOpenArtwork(art);
                }}
                className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-slate-100 cursor-pointer relative group flex items-center justify-center bg-amber-50"
                style={{ backgroundColor: art.backgroundColor || '#FFFFFF' }}
              >
                <img
                  src={art.canvasDataUrl}
                  alt={art.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />

                {/* Hover overlay with continue button */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <div className="bg-amber-400 text-amber-950 font-extrabold px-4 py-2 rounded-2xl flex items-center gap-1.5 shadow-md">
                    <Play className="w-4 h-4 fill-current" />
                    <span>Continue</span>
                  </div>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="flex flex-col gap-1">
                {editingId === art.id ? (
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      onBlur={() => handleSaveRename(art.id)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSaveRename(art.id)}
                      className="w-full text-sm font-bold border-2 border-amber-400 rounded-xl px-2 py-1 focus:outline-none"
                      autoFocus
                    />
                    <button
                      onClick={() => handleSaveRename(art.id)}
                      className="px-2 py-1 bg-amber-400 text-amber-950 rounded-xl text-xs font-bold"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-800 text-base truncate">
                      {art.title}
                    </h3>
                    <button
                      onClick={() => handleStartRename(art)}
                      className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600"
                      title="Rename"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
                <span className="text-[11px] font-semibold text-slate-400">
                  {new Date(art.updatedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleDownload(art)}
                    className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl"
                    title="Download PNG"
                  >
                    <Download className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleShare(art)}
                    className="p-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl"
                    title="Share Artwork"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      sound.pop();
                      onDuplicateArtwork(art.id);
                    }}
                    className="p-2 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-xl"
                    title="Duplicate Copy"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => {
                    sound.erase();
                    onDeleteArtwork(art.id);
                  }}
                  className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
