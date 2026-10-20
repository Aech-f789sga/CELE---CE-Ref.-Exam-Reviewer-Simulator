/**
 * formulaCards.ts
 * -----------------------------------------------------------------------------
 * Live bridge to the `Aech-f789sga/ce-formula-cards` repository.
 *
 * Nothing is bundled: the deck + term book are fetched at runtime from the
 * deployed copy of that repo (or straight from GitHub as a fallback), so
 * pushing to `ce-formula-cards` updates this simulator without rebuilding or
 * redeploying it.
 *
 * Source order matters:
 *   1. https://ce-cards.vercel.app           -> CDN, CORS *, always revalidated
 *   2. raw.githubusercontent.com/.../main    -> instant after a push
 *   3. cdn.jsdelivr.net/gh/...@main          -> last-resort CDN mirror
 *
 * Every successful payload is cached in localStorage and revalidated with a
 * content hash, so the section still opens offline and a push is picked up on
 * the next visit (no stale copy left behind).
 */

export type DeckCategory = { name: string; short: string; blurb: string };

export type FormulaCard = {
  id: string;
  cat: string;
  title: string;
  section: string;
  page: number;
  img: string;
  w?: number;
  h?: number;
};

export type FormulaDeck = {
  categories: Record<string, DeckCategory>;
  cards: FormulaCard[];
};

export type TermItem = {
  cat: string;
  sec: string;
  t: string;
  d: string;
  p?: number;
  near?: number[];
  i: number;
};

export type TermCat = { id: string; name: string; color: string; count: number };

export type TermBook = {
  cats: TermCat[];
  items: TermItem[];
};

export const CARD_REPO = 'Aech-f789sga/ce-formula-cards';
export const CARD_SITE = 'https://ce-cards.vercel.app';

/** Ordered list of places the raw files can be read from. */
export const SOURCES = [
  CARD_SITE,
  `https://raw.githubusercontent.com/${CARD_REPO}/main`,
  `https://cdn.jsdelivr.net/gh/${CARD_REPO}@main`,
];

const CACHE_KEYS = {
  deck: 'ce_fc_deck_v2',
  terms: 'ce_fc_terms_v2',
};

/** Skip the network entirely if the cached copy is younger than this. */
const REVALIDATE_AFTER_MS = 5 * 60 * 1000;

export type LoadSource = 'network' | 'cache' | 'cache-fallback';

export interface LoadResult<T> {
  data: T;
  base: string;
  at: number;
  source: LoadSource;
}

interface CacheRecord<T> {
  at: number;
  base: string;
  hash: string;
  data: T;
}

/* -------------------------------------------------------------------------- */
/* helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** djb2 — cheap, stable content fingerprint used to detect a new push. */
function hashText(input: string): string {
  let h = 5381;
  for (let i = 0; i < input.length; i += 1) {
    h = ((h << 5) + h + input.charCodeAt(i)) | 0;
  }
  return `${(h >>> 0).toString(36)}.${input.length.toString(36)}`;
}

/**
 * The repo files are plain scripts (`window.DECK = {...}`), not JSON, so pull
 * the object literal out and parse that instead of evaluating remote code.
 */
function parseGlobal<T>(text: string): T {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('Unexpected payload shape');
  return JSON.parse(text.slice(start, end + 1)) as T;
}

function readCache<T>(key: string): CacheRecord<T> | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheRecord<T>;
    if (!parsed || !parsed.data || typeof parsed.at !== 'number') return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeCache<T>(key: string, record: CacheRecord<T>): void {
  try {
    localStorage.setItem(key, JSON.stringify(record));
  } catch {
    /* quota or private mode — the in-memory copy still works */
  }
}

/** Try each mirror in order until one returns a 200. */
async function fetchFirst(file: string): Promise<{ text: string; base: string }> {
  let lastError: unknown = null;
  for (const base of SOURCES) {
    try {
      const res = await fetch(`${base}/${file}`, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const text = await res.text();
      if (!text || text.length < 64) throw new Error('Empty payload');
      return { text, base };
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError instanceof Error ? lastError : new Error('All mirrors failed');
}

async function loadResource<T>(
  file: string,
  key: string,
  force: boolean,
  onCached?: (result: LoadResult<T>) => void,
): Promise<LoadResult<T>> {
  const cached = readCache<T>(key);

  // Paint from cache first so the section never shows a spinner on a warm visit.
  if (cached && onCached) {
    onCached({ data: cached.data, base: cached.base, at: cached.at, source: 'cache' });
  }

  if (cached && !force && Date.now() - cached.at < REVALIDATE_AFTER_MS) {
    return { data: cached.data, base: cached.base, at: cached.at, source: 'cache' };
  }

  try {
    const { text, base } = await fetchFirst(file);
    const hash = hashText(text);

    // Same content as the cached copy: keep the parsed object, just bump the clock.
    if (cached && cached.hash === hash) {
      const at = Date.now();
      writeCache(key, { ...cached, base, at });
      return { data: cached.data, base, at, source: 'network' };
    }

    const data = parseGlobal<T>(text);
    const at = Date.now();
    writeCache(key, { at, base, hash, data });
    return { data, base, at, source: 'network' };
  } catch (err) {
    if (cached) {
      return { data: cached.data, base: cached.base, at: cached.at, source: 'cache-fallback' };
    }
    throw err;
  }
}

/* -------------------------------------------------------------------------- */
/* public API                                                                 */
/* -------------------------------------------------------------------------- */

export function loadFormulaDeck(options: { force?: boolean; onCached?: (r: LoadResult<FormulaDeck>) => void } = {}) {
  return loadResource<FormulaDeck>('data.js', CACHE_KEYS.deck, Boolean(options.force), options.onCached);
}

export function loadTermBook(options: { force?: boolean; onCached?: (r: LoadResult<TermBook>) => void } = {}) {
  return loadResource<TermBook>('terms.js', CACHE_KEYS.terms, Boolean(options.force), options.onCached);
}

/** `assets/cards/p001_00.jpg` -> absolute URL on the given mirror. */
export function imageUrl(path: string, base: string): string {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${base}/${path.replace(/^\/+/, '')}`;
}

/** Mirror to try when an <img> fails (e.g. a card added a minute ago). */
export function fallbackImageUrl(path: string, base: string): string | null {
  const index = SOURCES.indexOf(base);
  const next = SOURCES[(index < 0 ? 0 : index) + 1];
  if (!next) return null;
  return imageUrl(path, next);
}

/** Human label for the "synced from" pill. */
export function sourceLabel(base: string): string {
  if (base.includes('vercel.app')) return 'ce-cards.vercel.app';
  if (base.includes('jsdelivr')) return 'jsDelivr';
  if (base.includes('raw.githubusercontent')) return 'GitHub raw';
  try {
    return new URL(base).host;
  } catch {
    return base;
  }
}

export function formatSyncedAt(at: number): string {
  const diff = Date.now() - at;
  if (diff < 60_000) return 'just now';
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)} min ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)} h ago`;
  return new Date(at).toLocaleDateString();
}
