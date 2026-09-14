// IndexedDB Artwork Persistence & Storage Engine
import { get, set, del, keys } from 'idb-keyval';
import { Artwork } from '../types/drawing';

const ARTWORK_PREFIX = 'doodle_art_';
const LAST_ACTIVE_KEY = 'doodle_last_active_id';

export async function saveArtwork(artwork: Artwork): Promise<void> {
  artwork.updatedAt = Date.now();
  await set(`${ARTWORK_PREFIX}${artwork.id}`, artwork);
  localStorage.setItem(LAST_ACTIVE_KEY, artwork.id);
}

export async function getArtwork(id: string): Promise<Artwork | undefined> {
  return await get<Artwork>(`${ARTWORK_PREFIX}${id}`);
}

export async function getAllArtworks(): Promise<Artwork[]> {
  try {
    const allKeys = await keys();
    const artKeys = allKeys.filter((k) => typeof k === 'string' && k.startsWith(ARTWORK_PREFIX));
    const items: Artwork[] = [];

    for (const key of artKeys) {
      const art = await get<Artwork>(key);
      if (art) items.push(art);
    }

    // Sort newest first
    return items.sort((a, b) => b.updatedAt - a.updatedAt);
  } catch (err) {
    console.error('Failed to load artworks:', err);
    return [];
  }
}

export async function deleteArtwork(id: string): Promise<void> {
  await del(`${ARTWORK_PREFIX}${id}`);
  if (localStorage.getItem(LAST_ACTIVE_KEY) === id) {
    localStorage.removeItem(LAST_ACTIVE_KEY);
  }
}

export async function duplicateArtwork(id: string): Promise<Artwork | undefined> {
  const original = await getArtwork(id);
  if (!original) return undefined;

  const copy: Artwork = {
    ...original,
    id: `art_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    title: `${original.title} (Copy)`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  await saveArtwork(copy);
  return copy;
}

export function getLastActiveArtworkId(): string | null {
  return localStorage.getItem(LAST_ACTIVE_KEY);
}

export function setLastActiveArtworkId(id: string | null): void {
  if (id) {
    localStorage.setItem(LAST_ACTIVE_KEY, id);
  } else {
    localStorage.removeItem(LAST_ACTIVE_KEY);
  }
}

export async function exportCanvasAsPng(canvas: HTMLCanvasElement, title: string = 'My DoodlePop Art') {
  try {
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    const safeTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '_') || 'artwork';
    link.download = `doodlepop_${safeTitle}_${Date.now()}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('Export failed:', err);
  }
}

export async function shareArtwork(canvas: HTMLCanvasElement, title: string = 'My DoodlePop Art'): Promise<boolean> {
  try {
    if (navigator.share && canvas.toBlob) {
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (blob) {
        const file = new File([blob], 'doodlepop_art.png', { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: title,
            text: 'Look what I created on DoodlePop! 🎨✨',
            files: [file],
          });
          return true;
        }
      }
    }
  } catch (err) {
    // User cancelled share or API error
    console.log('Native share not completed:', err);
  }

  // Fallback to downloading PNG
  exportCanvasAsPng(canvas, title);
  return false;
}

export async function getStorageUsage(): Promise<{ count: number; estimatedMb: string }> {
  try {
    const artworks = await getAllArtworks();
    let totalBytes = 0;
    for (const a of artworks) {
      totalBytes += (a.canvasDataUrl?.length || 0) + (a.thumbnailDataUrl?.length || 0);
    }
    const mb = (totalBytes / (1024 * 1024)).toFixed(1);
    return { count: artworks.length, estimatedMb: `${mb} MB` };
  } catch {
    return { count: 0, estimatedMb: '0 MB' };
  }
}

export async function clearAllArtworks(): Promise<void> {
  const allKeys = await keys();
  const artKeys = allKeys.filter((k) => typeof k === 'string' && k.startsWith(ARTWORK_PREFIX));
  for (const k of artKeys) {
    await del(k);
  }
  localStorage.removeItem(LAST_ACTIVE_KEY);
}
