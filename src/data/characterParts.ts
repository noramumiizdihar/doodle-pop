export type CharacterCategory =
  | 'body'
  | 'eyes'
  | 'mouth'
  | 'hair'
  | 'ears'
  | 'hats'
  | 'wings'
  | 'tails'
  | 'accessories';

export interface CharacterPart {
  id: string;
  category: CharacterCategory;
  name: string;
  emoji: string;
  svg: string;
  defaultX: number;
  defaultY: number;
  defaultWidth: number;
  defaultHeight: number;
  zIndex: number;
}

export const CHARACTER_PARTS: CharacterPart[] = [
  // --- Bodies (Base layer) ---
  {
    id: 'body-human',
    category: 'body',
    name: 'Friend Body',
    emoji: '🧍',
    defaultX: 130,
    defaultY: 100,
    defaultWidth: 240,
    defaultHeight: 340,
    zIndex: 10,
    svg: `<svg viewBox="0 0 240 340">
      <!-- Head -->
      <circle cx="120" cy="90" r="60" fill="#FFD1BA" stroke="#222" stroke-width="6"/>
      <!-- Torso -->
      <rect x="75" y="145" width="90" height="110" rx="20" fill="#38B6FF" stroke="#222" stroke-width="6"/>
      <!-- Arms -->
      <path d="M 75 160 Q 40 200 45 230" fill="none" stroke="#FFD1BA" stroke-width="22" stroke-linecap="round"/>
      <path d="M 165 160 Q 200 200 195 230" fill="none" stroke="#FFD1BA" stroke-width="22" stroke-linecap="round"/>
      <!-- Legs -->
      <line x1="95" y1="250" x2="95" y2="315" stroke="#1F2937" stroke-width="22" stroke-linecap="round"/>
      <line x1="145" y1="250" x2="145" y2="315" stroke="#1F2937" stroke-width="22" stroke-linecap="round"/>
      <!-- Shoes -->
      <ellipse cx="85" cy="325" rx="20" ry="12" fill="#FF5757" stroke="#222" stroke-width="4"/>
      <ellipse cx="155" cy="325" rx="20" ry="12" fill="#FF5757" stroke="#222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'body-kitty',
    category: 'body',
    name: 'Chubby Kitty',
    emoji: '🐱',
    defaultX: 130,
    defaultY: 110,
    defaultWidth: 240,
    defaultHeight: 320,
    zIndex: 10,
    svg: `<svg viewBox="0 0 240 320">
      <!-- Cat Head -->
      <ellipse cx="120" cy="110" rx="70" ry="58" fill="#FBBF24" stroke="#222" stroke-width="6"/>
      <!-- Chubby Body -->
      <path d="M 60 150 C 40 220 50 280 120 280 C 190 280 200 220 180 150 Z" fill="#FBBF24" stroke="#222" stroke-width="6"/>
      <!-- White Belly -->
      <ellipse cx="120" cy="220" rx="40" ry="45" fill="#FEF3C7"/>
      <!-- Paws -->
      <circle cx="85" cy="285" r="18" fill="#FFF" stroke="#222" stroke-width="4"/>
      <circle cx="155" cy="285" r="18" fill="#FFF" stroke="#222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'body-robot',
    category: 'body',
    name: 'Bleep Robot',
    emoji: '🤖',
    defaultX: 130,
    defaultY: 100,
    defaultWidth: 240,
    defaultHeight: 340,
    zIndex: 10,
    svg: `<svg viewBox="0 0 240 340">
      <!-- Antenna -->
      <line x1="120" y1="30" x2="120" y2="50" stroke="#222" stroke-width="6"/>
      <circle cx="120" cy="25" r="10" fill="#FF5757" stroke="#222" stroke-width="4"/>
      <!-- Head -->
      <rect x="70" y="50" width="100" height="75" rx="16" fill="#94A3B8" stroke="#222" stroke-width="6"/>
      <!-- Body -->
      <rect x="65" y="135" width="110" height="115" rx="14" fill="#64748B" stroke="#222" stroke-width="6"/>
      <!-- Screen / meter -->
      <rect x="85" y="155" width="70" height="45" rx="8" fill="#5CE1E6" stroke="#222" stroke-width="4"/>
      <!-- Arms -->
      <line x1="60" y1="165" x2="30" y2="200" stroke="#94A3B8" stroke-width="16" stroke-linecap="round"/>
      <line x1="180" y1="165" x2="210" y2="200" stroke="#94A3B8" stroke-width="16" stroke-linecap="round"/>
      <!-- Legs -->
      <rect x="85" y="250" width="22" height="60" rx="6" fill="#94A3B8" stroke="#222" stroke-width="5"/>
      <rect x="133" y="250" width="22" height="60" rx="6" fill="#94A3B8" stroke="#222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'body-alien',
    category: 'body',
    name: 'Googly Alien',
    emoji: '👽',
    defaultX: 130,
    defaultY: 110,
    defaultWidth: 240,
    defaultHeight: 320,
    zIndex: 10,
    svg: `<svg viewBox="0 0 240 320">
      <ellipse cx="120" cy="100" rx="65" ry="50" fill="#86EFAC" stroke="#222" stroke-width="6"/>
      <path d="M 65 140 C 45 210 50 270 120 270 C 190 270 195 210 175 140 Z" fill="#86EFAC" stroke="#222" stroke-width="6"/>
      <circle cx="120" cy="200" r="30" fill="#BBF7D0"/>
      <!-- Cute tentacles -->
      <path d="M 80 270 Q 75 305 60 305" fill="none" stroke="#86EFAC" stroke-width="18" stroke-linecap="round"/>
      <path d="M 120 270 Q 120 310 120 310" fill="none" stroke="#86EFAC" stroke-width="18" stroke-linecap="round"/>
      <path d="M 160 270 Q 165 305 180 305" fill="none" stroke="#86EFAC" stroke-width="18" stroke-linecap="round"/>
    </svg>`,
  },

  // --- Eyes (Layer 30) ---
  {
    id: 'eyes-anime',
    category: 'eyes',
    name: 'Sparkle Eyes',
    emoji: '👀',
    defaultX: 190,
    defaultY: 165,
    defaultWidth: 120,
    defaultHeight: 50,
    zIndex: 30,
    svg: `<svg viewBox="0 0 120 50">
      <ellipse cx="30" cy="25" rx="16" ry="20" fill="#1F2937"/>
      <circle cx="25" cy="18" r="6" fill="#FFF"/>
      <circle cx="34" cy="28" r="3" fill="#FFF"/>
      <ellipse cx="90" cy="25" rx="16" ry="20" fill="#1F2937"/>
      <circle cx="85" cy="18" r="6" fill="#FFF"/>
      <circle cx="94" cy="28" r="3" fill="#FFF"/>
    </svg>`,
  },
  {
    id: 'eyes-sleepy',
    category: 'eyes',
    name: 'Sleepy / Happy Eyes',
    emoji: '😌',
    defaultX: 190,
    defaultY: 165,
    defaultWidth: 120,
    defaultHeight: 45,
    zIndex: 30,
    svg: `<svg viewBox="0 0 120 45">
      <path d="M 15 28 Q 30 10 45 28" fill="none" stroke="#222" stroke-width="7" stroke-linecap="round"/>
      <path d="M 75 28 Q 90 10 105 28" fill="none" stroke="#222" stroke-width="7" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'eyes-cyclops',
    category: 'eyes',
    name: 'One Big Eye',
    emoji: '👁️',
    defaultX: 215,
    defaultY: 160,
    defaultWidth: 70,
    defaultHeight: 60,
    zIndex: 30,
    svg: `<svg viewBox="0 0 70 60">
      <circle cx="35" cy="30" r="26" fill="#FFF" stroke="#222" stroke-width="5"/>
      <circle cx="35" cy="30" r="14" fill="#38B6FF" stroke="#222" stroke-width="4"/>
      <circle cx="35" cy="30" r="7" fill="#1F2937"/>
      <circle cx="31" cy="26" r="3" fill="#FFF"/>
    </svg>`,
  },

  // --- Mouths (Layer 30) ---
  {
    id: 'mouth-toothy',
    category: 'mouth',
    name: 'Happy Grin',
    emoji: '😁',
    defaultX: 210,
    defaultY: 205,
    defaultWidth: 80,
    defaultHeight: 40,
    zIndex: 30,
    svg: `<svg viewBox="0 0 80 40">
      <path d="M 10 10 Q 40 38 70 10 Z" fill="#EF4444" stroke="#222" stroke-width="5"/>
      <path d="M 22 14 Q 40 22 58 14" fill="#FFF" stroke="#222" stroke-width="3"/>
    </svg>`,
  },
  {
    id: 'mouth-cat-kiss',
    category: 'mouth',
    name: 'Cat Kiss',
    emoji: '😚',
    defaultX: 220,
    defaultY: 205,
    defaultWidth: 60,
    defaultHeight: 35,
    zIndex: 30,
    svg: `<svg viewBox="0 0 60 35">
      <path d="M 15 15 Q 23 25 30 18 Q 37 25 45 15" fill="none" stroke="#222" stroke-width="6" stroke-linecap="round"/>
    </svg>`,
  },

  // --- Hair (Layer 40) ---
  {
    id: 'hair-rainbow',
    category: 'hair',
    name: 'Rainbow Puffs',
    emoji: '🌈',
    defaultX: 170,
    defaultY: 85,
    defaultWidth: 160,
    defaultHeight: 90,
    zIndex: 40,
    svg: `<svg viewBox="0 0 160 90">
      <circle cx="40" cy="50" r="28" fill="#FF5757" stroke="#222" stroke-width="5"/>
      <circle cx="70" cy="35" r="30" fill="#FFDE59" stroke="#222" stroke-width="5"/>
      <circle cx="105" cy="35" r="28" fill="#7ED957" stroke="#222" stroke-width="5"/>
      <circle cx="130" cy="52" r="24" fill="#38B6FF" stroke="#222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'hair-spiky',
    category: 'hair',
    name: 'Cool Spikes',
    emoji: '⚡',
    defaultX: 175,
    defaultY: 85,
    defaultWidth: 150,
    defaultHeight: 80,
    zIndex: 40,
    svg: `<svg viewBox="0 0 150 80">
      <polygon points="20,70 35,15 55,60 75,10 95,60 115,20 130,70" fill="#8C52FF" stroke="#222" stroke-width="5" stroke-linejoin="round"/>
    </svg>`,
  },

  // --- Hats & Accessories ---
  {
    id: 'hat-wizard',
    category: 'hats',
    name: 'Wizard Hat',
    emoji: '🧙',
    defaultX: 180,
    defaultY: 45,
    defaultWidth: 140,
    defaultHeight: 120,
    zIndex: 50,
    svg: `<svg viewBox="0 0 140 120">
      <ellipse cx="70" cy="100" rx="60" ry="16" fill="#6B21A8" stroke="#222" stroke-width="5"/>
      <polygon points="70,10 40,95 100,95" fill="#7C3AED" stroke="#222" stroke-width="5" stroke-linejoin="round"/>
      <polygon points="70,40 73,48 81,49 75,54 77,62 70,58 63,62 65,54 59,49 67,48" fill="#FFDE59"/>
    </svg>`,
  },
  {
    id: 'wings-dragon',
    category: 'wings',
    name: 'Dragon Wings',
    emoji: '🐲',
    defaultX: 100,
    defaultY: 150,
    defaultWidth: 300,
    defaultHeight: 120,
    zIndex: 5, // behind body
    svg: `<svg viewBox="0 0 300 120">
      <path d="M 120 90 Q 60 20 10 30 Q 30 70 20 100 Q 70 80 120 90 Z" fill="#EF4444" stroke="#222" stroke-width="6"/>
      <path d="M 180 90 Q 240 20 290 30 Q 270 70 280 100 Q 230 80 180 90 Z" fill="#EF4444" stroke="#222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'tail-fluffy',
    category: 'tails',
    name: 'Fluffy Tail',
    emoji: '🦊',
    defaultX: 230,
    defaultY: 210,
    defaultWidth: 110,
    defaultHeight: 100,
    zIndex: 5,
    svg: `<svg viewBox="0 0 110 100">
      <path d="M 15 70 C 40 90 90 95 95 60 C 100 20 60 10 40 40 Z" fill="#F97316" stroke="#222" stroke-width="6"/>
      <path d="M 70 30 C 85 25 95 45 85 55 Z" fill="#FFF"/>
    </svg>`,
  },
];
