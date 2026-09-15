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

export const COLORING_CATEGORIES: { name: ColoringPage['category']; emoji: string; color: string }[] = [
  { name: 'Animals', emoji: '🐶', color: '#FEF3C7' },
  { name: 'Cute Things', emoji: '🧸', color: '#FCE7F3' },
  { name: 'Ocean', emoji: '🐬', color: '#E0F2FE' },
  { name: 'Dinosaurs', emoji: '🦖', color: '#DCFCE7' },
  { name: 'Space', emoji: '🚀', color: '#EDE9FE' },
  { name: 'Fantasy', emoji: '🦄', color: '#FDF4FF' },
  { name: 'Princess', emoji: '👑', color: '#FEE2E2' },
  { name: 'Vehicles', emoji: '🚗', color: '#FFEDD5' },
  { name: 'Food', emoji: '🍩', color: '#FFF1F2' },
  { name: 'Nature', emoji: '🌲', color: '#ECFDF5' },
  { name: 'Flowers', emoji: '🌸', color: '#FDF2F8' },
  { name: 'Houses', emoji: '🏡', color: '#FEF9C3' },
  { name: 'Family', emoji: '👨‍👩‍👧', color: '#E0E7FF' },
  { name: 'Seasons', emoji: '🍂', color: '#FFEDD5' },
  { name: 'Holidays', emoji: '🎁', color: '#FEE2E2' },
];

export const COLORING_PAGES: ColoringPage[] = [
  // ================= 1. ANIMALS =================
  {
    id: 'ani-puppy',
    category: 'Animals',
    title: 'Happy Puppy & Ball',
    emoji: '🐶',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <ellipse cx="250" cy="350" rx="100" ry="80" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="250" cy="350" rx="60" ry="50" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="190" cy="410" rx="30" ry="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="310" cy="410" rx="30" ry="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="250" cy="190" r="90" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="155" cy="180" rx="30" ry="60" fill="#FFFFFF" stroke="#222222" stroke-width="8" transform="rotate(-15, 155, 180)"/>
      <ellipse cx="345" cy="180" rx="30" ry="60" fill="#FFFFFF" stroke="#222222" stroke-width="8" transform="rotate(15, 345, 180)"/>
      <ellipse cx="210" cy="180" rx="30" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="210" cy="180" r="10" fill="#222222"/>
      <circle cx="290" cy="180" r="10" fill="#222222"/>
      <ellipse cx="250" cy="225" rx="35" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="250,225 240,215 260,215" fill="#222222"/>
      <path d="M 250 225 L 250 238 M 240 242 Q 250 248 260 242" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <path d="M 200 270 Q 250 290 300 270 L 295 285 Q 250 305 205 285 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="250" cy="298" rx="14" ry="9" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <path d="M 340 330 Q 410 300 410 260 Q 380 260 340 310 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="100" cy="410" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 75 390 Q 100 410 125 390" fill="none" stroke="#222222" stroke-width="5"/>
      <path d="M 75 430 Q 100 410 125 430" fill="none" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'ani-kitty',
    category: 'Animals',
    title: 'Playful Kitty & Yarn',
    emoji: '🐱',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <ellipse cx="230" cy="330" rx="90" ry="90" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="230" cy="330" rx="55" ry="55" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="230" cy="170" r="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="160,120 170,40 220,100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="300,120 290,40 240,100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="170,110 175,65 205,100" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <polygon points="290,110 285,65 255,100" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <ellipse cx="195" cy="160" rx="12" ry="16" fill="#222222"/>
      <circle cx="192" cy="155" r="4" fill="#FFFFFF"/>
      <ellipse cx="265" cy="160" rx="12" ry="16" fill="#222222"/>
      <circle cx="262" cy="155" r="4" fill="#FFFFFF"/>
      <polygon points="230,190 222,182 238,182" fill="#222222"/>
      <path d="M 230 190 L 230 200 Q 220 210 210 202 M 230 200 Q 240 210 250 202" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <line x1="130" y1="175" x2="180" y2="185" stroke="#222222" stroke-width="5"/>
      <line x1="130" y1="195" x2="180" y2="195" stroke="#222222" stroke-width="5"/>
      <line x1="280" y1="185" x2="330" y2="175" stroke="#222222" stroke-width="5"/>
      <line x1="280" y1="195" x2="330" y2="195" stroke="#222222" stroke-width="5"/>
      <circle cx="190" cy="405" r="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="270" cy="405" r="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Ball of Yarn -->
      <circle cx="390" cy="370" r="50" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 350 360 Q 390 330 430 360 M 360 390 Q 390 410 420 380 M 370 340 Q 410 390 380 415" fill="none" stroke="#222222" stroke-width="5"/>
      <path d="M 350 390 Q 310 410 280 405" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'ani-bunny',
    category: 'Animals',
    title: 'Bunny & Giant Carrot',
    emoji: '🐰',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <ellipse cx="220" cy="350" rx="95" ry="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="175" cy="110" rx="28" ry="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="175" cy="110" rx="14" ry="60" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="265" cy="110" rx="28" ry="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="265" cy="110" rx="14" ry="60" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="220" cy="220" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="190" cy="210" r="10" fill="#222222"/>
      <circle cx="250" cy="210" r="10" fill="#222222"/>
      <polygon points="220,230 214,224 226,224" fill="#222222"/>
      <path d="M 220 230 Q 210 245 205 238 M 220 230 Q 230 245 235 238" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="140" cy="420" rx="45" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="260" cy="420" rx="45" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Big Carrot -->
      <polygon points="340,190 410,190 375,420" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <line x1="350" y1="240" x2="380" y2="245" stroke="#222222" stroke-width="5"/>
      <line x1="360" y1="300" x2="395" y2="305" stroke="#222222" stroke-width="5"/>
      <line x1="365" y1="360" x2="385" y2="365" stroke="#222222" stroke-width="5"/>
      <!-- Carrot Leaves -->
      <path d="M 375 190 Q 360 130 330 110 Q 365 140 375 190 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 375 190 Q 375 110 380 90 Q 390 120 375 190 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 375 190 Q 400 130 430 110 Q 395 140 375 190 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'ani-bear',
    category: 'Animals',
    title: 'Teddy Bear & Honey Pot',
    emoji: '🐻',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <circle cx="160" cy="120" r="40" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="160" cy="120" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="320" cy="120" r="40" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="320" cy="120" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="240" cy="330" rx="100" ry="90" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="240" cy="330" r="55" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="240" cy="190" r="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="205" cy="175" r="9" fill="#222222"/>
      <circle cx="275" cy="175" r="9" fill="#222222"/>
      <ellipse cx="240" cy="215" rx="35" ry="26" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="240" cy="208" rx="14" ry="10" fill="#222222"/>
      <path d="M 240 218 L 240 226 Q 230 234 225 228 M 240 226 Q 250 234 255 228" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <circle cx="165" cy="405" r="32" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="315" cy="405" r="32" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Honey Pot -->
      <path d="M 350 330 C 330 330 320 420 370 420 C 420 420 410 330 390 330 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <ellipse cx="370" cy="330" rx="25" ry="10" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 355 330 Q 365 370 375 350" fill="none" stroke="#222222" stroke-width="5"/>
      <text x="358" y="385" font-size="16" font-weight="bold" fill="#222222">HONEY</text>
    </svg>`,
  },
  {
    id: 'ani-lion',
    category: 'Animals',
    title: 'Sunny Roaring Lion',
    emoji: '🦁',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Huge Mane -->
      <g fill="#FFFFFF" stroke="#222222" stroke-width="8">
        <circle cx="250" cy="100" r="45"/>
        <circle cx="330" cy="120" r="45"/>
        <circle cx="370" cy="180" r="45"/>
        <circle cx="360" cy="260" r="45"/>
        <circle cx="300" cy="310" r="45"/>
        <circle cx="200" cy="310" r="45"/>
        <circle cx="140" cy="260" r="45"/>
        <circle cx="130" cy="180" r="45"/>
        <circle cx="170" cy="120" r="45"/>
      </g>
      <!-- Head -->
      <circle cx="250" cy="200" r="80" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Ears -->
      <circle cx="185" cy="140" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="315" cy="140" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Eyes -->
      <circle cx="220" cy="185" r="10" fill="#222222"/>
      <circle cx="216" cy="181" r="3" fill="#FFFFFF"/>
      <circle cx="280" cy="185" r="10" fill="#222222"/>
      <circle cx="276" cy="181" r="3" fill="#FFFFFF"/>
      <!-- Nose & Mouth -->
      <polygon points="250,215 235,200 265,200" fill="#222222"/>
      <path d="M 250 215 L 250 228 Q 235 240 225 230 M 250 228 Q 265 240 275 230" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Body & Paws -->
      <path d="M 190 320 L 170 440 L 330 440 L 310 320 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="205" cy="440" rx="30" ry="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="295" cy="440" rx="30" ry="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'ani-elephant',
    category: 'Animals',
    title: 'Baby Elephant Splash',
    emoji: '🐘',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Body -->
      <ellipse cx="280" cy="320" rx="120" ry="95" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Legs -->
      <rect x="190" y="380" width="40" height="70" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <rect x="250" y="380" width="40" height="70" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <rect x="330" y="380" width="40" height="70" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Head -->
      <circle cx="180" cy="220" r="80" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Giant Ear -->
      <path d="M 200 150 C 270 140 290 260 210 280 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 210 170 C 255 165 265 245 215 260 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Eye -->
      <circle cx="155" cy="205" r="9" fill="#222222"/>
      <circle cx="152" cy="202" r="3" fill="#FFFFFF"/>
      <!-- Trunk spraying up -->
      <path d="M 125 250 C 70 270 60 160 110 110" fill="none" stroke="#222222" stroke-width="24" stroke-linecap="round"/>
      <!-- Water Drops -->
      <circle cx="95" cy="80" r="14" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="130" cy="65" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="155" cy="95" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },

  // ================= 2. CUTE THINGS =================
  {
    id: 'cute-cupcake',
    category: 'Cute Things',
    title: 'Smiling Cherry Cupcake',
    emoji: '🧁',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <polygon points="150,260 180,440 320,440 350,260" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <line x1="200" y1="265" x2="215" y2="435" stroke="#222222" stroke-width="5"/>
      <line x1="250" y1="265" x2="250" y2="435" stroke="#222222" stroke-width="5"/>
      <line x1="300" y1="265" x2="285" y2="435" stroke="#222222" stroke-width="5"/>
      <path d="M 130 260 Q 130 160 250 140 Q 370 160 370 260 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 210 150 Q 250 80 270 140 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="250" cy="80" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 250 50 Q 290 20 280 5" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <circle cx="210" cy="205" r="8" fill="#222222"/>
      <circle cx="290" cy="205" r="8" fill="#222222"/>
      <path d="M 235 225 Q 250 240 265 225" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Sparkle Stars around -->
      <polygon points="90,120 95,135 110,138 98,148 102,162 90,153 78,162 82,148 70,138 85,135" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <polygon points="400,120 405,135 420,138 408,148 412,162 400,153 388,162 392,148 380,138 395,135" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'cute-tea-boba',
    category: 'Cute Things',
    title: 'Kawaii Boba Milk Tea',
    emoji: '🧋',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <rect x="235" y="40" width="30" height="150" fill="#FFFFFF" stroke="#222222" stroke-width="7" rx="6" transform="rotate(10, 250, 100)"/>
      <ellipse cx="250" cy="150" rx="130" ry="25" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="135,150 170,420 330,420 365,150" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 145 220 Q 250 230 355 220" fill="none" stroke="#222222" stroke-width="6"/>
      <circle cx="200" cy="380" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="385" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="300" cy="380" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="225" cy="345" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="275" cy="345" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="215" cy="270" r="9" fill="#222222"/>
      <circle cx="285" cy="270" r="9" fill="#222222"/>
      <path d="M 240 290 Q 250 302 260 290" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="190" cy="285" rx="12" ry="7" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <ellipse cx="310" cy="285" rx="12" ry="7" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'cute-panda',
    category: 'Cute Things',
    title: 'Panda & Bamboo Shoot',
    emoji: '🐼',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Bamboo -->
      <rect x="360" y="50" width="30" height="400" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <line x1="360" y1="180" x2="390" y2="180" stroke="#222222" stroke-width="5"/>
      <line x1="360" y1="300" x2="390" y2="300" stroke="#222222" stroke-width="5"/>
      <path d="M 390 180 Q 440 160 450 190 Q 420 200 390 185 Z" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Ears -->
      <circle cx="160" cy="130" r="32" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="300" cy="130" r="32" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Body -->
      <ellipse cx="230" cy="330" rx="100" ry="90" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Head -->
      <circle cx="230" cy="200" r="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Eye patches -->
      <ellipse cx="190" cy="195" rx="22" ry="28" fill="#FFFFFF" stroke="#222222" stroke-width="6" transform="rotate(-15, 190, 195)"/>
      <circle cx="192" cy="195" r="8" fill="#222222"/>
      <circle cx="189" cy="192" r="3" fill="#FFFFFF"/>
      <ellipse cx="270" cy="195" rx="22" ry="28" fill="#FFFFFF" stroke="#222222" stroke-width="6" transform="rotate(15, 270, 195)"/>
      <circle cx="268" cy="195" r="8" fill="#222222"/>
      <circle cx="265" cy="192" r="3" fill="#FFFFFF"/>
      <!-- Nose & Mouth -->
      <ellipse cx="230" cy="225" rx="15" ry="10" fill="#222222"/>
      <path d="M 230 235 Q 220 248 215 240 M 230 235 Q 240 248 245 240" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Paws -->
      <ellipse cx="160" cy="320" rx="30" ry="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="300" cy="320" rx="30" ry="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="170" cy="410" rx="32" ry="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="290" cy="410" rx="32" ry="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'cute-star',
    category: 'Cute Things',
    title: 'Wish Upon a Cloud Star',
    emoji: '⭐',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Soft Cloud Base -->
      <path d="M 120 400 Q 80 400 80 360 Q 80 320 130 320 Q 150 280 210 280 Q 250 280 270 310 Q 320 290 360 320 Q 400 320 400 360 Q 400 400 360 400 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Big Smiling Star -->
      <polygon points="250,50 300,165 425,175 330,260 360,385 250,320 140,385 170,260 75,175 200,165" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="215" cy="215" r="12" fill="#222222"/>
      <circle cx="285" cy="215" r="12" fill="#222222"/>
      <circle cx="211" cy="210" r="4" fill="#FFFFFF"/>
      <circle cx="281" cy="210" r="4" fill="#FFFFFF"/>
      <path d="M 235 245 Q 250 262 265 245" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="190" cy="235" rx="14" ry="9" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <ellipse cx="310" cy="235" rx="14" ry="9" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },

  // ================= 3. OCEAN =================
  {
    id: 'oce-dolphin',
    category: 'Ocean',
    title: 'Jumping Ocean Dolphin',
    emoji: '🐬',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Sun in Sky -->
      <circle cx="420" cy="90" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Dolphin Body -->
      <path d="M 70 280 C 120 130 280 110 380 190 C 440 240 460 260 410 250 C 320 220 200 230 130 320 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Belly -->
      <path d="M 130 320 C 190 270 270 250 370 250 C 300 270 190 330 130 320 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="240,135 275,80 300,145" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="220,230 235,290 265,240" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 70 280 C 50 250 20 240 30 285 C 40 295 50 290 70 285 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="390" cy="215" r="8" fill="#222222"/>
      <path d="M 405 230 Q 425 235 435 230" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Waves -->
      <path d="M 30 410 Q 130 370 230 410 T 430 410" fill="none" stroke="#222222" stroke-width="8"/>
      <path d="M 60 450 Q 160 410 260 450 T 460 450" fill="none" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },
  {
    id: 'oce-clownfish',
    category: 'Ocean',
    title: 'Clownfish & Seaweed',
    emoji: '🐠',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Seaweed on left -->
      <path d="M 60 460 Q 40 320 80 200 Q 50 120 70 50" fill="none" stroke="#222222" stroke-width="12" stroke-linecap="round"/>
      <path d="M 110 460 Q 140 350 100 240 Q 130 160 110 80" fill="none" stroke="#222222" stroke-width="10" stroke-linecap="round"/>
      <!-- Tail -->
      <polygon points="170,250 100,180 110,320" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Body -->
      <ellipse cx="310" cy="250" rx="140" ry="105" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Stripes -->
      <path d="M 270 150 C 250 210 250 290 270 350 L 305 352 C 285 290 285 210 305 148 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 370 165 C 355 210 355 290 370 335 L 395 325 C 380 285 380 215 395 175 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 290 145 Q 340 95 390 145 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 290 355 Q 330 405 370 355 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="410" cy="230" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="412" cy="230" r="8" fill="#222222"/>
      <path d="M 440 260 Q 450 265 440 270" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Air bubbles -->
      <circle cx="450" cy="180" r="14" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="470" cy="130" r="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'oce-sea-turtle',
    category: 'Ocean',
    title: 'Swimming Sea Turtle',
    emoji: '🐢',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 180 180 C 130 120 70 120 80 160 C 100 210 160 230 180 210 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 320 180 C 370 120 430 120 420 160 C 400 210 340 230 320 210 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 190 330 C 150 370 120 380 135 400 C 160 410 190 370 205 350 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 310 330 C 350 370 380 380 365 400 C 340 410 310 370 295 350 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="250" cy="120" rx="35" ry="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="235" cy="110" r="6" fill="#222222"/>
      <circle cx="265" cy="110" r="6" fill="#222222"/>
      <ellipse cx="250" cy="270" rx="100" ry="120" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="250,180 285,215 285,265 250,290 215,265 215,215" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <polygon points="250,290 280,320 280,360 250,380 220,360 220,320" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Starfish on seafloor -->
      <polygon points="410,380 415,395 430,398 418,408 422,422 410,413 398,422 402,408 390,398 405,395" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'oce-octopus',
    category: 'Ocean',
    title: 'Friendly Pirate Octopus',
    emoji: '🐙',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Pirate Hat -->
      <polygon points="160,140 250,50 340,140 250,120" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="250" cy="95" r="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <!-- Big Round Head -->
      <ellipse cx="250" cy="210" rx="95" ry="90" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Eyes & Smile -->
      <circle cx="215" cy="205" r="12" fill="#222222"/>
      <circle cx="211" cy="200" r="4" fill="#FFFFFF"/>
      <circle cx="285" cy="205" r="12" fill="#222222"/>
      <circle cx="281" cy="200" r="4" fill="#FFFFFF"/>
      <path d="M 235 235 Q 250 250 265 235" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <!-- 8 Wavy Tentacles -->
      <path d="M 170 270 Q 110 320 130 400 Q 150 420 160 380 Q 180 320 200 290" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 205 290 Q 170 360 190 430 Q 210 440 220 400 Q 225 340 230 295" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 240 295 Q 240 370 250 440 Q 270 440 270 390 Q 265 330 265 295" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 275 295 Q 290 360 310 430 Q 330 430 330 390 Q 315 330 295 290" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 305 285 Q 360 330 360 410 Q 380 410 375 370 Q 360 310 330 270" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },

  // ================= 4. DINOSAURS =================
  {
    id: 'dino-t-rex',
    category: 'Dinosaurs',
    title: 'Smiling Baby T-Rex',
    emoji: '🦖',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 160 300 C 70 340 50 250 40 220 C 70 280 140 330 180 350 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="230" cy="300" rx="90" ry="100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="250" cy="320" rx="50" ry="70" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="200" cy="410" rx="30" ry="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="270" cy="410" rx="30" ry="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 230 210 L 230 130 C 230 80 340 80 360 140 C 370 170 340 190 320 190 L 270 190 L 270 230 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="280" cy="120" r="10" fill="#222222"/>
      <circle cx="277" cy="117" r="3" fill="#FFFFFF"/>
      <polygon points="300,190 305,178 310,190" fill="#FFFFFF" stroke="#222222" stroke-width="3"/>
      <polygon points="320,190 325,178 330,190" fill="#FFFFFF" stroke="#222222" stroke-width="3"/>
      <path d="M 280 250 Q 320 260 310 270" fill="none" stroke="#222222" stroke-width="8" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'dino-bronto',
    category: 'Dinosaurs',
    title: 'Long Neck Bronto',
    emoji: '🦕',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 140 330 C 60 330 30 390 20 400 C 40 370 90 360 150 370 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <ellipse cx="230" cy="330" rx="100" ry="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 290 320 C 320 250 340 180 340 90 C 370 85 390 100 375 130 C 360 210 330 280 320 330 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="370" cy="95" rx="30" ry="20" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="375" cy="90" r="5" fill="#222222"/>
      <rect x="160" y="375" width="32" height="60" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <rect x="250" y="375" width="32" height="60" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Prehistoric Fern Tree -->
      <line x1="430" y1="440" x2="430" y2="200" stroke="#222222" stroke-width="8"/>
      <path d="M 430 200 Q 400 150 360 170" fill="none" stroke="#222222" stroke-width="6"/>
      <path d="M 430 230 Q 460 180 490 200" fill="none" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'dino-stego',
    category: 'Dinosaurs',
    title: 'Spiky Stegosaurus',
    emoji: '🦖',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Body -->
      <path d="M 120 360 C 130 220 350 220 360 360 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Diamond Plates along back -->
      <polygon points="160,240 175,170 200,240" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="215,220 235,140 265,220" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="280,230 300,160 325,230" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Head -->
      <path d="M 350 320 C 390 320 420 340 430 360 C 410 380 370 370 350 360 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="395" cy="345" r="6" fill="#222222"/>
      <!-- Spiked Tail -->
      <path d="M 130 340 C 90 340 50 330 40 310" fill="none" stroke="#222222" stroke-width="16" stroke-linecap="round"/>
      <polygon points="50,305 40,270 65,305" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <polygon points="65,305 70,275 80,310" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Stout Legs -->
      <rect x="180" y="360" width="35" height="60" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <rect x="270" y="360" width="35" height="60" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },
  {
    id: 'dino-ptero',
    category: 'Dinosaurs',
    title: 'Flying Pterodactyl',
    emoji: '🦕',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Giant Wings -->
      <path d="M 250 250 L 80 140 Q 140 260 220 270 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 250 250 L 420 140 Q 360 260 280 270 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Body -->
      <ellipse cx="250" cy="270" rx="30" ry="50" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Head with crest and beak -->
      <polygon points="250,230 220,130 250,180 320,190" fill="#FFFFFF" stroke="#222222" stroke-width="7" stroke-linejoin="round"/>
      <circle cx="260" cy="185" r="6" fill="#222222"/>
      <!-- Clouds below -->
      <path d="M 60 410 Q 100 370 140 410 Q 180 370 220 410 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 280 430 Q 320 390 360 430 Q 400 390 440 430 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },

  // ================= 5. SPACE =================
  {
    id: 'spc-rocket',
    category: 'Space',
    title: 'Cosmic Moon Rocket',
    emoji: '🚀',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <circle cx="400" cy="100" r="60" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="380" cy="80" r="14" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="420" cy="115" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <path d="M 250 70 C 180 150 170 330 170 330 L 330 330 C 330 330 320 150 250 70 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="250" cy="200" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="250" cy="200" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <polygon points="170,260 90,340 170,330" fill="#FFFFFF" stroke="#222222" stroke-width="7" stroke-linejoin="round"/>
      <polygon points="330,260 410,340 330,330" fill="#FFFFFF" stroke="#222222" stroke-width="7" stroke-linejoin="round"/>
      <polygon points="210,335 250,440 290,335" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="230,335 250,390 270,335" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <polygon points="80,100 85,115 100,118 88,128 92,142 80,133 68,142 72,128 60,118 75,115" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'spc-astronaut',
    category: 'Space',
    title: 'Floating Child Astronaut',
    emoji: '🧑‍🚀',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <circle cx="250" cy="180" r="100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="250" cy="180" rx="70" ry="55" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="225" cy="175" r="9" fill="#222222"/>
      <circle cx="275" cy="175" r="9" fill="#222222"/>
      <path d="M 240 195 Q 250 208 260 195" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <rect x="175" y="275" width="150" height="120" rx="25" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="220" cy="320" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <rect x="185" y="390" width="45" height="60" rx="12" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <rect x="270" y="390" width="45" height="60" rx="12" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Floating stars -->
      <polygon points="90,80 95,95 110,98 98,108 102,122 90,113 78,122 82,108 70,98 85,95" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <polygon points="410,280 415,295 430,298 418,308 422,322 410,313 398,322 402,308 390,298 405,295" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'spc-saturn',
    category: 'Space',
    title: 'Planet Saturn & Stars',
    emoji: '🪐',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Planet Sphere -->
      <circle cx="250" cy="250" r="110" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Ring ellipse cutting across -->
      <ellipse cx="250" cy="250" rx="210" ry="55" fill="none" stroke="#222222" stroke-width="12" transform="rotate(-20, 250, 250)"/>
      <ellipse cx="250" cy="250" rx="180" ry="40" fill="none" stroke="#222222" stroke-width="6" transform="rotate(-20, 250, 250)"/>
      <!-- Cute Face on Planet -->
      <circle cx="225" cy="245" r="10" fill="#222222"/>
      <circle cx="275" cy="245" r="10" fill="#222222"/>
      <path d="M 240 268 Q 250 280 260 268" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Shooting Comet -->
      <circle cx="90" cy="110" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <line x1="105" y1="100" x2="160" y2="70" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <line x1="105" y1="110" x2="170" y2="85" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'spc-ufo-alien',
    category: 'Space',
    title: 'Friendly Alien in UFO',
    emoji: '🛸',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Glass Dome -->
      <path d="M 180 210 C 180 130 320 130 320 210 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Alien in Dome -->
      <circle cx="250" cy="175" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="250" cy="115" r="8" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <line x1="250" y1="123" x2="250" y2="145" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="170" r="12" fill="#222222"/>
      <circle cx="247" cy="166" r="4" fill="#FFFFFF"/>
      <path d="M 242 188 Q 250 196 258 188" fill="none" stroke="#222222" stroke-width="4" stroke-linecap="round"/>
      <!-- UFO Disc -->
      <ellipse cx="250" cy="240" rx="160" ry="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Lights on saucer -->
      <circle cx="150" cy="245" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="200" cy="255" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="258" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="300" cy="255" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="350" cy="245" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Tractor Beam below -->
      <polygon points="210,285 290,285 360,430 140,430" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },

  // ================= 6. FANTASY =================
  {
    id: 'fan-unicorn',
    category: 'Fantasy',
    title: 'Magical Rainbow Unicorn',
    emoji: '🦄',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <ellipse cx="220" cy="340" rx="120" ry="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 290 320 C 330 250 330 180 320 140 C 300 135 270 170 240 260 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 320 140 C 350 135 410 160 410 190 C 400 220 340 230 320 220 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="340,135 410,40 375,145" fill="#FFFFFF" stroke="#222222" stroke-width="7" stroke-linejoin="round"/>
      <path d="M 270 150 C 230 140 220 200 250 210" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 250 200 C 210 200 200 260 230 270" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="365" cy="180" r="9" fill="#222222"/>
      <rect x="140" y="415" width="28" height="55" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <rect x="250" y="415" width="28" height="55" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="80,80 85,95 100,98 88,108 92,122 80,113 68,122 72,108 60,98 75,95" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'fan-dragon',
    category: 'Fantasy',
    title: 'Baby Fire Dragon',
    emoji: '🐲',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <polygon points="200,200 80,120 130,240" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <ellipse cx="260" cy="320" rx="90" ry="100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="275" cy="335" rx="50" ry="65" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="280" cy="170" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="260,110 240,60 285,100" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="310,110 330,60 335,105" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="305" cy="165" r="10" fill="#222222"/>
      <circle cx="302" cy="161" r="3" fill="#FFFFFF"/>
      <circle cx="380" cy="190" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="415" cy="175" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Gold Coin Pile -->
      <ellipse cx="200" cy="420" rx="20" ry="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <ellipse cx="230" cy="430" rx="20" ry="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <ellipse cx="270" cy="425" rx="20" ry="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'fan-fairy',
    category: 'Fantasy',
    title: 'Fluttering Garden Fairy',
    emoji: '🧚',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Fairy Wings -->
      <path d="M 220 200 C 130 90 70 120 100 210 C 120 260 190 240 220 220 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 280 200 C 370 90 430 120 400 210 C 380 260 310 240 280 220 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Head & Hair -->
      <circle cx="250" cy="160" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 215 150 C 215 100 285 100 285 150 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="238" cy="160" r="6" fill="#222222"/>
      <circle cx="262" cy="160" r="6" fill="#222222"/>
      <path d="M 244 175 Q 250 182 256 175" fill="none" stroke="#222222" stroke-width="4" stroke-linecap="round"/>
      <!-- Fairy Dress -->
      <polygon points="250,205 210,320 290,320" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Magic Wand with star -->
      <line x1="280" y1="230" x2="350" y2="170" stroke="#222222" stroke-width="6"/>
      <polygon points="360,150 365,165 380,168 368,178 372,192 360,183 348,192 352,178 340,168 355,165" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'fan-magic-potion',
    category: 'Fantasy',
    title: 'Bubbling Magic Potion',
    emoji: '🧪',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Cork Stopper -->
      <rect x="220" y="70" width="60" height="35" rx="6" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Flask Neck -->
      <rect x="230" y="105" width="40" height="65" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Flask Bulb -->
      <path d="M 230 170 C 130 200 110 400 250 420 C 390 400 370 200 270 170 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Potion Liquid level -->
      <path d="M 150 320 Q 250 300 350 320 C 370 400 130 400 150 320 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Magic Bubbles -->
      <circle cx="210" cy="350" r="14" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="270" cy="360" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="240" cy="240" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="280" cy="200" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },

  // ================= 7. PRINCESS =================
  {
    id: 'prn-tiara-castle',
    category: 'Princess',
    title: 'Fairytale Princess Castle',
    emoji: '🏰',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <rect x="175" y="240" width="150" height="180" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 215 420 L 215 340 C 215 310 285 310 285 340 L 285 420 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <rect x="100" y="190" width="75" height="230" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="100,190 137,90 175,190" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <rect x="325" y="190" width="75" height="230" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="325,190 362,90 400,190" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="215,240 250,130 285,240" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="137,90 137,60 170,75" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <polygon points="362,90 362,60 395,75" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'prn-crown',
    category: 'Princess',
    title: 'Royal Princess Tiara',
    emoji: '👑',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <polygon points="80,380 90,180 180,270 250,100 320,270 410,180 420,380" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <circle cx="250" cy="125" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="95" cy="205" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="405" cy="205" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="250" cy="330" rx="30" ry="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'prn-carriage',
    category: 'Princess',
    title: 'Royal Pumpkin Carriage',
    emoji: '🎠',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Pumpkin Cabin -->
      <circle cx="250" cy="240" r="120" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Window -->
      <circle cx="250" cy="240" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <line x1="250" y1="195" x2="250" y2="285" stroke="#222222" stroke-width="4"/>
      <line x1="205" y1="240" x2="295" y2="240" stroke="#222222" stroke-width="4"/>
      <!-- Crown on Top -->
      <polygon points="235,120 240,95 250,105 260,95 265,120" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Wheels -->
      <circle cx="150" cy="370" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="150" cy="370" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="350" cy="370" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="350" cy="370" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <line x1="195" y1="370" x2="305" y2="370" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },
  {
    id: 'prn-princess',
    category: 'Princess',
    title: 'Smiling Fairytale Princess',
    emoji: '👸',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Tiara -->
      <polygon points="225,90 235,60 250,75 265,60 275,90" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Head & Hair -->
      <circle cx="250" cy="140" r="50" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 200 140 C 190 220 210 240 220 210" fill="none" stroke="#222222" stroke-width="7"/>
      <path d="M 300 140 C 310 220 290 240 280 210" fill="none" stroke="#222222" stroke-width="7"/>
      <!-- Face -->
      <circle cx="235" cy="135" r="7" fill="#222222"/>
      <circle cx="265" cy="135" r="7" fill="#222222"/>
      <path d="M 242 155 Q 250 165 258 155" fill="none" stroke="#222222" stroke-width="4" stroke-linecap="round"/>
      <!-- Gown Bodice -->
      <polygon points="230,190 270,190 260,250 240,250" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Giant Ballgown Skirt -->
      <path d="M 240 250 L 120 440 L 380 440 L 260 250 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Scallop Hem -->
      <path d="M 120 440 Q 185 410 250 440 Q 315 410 380 440" fill="none" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },

  // ================= 8. VEHICLES =================
  {
    id: 'veh-car',
    category: 'Vehicles',
    title: 'Zoomy Buggy Car',
    emoji: '🚗',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 80 320 L 120 220 L 320 220 L 400 320 L 430 320 L 430 370 L 70 370 L 70 320 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <polygon points="140,235 225,235 225,305 105,305" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="245,235 315,235 365,305 245,305" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="150" cy="375" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="150" cy="375" r="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="350" cy="375" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="350" cy="375" r="20" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="420" cy="335" r="14" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'veh-airplane',
    category: 'Vehicles',
    title: 'Sky Airline Plane',
    emoji: '✈️',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <ellipse cx="250" cy="250" rx="180" ry="55" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 370 230 Q 410 245 410 260 L 360 260 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="220,240 180,90 260,90 270,240" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="220,260 180,410 260,410 270,260" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="90,245 40,160 95,160 120,245" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="210" cy="245" r="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="250" cy="245" r="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="290" cy="245" r="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'veh-train',
    category: 'Vehicles',
    title: 'Choo-Choo Steam Train',
    emoji: '🚂',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Tracks -->
      <line x1="30" y1="430" x2="470" y2="430" stroke="#222222" stroke-width="10"/>
      <!-- Train Engine Body -->
      <rect x="150" y="240" width="220" height="120" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Cab on left -->
      <rect x="70" y="170" width="90" height="190" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <rect x="90" y="190" width="45" height="45" rx="6" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Smokestack on right -->
      <polygon points="300,240 290,160 330,160 320,240" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Smoke Puffs -->
      <circle cx="310" cy="110" r="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="260" cy="75" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Big Wheels -->
      <circle cx="115" cy="380" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="205" cy="380" r="40" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="295" cy="380" r="40" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
    </svg>`,
  },
  {
    id: 'veh-firetruck',
    category: 'Vehicles',
    title: 'Hero Fire Truck',
    emoji: '🚒',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <rect x="60" y="220" width="360" height="150" rx="14" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Cab window -->
      <polygon points="340,235 400,235 410,290 340,290" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Siren on top -->
      <rect x="360" y="190" width="30" height="30" rx="6" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Ladder on roof -->
      <rect x="80" y="170" width="220" height="35" rx="6" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <line x1="120" y1="170" x2="120" y2="205" stroke="#222222" stroke-width="5"/>
      <line x1="160" y1="170" x2="160" y2="205" stroke="#222222" stroke-width="5"/>
      <line x1="200" y1="170" x2="200" y2="205" stroke="#222222" stroke-width="5"/>
      <line x1="240" y1="170" x2="240" y2="205" stroke="#222222" stroke-width="5"/>
      <!-- Wheels -->
      <circle cx="130" cy="380" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="340" cy="380" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
    </svg>`,
  },

  // ================= 9. FOOD =================
  {
    id: 'foo-pizza',
    category: 'Food',
    title: 'Cheesy Pepperoni Pizza',
    emoji: '🍕',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 120 120 Q 250 80 380 120 L 390 150 Q 250 110 110 150 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="115,150 250,440 385,150" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="210" cy="200" r="26" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="290" cy="230" r="26" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="240" cy="310" r="24" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 180 270 C 180 255 210 255 210 270 Z" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'foo-donut',
    category: 'Food',
    title: 'Sweet Sprinkle Donut',
    emoji: '🍩',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <circle cx="250" cy="250" r="160" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 120 250 C 130 180 180 120 250 120 C 320 120 370 180 380 250 C 370 290 350 280 330 310 C 310 340 280 330 260 360 C 230 330 210 350 180 340 C 150 330 130 290 120 250 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="250" cy="250" r="55" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <rect x="180" y="160" width="24" height="8" rx="4" fill="#FFFFFF" stroke="#222222" stroke-width="4" transform="rotate(25, 180, 160)"/>
      <rect x="290" y="160" width="24" height="8" rx="4" fill="#FFFFFF" stroke="#222222" stroke-width="4" transform="rotate(-30, 290, 160)"/>
      <rect x="330" y="240" width="24" height="8" rx="4" fill="#FFFFFF" stroke="#222222" stroke-width="4" transform="rotate(45, 330, 240)"/>
      <rect x="170" y="270" width="24" height="8" rx="4" fill="#FFFFFF" stroke="#222222" stroke-width="4" transform="rotate(-15, 170, 270)"/>
    </svg>`,
  },
  {
    id: 'foo-burger',
    category: 'Food',
    title: 'Giant Tasty Burger',
    emoji: '🍔',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Top Bun -->
      <path d="M 110 200 C 110 80 390 80 390 200 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Sesame seeds -->
      <ellipse cx="200" cy="140" rx="8" ry="4" fill="#FFFFFF" stroke="#222222" stroke-width="3" transform="rotate(20, 200, 140)"/>
      <ellipse cx="250" cy="125" rx="8" ry="4" fill="#FFFFFF" stroke="#222222" stroke-width="3"/>
      <ellipse cx="300" cy="140" rx="8" ry="4" fill="#FFFFFF" stroke="#222222" stroke-width="3" transform="rotate(-20, 300, 140)"/>
      <!-- Melted Cheese -->
      <polygon points="120,210 380,210 330,260 250,230 180,260" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Burger Patty -->
      <rect x="100" y="250" width="300" height="50" rx="20" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Lettuce ruffles -->
      <path d="M 90 310 Q 140 330 190 310 Q 240 330 290 310 Q 340 330 410 310" fill="none" stroke="#222222" stroke-width="7"/>
      <!-- Bottom Bun -->
      <rect x="115" y="325" width="270" height="65" rx="25" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
    </svg>`,
  },
  {
    id: 'foo-icecream',
    category: 'Food',
    title: 'Double Scoop Sundae Cone',
    emoji: '🍦',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Waffle Cone -->
      <polygon points="250,450 170,270 330,270" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <line x1="200" y1="270" x2="280" y2="400" stroke="#222222" stroke-width="4"/>
      <line x1="300" y1="270" x2="220" y2="400" stroke="#222222" stroke-width="4"/>
      <!-- Bottom Scoop -->
      <circle cx="250" cy="230" r="70" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Top Scoop -->
      <circle cx="250" cy="130" r="60" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Cherry -->
      <circle cx="250" cy="60" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 250 38 Q 280 15 270 5" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Sprinkles on top scoop -->
      <rect x="220" y="110" width="16" height="6" rx="3" fill="#FFFFFF" stroke="#222222" stroke-width="3"/>
      <rect x="265" y="115" width="16" height="6" rx="3" fill="#FFFFFF" stroke="#222222" stroke-width="3" transform="rotate(45, 265, 115)"/>
    </svg>`,
  },

  // ================= 10. NATURE =================
  {
    id: 'nat-tree-house',
    category: 'Nature',
    title: 'Big Sunny Apple Tree',
    emoji: '🌳',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 210 440 L 225 280 L 275 280 L 290 440 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="250" cy="180" r="85" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="170" cy="220" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="330" cy="220" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="180" cy="150" r="65" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="320" cy="150" r="65" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="200" cy="190" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="280" cy="170" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="240" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'nat-rainbow-scene',
    category: 'Nature',
    title: 'Rainbow & Fluffy Clouds',
    emoji: '🌈',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 100 350 A 150 150 0 0 1 400 350" fill="none" stroke="#222222" stroke-width="14"/>
      <path d="M 120 350 A 130 130 0 0 1 380 350" fill="none" stroke="#222222" stroke-width="14"/>
      <path d="M 140 350 A 110 110 0 0 1 360 350" fill="none" stroke="#222222" stroke-width="14"/>
      <circle cx="110" cy="350" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="150" cy="330" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="75" cy="350" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="390" cy="350" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="350" cy="330" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="425" cy="350" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },
  {
    id: 'nat-beach',
    category: 'Nature',
    title: 'Tropical Beach & Palms',
    emoji: '🏝️',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Sun -->
      <circle cx="410" cy="90" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Palm Trunk -->
      <path d="M 160 420 Q 140 280 200 160" fill="none" stroke="#222222" stroke-width="20" stroke-linecap="round"/>
      <!-- Palm Leaves -->
      <path d="M 200 160 Q 130 120 90 150 Q 150 180 200 160 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 200 160 Q 200 90 180 60 Q 220 100 200 160 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 200 160 Q 260 110 300 130 Q 240 180 200 160 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Island Sand -->
      <path d="M 30 420 Q 250 360 470 420 L 470 480 L 30 480 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Beach Ball -->
      <circle cx="340" cy="390" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 315 390 Q 340 360 365 390" fill="none" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'nat-mushroom-garden',
    category: 'Nature',
    title: 'Cute Mushroom Garden',
    emoji: '🍄',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Ground -->
      <line x1="30" y1="420" x2="470" y2="420" stroke="#222222" stroke-width="8"/>
      <!-- Big Mushroom -->
      <rect x="220" y="270" width="60" height="150" rx="16" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 120 270 C 120 120 380 120 380 270 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="190" cy="200" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="310" cy="190" r="24" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="230" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Small Mushroom -->
      <rect x="115" y="340" width="35" height="80" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 70 340 C 70 260 190 260 190 340 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="130" cy="300" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },

  // ================= 11. FLOWERS =================
  {
    id: 'flw-sunflower',
    category: 'Flowers',
    title: 'Happy Sunflower & Bee',
    emoji: '🌻',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 250 250 L 250 450" fill="none" stroke="#222222" stroke-width="12"/>
      <path d="M 250 360 Q 180 320 150 360 Q 200 400 250 370 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
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
      <circle cx="250" cy="190" r="55" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="230" cy="180" r="8" fill="#222222"/>
      <circle cx="270" cy="180" r="8" fill="#222222"/>
      <path d="M 240 205 Q 250 218 260 205" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Little Bee -->
      <ellipse cx="380" cy="100" rx="20" ry="14" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <line x1="375" y1="87" x2="375" y2="113" stroke="#222222" stroke-width="4"/>
      <ellipse cx="370" cy="80" rx="10" ry="14" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'flw-tulip',
    category: 'Flowers',
    title: 'Spring Tulip & Butterfly',
    emoji: '🌷',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 250 250 L 250 450" fill="none" stroke="#222222" stroke-width="12"/>
      <path d="M 250 350 Q 320 300 340 340 Q 300 400 250 380 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 160 220 C 160 300 340 300 340 220 C 340 160 310 130 290 190 C 270 130 230 130 210 190 C 190 130 160 160 160 220 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Little Butterfly -->
      <ellipse cx="140" cy="100" rx="6" ry="16" fill="#222222"/>
      <circle cx="115" cy="90" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="115" cy="115" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="165" cy="90" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="165" cy="115" r="12" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'flw-rose',
    category: 'Flowers',
    title: 'Blooming Red Rose',
    emoji: '🌹',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <path d="M 250 250 Q 240 350 250 450" fill="none" stroke="#222222" stroke-width="12"/>
      <!-- Rose Petals Spiral -->
      <circle cx="250" cy="180" r="80" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 210 140 C 290 110 300 210 250 230 C 200 210 210 150 250 150" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Leaves -->
      <path d="M 245 320 Q 160 280 140 320 Q 190 360 245 330 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 255 350 Q 340 310 360 350 Q 310 390 255 360 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },
  {
    id: 'flw-lotus',
    category: 'Flowers',
    title: 'Lotus Flower on Pond',
    emoji: '🪷',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Lilypad -->
      <ellipse cx="250" cy="380" rx="180" ry="50" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <line x1="250" y1="380" x2="380" y2="390" stroke="#222222" stroke-width="5"/>
      <!-- Lotus Petals -->
      <path d="M 250 150 C 230 240 230 310 250 350 C 270 310 270 240 250 150 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 180 220 C 180 290 220 330 250 350 C 220 310 180 270 180 220 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 320 220 C 320 290 280 330 250 350 C 280 310 320 270 320 220 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Water ripples -->
      <ellipse cx="250" cy="420" rx="210" ry="25" fill="none" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },

  // ================= 12. HOUSES =================
  {
    id: 'hou-cottage',
    category: 'Houses',
    title: 'Cozy Garden Cottage',
    emoji: '🏡',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <rect x="130" y="240" width="240" height="180" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="100,240 250,110 400,240" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <polygon points="310,130 310,190 350,210 350,130" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <rect x="215" y="320" width="70" height="100" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="230" cy="370" r="6" fill="#222222"/>
      <rect x="150" y="270" width="45" height="45" rx="6" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <line x1="172" y1="270" x2="172" y2="315" stroke="#222222" stroke-width="4"/>
      <line x1="150" y1="292" x2="195" y2="292" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'hou-windmill',
    category: 'Houses',
    title: 'Rustic Country Windmill',
    emoji: '🏠',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <polygon points="190,440 210,220 290,220 310,440" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="200,220 250,160 300,220" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="250,210 240,60 260,60" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="250,210 240,360 260,360" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="250,210 100,200 100,220" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="250,210 400,200 400,220" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="250" cy="210" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'hou-mushroom-house',
    category: 'Houses',
    title: 'Fairy Mushroom Cottage',
    emoji: '🍄',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Mushroom Cap Roof -->
      <path d="M 100 240 C 100 80 400 80 400 240 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="180" cy="160" r="24" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="320" cy="150" r="26" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <!-- Stem House Base -->
      <path d="M 160 240 L 140 430 L 360 430 L 340 240 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Wooden Arched Door -->
      <path d="M 215 430 L 215 330 C 215 300 285 300 285 330 L 285 430 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="230" cy="370" r="6" fill="#222222"/>
      <!-- Round Window -->
      <circle cx="300" cy="280" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <line x1="300" y1="258" x2="300" y2="302" stroke="#222222" stroke-width="4"/>
      <line x1="278" y1="280" x2="322" y2="280" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'hou-igloo',
    category: 'Houses',
    title: 'Snowy Polar Igloo',
    emoji: '🧊',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Igloo Dome -->
      <path d="M 110 380 C 110 180 390 180 390 380 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Ice Block Lines -->
      <path d="M 135 310 Q 250 260 365 310" fill="none" stroke="#222222" stroke-width="6"/>
      <path d="M 180 240 Q 250 210 320 240" fill="none" stroke="#222222" stroke-width="6"/>
      <!-- Tunnel Entrance -->
      <path d="M 210 380 L 210 310 Q 250 280 290 310 L 290 380 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 225 380 L 225 325 Q 250 305 275 325 L 275 380 Z" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },

  // ================= 13. FAMILY =================
  {
    id: 'fam-bear-family',
    category: 'Family',
    title: 'Loving Bear Family Hug',
    emoji: '👨‍👩‍👧',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <ellipse cx="190" cy="320" rx="90" ry="110" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="190" cy="180" r="70" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="140" cy="125" r="24" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="240" cy="125" r="24" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="170" cy="170" r="8" fill="#222222"/>
      <circle cx="210" cy="170" r="8" fill="#222222"/>
      <ellipse cx="320" cy="350" rx="65" ry="80" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="320" cy="240" r="50" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="280" cy="200" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="360" cy="200" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="305" cy="235" r="6" fill="#222222"/>
      <circle cx="335" cy="235" r="6" fill="#222222"/>
      <path d="M 260 290 C 240 260 220 270 230 290 Q 260 320 260 330 Q 260 320 290 290 C 300 270 280 260 260 290 Z" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'fam-ducklings',
    category: 'Family',
    title: 'Mama Duck & Ducklings',
    emoji: '🦆',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Mama Duck -->
      <ellipse cx="160" cy="300" rx="80" ry="60" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="120" cy="200" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="85,200 40,210 85,220" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="110" cy="190" r="7" fill="#222222"/>
      <!-- Baby Duckling 1 -->
      <ellipse cx="290" cy="320" rx="45" ry="35" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="270" cy="265" r="25" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="250,265 225,270 250,275" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="265" cy="260" r="5" fill="#222222"/>
      <!-- Baby Duckling 2 -->
      <ellipse cx="400" cy="330" rx="40" ry="30" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="380" cy="280" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="360,280 340,285 360,290" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="375" cy="275" r="4" fill="#222222"/>
      <!-- Pond Waves -->
      <path d="M 30 380 Q 250 350 470 380" fill="none" stroke="#222222" stroke-width="7"/>
      <path d="M 60 410 Q 250 380 440 410" fill="none" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'fam-birds',
    category: 'Family',
    title: 'Bird Family in Treetop Nest',
    emoji: '🐦',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Nest -->
      <path d="M 120 320 C 120 440 380 440 380 320 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <line x1="140" y1="350" x2="360" y2="350" stroke="#222222" stroke-width="5"/>
      <line x1="160" y1="380" x2="340" y2="380" stroke="#222222" stroke-width="5"/>
      <!-- Mama Bird -->
      <ellipse cx="200" cy="260" rx="55" ry="50" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="170" cy="180" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="140,180 100,190 140,200" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="160" cy="170" r="6" fill="#222222"/>
      <!-- Baby Chick -->
      <circle cx="300" cy="270" r="30" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <polygon points="330,265 355,270 330,275" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="295" cy="265" r="5" fill="#222222"/>
      <!-- Worm in mama beak -->
      <path d="M 100 190 Q 70 210 50 190" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
    </svg>`,
  },

  // ================= 14. SEASONS =================
  {
    id: 'sea-snowman',
    category: 'Seasons',
    title: 'Winter Snowman & Scarf',
    emoji: '⛄',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <circle cx="250" cy="360" r="100" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <circle cx="250" cy="200" r="75" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <rect x="195" y="60" width="110" height="80" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <line x1="170" y1="140" x2="330" y2="140" stroke="#222222" stroke-width="8" stroke-linecap="round"/>
      <circle cx="225" cy="185" r="7" fill="#222222"/>
      <circle cx="275" cy="185" r="7" fill="#222222"/>
      <polygon points="250,195 315,205 250,215" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <rect x="200" y="260" width="100" height="24" rx="8" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <rect x="270" y="275" width="25" height="65" rx="6" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="250" cy="330" r="9" fill="#222222"/>
      <circle cx="250" cy="370" r="9" fill="#222222"/>
      <!-- Falling Snowflakes -->
      <circle cx="90" cy="120" r="8" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="410" cy="160" r="8" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="120" cy="270" r="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="390" cy="320" r="10" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'sea-autumn-leaf',
    category: 'Seasons',
    title: 'Autumn Squirrel & Acorn',
    emoji: '🍁',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Giant Maple Leaf Background -->
      <polygon points="250,60 275,120 330,110 310,160 370,180 330,220 350,270 280,250 260,310 240,310 220,250 150,270 170,220 130,180 190,160 170,110 225,120" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Cute Squirrel Holding Acorn -->
      <path d="M 230 420 C 200 420 190 320 230 320 C 270 320 270 420 230 420 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Fluffy Tail -->
      <path d="M 260 410 C 340 430 380 340 330 260 C 300 220 270 280 270 340" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="230" cy="275" r="35" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="215,245 220,225 230,245" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <polygon points="235,245 245,225 250,245" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
      <circle cx="220" cy="270" r="5" fill="#222222"/>
      <circle cx="240" cy="270" r="5" fill="#222222"/>
      <!-- Acorn -->
      <ellipse cx="230" cy="355" rx="16" ry="20" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <path d="M 215 345 Q 230 335 245 345 Z" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'sea-spring-butterfly',
    category: 'Seasons',
    title: 'Spring Garden Blossom',
    emoji: '🦋',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Big Butterfly Wings -->
      <path d="M 250 220 C 180 80 40 140 100 270 C 130 340 210 300 250 250 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <path d="M 250 220 C 320 80 460 140 400 270 C 370 340 290 300 250 250 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Lower wings -->
      <path d="M 250 250 C 200 320 120 370 150 420 C 180 450 240 370 250 300 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 250 250 C 300 320 380 370 350 420 C 320 450 260 370 250 300 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Body -->
      <ellipse cx="250" cy="240" rx="14" ry="70" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="250" cy="155" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 242 142 Q 220 90 200 100" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <path d="M 258 142 Q 280 90 300 100" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
      <!-- Wing Spot Details -->
      <circle cx="160" cy="220" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="340" cy="220" r="22" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'sea-summer-beach',
    category: 'Seasons',
    title: 'Sunny Sandcastle Beach',
    emoji: '🏖️',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Big Smiling Sun -->
      <circle cx="90" cy="90" r="45" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="78" cy="85" r="6" fill="#222222"/>
      <circle cx="102" cy="85" r="6" fill="#222222"/>
      <path d="M 82 105 Q 90 115 98 105" fill="none" stroke="#222222" stroke-width="4" stroke-linecap="round"/>
      <!-- Sandcastle -->
      <rect x="180" y="270" width="140" height="140" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Battlements -->
      <polygon points="180,270 180,240 210,240 210,270 240,270 240,240 270,240 270,270 300,270 300,240 320,240 320,270" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Arched Door -->
      <path d="M 225 410 L 225 340 Q 250 320 275 340 L 275 410 Z" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Towers -->
      <rect x="130" y="290" width="50" height="120" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="120,290 155,220 190,290" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <rect x="320" y="290" width="50" height="120" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <polygon points="310,290 345,220 380,290" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Flag -->
      <line x1="250" y1="240" x2="250" y2="180" stroke="#222222" stroke-width="5"/>
      <polygon points="250,180 250,205 285,192" fill="#FFFFFF" stroke="#222222" stroke-width="4"/>
    </svg>`,
  },

  // ================= 15. HOLIDAYS =================
  {
    id: 'hol-xmas-tree',
    category: 'Holidays',
    title: 'Christmas Holiday Tree',
    emoji: '🎄',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <rect x="220" y="400" width="60" height="60" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <polygon points="250,110 320,200 280,200 360,290 310,290 400,400 100,400 190,290 140,290 220,200 180,200" fill="#FFFFFF" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <polygon points="250,55 258,80 285,82 263,98 270,125 250,110 230,125 237,98 215,82 242,80" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <circle cx="200" cy="350" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="300" cy="350" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="270" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="230" cy="180" r="14" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'hol-gift-box',
    category: 'Holidays',
    title: 'Giant Surprise Gift Box',
    emoji: '🎁',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <rect x="130" y="210" width="240" height="210" rx="14" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <rect x="110" y="170" width="280" height="50" rx="10" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <rect x="225" y="170" width="50" height="250" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <rect x="130" y="290" width="240" height="50" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <path d="M 250 170 C 200 90 120 100 170 170 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <path d="M 250 170 C 300 90 380 100 330 170 Z" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <circle cx="250" cy="170" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'hol-pumpkin',
    category: 'Holidays',
    title: 'Happy Halloween Pumpkin',
    emoji: '🎃',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Pumpkin Stem -->
      <polygon points="235,170 245,90 265,90 265,170" fill="#FFFFFF" stroke="#222222" stroke-width="7"/>
      <!-- Pumpkin Ribs / Body -->
      <ellipse cx="250" cy="300" rx="160" ry="125" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <ellipse cx="250" cy="300" rx="105" ry="122" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <ellipse cx="250" cy="300" rx="45" ry="118" fill="#FFFFFF" stroke="#222222" stroke-width="6"/>
      <!-- Jack-o'-lantern Triangle Eyes -->
      <polygon points="205,250 185,285 225,285" fill="#222222"/>
      <polygon points="295,250 275,285 315,285" fill="#222222"/>
      <!-- Triangle Nose -->
      <polygon points="250,300 240,320 260,320" fill="#222222"/>
      <!-- Happy Toothy Grin -->
      <path d="M 175 340 Q 250 420 325 340 Q 300 370 280 345 Q 260 370 240 345 Q 210 370 175 340 Z" fill="#222222"/>
    </svg>`,
  },
  {
    id: 'hol-easter-egg',
    category: 'Holidays',
    title: 'Decorated Easter Egg',
    emoji: '🥚',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFFFF"/>
      <!-- Giant Egg Shape -->
      <path d="M 250 70 C 130 150 110 340 160 410 C 200 450 300 450 340 410 C 390 340 370 150 250 70 Z" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Zigzag Pattern Strip 1 -->
      <polyline points="120,240 150,215 180,240 210,215 240,240 270,215 300,240 330,215 360,240 380,225" fill="none" stroke="#222222" stroke-width="6" stroke-linejoin="round"/>
      <!-- Wavy Pattern Strip 2 -->
      <path d="M 140 310 Q 170 280 200 310 T 260 310 T 320 310 T 370 310" fill="none" stroke="#222222" stroke-width="6"/>
      <!-- Polka Dots in Bands -->
      <circle cx="210" cy="160" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="140" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="290" cy="160" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="190" cy="370" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="250" cy="380" r="18" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
      <circle cx="310" cy="370" r="16" fill="#FFFFFF" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
];
