import { SubjectArea, ExamMonth } from '../types/exam';

export type PaperTexture = 'blueprint' | 'graph' | 'grid' | 'lined' | 'blank' | 'dot' | 'cornell';
export type DpiMode = 600 | 720 | 1200 | 300;

export interface ScratchpadPageData {
  page: number;
  dataUrl: string;
  updatedAt: string;
}

export interface ScratchpadMetadata {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  type: 'exam_session' | 'standalone';
  subject?: SubjectArea;
  year?: number;
  month?: ExamMonth;
  attemptId?: string;
  sessionKey?: string; // e.g. exam_MSTC_2024_November_
  score?: number;
  totalQuestions?: number;
  ratingPercentage?: number;
  paperTexture: PaperTexture;
  paperBgColor: string;
  dpi: DpiMode;
  notesText: string;
  totalPages: number;
  thumbnail?: string; // Data URL thumbnail of sheet 1
}

export interface ScratchpadExportBundle {
  format: 'ce-scratchpad-bundle';
  version: '2.0';
  deviceCompat: 'Universal Canvas / Tablet / Web (.cescratch)';
  metadata: ScratchpadMetadata;
  pages: ScratchpadPageData[];
}

const META_STORAGE_KEY = 'ce_scratchpad_meta_list_v2';
const IDB_NAME = 'ce_scratchpad_db_v2';
const IDB_STORE = 'high_dpi_canvases';

// ----------------------------------------------------
// IndexedDB Engine for High-DPI Storage
// ----------------------------------------------------
export const getIDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB not supported'));
    }
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
};

export const idbSaveCanvas = async (key: string, dataUrl: string): Promise<void> => {
  // 1. Synchronous instant local storage cache
  try {
    localStorage.setItem(key, dataUrl);
  } catch {
    // Quota reached or private mode; IndexedDB handles large canvases
  }
  // 2. High-capacity IndexedDB storage
  try {
    const db = await getIDB();
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(dataUrl, key);
  } catch {
    // Ignore IDB errors if already stored
  }
};

export const idbLoadCanvas = async (key: string): Promise<string | null> => {
  // 1. Check instant synchronous cache first
  try {
    const local = localStorage.getItem(key);
    if (local && local.length > 50) {
      return local;
    }
  } catch {
    // Continue to IndexedDB
  }

  // 2. Load from IndexedDB
  try {
    const db = await getIDB();
    return new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(key);
      req.onsuccess = () => {
        if (req.result) {
          resolve(req.result);
        } else {
          try {
            resolve(localStorage.getItem(key));
          } catch {
            resolve(null);
          }
        }
      };
      req.onerror = () => {
        try {
          resolve(localStorage.getItem(key));
        } catch {
          resolve(null);
        }
      };
    });
  } catch {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
};

export const idbDeleteCanvas = async (key: string): Promise<void> => {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore
  }
  try {
    const db = await getIDB();
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(key);
  } catch {
    // Ignore
  }
};

// ----------------------------------------------------
// Metadata Management (Synchronous LocalStorage + Events)
// ----------------------------------------------------
// Metadata Management (Synchronous LocalStorage + Events)
// ----------------------------------------------------
export const getAllScratchpads = (): ScratchpadMetadata[] => {
  const result: ScratchpadMetadata[] = [];
  const seenIds = new Set<string>();

  // 1. Load standalone / exam records from META_STORAGE_KEY
  try {
    const raw = localStorage.getItem(META_STORAGE_KEY);
    if (raw) {
      const list: ScratchpadMetadata[] = JSON.parse(raw);
      if (Array.isArray(list)) {
        for (const item of list) {
          if (item && item.id && !seenIds.has(item.id)) {
            seenIds.add(item.id);
            result.push(item);
          }
        }
      }
    }
  } catch (e) {
    console.error('Failed to parse scratchpad metadata', e);
  }

  // 2. Load all saved notebooks from Inkpad Studio ('inkpad' key)
  try {
    const inkpadRaw = localStorage.getItem('inkpad');
    if (inkpadRaw) {
      const inkpadList = JSON.parse(inkpadRaw);
      if (Array.isArray(inkpadList)) {
        for (const n of inkpadList) {
          if (!n || n.del) continue; // Skip deleted items
          const formattedId = `inkpad_${n.id}`;
          // If not already in result
          if (!seenIds.has(formattedId) && !seenIds.has(String(n.id))) {
            seenIds.add(formattedId);
            const totalPages = Array.isArray(n.pages) && n.pages.length > 0 ? n.pages.length : 1;
            const updatedDate = n.upd ? new Date(n.upd).toISOString() : new Date().toISOString();
            result.push({
              id: formattedId,
              title: n.name || 'CE Board Notes',
              createdAt: updatedDate,
              updatedAt: updatedDate,
              type: 'standalone',
              paperTexture: (n.pages?.[0]?.tpl || 'blank') as PaperTexture,
              paperBgColor: n.pages?.[0]?.col || n.cover || '#06131c',
              dpi: 600,
              notesText: `${totalPages} page${totalPages > 1 ? 's' : ''} • Inkpad Handwritten Notes`,
              totalPages,
              thumbnail: n.thumbnail || undefined,
              sessionKey: formattedId,
            });
          }
        }
      }
    }
  } catch (e) {
    console.error('Failed to parse inkpad storage', e);
  }

  return result.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
};

export const getScratchpadById = (id: string): ScratchpadMetadata | null => {
  const all = getAllScratchpads();
  return all.find((s) => s.id === id || s.id === `inkpad_${id}` || s.id.replace(/^inkpad_/, '') === id) || null;
};

export const getScratchpadBySessionKey = (sessionKey: string): ScratchpadMetadata | null => {
  const all = getAllScratchpads();
  return all.find((s) => s.sessionKey === sessionKey) || null;
};

export const saveScratchpadMeta = (meta: ScratchpadMetadata): void => {
  try {
    const raw = localStorage.getItem(META_STORAGE_KEY);
    const all: ScratchpadMetadata[] = raw ? JSON.parse(raw) : [];
    const index = all.findIndex((s) => s.id === meta.id);
    if (index >= 0) {
      all[index] = { ...all[index], ...meta, updatedAt: new Date().toISOString() };
    } else {
      all.unshift({
        ...meta,
        createdAt: meta.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
    localStorage.setItem(META_STORAGE_KEY, JSON.stringify(all));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ce_scratchpad_records_updated'));
    }
  } catch (e) {
    console.error('Failed to save scratchpad metadata', e);
  }
};

export const deleteScratchpadRecord = async (id: string): Promise<void> => {
  try {
    // 1. Delete associated IndexedDB canvases
    const meta = getScratchpadById(id);
    if (meta) {
      const prefix = meta.sessionKey || `scratchpad_${id}_`;
      for (let p = 1; p <= meta.totalPages; p++) {
        await idbDeleteCanvas(`${prefix}ce_scratchpad_canvas_page_${p}`);
      }
      localStorage.removeItem(`${prefix}ce_scratchpad_state_v2`);
      localStorage.removeItem(`${prefix}ce_scratchpad_notes_v2`);
    }

    // 2. Delete from META_STORAGE_KEY list
    try {
      const raw = localStorage.getItem(META_STORAGE_KEY);
      if (raw) {
        const list: ScratchpadMetadata[] = JSON.parse(raw);
        const filtered = list.filter((s) => s.id !== id && s.id !== `inkpad_${id}`);
        localStorage.setItem(META_STORAGE_KEY, JSON.stringify(filtered));
      }
    } catch {}

    // 3. Delete from inkpad list (if it is an Inkpad notebook)
    try {
      const inkpadRaw = localStorage.getItem('inkpad');
      if (inkpadRaw) {
        const inkpadList = JSON.parse(inkpadRaw);
        if (Array.isArray(inkpadList)) {
          const rawId = id.replace(/^inkpad_/, '');
          const filtered = inkpadList.filter((n: any) => String(n.id) !== rawId && String(n.id) !== id);
          localStorage.setItem('inkpad', JSON.stringify(filtered));
        }
      }
    } catch (e) {
      console.error('Failed to remove from inkpad', e);
    }

    // 4. Dispatch events so all listeners refresh instantly
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ce_scratchpad_records_updated'));
      window.dispatchEvent(new CustomEvent('inkpad_updated'));
    }
  } catch (e) {
    console.error('Failed to delete scratchpad record', e);
  }
};

/**
 * Creates a new standalone scratchpad record ready for editing
 */
export const createStandaloneScratchpad = (title?: string): ScratchpadMetadata => {
  const id = `pad_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const sessionKey = `scratchpad_${id}_`;
  const newMeta: ScratchpadMetadata = {
    id,
    title: title || `Engineering Draft Notebook #${new Date().toLocaleDateString()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    type: 'standalone',
    paperTexture: 'blueprint',
    paperBgColor: '#06131c',
    dpi: 600,
    notesText: '',
    totalPages: 5,
    sessionKey,
  };
  saveScratchpadMeta(newMeta);
  return newMeta;
};

/**
 * Synchronizes an active exam session scratchpad into the permanent record list.
 * Called automatically during exam, on close, on pause, and on submit.
 */
export const syncExamScratchpadRecord = async (params: {
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  storageKeyPrefix: string;
  attemptId?: string;
  score?: number;
  totalQuestions?: number;
  ratingPercentage?: number;
}): Promise<ScratchpadMetadata> => {
  const { subject, year, month, storageKeyPrefix, attemptId, score, totalQuestions, ratingPercentage } = params;
  const id = attemptId ? `exam_${attemptId}` : `exam_${subject}_${year}_${month}`;

  let existing = getScratchpadById(id);
  if (!existing) {
    existing = getScratchpadBySessionKey(storageKeyPrefix);
  }

  // Read current sheet 1 data for thumbnail
  const thumbKey = `${storageKeyPrefix}ce_scratchpad_canvas_page_1`;
  const sheet1Data = await idbLoadCanvas(thumbKey);

  // Read saved notes and settings
  let notesText = '';
  try {
    notesText = localStorage.getItem(`${storageKeyPrefix}ce_scratchpad_notes_v2`) || '';
  } catch {
    // Ignore
  }

  let paperTexture: PaperTexture = 'blueprint';
  let paperBgColor = '#06131c';
  let dpi: DpiMode = 600;

  try {
    const rawState = localStorage.getItem(`${storageKeyPrefix}ce_scratchpad_state_v2`);
    if (rawState) {
      const parsed = JSON.parse(rawState);
      if (parsed.paperTexture) paperTexture = parsed.paperTexture;
      if (parsed.paperBgColor) paperBgColor = parsed.paperBgColor;
      if (parsed.dpi) dpi = parsed.dpi;
    }
  } catch {
    // Ignore
  }

  const updatedMeta: ScratchpadMetadata = {
    id,
    title: attemptId
      ? `${subject} ${month} ${year} Exam Rough Sheets (${ratingPercentage ?? 0}%)`
      : `${subject} ${month} ${year} Exam Session Rough Sheets`,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    type: 'exam_session',
    subject,
    year,
    month,
    attemptId,
    sessionKey: storageKeyPrefix,
    score,
    totalQuestions,
    ratingPercentage,
    paperTexture,
    paperBgColor,
    dpi,
    notesText,
    totalPages: 5,
    thumbnail: sheet1Data || existing?.thumbnail,
  };

  saveScratchpadMeta(updatedMeta);
  return updatedMeta;
};

// ----------------------------------------------------
// Export Bundles (.cescratch / .json / .svg / .png)
// ----------------------------------------------------

/**
 * Bundles all pages, notes, and metadata into a single exportable object
 */
export const exportScratchpadBundle = async (id: string): Promise<ScratchpadExportBundle | null> => {
  const meta = getScratchpadById(id);
  if (!meta) return null;

  const pages: ScratchpadPageData[] = [];

  // 1. Check if this is an Inkpad notebook in localStorage('inkpad')
  try {
    const inkpadRaw = localStorage.getItem('inkpad');
    if (inkpadRaw) {
      const list = JSON.parse(inkpadRaw);
      const rawId = id.replace(/^inkpad_/, '');
      const nb = list.find((n: any) => String(n.id) === rawId || n.name === meta.title);
      if (nb && Array.isArray(nb.pages)) {
        for (let i = 0; i < nb.pages.length; i++) {
          pages.push({
            page: i + 1,
            dataUrl: i === 0 && nb.thumbnail ? nb.thumbnail : '',
            updatedAt: new Date(nb.upd || Date.now()).toISOString(),
          });
        }
        return {
          format: 'ce-scratchpad-bundle',
          version: '2.0',
          deviceCompat: 'Universal Canvas / Tablet / Web (.cescratch)',
          metadata: meta,
          pages,
        };
      }
    }
  } catch (e) {
    console.error('Failed to export inkpad notebook bundle', e);
  }

  // 2. Standard exam session scratchpad sheets
  const prefix = meta.sessionKey || `scratchpad_${id}_`;
  for (let p = 1; p <= meta.totalPages; p++) {
    const key = `${prefix}ce_scratchpad_canvas_page_${p}`;
    const dataUrl = await idbLoadCanvas(key);
    if (dataUrl) {
      pages.push({
        page: p,
        dataUrl,
        updatedAt: new Date().toISOString(),
      });
    }
  }

  return {
    format: 'ce-scratchpad-bundle',
    version: '2.0',
    deviceCompat: 'Universal Canvas / Tablet / Web (.cescratch)',
    metadata: meta,
    pages,
  };
};

/**
 * Imports a .cescratch or .json bundle and restores all sheets and notes
 */
export const importScratchpadBundle = async (bundle: ScratchpadExportBundle): Promise<ScratchpadMetadata> => {
  if (!bundle || bundle.format !== 'ce-scratchpad-bundle') {
    throw new Error('Invalid scratchpad file format. Expected .cescratch bundle.');
  }

  const importedId = `imported_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const importedPrefix = `scratchpad_${importedId}_`;

  const newMeta: ScratchpadMetadata = {
    ...bundle.metadata,
    id: importedId,
    title: `${bundle.metadata.title || 'Imported Scratchpad'} (Imported)`,
    createdAt: bundle.metadata.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sessionKey: importedPrefix,
    type: 'standalone',
  };

  // Restore canvas pages to IndexedDB
  if (Array.isArray(bundle.pages)) {
    for (const p of bundle.pages) {
      if (p.dataUrl) {
        await idbSaveCanvas(`${importedPrefix}ce_scratchpad_canvas_page_${p.page}`, p.dataUrl);
      }
    }
    if (bundle.pages[0]?.dataUrl) {
      newMeta.thumbnail = bundle.pages[0].dataUrl;
    }
  }

  // Restore state and notes
  try {
    const stateToSave = {
      tool: 'pen',
      color: '#38bdf8',
      thickness: 3,
      paperTexture: newMeta.paperTexture,
      paperBgColor: newMeta.paperBgColor,
      dpi: newMeta.dpi,
    };
    localStorage.setItem(`${importedPrefix}ce_scratchpad_state_v2`, JSON.stringify(stateToSave));
    localStorage.setItem(`${importedPrefix}ce_scratchpad_notes_v2`, newMeta.notesText || '');
  } catch {
    // Ignore
  }

  saveScratchpadMeta(newMeta);
  return newMeta;
};

/**
 * Generates an SVG representation of a scratchpad page for vector/tablet software
 * (GoodNotes, Notability, Procreate, Illustrator, OneNote, etc.)
 */
export const generateScratchpadSvg = (
  meta: ScratchpadMetadata,
  pageNumber: number,
  dataUrl?: string,
  width = 1920,
  height = 1080
): string => {
  const bg = meta.paperBgColor || '#06131c';
  const texture = meta.paperTexture || 'blueprint';

  let gridDefs = '';
  let gridRect = '';

  if (texture === 'blueprint' || texture === 'graph') {
    gridDefs = `
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56, 189, 248, 0.2)" stroke-width="1"/>
        </pattern>
      </defs>
    `;
    gridRect = `<rect width="100%" height="100%" fill="url(#grid)" />`;
  } else if (texture === 'lined') {
    gridDefs = `
      <defs>
        <pattern id="ruled" width="100%" height="32" patternUnits="userSpaceOnUse">
          <line x1="0" y1="31" x2="100%" y2="31" stroke="rgba(148, 163, 184, 0.2)" stroke-width="1"/>
        </pattern>
      </defs>
    `;
    gridRect = `<rect width="100%" height="100%" fill="url(#ruled)" />`;
  }

  const imageTag = dataUrl
    ? `<image href="${dataUrl}" width="${width}" height="${height}" x="0" y="0" />`
    : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <title>${meta.title} - Sheet ${pageNumber}</title>
  <desc>CE Board Exam Scratchpad Vector Export - ${meta.dpi} DPI</desc>
  ${gridDefs}
  <!-- Sheet Background -->
  <rect width="100%" height="100%" fill="${bg}" />
  ${gridRect}
  <!-- Drawing Surface Layer -->
  ${imageTag}
</svg>`;
};

/**
 * Browser download helper
 */
export const downloadFile = (data: Blob | string, filename: string, mimeType = 'application/json'): void => {
  const blob = typeof data === 'string' ? new Blob([data], { type: mimeType }) : data;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
};
