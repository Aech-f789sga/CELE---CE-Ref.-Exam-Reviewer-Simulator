/**
 * Reaction GIFs.
 *
 * ## Why the queries are animal-first
 *
 * A reaction GIF is doing emotional work, and the animals do it better than the
 * humans: a cat that has fallen off a shelf reads as "I am fine, this is fine"
 * in a way no stock photo does. Every mood therefore leads with a cat or a dog
 * query and falls back to the generic one only if the animal search comes back
 * empty. The order matters — it is the difference between a reaction that feels
 * chosen and one that feels like a search result.
 *
 * ## Why there are two providers and a fallback
 *
 * Giphy and Tenor both need an API key, and a key that is absent, expired or
 * rate-limited must not take the feature down with it. So the resolution order
 * is: Giphy if `VITE_GIPHY_API_KEY` is set, then Tenor if `VITE_TENOR_API_KEY`
 * is, and otherwise the built-in pack — animated emoji cards that need no
 * network at all. The fallback is not a degraded mode to apologise for; it is
 * what makes the celebration reliable on a bad connection, which is exactly
 * when a room full of people is watching.
 */
import type { ScoreBand } from './liveRoom';

export type ReactionMood =
  | 'hype'
  | 'laugh'
  | 'proud'
  | 'wow'
  | 'shock'
  | 'cry'
  | 'mock'
  | 'motivate';

export interface MoodDef {
  id: ReactionMood;
  label: string;
  /** Shown in the built-in pack, and as the placeholder while a GIF loads. */
  emoji: string;
  /** Animal queries first, generic last. See the header note. */
  queries: string[];
}

export const REACTION_MOODS: MoodDef[] = [
  {
    id: 'hype',
    label: 'Hype',
    emoji: '🥳',
    queries: ['excited dog jumping', 'party cat', 'celebration animals'],
  },
  {
    id: 'laugh',
    label: 'Laughing',
    emoji: '😂',
    queries: ['cat laughing', 'dog laughing', 'laughing animals'],
  },
  {
    id: 'proud',
    label: 'Proud',
    emoji: '😤',
    queries: ['proud cat', 'proud dog', 'proud animal'],
  },
  {
    id: 'wow',
    label: 'Wow',
    emoji: '😮',
    queries: ['surprised cat', 'wow dog', 'impressed animal'],
  },
  {
    id: 'shock',
    label: 'Shocked',
    emoji: '😱',
    queries: ['shocked cat', 'scared dog', 'shocked animal'],
  },
  {
    id: 'cry',
    label: 'Crying',
    emoji: '😭',
    queries: ['crying cat', 'sad dog', 'crying animal'],
  },
  {
    id: 'mock',
    label: 'Smug',
    emoji: '😏',
    queries: ['smug cat', 'judging dog', 'smug animal'],
  },
  {
    id: 'motivate',
    label: 'You got this',
    emoji: '💪',
    queries: ['you can do it cat', 'encouraging dog', 'motivational animal'],
  },
];

export function moodById(id: string): MoodDef | undefined {
  return REACTION_MOODS.find((m) => m.id === id);
}

/**
 * Which moods the co-op celebration reaches for, per band.
 *
 * The low band leads with encouragement and only then allows a laugh at the
 * team's expense — a room that just failed does not need to be mocked first.
 * The top band is all noise, which is the point of a clean sweep.
 */
export const BAND_MOODS: Record<ScoreBand, ReactionMood[]> = {
  perfect: ['hype', 'proud', 'wow'],
  great: ['proud', 'laugh', 'wow'],
  ok: ['laugh', 'mock', 'proud'],
  low: ['motivate', 'cry', 'laugh'],
  unknown: ['wow'],
};

export interface GifResult {
  id: string;
  /** Full-size GIF. */
  url: string;
  /** Smaller rendition for the reaction bar. */
  preview: string;
  title: string;
  /** Set when this came from the built-in pack rather than a provider. */
  mood?: ReactionMood;
}

const GIPHY_KEY = (import.meta.env.VITE_GIPHY_API_KEY as string | undefined) ?? '';
const TENOR_KEY = (import.meta.env.VITE_TENOR_API_KEY as string | undefined) ?? '';

/** True when a real provider is configured, so the UI can say so. */
export function hasGifProvider(): boolean {
  return Boolean(GIPHY_KEY || TENOR_KEY);
}

/** Per-mood memo, so opening the same mood twice does not re-spend quota. */
const cache = new Map<string, GifResult[]>();

async function searchGiphy(term: string, count: number): Promise<GifResult[]> {
  const url =
    `https://api.giphy.com/v1/gifs/search?api_key=${encodeURIComponent(GIPHY_KEY)}` +
    `&q=${encodeURIComponent(term)}&limit=${count}&rating=pg-13&lang=en`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Giphy ${res.status}`);
  const body = (await res.json()) as {
    data?: {
      id: string;
      title?: string;
      images?: { fixed_height?: { url?: string }; downsized?: { url?: string } };
    }[];
  };
  return (body.data ?? [])
    .map((g) => ({
      id: `giphy-${g.id}`,
      url: g.images?.fixed_height?.url ?? g.images?.downsized?.url ?? '',
      preview: g.images?.downsized?.url ?? g.images?.fixed_height?.url ?? '',
      title: g.title || term,
    }))
    .filter((g) => g.url);
}

async function searchTenor(term: string, count: number): Promise<GifResult[]> {
  const url =
    `https://tenor.googleapis.com/v2/search?key=${encodeURIComponent(TENOR_KEY)}` +
    `&q=${encodeURIComponent(term)}&limit=${count}&media_filter=gif,tinygif`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Tenor ${res.status}`);
  const body = (await res.json()) as {
    results?: {
      id: string;
      content_description?: string;
      media_formats?: { gif?: { url?: string }; tinygif?: { url?: string } };
    }[];
  };
  return (body.results ?? [])
    .map((g) => ({
      id: `tenor-${g.id}`,
      url: g.media_formats?.gif?.url ?? '',
      preview: g.media_formats?.tinygif?.url ?? g.media_formats?.gif?.url ?? '',
      title: g.content_description || term,
    }))
    .filter((g) => g.url);
}

/**
 * The built-in pack: no network, no key, no copyright question.
 *
 * Returned as mood cards rather than GIFs, and rendered as animated emoji by
 * `LiveReactions`. `url` is left empty on purpose so the renderer can tell the
 * two apart without a second flag.
 */
export function fallbackGifs(mood: ReactionMood, count = 4): GifResult[] {
  const def = moodById(mood);
  if (!def) return [];
  return Array.from({ length: count }, (_, i) => ({
    id: `builtin-${mood}-${i}`,
    url: '',
    preview: '',
    title: def.label,
    mood,
  }));
}

/**
 * GIFs for a mood: the first query that returns anything wins.
 *
 * Tries the animal query before the generic one, and both providers before the
 * built-in pack. A thrown request is treated as "this query found nothing"
 * rather than as an error to surface — the celebration must not stop because a
 * CDN is having a bad afternoon.
 */
export async function searchGifs(mood: ReactionMood, count = 8): Promise<GifResult[]> {
  const def = moodById(mood);
  if (!def) return [];

  const key = `${mood}:${count}`;
  const hit = cache.get(key);
  if (hit) return hit;

  if (hasGifProvider()) {
    for (const term of def.queries) {
      try {
        const found = GIPHY_KEY
          ? await searchGiphy(term, count)
          : await searchTenor(term, count);
        if (found.length > 0) {
          cache.set(key, found);
          return found;
        }
      } catch {
        // Provider down or key rejected: try the next query, then fall back.
        break;
      }
    }
  }

  const builtin = fallbackGifs(mood, count);
  cache.set(key, builtin);
  return builtin;
}

/** Random pick, used by the celebration so two rooms do not get the same reel. */
export function pickGif(gifs: GifResult[], rng: () => number = Math.random): GifResult | null {
  if (gifs.length === 0) return null;
  return gifs[Math.floor(rng() * gifs.length)] ?? gifs[0];
}
