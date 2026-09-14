export interface ShapeDef {
  id: string;
  name: string;
  svg: string;
  defaultWidth: number;
  defaultHeight: number;
}

export const SHAPES: ShapeDef[] = [
  {
    id: 'circle',
    name: 'Circle',
    defaultWidth: 120,
    defaultHeight: 120,
    svg: `<circle cx="60" cy="60" r="54" fill="currentColor" stroke="#333" stroke-width="8" />`,
  },
  {
    id: 'square',
    name: 'Square',
    defaultWidth: 120,
    defaultHeight: 120,
    svg: `<rect x="8" y="8" width="104" height="104" rx="16" fill="currentColor" stroke="#333" stroke-width="8" />`,
  },
  {
    id: 'rectangle',
    name: 'Rectangle',
    defaultWidth: 160,
    defaultHeight: 100,
    svg: `<rect x="8" y="8" width="144" height="84" rx="16" fill="currentColor" stroke="#333" stroke-width="8" />`,
  },
  {
    id: 'triangle',
    name: 'Triangle',
    defaultWidth: 130,
    defaultHeight: 120,
    svg: `<polygon points="65,10 120,110 10,110" fill="currentColor" stroke="#333" stroke-width="8" stroke-linejoin="round" />`,
  },
  {
    id: 'star',
    name: 'Star',
    defaultWidth: 130,
    defaultHeight: 130,
    svg: `<polygon points="65,10 82,46 122,50 92,76 100,116 65,95 30,116 38,76 8,50 48,46" fill="currentColor" stroke="#333" stroke-width="7" stroke-linejoin="round" />`,
  },
  {
    id: 'heart',
    name: 'Heart',
    defaultWidth: 130,
    defaultHeight: 120,
    svg: `<path d="M 65 110 C 15 75 10 35 35 18 C 55 5 65 25 65 25 C 65 25 75 5 95 18 C 120 35 115 75 65 110 Z" fill="currentColor" stroke="#333" stroke-width="7" stroke-linejoin="round" />`,
  },
  {
    id: 'cloud',
    name: 'Cloud',
    defaultWidth: 150,
    defaultHeight: 100,
    svg: `<path d="M 30 75 Q 10 75 10 55 Q 10 35 30 35 Q 35 15 55 15 Q 75 15 85 28 Q 100 12 120 20 Q 140 28 140 50 Q 148 60 142 75 Z" fill="currentColor" stroke="#333" stroke-width="7" stroke-linejoin="round" />`,
  },
  {
    id: 'oval',
    name: 'Oval',
    defaultWidth: 150,
    defaultHeight: 100,
    svg: `<ellipse cx="75" cy="50" rx="67" ry="42" fill="currentColor" stroke="#333" stroke-width="8" />`,
  },
];
