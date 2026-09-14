export interface ColorItem {
  name: string;
  hex: string;
  emoji: string;
}

export const COLOR_PALETTES: { category: string; colors: ColorItem[] }[] = [
  {
    category: 'Vibrant',
    colors: [
      { name: 'Cherry Red', hex: '#FF3B30', emoji: '🍒' },
      { name: 'Tangerine', hex: '#FF9500', emoji: '🍊' },
      { name: 'Lemon Sun', hex: '#FFCC00', emoji: '🍋' },
      { name: 'Lime Grass', hex: '#34C759', emoji: '🍏' },
      { name: 'Aqua Sea', hex: '#00C7BE', emoji: '🐬' },
      { name: 'Sky Blue', hex: '#007AFF', emoji: '🪁' },
      { name: 'Grape Violet', hex: '#5856D6', emoji: '🍇' },
      { name: 'Bubblegum', hex: '#AF52DE', emoji: '🦄' },
      { name: 'Cotton Candy', hex: '#FF2D55', emoji: '🍧' },
    ]
  },
  {
    category: 'Pastel & Sweet',
    colors: [
      { name: 'Peach Cream', hex: '#FFD1BA', emoji: '🍑' },
      { name: 'Banana Milk', hex: '#FFF3B0', emoji: '🍌' },
      { name: 'Mint Ice', hex: '#C1FBA4', emoji: '🌱' },
      { name: 'Baby Cloud', hex: '#A1E8AF', emoji: '☁️' },
      { name: 'Powder Blue', hex: '#B2F7EF', emoji: '💧' },
      { name: 'Lavender Mist', hex: '#E7C6FF', emoji: '🌸' },
      { name: 'Baby Pink', hex: '#FFC6FF', emoji: '🎀' },
      { name: 'Honey Biscuit', hex: '#DDB892', emoji: '🍪' },
      { name: 'Cocoa Brown', hex: '#7F4F24', emoji: '🍫' },
    ]
  },
  {
    category: 'Classics',
    colors: [
      { name: 'Snow White', hex: '#FFFFFF', emoji: '⛄' },
      { name: 'Silver Moon', hex: '#D1D5DB', emoji: '🌙' },
      { name: 'Pencil Grey', hex: '#6B7280', emoji: '✏️' },
      { name: 'Midnight Black', hex: '#1F2937', emoji: '🖤' },
      { name: 'Deep Ocean', hex: '#1E3A8A', emoji: '🌊' },
      { name: 'Forest Green', hex: '#14532D', emoji: '🌲' },
      { name: 'Ruby Dark', hex: '#881337', emoji: '🍷' },
      { name: 'Golden Sun', hex: '#F59E0B', emoji: '⭐' },
    ]
  }
];

export const ALL_QUICK_COLORS: string[] = [
  '#FF3B30', // Red
  '#FF9500', // Orange
  '#FFCC00', // Yellow
  '#34C759', // Green
  '#00C7BE', // Mint
  '#007AFF', // Blue
  '#5856D6', // Purple
  '#FF2D55', // Pink
  '#7F4F24', // Brown
  '#1F2937', // Black
  '#FFFFFF', // White
];
