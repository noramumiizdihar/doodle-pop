export type AliveAnimationType = 'wiggle' | 'float' | 'spin' | 'blink' | 'pulse';

export interface AlivePreset {
  id: AliveAnimationType;
  name: string;
  emoji: string;
  description: string;
  cssClass: string;
}

export const ALIVE_PRESETS: AlivePreset[] = [
  {
    id: 'wiggle',
    name: 'Happy Bounce',
    emoji: '🐾',
    description: 'Bounces and wiggles happily!',
    cssClass: 'animate-wiggle',
  },
  {
    id: 'float',
    name: 'Dreamy Float',
    emoji: '☁️',
    description: 'Floats gently like a cloud or butterfly!',
    cssClass: 'animate-float',
  },
  {
    id: 'spin',
    name: 'Sunny Spin',
    emoji: '☀️',
    description: 'Rotates playfully like a shining sun or gear!',
    cssClass: 'animate-spin-slow',
  },
  {
    id: 'pulse',
    name: 'Magic Glow',
    emoji: '✨',
    description: 'Shimmers and sparkles with a magical pulse!',
    cssClass: 'animate-pulse-glow',
  },
  {
    id: 'blink',
    name: 'Cute Peep',
    emoji: '👀',
    description: 'Scales in and out playfully!',
    cssClass: 'animate-bounce-slow',
  },
];
