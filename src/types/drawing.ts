export type ToolType =
  | 'pencil'
  | 'crayon'
  | 'marker'
  | 'brush'
  | 'magic'
  | 'fill'
  | 'eraser';

export type BrushSize = 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';

export const BRUSH_SIZES: Record<BrushSize, number> = {
  tiny: 4,
  small: 10,
  medium: 18,
  large: 32,
  xlarge: 54,
};

export interface Point {
  x: number;
  y: number;
  pressure?: number;
}

export interface Stroke {
  tool: ToolType;
  color: string;
  size: number;
  points: Point[];
}

export interface PlacedObject {
  id: string;
  type: 'sticker' | 'shape' | 'characterPart';
  category: string;
  svgContent: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number; // degrees
  scale: number;
  color?: string; // For recolorable shapes
  zIndex: number;
  isAlive?: boolean;
  aliveAnimation?: 'wiggle' | 'float' | 'spin' | 'blink' | 'pulse';
}

export interface Artwork {
  id: string;
  title: string;
  type: 'draw' | 'color' | 'create' | 'adventure' | 'challenge' | 'connectDots' | 'finishPicture';
  canvasDataUrl: string; // Saved raster of drawing layer
  thumbnailDataUrl: string; // Merged preview thumbnail
  objects: PlacedObject[];
  backgroundColor: string;
  templateId?: string; // For coloring pages or connect dots
  createdAt: number;
  updatedAt: number;
}
