import React, { useState } from 'react';
import { ToolType, BrushSize } from '../../types/drawing';
import { sound } from '../../services/soundEngine';
import {
  Pencil,
  Paintbrush,
  Sparkles,
  PaintBucket,
  Eraser,
  Palette,
  CircleDot,
  Smile,
  Image as ImageIcon,
  ChevronUp,
} from 'lucide-react';

interface ToolbarProps {
  currentTool: ToolType;
  onSelectTool: (tool: ToolType) => void;
  currentSize: BrushSize;
  currentColor: string;
  onTogglePalette: () => void;
  onToggleSize: () => void;
  onToggleStickers: () => void;
  onToggleBackgrounds: () => void;
}

const TOOLS: { id: ToolType; label: string; icon: React.ReactNode; colorClass: string; isMagic?: boolean }[] = [
  { id: 'pencil', label: 'Pencil', icon: <Pencil className="w-5 h-5 md:w-6 md:h-6" />, colorClass: 'bg-amber-400 text-amber-950' },
  { id: 'crayon', label: 'Crayon', icon: <span className="text-xl">🖍️</span>, colorClass: 'bg-orange-400 text-orange-950' },
  { id: 'brush', label: 'Brush', icon: <Paintbrush className="w-5 h-5 md:w-6 md:h-6" />, colorClass: 'bg-sky-400 text-sky-950' },
  { id: 'marker', label: 'Marker', icon: <span className="text-xl">🖊️</span>, colorClass: 'bg-emerald-400 text-emerald-950' },
  { id: 'magic', label: 'Magic', icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />, colorClass: 'bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 text-white shadow-glow', isMagic: true },
  { id: 'fill', label: 'Fill', icon: <PaintBucket className="w-5 h-5 md:w-6 md:h-6" />, colorClass: 'bg-purple-400 text-purple-950' },
  { id: 'eraser', label: 'Eraser', icon: <Eraser className="w-5 h-5 md:w-6 md:h-6" />, colorClass: 'bg-rose-300 text-rose-950' },
];

export const Toolbar: React.FC<ToolbarProps> = ({
  currentTool,
  onSelectTool,
  currentSize,
  currentColor,
  onTogglePalette,
  onToggleSize,
  onToggleStickers,
  onToggleBackgrounds,
}) => {
  const [toolTrayOpen, setToolTrayOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 bottom-2 md:bottom-4 z-30 flex justify-center px-2 pointer-events-none select-none">
      <div className="bg-white/95 backdrop-blur-md border-4 border-amber-300 rounded-3xl p-2 md:p-3 shadow-xl pointer-events-auto flex items-center gap-1.5 md:gap-3 max-w-full overflow-x-auto no-scrollbar">
        {/* Active Tool / Tool Selector */}
        <div className="relative">
          <button
            onClick={() => {
              sound.pop();
              setToolTrayOpen(!toolTrayOpen);
            }}
            className="btn-bubbly bg-amber-400 hover:bg-amber-300 text-amber-950 px-2.5 md:px-3.5 py-2 md:py-2.5 rounded-2xl flex items-center gap-1.5 font-bold shadow-sm"
            title="Choose Drawing Tool"
            aria-label="Choose Drawing Tool"
          >
            {TOOLS.find((t) => t.id === currentTool)?.icon}
            <span className="text-xs md:text-sm capitalize font-bold hidden sm:inline">{currentTool}</span>
            <ChevronUp className={`w-4 h-4 transition-transform ${toolTrayOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Expanded Tool Tray Popup */}
          {toolTrayOpen && (
            <div className="absolute bottom-14 left-0 bg-white border-4 border-amber-300 rounded-3xl p-2 shadow-2xl flex flex-col gap-1.5 min-w-[130px] z-50 animate-bounce-in">
              {TOOLS.map((t) => {
                const isActive = currentTool === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      sound.pop();
                      onSelectTool(t.id);
                      setToolTrayOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-left font-bold text-sm transition-all ${
                      isActive
                        ? `${t.colorClass} scale-105 shadow-sm`
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    {t.icon}
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Tool Pills on Tablet/Desktop */}
        <div className="hidden lg:flex items-center gap-1.5 border-l-2 border-r-2 border-amber-200 px-2">
          {TOOLS.map((t) => {
            const isActive = currentTool === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  sound.pop();
                  onSelectTool(t.id);
                }}
                className={`btn-bubbly p-2 rounded-2xl transition-all flex items-center justify-center ${
                  isActive
                    ? `${t.colorClass} scale-110 shadow-md ring-4 ring-amber-200`
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
                title={t.label}
              >
                {t.icon}
              </button>
            );
          })}
        </div>

        {/* Color Palette Button */}
        <button
          onClick={() => {
            sound.pop();
            onTogglePalette();
          }}
          className="btn-bubbly bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 p-2 md:p-2.5 rounded-2xl flex items-center gap-2 shadow-sm active:translate-y-1"
          title="Pick Color"
          aria-label="Pick Color"
        >
          <div
            className="w-7 h-7 md:w-8 md:h-8 rounded-xl border-2 border-black/20 shadow-inner flex items-center justify-center"
            style={{ backgroundColor: currentColor }}
          >
            <Palette className={`w-4 h-4 ${currentColor === '#FFFFFF' || currentColor === '#FFDE59' ? 'text-black' : 'text-white'}`} />
          </div>
          <span className="text-xs md:text-sm font-bold text-slate-700 hidden sm:inline">Color</span>
        </button>

        {/* Brush Size Button */}
        <button
          onClick={() => {
            sound.pop();
            onToggleSize();
          }}
          className="btn-bubbly bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 p-2 md:p-2.5 rounded-2xl flex items-center gap-2 shadow-sm active:translate-y-1"
          title="Pick Brush Size"
          aria-label="Pick Brush Size"
        >
          <CircleDot className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
          <span className="text-xs md:text-sm font-bold text-slate-700 hidden sm:inline capitalize">{currentSize}</span>
        </button>

        {/* Stickers & Shapes Button */}
        <button
          onClick={() => {
            sound.pop();
            onToggleStickers();
          }}
          className="btn-bubbly bg-pink-100 hover:bg-pink-200 border-2 border-pink-300 text-pink-700 px-3 md:px-3.5 py-2 md:py-2.5 rounded-2xl flex items-center gap-1.5 font-bold shadow-sm active:translate-y-1"
          title="Add Stickers & Shapes"
          aria-label="Add Stickers & Shapes"
        >
          <Smile className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-xs md:text-sm">Stickers</span>
        </button>

        {/* Canvas Background Button */}
        <button
          onClick={() => {
            sound.pop();
            onToggleBackgrounds();
          }}
          className="btn-bubbly bg-sky-100 hover:bg-sky-200 border-2 border-sky-300 text-sky-700 p-2 md:p-2.5 rounded-2xl flex items-center gap-1.5 font-bold shadow-sm active:translate-y-1"
          title="Change Canvas Background"
          aria-label="Change Canvas Background"
        >
          <ImageIcon className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-xs md:text-sm hidden md:inline">Paper</span>
        </button>
      </div>
    </div>
  );
};
