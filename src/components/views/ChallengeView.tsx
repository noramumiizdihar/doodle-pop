import React, { useState } from 'react';
import { DRAWING_CHALLENGES, DrawingChallenge } from '../../data/challenges';
import { CONNECT_DOTS_PUZZLES, ConnectDotPuzzle } from '../../data/connectTheDots';
import { FINISH_THE_PICTURE_TEMPLATES, FinishPictureDef } from '../../data/finishThePicture';
import { sound } from '../../services/soundEngine';
import { Trophy, Sparkles, CheckCircle2, Play } from 'lucide-react';

interface ChallengeViewProps {
  onStartChallenge: (challenge: DrawingChallenge) => void;
  onStartConnectDots: (puzzle: ConnectDotPuzzle) => void;
  onStartFinishPicture: (template: FinishPictureDef) => void;
}

export const ChallengeView: React.FC<ChallengeViewProps> = ({
  onStartChallenge,
  onStartConnectDots,
  onStartFinishPicture,
}) => {
  const [activeTab, setActiveTab] = useState<'challenges' | 'dots' | 'finish'>('challenges');

  return (
    <div className="w-full h-full overflow-y-auto px-4 py-6 md:py-8 flex flex-col items-center max-w-5xl mx-auto select-none">
      {/* Sub Tabs */}
      <div className="flex bg-white p-1.5 rounded-3xl border-4 border-emerald-300 shadow-md mb-6 gap-1 sm:gap-2">
        <button
          onClick={() => {
            sound.pop();
            setActiveTab('challenges');
          }}
          className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl font-bold text-xs sm:text-base transition-all ${
            activeTab === 'challenges'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🌟 20 Challenges
        </button>
        <button
          onClick={() => {
            sound.pop();
            setActiveTab('dots');
          }}
          className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl font-bold text-xs sm:text-base transition-all ${
            activeTab === 'dots'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🔘 Connect the Dots
        </button>
        <button
          onClick={() => {
            sound.pop();
            setActiveTab('finish');
          }}
          className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl font-bold text-xs sm:text-base transition-all ${
            activeTab === 'finish'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          ✏️ Finish the Picture
        </button>
      </div>

      {/* 1. DRAWING CHALLENGES TAB */}
      {activeTab === 'challenges' && (
        <div className="w-full flex flex-col gap-4">
          <div className="text-center mb-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
              Creative Drawing Challenges
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-semibold">
              There is no wrong way to draw! Draw your idea and earn your victory star! ⭐
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12">
            {DRAWING_CHALLENGES.map((ch) => (
              <div
                key={ch.id}
                className="bg-white border-4 border-emerald-200 hover:border-emerald-400 rounded-3xl p-5 flex flex-col justify-between gap-3 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl shrink-0 border-2 border-emerald-300">
                    {ch.emoji}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-slate-800 text-base md:text-lg leading-tight">
                      {ch.prompt}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{ch.hint}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    sound.pop();
                    onStartChallenge(ch);
                  }}
                  className="btn-bubbly w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2.5 rounded-2xl flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Start Challenge</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. CONNECT THE DOTS TAB */}
      {activeTab === 'dots' && (
        <div className="w-full flex flex-col gap-4">
          <div className="text-center mb-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
              Connect the Dots Puzzles
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-semibold">
              Tap the numbered dots in order from 1 to reveal the surprise picture! 🪄
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pb-12">
            {CONNECT_DOTS_PUZZLES.map((puzzle) => (
              <button
                key={puzzle.id}
                onClick={() => {
                  sound.pop();
                  onStartConnectDots(puzzle);
                }}
                className="btn-bubbly bg-white border-4 border-emerald-200 hover:border-emerald-400 rounded-3xl p-4 flex flex-col items-center gap-3 shadow-md active:scale-95 group"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center border-2 border-emerald-200 text-4xl group-hover:scale-110 transition-transform">
                  {puzzle.emoji}
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-extrabold text-sm md:text-base text-slate-800">
                    {puzzle.title}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full mt-1">
                    {puzzle.dots.length} Dots • {puzzle.difficulty}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3. FINISH THE PICTURE TAB */}
      {activeTab === 'finish' && (
        <div className="w-full flex flex-col gap-4">
          <div className="text-center mb-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
              Finish the Incomplete Picture
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-semibold">
              Something is missing! Grab your pencil and draw the missing part! ✏️
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12">
            {FINISH_THE_PICTURE_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => {
                  sound.pop();
                  onStartFinishPicture(tmpl);
                }}
                className="btn-bubbly bg-white border-4 border-emerald-200 hover:border-emerald-400 rounded-3xl p-4 flex flex-col gap-3 shadow-md active:scale-95 text-left group"
              >
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-emerald-100 group-hover:scale-105 transition-transform p-1 bg-amber-50/50">
                  <div
                    className="w-full h-full pointer-events-none"
                    dangerouslySetInnerHTML={{ __html: tmpl.svgBackground }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{tmpl.emoji}</span>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm md:text-base">
                      {tmpl.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{tmpl.prompt}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
