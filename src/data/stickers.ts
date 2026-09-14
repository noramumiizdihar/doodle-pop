export interface StickerDef {
  id: string;
  category: 'Faces' | 'Characters' | 'Accessories' | 'Nature' | 'Objects' | 'Decorations';
  name: string;
  emoji: string;
  svg: string;
  defaultWidth: number;
  defaultHeight: number;
}

export const STICKERS: StickerDef[] = [
  // --- Faces ---
  {
    id: 'face-happy-eyes',
    category: 'Faces',
    name: 'Happy Eyes',
    emoji: '👀',
    defaultWidth: 100,
    defaultHeight: 50,
    svg: `<svg viewBox="0 0 100 50">
      <path d="M 20 35 Q 35 10 50 35" fill="none" stroke="#222" stroke-width="8" stroke-linecap="round"/>
      <path d="M 50 35 Q 65 10 80 35" fill="none" stroke="#222" stroke-width="8" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'face-star-eyes',
    category: 'Faces',
    name: 'Star Eyes',
    emoji: '🤩',
    defaultWidth: 110,
    defaultHeight: 55,
    svg: `<svg viewBox="0 0 110 55">
      <polygon points="25,5 30,20 45,22 33,32 37,46 25,37 13,46 17,32 5,22 20,20" fill="#FFDE59" stroke="#222" stroke-width="4"/>
      <polygon points="85,5 90,20 105,22 93,32 97,46 85,37 73,46 77,32 65,22 80,20" fill="#FFDE59" stroke="#222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'face-smile',
    category: 'Faces',
    name: 'Big Smile',
    emoji: '👄',
    defaultWidth: 90,
    defaultHeight: 50,
    svg: `<svg viewBox="0 0 90 50">
      <path d="M 15 15 Q 45 48 75 15 Z" fill="#FF5757" stroke="#222" stroke-width="6"/>
      <path d="M 30 18 Q 45 30 60 18" fill="#FFF" stroke="#222" stroke-width="3"/>
    </svg>`,
  },
  {
    id: 'face-cat-nose',
    category: 'Faces',
    name: 'Cat Nose & Whiskers',
    emoji: '🐱',
    defaultWidth: 120,
    defaultHeight: 70,
    svg: `<svg viewBox="0 0 120 70">
      <polygon points="60,20 50,10 70,10" fill="#FF66C4" stroke="#222" stroke-width="4"/>
      <path d="M 60 20 L 60 30 Q 50 38 45 32 M 60 30 Q 70 38 75 32" fill="none" stroke="#222" stroke-width="5" stroke-linecap="round"/>
      <line x1="10" y1="20" x2="42" y2="24" stroke="#222" stroke-width="4" stroke-linecap="round"/>
      <line x1="10" y1="36" x2="40" y2="34" stroke="#222" stroke-width="4" stroke-linecap="round"/>
      <line x1="78" y1="24" x2="110" y2="20" stroke="#222" stroke-width="4" stroke-linecap="round"/>
      <line x1="80" y1="34" x2="110" y2="36" stroke="#222" stroke-width="4" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'face-blushing-cheeks',
    category: 'Faces',
    name: 'Pink Cheeks',
    emoji: '😊',
    defaultWidth: 120,
    defaultHeight: 40,
    svg: `<svg viewBox="0 0 120 40">
      <ellipse cx="25" cy="20" rx="18" ry="12" fill="#FF66C4" opacity="0.6"/>
      <ellipse cx="95" cy="20" rx="18" ry="12" fill="#FF66C4" opacity="0.6"/>
    </svg>`,
  },

  // --- Characters ---
  {
    id: 'char-bear-ears',
    category: 'Characters',
    name: 'Bear Ears',
    emoji: '🐻',
    defaultWidth: 120,
    defaultHeight: 60,
    svg: `<svg viewBox="0 0 120 60">
      <circle cx="25" cy="30" r="22" fill="#92400E" stroke="#222" stroke-width="5"/>
      <circle cx="25" cy="30" r="12" fill="#FDE68A"/>
      <circle cx="95" cy="30" r="22" fill="#92400E" stroke="#222" stroke-width="5"/>
      <circle cx="95" cy="30" r="12" fill="#FDE68A"/>
    </svg>`,
  },
  {
    id: 'char-angel-wings',
    category: 'Characters',
    name: 'Angel Wings',
    emoji: '🪽',
    defaultWidth: 140,
    defaultHeight: 70,
    svg: `<svg viewBox="0 0 140 70">
      <path d="M 70 45 C 50 10 10 15 10 40 C 10 55 30 65 70 50 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="5"/>
      <path d="M 70 45 C 90 10 130 15 130 40 C 130 55 110 65 70 50 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'char-unicorn-horn',
    category: 'Characters',
    name: 'Unicorn Horn',
    emoji: '🦄',
    defaultWidth: 50,
    defaultHeight: 90,
    svg: `<svg viewBox="0 0 50 90">
      <polygon points="25,5 10,85 40,85" fill="#FFDE59" stroke="#222" stroke-width="5" stroke-linejoin="round"/>
      <line x1="15" y1="65" x2="35" y2="70" stroke="#F59E0B" stroke-width="4"/>
      <line x1="18" y1="45" x2="32" y2="50" stroke="#F59E0B" stroke-width="4"/>
      <line x1="21" y1="25" x2="29" y2="28" stroke="#F59E0B" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'char-bunny-ears',
    category: 'Characters',
    name: 'Bunny Ears',
    emoji: '🐰',
    defaultWidth: 100,
    defaultHeight: 110,
    svg: `<svg viewBox="0 0 100 110">
      <ellipse cx="30" cy="55" rx="18" ry="48" fill="#FFF" stroke="#222" stroke-width="6"/>
      <ellipse cx="30" cy="55" rx="9" ry="32" fill="#FFC6FF"/>
      <ellipse cx="70" cy="55" rx="18" ry="48" fill="#FFF" stroke="#222" stroke-width="6"/>
      <ellipse cx="70" cy="55" rx="9" ry="32" fill="#FFC6FF"/>
    </svg>`,
  },
  {
    id: 'char-dino-spikes',
    category: 'Characters',
    name: 'Dino Spikes',
    emoji: '🦕',
    defaultWidth: 130,
    defaultHeight: 50,
    svg: `<svg viewBox="0 0 130 50">
      <polygon points="20,45 35,10 50,45" fill="#10B981" stroke="#222" stroke-width="4"/>
      <polygon points="55,45 70,10 85,45" fill="#10B981" stroke="#222" stroke-width="4"/>
      <polygon points="90,45 105,10 120,45" fill="#10B981" stroke="#222" stroke-width="4"/>
    </svg>`,
  },

  // --- Accessories ---
  {
    id: 'acc-crown',
    category: 'Accessories',
    name: 'Royal Crown',
    emoji: '👑',
    defaultWidth: 100,
    defaultHeight: 70,
    svg: `<svg viewBox="0 0 100 70">
      <polygon points="10,60 15,20 35,40 50,10 65,40 85,20 90,60" fill="#FFDE59" stroke="#222" stroke-width="6" stroke-linejoin="round"/>
      <circle cx="50" cy="12" r="5" fill="#FF5757"/>
      <circle cx="15" cy="22" r="5" fill="#38B6FF"/>
      <circle cx="85" cy="22" r="5" fill="#7ED957"/>
    </svg>`,
  },
  {
    id: 'acc-party-hat',
    category: 'Accessories',
    name: 'Party Hat',
    emoji: '🥳',
    defaultWidth: 80,
    defaultHeight: 100,
    svg: `<svg viewBox="0 0 80 100">
      <polygon points="40,20 15,90 65,90" fill="#FF66C4" stroke="#222" stroke-width="5" stroke-linejoin="round"/>
      <circle cx="40" cy="15" r="10" fill="#FFDE59" stroke="#222" stroke-width="4"/>
      <circle cx="35" cy="45" r="5" fill="#38B6FF"/>
      <circle cx="45" cy="65" r="6" fill="#7ED957"/>
      <circle cx="28" cy="78" r="5" fill="#FFDE59"/>
    </svg>`,
  },
  {
    id: 'acc-cool-shades',
    category: 'Accessories',
    name: 'Cool Sunglasses',
    emoji: '🕶️',
    defaultWidth: 120,
    defaultHeight: 50,
    svg: `<svg viewBox="0 0 120 50">
      <rect x="15" y="10" width="38" height="28" rx="8" fill="#1F2937" stroke="#222" stroke-width="5"/>
      <rect x="67" y="10" width="38" height="28" rx="8" fill="#1F2937" stroke="#222" stroke-width="5"/>
      <line x1="53" y1="18" x2="67" y2="18" stroke="#222" stroke-width="6"/>
      <line x1="22" y1="14" x2="30" y2="30" stroke="#9CA3AF" stroke-width="3" stroke-linecap="round"/>
      <line x1="74" y1="14" x2="82" y2="30" stroke="#9CA3AF" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'acc-cute-bow',
    category: 'Accessories',
    name: 'Pink Bow',
    emoji: '🎀',
    defaultWidth: 90,
    defaultHeight: 65,
    svg: `<svg viewBox="0 0 90 65">
      <polygon points="45,32 10,12 15,52" fill="#FF2D55" stroke="#222" stroke-width="5"/>
      <polygon points="45,32 80,12 75,52" fill="#FF2D55" stroke="#222" stroke-width="5"/>
      <circle cx="45" cy="32" r="10" fill="#FF66C4" stroke="#222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'acc-magic-wand',
    category: 'Accessories',
    name: 'Magic Wand',
    emoji: '🪄',
    defaultWidth: 80,
    defaultHeight: 90,
    svg: `<svg viewBox="0 0 80 90">
      <line x1="20" y1="80" x2="55" y2="35" stroke="#8B5CF6" stroke-width="8" stroke-linecap="round"/>
      <polygon points="62,12 66,26 80,28 68,37 72,50 60,42 48,50 52,37 40,28 54,26" fill="#FFDE59" stroke="#222" stroke-width="4"/>
    </svg>`,
  },

  // --- Nature ---
  {
    id: 'nat-happy-sun',
    category: 'Nature',
    name: 'Sunny Sun',
    emoji: '☀️',
    defaultWidth: 110,
    defaultHeight: 110,
    svg: `<svg viewBox="0 0 110 110">
      <g stroke="#222" stroke-width="5">
        <line x1="55" y1="10" x2="55" y2="24"/>
        <line x1="55" y1="86" x2="55" y2="100"/>
        <line x1="10" y1="55" x2="24" y2="55"/>
        <line x1="86" y1="55" x2="100" y2="55"/>
        <line x1="23" y1="23" x2="33" y2="33"/>
        <line x1="77" y1="77" x2="87" y2="87"/>
        <line x1="87" y1="23" x2="77" y2="33"/>
        <line x1="33" y1="77" x2="23" y2="87"/>
      </g>
      <circle cx="55" cy="55" r="30" fill="#FFDE59" stroke="#222" stroke-width="6"/>
      <circle cx="46" cy="50" r="4" fill="#222"/>
      <circle cx="64" cy="50" r="4" fill="#222"/>
      <path d="M 48 62 Q 55 68 62 62" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'nat-rainbow',
    category: 'Nature',
    name: 'Rainbow Arch',
    emoji: '🌈',
    defaultWidth: 120,
    defaultHeight: 70,
    svg: `<svg viewBox="0 0 120 70">
      <path d="M 10 65 A 50 50 0 0 1 110 65" fill="none" stroke="#FF5757" stroke-width="10"/>
      <path d="M 20 65 A 40 40 0 0 1 100 65" fill="none" stroke="#FFDE59" stroke-width="10"/>
      <path d="M 30 65 A 30 30 0 0 1 90 65" fill="none" stroke="#7ED957" stroke-width="10"/>
      <path d="M 40 65 A 20 20 0 0 1 80 65" fill="none" stroke="#38B6FF" stroke-width="10"/>
      <path d="M 50 65 A 10 10 0 0 1 70 65" fill="none" stroke="#8C52FF" stroke-width="10"/>
    </svg>`,
  },
  {
    id: 'nat-daisy-flower',
    category: 'Nature',
    name: 'Daisy Flower',
    emoji: '🌼',
    defaultWidth: 100,
    defaultHeight: 100,
    svg: `<svg viewBox="0 0 100 100">
      <g fill="#FFF" stroke="#222" stroke-width="5">
        <circle cx="50" cy="24" r="16"/>
        <circle cx="50" cy="76" r="16"/>
        <circle cx="24" cy="50" r="16"/>
        <circle cx="76" cy="50" r="16"/>
        <circle cx="32" cy="32" r="16"/>
        <circle cx="68" cy="32" r="16"/>
        <circle cx="32" cy="68" r="16"/>
        <circle cx="68" cy="68" r="16"/>
      </g>
      <circle cx="50" cy="50" r="18" fill="#FFDE59" stroke="#222" stroke-width="5"/>
      <circle cx="45" cy="46" r="3" fill="#222"/>
      <circle cx="55" cy="46" r="3" fill="#222"/>
      <path d="M 46 54 Q 50 58 54 54" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'nat-fluffy-cloud',
    category: 'Nature',
    name: 'Fluffy Cloud',
    emoji: '☁️',
    defaultWidth: 120,
    defaultHeight: 70,
    svg: `<svg viewBox="0 0 120 70">
      <path d="M 25 55 Q 10 55 10 40 Q 10 25 28 25 Q 35 10 55 10 Q 75 10 82 22 Q 95 12 108 24 Q 115 35 110 50 Q 115 55 100 55 Z" fill="#E0F2FE" stroke="#222" stroke-width="5" stroke-linejoin="round"/>
      <circle cx="48" cy="36" r="3" fill="#222"/>
      <circle cx="68" cy="36" r="3" fill="#222"/>
      <path d="M 54 44 Q 58 48 62 44" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'nat-toadstool',
    category: 'Nature',
    name: 'Cute Mushroom',
    emoji: '🍄',
    defaultWidth: 90,
    defaultHeight: 90,
    svg: `<svg viewBox="0 0 90 90">
      <rect x="35" y="45" width="20" height="35" rx="8" fill="#FEF3C7" stroke="#222" stroke-width="5"/>
      <path d="M 12 48 C 12 18 78 18 78 48 Z" fill="#FF5757" stroke="#222" stroke-width="6"/>
      <circle cx="30" cy="32" r="6" fill="#FFF"/>
      <circle cx="58" cy="28" r="7" fill="#FFF"/>
      <circle cx="45" cy="40" r="5" fill="#FFF"/>
    </svg>`,
  },

  // --- Objects ---
  {
    id: 'obj-rocket',
    category: 'Objects',
    name: 'Cosmic Rocket',
    emoji: '🚀',
    defaultWidth: 80,
    defaultHeight: 110,
    svg: `<svg viewBox="0 0 80 110">
      <!-- Fins -->
      <polygon points="20,70 5,88 24,85" fill="#FF5757" stroke="#222" stroke-width="4"/>
      <polygon points="60,70 75,88 56,85" fill="#FF5757" stroke="#222" stroke-width="4"/>
      <!-- Body -->
      <path d="M 40 10 C 20 30 20 80 20 80 L 60 80 C 60 80 60 30 40 10 Z" fill="#FFFFFF" stroke="#222" stroke-width="5"/>
      <circle cx="40" cy="45" r="10" fill="#38B6FF" stroke="#222" stroke-width="4"/>
      <!-- Flame -->
      <polygon points="30,83 40,105 50,83" fill="#FFDE59" stroke="#FF914D" stroke-width="3"/>
    </svg>`,
  },
  {
    id: 'obj-cupcake',
    category: 'Objects',
    name: 'Yummy Cupcake',
    emoji: '🧁',
    defaultWidth: 90,
    defaultHeight: 100,
    svg: `<svg viewBox="0 0 90 100">
      <polygon points="25,55 30,90 60,90 65,55" fill="#FDE68A" stroke="#222" stroke-width="5"/>
      <path d="M 15 55 C 15 30 75 30 75 55 Z" fill="#FF66C4" stroke="#222" stroke-width="5"/>
      <circle cx="45" cy="25" r="8" fill="#FF5757" stroke="#222" stroke-width="3"/>
      <circle cx="32" cy="45" r="3" fill="#FFF"/>
      <circle cx="58" cy="45" r="3" fill="#FFF"/>
    </svg>`,
  },
  {
    id: 'obj-racecar',
    category: 'Objects',
    name: 'Zoomy Car',
    emoji: '🚗',
    defaultWidth: 120,
    defaultHeight: 70,
    svg: `<svg viewBox="0 0 120 70">
      <path d="M 15 45 L 30 25 L 75 25 L 95 45 L 110 45 L 110 55 L 10 55 Z" fill="#FF5757" stroke="#222" stroke-width="5"/>
      <rect x="40" y="28" width="28" height="15" rx="3" fill="#38B6FF" stroke="#222" stroke-width="3"/>
      <circle cx="32" cy="55" r="14" fill="#333" stroke="#222" stroke-width="5"/>
      <circle cx="32" cy="55" r="5" fill="#FFF"/>
      <circle cx="88" cy="55" r="14" fill="#333" stroke="#222" stroke-width="5"/>
      <circle cx="88" cy="55" r="5" fill="#FFF"/>
    </svg>`,
  },
  {
    id: 'obj-icecream',
    category: 'Objects',
    name: 'Ice Cream Cone',
    emoji: '🍦',
    defaultWidth: 70,
    defaultHeight: 110,
    svg: `<svg viewBox="0 0 70 110">
      <polygon points="35,100 15,48 55,48" fill="#F59E0B" stroke="#222" stroke-width="5"/>
      <circle cx="35" cy="38" r="22" fill="#5CE1E6" stroke="#222" stroke-width="5"/>
      <circle cx="35" cy="22" r="16" fill="#FF66C4" stroke="#222" stroke-width="5"/>
      <circle cx="35" cy="8" r="6" fill="#FF5757"/>
    </svg>`,
  },

  // --- Decorations ---
  {
    id: 'dec-sparkle-star',
    category: 'Decorations',
    name: 'Gold Sparkle',
    emoji: '✨',
    defaultWidth: 80,
    defaultHeight: 80,
    svg: `<svg viewBox="0 0 80 80">
      <path d="M 40 5 Q 40 40 5 40 Q 40 40 40 75 Q 40 40 75 40 Q 40 40 40 5 Z" fill="#FFDE59" stroke="#F59E0B" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'dec-sweet-heart',
    category: 'Decorations',
    name: 'Sweet Heart',
    emoji: '💖',
    defaultWidth: 85,
    defaultHeight: 80,
    svg: `<svg viewBox="0 0 85 80">
      <path d="M 42 70 C 10 45 8 20 25 10 C 38 2 42 16 42 16 C 42 16 46 2 59 10 C 76 20 74 45 42 70 Z" fill="#FF2D55" stroke="#222" stroke-width="5"/>
      <ellipse cx="28" cy="20" rx="4" ry="7" fill="#FFF" opacity="0.7" transform="rotate(-30, 28, 20)"/>
    </svg>`,
  },
  {
    id: 'dec-shiny-bubbles',
    category: 'Decorations',
    name: 'Shiny Bubbles',
    emoji: '🫧',
    defaultWidth: 90,
    defaultHeight: 90,
    svg: `<svg viewBox="0 0 90 90">
      <circle cx="40" cy="50" r="30" fill="#E0F2FE" stroke="#38B6FF" stroke-width="5" opacity="0.8"/>
      <circle cx="30" cy="38" r="6" fill="#FFF"/>
      <circle cx="68" cy="26" r="16" fill="#E0F2FE" stroke="#38B6FF" stroke-width="4" opacity="0.8"/>
      <circle cx="62" cy="20" r="3" fill="#FFF"/>
    </svg>`,
  },
  {
    id: 'dec-music-note',
    category: 'Decorations',
    name: 'Music Note',
    emoji: '🎵',
    defaultWidth: 80,
    defaultHeight: 80,
    svg: `<svg viewBox="0 0 80 80">
      <ellipse cx="25" cy="60" rx="12" ry="8" fill="#8C52FF" stroke="#222" stroke-width="4" transform="rotate(-20, 25, 60)"/>
      <ellipse cx="65" cy="50" rx="12" ry="8" fill="#8C52FF" stroke="#222" stroke-width="4" transform="rotate(-20, 65, 50)"/>
      <line x1="34" y1="58" x2="34" y2="18" stroke="#222" stroke-width="6"/>
      <line x1="74" y1="48" x2="74" y2="10" stroke="#222" stroke-width="6"/>
      <polygon points="31,18 76,10 76,22 31,30" fill="#8C52FF" stroke="#222" stroke-width="4"/>
    </svg>`,
  },
];
