import React, { useState, useMemo } from 'react';
import { COLORING_PAGES, COLORING_CATEGORIES, ColoringPage } from '../../data/coloringPages';
import { sound } from '../../services/soundEngine';
import { Search, Sparkles, Shuffle, Paintbrush } from 'lucide-react';

interface ColorViewProps {
  onSelectColoringPage: (page: ColoringPage) => void;
}

export const ColorView: React.FC<ColorViewProps> = ({ onSelectColoringPage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPages = useMemo(() => {
    return COLORING_PAGES.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSurpriseMe = () => {
    sound.sparkle();
    const randomPage = COLORING_PAGES[Math.floor(Math.random() * COLORING_PAGES.length)];
    onSelectColoringPage(randomPage);
  };

  const getCategoryColor = (catName: string) => {
    const found = COLORING_CATEGORIES.find((c) => c.name === catName);
    return found ? found.color : '#FFFBEB';
  };

  return (
    <div className="w-full h-full overflow-y-auto px-4 py-6 md:py-8 flex flex-col items-center max-w-6xl mx-auto select-none">
      {/* View Header */}
      <div className="text-center mb-5 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-3xl md:text-4xl animate-bounce-slow">🎨</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-wide drop-shadow-sm">
            Magic Coloring Book
          </h2>
          <span className="text-3xl md:text-4xl animate-bounce-slow">✨</span>
        </div>
        <p className="text-sm md:text-lg font-bold text-slate-600">
          Pick any picture to fill with bright colors, magic rainbows, or waxy crayons!
        </p>
      </div>

      {/* Search & Surprise Bar */}
      <div className="w-full max-w-xl flex items-center gap-2.5 mb-5 px-1">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search puppy, dino, rocket, castle..."
            className="w-full bg-white border-3 border-pink-200 focus:border-pink-400 rounded-2xl pl-10 pr-4 py-2.5 text-sm md:text-base font-bold text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold text-xs bg-slate-100 px-2 py-0.5 rounded-full"
            >
              Clear
            </button>
          )}
        </div>

        <button
          onClick={handleSurpriseMe}
          className="btn-bubbly bg-gradient-to-r from-amber-400 to-pink-400 hover:from-amber-300 hover:to-pink-300 text-amber-950 font-extrabold px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-md text-sm md:text-base shrink-0 active:translate-y-1"
          title="Pick a random picture"
        >
          <Shuffle className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">Surprise Me!</span>
        </button>
      </div>

      {/* Category Pills Slider */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar w-full py-1 mb-6">
        <button
          onClick={() => {
            sound.pop();
            setSelectedCategory('All');
          }}
          className={`px-4 py-2 rounded-full font-extrabold text-sm whitespace-nowrap transition-all shadow-sm ${
            selectedCategory === 'All'
              ? 'bg-pink-500 text-white shadow-md scale-105 ring-4 ring-pink-200'
              : 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-pink-200'
          }`}
        >
          🌟 All ({COLORING_PAGES.length})
        </button>

        {COLORING_CATEGORIES.map((cat) => {
          const count = COLORING_PAGES.filter((p) => p.category === cat.name).length;
          const isSelected = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => {
                sound.pop();
                setSelectedCategory(cat.name);
              }}
              className={`px-4 py-2 rounded-full font-extrabold text-sm whitespace-nowrap transition-all flex items-center gap-1.5 shadow-sm ${
                isSelected
                  ? 'bg-pink-500 text-white shadow-md scale-105 ring-4 ring-pink-200'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-pink-200'
              }`}
            >
              <span className="text-base">{cat.emoji}</span>
              <span>{cat.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/30 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Empty Search State */}
      {filteredPages.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 bg-white border-4 border-pink-200 rounded-3xl text-center max-w-sm my-8">
          <span className="text-5xl mb-3">🔍</span>
          <h3 className="font-extrabold text-xl text-slate-800 mb-1">No pictures found</h3>
          <p className="text-sm font-semibold text-slate-500 mb-4">Try a different search word or select "All".</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="btn-bubbly bg-pink-500 text-white font-bold px-4 py-2 rounded-xl text-sm"
          >
            Show All Pictures
          </button>
        </div>
      ) : (
        /* Coloring Pages Grid */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 w-full pb-20">
          {filteredPages.map((page) => {
            const catBg = getCategoryColor(page.category);
            return (
              <button
                key={page.id}
                onClick={() => {
                  sound.sparkle();
                  onSelectColoringPage(page);
                }}
                className="btn-bubbly bg-white border-4 border-pink-200 hover:border-pink-400 rounded-3xl p-3 flex flex-col items-center gap-2.5 group transition-all active:scale-95 shadow-md hover:shadow-xl relative overflow-hidden"
              >
                {/* SVG Illustration Container with Pastel Backdrop */}
                <div
                  className="w-full aspect-square rounded-2xl overflow-hidden p-2.5 flex items-center justify-center border-2 border-black/5 group-hover:scale-105 transition-transform duration-200 relative"
                  style={{ backgroundColor: catBg }}
                >
                  <div
                    className="w-full h-full pointer-events-none drop-shadow-sm"
                    dangerouslySetInnerHTML={{ __html: page.svgContent }}
                  />

                  {/* Hover "Color Me!" Badge */}
                  <div className="absolute inset-0 bg-pink-500/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-pink-500 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 scale-90 group-hover:scale-100 transition-transform">
                      <Paintbrush className="w-3.5 h-3.5" />
                      <span>Color Me!</span>
                    </span>
                  </div>
                </div>

                {/* Title & Emoji */}
                <div className="flex flex-col items-center w-full px-1">
                  <div className="flex items-center gap-1.5 justify-center w-full">
                    <span className="text-base shrink-0">{page.emoji}</span>
                    <span className="font-extrabold text-xs sm:text-sm text-slate-800 truncate text-center">
                      {page.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    {page.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
