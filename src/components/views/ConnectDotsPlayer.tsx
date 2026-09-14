import React, { useState } from 'react';
import { ConnectDotPuzzle, DotPoint } from '../../data/connectTheDots';
import { sound } from '../../services/soundEngine';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, Paintbrush, RotateCcw } from 'lucide-react';

interface ConnectDotsPlayerProps {
  puzzle: ConnectDotPuzzle;
  onDoneColoring: (revealedSvg: string) => void;
  onBack: () => void;
}

export const ConnectDotsPlayer: React.FC<ConnectDotsPlayerProps> = ({
  puzzle,
  onDoneColoring,
  onBack,
}) => {
  const [currentDotIndex, setCurrentDotIndex] = useState<number>(0);
  const [connectedPoints, setConnectedPoints] = useState<DotPoint[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleDotClick = (dot: DotPoint, index: number) => {
    // Must tap the next expected dot
    if (index === currentDotIndex) {
      sound.sparkle();
      const newPoints = [...connectedPoints, dot];
      setConnectedPoints(newPoints);

      if (index === puzzle.dots.length - 1) {
        // Completed!
        setIsCompleted(true);
        sound.cheer();
        try {
          confetti({
            particleCount: 90,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch {}
      } else {
        setCurrentDotIndex(index + 1);
      }
    } else {
      sound.pop();
    }
  };

  const handleReset = () => {
    sound.pop();
    setCurrentDotIndex(0);
    setConnectedPoints([]);
    setIsCompleted(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-4 max-w-2xl mx-auto select-none">
      {/* Top Banner */}
      <div className="w-full bg-white border-4 border-emerald-300 rounded-3xl p-3 md:p-4 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{puzzle.emoji}</span>
          <div>
            <h2 className="font-extrabold text-lg md:text-xl text-slate-800">
              {puzzle.title}
            </h2>
            <p className="text-xs md:text-sm font-semibold text-emerald-700">
              {isCompleted
                ? '🎉 Amazing! You revealed the picture!'
                : `Tap dot #${currentDotIndex + 1} to connect!`}
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="btn-bubbly bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-2xl"
          title="Reset Dots"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Interactive Dot Canvas Stage */}
      <div className="relative w-full max-w-md aspect-square bg-white rounded-4xl border-8 border-amber-200 shadow-xl overflow-hidden my-4">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          {/* Revealed Picture if completed */}
          {isCompleted && (
            <g
              className="animate-fade-in transition-opacity duration-700"
              dangerouslySetInnerHTML={{ __html: puzzle.completedSvg }}
            />
          )}

          {/* Connected Lines */}
          {connectedPoints.length > 1 && (
            <polyline
              points={connectedPoints.map((p) => `${p.x},${p.y}`).join(' ')}
              fill="none"
              stroke="#059669"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          )}

          {/* Dots and Numbers */}
          {!isCompleted &&
            puzzle.dots.map((dot, idx) => {
              const isNext = idx === currentDotIndex;
              const isConnected = idx < currentDotIndex;

              return (
                <g
                  key={dot.id}
                  onClick={() => handleDotClick(dot, idx)}
                  className="cursor-pointer"
                >
                  {/* Pulsing ring for next target */}
                  {isNext && (
                    <circle
                      cx={dot.x}
                      cy={dot.y}
                      r="22"
                      fill="#34D399"
                      opacity="0.5"
                      className="animate-ping"
                    />
                  )}

                  {/* Dot circle */}
                  <circle
                    cx={dot.x}
                    cy={dot.y}
                    r={isNext ? '16' : '12'}
                    fill={isConnected ? '#059669' : isNext ? '#10B981' : '#CBD5E1'}
                    stroke="#FFFFFF"
                    strokeWidth="4"
                  />

                  {/* Dot Number */}
                  <text
                    x={dot.x}
                    y={dot.y + (dot.y > 450 ? -22 : 28)}
                    textAnchor="middle"
                    fontSize={isNext ? '22' : '18'}
                    fontWeight="bold"
                    fill={isNext ? '#065F46' : '#64748B'}
                    className="select-none"
                  >
                    {dot.id}
                  </text>
                </g>
              );
            })}
        </svg>
      </div>

      {/* Bottom Completion Action */}
      <div className="w-full flex gap-3 max-w-md">
        {isCompleted ? (
          <button
            onClick={() => {
              sound.pop();
              // Wrap revealed SVG for coloring canvas
              const fullSvg = `<svg viewBox="0 0 500 500"><rect width="500" height="500" fill="#FFFFFF"/>${puzzle.completedSvg}</svg>`;
              onDoneColoring(fullSvg);
            }}
            className="btn-bubbly w-full bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold py-4 rounded-3xl flex items-center justify-center gap-2 shadow-xl text-lg animate-bounce"
          >
            <Paintbrush className="w-6 h-6" />
            <span>Color & Draw On Top! 🎨</span>
          </button>
        ) : (
          <button
            onClick={onBack}
            className="btn-bubbly w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-2xl text-base"
          >
            Back to Puzzles
          </button>
        )}
      </div>
    </div>
  );
};
