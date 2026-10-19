import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  PenTool,
  Eraser,
  RotateCcw,
  RotateCw,
  Trash2,
  Maximize2,
  Minimize2,
  X,
  Move,
  Download,
  Calculator,
  FileText,
  Columns,
  Minus,
  Plus,
  PaintBucket,
  Upload,
  Tablet,
  FileCode,
  Check,
  LassoSelect,
  Square,
  Circle,
  Triangle,
  ArrowRight,
  Spline,
  Copy,
  ChevronLeft,
  ChevronRight,
  Highlighter,
  Pencil,
  Brush,
  Layers,
  Type,
  TypeOutline,
} from 'lucide-react';
import {
  generateScratchpadSvg,
  downloadFile,
  saveScratchpadMeta,
  exportScratchpadBundle,
  getScratchpadById,
  idbSaveCanvas,
  idbLoadCanvas,
} from '../utils/scratchpadStorage';

export type ToolType =
  | 'pen'
  | 'pencil'
  | 'calligraphy'
  | 'highlighter'
  | 'eraser'
  | 'bucket'
  | 'shape'
  | 'lasso'
  | 'text';

export type ShapeType =
  | 'line'
  | 'arrow'
  | 'dimension'
  | 'rect'
  | 'circle'
  | 'triangle'
  | 'coord';

export interface LassoSelection {
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  width: number;
  height: number;
  initialX: number;
  initialY: number;
  initialWidth: number;
  initialHeight: number;
}

export type LassoMode = 'cut' | 'select';

export type PaperTexture = 'blueprint' | 'graph' | 'lined' | 'blank' | 'dot' | 'cornell';
export type PageMode = 'notebook' | 'infinite';
export type ScratchpadTab = 'draw' | 'notes' | 'calc';

interface ScratchpadProps {
  isOpen: boolean;
  onClose: () => void;
  isDocked?: boolean;
  onToggleDock?: () => void;
  className?: string;
  storageKeyPrefix?: string;
  title?: string;
  documentId?: string;
  onSaveBundle?: () => void;
}

export type DpiMode = 600 | 720 | 1200 | 300;

// ----------------------------------------------------
// PNG Physical Resolution (pHYs) Helpers
// Injects true 600+ DPI physical dimensions into exported PNG files
// ----------------------------------------------------
const makeCrcTable = () => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1);
      } else {
        c = c >>> 1;
      }
    }
    table[n] = c;
  }
  return table;
};

const crcTable = makeCrcTable();

const crc32 = (buf: Uint8Array, offset: number, len: number): number => {
  let c = 0xffffffff;
  for (let i = 0; i < len; i++) {
    c = crcTable[(c ^ buf[offset + i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
};

export const addDpiToPngBlob = async (blob: Blob, targetDpi: number): Promise<Blob> => {
  const buffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  if (
    bytes.length < 33 ||
    bytes[0] !== 0x89 ||
    bytes[1] !== 0x50 ||
    bytes[2] !== 0x4e ||
    bytes[3] !== 0x47 ||
    bytes[4] !== 0x0d ||
    bytes[5] !== 0x0a ||
    bytes[6] !== 0x1a ||
    bytes[7] !== 0x0a
  ) {
    return blob;
  }

  const insertIndex = 33;
  const ppm = Math.round(targetDpi / 0.0254);

  const physChunk = new Uint8Array(21);
  const view = new DataView(physChunk.buffer);

  view.setUint32(0, 9);
  physChunk[4] = 0x70; // p
  physChunk[5] = 0x48; // H
  physChunk[6] = 0x79; // y
  physChunk[7] = 0x73; // s

  view.setUint32(8, ppm);
  view.setUint32(12, ppm);
  physChunk[16] = 1;

  const crc = crc32(physChunk, 4, 13);
  view.setUint32(17, crc);

  const combined = new Uint8Array(bytes.length + physChunk.length);
  combined.set(bytes.subarray(0, insertIndex), 0);
  combined.set(physChunk, insertIndex);
  combined.set(bytes.subarray(insertIndex), insertIndex + physChunk.length);

  return new Blob([combined], { type: 'image/png' });
};

// ----------------------------------------------------
// IndexedDB Engine for High-DPI (600+ DPI) Canvas Data
// Eliminates localStorage 5MB quota restrictions
// ----------------------------------------------------

const STORAGE_KEY_STATE = 'ce_scratchpad_state_v2';
const STORAGE_KEY_CANVAS_PREFIX = 'ce_scratchpad_canvas_page_';
const STORAGE_KEY_NOTES = 'ce_scratchpad_notes_v2';

// ----------------------------------------------------
// FIXED DOCUMENT GEOMETRY — blur-proof persistence
// ----------------------------------------------------
// The drawing buffer used to follow the viewport (container size × DPR). Every
// time the pad was closed and reopened — or the window was resized, docked, or
// maximised — the stored PNG was stretched into a *different* buffer size. Each
// round-trip resampled the artwork, so the ink, shapes and fills progressively
// turned soft and blurry.
//
// The page is now a fixed-size document: 1200 × 800 logical units rendered into
// a 1800 × 1200 buffer (1.5×) that never depends on the window, the dock state,
// the fullscreen state or the device pixel ratio. The same bitmap therefore
// round-trips byte-for-byte, and the on-screen page is simply a CSS-scaled view
// of it (like zooming a real notebook page).
const NB_W = 1200;
const NB_H = 800;
const INF_W = 6000;
const INF_H = 4000;
const NB_BUF_W = Math.round(NB_W * 1.5); // 1800
const NB_BUF_H = Math.round(NB_H * 1.5); // 1200
const INF_BUF_W = Math.round(INF_W * 1.5); // 9000
const INF_BUF_H = Math.round(INF_H * 1.5); // 6000
const PALETTE_RESERVE = 94; // vertical space kept for the floating tool palette
const PAGE_GUTTER = 10; // breathing room around the page

const COLOR_PRESETS = [
  '#38bdf8', // Cyan
  '#f59e0b', // Amber
  '#10b981', // Emerald
  '#f43f5e', // Coral Rose
  '#a855f7', // Violet
  '#facc15', // Yellow
  '#ffffff', // White
  '#0f172a', // Deep Slate
];

const THICKNESS_PRESETS = [
  { label: 'Fine', value: 2 },
  { label: 'Medium', value: 4 },
  { label: 'Thick', value: 8 },
  { label: 'Marker', value: 16 },
  { label: 'Heavy', value: 28 },
];

export const SHEET_BG_PRESETS = [
  { label: 'Deep Blueprint', color: '#06131c', isLight: false },
  { label: 'Slate Charcoal', color: '#0f172a', isLight: false },
  { label: 'Dark Chalkboard', color: '#06281c', isLight: false },
  { label: 'Midnight Obsidian', color: '#09090b', isLight: false },
  { label: 'Sepia Parchment', color: '#f7f1e5', isLight: true },
  { label: 'Engineering Cream', color: '#fcfaf2', isLight: true },
  { label: 'Clean White', color: '#ffffff', isLight: true },
  { label: 'Soft Blueprint Light', color: '#e0f2fe', isLight: true },
];

export const isLightColor = (hex: string): boolean => {
  if (!hex) return false;
  const c = hex.replace('#', '');
  if (c.length === 3) {
    const r = parseInt(c[0] + c[0], 16);
    const g = parseInt(c[1] + c[1], 16);
    const b = parseInt(c[2] + c[2], 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 145;
  } else if (c.length === 6) {
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 145;
  }
  return false;
};

export const hexToRgba = (hex: string, alpha = 255): [number, number, number, number] => {
  const c = hex.replace('#', '');
  if (c.length === 3) {
    return [
      parseInt(c[0] + c[0], 16),
      parseInt(c[1] + c[1], 16),
      parseInt(c[2] + c[2], 16),
      alpha,
    ];
  } else if (c.length === 6) {
    return [
      parseInt(c.substring(0, 2), 16),
      parseInt(c.substring(2, 4), 16),
      parseInt(c.substring(4, 6), 16),
      alpha,
    ];
  }
  return [56, 189, 248, alpha];
};

// ----------------------------------------------------
// Floating Palette Button (GoodNotes-style icon chip)
// ----------------------------------------------------
type PaletteTone = 'cyan' | 'rose' | 'emerald' | 'amber' | 'violet';

const TONE_ACTIVE: Record<PaletteTone, string> = {
  cyan: 'bg-cyan-400 text-slate-950 shadow-[0_2px_8px_rgba(34,211,238,0.45)]',
  rose: 'bg-rose-400 text-slate-950 shadow-[0_2px_8px_rgba(251,113,133,0.45)]',
  emerald: 'bg-emerald-400 text-slate-950 shadow-[0_2px_8px_rgba(52,211,153,0.45)]',
  amber: 'bg-amber-400 text-slate-950 shadow-[0_2px_8px_rgba(251,191,36,0.45)]',
  violet: 'bg-violet-400 text-slate-950 shadow-[0_2px_8px_rgba(167,139,250,0.45)]',
};

const TONE_SUBTLE: Record<PaletteTone, string> = {
  cyan: 'bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/40',
  rose: 'bg-rose-400/15 text-rose-300 ring-1 ring-rose-400/40',
  emerald: 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/40',
  amber: 'bg-amber-400/15 text-amber-300 ring-1 ring-amber-400/40',
  violet: 'bg-violet-400/15 text-violet-300 ring-1 ring-violet-400/40',
};

const PaletteBtn: React.FC<{
  title: string;
  active?: boolean;
  tone?: PaletteTone;
  subtle?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ title, active = false, tone = 'cyan', subtle = false, disabled = false, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`sp-chip w-[30px] h-[30px] ${
      active
        ? subtle
          ? TONE_SUBTLE[tone]
          : TONE_ACTIVE[tone]
        : 'text-slate-300 hover:text-white hover:bg-white/10'
    } ${disabled ? 'opacity-25 cursor-not-allowed' : 'cursor-pointer'}`}
  >
    {children}
  </button>
);

export const Scratchpad: React.FC<ScratchpadProps> = ({
  isOpen,
  onClose,
  isDocked = false,
  onToggleDock,
  className = '',
  storageKeyPrefix = '',
  title = '',
  documentId = '',
  onSaveBundle,
}) => {
  // Modes & Tabs
  const [activeTab, setActiveTab] = useState<ScratchpadTab>('draw');
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Sheets are unlimited, GoodNotes-style. The count is persisted per document.
  const [totalPages, setTotalPages] = useState<number>(5);
  const MAX_PAGES = 60;

  // Drawing Tools State
  const [tool, setTool] = useState<ToolType>('pen');
  const [color, setColor] = useState<string>('#38bdf8');
  const [thickness, setThickness] = useState<number>(3);
  const [opacity, setOpacity] = useState<number>(100);
  const [paperTexture, setPaperTexture] = useState<PaperTexture>('blueprint');
  const [paperBgColor, setPaperBgColor] = useState<string>('#06131c');
  const [pageMode, setPageMode] = useState<PageMode>('notebook');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isFilling, setIsFilling] = useState<boolean>(false);
  const [fillRipple, setFillRipple] = useState<{ x: number; y: number; color: string } | null>(null);
  const [dpi, setDpi] = useState<DpiMode>(600);
  const [showExportMenu, setShowExportMenu] = useState<boolean>(false);
  const [showPaperMenu, setShowPaperMenu] = useState<boolean>(false);
  const [showSizeMenu, setShowSizeMenu] = useState<boolean>(false);
  const [showOpacityMenu, setShowOpacityMenu] = useState<boolean>(false);
  const [importNotification, setImportNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  // Page view geometry (CSS px). The document buffer stays fixed at
  // NB_BUF_W × NB_BUF_H; only this letterboxed view size changes with the
  // window, so resizing can never touch the pixels that are stored.
  const [viewSize, setViewSize] = useState<{ w: number; h: number }>({ w: 480, h: 320 });
  const [scrollOffset, setScrollOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const deskRef = useRef<HTMLDivElement | null>(null);
  const lastCanvasElRef = useRef<HTMLCanvasElement | null>(null);

  const dpiScale = dpi / 96; // Physical export scale factor (1200 DPI = 12.5x)
  const overlayCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const offscreenSnapshotCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const saveDebounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isCanvasInitializedRef = useRef<boolean>(false);
  const loadedPageRef = useRef<number | null>(null);

  // Line Smoother & Correction Intensity State
  const [smootherIntensity, setSmootherIntensity] = useState<number>(50); // 0 (Off), 25, 50, 75, 95 (Ultra)
  const [showSmootherMenu, setShowSmootherMenu] = useState<boolean>(false);
  const smoothedPointRef = useRef<{ x: number; y: number } | null>(null);

  // Shapes & Lines Mode State
  const [shapeType, setShapeType] = useState<ShapeType>('line');
  const [isShapeFilled, setIsShapeFilled] = useState<boolean>(false);
  const [isDashed, setIsDashed] = useState<boolean>(false);
  const [dashGap, setDashGap] = useState<number>(8);
  const [showShapeMenu, setShowShapeMenu] = useState<boolean>(false);
  const shapeStartRef = useRef<{ x: number; y: number } | null>(null);

  // Hold-to-Straighten & Shape Snap State
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHeldStraightRef = useRef<boolean>(false);
  const strokePointsRef = useRef<{ x: number; y: number }[]>([]);
  const strokeSnapshotRef = useRef<ImageData | null>(null);
  const [snapFeedback, setSnapFeedback] = useState<{ x: number; y: number; text: string } | null>(null);

  // Freehand Lasso Selection & Transform State
  const [lassoSelection, setLassoSelection] = useState<LassoSelection | null>(null);
  const [lassoMode, setLassoMode] = useState<LassoMode>('cut');
  const [activeLassoPoints, setActiveLassoPoints] = useState<{ x: number; y: number }[] | null>(null);
  const isLassoDrawingRef = useRef<boolean>(false);
  const lassoPointsRef = useRef<{ x: number; y: number }[]>([]);

  // Floating Window Geometry (when not docked)
  const [position, setPosition] = useState<{ x: number; y: number }>(() => {
    if (typeof window !== 'undefined') {
      const defaultW = Math.min(540, window.innerWidth - 40);
      const defaultH = Math.min(460, window.innerHeight - 100);
      return {
        x: Math.max(20, window.innerWidth - defaultW - 30),
        y: Math.max(70, window.innerHeight - defaultH - 30),
      };
    }
    return { x: 100, y: 100 };
  });

  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 540,
    height: 460,
  });

  // Text tool state
  const [textInput, setTextInput] = useState<string>('');
  const [textPos, setTextPos] = useState<{ x: number; y: number } | null>(null);
  const [showTextInput, setShowTextInput] = useState<boolean>(false);
  const [canvasTexts, setCanvasTexts] = useState<Array<{ id: string; text: string; x: number; y: number; color: string; size: number; opacity: number }>>([]);

  // Notes state
  const [notesText, setNotesText] = useState<string>('');

  // Mini Calculator state
  const [calcInput, setCalcInput] = useState<string>('');
  const [calcResult, setCalcResult] = useState<string>('');

  // Canvas References
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDrawingRef = useRef<boolean>(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  // Undo / Redo Stacks (stores ImageData)
  const undoStackRef = useRef<ImageData[]>([]);
  const redoStackRef = useRef<ImageData[]>([]);
  const [canUndo, setCanUndo] = useState<boolean>(false);
  const [canRedo, setCanRedo] = useState<boolean>(false);

  // Drag & Resize references
  const isDraggingRef = useRef<boolean>(false);
  const isResizingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; initialX: number; initialY: number }>({
    mouseX: 0,
    mouseY: 0,
    initialX: 0,
    initialY: 0,
  });
  const resizeStartRef = useRef<{ mouseX: number; mouseY: number; initialW: number; initialH: number }>({
    mouseX: 0,
    mouseY: 0,
    initialW: 0,
    initialH: 0,
  });

  // ----------------------------------------------------
  // Load Persistent State on Mount
  // ----------------------------------------------------
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(`${storageKeyPrefix}${STORAGE_KEY_STATE}`);
      if (savedState) {
        const parsed = JSON.parse(savedState);
        if (parsed.tool) setTool(parsed.tool);
        if (parsed.color) setColor(parsed.color);
        if (parsed.thickness) setThickness(parsed.thickness);
        if (typeof parsed.opacity === 'number') setOpacity(parsed.opacity);
        if (parsed.paperTexture) setPaperTexture(parsed.paperTexture);
        if (parsed.paperBgColor) setPaperBgColor(parsed.paperBgColor);
        if (parsed.pageMode) setPageMode(parsed.pageMode);
        if (parsed.dpi) setDpi(parsed.dpi);
        if (parsed.lassoMode) setLassoMode(parsed.lassoMode);
        if (typeof parsed.dashGap === 'number') setDashGap(parsed.dashGap);
        if (parsed.size) setSize(parsed.size);
        if (typeof parsed.totalPages === 'number' && parsed.totalPages >= 1) {
          setTotalPages(Math.min(MAX_PAGES, Math.round(parsed.totalPages)));
        }
        if (parsed.position && !isDocked) {
          // Check bounds
          const boundedX = Math.min(Math.max(10, parsed.position.x), window.innerWidth - 150);
          const boundedY = Math.min(Math.max(50, parsed.position.y), window.innerHeight - 150);
          setPosition({ x: boundedX, y: boundedY });
        }
      }

      const savedNotes = localStorage.getItem(`${storageKeyPrefix}${STORAGE_KEY_NOTES}`);
      if (savedNotes) {
        setNotesText(savedNotes);
      }
    } catch {
      // Ignore parse errors
    }
  }, [storageKeyPrefix, isDocked]);

  // Save State changes to localStorage
  useEffect(() => {
    try {
      const stateToSave = {
        tool,
        color,
        thickness,
        opacity,
        paperTexture,
        paperBgColor,
        pageMode,
        dpi,
        lassoMode,
        dashGap,
        size,
        position,
        totalPages,
      };
      localStorage.setItem(`${storageKeyPrefix}${STORAGE_KEY_STATE}`, JSON.stringify(stateToSave));
    } catch {
      // Ignore quota errors
    }
  }, [tool, color, thickness, opacity, paperTexture, paperBgColor, pageMode, dpi, lassoMode, dashGap, size, position, totalPages, storageKeyPrefix]);

  // Save Notes changes to localStorage
  const handleNotesChange = (text: string) => {
    setNotesText(text);
    try {
      localStorage.setItem(`${storageKeyPrefix}${STORAGE_KEY_NOTES}`, text);
    } catch {
      // Ignore
    }
  };

  // ----------------------------------------------------
  // Save & Load Canvas Drawings per Page (High-Performance Engine)
  // ----------------------------------------------------
  // Small preview for the hub cards — keeps the metadata (and therefore
  // localStorage) tiny even though the stored sheet is 1800 × 1200.
  const makeThumbnail = useCallback((source: HTMLCanvasElement): string => {
    try {
      const targetW = 480;
      const targetH = Math.round((source.height / source.width) * targetW);
      const thumb = document.createElement('canvas');
      thumb.width = targetW;
      thumb.height = targetH;
      const tctx = thumb.getContext('2d');
      if (!tctx) return source.toDataURL('image/png');
      tctx.imageSmoothingEnabled = true;
      tctx.imageSmoothingQuality = 'high';
      tctx.drawImage(source, 0, 0, targetW, targetH);
      return thumb.toDataURL('image/png');
    } catch {
      return source.toDataURL('image/png');
    }
  }, []);

  const flushSaveCanvasToStorage = useCallback(
    (page: number) => {
      if (saveDebounceTimerRef.current) {
        clearTimeout(saveDebounceTimerRef.current);
        saveDebounceTimerRef.current = null;
      }
      const canvas = canvasRef.current;
      if (!canvas) return;
      try {
        const dataUrl = canvas.toDataURL('image/png');
        const key = `${storageKeyPrefix}${STORAGE_KEY_CANVAS_PREFIX}${page}`;
        idbSaveCanvas(key, dataUrl);

        // Keep ScratchpadHub thumbnail card instantly in sync on sheet 1
        if (documentId && page === 1) {
          const existing = getScratchpadById(documentId);
          if (existing) {
            saveScratchpadMeta({
              ...existing,
              thumbnail: makeThumbnail(canvas),
              updatedAt: new Date().toISOString(),
            });
          }
        }
      } catch (err) {
        console.warn('Canvas storage flush error:', err);
      }
    },
    [storageKeyPrefix, documentId, makeThumbnail]
  );

  const saveCanvasToStorage = useCallback(
    (page: number) => {
      if (saveDebounceTimerRef.current) {
        clearTimeout(saveDebounceTimerRef.current);
      }
      saveDebounceTimerRef.current = setTimeout(() => {
        flushSaveCanvasToStorage(page);
      }, 350);
    },
    [flushSaveCanvasToStorage]
  );

  const loadCanvasFromStorage = useCallback(
    async (page: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      try {
        const key = `${storageKeyPrefix}${STORAGE_KEY_CANVAS_PREFIX}${page}`;
        let savedDataUrl = await idbLoadCanvas(key);

        // If page 1 has no savedDataUrl, check document metadata thumbnail as fallback
        if (!savedDataUrl && page === 1 && documentId) {
          const meta = getScratchpadById(documentId);
          if (meta?.thumbnail && meta.thumbnail.length > 50) {
            savedDataUrl = meta.thumbnail;
          }
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        undoStackRef.current = [];
        redoStackRef.current = [];
        setCanUndo(false);
        setCanRedo(false);

        if (savedDataUrl) {
          const img = new Image();
          img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            const imgAspect = img.width / img.height;
            const bufAspect = canvas.width / canvas.height;
            if (Math.abs(imgAspect - bufAspect) < 0.01) {
              // Saved by this version: same document geometry, so this is a
              // 1:1 blit — zero resampling, zero blur.
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            } else {
              // Legacy sheet captured at a viewport-dependent size. Fit it
              // inside the document instead of stretching it out of shape.
              const fit = Math.min(canvas.width / img.width, canvas.height / img.height);
              const w = img.width * fit;
              const h = img.height * fit;
              ctx.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
            }
            try {
              const initialSnapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
              undoStackRef.current = [initialSnapshot];
            } catch {
              // Ignore snapshot error
            }
            setCanUndo(false);
          };
          img.src = savedDataUrl;
        } else {
          try {
            const initialSnapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
            undoStackRef.current = [initialSnapshot];
          } catch {
            // Ignore
          }
          setCanUndo(false);
        }
        loadedPageRef.current = page;
      } catch (err) {
        console.warn('loadCanvasFromStorage failed:', err);
      }
    },
    [storageKeyPrefix, documentId]
  );

  // Switch Page: safe flush current, load next
  const switchPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    if (lassoSelection) {
      commitLassoSelection();
    }
    flushSaveCanvasToStorage(currentPage);
    isCanvasInitializedRef.current = false;
    loadedPageRef.current = null;
    setCurrentPage(newPage);
  };

  // Add a new blank sheet and jump to it
  const addPage = () => {
    if (totalPages >= MAX_PAGES) return;
    if (lassoSelection) commitLassoSelection();
    flushSaveCanvasToStorage(currentPage);
    const next = totalPages + 1;
    isCanvasInitializedRef.current = false;
    loadedPageRef.current = null;
    setTotalPages(next);
    setCurrentPage(next);
  };

  // Switch Tab: flush the sheet before the <canvas> node unmounts
  const closeAllMenus = () => {
    setShowExportMenu(false);
    setShowShapeMenu(false);
    setShowSmootherMenu(false);
    setShowPaperMenu(false);
    setShowSizeMenu(false);
    setShowOpacityMenu(false);
  };

  const switchTab = (tab: ScratchpadTab) => {
    if (tab === activeTab) return;
    if (activeTab === 'draw') flushSaveCanvasToStorage(currentPage);
    closeAllMenus();
    setActiveTab(tab);
  };

  // Reset initialization flag when Scratchpad closes
  useEffect(() => {
    if (!isOpen) {
      isCanvasInitializedRef.current = false;
      loadedPageRef.current = null;
    }
  }, [isOpen]);

  // ----------------------------------------------------
  // Document Buffer Setup (resolution-stable, 120 FPS drawing)
  // ----------------------------------------------------
  // The buffer size is a constant. It is only ever written when the <canvas>
  // node is new or the page changes — never because the window moved or the
  // pad was docked/maximised. That is what keeps reopened artwork pixel-exact.
  useEffect(() => {
    if (!isOpen || activeTab !== 'draw') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const targetBufW = pageMode === 'infinite' ? INF_BUF_W : NB_BUF_W;
    const targetBufH = pageMode === 'infinite' ? INF_BUF_H : NB_BUF_H;
    if (canvas.width !== targetBufW || canvas.height !== targetBufH) {
      canvas.width = targetBufW;
      canvas.height = targetBufH;
    }
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    // Sync high-speed hardware overlay canvas
    const overlay = overlayCanvasRef.current;
    if (overlay) {
      if (overlay.width !== targetBufW || overlay.height !== targetBufH) {
        overlay.width = targetBufW;
        overlay.height = targetBufH;
      }
      overlay.style.width = '100%';
      overlay.style.height = '100%';
    }

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }

    // React re-creates the <canvas> node whenever the draw tab remounts, so a
    // different element identity always means "reload this page from storage".
    const isNewElement = lastCanvasElRef.current !== canvas;
    if (isNewElement || !isCanvasInitializedRef.current || loadedPageRef.current !== currentPage) {
      lastCanvasElRef.current = canvas;
      isCanvasInitializedRef.current = true;
      loadCanvasFromStorage(currentPage);
    }
  }, [isOpen, activeTab, currentPage, pageMode, loadCanvasFromStorage]);

  // ----------------------------------------------------
  // Letterboxed Page View Size (CSS px only — no pixel writes)
  // ----------------------------------------------------
  useEffect(() => {
    if (!isOpen || activeTab !== 'draw') return;
    const desk = deskRef.current;
    if (!desk) return;

    const measure = () => {
      const availW = desk.clientWidth - PAGE_GUTTER * 2;
      const availH = desk.clientHeight - PALETTE_RESERVE - PAGE_GUTTER;
      if (availW <= 0 || availH <= 0) return;
      // Notebook aspect must follow the active sheet mode.
      const docW = pageMode === 'infinite' ? INF_W : NB_W;
      const docH = pageMode === 'infinite' ? INF_H : NB_H;
      const w = Math.floor(Math.min(availW, (availH * docW) / docH));
      const h = Math.floor((w * docH) / docW);
      setViewSize((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(desk);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [isOpen, activeTab, isDocked, isFullscreen, pageMode]);

  // Push Canvas State to Undo Stack
  const pushUndoState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
      undoStackRef.current.push(snapshot);
      // Cap by step count AND by memory: at the fixed 1800 × 1200 document size
      // each snapshot is ~8.6 MB, so a hard count of 12 could hold 100 MB+.
      const maxSteps = 12;
      const maxBytes = 64 * 1024 * 1024;
      let bytes = undoStackRef.current.length * snapshot.data.length;
      while (undoStackRef.current.length > 1 && (undoStackRef.current.length > maxSteps || bytes > maxBytes)) {
        const dropped = undoStackRef.current.shift();
        bytes -= dropped ? dropped.data.length : 0;
      }
      redoStackRef.current = [];
      setCanUndo(undoStackRef.current.length > 1);
      setCanRedo(false);
      saveCanvasToStorage(currentPage);
    } catch {
      // Ignore snapshot error
    }
  };

  // Undo Functionality
  const handleUndo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx || undoStackRef.current.length <= 1) return;

    const currentSnapshot = undoStackRef.current.pop()!;
    redoStackRef.current.push(currentSnapshot);

    const previousSnapshot = undoStackRef.current[undoStackRef.current.length - 1];
    ctx.putImageData(previousSnapshot, 0, 0);

    setCanUndo(undoStackRef.current.length > 1);
    setCanRedo(true);
    saveCanvasToStorage(currentPage);
  };

  // Redo Functionality
  const handleRedo = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx || redoStackRef.current.length === 0) return;

    const nextSnapshot = redoStackRef.current.pop()!;
    undoStackRef.current.push(nextSnapshot);
    ctx.putImageData(nextSnapshot, 0, 0);

    setCanUndo(true);
    setCanRedo(redoStackRef.current.length > 0);
    saveCanvasToStorage(currentPage);
  };

  // Clear Entire Canvas
  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Snapshot the sheet BEFORE wiping it so Ctrl+Z can bring it back.
    pushUndoState();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    saveCanvasToStorage(currentPage);
  };

  // Download / Export Drawing as PNG
  // Download / Export Drawing as PNG with Genuine 600+ DPI Metadata
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create export canvas with background texture baked in.
    // Always rendered from the fixed document geometry — never from the current
    // window size — so the exported PNG matches the stored sheet exactly.
    const exportCanvas = document.createElement('canvas');
    const MAX_EXPORT_EDGE = 8192;
    const expScale = Math.min(dpi / 96, MAX_EXPORT_EDGE / NB_W);
    exportCanvas.width = Math.round(NB_W * expScale);
    exportCanvas.height = Math.round(NB_H * expScale);
    const expCtx = exportCanvas.getContext('2d');
    if (!expCtx) return;

    // Draw background
    const light = isLightColor(paperBgColor);
    expCtx.fillStyle = paperBgColor;
    expCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // Draw grid if selected, scaling step proportional to high-DPI.
    // The on-screen sheet shows ~24 cells across, so the export matches that.
    const gridStep = Math.max(1, Math.round((NB_W / 24) * expScale));
    if (paperTexture === 'blueprint' || paperTexture === 'graph') {
      expCtx.strokeStyle = light ? 'rgba(2, 132, 199, 0.28)' : 'rgba(56, 189, 248, 0.18)';
      expCtx.lineWidth = Math.max(1, Math.round(1 * expScale));
      for (let x = 0; x < exportCanvas.width; x += gridStep) {
        expCtx.beginPath();
        expCtx.moveTo(x, 0);
        expCtx.lineTo(x, exportCanvas.height);
        expCtx.stroke();
      }
      for (let y = 0; y < exportCanvas.height; y += gridStep) {
        expCtx.beginPath();
        expCtx.moveTo(0, y);
        expCtx.lineTo(exportCanvas.width, y);
        expCtx.stroke();
      }
    } else if (paperTexture === 'lined') {
      expCtx.strokeStyle = light ? 'rgba(15, 23, 42, 0.22)' : 'rgba(148, 163, 184, 0.18)';
      expCtx.lineWidth = Math.max(1, Math.round(1 * expScale));
      const lineStep = Math.max(1, Math.round((NB_H / 30) * expScale));
      for (let y = lineStep; y < exportCanvas.height; y += lineStep) {
        expCtx.beginPath();
        expCtx.moveTo(0, y);
        expCtx.lineTo(exportCanvas.width, y);
        expCtx.stroke();
      }
    }

    // Draw user's artwork scaled smoothly to full physical resolution
    expCtx.imageSmoothingEnabled = true;
    expCtx.imageSmoothingQuality = 'high';
    expCtx.drawImage(canvas, 0, 0, exportCanvas.width, exportCanvas.height);

    // Export with pHYs chunk for genuine physical 600+ DPI
    exportCanvas.toBlob(async (blob) => {
      if (!blob) {
        const a = document.createElement('a');
        const cleanTitle = (title || 'CE_Exam_Scratchpad').replace(/[^a-zA-Z0-9_-]/g, '_');
        a.download = `${cleanTitle}_Sheet_${currentPage}_${dpi}DPI.png`;
        a.href = exportCanvas.toDataURL('image/png');
        a.click();
        return;
      }
      try {
        const enhancedBlob = await addDpiToPngBlob(blob, dpi);
        const url = URL.createObjectURL(enhancedBlob);
        const a = document.createElement('a');
        const cleanTitle = (title || 'CE_Exam_Scratchpad').replace(/[^a-zA-Z0-9_-]/g, '_');
        a.download = `${cleanTitle}_Sheet_${currentPage}_${dpi}DPI.png`;
        a.href = url;
        a.click();
        setTimeout(() => URL.revokeObjectURL(url), 3000);
      } catch {
        const a = document.createElement('a');
        const cleanTitle = (title || 'CE_Exam_Scratchpad').replace(/[^a-zA-Z0-9_-]/g, '_');
        a.download = `${cleanTitle}_Sheet_${currentPage}_${dpi}DPI.png`;
        a.href = exportCanvas.toDataURL('image/png');
        a.click();
      }
    }, 'image/png');
  };

  // Export Multi-Page Universal .cescratch Bundle for Tablets and Third-Party Apps
  const handleExportCescratch = async () => {
    flushSaveCanvasToStorage(currentPage);
    const pages: { page: number; dataUrl: string; updatedAt: string }[] = [];
    for (let p = 1; p <= totalPages; p++) {
      const key = `${storageKeyPrefix}${STORAGE_KEY_CANVAS_PREFIX}${p}`;
      const data = await idbLoadCanvas(key);
      if (data) {
        pages.push({ page: p, dataUrl: data, updatedAt: new Date().toISOString() });
      }
    }
    const cleanTitle = (title || 'CE_Exam_Scratchpad').replace(/[^a-zA-Z0-9_-]/g, '_');
    const bundle = {
      format: 'ce-scratchpad-bundle' as const,
      version: '2.0' as const,
      deviceCompat: 'Universal Canvas / Tablet / Web (.cescratch)' as const,
      metadata: {
        id: documentId || `export_${Date.now()}`,
        title: title || 'CE Exam Scratchpad',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        type: 'standalone' as const,
        paperTexture,
        paperBgColor,
        dpi,
        notesText,
        totalPages,
      },
      pages,
    };
    downloadFile(JSON.stringify(bundle, null, 2), `${cleanTitle}.cescratch`, 'application/json');
    setShowExportMenu(false);
  };

  // Export Scalable Vector Graphics (.svg) for Tablet apps (GoodNotes, Notability, Procreate, Illustrator)
  const handleExportSvg = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const svgStr = generateScratchpadSvg(
      {
        id: documentId || 'temp',
        title: title || 'CE Exam Scratchpad',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        type: 'standalone',
        paperTexture,
        paperBgColor,
        dpi,
        notesText,
        totalPages,
      },
      currentPage,
      dataUrl,
      canvas.width,
      canvas.height
    );
    const cleanTitle = (title || 'CE_Exam_Scratchpad').replace(/[^a-zA-Z0-9_-]/g, '_');
    downloadFile(svgStr, `${cleanTitle}_Sheet_${currentPage}.svg`, 'image/svg+xml');
    setShowExportMenu(false);
  };

  // Import Handler for .cescratch or .json file
  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const bundle = JSON.parse(text);
      if (bundle.format !== 'ce-scratchpad-bundle') {
        throw new Error('Expected a valid .cescratch file');
      }
      if (bundle.metadata?.paperTexture) setPaperTexture(bundle.metadata.paperTexture);
      if (bundle.metadata?.paperBgColor) setPaperBgColor(bundle.metadata.paperBgColor);
      if (bundle.metadata?.dpi) setDpi(bundle.metadata.dpi);
      if (bundle.metadata?.notesText !== undefined) setNotesText(bundle.metadata.notesText);

      if (Array.isArray(bundle.pages)) {
        for (const p of bundle.pages) {
          if (p.dataUrl) {
            await idbSaveCanvas(`${storageKeyPrefix}${STORAGE_KEY_CANVAS_PREFIX}${p.page}`, p.dataUrl);
          }
        }
      }
      await loadCanvasFromStorage(currentPage);
      setImportNotification('Imported .cescratch file successfully!');
      setTimeout(() => setImportNotification(null), 3000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Import failed';
      setImportNotification(msg);
      setTimeout(() => setImportNotification(null), 3500);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Safe flush on Close
  const handleClose = () => {
    if (lassoSelection) {
      commitLassoSelection();
    }
    flushSaveCanvasToStorage(currentPage);
    if (documentId) {
      const thumb = canvasRef.current ? makeThumbnail(canvasRef.current) : undefined;
      const existing = getScratchpadById(documentId);
      saveScratchpadMeta({
        id: documentId,
        title: title || existing?.title || 'Scratchpad',
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        type: existing?.type || (documentId.startsWith('exam_') ? 'exam_session' : 'standalone'),
        subject: existing?.subject,
        year: existing?.year,
        month: existing?.month,
        attemptId: existing?.attemptId,
        score: existing?.score,
        totalQuestions: existing?.totalQuestions,
        ratingPercentage: existing?.ratingPercentage,
        paperTexture,
        paperBgColor,
        dpi,
        notesText,
        totalPages,
        thumbnail: thumb || existing?.thumbnail,
        sessionKey: storageKeyPrefix,
      });
    }
    if (onSaveBundle) onSaveBundle();
    onClose();
  };

  // ----------------------------------------------------
  // High-DPI Coordinate Transformation Helper
  // Maps screen CSS pointer coordinates to physical canvas buffer pixels
  // ----------------------------------------------------
  const getCanvasPoint = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0, scale: 1 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width > 0 ? canvas.width / rect.width : 1;
    const scaleY = rect.height > 0 ? canvas.height / rect.height : 1;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
      scale: (scaleX + scaleY) / 2,
    };
  };

  // ----------------------------------------------------
  // Color Bucket Fill with Wavefront Spreading Animation
  // ----------------------------------------------------
  const performBucketFill = (startX: number, startY: number, fillColorHex: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    if (w <= 0 || h <= 0) return;
    if (startX < 0 || startX >= w || startY < 0 || startY >= h) return;

    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    const startIdx = (startY * w + startX) * 4;
    const startR = data[startIdx];
    const startG = data[startIdx + 1];
    const startB = data[startIdx + 2];
    const startA = data[startIdx + 3];

    const [fillR, fillG, fillB, fillA] = hexToRgba(fillColorHex, 255);

    // If starting pixel already matches the fill color, exit
    if (
      Math.abs(startR - fillR) < 12 &&
      Math.abs(startG - fillG) < 12 &&
      Math.abs(startB - fillB) < 12 &&
      Math.abs(startA - fillA) < 12
    ) {
      return;
    }

    const isStartTransparent = startA < 40;

    const matchesTarget = (idx: number): boolean => {
      const a = data[idx + 3];
      if (isStartTransparent) {
        // Enclosed transparent area: match any pixel with low alpha (stop at stroke boundaries)
        return a < 50;
      } else {
        // Recolor existing colored region
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const dist = Math.abs(r - startR) + Math.abs(g - startG) + Math.abs(b - startB) + Math.abs(a - startA);
        return dist <= 55;
      }
    };

    const totalPixels = w * h;
    const visited = new Uint8Array(totalPixels);
    const queue = new Int32Array(totalPixels);

    let head = 0;
    let tail = 0;

    const startPos = startX + startY * w;
    queue[tail++] = startPos;
    visited[startPos] = 1;

    let minX = startX;
    let maxX = startX;
    let minY = startY;
    let maxY = startY;

    // Breadth-First Search flood fill
    while (head < tail) {
      const pos = queue[head++];
      const x = pos % w;
      const y = Math.floor(pos / w);

      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;

      // 4-connected neighbors
      if (x > 0) {
        const nPos = pos - 1;
        if (!visited[nPos] && matchesTarget(nPos * 4)) {
          visited[nPos] = 1;
          queue[tail++] = nPos;
        }
      }
      if (x < w - 1) {
        const nPos = pos + 1;
        if (!visited[nPos] && matchesTarget(nPos * 4)) {
          visited[nPos] = 1;
          queue[tail++] = nPos;
        }
      }
      if (y > 0) {
        const nPos = pos - w;
        if (!visited[nPos] && matchesTarget(nPos * 4)) {
          visited[nPos] = 1;
          queue[tail++] = nPos;
        }
      }
      if (y < h - 1) {
        const nPos = pos + w;
        if (!visited[nPos] && matchesTarget(nPos * 4)) {
          visited[nPos] = 1;
          queue[tail++] = nPos;
        }
      }
    }

    const filledCount = tail;
    if (filledCount === 0) return;

    // Spreading animation: Partition pixels into wavefront frames radiating from click point
    const NUM_FRAMES = 18;
    const frameBuckets: number[][] = Array.from({ length: NUM_FRAMES }, () => []);

    const maxDist = Math.max(
      1,
      Math.hypot(
        Math.max(Math.abs(maxX - startX), Math.abs(minX - startX)),
        Math.max(Math.abs(maxY - startY), Math.abs(minY - startY))
      )
    );

    for (let i = 0; i < filledCount; i++) {
      const pos = queue[i];
      const px = pos % w;
      const py = Math.floor(pos / w);
      const d = Math.hypot(px - startX, py - startY);
      const bucketIdx = Math.min(NUM_FRAMES - 1, Math.floor((d / maxDist) * NUM_FRAMES));
      frameBuckets[bucketIdx].push(pos);
    }

    let frame = 0;
    setIsFilling(true);

    const stepAnimation = () => {
      if (frame >= NUM_FRAMES) {
        setIsFilling(false);
        pushUndoState();
        saveCanvasToStorage(currentPage);
        return;
      }

      const currentBucket = frameBuckets[frame];
      let bMinX = w;
      let bMaxX = 0;
      let bMinY = h;
      let bMaxY = 0;

      for (let i = 0; i < currentBucket.length; i++) {
        const p = currentBucket[i];
        const px = p % w;
        const py = Math.floor(p / w);
        if (px < bMinX) bMinX = px;
        if (px > bMaxX) bMaxX = px;
        if (py < bMinY) bMinY = py;
        if (py > bMaxY) bMaxY = py;

        const idx = p * 4;
        data[idx] = fillR;
        data[idx + 1] = fillG;
        data[idx + 2] = fillB;
        data[idx + 3] = fillA;
      }

      if (currentBucket.length > 0) {
        const dirtyW = bMaxX - bMinX + 1;
        const dirtyH = bMaxY - bMinY + 1;
        ctx.putImageData(imgData, 0, 0, bMinX, bMinY, dirtyW, dirtyH);
      }

      frame++;
      requestAnimationFrame(stepAnimation);
    };

    requestAnimationFrame(stepAnimation);
  };

  // ----------------------------------------------------
  // Shapes & Lines Engine for Engineering Drawings
  // ----------------------------------------------------
  const drawShape = (
    ctx: CanvasRenderingContext2D,
    type: ShapeType,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    currentColor: string,
    currentThickness: number,
    scale: number,
    filled: boolean,
    dashed: boolean
  ) => {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = currentColor;
    ctx.fillStyle = currentColor;
    ctx.lineWidth = currentThickness * scale;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (dashed) {
      ctx.setLineDash([dashGap * scale, dashGap * 0.75 * scale]);
    } else {
      ctx.setLineDash([]);
    }

    if (type === 'line') {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    } else if (type === 'arrow') {
      // Directed vector line with filled triangular arrowhead
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      const angle = Math.atan2(y2 - y1, x2 - x1);
      const headLen = Math.max(14 * scale, currentThickness * scale * 3.5);
      ctx.save();
      ctx.setLineDash([]);
      ctx.fillStyle = currentColor;
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(
        x2 - headLen * Math.cos(angle - Math.PI / 6),
        y2 - headLen * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        x2 - headLen * Math.cos(angle + Math.PI / 6),
        y2 - headLen * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    } else if (type === 'dimension') {
      // Structural dimensioning line: Extension ticks, double arrowheads, and distance measurement
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const tickLen = 14 * scale;
      const perpAngle = angle + Math.PI / 2;

      // Tick 1
      ctx.beginPath();
      ctx.moveTo(x1 - tickLen * Math.cos(perpAngle), y1 - tickLen * Math.sin(perpAngle));
      ctx.lineTo(x1 + tickLen * Math.cos(perpAngle), y1 + tickLen * Math.sin(perpAngle));
      ctx.stroke();

      // Tick 2
      ctx.beginPath();
      ctx.moveTo(x2 - tickLen * Math.cos(perpAngle), y2 - tickLen * Math.sin(perpAngle));
      ctx.lineTo(x2 + tickLen * Math.cos(perpAngle), y2 + tickLen * Math.sin(perpAngle));
      ctx.stroke();

      // Dimension main line
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      // Dimension text badge
      const distPx = Math.round(Math.hypot(x2 - x1, y2 - y1) / scale);
      const distM = (distPx / 100).toFixed(2);
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;

      ctx.save();
      ctx.setLineDash([]);
      ctx.font = `bold ${Math.round(11 * scale)}px monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      const label = `${distM} m (${distPx}px)`;
      const textMetrics = ctx.measureText(label);
      ctx.fillStyle = 'rgba(6, 19, 28, 0.85)';
      ctx.fillRect(
        midX - textMetrics.width / 2 - 4 * scale,
        midY - 14 * scale,
        textMetrics.width + 8 * scale,
        14 * scale
      );
      ctx.fillStyle = currentColor;
      ctx.fillText(label, midX, midY - 2 * scale);
      ctx.restore();
    } else if (type === 'rect') {
      const rx = Math.min(x1, x2);
      const ry = Math.min(y1, y2);
      const rw = Math.abs(x2 - x1);
      const rh = Math.abs(y2 - y1);
      if (filled) {
        ctx.save();
        ctx.globalAlpha = 0.25;
        ctx.fillRect(rx, ry, rw, rh);
        ctx.restore();
      }
      ctx.strokeRect(rx, ry, rw, rh);
    } else if (type === 'circle') {
      const cx = (x1 + x2) / 2;
      const cy = (y1 + y2) / 2;
      const rx = Math.abs(x2 - x1) / 2;
      const ry = Math.abs(y2 - y1) / 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, Math.max(1, rx), Math.max(1, ry), 0, 0, 2 * Math.PI);
      if (filled) {
        ctx.save();
        ctx.globalAlpha = 0.25;
        ctx.fill();
        ctx.restore();
      }
      ctx.stroke();
    } else if (type === 'triangle') {
      // Right triangle / truss triangle
      ctx.beginPath();
      ctx.moveTo(x1, y2);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x1, y1);
      ctx.closePath();
      if (filled) {
        ctx.save();
        ctx.globalAlpha = 0.25;
        ctx.fill();
        ctx.restore();
      }
      ctx.stroke();
    } else if (type === 'coord') {
      // X-Y Coordinate axes
      const originX = x1;
      const originY = y2;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(x2, originY);
      ctx.moveTo(originX, originY);
      ctx.lineTo(originX, y1);
      ctx.stroke();

      const head = 10 * scale;
      ctx.beginPath();
      ctx.moveTo(x2, originY);
      ctx.lineTo(x2 - head, originY - head / 2);
      ctx.lineTo(x2 - head, originY + head / 2);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(originX, y1);
      ctx.lineTo(originX - head / 2, y1 + head);
      ctx.lineTo(originX + head / 2, y1 + head);
      ctx.closePath();
      ctx.fill();

      ctx.save();
      ctx.font = `bold ${Math.round(10 * scale)}px sans-serif`;
      ctx.fillText('x', x2 + 4 * scale, originY + 4 * scale);
      ctx.fillText('y', originX - 12 * scale, y1 - 4 * scale);
      ctx.restore();
    }
    ctx.restore();
  };

  // ----------------------------------------------------
  // Hold-to-Straighten & Shape Snap Trigger (GPU-Accelerated)
  // ----------------------------------------------------
  const triggerHoldStraighten = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (!isDrawingRef.current || strokePointsRef.current.length < 3) return;

    isHeldStraightRef.current = true;
    const start = strokePointsRef.current[0];
    const end = strokePointsRef.current[strokePointsRef.current.length - 1];

    // Hardware GPU blit restore
    if (offscreenSnapshotCanvasRef.current) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(offscreenSnapshotCanvasRef.current, 0, 0);
    }

    const pt = getCanvasPoint(0, 0);
    const scale = pt.scale;
    const dist = Math.hypot(end.x - start.x, end.y - start.y);

    configureContext(ctx, tool, color, thickness, scale, opacity);

    // If path is closed loop (circle or box)
    if (dist < 45 * scale && strokePointsRef.current.length > 25) {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      for (const p of strokePointsRef.current) {
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
      }
      const w = maxX - minX;
      const h = maxY - minY;
      const aspect = w / Math.max(1, h);

      if (aspect >= 0.75 && aspect <= 1.33) {
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;
        const r = (w + h) / 4;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        ctx.stroke();
        setSnapFeedback({ x: cx, y: cy, text: 'Circle Snapped ⭕' });
      } else {
        ctx.strokeRect(minX, minY, w, h);
        setSnapFeedback({ x: (minX + maxX) / 2, y: (minY + maxY) / 2, text: 'Box Snapped ⬛' });
      }
    } else {
      // Straighten line from start to held end point
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
      setSnapFeedback({ x: end.x, y: end.y, text: 'Line Straightened ⚡' });
    }

    setTimeout(() => setSnapFeedback(null), 1200);
  };

  // ----------------------------------------------------
  // Freehand Lasso Extraction & Transform Helpers
  // ----------------------------------------------------
  // ----------------------------------------------------
  // Text Rendering on Canvas
  // ----------------------------------------------------
  const drawCanvasTexts = (ctx: CanvasRenderingContext2D) => {
    canvasTexts.forEach((t) => {
      ctx.save();
      ctx.globalAlpha = t.opacity / 100;
      ctx.fillStyle = t.color;
      ctx.font = `bold ${Math.max(12, t.size * 4)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      ctx.textBaseline = 'top';
      const lines = t.text.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, t.x, t.y + i * t.size * 5);
      });
      ctx.restore();
    });
  };

  const commitTextToCanvas = () => {
    if (!textInput.trim() || !textPos) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const newText = {
      id: `text_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      text: textInput.trim(),
      x: textPos.x,
      y: textPos.y,
      color,
      size: thickness,
      opacity,
    };

    setCanvasTexts((prev) => [...prev, newText]);

    // Draw immediately
    ctx.save();
    ctx.globalAlpha = opacity / 100;
    ctx.fillStyle = color;
    ctx.font = `bold ${Math.max(12, thickness * 4)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.textBaseline = 'top';
    const lines = newText.text.split('\n');
    lines.forEach((line, i) => {
      ctx.fillText(line, newText.x, newText.y + i * thickness * 5);
    });
    ctx.restore();

    setShowTextInput(false);
    setTextInput('');
    setTextPos(null);
    pushUndoState();
    saveCanvasToStorage(currentPage);
  };

  const commitLassoSelection = () => {
    if (!lassoSelection) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(
      lassoSelection.canvas,
      0,
      0,
      lassoSelection.canvas.width,
      lassoSelection.canvas.height,
      lassoSelection.x,
      lassoSelection.y,
      lassoSelection.width,
      lassoSelection.height
    );
    ctx.restore();

    setLassoSelection(null);
    pushUndoState();
    saveCanvasToStorage(currentPage);
  };

  const cancelLassoSelection = () => {
    if (!lassoSelection) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(
      lassoSelection.canvas,
      0,
      0,
      lassoSelection.canvas.width,
      lassoSelection.canvas.height,
      lassoSelection.initialX,
      lassoSelection.initialY,
      lassoSelection.initialWidth,
      lassoSelection.initialHeight
    );
    ctx.restore();

    setLassoSelection(null);
  };

  const duplicateLassoSelection = () => {
    if (!lassoSelection) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(
      lassoSelection.canvas,
      0,
      0,
      lassoSelection.canvas.width,
      lassoSelection.canvas.height,
      lassoSelection.x,
      lassoSelection.y,
      lassoSelection.width,
      lassoSelection.height
    );
    ctx.restore();

    setLassoSelection((prev) =>
      prev
        ? {
            ...prev,
            x: prev.x + 25 * dpiScale,
            y: prev.y + 25 * dpiScale,
          }
        : null
    );

    pushUndoState();
    saveCanvasToStorage(currentPage);
  };

  const deleteLassoSelection = () => {
    setLassoSelection(null);
    pushUndoState();
    saveCanvasToStorage(currentPage);
  };

  // Point-in-polygon test for area-coverage lasso
  const pointInPoly = (x: number, y: number, poly: { x: number; y: number }[]) => {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const xi = poly[i].x, yi = poly[i].y;
      const xj = poly[j].x, yj = poly[j].y;
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }
    return inside;
  };

  // Sample pixels from a rectangular region and check what % are inside the lasso
  const sampleCoverage = (
    minX: number, minY: number, maxX: number, maxY: number,
    points: { x: number; y: number }[],
    samplesPerSide = 12
  ) => {
    let inside = 0, total = 0;
    for (let ix = 0; ix <= samplesPerSide; ix++) {
      for (let iy = 0; iy <= samplesPerSide; iy++) {
        const x = minX + (maxX - minX) * (ix / samplesPerSide);
        const y = minY + (maxY - minY) * (iy / samplesPerSide);
        total++;
        if (pointInPoly(x, y, points)) inside++;
      }
    }
    return total > 0 ? inside / total : 0;
  };

  const executeLassoCut = (points: { x: number; y: number }[]) => {
    if (points.length < 5) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const p of points) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }

    const w = Math.ceil(maxX - minX);
    const h = Math.ceil(maxY - minY);
    if (w < 8 || h < 8) return;

    // Area-coverage lasso mode: don't cut, just select region if coverage >= 85%
    if (lassoMode === 'select') {
      const coverage = sampleCoverage(minX, minY, maxX, maxY, points, 14);
      if (coverage >= 0.85) {
        // Create a selection highlight (visual only, no cut)
        const offCanvas = document.createElement('canvas');
        offCanvas.width = w;
        offCanvas.height = h;
        const offCtx = offCanvas.getContext('2d');
        if (!offCtx) return;
        offCtx.drawImage(canvas, minX, minY, w, h, 0, 0, w, h);
        setLassoSelection({
          canvas: offCanvas,
          x: minX,
          y: minY,
          width: w,
          height: h,
          initialX: minX,
          initialY: minY,
          initialWidth: w,
          initialHeight: h,
        });
      }
      return;
    }

    // Standard cut mode
    const offCanvas = document.createElement('canvas');
    offCanvas.width = w;
    offCanvas.height = h;
    const offCtx = offCanvas.getContext('2d');
    if (!offCtx) return;

    // 1. Clip offscreen canvas to exact freehand loop
    offCtx.save();
    offCtx.beginPath();
    points.forEach((p, idx) => {
      const lx = p.x - minX;
      const ly = p.y - minY;
      if (idx === 0) offCtx.moveTo(lx, ly);
      else offCtx.lineTo(lx, ly);
    });
    offCtx.closePath();
    offCtx.clip();

    // 2. Draw from main canvas into the offscreen cutout
    offCtx.drawImage(canvas, minX, minY, w, h, 0, 0, w, h);
    offCtx.restore();

    // 3. Erase the exact enclosed polygon from main canvas
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    points.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // 4. Activate transform selection
    setLassoSelection({
      canvas: offCanvas,
      x: minX,
      y: minY,
      width: w,
      height: h,
      initialX: minX,
      initialY: minY,
      initialWidth: w,
      initialHeight: h,
    });
  };

  // ----------------------------------------------------
  // Interactive Move & Resize Handles for Lasso Selection
  // ----------------------------------------------------
  const handleLassoHandleDown = (
    type: 'move' | 'nw' | 'ne' | 'sw' | 'se' | 'n' | 's' | 'e' | 'w',
    e: React.PointerEvent
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (!lassoSelection || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = rect.width > 0 ? canvas.width / rect.width : 1;
    const scaleY = rect.height > 0 ? canvas.height / rect.height : 1;

    const startX = e.clientX;
    const startY = e.clientY;
    const initialSelX = lassoSelection.x;
    const initialSelY = lassoSelection.y;
    const initialSelW = lassoSelection.width;
    const initialSelH = lassoSelection.height;

    const handleWindowPointerMove = (moveEvent: PointerEvent) => {
      const dx = (moveEvent.clientX - startX) * scaleX;
      const dy = (moveEvent.clientY - startY) * scaleY;

      setLassoSelection((prev) => {
        if (!prev) return null;
        let newX = prev.x;
        let newY = prev.y;
        let newW = prev.width;
        let newH = prev.height;

        if (type === 'move') {
          newX = initialSelX + dx;
          newY = initialSelY + dy;
        } else if (type === 'se') {
          newW = Math.max(20 * scaleX, initialSelW + dx);
          newH = Math.max(20 * scaleY, initialSelH + dy);
        } else if (type === 'e') {
          newW = Math.max(20 * scaleX, initialSelW + dx);
        } else if (type === 's') {
          newH = Math.max(20 * scaleY, initialSelH + dy);
        } else if (type === 'nw') {
          const candW = initialSelW - dx;
          const candH = initialSelH - dy;
          if (candW > 20 * scaleX) {
            newX = initialSelX + dx;
            newW = candW;
          }
          if (candH > 20 * scaleY) {
            newY = initialSelY + dy;
            newH = candH;
          }
        } else if (type === 'ne') {
          const candH = initialSelH - dy;
          newW = Math.max(20 * scaleX, initialSelW + dx);
          if (candH > 20 * scaleY) {
            newY = initialSelY + dy;
            newH = candH;
          }
        } else if (type === 'sw') {
          const candW = initialSelW - dx;
          if (candW > 20 * scaleX) {
            newX = initialSelX + dx;
            newW = candW;
          }
          newH = Math.max(20 * scaleY, initialSelH + dy);
        } else if (type === 'n') {
          const candH = initialSelH - dy;
          if (candH > 20 * scaleY) {
            newY = initialSelY + dy;
            newH = candH;
          }
        } else if (type === 'w') {
          const candW = initialSelW - dx;
          if (candW > 20 * scaleX) {
            newX = initialSelX + dx;
            newW = candW;
          }
        }

        return {
          ...prev,
          x: newX,
          y: newY,
          width: newW,
          height: newH,
        };
      });
    };

    const handleWindowPointerUp = () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
    };

    window.addEventListener('pointermove', handleWindowPointerMove);
    window.addEventListener('pointerup', handleWindowPointerUp);
  };

  // ----------------------------------------------------
  // Main Pointer Event Handlers
  // ----------------------------------------------------
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    // If there is an active lasso selection and user clicked outside, commit it
    if (lassoSelection) {
      commitLassoSelection();
    }

    const pt = getCanvasPoint(e.clientX, e.clientY);

    // Handle Freehand Lasso Drawing
    if (tool === 'lasso') {
      isLassoDrawingRef.current = true;
      lassoPointsRef.current = [{ x: pt.x, y: pt.y }];
      setActiveLassoPoints([{ x: pt.x, y: pt.y }]);
      canvas.setPointerCapture(e.pointerId);
      return;
    }

    // Handle Geometric Shapes Drawing
    if (tool === 'shape') {
      isDrawingRef.current = true;
      shapeStartRef.current = { x: pt.x, y: pt.y };
      canvas.setPointerCapture(e.pointerId);
      return;
    }

    // Handle Text Tool
    if (tool === 'text') {
      setTextPos({ x: pt.x, y: pt.y });
      setShowTextInput(true);
      setTextInput('');
      return;
    }

    // Handle Color Bucket Fill
    if (tool === 'bucket') {
      if (isFilling) return;
      const canvasRect = canvas.getBoundingClientRect();
      setFillRipple({
        x: e.clientX - canvasRect.left,
        y: e.clientY - canvasRect.top,
        color,
      });
      setTimeout(() => setFillRipple(null), 700);
      performBucketFill(Math.round(pt.x), Math.round(pt.y), color);
      return;
    }

    // Freehand Drawing Tools (Pen, Pencil, Calligraphy, Highlighter, Eraser)
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.setPointerCapture(e.pointerId);

    isDrawingRef.current = true;
    lastPointRef.current = { x: pt.x, y: pt.y };
    smoothedPointRef.current = { x: pt.x, y: pt.y };
    strokePointsRef.current = [{ x: pt.x, y: pt.y }];
    isHeldStraightRef.current = false;

    // Fast GPU blit to offscreen buffer in case of hold-to-straighten
    if (!offscreenSnapshotCanvasRef.current) {
      offscreenSnapshotCanvasRef.current = document.createElement('canvas');
    }
    const off = offscreenSnapshotCanvasRef.current;
    if (off.width !== canvas.width || off.height !== canvas.height) {
      off.width = canvas.width;
      off.height = canvas.height;
    }
    const offCtx = off.getContext('2d');
    if (offCtx) {
      offCtx.clearRect(0, 0, off.width, off.height);
      offCtx.drawImage(canvas, 0, 0);
    }

    // Configure Context based on Tool Texture and High-DPI Scale
    configureContext(ctx, tool, color, thickness, pt.scale, opacity);

    // Initial dot
    drawStroke(ctx, pt.x, pt.y, pt.x + 0.1, pt.y + 0.1, pt.scale);

    // Start hold-to-straighten timer if not eraser
    if (tool !== 'eraser') {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      holdTimerRef.current = setTimeout(() => {
        triggerHoldStraighten();
      }, 500);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (tool === 'bucket') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const currentPt = getCanvasPoint(e.clientX, e.clientY);

    // 1. Freehand Lasso Loop update
    if (tool === 'lasso' && isLassoDrawingRef.current) {
      e.preventDefault();
      lassoPointsRef.current.push({ x: currentPt.x, y: currentPt.y });
      setActiveLassoPoints([...lassoPointsRef.current]);
      return;
    }

    // 2. Geometric Shape live drag preview via zero-latency Overlay Canvas
    if (tool === 'shape' && isDrawingRef.current && shapeStartRef.current) {
      e.preventDefault();
      const overlay = overlayCanvasRef.current;
      if (!overlay) return;
      const overlayCtx = overlay.getContext('2d');
      if (!overlayCtx) return;
      overlayCtx.clearRect(0, 0, overlay.width, overlay.height);
      drawShape(
        overlayCtx,
        shapeType,
        shapeStartRef.current.x,
        shapeStartRef.current.y,
        currentPt.x,
        currentPt.y,
        color,
        thickness,
        currentPt.scale,
        isShapeFilled,
        isDashed
      );
      return;
    }

    // 3. Freehand Stroke drawing
    if (!isDrawingRef.current || !lastPointRef.current) return;
    e.preventDefault();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // If hold-to-straighten already snapped, pivot the straight line to the moving pointer with GPU blit
    if (isHeldStraightRef.current && offscreenSnapshotCanvasRef.current && strokePointsRef.current.length > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(offscreenSnapshotCanvasRef.current, 0, 0);
      configureContext(ctx, tool, color, thickness, currentPt.scale, opacity);
      ctx.beginPath();
      ctx.moveTo(strokePointsRef.current[0].x, strokePointsRef.current[0].y);
      ctx.lineTo(currentPt.x, currentPt.y);
      ctx.stroke();
      strokePointsRef.current[strokePointsRef.current.length - 1] = { x: currentPt.x, y: currentPt.y };
      return;
    }

    // Reset hold timer since pointer is still moving
    if (tool !== 'eraser') {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      holdTimerRef.current = setTimeout(() => {
        triggerHoldStraighten();
      }, 500);
    }

    // Line Smoother Streamline Algorithm with Correction Intensity
    if (smootherIntensity > 0 && tool !== 'eraser') {
      const factor = 1 - (smootherIntensity / 100) * 0.85;
      const prev = smoothedPointRef.current || lastPointRef.current;
      const targetX = prev.x + (currentPt.x - prev.x) * factor;
      const targetY = prev.y + (currentPt.y - prev.y) * factor;
      smoothedPointRef.current = { x: targetX, y: targetY };

      configureContext(ctx, tool, color, thickness, currentPt.scale, opacity);
      drawStroke(ctx, lastPointRef.current.x, lastPointRef.current.y, targetX, targetY, currentPt.scale);
      lastPointRef.current = { x: targetX, y: targetY };
      strokePointsRef.current.push({ x: targetX, y: targetY });
    } else {
      configureContext(ctx, tool, color, thickness, currentPt.scale, opacity);
      drawStroke(ctx, lastPointRef.current.x, lastPointRef.current.y, currentPt.x, currentPt.y, currentPt.scale);
      lastPointRef.current = { x: currentPt.x, y: currentPt.y };
      strokePointsRef.current.push({ x: currentPt.x, y: currentPt.y });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (tool === 'bucket') return;
    const canvas = canvasRef.current;

    // 1. Finish Freehand Lasso Loop
    if (tool === 'lasso') {
      if (isLassoDrawingRef.current) {
        isLassoDrawingRef.current = false;
        const pts = [...lassoPointsRef.current];
        setActiveLassoPoints(null);
        lassoPointsRef.current = [];
        if (pts.length >= 5) {
          executeLassoCut(pts);
        }
      }
      if (canvas && canvas.hasPointerCapture(e.pointerId)) {
        canvas.releasePointerCapture(e.pointerId);
      }
      return;
    }

    // 2. Finish Geometric Shape
    if (tool === 'shape') {
      if (isDrawingRef.current && shapeStartRef.current) {
        const currentPt = getCanvasPoint(e.clientX, e.clientY);
        const overlay = overlayCanvasRef.current;
        if (overlay) {
          const overlayCtx = overlay.getContext('2d');
          overlayCtx?.clearRect(0, 0, overlay.width, overlay.height);
        }
        const ctx = canvas?.getContext('2d');
        if (ctx) {
          drawShape(
            ctx,
            shapeType,
            shapeStartRef.current.x,
            shapeStartRef.current.y,
            currentPt.x,
            currentPt.y,
            color,
            thickness,
            currentPt.scale,
            isShapeFilled,
            isDashed
          );
        }
        isDrawingRef.current = false;
        shapeStartRef.current = null;
        pushUndoState();
      }
      if (canvas && canvas.hasPointerCapture(e.pointerId)) {
        canvas.releasePointerCapture(e.pointerId);
      }
      return;
    }

    // 3. Finish Freehand Stroke
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    isHeldStraightRef.current = false;
    lastPointRef.current = null;
    smoothedPointRef.current = null;
    strokePointsRef.current = [];

    if (canvas && canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
    pushUndoState();
  };

  // Context Configuration for Pen Textures & Localized Pixel Eraser at High-DPI
  const configureContext = (
    ctx: CanvasRenderingContext2D,
    currentTool: ToolType,
    currentColor: string,
    currentThickness: number,
    scale: number,
    currentOpacity?: number
  ) => {
    const op = (currentOpacity ?? 100) / 100;
    if (currentTool === 'eraser') {
      // CRITICAL REQUIREMENT: "Include eraser that only erases where it hits (not all lines/connected lines)"
      // destination-out removes only the touched pixels with 600+ DPI subpixel precision
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.lineWidth = currentThickness * 2.5 * scale;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = 1.0;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.fillStyle = currentColor;

      if (currentTool === 'pen') {
        // Solid crisp ballpoint / gel pen
        ctx.lineWidth = currentThickness * scale;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = op;
      } else if (currentTool === 'pencil') {
        // Graphite pencil with textured grain and light pressure feel
        ctx.lineWidth = Math.max(1.5 * scale, currentThickness * 0.9 * scale);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.7 * op;
      } else if (currentTool === 'calligraphy') {
        // Chisel nib / fountain pen
        ctx.lineWidth = currentThickness * 1.4 * scale;
        ctx.lineCap = 'square';
        ctx.lineJoin = 'miter';
        ctx.globalAlpha = 0.9 * op;
      } else if (currentTool === 'highlighter') {
        // Translucent marker with butt caps for clean overlapping
        ctx.lineWidth = currentThickness * 3.5 * scale;
        ctx.lineCap = 'butt';
        ctx.lineJoin = 'bevel';
        ctx.globalAlpha = Math.min(0.55, 0.35 * op);
      }
    }
  };

  const drawStroke = (
    ctx: CanvasRenderingContext2D,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    scale: number
  ) => {
    if (tool === 'pencil') {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * 1.6 * scale;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * 1.6 * scale;
      ctx.quadraticCurveTo(midX, midY, x2, y2);
      ctx.stroke();
    } else if (tool === 'calligraphy') {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const angle = Math.atan2(dy, dx);
      const widthFactor = Math.abs(Math.sin(angle - Math.PI / 4)) * 1.5 + 0.5;
      ctx.lineWidth = thickness * scale * widthFactor;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  };

  // ----------------------------------------------------
  // Dragging & Resizing Handlers (When Floating)
  // ----------------------------------------------------
  const handleHeaderMouseDown = (e: React.MouseEvent) => {
    if (isDocked || isFullscreen) return;
    // Don't drag if clicking buttons
    if ((e.target as HTMLElement).closest('button')) return;

    isDraggingRef.current = true;
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = moveEvent.clientX - dragStartRef.current.mouseX;
      const dy = moveEvent.clientY - dragStartRef.current.mouseY;
      const newX = Math.min(Math.max(10, dragStartRef.current.initialX + dx), window.innerWidth - 120);
      const newY = Math.min(Math.max(40, dragStartRef.current.initialY + dy), window.innerHeight - 100);
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    if (isDocked || isFullscreen) return;
    e.stopPropagation();
    e.preventDefault();

    isResizingRef.current = true;
    resizeStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      initialW: size.width,
      initialH: size.height,
    };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isResizingRef.current) return;
      const dw = moveEvent.clientX - resizeStartRef.current.mouseX;
      const dh = moveEvent.clientY - resizeStartRef.current.mouseY;
      const newW = Math.min(Math.max(400, resizeStartRef.current.initialW + dw), window.innerWidth - 30);
      const newH = Math.min(Math.max(260, resizeStartRef.current.initialH + dh), window.innerHeight - 60);
      setSize({ width: newW, height: newH });
    };

    const handleMouseUp = () => {
      isResizingRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // ----------------------------------------------------
  // Simple Engineering Mini-Calculator Logic
  // ----------------------------------------------------
  const handleCalcButton = (val: string) => {
    if (val === 'C') {
      setCalcInput('');
      setCalcResult('');
    } else if (val === 'DEL') {
      setCalcInput((prev) => prev.slice(0, -1));
    } else if (val === '=') {
      try {
        // Sanitize mathematical expression safely
        const sanitized = calcInput
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/π/g, 'Math.PI')
          .replace(/sin\(/g, 'Math.sin((Math.PI/180)*')
          .replace(/cos\(/g, 'Math.cos((Math.PI/180)*')
          .replace(/tan\(/g, 'Math.tan((Math.PI/180)*')
          .replace(/sqrt\(/g, 'Math.sqrt(')
          .replace(/\^/g, '**');

        // Evaluate using safe Function constructor
        // eslint-disable-next-line no-new-func
        const evaluated = Function(`"use strict"; return (${sanitized});`)();
        const formatted = typeof evaluated === 'number' && !isNaN(evaluated)
          ? Number(evaluated.toFixed(6)).toString()
          : 'Error';
        setCalcResult(formatted);
      } catch {
        setCalcResult('Error');
      }
    } else {
      setCalcInput((prev) => prev + val);
    }
  };

  if (!isOpen) return null;

  // Background styling classes based on selected texture and custom paperBgColor
  const getTextureStyle = () => {
    const light = isLightColor(paperBgColor);
    const blueLine = light ? 'rgba(2, 132, 199, 0.22)' : 'rgba(56, 189, 248, 0.12)';
    const slateLine = light ? 'rgba(15, 23, 42, 0.12)' : 'rgba(148, 163, 184, 0.1)';
    const accentLine = light ? 'rgba(2, 132, 199, 0.3)' : 'rgba(56, 189, 248, 0.2)';
    const ruledLine = light ? 'rgba(15, 23, 42, 0.16)' : 'rgba(148, 163, 184, 0.14)';

    if (paperTexture === 'blueprint') {
      return {
        backgroundColor: paperBgColor,
        backgroundImage: `
          linear-gradient(${blueLine} 1px, transparent 1px),
          linear-gradient(90deg, ${blueLine} 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      };
    } else if (paperTexture === 'graph') {
      return {
        backgroundColor: paperBgColor,
        backgroundImage: `
          linear-gradient(${slateLine} 1px, transparent 1px),
          linear-gradient(90deg, ${slateLine} 1px, transparent 1px),
          linear-gradient(${accentLine} 1px, transparent 1px),
          linear-gradient(90deg, ${accentLine} 1px, transparent 1px)
        `,
        backgroundSize: '10px 10px, 10px 10px, 50px 50px, 50px 50px',
      };
    } else if (paperTexture === 'lined') {
      return {
        backgroundColor: paperBgColor,
        backgroundImage: `linear-gradient(${ruledLine} 1px, transparent 1px)`,
        backgroundSize: '100% 26px',
      };
    } else if (paperTexture === 'dot') {
      return {
        backgroundColor: paperBgColor,
        backgroundImage: `radial-gradient(circle, ${slateLine} 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      };
    } else if (paperTexture === 'cornell') {
      return {
        backgroundColor: paperBgColor,
        backgroundImage: `
          linear-gradient(${ruledLine} 1px, transparent 1px),
          linear-gradient(90deg, ${accentLine} 1px, transparent 1px)
        `,
        backgroundSize: '100% 26px, 180px 100%',
        backgroundPosition: '0 0, 0 0',
      };
    }
    // Blank
    return {
      backgroundColor: paperBgColor,
    };
  };

  const anyMenuOpen =
    showShapeMenu || showSmootherMenu || showSizeMenu || showPaperMenu || showExportMenu || showTextInput;

  return (
    <div
      ref={containerRef}
      className={`scratchpad-root sp-shell flex flex-col select-none z-50 overflow-hidden ${
        isDocked
          ? 'w-full h-full relative'
          : isFullscreen
          ? 'fixed inset-3 z-50 rounded-2xl'
          : 'fixed rounded-2xl'
      } ${className}`}
      style={
        isDocked
          ? { minHeight: '440px' }
          : isFullscreen
          ? {}
          : {
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: `${size.width}px`,
              height: `${size.height}px`,
              boxShadow:
                '0 30px 70px -20px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(148, 163, 184, 0.14)',
            }
      }
    >
      {/* ====================================================
          1. HEADER — window chrome, mode switch, page indicator
          ==================================================== */}
      <div
        onMouseDown={handleHeaderMouseDown}
        className="sp-header shrink-0 h-9 px-2 flex items-center justify-between gap-2 border-b cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-center gap-1.5 min-w-0">
          {!isDocked && !isFullscreen && <Move className="w-3.5 h-3.5 text-slate-500 shrink-0" />}

          <h3
            className="font-arnie text-[11px] font-bold text-slate-100 tracking-wide truncate max-w-[130px] sm:max-w-[190px]"
            title={title || 'Scratchpad'}
          >
            {title || 'Scratchpad'}
          </h3>

          {/* Mode switcher: Canvas | Notes | Calc */}
          <div className="sp-seg ml-0.5 shrink-0">
            {[
              { id: 'draw' as const, label: 'Canvas', icon: <PenTool className="w-2.5 h-2.5" /> },
              { id: 'notes' as const, label: 'Notes', icon: <FileText className="w-2.5 h-2.5" /> },
              { id: 'calc' as const, label: 'Calc', icon: <Calculator className="w-2.5 h-2.5" /> },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => switchTab(t.id)}
                title={`${t.label} mode`}
                className={`flex items-center gap-1 px-1.5 h-5 rounded-[7px] text-[10px] font-semibold transition-all cursor-pointer ${
                  activeTab === t.id
                    ? 'bg-slate-100 text-slate-900 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.icon}
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {/* Page indicator — GoodNotes style */}
          {activeTab === 'draw' && (
            <div className="sp-seg">
              <button
                type="button"
                onClick={() => switchPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="sp-chip w-5 h-5 text-slate-300 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
                title="Previous sheet"
              >
                <ChevronLeft className="w-3 h-3" />
              </button>
              <span className="font-mono text-[10px] text-slate-300 tabular-nums px-0.5 select-none">
                {currentPage}
                <span className="text-slate-600">/</span>
                {totalPages}
              </span>
              <button
                type="button"
                onClick={() => switchPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="sp-chip w-5 h-5 text-slate-300 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
                title="Next sheet"
              >
                <ChevronRight className="w-3 h-3" />
              </button>
              <button
                type="button"
                onClick={addPage}
                disabled={totalPages >= MAX_PAGES}
                className="sp-chip w-5 h-5 text-slate-300 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
                title="Add a blank sheet"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}

          <span className="hidden md:flex items-center gap-1 pl-0.5 text-[9px] font-mono text-emerald-400/80">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            saved
          </span>

          {onToggleDock && (
            <button
              type="button"
              onClick={onToggleDock}
              className={`sp-chip w-6 h-6 cursor-pointer ${
                isDocked
                  ? 'bg-cyan-400/20 text-cyan-300'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
              title={isDocked ? 'Undock to floating window' : 'Dock alongside the questions'}
            >
              <Columns className="w-3.5 h-3.5" />
            </button>
          )}

          {!isDocked && (
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="sp-chip w-6 h-6 text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
              title={isFullscreen ? 'Restore window size' : 'Maximize scratchpad'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          )}

          <button
            type="button"
            onClick={handleClose}
            className="sp-chip w-6 h-6 text-slate-400 hover:text-rose-300 hover:bg-rose-500/15 cursor-pointer"
            title="Minimize scratchpad"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ====================================================
          2. WORKSPACE
          ==================================================== */}
      <div className="relative flex-1 min-h-0 w-full overflow-hidden">
        {/* ---------- TAB 1: CANVAS ---------- */}
        {activeTab === 'draw' && (
          <div className="sp-desk absolute inset-0">
            <div ref={deskRef} className="absolute inset-0 flex flex-col items-center px-2 pt-2">
              {/* ---------- THE PAGE (fixed document, letterboxed) ---------- */}
              <div
                className="sp-page shrink-0"
                style={{
                  width: viewSize.w,
                  height: viewSize.h,
                  ...getTextureStyle(),
                }}
              >
                <canvas
                  ref={canvasRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  className={`w-full h-full block rounded-[10px] ${
                    tool === 'text'
                      ? 'cursor-text'
                      : tool === 'bucket'
                      ? 'cursor-pointer'
                      : tool === 'lasso' && lassoSelection
                      ? 'cursor-default'
                      : 'cursor-crosshair'
                  }`}
                  style={{ touchAction: 'none' }}
                />

                {/* Live shape / straighten preview layer */}
                <canvas
                  ref={overlayCanvasRef}
                  className="absolute inset-0 pointer-events-none w-full h-full block rounded-[10px]"
                  style={{ touchAction: 'none' }}
                />

                {/* Click-away scrim so any open popover dismisses on tap */}
                {anyMenuOpen && (
                  <div
                    className="absolute inset-0 z-30 cursor-default"
                    onMouseDown={closeAllMenus}
                    onPointerDown={closeAllMenus}
                  />
                )}

                {/* Text input overlay */}
                {showTextInput && textPos && canvasRef.current && (
                  (() => {
                    const canvas = canvasRef.current;
                    const rect = canvas.getBoundingClientRect();
                    const scaleX = rect.width > 0 ? canvas.width / rect.width : 1;
                    const scaleY = rect.height > 0 ? canvas.height / rect.height : 1;
                    const cssLeft = textPos.x / scaleX;
                    const cssTop = textPos.y / scaleY;
                    return (
                      <div
                        className="absolute z-50 flex flex-col gap-1"
                        style={{ left: cssLeft, top: cssTop }}
                      >
                        <input
                          autoFocus
                          type="text"
                          value={textInput}
                          onChange={(e) => setTextInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') commitTextToCanvas();
                            if (e.key === 'Escape') {
                              setShowTextInput(false);
                              setTextInput('');
                            }
                          }}
                          placeholder="Type text..."
                          className="bg-slate-900/90 border border-cyan-400/50 rounded-lg px-2 py-1 text-xs text-white outline-none min-w-[120px]"
                          style={{
                            color,
                            fontSize: `${Math.max(10, thickness * 1.5)}px`,
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          }}
                        />
                        <div className="flex gap-1">
                          <button
                            type="button"
                            onClick={commitTextToCanvas}
                            className="px-2 py-0.5 rounded bg-cyan-500 text-white text-[10px] font-bold cursor-pointer"
                          >
                            OK
                          </button>
                          <button
                            type="button"
                            onClick={() => { setShowTextInput(false); setTextInput(''); }}
                            className="px-2 py-0.5 rounded bg-slate-700 text-slate-300 text-[10px] cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    );
                  })()
                )}

                {/* Bucket-fill ripple */}
                {fillRipple && (
                  <div
                    className="pointer-events-none absolute rounded-full border-2 animate-ping z-30"
                    style={{
                      left: `${fillRipple.x - 20}px`,
                      top: `${fillRipple.y - 20}px`,
                      width: '40px',
                      height: '40px',
                      borderColor: fillRipple.color,
                      boxShadow: `0 0 16px ${fillRipple.color}`,
                    }}
                  />
                )}

                {/* Live lasso loop */}
                {activeLassoPoints && activeLassoPoints.length > 1 && canvasRef.current && (
                  (() => {
                    const canvas = canvasRef.current;
                    const rect = canvas.getBoundingClientRect();
                    const scaleX = rect.width > 0 ? canvas.width / rect.width : 1;
                    const scaleY = rect.height > 0 ? canvas.height / rect.height : 1;

                    const pathData = activeLassoPoints
                      .map((p, idx) => {
                        const cx = p.x / scaleX;
                        const cy = p.y / scaleY;
                        return `${idx === 0 ? 'M' : 'L'} ${cx.toFixed(1)} ${cy.toFixed(1)}`;
                      })
                      .join(' ');

                    return (
                      <svg className="absolute inset-0 pointer-events-none w-full h-full z-40">
                        <path
                          d={pathData}
                          fill="rgba(56, 189, 248, 0.16)"
                          stroke="#38bdf8"
                          strokeWidth="1.5"
                          strokeDasharray="5 4"
                          className="filter drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]"
                        />
                      </svg>
                    );
                  })()
                )}

                {/* Lasso selection transform box */}
                {lassoSelection && canvasRef.current && (
                  (() => {
                    const canvas = canvasRef.current;
                    const rect = canvas.getBoundingClientRect();
                    const scaleX = rect.width > 0 ? canvas.width / rect.width : 1;
                    const scaleY = rect.height > 0 ? canvas.height / rect.height : 1;

                    const cssLeft = lassoSelection.x / scaleX;
                    const cssTop = lassoSelection.y / scaleY;
                    const cssWidth = lassoSelection.width / scaleX;
                    const cssHeight = lassoSelection.height / scaleY;

                    return (
                      <div
                        className="absolute z-40 select-none"
                        style={{
                          left: `${cssLeft}px`,
                          top: `${cssTop}px`,
                          width: `${cssWidth}px`,
                          height: `${cssHeight}px`,
                        }}
                      >
                        <div
                          onPointerDown={(e) => handleLassoHandleDown('move', e)}
                          className="w-full h-full relative border border-dashed border-cyan-300/90 bg-cyan-400/5 cursor-move rounded-[3px]"
                        >
                          <canvas
                            ref={(node) => {
                              if (node && lassoSelection) {
                                node.width = lassoSelection.canvas.width;
                                node.height = lassoSelection.canvas.height;
                                const c = node.getContext('2d');
                                if (c) {
                                  c.clearRect(0, 0, node.width, node.height);
                                  c.drawImage(lassoSelection.canvas, 0, 0);
                                }
                              }
                            }}
                            className="w-full h-full object-contain pointer-events-none"
                          />

                          {/* Floating action bar */}
                          <div
                            onPointerDown={(e) => e.stopPropagation()}
                            className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 rounded-xl bg-slate-950/95 border border-white/15 shadow-2xl z-50 backdrop-blur-xl"
                          >
                            <button
                              type="button"
                              onClick={commitLassoSelection}
                              className="h-6 px-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-[10px] flex items-center gap-1 cursor-pointer transition-colors"
                              title="Apply & commit"
                            >
                              <Check className="w-3 h-3" />
                              Apply
                            </button>
                            <button
                              type="button"
                              onClick={duplicateLassoSelection}
                              className="h-6 w-6 rounded-lg bg-white/10 hover:bg-white/20 text-cyan-200 flex items-center justify-center cursor-pointer transition-colors"
                              title="Duplicate selection"
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                            <button
                              type="button"
                              onClick={deleteLassoSelection}
                              className="h-6 w-6 rounded-lg bg-white/10 hover:bg-rose-500/40 text-rose-200 flex items-center justify-center cursor-pointer transition-colors"
                              title="Delete selection"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                            <button
                              type="button"
                              onClick={cancelLassoSelection}
                              className="h-6 w-6 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center cursor-pointer transition-colors"
                              title="Cancel"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Resize handles */}
                          <div onPointerDown={(e) => handleLassoHandleDown('nw', e)} className="sp-handle -top-1 -left-1 cursor-nwse-resize" />
                          <div onPointerDown={(e) => handleLassoHandleDown('ne', e)} className="sp-handle -top-1 -right-1 cursor-nesw-resize" />
                          <div onPointerDown={(e) => handleLassoHandleDown('sw', e)} className="sp-handle -bottom-1 -left-1 cursor-nesw-resize" />
                          <div onPointerDown={(e) => handleLassoHandleDown('se', e)} className="sp-handle -bottom-1 -right-1 cursor-nwse-resize" />
                          <div onPointerDown={(e) => handleLassoHandleDown('n', e)} className="sp-handle -top-1 left-1/2 -translate-x-1/2 cursor-ns-resize" />
                          <div onPointerDown={(e) => handleLassoHandleDown('s', e)} className="sp-handle -bottom-1 left-1/2 -translate-x-1/2 cursor-ns-resize" />
                          <div onPointerDown={(e) => handleLassoHandleDown('w', e)} className="sp-handle top-1/2 -left-1 -translate-y-1/2 cursor-ew-resize" />
                          <div onPointerDown={(e) => handleLassoHandleDown('e', e)} className="sp-handle top-1/2 -right-1 -translate-y-1/2 cursor-ew-resize" />
                        </div>
                      </div>
                    );
                  })()
                )}

                {/* Snap feedback */}
                {snapFeedback && canvasRef.current && (
                  (() => {
                    const canvas = canvasRef.current;
                    const rect = canvas.getBoundingClientRect();
                    const scaleX = rect.width > 0 ? canvas.width / rect.width : 1;
                    const scaleY = rect.height > 0 ? canvas.height / rect.height : 1;
                    const cssX = snapFeedback.x / scaleX;
                    const cssY = snapFeedback.y / scaleY;

                    return (
                      <div
                        className="pointer-events-none absolute z-50 px-2 py-0.5 rounded-full bg-cyan-300 text-slate-950 font-bold font-mono text-[9px] shadow-xl -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${cssX}px`, top: `${cssY}px` }}
                      >
                        {snapFeedback.text}
                      </div>
                    );
                  })()
                )}

                {/* Contextual hint */}
                {tool === 'eraser' && (
                  <div className="sp-hint">
                    <Eraser className="w-2.5 h-2.5" />
                    Eraser · {Math.round(thickness * 2.5)}px tip · only erases what it touches
                  </div>
                )}
                {tool === 'bucket' && (
                  <div className="sp-hint">
                    <PaintBucket className="w-2.5 h-2.5" />
                    {isFilling ? 'Filling…' : 'Tap inside a closed shape to fill it'}
                    <span
                      className="w-2 h-2 rounded-full border border-white/50"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                )}
                {tool === 'lasso' && (
                  <div className="sp-hint">
                    <LassoSelect className="w-2.5 h-2.5" />
                    {lassoSelection ? 'Drag to move · pull handles to resize' : 'Loop around ink to select it'}
                  </div>
                )}
                {tool === 'shape' && (
                  <div className="sp-hint">
                    <Square className="w-2.5 h-2.5" />
                    Drag to draw {shapeType} · {isDashed ? 'dashed' : 'solid'} ·{' '}
                    {isShapeFilled ? 'filled' : 'outline'}
                  </div>
                )}

                {/* Import toast */}
                {importNotification && (
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 px-2.5 py-1 rounded-full bg-slate-950/95 border border-cyan-400/60 text-[10px] font-mono text-cyan-200 shadow-2xl backdrop-blur-md flex items-center gap-1">
                    <Check className="w-3 h-3 text-cyan-300" />
                    <span className="truncate max-w-[220px]">{importNotification}</span>
                  </div>
                )}
              </div>

              {/* ---------- FLOATING PALETTE ---------- */}
              <div className="flex-1 min-h-0" />
              <div className="relative z-40 w-full flex flex-col items-center gap-1.5 pb-0.5">
                {/* ROW A — tools & history */}
                <div className="sp-pill">
                  <PaletteBtn
                    title="Pen — crisp, smooth ballpoint"
                    active={tool === 'pen'}
                    onClick={() => setTool('pen')}
                  >
                    <PenTool className="w-3.5 h-3.5" />
                  </PaletteBtn>

                  <PaletteBtn
                    title="Pencil — graphite grain & shading"
                    active={tool === 'pencil'}
                    tone="amber"
                    onClick={() => setTool('pencil')}
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </PaletteBtn>

                  <PaletteBtn
                    title="Chisel — angle-sensitive engineering stroke"
                    active={tool === 'calligraphy'}
                    tone="violet"
                    onClick={() => setTool('calligraphy')}
                  >
                    <Brush className="w-3.5 h-3.5" />
                  </PaletteBtn>

                  <PaletteBtn
                    title="Marker — translucent highlighter"
                    active={tool === 'highlighter'}
                    tone="amber"
                    onClick={() => setTool('highlighter')}
                  >
                    <Highlighter className="w-3.5 h-3.5" />
                  </PaletteBtn>

                  <PaletteBtn
                    title="Fill — flood-fill a closed area"
                    active={tool === 'bucket'}
                    onClick={() => setTool('bucket')}
                  >
                    <PaintBucket className="w-3.5 h-3.5" />
                  </PaletteBtn>

                  <PaletteBtn
                    title="Eraser — precision pixel eraser"
                    active={tool === 'eraser'}
                    tone="rose"
                    onClick={() => {
                      setTool('eraser');
                      closeAllMenus();
                    }}
                  >
                    <Eraser className="w-3.5 h-3.5" />
                  </PaletteBtn>

                  <PaletteBtn
                    title="Text — type on the canvas"
                    active={tool === 'text'}
                    tone="cyan"
                    onClick={() => {
                      setTool('text');
                      closeAllMenus();
                    }}
                  >
                    <Type className="w-3.5 h-3.5" />
                  </PaletteBtn>

                  <div className="sp-div" />

                  {/* Shapes */}
                  <div className="relative">
                    <PaletteBtn
                      title="Shapes & lines — straight line, force vector, dimension, box, circle, truss, axes"
                      active={tool === 'shape'}
                      tone="emerald"
                      onClick={() => {
                        const next = !showShapeMenu;
                        closeAllMenus();
                        setShowShapeMenu(next);
                        setTool('shape');
                      }}
                    >
                      {shapeType === 'line' && <Minus className="w-3.5 h-3.5" />}
                      {shapeType === 'arrow' && <ArrowRight className="w-3.5 h-3.5" />}
                      {shapeType === 'dimension' && <Minus className="w-3.5 h-3.5" />}
                      {shapeType === 'rect' && <Square className="w-3.5 h-3.5" />}
                      {shapeType === 'circle' && <Circle className="w-3.5 h-3.5" />}
                      {shapeType === 'triangle' && <Triangle className="w-3.5 h-3.5" />}
                      {shapeType === 'coord' && (
                        <span className="text-[9px] font-mono font-bold leading-none">XY</span>
                      )}
                    </PaletteBtn>

                    {showShapeMenu && (
                      <div className="sp-pop bottom-full left-1/2 -translate-x-1/2 mb-2 w-[248px]">
                        <div className="sp-pop-head">
                          <span>Shapes & Lines</span>
                          <span className="text-emerald-300/80">2D drafting</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {[
                            { id: 'line' as const, label: 'Straight', icon: <Minus className="w-3.5 h-3.5" /> },
                            { id: 'arrow' as const, label: 'Force Vector', icon: <ArrowRight className="w-3.5 h-3.5" /> },
                            { id: 'dimension' as const, label: 'Dimension', icon: <Minus className="w-3.5 h-3.5" /> },
                            { id: 'rect' as const, label: 'Box', icon: <Square className="w-3.5 h-3.5" /> },
                            { id: 'circle' as const, label: 'Circle', icon: <Circle className="w-3.5 h-3.5" /> },
                            { id: 'triangle' as const, label: 'Truss', icon: <Triangle className="w-3.5 h-3.5" /> },
                            { id: 'coord' as const, label: 'X-Y Axes', icon: <span className="font-mono font-bold text-[11px] leading-none">XY</span> },
                          ].map((s) => (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => {
                                setShapeType(s.id);
                                setTool('shape');
                                setShowShapeMenu(false);
                              }}
                              className={`flex items-center gap-1.5 px-2 h-7 rounded-lg text-[10px] text-left transition-colors cursor-pointer ${
                                shapeType === s.id && tool === 'shape'
                                  ? 'bg-emerald-400/20 text-emerald-200 font-bold'
                                  : 'text-slate-300 hover:bg-white/10'
                              }`}
                            >
                              {s.icon}
                              <span className="truncate">{s.label}</span>
                            </button>
                          ))}
                        </div>

                        <div className="flex items-center justify-between gap-2 pt-2 mt-2 border-t border-white/10">
                          <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-slate-300 hover:text-white">
                            <input
                              type="checkbox"
                              checked={isShapeFilled}
                              onChange={(e) => setIsShapeFilled(e.target.checked)}
                              className="sp-check"
                            />
                            Fill
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-slate-300 hover:text-white">
                            <input
                              type="checkbox"
                              checked={isDashed}
                              onChange={(e) => setIsDashed(e.target.checked)}
                              className="sp-check"
                            />
                            Dashed
                          </label>
                        </div>
                        {isDashed && (
                          <div className="pt-2">
                            <div className="sp-pop-sub">Dash gap</div>
                            <input
                              type="range"
                              min="3"
                              max="24"
                              step="1"
                              value={dashGap}
                              onChange={(e) => setDashGap(parseInt(e.target.value, 10))}
                              className="sp-range w-full"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <PaletteBtn
                      title={`Lasso — ${lassoMode === 'cut' ? 'cut & move' : 'area select (85%+)'} mode`}
                      active={tool === 'lasso'}
                      onClick={() => {
                        setTool('lasso');
                        closeAllMenus();
                      }}
                    >
                      <LassoSelect className="w-3.5 h-3.5" />
                    </PaletteBtn>
                    {tool === 'lasso' && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-slate-900 text-[8px] text-slate-300 whitespace-nowrap border border-white/10">
                        {lassoMode === 'cut' ? 'Cut' : 'Select'}
                      </div>
                    )}
                  </div>

                  <PaletteBtn
                    title={`Toggle lasso mode — currently ${lassoMode}`}
                    subtle
                    tone="cyan"
                    onClick={() => setLassoMode(lassoMode === 'cut' ? 'select' : 'cut')}
                  >
                    <span className="text-[8px] font-mono font-bold uppercase">{lassoMode}</span>
                  </PaletteBtn>

                  {/* Smoother */}
                  <div className="relative">
                    <PaletteBtn
                      title="Line smoother — correction intensity"
                      active={smootherIntensity > 0}
                      subtle
                      tone="amber"
                      onClick={() => {
                        const next = !showSmootherMenu;
                        closeAllMenus();
                        setShowSmootherMenu(next);
                      }}
                    >
                      <Spline className="w-3.5 h-3.5" />
                    </PaletteBtn>

                    {showSmootherMenu && (
                      <div className="sp-pop bottom-full left-1/2 -translate-x-1/2 mb-2 w-[224px]">
                        <div className="sp-pop-head">
                          <span>Smoothing</span>
                          <span className="text-amber-300/90 font-mono">
                            {smootherIntensity > 0 ? `${smootherIntensity}%` : 'Off'}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="95"
                          step="5"
                          value={smootherIntensity}
                          onChange={(e) => setSmootherIntensity(parseInt(e.target.value, 10))}
                          className="sp-range w-full"
                        />
                        <div className="grid grid-cols-3 gap-1 pt-1.5">
                          {[
                            { val: 0, label: 'Off' },
                            { val: 25, label: '25%' },
                            { val: 50, label: '50%' },
                            { val: 75, label: '75%' },
                            { val: 95, label: 'Max' },
                          ].map((preset) => (
                            <button
                              key={preset.val}
                              type="button"
                              onClick={() => setSmootherIntensity(preset.val)}
                              className={`h-6 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                                smootherIntensity === preset.val
                                  ? 'bg-amber-400 text-slate-950'
                                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
                              }`}
                            >
                              {preset.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Opacity */}
                  <div className="relative">
                    <PaletteBtn
                      title={`Opacity — ${opacity}%`}
                      active={opacity < 100}
                      subtle
                      tone="violet"
                      onClick={() => {
                        const next = !showOpacityMenu;
                        closeAllMenus();
                        setShowOpacityMenu(next);
                      }}
                    >
                      <span className="text-[9px] font-mono font-bold">{opacity}%</span>
                    </PaletteBtn>
                    {showOpacityMenu && (
                      <div className="sp-pop bottom-full left-1/2 -translate-x-1/2 mb-2 w-[206px]">
                        <div className="sp-pop-head">
                          <span>Opacity</span>
                          <span className="text-violet-300/90 font-mono">{opacity}%</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          step="5"
                          value={opacity}
                          onChange={(e) => setOpacity(parseInt(e.target.value, 10))}
                          className="sp-range w-full"
                        />
                        <div className="grid grid-cols-4 gap-1 pt-1.5">
                          {[
                            { val: 20, label: '20%' },
                            { val: 40, label: '40%' },
                            { val: 60, label: '60%' },
                            { val: 80, label: '80%' },
                          ].map((preset) => (
                            <button
                              key={preset.val}
                              type="button"
                              onClick={() => setOpacity(preset.val)}
                              className={`h-6 rounded-lg text-[9px] font-mono font-semibold transition-colors cursor-pointer ${
                                opacity === preset.val
                                  ? 'bg-violet-400 text-slate-950'
                                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
                              }`}
                            >
                              {preset.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="sp-div" />

                  <PaletteBtn
                    title="Undo (Ctrl+Z)"
                    disabled={!canUndo}
                    onClick={handleUndo}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </PaletteBtn>
                  <PaletteBtn
                    title="Redo (Ctrl+Shift+Z)"
                    disabled={!canRedo}
                    onClick={handleRedo}
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                  </PaletteBtn>
                </div>

                {/* ROW B — ink, paper, files */}
                <div className="sp-pill">
                  {COLOR_PRESETS.map((c) => {
                    const selected = color.toLowerCase() === c.toLowerCase();
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setColor(c)}
                        title={c}
                        className={`sp-chip w-[18px] h-[18px] rounded-full transition-transform cursor-pointer ${
                          selected
                            ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-110'
                            : 'ring-1 ring-white/20 hover:scale-110'
                        }`}
                        style={{ backgroundColor: c }}
                      />
                    );
                  })}

                  <label
                    className="sp-chip w-[18px] h-[18px] rounded-full overflow-hidden ring-1 ring-white/25 cursor-pointer relative hover:scale-110 transition-transform"
                    title="Custom ink colour"
                  >
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="opacity-0 absolute inset-0 cursor-pointer"
                    />
                    <span
                      className="w-full h-full"
                      style={{ background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)' }}
                    />
                  </label>

                  <div className="sp-div" />

                  {/* Stroke size */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        const next = !showSizeMenu;
                        closeAllMenus();
                        setShowSizeMenu(next);
                      }}
                      title={`Stroke size — ${thickness}px`}
                      className={`sp-chip w-7 h-7 cursor-pointer ${
                        showSizeMenu ? 'bg-white/15' : 'hover:bg-white/10'
                      }`}
                    >
                      <span
                        className="rounded-full ring-1 ring-white/30"
                        style={{
                          width: Math.min(16, Math.max(5, thickness)),
                          height: Math.min(16, Math.max(5, thickness)),
                          backgroundColor: color,
                          boxShadow: `0 0 7px ${color}66`,
                        }}
                      />
                    </button>

                    {showSizeMenu && (
                      <div className="sp-pop bottom-full left-0 mb-2 w-[196px]">
                        <div className="sp-pop-head">
                          <span>Stroke</span>
                          <span className="font-mono text-cyan-300/90">{thickness}px</span>
                        </div>
                        <div className="grid grid-cols-5 gap-1">
                          {THICKNESS_PRESETS.map((p) => (
                            <button
                              key={p.value}
                              type="button"
                              onClick={() => setThickness(p.value)}
                              title={`${p.label} · ${p.value}px`}
                              className={`h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                                thickness === p.value
                                  ? 'bg-cyan-400/25 ring-1 ring-cyan-400/60'
                                  : 'hover:bg-white/10'
                              }`}
                            >
                              <span
                                className="rounded-full bg-slate-200"
                                style={{
                                  width: Math.min(12, Math.max(2, p.value)),
                                  height: Math.min(12, Math.max(2, p.value)),
                                }}
                              />
                            </button>
                          ))}
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="32"
                          value={thickness}
                          onChange={(e) => setThickness(parseInt(e.target.value, 10))}
                          className="sp-range w-full mt-2"
                        />
                      </div>
                    )}
                  </div>

                  {/* Paper & DPI */}
                  <div className="relative">
                    <PaletteBtn
                      title="Paper, sheet colour & export resolution"
                      active={showPaperMenu}
                      onClick={() => {
                        const next = !showPaperMenu;
                        closeAllMenus();
                        setShowPaperMenu(next);
                      }}
                    >
                      <Layers className="w-3.5 h-3.5" />
                    </PaletteBtn>

                    {showPaperMenu && (
                      <div className="sp-pop bottom-full right-0 mb-2 w-[248px]">
                        <div className="sp-pop-head">
                          <span>Paper</span>
                          <span className="font-mono text-slate-400">
                            {NB_BUF_W}×{NB_BUF_H}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {[
                            { id: 'blueprint' as const, label: 'Blueprint' },
                            { id: 'graph' as const, label: 'Graph' },
                            { id: 'lined' as const, label: 'Ruled' },
                            { id: 'dot' as const, label: 'Dotted' },
                            { id: 'cornell' as const, label: 'Cornell' },
                            { id: 'blank' as const, label: 'Blank' },
                          ].map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => setPaperTexture(t.id)}
                              className={`h-7 rounded-lg text-[10px] font-semibold transition-colors cursor-pointer ${
                                paperTexture === t.id
                                  ? 'bg-cyan-400 text-slate-950'
                                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
                              }`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>

                        <div className="sp-pop-sub">Sheet colour</div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {SHEET_BG_PRESETS.map((p) => (
                            <button
                              key={p.color}
                              type="button"
                              onClick={() => {
                                setPaperBgColor(p.color);
                                if (p.isLight && (color === '#ffffff' || color === '#facc15')) {
                                  setColor('#0f172a');
                                } else if (!p.isLight && color === '#0f172a') {
                                  setColor('#38bdf8');
                                }
                              }}
                              title={p.label}
                              className={`w-5 h-5 rounded-md transition-transform cursor-pointer ${
                                paperBgColor.toLowerCase() === p.color.toLowerCase()
                                  ? 'ring-2 ring-cyan-300 ring-offset-2 ring-offset-slate-950 scale-105'
                                  : 'ring-1 ring-white/20 hover:scale-110'
                              }`}
                              style={{ backgroundColor: p.color }}
                            />
                          ))}
                          <label
                            className="w-5 h-5 rounded-md overflow-hidden ring-1 ring-white/25 cursor-pointer relative hover:scale-110 transition-transform"
                            title="Custom sheet colour"
                          >
                            <input
                              type="color"
                              value={paperBgColor}
                              onChange={(e) => setPaperBgColor(e.target.value)}
                              className="opacity-0 absolute inset-0 cursor-pointer"
                            />
                            <span
                              className="w-full h-full block"
                              style={{
                                background:
                                  'conic-gradient(from 180deg, #38bdf8, #f59e0b, #10b981, #f43f5e, #38bdf8)',
                              }}
                            />
                          </label>
                        </div>

                        <div className="sp-pop-sub">Export resolution</div>
                        <div className="grid grid-cols-2 gap-1">
                          {[
                            { value: 300, label: '300 DPI' },
                            { value: 600, label: '600 DPI' },
                            { value: 720, label: '720 DPI' },
                            { value: 1200, label: '1200 DPI' },
                          ].map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => {
                                saveCanvasToStorage(currentPage);
                                setDpi(opt.value as DpiMode);
                              }}
                              className={`h-7 rounded-lg text-[10px] font-mono font-semibold transition-colors cursor-pointer ${
                                dpi === opt.value
                                  ? 'bg-cyan-400/25 text-cyan-200 ring-1 ring-cyan-400/50'
                                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="sp-div" />

                  {/* Import */}
                  <PaletteBtn
                    title="Import a .cescratch / .json sheet"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-3.5 h-3.5" />
                  </PaletteBtn>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImportFile}
                    accept=".cescratch,.json"
                    className="hidden"
                  />

                  {/* Export */}
                  <div className="relative">
                    <PaletteBtn
                      title="Download / export"
                      active={showExportMenu}
                      onClick={() => {
                        const next = !showExportMenu;
                        closeAllMenus();
                        setShowExportMenu(next);
                      }}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </PaletteBtn>

                    {showExportMenu && (
                      <div className="sp-pop bottom-full right-0 mb-2 w-[236px] space-y-0.5">
                        <div className="sp-pop-head">
                          <span>Export</span>
                          <span className="font-mono text-slate-400">sheet {currentPage}</span>
                        </div>

                        <button
                          type="button"
                          onClick={handleExportCescratch}
                          className="sp-pop-item"
                        >
                          <Tablet className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                          <div className="min-w-0">
                            <div className="font-semibold text-[10px] text-slate-100">
                              .cescratch — editable
                            </div>
                            <div className="text-[9px] text-slate-500">
                              All {totalPages} sheets + notes
                            </div>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={handleExportSvg}
                          className="sp-pop-item"
                        >
                          <FileCode className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                          <div className="min-w-0">
                            <div className="font-semibold text-[10px] text-slate-100">
                              .svg — vector
                            </div>
                            <div className="text-[9px] text-slate-500">
                              GoodNotes, Notability, Procreate
                            </div>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            handleDownload();
                            setShowExportMenu(false);
                          }}
                          className="sp-pop-item"
                        >
                          <Download className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                          <div className="min-w-0">
                            <div className="font-semibold text-[10px] text-slate-100">
                              .png — {dpi} DPI
                            </div>
                            <div className="text-[9px] text-slate-500">
                              Print-ready with pHYs metadata
                            </div>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Clear */}
                  <PaletteBtn title="Clear this sheet" tone="rose" onClick={handleClear}>
                    <Trash2 className="w-3.5 h-3.5" />
                  </PaletteBtn>

                  {/* Sheet size mode */}
                  <div className="relative">
                    <PaletteBtn
                      title={
                        pageMode === 'notebook'
                          ? 'Sheet size: Notebook (1200x800) — tap for Infinite canvas'
                          : 'Sheet size: Infinite canvas (6000x4000) — tap for Notebook'
                      }
                      active={pageMode === 'infinite'}
                      subtle
                      tone="emerald"
                      onClick={() => {
                        const next = pageMode === 'notebook' ? 'infinite' : 'notebook';
                        commitLassoSelection();
                        flushSaveCanvasToStorage(currentPage);
                        setPageMode(next);
                        isCanvasInitializedRef.current = false;
                        loadedPageRef.current = null;
                      }}
                    >
                      {pageMode === 'notebook' ? (
                        <Tablet className="w-3.5 h-3.5" />
                      ) : (
                        <Layers className="w-3.5 h-3.5" />
                      )}
                    </PaletteBtn>
                    <span
                      className="absolute -top-4 left-1/2 -translate-x-1/2 px-1 rounded bg-slate-900 text-[7px] font-mono text-slate-300 whitespace-nowrap border border-white/10 pointer-events-none"
                    >
                      {pageMode === 'notebook' ? 'A4' : 'INF'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------- TAB 2: NOTES ---------- */}
        {activeTab === 'notes' && (
          <div className="absolute inset-0 flex flex-col px-2 py-2">
            <div
              className="sp-page flex-1 min-h-0 flex flex-col overflow-hidden"
              style={getTextureStyle()}
            >
              <div
                className={`flex items-center gap-1 px-2 py-1.5 overflow-x-auto no-scrollbar shrink-0 border-b ${
                  isLightColor(paperBgColor) ? 'border-slate-900/10' : 'border-white/10'
                }`}
              >
                <span
                  className={`text-[9px] font-mono uppercase tracking-wider shrink-0 ${
                    isLightColor(paperBgColor) ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  Insert
                </span>
                {['π', 'θ', '√', '²', '³', '°', '±', 'Σ', 'Δ', 'λ', 'μ', '≤', '≥', '≈'].map((sym) => (
                  <button
                    key={sym}
                    type="button"
                    onClick={() => handleNotesChange(notesText + sym)}
                    className={`sp-chip w-6 h-6 rounded-lg font-mono text-[11px] cursor-pointer transition-colors ${
                      isLightColor(paperBgColor)
                        ? 'text-slate-700 hover:bg-slate-900/10'
                        : 'text-cyan-200 hover:bg-white/10'
                    }`}
                  >
                    {sym}
                  </button>
                ))}
              </div>

              <textarea
                value={notesText}
                onChange={(e) => handleNotesChange(e.target.value)}
                placeholder="Type scratch notes, derivations, given parameters and intermediate computations… (auto-saved)"
                className={`flex-1 w-full bg-transparent p-4 text-[13px] leading-7 resize-none outline-none ${
                  isLightColor(paperBgColor)
                    ? 'text-slate-900 placeholder-slate-400'
                    : 'text-slate-100 placeholder-slate-500'
                }`}
              />
            </div>
          </div>
        )}

        {/* ---------- TAB 3: CALCULATOR ---------- */}
        {activeTab === 'calc' && (
          <div className="sp-desk absolute inset-0 flex items-center justify-center p-3">
            <div className="w-full max-w-[320px] space-y-2">
              <div className="sp-page px-3 py-2.5">
                <div className="text-[11px] font-mono text-slate-400 overflow-x-auto whitespace-nowrap min-h-[15px]">
                  {calcInput || '0'}
                </div>
                <div className="text-[22px] font-bold font-mono text-emerald-300 min-h-[28px] text-right tabular-nums">
                  {calcResult || '= 0'}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                {[
                  'C', 'DEL', '(', ')',
                  'sin(', 'cos(', 'tan(', '÷',
                  '7', '8', '9', '×',
                  '4', '5', '6', '-',
                  '1', '2', '3', '+',
                  '0', '.', 'sqrt(', '=',
                ].map((btn) => {
                  const isOp = ['÷', '×', '-', '+', '='].includes(btn);
                  const isAction = ['C', 'DEL'].includes(btn);
                  const isSci = ['sin(', 'cos(', 'tan(', 'sqrt('].includes(btn);

                  let btnStyle = 'bg-white/[0.06] text-slate-100 hover:bg-white/[0.12]';
                  if (btn === '=') {
                    btnStyle = 'bg-emerald-400 text-slate-950 font-bold hover:bg-emerald-300';
                  } else if (isAction) {
                    btnStyle = 'bg-rose-500/20 text-rose-200 hover:bg-rose-500/30';
                  } else if (isOp) {
                    btnStyle = 'bg-amber-400/20 text-amber-200 hover:bg-amber-400/30 font-bold';
                  } else if (isSci) {
                    btnStyle = 'bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/25 text-[10px]';
                  }

                  return (
                    <button
                      key={btn}
                      type="button"
                      onClick={() => handleCalcButton(btn)}
                      className={`h-9 rounded-xl text-xs font-mono font-semibold transition-colors cursor-pointer flex items-center justify-center ${btnStyle}`}
                    >
                      {btn}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ====================================================
          3. RESIZE HANDLE
          ==================================================== */}
      {!isDocked && !isFullscreen && (
        <div
          onMouseDown={handleResizeMouseDown}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-center justify-center z-20 group"
          title="Drag to resize scratchpad"
        >
          <div className="w-2 h-2 border-r-2 border-b-2 border-slate-500 group-hover:border-cyan-400 transition-colors" />
        </div>
      )}
    </div>
  );
};
