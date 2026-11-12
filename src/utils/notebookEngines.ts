/**
 * Notebook engine registry.
 *
 * The app ships two handwritten-notebook engines behind one preference:
 *
 *   v1 — "Inkpad", bundled same-origin at /inkpad.html. Sheets are listed by
 *        ScratchpadHub and stay available offline.
 *   v2 — "SLATE", a separately deployed app embedded from its own origin. It
 *        keeps its own library and cloud sync, so its notebooks never show up
 *        in the V1 sheet list.
 *
 * The choice is a single app-wide preference (`ce_scratchpad_engine`) so that
 * picking V2 in the Scratchpad Hub also pre-selects V2 inside an exam, and
 * vice versa.
 */

export type NotebookEngine = 'v1' | 'v2';

export const SLATE_URL = 'https://slate-omega-henna.vercel.app/';

export const ENGINE_STORAGE_KEY = 'ce_scratchpad_engine';

export const DEFAULT_ENGINE: NotebookEngine = 'v1';

/** Read the persisted engine, falling back to V1 for guests / private mode. */
export function loadEngine(): NotebookEngine {
  try {
    return localStorage.getItem(ENGINE_STORAGE_KEY) === 'v2' ? 'v2' : DEFAULT_ENGINE;
  } catch {
    return DEFAULT_ENGINE;
  }
}

/** Persist the engine. Storage failures (Safari private mode) are non-fatal. */
export function saveEngine(engine: NotebookEngine): void {
  try {
    localStorage.setItem(ENGINE_STORAGE_KEY, engine);
  } catch {}
}

/** Human-readable label used in titles and tooltips. */
export function engineLabel(engine: NotebookEngine): string {
  return engine === 'v2' ? 'SLATE' : 'Inkpad';
}
