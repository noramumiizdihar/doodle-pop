import React, { useState } from 'react';
import { COLORING_PAGES, COLORING_CATEGORIES, ColoringPage } from '../../data/coloringPages';
import { sound } from '../../services/soundEngine';
import { Palette, Sparkles } from 'lucide-react';

interface ColorViewProps {
  onSelectColoringPage: (page: ColoringPage) => void;
}

export const ColorView: React.FC<ColorViewProps> = ({ onSelectColoringPage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPages =
    selectedCategory === 'All'
      ? COLORING_PAGES
      : COLORING_PAGES.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full h-full overflow-y-auto px-4 py-6 md:py-8 flex flex-col items-center max-w-6xl mx-auto select-none">
      {/* View Header */}
      <div className="text-center mb-6 flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🎨</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Magic Coloring Library
          </h2>
          <span className="text-3xl">✨</span>
        </div>
        <p className="text-sm md:text-base font-semibold text-slate-600">
          Tap any picture to color with the magic bucket or crayon brush!
        </p>
      </div>

      {/* Category Pills Slider */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar w-full py-2 mb-6">
        <button
          onClick={() => {
            sound.pop();
            setSelectedCategory('All');
          }}
          className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
            selectedCategory === 'All'
              ? 'bg-pink-500 text-white shadow-md scale-105'
              : 'bg-white text-slate-700 hover:bg-slate-100 border-2 border-pink-200'
          }`}
        >
          🌟 All Pictures ({COLORING_PAGES.length})
        </button>

        {COLORING_CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            onClick={() => {
              sound.pop();
              setSelectedCategory(cat.name);
            }}
            className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
              selectedCategory === cat.name
                ? 'bg-pink-500 text-white shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-100 border-2 border-pink-200'
            }`}
          >
            <span className="mr-1">{cat.emoji}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Coloring Pages Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full pb-16">
        {filteredPages.map((page) => (
          <button
            key={page.id}
            onClick={() => {
              sound.pop();
              onSelectColoringPage(page);
            }}
            className="btn-bubbly bg-white border-4 border-pink-200 hover:border-pink-400 rounded-3xl p-3 flex flex-col items-center gap-2 group transition-all active:scale-95 shadow-md"
          >
            {/* SVG Preview Box */}
            <div className="w-full aspect-square bg-amber-50/50 rounded-2xl overflow-hidden p-2 flex items-center justify-center border-2 border-pink-100 group-hover:scale-105 transition-transform">
              <div
                className="w-full h-full pointer-events-none"
                dangerouslySetInnerHTML={{ __html: page.svgContent }}
              />
            </div>

            {/* Title & Emoji */}
            <div className="flex items-center gap-1 w-full justify-center text-center">
              <span className="text-base">{page.emoji}</span>
              <span className="font-bold text-xs sm:text-sm text-slate-800 truncate">
                {page.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
