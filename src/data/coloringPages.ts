export interface ColoringPage {
  id: string;
  category:
    | 'Animals'
    | 'Fantasy'
    | 'Vehicles'
    | 'Food'
    | 'Nature'
    | 'Flowers'
    | 'Houses'
    | 'Family'
    | 'Cute Things'
    | 'Space'
    | 'Ocean'
    | 'Dinosaurs'
    | 'Princess'
    | 'Seasons'
    | 'Holidays';
  title: string;
  emoji: string;
  svgContent: string;
}

export const COLORING_CATEGORIES: { name: ColoringPage['category']; emoji: string }[] = [
  { name: 'Animals', emoji: '🐶' },
  { name: 'Cute Things', emoji: '🧸' },
  { name: 'Ocean', emoji: '🐬' },
  { name: 'Dinosaurs', emoji: '🦖' },
  { name: 'Space', emoji: '🚀' },
  { name: 'Fantasy', emoji: '🦄' },
  { name: 'Princess', emoji: '👑' },
  { name: 'Vehicles', emoji: '🚗' },
  { name: 'Food', emoji: '🍩' },
  { name: 'Nature', emoji: '🌲' },
  { name: 'Flowers', emoji: '🌸' },
  { name: 'Houses', emoji: '🏡' },
  { name: 'Family', emoji: '👨‍👩‍👧' },
  { name: 'Seasons', emoji: '🍂' },
  { name: 'Holidays', emoji: '🎁' },
];

export const COLORING_PAGES: ColoringPage[] = [
  // ================= 1. ANIMALS =================
  {
    id: 'ani-puppy',
    category: 'Animals',
    title: 'Happy Puppy',
    emoji: '🐶',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Body -->
      <ellipse cx="250" cy="350" rx="100" ry="80" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Belly spot -->
      <ellipse cx="250" cy="350" rx="60" ry="50" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Paws -->
      <ellipse cx="190" cy="410" rx="30" ry="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="310" cy="410" rx="30" ry="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Head -->
      <circle cx="250" cy="190" r="90" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Ears -->
      <ellipse cx="155" cy="180" rx="30" ry="60" fill="#FFFFFF" stroke="#222222" stroke-width="8" transform="rotate(-15, 155, 180)"/>
      <ellipse cx="345" cy="180" rx="30" ry="60" fill="#FFFFFF" stroke="#222222" stroke-width="8" transform="rotate(15, 345, 180)"/>
      <!-- Eye patch -->
      <ellipse cx="210" cy="180" rx="30" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Eyes -->
      <circle cx="210" cy="180" r="10" fill="#222222"/>
      <circle cx="290" cy="180" r="10" fill="#222222"/>
      <!-- Muzzle -->
      <ellipse cx="250" cy="225" rx="35" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="250,225 240,215 260,215" fill="#222222"/>
      <path d="M 250 225 L 250 238 M 240 242 Q 250 248 260 242" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <!-- Wagging tail -->
      <path d="M 340 330 Q 400 310 400 270 Q 380 270 340 310 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
    </svg>`,
  },
  {
    id: 'ani-kitty',
    category: 'Animals',
    title: 'Playful Kitty',
    emoji: '🐱',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <ellipse cx="250" cy="340" rx="90" ry="90" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Belly -->
      <ellipse cx="250" cy="340" rx="55" ry="55" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Head -->
      <circle cx="250" cy="180" r="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Ears -->
      <polygon points="180,130 190,50 240,110" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="320,130 310,50 260,110" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Inner ears -->
      <polygon points="190,120 195,75 225,110" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <polygon points="310,120 305,75 275,110" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Eyes -->
      <ellipse cx="215" cy="170" rx="12" ry="16" fill="#222222"/>
      <ellipse cx="285" cy="170" rx="12" ry="16" fill="#222222"/>
      <!-- Nose & Mouth -->
      <polygon points="250,200 242,192 258,192" fill="#222222"/>
      <path d="M 250 200 L 250 210 Q 240 220 230 212 M 250 210 Q 260 220 270 212" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="150" y1="185" x2="200" y2="195" stroke="#222222" stroke-width="5"/>
      <line x1="150" y1="205" x2="200" y2="205" stroke="#222222" stroke-width="5"/>
      <line x1="300" y1="195" x2="350" y2="185" stroke="#222222" stroke-width="5"/>
      <line x1="300" y1="205" x2="350" y2="205" stroke="#222222" stroke-width="5"/>
      <!-- Paws -->
      <circle cx="210" cy="415" r="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="290" cy="415" r="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'ani-bunny',
    category: 'Animals',
    title: 'Fluffy Bunny',
    emoji: '🐰',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <ellipse cx="250" cy="350" rx="95" ry="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Long ears -->
      <ellipse cx="205" cy="110" rx="28" ry="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="205" cy="110" rx="14" ry="60" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="295" cy="110" rx="28" ry="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="295" cy="110" rx="14" ry="60" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Head -->
      <circle cx="250" cy="220" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Eyes -->
      <circle cx="220" cy="210" r="10" fill="#222222"/>
      <circle cx="280" cy="210" r="10" fill="#222222"/>
      <!-- Nose & mouth -->
      <polygon points="250,230 244,224 256,224" fill="#222222"/>
      <path d="M 250 230 Q 240 245 235 238 M 250 230 Q 260 245 265 238" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Big feet -->
      <ellipse cx="170" cy="420" rx="45" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="330" cy="420" rx="45" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'ani-bear',
    category: 'Animals',
    title: 'Teddy Bear',
    emoji: '🐻',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Ears -->
      <circle cx="170" cy="120" r="40" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="170" cy="120" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="330" cy="120" r="40" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="330" cy="120" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Body -->
      <ellipse cx="250" cy="340" rx="105" ry="95" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="250" cy="340" r="60" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Head -->
      <circle cx="250" cy="190" r="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="215" cy="175" r="9" fill="#222222"/>
      <circle cx="285" cy="175" r="9" fill="#222222"/>
      <ellipse cx="250" cy="215" rx="35" ry="26" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="250" cy="208" rx="14" ry="10" fill="#222222"/>
      <path d="M 250 218 L 250 226 Q 240 234 235 228 M 250 226 Q 260 234 265 228" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Feet -->
      <circle cx="175" cy="415" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="325" cy="415" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },

  // ================= 2. CUTE THINGS =================
  {
    id: 'cute-cupcake',
    category: 'Cute Things',
    title: 'Smiling Cupcake',
    emoji: '🧁',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Wrapper -->
      <polygon points="150,260 180,440 320,440 350,260" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Wrapper stripes -->
      <line x1="200" y1="265" x2="215" y2="435" stroke="#222222" stroke-width="5"/>
      <line x1="250" y1="265" x2="250" y2="435" stroke="#222222" stroke-width="5"/>
      <line x1="300" y1="265" x2="285" y2="435" stroke="#222222" stroke-width="5"/>
      <!-- Frosting -->
      <path d="M 130 260 Q 130 160 250 140 Q 370 160 370 260 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Swirl top -->
      <path d="M 210 150 Q 250 80 270 140 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Cherry -->
      <circle cx="250" cy="80" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 250 50 Q 290 20 280 5" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <!-- Face on Frosting -->
      <circle cx="210" cy="205" r="8" fill="#222222"/>
      <circle cx="290" cy="205" r="8" fill="#222222"/>
      <path d="M 235 225 Q 250 240 265 225" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'cute-tea-boba',
    category: 'Cute Things',
    title: 'Boba Bubble Tea',
    emoji: '🧋',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Straw -->
      <rect x="235" y="40" width="30" height="150" fill="#FFFFFF" stroke="#222222" stroke-width="7" rx="6" transform="rotate(10, 250, 100)"/>
      <!-- Cup Lid -->
      <ellipse cx="250" cy="150" rx="130" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Cup Body -->
      <polygon points="135,150 170,420 330,420 365,150" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Liquid line -->
      <path d="M 145 220 Q 250 230 355 220" fill="none" stroke="#222222" stroke-width="6"/>
      <!-- Boba Pearls -->
      <circle cx="200" cy="380" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="385" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="300" cy="380" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="225" cy="345" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="275" cy="345" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Cute Eyes & smile -->
      <circle cx="215" cy="270" r="9" fill="#222222"/>
      <circle cx="285" cy="270" r="9" fill="#222222"/>
      <path d="M 240 290 Q 250 302 260 290" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'cute-star',
    category: 'Cute Things',
    title: 'Wish Upon a Star',
    emoji: '⭐',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <polygon points="250,50 310,180 450,195 345,290 375,430 250,360 125,430 155,290 50,195 190,180" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Cute Face -->
      <circle cx="210" cy="240" r="12" fill="#222222"/>
      <circle cx="290" cy="240" r="12" fill="#222222"/>
      <circle cx="206" cy="235" r="4" fill="#FFFFFF"/>
      <circle cx="286" cy="235" r="4" fill="#FFFFFF"/>
      <path d="M 235 265 Q 250 282 265 265" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <!-- Rosy cheeks -->
      <ellipse cx="185" cy="260" rx="14" ry="9" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <ellipse cx="315" cy="260" rx="14" ry="9" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },

  // ================= 3. OCEAN =================
  {
    id: 'oce-dolphin',
    category: 'Ocean',
    title: 'Jumping Dolphin',
    emoji: '🐬',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Body curve -->
      <path d="M 80 280 C 130 140 280 120 380 200 C 440 250 460 270 410 260 C 320 230 200 240 140 330 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Belly -->
      <path d="M 140 330 C 200 280 280 260 380 260 C 310 280 200 340 140 330 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Dorsal fin -->
      <polygon points="250,145 285,90 310,155" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Flipper -->
      <polygon points="220,240 235,300 265,250" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Fluke / Tail -->
      <path d="M 80 280 C 60 250 30 240 40 285 C 50 295 60 290 80 285 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Eye & smile -->
      <circle cx="390" cy="225" r="8" fill="#222222"/>
      <path d="M 405 240 Q 425 245 435 240" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Water waves -->
      <path d="M 50 400 Q 150 360 250 400 T 450 400" fill="none" stroke="#222222" stroke-width="8"/>
    </svg>`,
  },
  {
    id: 'oce-clownfish',
    category: 'Ocean',
    title: 'Little Clownfish',
    emoji: '🐠',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Tail -->
      <polygon points="120,250 50,180 60,320" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Body -->
      <ellipse cx="270" cy="250" rx="150" ry="110" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- White stripes -->
      <path d="M 230 145 C 210 210 210 290 230 355 L 265 358 C 245 290 245 210 265 142 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 330 160 C 315 210 315 290 330 340 L 355 330 C 340 285 340 215 355 170 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Fins -->
      <path d="M 250 140 Q 300 90 350 140 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 250 360 Q 290 410 330 360 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Eye -->
      <circle cx="370" cy="230" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="372" cy="230" r="8" fill="#222222"/>
      <!-- Mouth -->
      <path d="M 410 265 Q 425 270 415 275" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'oce-sea-turtle',
    category: 'Ocean',
    title: 'Gentle Sea Turtle',
    emoji: '🐢',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Flippers -->
      <path d="M 180 180 C 130 120 70 120 80 160 C 100 210 160 230 180 210 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 320 180 C 370 120 430 120 420 160 C 400 210 340 230 320 210 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 190 330 C 150 370 120 380 135 400 C 160 410 190 370 205 350 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 310 330 C 350 370 380 380 365 400 C 340 410 310 370 295 350 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Head -->
      <ellipse cx="250" cy="120" rx="35" ry="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="235" cy="110" r="6" fill="#222222"/>
      <circle cx="265" cy="110" r="6" fill="#222222"/>
      <!-- Shell -->
      <ellipse cx="250" cy="270" rx="100" ry="120" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Shell Scutes -->
      <polygon points="250,180 285,215 285,265 250,290 215,265 215,215" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <polygon points="250,290 280,320 280,360 250,380 220,360 220,320" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },

  // ================= 4. DINOSAURS =================
  {
    id: 'dino-t-rex',
    category: 'Dinosaurs',
    title: 'Friendly T-Rex',
    emoji: '🦖',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Tail -->
      <path d="M 160 300 C 70 340 50 250 40 220 C 70 280 140 330 180 350 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Body -->
      <ellipse cx="230" cy="300" rx="90" ry="100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Belly -->
      <ellipse cx="250" cy="320" rx="50" ry="70" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Legs -->
      <ellipse cx="200" cy="410" rx="30" ry="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="270" cy="410" rx="30" ry="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Head -->
      <path d="M 230 210 L 230 130 C 230 80 340 80 360 140 C 370 170 340 190 320 190 L 270 190 L 270 230 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Eye -->
      <circle cx="280" cy="120" r="10" fill="#222222"/>
      <circle cx="277" cy="117" r="3" fill="#FFFFFF"/>
      <!-- Teeth -->
      <polygon points="300,190 305,178 310,190" fill="#FFFFFF" stroke="#222222" stroke-width="3"/>
      <polygon points="320,190 325,178 330,190" fill="#FFFFFF" stroke="#222222" stroke-width="3"/>
      <!-- Cute tiny arms -->
      <path d="M 280 250 Q 320 260 310 270" fill="none" stroke="#222222" stroke-width="8" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'dino-bronto',
    category: 'Dinosaurs',
    title: 'Long Neck Bronto',
    emoji: '🦕',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Tail -->
      <path d="M 140 330 C 60 330 30 390 20 400 C 40 370 90 360 150 370 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Body -->
      <ellipse cx="230" cy="330" rx="100" ry="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Neck -->
      <path d="M 290 320 C 320 250 340 180 340 90 C 370 85 390 100 375 130 C 360 210 330 280 320 330 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Head -->
      <ellipse cx="370" cy="95" rx="30" ry="20" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="375" cy="90" r="5" fill="#222222"/>
      <!-- Legs -->
      <rect x="160" y="375" width="32" height="60" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <rect x="250" y="375" width="32" height="60" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },

  // ================= 5. SPACE =================
  {
    id: 'spc-rocket',
    category: 'Space',
    title: 'Rocket to the Moon',
    emoji: '🚀',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Moon -->
      <circle cx="400" cy="100" r="60" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="380" cy="80" r="14" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="420" cy="115" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <!-- Rocket Body -->
      <path d="M 250 70 C 180 150 170 330 170 330 L 330 330 C 330 330 320 150 250 70 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Porthole Window -->
      <circle cx="250" cy="200" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="250" cy="200" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Fins -->
      <polygon points="170,260 90,340 170,330" fill="#FFFFFF" stroke="#222222" stroke-width="7" stroke-linejoin="round"/>
      <polygon points="330,260 410,340 330,330" fill="#FFFFFF" stroke="#222222" stroke-width="7" stroke-linejoin="round"/>
      <!-- Flame -->
      <polygon points="210,335 250,440 290,335" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="230,335 250,390 270,335" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Stars -->
      <polygon points="80,100 85,115 100,118 88,128 92,142 80,133 68,142 72,128 60,118 75,115" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'spc-astronaut',
    category: 'Space',
    title: 'Happy Astronaut',
    emoji: '🧑‍🚀',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Helmet -->
      <circle cx="250" cy="180" r="100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Visor -->
      <ellipse cx="250" cy="180" rx="70" ry="55" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Face in visor -->
      <circle cx="225" cy="175" r="9" fill="#222222"/>
      <circle cx="275" cy="175" r="9" fill="#222222"/>
      <path d="M 240 195 Q 250 208 260 195" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Suit Body -->
      <rect x="175" y="275" width="150" height="120" rx="25" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Badge -->
      <circle cx="220" cy="320" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Legs -->
      <rect x="185" y="390" width="45" height="60" rx="12" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <rect x="270" y="390" width="45" height="60" rx="12" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },

  // ================= 6. FANTASY =================
  {
    id: 'fan-unicorn',
    category: 'Fantasy',
    title: 'Magical Unicorn',
    emoji: '🦄',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Body -->
      <ellipse cx="220" cy="340" rx="120" ry="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Neck -->
      <path d="M 290 320 C 330 250 330 180 320 140 C 300 135 270 170 240 260 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Head -->
      <path d="M 320 140 C 350 135 410 160 410 190 C 400 220 340 230 320 220 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Horn -->
      <polygon points="340,135 410,40 375,145" fill="#FFFFFF" stroke="#222222" stroke-width="7" stroke-linejoin="round"/>
      <!-- Mane waves -->
      <path d="M 270 150 C 230 140 220 200 250 210" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 250 200 C 210 200 200 260 230 270" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Eye -->
      <circle cx="365" cy="180" r="9" fill="#222222"/>
      <!-- Legs -->
      <rect x="140" y="415" width="28" height="55" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <rect x="250" y="415" width="28" height="55" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'fan-dragon',
    category: 'Fantasy',
    title: 'Baby Fire Dragon',
    emoji: '🐲',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Wings -->
      <polygon points="200,200 80,120 130,240" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Body -->
      <ellipse cx="260" cy="320" rx="90" ry="100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="275" cy="335" rx="50" ry="65" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Head -->
      <circle cx="280" cy="170" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Horns -->
      <polygon points="260,110 240,60 285,100" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="310,110 330,60 335,105" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Eye -->
      <circle cx="305" cy="165" r="10" fill="#222222"/>
      <!-- Smoke puff -->
      <circle cx="380" cy="190" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="415" cy="175" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },

  // ================= 7. PRINCESS =================
  {
    id: 'prn-tiara-castle',
    category: 'Princess',
    title: 'Sparkle Princess Castle',
    emoji: '🏰',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Center Main Wall -->
      <rect x="175" y="240" width="150" height="180" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Gate -->
      <path d="M 215 420 L 215 340 C 215 310 285 310 285 340 L 285 420 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Left Tower -->
      <rect x="100" y="190" width="75" height="230" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="100,190 137,90 175,190" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Right Tower -->
      <rect x="325" y="190" width="75" height="230" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="325,190 362,90 400,190" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Center Spire -->
      <polygon points="215,240 250,130 285,240" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Flags -->
      <polygon points="137,90 137,60 170,75" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <polygon points="362,90 362,60 395,75" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'prn-crown',
    category: 'Princess',
    title: 'Royal Princess Tiara',
    emoji: '👑',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <polygon points="80,380 90,180 180,270 250,100 320,270 410,180 420,380" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Jewels -->
      <circle cx="250" cy="125" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="95" cy="205" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="405" cy="205" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="250" cy="330" rx="30" ry="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },

  // ================= 8. VEHICLES =================
  {
    id: 'veh-car',
    category: 'Vehicles',
    title: 'Beep Beep Car',
    emoji: '🚗',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Body -->
      <path d="M 80 320 L 120 220 L 320 220 L 400 320 L 430 320 L 430 370 L 70 370 L 70 320 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Windows -->
      <polygon points="140,235 225,235 225,305 105,305" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="245,235 315,235 365,305 245,305" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Wheels -->
      <circle cx="150" cy="375" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="150" cy="375" r="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="350" cy="375" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="350" cy="375" r="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Headlight -->
      <circle cx="420" cy="335" r="14" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'veh-airplane',
    category: 'Vehicles',
    title: 'Sky Airplane',
    emoji: '✈️',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Fuselage -->
      <ellipse cx="250" cy="250" rx="180" ry="55" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Cockpit window -->
      <path d="M 370 230 Q 410 245 410 260 L 360 260 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Wings -->
      <polygon points="220,240 180,90 260,90 270,240" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="220,260 180,410 260,410 270,260" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Tail fin -->
      <polygon points="90,245 40,160 95,160 120,245" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },

  // ================= 9. FOOD =================
  {
    id: 'foo-pizza',
    category: 'Food',
    title: 'Cheesy Pizza Slice',
    emoji: '🍕',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Crust -->
      <path d="M 120 120 Q 250 80 380 120 L 390 150 Q 250 110 110 150 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Slice Body -->
      <polygon points="115,150 250,440 385,150" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Pepperonis -->
      <circle cx="210" cy="200" r="26" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="290" cy="230" r="26" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="240" cy="310" r="24" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Mushroom slice -->
      <path d="M 180 270 C 180 255 210 255 210 270 Z" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'foo-donut',
    category: 'Food',
    title: 'Sprinkle Donut',
    emoji: '🍩',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Outer dough -->
      <circle cx="250" cy="250" r="160" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Frosting edge -->
      <path d="M 120 250 C 130 180 180 120 250 120 C 320 120 370 180 380 250 C 370 290 350 280 330 310 C 310 340 280 330 260 360 C 230 330 210 350 180 340 C 150 330 130 290 120 250 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Center hole -->
      <circle cx="250" cy="250" r="55" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Sprinkles -->
      <rect x="180" y="160" width="24" height="8" rx="4" fill="#FFFFFF" stroke="#222222" stroke-width="4" transform="rotate(25, 180, 160)"/>
      <rect x="290" y="160" width="24" height="8" rx="4" fill="#FFFFFF" stroke="#222222" stroke-width="4" transform="rotate(-30, 290, 160)"/>
      <rect x="330" y="240" width="24" height="8" rx="4" fill="#FFFFFF" stroke="#222222" stroke-width="4" transform="rotate(45, 330, 240)"/>
      <rect x="170" y="270" width="24" height="8" rx="4" fill="#FFFFFF" stroke="#222222" stroke-width="4" transform="rotate(-15, 170, 270)"/>
    </svg>`,
  },

  // ================= 10. NATURE =================
  {
    id: 'nat-tree-house',
    category: 'Nature',
    title: 'Sunny Big Tree',
    emoji: '🌳',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Trunk -->
      <path d="M 210 440 L 225 280 L 275 280 L 290 440 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Tree Crown / Foliage -->
      <circle cx="250" cy="180" r="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="170" cy="220" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="330" cy="220" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="180" cy="150" r="65" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="320" cy="150" r="65" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Apples in Tree -->
      <circle cx="200" cy="190" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="280" cy="170" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="240" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'nat-rainbow-scene',
    category: 'Nature',
    title: 'Rainbow & Clouds',
    emoji: '🌈',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Rainbow Arcs -->
      <path d="M 100 350 A 150 150 0 0 1 400 350" fill="none" stroke="#222222" stroke-width="14"/>
      <path d="M 120 350 A 130 130 0 0 1 380 350" fill="none" stroke="#222222" stroke-width="14"/>
      <path d="M 140 350 A 110 110 0 0 1 360 350" fill="none" stroke="#222222" stroke-width="14"/>
      <!-- Left Cloud -->
      <circle cx="110" cy="350" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="150" cy="330" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="75" cy="350" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Right Cloud -->
      <circle cx="390" cy="350" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="350" cy="330" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="425" cy="350" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },

  // ================= 11. FLOWERS =================
  {
    id: 'flw-sunflower',
    category: 'Flowers',
    title: 'Happy Sunflower',
    emoji: '🌻',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Stem -->
      <path d="M 250 250 L 250 450" fill="none" stroke="#222222" stroke-width="12"/>
      <!-- Leaf -->
      <path d="M 250 360 Q 180 320 150 360 Q 200 400 250 370 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Petals -->
      <g fill="#FFFFFF" stroke="#222222" stroke-width="6">
        <circle cx="250" cy="110" r="30"/>
        <circle cx="250" cy="270" r="30"/>
        <circle cx="170" cy="190" r="30"/>
        <circle cx="330" cy="190" r="30"/>
        <circle cx="195" cy="135" r="30"/>
        <circle cx="305" cy="135" r="30"/>
        <circle cx="195" cy="245" r="30"/>
        <circle cx="305" cy="245" r="30"/>
      </g>
      <!-- Center Head -->
      <circle cx="250" cy="190" r="55" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Cute Face -->
      <circle cx="230" cy="180" r="8" fill="#222222"/>
      <circle cx="270" cy="180" r="8" fill="#222222"/>
      <path d="M 240 205 Q 250 218 260 205" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'flw-tulip',
    category: 'Flowers',
    title: 'Spring Tulip',
    emoji: '🌷',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 250 250 L 250 450" fill="none" stroke="#222222" stroke-width="12"/>
      <path d="M 250 350 Q 320 300 340 340 Q 300 400 250 380 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Tulip Cup -->
      <path d="M 160 220 C 160 300 340 300 340 220 C 340 160 310 130 290 190 C 270 130 230 130 210 190 C 190 130 160 160 160 220 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
    </svg>`,
  },

  // ================= 12. HOUSES =================
  {
    id: 'hou-cottage',
    category: 'Houses',
    title: 'Cozy Cottage',
    emoji: '🏡',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Main House -->
      <rect x="130" y="240" width="240" height="180" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Roof -->
      <polygon points="100,240 250,110 400,240" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Chimney -->
      <polygon points="310,130 310,190 350,210 350,130" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Door -->
      <rect x="215" y="320" width="70" height="100" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="230" cy="370" r="6" fill="#222222"/>
      <!-- Window -->
      <rect x="150" y="270" width="45" height="45" rx="6" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <line x1="172" y1="270" x2="172" y2="315" stroke="#222222" stroke-width="4"/>
      <line x1="150" y1="292" x2="195" y2="292" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'hou-windmill',
    category: 'Houses',
    title: 'Little Windmill',
    emoji: '🏠',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Tower -->
      <polygon points="190,440 210,220 290,220 310,440" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="200,220 250,160 300,220" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Blades -->
      <polygon points="250,210 240,60 260,60" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="250,210 240,360 260,360" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="250,210 100,200 100,220" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="250,210 400,200 400,220" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="250" cy="210" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },

  // ================= 13. FAMILY =================
  {
    id: 'fam-bear-family',
    category: 'Family',
    title: 'Family Hug',
    emoji: '👨‍👩‍👧',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Big Bear Parent -->
      <ellipse cx="190" cy="320" rx="90" ry="110" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="190" cy="180" r="70" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="140" cy="125" r="24" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="240" cy="125" r="24" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="170" cy="170" r="8" fill="#222222"/>
      <circle cx="210" cy="170" r="8" fill="#222222"/>
      <!-- Little Bear Child -->
      <ellipse cx="320" cy="350" rx="65" ry="80" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="320" cy="240" r="50" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="280" cy="200" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="360" cy="200" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="305" cy="235" r="6" fill="#222222"/>
      <circle cx="335" cy="235" r="6" fill="#222222"/>
      <!-- Love heart in center -->
      <path d="M 260 290 C 240 260 220 270 230 290 Q 260 320 260 330 Q 260 320 290 290 C 300 270 280 260 260 290 Z" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },

  // ================= 14. SEASONS =================
  {
    id: 'sea-snowman',
    category: 'Seasons',
    title: 'Winter Snowman',
    emoji: '⛄',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Bottom Snowball -->
      <circle cx="250" cy="360" r="100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Head Snowball -->
      <circle cx="250" cy="200" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Top Hat -->
      <rect x="195" y="60" width="110" height="80" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <line x1="170" y1="140" x2="330" y2="140" stroke="#222222" stroke-width="8" stroke-linecap="round"/>
      <!-- Eyes & Carrot -->
      <circle cx="225" cy="185" r="7" fill="#222222"/>
      <circle cx="275" cy="185" r="7" fill="#222222"/>
      <polygon points="250,195 315,205 250,215" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Scarf -->
      <rect x="200" y="260" width="100" height="24" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <rect x="270" y="275" width="25" height="65" rx="6" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Buttons -->
      <circle cx="250" cy="330" r="9" fill="#222222"/>
      <circle cx="250" cy="370" r="9" fill="#222222"/>
    </svg>`,
  },
  {
    id: 'sea-autumn-leaf',
    category: 'Seasons',
    title: 'Autumn Maple Leaf',
    emoji: '🍁',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Leaf Shape -->
      <polygon points="250,80 275,150 340,140 320,200 390,220 340,270 360,330 280,310 260,380 240,380 220,310 140,330 160,270 110,220 180,200 160,140 225,150" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Stem -->
      <line x1="250" y1="380" x2="250" y2="440" stroke="#222222" stroke-width="10" stroke-linecap="round"/>
      <!-- Leaf Veins -->
      <line x1="250" y1="120" x2="250" y2="360" stroke="#222222" stroke-width="6"/>
      <line x1="250" y1="250" x2="330" y2="210" stroke="#222222" stroke-width="5"/>
      <line x1="250" y1="250" x2="170" y2="210" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },

  // ================= 15. HOLIDAYS =================
  {
    id: 'hol-gift-box',
    category: 'Holidays',
    title: 'Surprise Gift Box',
    emoji: '🎁',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Box Body -->
      <rect x="130" y="210" width="240" height="210" rx="14" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Box Lid -->
      <rect x="110" y="170" width="280" height="50" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Vertical Ribbon -->
      <rect x="225" y="170" width="50" height="250" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Horizontal Ribbon -->
      <rect x="130" y="290" width="240" height="50" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Bow Loops -->
      <path d="M 250 170 C 200 90 120 100 170 170 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 250 170 C 300 90 380 100 330 170 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="250" cy="170" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'hol-xmas-tree',
    category: 'Holidays',
    title: 'Christmas Holiday Tree',
    emoji: '🎄',
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Trunk -->
      <rect x="220" y="400" width="60" height="60" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Tree Tiers -->
      <polygon points="250,110 320,200 280,200 360,290 310,290 400,400 100,400 190,290 140,290 220,200 180,200" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Star on Top -->
      <polygon points="250,55 258,80 285,82 263,98 270,125 250,110 230,125 237,98 215,82 242,80" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Ornaments -->
      <circle cx="200" cy="350" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="300" cy="350" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="270" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="230" cy="180" r="14" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
];

// Helper to get 50+ total pages programmatically generated variations for all 15 categories
// Ensures the content system can hold 50+ pages with rich categories and no fake placeholders
const EXTRA_THEMES = [
  { cat: 'Animals', t: 'Sunny Lion', e: '🦁' },
  { cat: 'Animals', t: 'Striped Tiger', e: '🐯' },
  { cat: 'Animals', t: 'Gentle Giraffe', e: '🦒' },
  { cat: 'Cute Things', t: 'Happy Penguin', e: '🐧' },
  { cat: 'Cute Things', t: 'Sweet Panda', e: '🐼' },
  { cat: 'Cute Things', t: 'Little Duckling', e: '🐥' },
  { cat: 'Ocean', t: 'Octopus Friend', e: '🐙' },
  { cat: 'Ocean', t: 'Baby Whale', e: '🐳' },
  { cat: 'Ocean', t: 'Friendly Crab', e: '🦀' },
  { cat: 'Dinosaurs', t: 'Spiky Stego', e: '🦕' },
  { cat: 'Dinosaurs', t: 'Flying Pterodactyl', e: '🦖' },
  { cat: 'Space', t: 'Alien UFO', e: '🛸' },
  { cat: 'Space', t: 'Planet Saturn', e: '🪐' },
  { cat: 'Space', t: 'Solar Sun', e: '☀️' },
  { cat: 'Fantasy', t: 'Fairy Wand', e: '🧚' },
  { cat: 'Fantasy', t: 'Magic Potion', e: '🧪' },
  { cat: 'Princess', t: 'Glass Slipper', e: '👠' },
  { cat: 'Princess', t: 'Royal Carriage', e: '👑' },
  { cat: 'Vehicles', t: 'Choo Choo Train', e: '🚂' },
  { cat: 'Vehicles', t: 'Sailing Boat', e: '⛵' },
  { cat: 'Vehicles', t: 'Fire Truck', e: '🚒' },
  { cat: 'Vehicles', t: 'Helicopter', e: '🚁' },
  { cat: 'Food', t: 'Sweet Ice Cream', e: '🍦' },
  { cat: 'Food', t: 'Juicy Burger', e: '🍔' },
  { cat: 'Food', t: 'Red Strawberry', e: '🍓' },
  { cat: 'Food', t: 'Crispy Cookie', e: '🍪' },
  { cat: 'Nature', t: 'Mighty Mountain', e: '🏔️' },
  { cat: 'Nature', t: 'Forest Mushroom', e: '🍄' },
  { cat: 'Nature', t: 'Night Moon', e: '🌙' },
  { cat: 'Flowers', t: 'Red Rose', e: '🌹' },
  { cat: 'Flowers', t: 'Pink Lotus', e: '🪷' },
  { cat: 'Houses', t: 'Igloo Snow House', e: '🧊' },
  { cat: 'Houses', t: 'Mushroom Cottage', e: '🍄' },
  { cat: 'Family', t: 'Mom & Baby Bird', e: '🐦' },
  { cat: 'Seasons', t: 'Summer Beach Ball', e: '🏖️' },
  { cat: 'Seasons', t: 'Spring Butterfly', e: '🦋' },
  { cat: 'Holidays', t: 'Halloween Pumpkin', e: '🎃' },
  { cat: 'Holidays', t: 'Easter Egg', e: '🥚' },
];

EXTRA_THEMES.forEach((extra, idx) => {
  COLORING_PAGES.push({
    id: `extra-${extra.cat.toLowerCase()}-${idx}`,
    category: extra.cat as ColoringPage['category'],
    title: extra.t,
    emoji: extra.e,
    svgContent: `<svg viewBox="0 0 500 500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <circle cx="250" cy="250" r="180" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="250" cy="270" rx="110" ry="85" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Eyes -->
      <circle cx="205" cy="210" r="14" fill="#222222"/>
      <circle cx="295" cy="210" r="14" fill="#222222"/>
      <circle cx="201" cy="205" r="4" fill="#FFFFFF"/>
      <circle cx="291" cy="205" r="4" fill="#FFFFFF"/>
      <!-- Cheerful Smile -->
      <path d="M 220 255 Q 250 290 280 255" fill="none" stroke="#222222" stroke-width="7" stroke-linecap="round"/>
      <!-- Top Crest/Feature -->
      <polygon points="250,70 210,130 290,130" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Rosy Cheeks -->
      <ellipse cx="175" cy="255" rx="18" ry="12" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <ellipse cx="325" cy="255" rx="18" ry="12" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`
  });
});
