import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ToolType, BrushSize, BRUSH_SIZES, Point, PlacedObject } from '../../types/drawing';
import { drawStrokeSegment, SparkleParticle } from '../../services/strokeRenderer';
import { floodFill } from '../../services/floodFill';
import { sound } from '../../services/soundEngine';
import { StickerLayer } from './StickerLayer';

interface DrawingCanvasProps {
  tool: ToolType;
  color: string;
  size: BrushSize;
  backgroundColor: string;
  templateSvg?: string;
  initialCanvasData?: string;
  objects: PlacedObject[];
  onObjectsChange: (objects: PlacedObject[]) => void;
  onCanvasChange: (dataUrl: string) => void;
  canUndoChange: (canUndo: boolean) => void;
  canRedoChange: (canRedo: boolean) => void;
  undoTrigger?: number;
  redoTrigger?: number;
  clearTrigger?: number;
  exportTrigger?: number;
  onExportReady?: (dataUrl: string) => void;
}

export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  tool,
  color,
  size,
  backgroundColor,
  templateSvg,
  initialCanvasData,
  objects,
  onObjectsChange,
  onCanvasChange,
  canUndoChange,
  canRedoChange,
  undoTrigger,
  redoTrigger,
  clearTrigger,
  exportTrigger,
  onExportReady,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Undo / Redo history of ImageData
  const historyRef = useRef<ImageData[]>([]);
  const historyStepRef = useRef<number>(-1);
  const MAX_HISTORY = 25;

  // Active gesture tracking
  const activePointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const isDrawing = useRef<boolean>(false);
  const isGesture = useRef<boolean>(false);
  const lastPoint = useRef<Point | null>(null);

  // Zoom & Pan state
  const [scale, setScale] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialPinchDist = useRef<number>(0);
  const initialScale = useRef<number>(1);

  // Selected object in StickerLayer
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>(null);

  // Sparkle particles state for Magic Rainbow brush
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);

  // Push snapshot to undo stack
  const saveSnapshot = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Remove any redo steps ahead
    if (historyStepRef.current < historyRef.current.length - 1) {
      historyRef.current = historyRef.current.slice(0, historyStepRef.current + 1);
    }

    historyRef.current.push(imgData);
    if (historyRef.current.length > MAX_HISTORY) {
      historyRef.current.shift();
    } else {
      historyStepRef.current++;
    }

    canUndoChange(historyStepRef.current > 0);
    canRedoChange(historyStepRef.current < historyRef.current.length - 1);

    // Notify parent for autosave
    onCanvasChange(canvas.toDataURL('image/png'));
  }, [canUndoChange, canRedoChange, onCanvasChange]);

  // Handle Undo
  const handleUndo = useCallback(() => {
    if (historyStepRef.current <= 0) return;
    historyStepRef.current--;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = historyRef.current[historyStepRef.current];
    if (imgData) {
      ctx.putImageData(imgData, 0, 0);
      onCanvasChange(canvas.toDataURL('image/png'));
    }

    canUndoChange(historyStepRef.current > 0);
    canRedoChange(historyStepRef.current < historyRef.current.length - 1);
  }, [canUndoChange, canRedoChange, onCanvasChange]);

  // Handle Redo
  const handleRedo = useCallback(() => {
    if (historyStepRef.current >= historyRef.current.length - 1) return;
    historyStepRef.current++;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = historyRef.current[historyStepRef.current];
    if (imgData) {
      ctx.putImageData(imgData, 0, 0);
      onCanvasChange(canvas.toDataURL('image/png'));
    }

    canUndoChange(historyStepRef.current > 0);
    canRedoChange(historyStepRef.current < historyRef.current.length - 1);
  }, [canUndoChange, canRedoChange, onCanvasChange]);

  // Handle Clear
  const handleClear = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (templateSvg) {
      // Re-render template onto canvas
      renderTemplate(templateSvg);
    } else {
      saveSnapshot();
    }
  }, [templateSvg, saveSnapshot]);

  // Respond to triggers from Navbar
  useEffect(() => {
    if (undoTrigger && undoTrigger > 0) handleUndo();
  }, [undoTrigger, handleUndo]);

  useEffect(() => {
    if (redoTrigger && redoTrigger > 0) handleRedo();
  }, [redoTrigger, handleRedo]);

  useEffect(() => {
    if (clearTrigger && clearTrigger > 0) handleClear();
  }, [clearTrigger, handleClear]);

  // Render template SVG onto canvas
  const renderTemplate = useCallback((svgStr: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      saveSnapshot();
    };
    img.src = url;
  }, [saveSnapshot]);

  // Initialize Canvas resolution and initial data
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Logical canvas resolution (crisp 1200x1200 high-res)
    canvas.width = 1200;
    canvas.height = 1200;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (initialCanvasData) {
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        saveSnapshot();
      };
      img.src = initialCanvasData;
    } else if (templateSvg) {
      renderTemplate(templateSvg);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      saveSnapshot();
    }
  }, [templateSvg, initialCanvasData, renderTemplate, saveSnapshot]);

  // Merge raster and sticker objects for export
  useEffect(() => {
    if (!exportTrigger || exportTrigger <= 0 || !onExportReady) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create offscreen export canvas
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;
    const exportCtx = exportCanvas.getContext('2d');
    if (!exportCtx) return;

    // Background color
    exportCtx.fillStyle = backgroundColor;
    exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // Raster drawing layer
    exportCtx.drawImage(canvas, 0, 0);

    // Render placed sticker / shape objects
    if (objects.length > 0) {
      const sorted = objects.slice().sort((a, b) => a.zIndex - b.zIndex);
      const promises = sorted.map((obj) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          const svgBlob = new Blob([obj.svgContent], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(svgBlob);
          img.onload = () => {
            exportCtx.save();
            const scaleX = canvas.width / (containerRef.current?.clientWidth || 600);
            const scaleY = canvas.height / (containerRef.current?.clientHeight || 600);

            exportCtx.translate(obj.x * scaleX + (obj.width * scaleX) / 2, obj.y * scaleY + (obj.height * scaleY) / 2);
            exportCtx.rotate((obj.rotation * Math.PI) / 180);
            exportCtx.drawImage(
              img,
              (-obj.width * scaleX) / 2,
              (-obj.height * scaleY) / 2,
              obj.width * scaleX,
              obj.height * scaleY
            );
            exportCtx.restore();
            URL.revokeObjectURL(url);
            resolve();
          };
          img.onerror = () => resolve();
          img.src = url;
        });
      });

      Promise.all(promises).then(() => {
        onExportReady(exportCanvas.toDataURL('image/png'));
      });
    } else {
      onExportReady(exportCanvas.toDataURL('image/png'));
    }
  }, [exportTrigger, backgroundColor, objects, onExportReady]);

  // Convert client coordinates to canvas internal coordinates
  const getCanvasCoords = (clientX: number, clientY: number): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  // POINTER DOWN
  const handlePointerDown = (e: React.PointerEvent) => {
    const container = containerRef.current;
    if (!container) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Multi-touch pinch / pan detection
    if (activePointers.current.size >= 2) {
      isGesture.current = true;
      isDrawing.current = false;
      const pts = Array.from(activePointers.current.values());
      initialPinchDist.current = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      initialScale.current = scale;
      return;
    }

    // Single touch / stylus / mouse
    isGesture.current = false;
    const pt = getCanvasCoords(e.clientX, e.clientY);
    lastPoint.current = pt;

    // Deselect active object when clicking canvas background
    setSelectedObjectId(null);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (tool === 'fill') {
      sound.fill();
      floodFill(ctx, pt.x, pt.y, color);
      saveSnapshot();
      return;
    }

    isDrawing.current = true;
    sound.stroke();

    // Initial dot
    const baseSize = BRUSH_SIZES[size] * 1.5;
    const sp = drawStrokeSegment(ctx, pt, pt, tool, color, baseSize);
    if (sp) {
      setSparkles((prev) => [...prev.slice(-12), sp]);
    }
  };

  // POINTER MOVE
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!activePointers.current.has(e.pointerId)) return;
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Handle 2-finger Pinch Zoom and Pan
    if (isGesture.current && activePointers.current.size >= 2) {
      const pts = Array.from(activePointers.current.values());
      const currentDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (initialPinchDist.current > 0) {
        const factor = currentDist / initialPinchDist.current;
        const newScale = Math.max(0.75, Math.min(3.5, initialScale.current * factor));
        setScale(newScale);
      }
      return;
    }

    if (!isDrawing.current || !lastPoint.current) return;

    const currentPt = getCanvasCoords(e.clientX, e.clientY);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const baseSize = BRUSH_SIZES[size] * 1.5;
    const sp = drawStrokeSegment(ctx, lastPoint.current, currentPt, tool, color, baseSize);
    if (sp) {
      setSparkles((prev) => [...prev.slice(-12), sp]);
      sound.sparkle();
    }

    lastPoint.current = currentPt;
  };

  // POINTER UP / LEAVE
  const handlePointerUp = (e: React.PointerEvent) => {
    activePointers.current.delete(e.pointerId);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    if (activePointers.current.size < 2) {
      isGesture.current = false;
    }

    if (isDrawing.current) {
      isDrawing.current = false;
      lastPoint.current = null;
      saveSnapshot();
    }
  };

  // Wheel zoom on desktop
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setScale((prev) => Math.max(0.75, Math.min(3.5, prev + delta)));
    }
  };

  // Clear sparkle particles after animation
  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles([]);
    }, 900);
    return () => clearTimeout(timer);
  }, [sparkles]);

  // Object manipulation helpers for StickerLayer
  const handleUpdateObject = (updated: PlacedObject) => {
    onObjectsChange(objects.map((o) => (o.id === updated.id ? updated : o)));
  };

  const handleDeleteObject = (id: string) => {
    onObjectsChange(objects.filter((o) => o.id !== id));
    if (selectedObjectId === id) setSelectedObjectId(null);
  };

  const handleDuplicateObject = (id: string) => {
    const orig = objects.find((o) => o.id === id);
    if (!orig) return;
    const copy: PlacedObject = {
      ...orig,
      id: `obj_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      x: orig.x + 25,
      y: orig.y + 25,
      zIndex: Math.max(...objects.map((o) => o.zIndex), 0) + 1,
    };
    onObjectsChange([...objects, copy]);
    setSelectedObjectId(copy.id);
  };

  const handleBringForward = (id: string) => {
    const obj = objects.find((o) => o.id === id);
    if (!obj) return;
    const maxZ = Math.max(...objects.map((o) => o.zIndex), 0);
    handleUpdateObject({ ...obj, zIndex: maxZ + 1 });
  };

  const handleSendBackward = (id: string) => {
    const obj = objects.find((o) => o.id === id);
    if (!obj) return;
    const minZ = Math.min(...objects.map((o) => o.zIndex), 0);
    handleUpdateObject({ ...obj, zIndex: Math.max(0, minZ - 1) });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden touch-none select-none bg-amber-50/50"
      onWheel={handleWheel}
    >
      {/* Canvas Paper Wrapper with Zoom/Pan Transformation */}
      <div
        className="relative shadow-2xl rounded-3xl overflow-hidden border-8 border-white transition-transform duration-75"
        style={{
          width: 'min(92vw, 92vh, 760px)',
          height: 'min(92vw, 92vh, 760px)',
          backgroundColor: backgroundColor,
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
        }}
      >
        {/* Raster HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-crosshair touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        />

        {/* Sticker / Shape Object Layer */}
        <StickerLayer
          objects={objects}
          selectedObjectId={selectedObjectId}
          onSelectObject={setSelectedObjectId}
          onUpdateObject={handleUpdateObject}
          onDeleteObject={handleDeleteObject}
          onDuplicateObject={handleDuplicateObject}
          onBringForward={handleBringForward}
          onSendBackward={handleSendBackward}
          canvasScale={scale}
        />

        {/* Magic Brush Glitter Sparkles */}
        {sparkles.map((sp) => {
          const rect = containerRef.current?.getBoundingClientRect();
          const leftPercent = (sp.x / 1200) * 100;
          const topPercent = (sp.y / 1200) * 100;

          return (
            <div
              key={sp.id}
              className="sparkle-particle"
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                color: sp.color,
                fontSize: `${sp.size}px`,
              }}
            >
              ✨
            </div>
          );
        })}
      </div>

      {/* Floating Canvas Zoom Reset Indicator */}
      {scale !== 1 && (
        <button
          onClick={() => {
            sound.pop();
            setScale(1);
            setPan({ x: 0, y: 0 });
          }}
          className="absolute top-4 right-4 bg-white/90 border-2 border-amber-300 rounded-full px-3 py-1 text-xs font-bold text-slate-700 shadow-md active:scale-95"
        >
          Reset Zoom ({Math.round(scale * 100)}%)
        </button>
      )}
    </div>
  );
};
