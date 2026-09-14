// Fast, boundary-aware Scanline Flood Fill for HTML5 Canvas 2D
// Fills enclosed regions smoothly with anti-aliased edge tolerance

export function hexToRgba(hex: string): [number, number, number, number] {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map((x) => x + x).join('');
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return [r, g, b, 255];
}

function colorMatch(
  data: Uint8ClampedArray,
  idx: number,
  targetR: number,
  targetG: number,
  targetB: number,
  targetA: number,
  tolerance: number = 36
): boolean {
  const r = data[idx];
  const g = data[idx + 1];
  const b = data[idx + 2];
  const a = data[idx + 3];

  // If both are transparent
  if (a < 20 && targetA < 20) return true;

  return (
    Math.abs(r - targetR) <= tolerance &&
    Math.abs(g - targetG) <= tolerance &&
    Math.abs(b - targetB) <= tolerance &&
    Math.abs(a - targetA) <= tolerance
  );
}

export function floodFill(
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  fillColorHex: string,
  tolerance: number = 36
): boolean {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;

  const roundX = Math.floor(startX);
  const roundY = Math.floor(startY);

  if (roundX < 0 || roundX >= width || roundY < 0 || roundY >= height) {
    return false;
  }

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  const [fillR, fillG, fillB, fillA] = hexToRgba(fillColorHex);

  const startIdx = (roundY * width + roundX) * 4;
  const targetR = data[startIdx];
  const targetG = data[startIdx + 1];
  const targetB = data[startIdx + 2];
  const targetA = data[startIdx + 3];

  // If target color is virtually the same as fill color, no-op
  if (
    Math.abs(targetR - fillR) < 5 &&
    Math.abs(targetG - fillG) < 5 &&
    Math.abs(targetB - fillB) < 5 &&
    Math.abs(targetA - fillA) < 5
  ) {
    return false;
  }

  // Prevent filling over solid black/dark outline lines (e.g. coloring page strokes)
  if (targetR < 40 && targetG < 40 && targetB < 40 && targetA > 200) {
    return false;
  }

  // Queue-based scanline flood fill for maximum performance
  const pixelStack: [number, number][] = [[roundX, roundY]];
  const visited = new Uint8Array(width * height);

  while (pixelStack.length > 0) {
    const pop = pixelStack.pop();
    if (!pop) break;
    let [x, y] = pop;

    let idx = (y * width + x) * 4;
    let visitedIdx = y * width + x;

    // Move up as far as matching
    while (y >= 0 && colorMatch(data, idx, targetR, targetG, targetB, targetA, tolerance)) {
      y--;
      idx -= width * 4;
      visitedIdx -= width;
    }

    y++;
    idx += width * 4;
    visitedIdx += width;

    let reachLeft = false;
    let reachRight = false;

    // Move down while matching
    while (y < height && colorMatch(data, idx, targetR, targetG, targetB, targetA, tolerance)) {
      if (!visited[visitedIdx]) {
        visited[visitedIdx] = 1;
        data[idx] = fillR;
        data[idx + 1] = fillG;
        data[idx + 2] = fillB;
        data[idx + 3] = fillA;
      }

      // Check left
      if (x > 0) {
        const leftIdx = idx - 4;
        const leftVisited = visitedIdx - 1;
        if (colorMatch(data, leftIdx, targetR, targetG, targetB, targetA, tolerance)) {
          if (!reachLeft && !visited[leftVisited]) {
            pixelStack.push([x - 1, y]);
            reachLeft = true;
          }
        } else if (reachLeft) {
          reachLeft = false;
        }
      }

      // Check right
      if (x < width - 1) {
        const rightIdx = idx + 4;
        const rightVisited = visitedIdx + 1;
        if (colorMatch(data, rightIdx, targetR, targetG, targetB, targetA, tolerance)) {
          if (!reachRight && !visited[rightVisited]) {
            pixelStack.push([x + 1, y]);
            reachRight = true;
          }
        } else if (reachRight) {
          reachRight = false;
        }
      }

      y++;
      idx += width * 4;
      visitedIdx += width;
    }
  }

  ctx.putImageData(imageData, 0, 0);
  return true;
}
