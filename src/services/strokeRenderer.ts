// Specialized Kids Artistic Stroke Rendering Engine
// Supports Pencil, Crayon (wax texture), Marker, Brush, Magic Rainbow, and Eraser

import { Point, ToolType } from '../types/drawing';

export interface SparkleParticle {
  x: number;
  y: number;
  color: string;
  size: number;
  id: number;
}

let magicHue = 0;

export function getNextMagicColor(): string {
  magicHue = (magicHue + 3) % 360;
  return `hsl(${magicHue}, 95%, 55%)`;
}

export function drawCrayonSegment(
  ctx: CanvasRenderingContext2D,
  p1: Point,
  p2: Point,
  color: string,
  baseSize: number
) {
  const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
  const steps = Math.max(1, Math.floor(dist / 2));
  const stepX = (p2.x - p1.x) / steps;
  const stepY = (p2.y - p1.y) / steps;

  ctx.save();
  ctx.fillStyle = color;

  // Soft base stroke
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = baseSize * 0.7;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.globalAlpha = 0.45;
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();

  // Granular waxy micro-dabs
  for (let i = 0; i <= steps; i++) {
    const cx = p1.x + stepX * i;
    const cy = p1.y + stepY * i;
    const numDabs = Math.max(3, Math.floor(baseSize / 3));

    for (let d = 0; d < numDabs; d++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = (Math.random() * baseSize * 0.5);
      const dabX = cx + Math.cos(angle) * radius;
      const dabY = cy + Math.sin(angle) * radius;
      const dabSize = Math.random() * (baseSize * 0.3) + 1.2;

      ctx.globalAlpha = Math.random() * 0.35 + 0.25;
      ctx.beginPath();
      ctx.arc(dabX, dabY, dabSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();
}

export function drawStrokeSegment(
  ctx: CanvasRenderingContext2D,
  p1: Point,
  p2: Point,
  tool: ToolType,
  color: string,
  size: number
): SparkleParticle | null {
  ctx.save();

  if (tool === 'eraser') {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = size * 1.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    ctx.restore();
    return null;
  }

  ctx.globalCompositeOperation = 'source-over';

  if (tool === 'pencil') {
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(2, size * 0.5);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  } else if (tool === 'crayon') {
    drawCrayonSegment(ctx, p1, p2, color, size);
  } else if (tool === 'marker') {
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 0.65;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  } else if (tool === 'brush') {
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = 0.95;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  } else if (tool === 'magic') {
    const rainbowCol = getNextMagicColor();
    ctx.strokeStyle = rainbowCol;
    ctx.lineWidth = size * 1.1;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = rainbowCol;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();

    ctx.restore();

    // Spawn a trailing sparkle particle randomly
    if (Math.random() < 0.45) {
      return {
        x: p2.x + (Math.random() - 0.5) * 20,
        y: p2.y + (Math.random() - 0.5) * 20,
        color: rainbowCol,
        size: Math.random() * 14 + 10,
        id: Date.now() + Math.random(),
      };
    }
    return null;
  }

  ctx.restore();
  return null;
}
