export interface AdventureStep {
  stepIndex: number;
  prompt: string;
  emoji: string;
  instruction: string;
  suggestedStickers?: string[]; // IDs from STICKERS
}

export interface AdventureWorld {
  id: string;
  name: string;
  emoji: string;
  description: string;
  backgroundColor: string;
  backgroundSvg: string;
  steps: AdventureStep[];
  completedCheer: string;
}

export const ADVENTURES: AdventureWorld[] = [
  {
    id: 'adv-forest',
    name: 'Enchanted Forest',
    emoji: '🌲',
    description: 'Build a magical woodland full of friendly animals and ancient trees!',
    backgroundColor: '#ECFDF5',
    backgroundSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#ECFDF5"/>
      <!-- Soft distant hills -->
      <path d="M 0 320 Q 150 280 300 310 T 500 290 L 500 500 L 0 500 Z" fill="#D1FAE5"/>
      <path d="M 0 380 Q 200 350 380 370 T 500 360 L 500 500 L 0 500 Z" fill="#A7F3D0"/>
      <!-- Distant trees silhouette -->
      <polygon points="50,300 70,240 90,300" fill="#6EE7B7"/>
      <polygon points="120,310 145,230 170,310" fill="#6EE7B7"/>
      <polygon points="420,300 440,240 460,300" fill="#6EE7B7"/>
    </svg>`,
    steps: [
      {
        stepIndex: 1,
        prompt: 'Draw a grand, leafy tree in your forest!',
        emoji: '🌳',
        instruction: 'Use green and brown crayons to make a tall forest giant.',
      },
      {
        stepIndex: 2,
        prompt: 'Add a cute forest animal!',
        emoji: '🦊',
        instruction: 'Draw a woodland friend or place animal ears and stickers!',
        suggestedStickers: ['char-bear-ears', 'face-smile'],
      },
      {
        stepIndex: 3,
        prompt: 'Plant colorful wild flowers and mushrooms!',
        emoji: '🍄',
        instruction: 'Sprinkle petals and forest mushrooms along the grass.',
        suggestedStickers: ['nat-daisy-flower', 'nat-toadstool'],
      },
      {
        stepIndex: 4,
        prompt: 'Add something magical to your forest!',
        emoji: '✨',
        instruction: 'Draw glowing fireflies, a hidden fairy door, or rainbow stars!',
        suggestedStickers: ['dec-sparkle-star', 'char-angel-wings'],
      },
    ],
    completedCheer: 'YOU CREATED YOUR ENCHANTED FOREST! 🌲✨',
  },
  {
    id: 'adv-ocean',
    name: 'Deep Blue Ocean',
    emoji: '🌊',
    description: 'Dive under the rolling waves and create a vibrant coral reef kingdom!',
    backgroundColor: '#EFF6FF',
    backgroundSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#EFF6FF"/>
      <!-- Water depth gradient layers -->
      <rect y="120" width="500" height="380" fill="#DBEAFE"/>
      <rect y="260" width="500" height="240" fill="#BFDBFE"/>
      <!-- Sandy sea floor -->
      <path d="M 0 440 Q 150 420 300 440 T 500 430 L 500 500 L 0 500 Z" fill="#FDE68A"/>
      <!-- Soft sea plants -->
      <path d="M 40 450 Q 30 380 50 320" fill="none" stroke="#34D399" stroke-width="8" stroke-linecap="round"/>
      <path d="M 60 460 Q 75 390 65 340" fill="none" stroke="#10B981" stroke-width="8" stroke-linecap="round"/>
    </svg>`,
    steps: [
      {
        stepIndex: 1,
        prompt: 'Draw colorful underwater corals and sea rocks!',
        emoji: '🪸',
        instruction: 'Use pink, purple, and yellow to create coral branches.',
      },
      {
        stepIndex: 2,
        prompt: 'Draw a happy fish or dolphin swimming by!',
        emoji: '🐬',
        instruction: 'Draw fins, scales, or add swimming ocean buddies!',
      },
      {
        stepIndex: 3,
        prompt: 'Blow shiny bubbles and add floating starfish!',
        emoji: '🫧',
        instruction: 'Add floating bubbles rising up to the sea surface!',
        suggestedStickers: ['dec-shiny-bubbles', 'dec-sparkle-star'],
      },
      {
        stepIndex: 4,
        prompt: 'Add a sunken pirate treasure chest or mermaid!',
        emoji: '💎',
        instruction: 'What secret mystery is resting deep in the ocean floor?',
      },
    ],
    completedCheer: 'YOU CREATED YOUR OCEAN KINGDOM! 🌊🐬',
  },
  {
    id: 'adv-space',
    name: 'Cosmic Space Odyssey',
    emoji: '🚀',
    description: 'Blast off past glittering stars, ringed planets, and cosmic rockets!',
    backgroundColor: '#0F172A',
    backgroundSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#0F172A"/>
      <!-- Starry dust -->
      <circle cx="80" cy="90" r="2" fill="#FFF" opacity="0.8"/>
      <circle cx="210" cy="60" r="1.5" fill="#FFF" opacity="0.8"/>
      <circle cx="340" cy="110" r="2" fill="#FFF" opacity="0.8"/>
      <circle cx="440" cy="70" r="1.5" fill="#FFF" opacity="0.8"/>
      <circle cx="120" cy="220" r="2" fill="#FFF" opacity="0.8"/>
      <circle cx="430" cy="280" r="2" fill="#FFF" opacity="0.8"/>
      <!-- Moon crescent in corner -->
      <path d="M 420 60 A 40 40 0 1 0 460 120 A 32 32 0 0 1 420 60 Z" fill="#FEF08A"/>
    </svg>`,
    steps: [
      {
        stepIndex: 1,
        prompt: 'Draw a giant swirling planet with glowing rings!',
        emoji: '🪐',
        instruction: 'Use bright neon colors or magic rainbow brush!',
      },
      {
        stepIndex: 2,
        prompt: 'Draw an epic rocket zooming into deep space!',
        emoji: '🚀',
        instruction: 'Draw fiery booster flames shooting out the back!',
        suggestedStickers: ['obj-rocket', 'dec-sparkle-star'],
      },
      {
        stepIndex: 3,
        prompt: 'Add an extraterrestrial alien or friendly astronaut!',
        emoji: '🧑‍🚀',
        instruction: 'Wave hello to your friendly cosmic neighbor!',
        suggestedStickers: ['face-star-eyes'],
      },
      {
        stepIndex: 4,
        prompt: 'Draw a blazing comet or shooting star with rainbow dust!',
        emoji: '🌠',
        instruction: 'Streak across the galaxy with sparkling magic!',
      },
    ],
    completedCheer: 'YOU CREATED YOUR COSMIC GALAXY! 🚀🪐',
  },
  {
    id: 'adv-dino',
    name: 'Dinosaur Volcano Valley',
    emoji: '🌋',
    description: 'Travel back in time to giant prehistoric ferns, volcanoes, and dinos!',
    backgroundColor: '#FEF3C7',
    backgroundSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FEF3C7"/>
      <!-- Distant Smoking Volcano -->
      <polygon points="120,380 200,200 240,200 320,380" fill="#78350F"/>
      <polygon points="200,200 220,230 240,200" fill="#EF4444"/>
      <!-- Smoke puff -->
      <circle cx="215" cy="160" r="24" fill="#E2E8F0" opacity="0.7"/>
      <circle cx="230" cy="120" r="30" fill="#E2E8F0" opacity="0.7"/>
      <!-- Primeval Ground -->
      <path d="M 0 380 Q 250 350 500 380 L 500 500 L 0 500 Z" fill="#D97706"/>
    </svg>`,
    steps: [
      {
        stepIndex: 1,
        prompt: 'Draw bubbling lava bursting from the volcano!',
        emoji: '🔥',
        instruction: 'Use bright orange and fire red strokes to show hot magma!',
      },
      {
        stepIndex: 2,
        prompt: 'Draw a friendly herbivore or fierce T-Rex!',
        emoji: '🦖',
        instruction: 'Add big footprints on the ground!',
        suggestedStickers: ['char-dino-spikes'],
      },
      {
        stepIndex: 3,
        prompt: 'Draw giant prehistoric palm trees and ferns!',
        emoji: '🌴',
        instruction: 'Fill the valley with towering ancient greenery.',
      },
      {
        stepIndex: 4,
        prompt: 'Add a giant dinosaur egg nest or flying pterodactyl!',
        emoji: '🥚',
        instruction: 'Are the baby dino eggs cracking open?',
      },
    ],
    completedCheer: 'YOU CREATED YOUR PREHISTORIC WORLD! 🦖🌋',
  },
  {
    id: 'adv-fairy',
    name: 'Fairy Tale Garden',
    emoji: '🧚',
    description: 'A sparkling garden realm where fairies fly and mushrooms glow!',
    backgroundColor: '#FAF5FF',
    backgroundSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
      <rect width="500" height="500" fill="#FAF5FF"/>
      <!-- Magical rolling hills -->
      <path d="M 0 340 Q 200 300 350 330 T 500 320 L 500 500 L 0 500 Z" fill="#F3E8FF"/>
      <path d="M 0 400 Q 180 370 360 390 T 500 380 L 500 500 L 0 500 Z" fill="#E9D5FF"/>
    </svg>`,
    steps: [
      {
        stepIndex: 1,
        prompt: 'Draw a charming mushroom fairy house with a tiny chimney!',
        emoji: '🍄',
        instruction: 'Give it little windows with cozy golden light inside.',
        suggestedStickers: ['nat-toadstool'],
      },
      {
        stepIndex: 2,
        prompt: 'Draw a fluttering fairy with glittering wings!',
        emoji: '🧚',
        instruction: 'Draw fairy wings or use sparkling accessories!',
        suggestedStickers: ['char-angel-wings', 'acc-magic-wand'],
      },
      {
        stepIndex: 3,
        prompt: 'Draw glowing enchanted flowers along the garden path!',
        emoji: '🌺',
        instruction: 'Use the Magic Brush so every petal shines bright!',
        suggestedStickers: ['nat-daisy-flower'],
      },
      {
        stepIndex: 4,
        prompt: 'Draw a shining rainbow bridge over the magical stream!',
        emoji: '🌈',
        instruction: 'Add lots of sparkling stars across the sky!',
        suggestedStickers: ['nat-rainbow', 'dec-sparkle-star'],
      },
    ],
    completedCheer: 'YOU CREATED YOUR FAIRY TALE GARDEN! 🧚✨',
  },
];
