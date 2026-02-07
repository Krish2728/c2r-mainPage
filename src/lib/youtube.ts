/**
 * Extract YouTube video ID from a URL or return the string if it's already an ID.
 * Handles: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/embed/ID, or plain ID.
 */
export function getYouTubeVideoId(input: string): string {
  if (!input || typeof input !== 'string') return '';
  const trimmed = input.trim();
  // Plain ID (typical 11 chars, alphanumeric + _ -)
  if (/^[\w-]{10,12}$/.test(trimmed)) return trimmed;
  try {
    // youtu.be/ID
    const short = trimmed.match(/(?:youtu\.be\/)([\w-]+)/);
    if (short) return short[1];
    // youtube.com/watch?v=ID or embed/ID
    const url = new URL(trimmed.startsWith('http') ? trimmed : 'https://' + trimmed);
    if (url.hostname.replace('www.', '') === 'youtube.com') {
      const v = url.searchParams.get('v');
      if (v) return v;
      const embed = url.pathname.match(/\/embed\/([\w-]+)/);
      if (embed) return embed[1];
    }
    if (url.hostname === 'youtu.be') {
      const id = url.pathname.slice(1).split('?')[0];
      if (id) return id;
    }
  } catch {
    // ignore
  }
  return trimmed;
}

const THUMB_SIZES = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault'] as const;

/**
 * URL for a YouTube thumbnail. Prefer higher quality; use quality hint for fallback.
 */
export function getYouTubeThumbnailUrl(videoIdOrUrl: string, quality: 'maxresdefault' | 'sddefault' | 'hqdefault' | 'mqdefault' = 'hqdefault'): string {
  const id = getYouTubeVideoId(videoIdOrUrl);
  if (!id) return '';
  return `https://img.youtube.com/vi/${encodeURIComponent(id)}/${quality}.jpg`;
}

/**
 * Returns thumbnail URL that works in most cases.
 * Uses mqdefault first for best compatibility; caller can fallback to hqdefault on error.
 */
export function getYouTubeThumbnailUrlSafe(videoIdOrUrl: string): string {
  return getYouTubeThumbnailUrl(videoIdOrUrl, 'mqdefault');
}

/** Whether the string looks like a valid YouTube video ID (11 chars, used for thumbnails). */
export function isValidYouTubeId(id: string): boolean {
  return /^[\w-]{11}$/.test(id);
}
