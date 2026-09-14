import React from 'react';
import { sound } from '../../services/soundEngine';
import {
  Palette,
  Pencil,
  Sparkles,
  Trophy,
  Compass,
  Images,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: 'draw' | 'color' | 'create' | 'challenge' | 'adventure' | 'gallery') => void;
}

const MENU_CARDS = [
  {
    id: 'color' as const,
    title: 'COLOR',
    subtitle: '50+ Magic Coloring Pages',
    emoji: '🎨',
    icon: <Palette className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
    textColor: 'text-pink-900',
  },
  {
    id: 'draw' as const,
    title: 'DRAW',
    subtitle: 'Blank Canvas & Magic Brushes',
    emoji: '✏️',
    icon: <Pencil className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: 'from-amber-400 to-yellow-500',
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-950',
  },
  {
    id: 'create' as const,
    title: 'CREATE',
    subtitle: 'Characters, Shapes & Stickers',
    emoji: '🧩',
    icon: <Sparkles className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: 'from-purple-400 to-indigo-500',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-950',
  },
  {
    id: 'challenge' as const,
    title: 'CHALLENGE',
    subtitle: 'Mini-Games & Connect Dots',
    emoji: '🌟',
    icon: <Trophy className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-100',
    borderColor: 'border-emerald-300',
    textColor: 'text-emerald-950',
  },
  {
    id: 'adventure' as const,
    title: 'ADVENTURE',
    subtitle: 'Step-by-Step Story Worlds',
    emoji: '🚀',
    icon: <Compass className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: 'from-sky-400 to-blue-500',
    bgColor: 'bg-sky-100',
    borderColor: 'border-sky-300',
    textColor: 'text-sky-950',
  },
  {
    id: 'gallery' as const,
    title: 'MY ART',
    subtitle: 'Your Saved Masterpieces',
    emoji: '🖼️',
    icon: <Images className="w-10 h-10 md:w-12 md:h-12" />,
    gradient: 'from-orange-400 to-amber-500',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-300',
    textColor: 'text-orange-950',
  },
];

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="w-full h-full overflow-y-auto px-4 py-6 md:py-10 flex flex-col items-center justify-start max-w-6xl mx-auto select-none">
      {/* Title Hero */}
      <div className="text-center mb-6 md:mb-10 flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="text-4xl md:text-5xl animate-bounce-slow">✨</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-wider flex items-center gap-1 drop-shadow-sm">
            <span>Doodle</span>
            <span className="text-pink-500">Pop</span>
            <span className="text-amber-500 text-3xl md:text-4xl">!</span>
          </h1>
          <span className="text-4xl md:text-5xl animate-bounce-slow">🎨</span>
        </div>
        <p className="text-base md:text-xl font-bold text-slate-600">
          Your Fun & Magical Art Playground!
        </p>
      </div>

      {/* 6 Large Playful Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full pb-10">
        {MENU_CARDS.map((card) => (
          <button
            key={card.id}
            onClick={() => {
              sound.pop();
              onNavigate(card.id);
            }}
            className={`btn-bubbly ${card.bgColor} border-4 ${card.borderColor} rounded-4xl p-6 md:p-8 flex flex-col items-center text-center gap-4 transition-all hover:scale-[1.02] active:scale-95 group relative overflow-hidden shadow-lg`}
          >
            {/* Top decorative badge */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white shadow-md flex items-center justify-center border-4 border-black/5 group-hover:rotate-6 transition-transform">
              <span className="text-4xl md:text-5xl">{card.emoji}</span>
            </div>

            {/* Labels */}
            <div className="flex flex-col items-center gap-1">
              <span className={`text-2xl md:text-3xl font-extrabold tracking-wider ${card.textColor}`}>
                {card.title}
              </span>
              <span className="text-sm md:text-base font-semibold text-slate-600">
                {card.subtitle}
              </span>
            </div>

            {/* Playful star indicator */}
            <div className="absolute top-3 right-3 text-xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all">
              ⭐
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
