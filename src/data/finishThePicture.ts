export interface FinishPictureDef {
  id: string;
  title: string;
  prompt: string;
  emoji: string;
  svgBackground: string;
}

export const FINISH_THE_PICTURE_TEMPLATES: FinishPictureDef[] = [
  {
    id: 'fin-house-windows',
    title: 'House Without Windows',
    prompt: 'Draw cozy windows and a fun door on this house!',
    emoji: '🏠',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFBEB"/>
      <!-- Ground -->
      <line x1="20" y1="420" x2="480" y2="420" stroke="#16A34A" stroke-width="12" stroke-linecap="round"/>
      <!-- Main House Body (blank inside for child to draw windows & doors) -->
      <rect x="120" y="220" width="260" height="200" fill="#FFFFFF" stroke="#222222" stroke-width="8"/>
      <!-- Roof -->
      <polygon points="90,220 250,90 410,220" fill="#FF5757" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Chimney with smoke -->
      <rect x="310" y="110" width="40" height="70" fill="#F59E0B" stroke="#222222" stroke-width="6"/>
      <circle cx="330" cy="80" r="14" fill="#E2E8F0" opacity="0.8"/>
      <circle cx="345" cy="55" r="18" fill="#E2E8F0" opacity="0.8"/>
    </svg>`,
  },
  {
    id: 'fin-lion-mane',
    title: 'Lion Without Mane',
    prompt: 'Draw a big, wild, fluffy mane around this friendly lion!',
    emoji: '🦁',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FEF3C7"/>
      <!-- Head with cute face (waiting for mane around it) -->
      <circle cx="250" cy="250" r="95" fill="#FDE68A" stroke="#222222" stroke-width="8"/>
      <!-- Ears -->
      <circle cx="170" cy="180" r="28" fill="#FDE68A" stroke="#222222" stroke-width="6"/>
      <circle cx="170" cy="180" r="14" fill="#F59E0B"/>
      <circle cx="330" cy="180" r="28" fill="#FDE68A" stroke="#222222" stroke-width="6"/>
      <circle cx="330" cy="180" r="14" fill="#F59E0B"/>
      <!-- Big cute eyes -->
      <circle cx="215" cy="235" r="12" fill="#222222"/>
      <circle cx="285" cy="235" r="12" fill="#222222"/>
      <circle cx="211" cy="230" r="4" fill="#FFF"/>
      <circle cx="281" cy="230" r="4" fill="#FFF"/>
      <!-- Nose & Mouth -->
      <polygon points="250,265 238,252 262,252" fill="#B45309"/>
      <path d="M 250 265 L 250 278 Q 235 290 225 280 M 250 278 Q 265 290 275 280" fill="none" stroke="#222222" stroke-width="5" stroke-linecap="round"/>
    </svg>`,
  },
  {
    id: 'fin-butterfly-wings',
    title: 'Butterfly Without Wings',
    prompt: 'Draw magnificent, colorful wings on this sweet butterfly!',
    emoji: '🦋',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#F0FDF4"/>
      <!-- Antennae -->
      <path d="M 240 180 Q 210 120 180 130" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <circle cx="180" cy="130" r="8" fill="#FF66C4"/>
      <path d="M 260 180 Q 290 120 320 130" fill="none" stroke="#222222" stroke-width="6" stroke-linecap="round"/>
      <circle cx="320" cy="130" r="8" fill="#FF66C4"/>
      <!-- Head -->
      <circle cx="250" cy="200" r="32" fill="#5CE1E6" stroke="#222222" stroke-width="6"/>
      <circle cx="240" cy="195" r="5" fill="#222222"/>
      <circle cx="260" cy="195" r="5" fill="#222222"/>
      <path d="M 244 212 Q 250 218 256 212" fill="none" stroke="#222222" stroke-width="3" stroke-linecap="round"/>
      <!-- Body Segments -->
      <ellipse cx="250" cy="270" rx="24" ry="40" fill="#7ED957" stroke="#222222" stroke-width="6"/>
      <ellipse cx="250" cy="340" rx="20" ry="35" fill="#5CE1E6" stroke="#222222" stroke-width="6"/>
      <ellipse cx="250" cy="400" rx="16" ry="28" fill="#7ED957" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'fin-car-wheels',
    title: 'Car Without Wheels',
    prompt: 'Draw super-fast wheels so the car can zoom!',
    emoji: '🚗',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#EFF6FF"/>
      <!-- Road -->
      <line x1="30" y1="390" x2="470" y2="390" stroke="#334155" stroke-width="14" stroke-linecap="round"/>
      <!-- Car Body sitting on axle gaps -->
      <path d="M 80 340 C 90 280 130 220 200 220 L 320 220 C 370 220 400 260 430 310 L 430 350 L 380 350 C 380 320 330 320 330 350 L 190 350 C 190 320 140 320 140 350 L 70 350 Z" fill="#EF4444" stroke="#222222" stroke-width="8"/>
      <!-- Windows -->
      <polygon points="180,235 245,235 245,300 135,300" fill="#BAE6FD" stroke="#222222" stroke-width="6"/>
      <polygon points="265,235 320,235 365,300 265,300" fill="#BAE6FD" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'fin-robot-arms',
    title: 'Robot Without Arms',
    prompt: 'Draw cool robotic arms and gadgets for this bot!',
    emoji: '🤖',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#F8FAFC"/>
      <!-- Antenna -->
      <line x1="250" y1="90" x2="250" y2="130" stroke="#222222" stroke-width="7"/>
      <circle cx="250" cy="80" r="14" fill="#FF5757" stroke="#222222" stroke-width="5"/>
      <!-- Head -->
      <rect x="180" y="130" width="140" height="100" rx="20" fill="#94A3B8" stroke="#222222" stroke-width="8"/>
      <rect x="200" y="155" width="100" height="40" rx="10" fill="#1E293B"/>
      <circle cx="225" cy="175" r="8" fill="#38B6FF"/>
      <circle cx="275" cy="175" r="8" fill="#38B6FF"/>
      <!-- Body -->
      <rect x="170" y="245" width="160" height="150" rx="18" fill="#64748B" stroke="#222222" stroke-width="8"/>
      <!-- Meters & Dials -->
      <circle cx="215" cy="300" r="22" fill="#FFDE59" stroke="#222222" stroke-width="4"/>
      <rect x="255" y="285" width="55" height="30" rx="6" fill="#34D399" stroke="#222222" stroke-width="4"/>
      <!-- Legs -->
      <rect x="195" y="395" width="35" height="60" rx="8" fill="#94A3B8" stroke="#222222" stroke-width="6"/>
      <rect x="270" y="395" width="35" height="60" rx="8" fill="#94A3B8" stroke="#222222" stroke-width="6"/>
    </svg>`,
  },
  {
    id: 'fin-icecream-scoops',
    title: 'Cone Without Ice Cream',
    prompt: 'Draw giant, delicious scoops of your favorite ice cream flavors!',
    emoji: '🍦',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFF1F2"/>
      <!-- Crispy Waffle Cone (empty on top) -->
      <polygon points="250,450 170,260 330,260" fill="#F59E0B" stroke="#222222" stroke-width="8" stroke-linejoin="round"/>
      <!-- Waffle Grid Lines -->
      <line x1="200" y1="260" x2="280" y2="400" stroke="#D97706" stroke-width="4"/>
      <line x1="230" y1="260" x2="265" y2="430" stroke="#D97706" stroke-width="4"/>
      <line x1="300" y1="260" x2="220" y2="400" stroke="#D97706" stroke-width="4"/>
      <line x1="270" y1="260" x2="235" y2="430" stroke="#D97706" stroke-width="4"/>
    </svg>`,
  },
  {
    id: 'fin-person-hair',
    title: 'Person Without Hair',
    prompt: 'Draw silly, wild, rainbow hair on this smiling face!',
    emoji: '🧑',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFFBEB"/>
      <!-- Head -->
      <ellipse cx="250" cy="270" rx="110" ry="130" fill="#FFD1BA" stroke="#222222" stroke-width="8"/>
      <!-- Ears -->
      <circle cx="135" cy="270" r="26" fill="#FFD1BA" stroke="#222222" stroke-width="6"/>
      <circle cx="365" cy="270" r="26" fill="#FFD1BA" stroke="#222222" stroke-width="6"/>
      <!-- Big cartoon eyes -->
      <ellipse cx="205" cy="250" rx="16" ry="22" fill="#222222"/>
      <ellipse cx="295" cy="250" rx="16" ry="22" fill="#222222"/>
      <circle cx="199" cy="242" r="6" fill="#FFF"/>
      <circle cx="289" cy="242" r="6" fill="#FFF"/>
      <!-- Cheerful Grin -->
      <path d="M 210 320 Q 250 370 290 320 Z" fill="#FF5757" stroke="#222222" stroke-width="6"/>
      <!-- Rosy Cheeks -->
      <circle cx="175" cy="290" r="16" fill="#FF66C4" opacity="0.6"/>
      <circle cx="325" cy="290" r="16" fill="#FF66C4" opacity="0.6"/>
    </svg>`,
  },
  {
    id: 'fin-tree-fruit',
    title: 'Bare Apple Tree',
    prompt: 'Draw juicy red apples, sweet birds, or colorful fruit in the tree!',
    emoji: '🍎',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#F0FDF4"/>
      <!-- Trunk -->
      <path d="M 200 450 L 220 290 L 280 290 L 300 450 Z" fill="#78350F" stroke="#222222" stroke-width="8"/>
      <!-- Big green leaves canopy -->
      <circle cx="250" cy="200" r="95" fill="#86EFAC" stroke="#222222" stroke-width="8"/>
      <circle cx="160" cy="240" r="85" fill="#86EFAC" stroke="#222222" stroke-width="8"/>
      <circle cx="340" cy="240" r="85" fill="#86EFAC" stroke="#222222" stroke-width="8"/>
      <circle cx="180" cy="150" r="75" fill="#86EFAC" stroke="#222222" stroke-width="7"/>
      <circle cx="320" cy="150" r="75" fill="#86EFAC" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },
  {
    id: 'fin-clock-hands',
    title: 'Clock Without Hands',
    prompt: 'Draw the clock hands to show what time it is!',
    emoji: '⏰',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FFF7ED"/>
      <!-- Clock Bell ears -->
      <circle cx="150" cy="130" r="45" fill="#F59E0B" stroke="#222222" stroke-width="8"/>
      <circle cx="350" cy="130" r="45" fill="#F59E0B" stroke="#222222" stroke-width="8"/>
      <!-- Feet -->
      <rect x="140" y="380" width="30" height="50" rx="8" fill="#78350F" stroke="#222222" stroke-width="6" transform="rotate(25, 155, 400)"/>
      <rect x="330" y="380" width="30" height="50" rx="8" fill="#78350F" stroke="#222222" stroke-width="6" transform="rotate(-25, 345, 400)"/>
      <!-- Clock Face -->
      <circle cx="250" cy="270" r="140" fill="#FFFFFF" stroke="#222222" stroke-width="10"/>
      <!-- Numbers / hour dots -->
      <circle cx="250" cy="160" r="10" fill="#222222"/>
      <circle cx="360" cy="270" r="10" fill="#222222"/>
      <circle cx="250" cy="380" r="10" fill="#222222"/>
      <circle cx="140" cy="270" r="10" fill="#222222"/>
      <!-- Center Pin -->
      <circle cx="250" cy="270" r="14" fill="#EF4444" stroke="#222222" stroke-width="5"/>
    </svg>`,
  },
  {
    id: 'fin-flower-petals',
    title: 'Stem Without Flower',
    prompt: 'Draw the most magical, colorful flower head on this leafy stem!',
    emoji: '🌻',
    svgBackground: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#F0FDF4"/>
      <!-- Ground -->
      <path d="M 0 440 Q 250 420 500 440 L 500 500 L 0 500 Z" fill="#86EFAC"/>
      <!-- Stem -->
      <path d="M 250 250 Q 240 350 250 450" fill="none" stroke="#16A34A" stroke-width="14" stroke-linecap="round"/>
      <!-- Leaves -->
      <path d="M 248 350 Q 170 310 140 350 Q 190 400 248 360 Z" fill="#4ADE80" stroke="#16A34A" stroke-width="7"/>
      <path d="M 252 320 Q 330 280 360 320 Q 310 370 252 330 Z" fill="#4ADE80" stroke="#16A34A" stroke-width="7"/>
      <!-- Center Flower Bud/Anchor -->
      <circle cx="250" cy="245" r="25" fill="#FEF08A" stroke="#222222" stroke-width="7"/>
    </svg>`,
  },
];
