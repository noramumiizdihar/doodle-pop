export interface BackgroundDef {
  id: string;
  name: string;
  emoji: string;
  color: string;
  patternType: 'solid' | 'grid' | 'dots' | 'gradient' | 'stars';
}

export const BACKGROUNDS: BackgroundDef[] = [
  { id: 'bg-white', name: 'Clean White', emoji: '📄', color: '#FFFFFF', patternType: 'solid' },
  { id: 'bg-cream', name: 'Cozy Cream', emoji: '🍦', color: '#FFFBEB', patternType: 'solid' },
  { id: 'bg-pink', name: 'Bubblegum Pink', emoji: '🎀', color: '#FFF1F2', patternType: 'solid' },
  { id: 'bg-sky', name: 'Sky Blue', emoji: '☁️', color: '#F0F9FF', patternType: 'solid' },
  { id: 'bg-mint', name: 'Fresh Mint', emoji: '🌱', color: '#F0FDF4', patternType: 'solid' },
  { id: 'bg-lavender', name: 'Sweet Lavender', emoji: '🌸', color: '#FAF5FF', patternType: 'solid' },
  { id: 'bg-yellow', name: 'Warm Sunshine', emoji: '☀️', color: '#FEFCE8', patternType: 'solid' },
  { id: 'bg-graph', name: 'Math Grid Paper', emoji: '📐', color: '#F8FAFC', patternType: 'grid' },
  { id: 'bg-dots', name: 'Polka Dots Paper', emoji: '🔘', color: '#F1F5F9', patternType: 'dots' },
  { id: 'bg-night', name: 'Midnight Galaxy', emoji: '🌌', color: '#0F172A', patternType: 'stars' },
];
