/**
 * Persistence, IndexedDB canvas storage, and bundle import/export manager
 * for CE Board Scratchpad & Inkpad.
 */

import { SubjectArea, ExamMonth } from '../types/exam';

export interface ScratchpadMetadata {
  id: string;
  title: string;
  type: 'exam_session' | 'standalone';
  subject?: SubjectArea;
  year?: number;
  month?: ExamMonth;
  sessionKey?: string;
  totalPages: number;
  createdAt: string;
  updatedAt: string;
  thumbnail?: string;
  paperBgColor?: string;
  paperTexture?: string;
  dpi?: number;
  notes?: string;
  notesText?: string;
  tags?: string[];
  attemptId?: string;
  score?: number;
  totalQuestions?: number;
  ratingPercentage?: number;
}

const SCRATCHPAD_RECORDS_KEY = 'ce_scratchpad_records_v1';
const DB_NAME = 'ce_scratchpad_idb_v1';
const DB_VERSION = 1;
const STORE_NAME = 'canvases';

// ----------------------------------------------------
// INDEXED DB ENGINE
// ----------------------------------------------------
function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not available in current environment'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function idbSaveCanvas(key: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    try {
      localStorage.setItem(`ce_canvas_fallback_${key}`, dataUrl);
    } catch {
      console.warn('Failed to store canvas in fallback storage:', err);
    }
  }
}

export async function idbLoadCanvas(key: string): Promise<string | null> {
  try {
    const db = await openDatabase();
    return await new Promise<string | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch {
    try {
      return localStorage.getItem(`ce_canvas_fallback_${key}`);
    } catch {
      return null;
    }
  }
}

export async function idbDeleteCanvas(key: string): Promise<void> {
  try {
    const db = await openDatabase();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {}
  try {
    localStorage.removeItem(`ce_canvas_fallback_${key}`);
  } catch {}
}

// ----------------------------------------------------
// METADATA RECORDS MANAGEMENT
// ----------------------------------------------------

export function getAllScratchpads(): ScratchpadMetadata[] {
  let records: ScratchpadMetadata[] = [];
  try {
    const raw = localStorage.getItem(SCRATCHPAD_RECORDS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) records = parsed;
    }
  } catch (e) {
    console.error('Failed to parse scratchpad records:', e);
  }

  // Sync with Inkpad native localStorage notebooks if present
  try {
    const rawInkpad = localStorage.getItem('inkpad');
    if (rawInkpad) {
      const inkpadList = JSON.parse(rawInkpad);
      if (Array.isArray(inkpadList)) {
        inkpadList.forEach((nb: any) => {
          const mappedId = `inkpad_${nb.id}`;
          const existing = records.find((r) => r.id === mappedId || r.id === nb.id);
          if (!existing) {
            records.push({
              id: mappedId,
              title: nb.name || 'CE Board Notes',
              type: 'standalone',
              totalPages: Array.isArray(nb.sheets) ? nb.sheets.length : 1,
              createdAt: nb.createdAt || new Date().toISOString(),
              updatedAt: nb.updatedAt || new Date().toISOString(),
              thumbnail: nb.thumbnail || undefined,
              paperBgColor: '#06131c',
              dpi: 600,
              notesText: '',
            });
          } else if (nb.thumbnail && !existing.thumbnail) {
            existing.thumbnail = nb.thumbnail;
          }
        });
      }
    }
  } catch {}

  // Sort by updatedAt descending
  return records.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

function saveScratchpadRecords(records: ScratchpadMetadata[]): void {
  try {
    localStorage.setItem(SCRATCHPAD_RECORDS_KEY, JSON.stringify(records));
    window.dispatchEvent(new CustomEvent('ce_scratchpad_records_updated'));
  } catch (e) {
    console.error('Failed to save scratchpad records:', e);
  }
}

export function createStandaloneScratchpad(title?: string): ScratchpadMetadata {
  const current = getAllScratchpads();
  const id = `pad_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const count = current.filter((p) => p.type === 'standalone').length + 1;
  const newPad: ScratchpadMetadata = {
    id,
    title: title && title.trim() ? title.trim() : `Engineering Scratchpad #${count}`,
    type: 'standalone',
    totalPages: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    paperBgColor: '#06131c',
    dpi: 600,
    notesText: '',
  };

  saveScratchpadRecords([newPad, ...current]);
  return newPad;
}

export async function deleteScratchpadRecord(id: string): Promise<void> {
  const current = getAllScratchpads();
  const target = current.find((p) => p.id === id);
  const updated = current.filter((p) => p.id !== id);
  saveScratchpadRecords(updated);

  // Clean up canvases
  if (target) {
    const prefix = target.sessionKey || `scratchpad_${target.id}_`;
    for (let p = 1; p <= target.totalPages; p++) {
      await idbDeleteCanvas(`${prefix}ce_scratchpad_canvas_page_${p}`);
    }
  }

  // If inkpad notebook, remove from inkpad localStorage
  try {
    const rawInkpad = localStorage.getItem('inkpad');
    if (rawInkpad) {
      const list = JSON.parse(rawInkpad);
      if (Array.isArray(list)) {
        const rawId = id.replace(/^inkpad_/, '');
        const filtered = list.filter((n: any) => String(n.id) !== rawId && String(n.id) !== id);
        localStorage.setItem('inkpad', JSON.stringify(filtered));
      }
    }
  } catch {}
}

export async function syncExamScratchpadRecord(params: {
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  storageKeyPrefix?: string;
  attemptId?: string;
  score?: number;
  totalQuestions?: number;
  ratingPercentage?: number;
}): Promise<ScratchpadMetadata> {
  const {
    subject,
    year,
    month,
    storageKeyPrefix,
    attemptId,
    score,
    totalQuestions,
    ratingPercentage,
  } = params;
  const examId = `exam_${subject}_${year}_${month}`;
  const sessionKey = storageKeyPrefix || `${examId}_`;

  const current = getAllScratchpads();
  const existing = current.find((p) => p.id === examId);

  const updatedPad: ScratchpadMetadata = {
    id: examId,
    title: `${subject} ${month} ${year} Exam Rough Sheets`,
    type: 'exam_session',
    subject,
    year,
    month,
    sessionKey,
    totalPages: existing?.totalPages || 1,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    thumbnail: existing?.thumbnail,
    paperBgColor: '#06131c',
    paperTexture: 'blueprint',
    dpi: 600,
    notesText: existing?.notesText || '',
    attemptId: attemptId || existing?.attemptId,
    score: score !== undefined ? score : existing?.score,
    totalQuestions: totalQuestions !== undefined ? totalQuestions : existing?.totalQuestions,
    ratingPercentage: ratingPercentage !== undefined ? ratingPercentage : existing?.ratingPercentage,
  };

  const filtered = current.filter((p) => p.id !== examId);
  saveScratchpadRecords([updatedPad, ...filtered]);
  return updatedPad;
}

export async function exportScratchpadBundle(id: string): Promise<any> {
  const all = getAllScratchpads();
  const pad = all.find((p) => p.id === id);
  if (!pad) return null;

  const prefix = pad.sessionKey || `scratchpad_${pad.id}_`;
  const pages: { page: number; dataUrl: string | null }[] = [];

  for (let p = 1; p <= pad.totalPages; p++) {
    const dataUrl = await idbLoadCanvas(`${prefix}ce_scratchpad_canvas_page_${p}`);
    pages.push({ page: p, dataUrl });
  }

  return {
    version: '1.0.0',
    app: 'CE Board Exam Simulator Inkpad',
    exportedAt: new Date().toISOString(),
    metadata: pad,
    pages,
  };
}

export async function importScratchpadBundle(bundle: any): Promise<ScratchpadMetadata> {
  if (!bundle || !bundle.metadata) {
    throw new Error('Invalid bundle format: Missing scratchpad metadata.');
  }

  const origMeta = bundle.metadata;
  const newId = `imported_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const importedPad: ScratchpadMetadata = {
    ...origMeta,
    id: newId,
    title: `${origMeta.title || 'Imported Notes'} (Imported)`,
    sessionKey: `scratchpad_${newId}_`,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    notesText: origMeta.notesText || '',
  };

  if (Array.isArray(bundle.pages)) {
    for (const pageItem of bundle.pages) {
      if (pageItem.dataUrl && pageItem.page) {
        await idbSaveCanvas(
          `${importedPad.sessionKey}ce_scratchpad_canvas_page_${pageItem.page}`,
          pageItem.dataUrl
        );
      }
    }
  }

  const current = getAllScratchpads();
  saveScratchpadRecords([importedPad, ...current]);
  return importedPad;
}

export function generateScratchpadSvg(
  pad: ScratchpadMetadata,
  pageNumber: number = 1,
  sheetDataUrl?: string
): string {
  const bg = pad.paperBgColor || '#06131c';
  const width = 800;
  const height = 1100;

  if (sheetDataUrl) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="${bg}"/>
      <image href="${sheetDataUrl}" width="${width}" height="${height}" preserveAspectRatio="none"/>
    </svg>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    <rect width="100%" height="100%" fill="${bg}"/>
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(56,189,248,0.12)" stroke-width="0.7"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)"/>
    <text x="40" y="50" fill="#38bdf8" font-size="20" font-family="sans-serif" font-weight="bold">${pad.title}</text>
    <text x="40" y="80" fill="#94a3b8" font-size="12" font-family="sans-serif">Page ${pageNumber} of ${pad.totalPages} • CE Board Examination Simulator</text>
  </svg>`;
}

export function downloadFile(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
