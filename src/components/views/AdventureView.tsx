import React from 'react';
import { ADVENTURES, AdventureWorld } from '../../data/adventures';
import { sound } from '../../services/soundEngine';
import { Compass, Sparkles, Play, ArrowRight } from 'lucide-react';

interface AdventureViewProps {
  onSelectAdventure: (adventure: AdventureWorld) => void;
}

export const AdventureView: React.FC<AdventureViewProps> = ({ onSelectAdventure }) => {
  return (
    <div className="w-full h-full overflow-y-auto px-4 py-6 md:py-8 flex flex-col items-center max-w-5xl mx-auto select-none">
      {/* Header */}
      <div className="text-center mb-6 flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🚀</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Drawing Adventures
          </h2>
          <span className="text-3xl">🗺️</span>
        </div>
        <p className="text-sm md:text-base font-semibold text-slate-600">
          Pick a magical story world and build your scene step-by-step!
        </p>
      </div>

      {/* Worlds Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full pb-16">
        {ADVENTURES.map((adv) => (
          <div
            key={adv.id}
            className="bg-white border-4 border-sky-300 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col group"
          >
            {/* World Scenic Preview banner */}
            <div className="w-full h-40 relative overflow-hidden bg-sky-100 flex items-center justify-center p-2">
              <div
                className="w-full h-full pointer-events-none"
                dangerouslySetInnerHTML={{ __html: adv.backgroundSvg }}
              />
              <div className="absolute top-3 right-3 text-4xl group-hover:scale-125 group-hover:rotate-12 transition-transform drop-shadow-md">
                {adv.emoji}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1 gap-4">
              <div>
                <h3 className="font-extrabold text-xl text-slate-800 flex items-center gap-2">
                  <span>{adv.name}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1.5 leading-relaxed">
                  {adv.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-xs font-bold bg-sky-100 text-sky-800 px-3 py-1 rounded-full">
                    {adv.steps.length} Fun Steps
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  sound.pop();
                  onSelectAdventure(adv);
                }}
                className="btn-bubbly w-full bg-sky-500 hover:bg-sky-400 text-white font-extrabold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md text-base"
              >
                <span>Start Adventure</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
