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
  Palette,
  Grid,
  Calculator,
  FileText,
  Columns,
  Minus,
  Plus,
  Sparkles,
  PaintBucket,
  Upload,
  Tablet,
  FileCode,
  Save,
  Check,
} from 'lucide-react';
import {
  generateScratchpadSvg,
  downloadFile,
  saveScratchpadMeta,
  exportScratchpadBundle,
  getScratchpadById,
} from '../utils/scratchpadStorage';

export type ToolType = 'pen' | 'pencil' | 'calligraphy' | 'highlighter' | 'eraser' | 'bucket';
export type PaperTexture = 'blueprint' | 'graph' | 'lined' | 'blank';
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
const IDB_NAME = 'ce_scratchpad_db_v2';
const IDB_STORE = 'high_dpi_canvases';

const getIDB = (): Promise<IDBDatabase> => {
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

const idbSaveCanvas = async (key: string, dataUrl: string) => {
  try {
    const db = await getIDB();
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(dataUrl, key);
  } catch {
    try {
      localStorage.setItem(key, dataUrl);
    } catch {
      // Ignore quota
    }
  }
};

const idbLoadCanvas = async (key: string): Promise<string | null> => {
  try {
    const db = await getIDB();
    return new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(key);
      req.onsuccess = () => {
        if (req.result) {
          resolve(req.result);
        } else {
          resolve(localStorage.getItem(key));
        }
      };
      req.onerror = () => resolve(localStorage.getItem(key));
    });
  } catch {
    return localStorage.getItem(key);
  }
};

const STORAGE_KEY_STATE = 'ce_scratchpad_state_v2';
const STORAGE_KEY_CANVAS_PREFIX = 'ce_scratchpad_canvas_page_';
const STORAGE_KEY_NOTES = 'ce_scratchpad_notes_v2';

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
  const totalPages = 5;

  // Drawing Tools State
  const [tool, setTool] = useState<ToolType>('pen');
  const [color, setColor] = useState<string>('#38bdf8');
  const [thickness, setThickness] = useState<number>(3);
  const [paperTexture, setPaperTexture] = useState<PaperTexture>('blueprint');
  const [paperBgColor, setPaperBgColor] = useState<string>('#06131c');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isFilling, setIsFilling] = useState<boolean>(false);
  const [fillRipple, setFillRipple] = useState<{ x: number; y: number; color: string } | null>(null);
  const [dpi, setDpi] = useState<DpiMode>(600);
  const [showDpiMenu, setShowDpiMenu] = useState<boolean>(false);
  const [showExportMenu, setShowExportMenu] = useState<boolean>(false);
  const [importNotification, setImportNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dpiScale = dpi / 96; // 600 DPI = 6.25x scale factor, 720 DPI = 7.5x, 1200 DPI = 12.5x

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
        if (parsed.paperTexture) setPaperTexture(parsed.paperTexture);
        if (parsed.paperBgColor) setPaperBgColor(parsed.paperBgColor);
        if (parsed.dpi) setDpi(parsed.dpi);
        if (parsed.size) setSize(parsed.size);
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
        paperTexture,
        paperBgColor,
        dpi,
        size,
        position,
      };
      localStorage.setItem(`${storageKeyPrefix}${STORAGE_KEY_STATE}`, JSON.stringify(stateToSave));
    } catch {
      // Ignore quota errors
    }
  }, [tool, color, thickness, paperTexture, paperBgColor, dpi, size, position, storageKeyPrefix]);

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
  // Save & Load Canvas Drawings per Page
  // ----------------------------------------------------
  const saveCanvasToStorage = useCallback(
    (page: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      try {
        const dataUrl = canvas.toDataURL('image/png');
        const key = `${storageKeyPrefix}${STORAGE_KEY_CANVAS_PREFIX}${page}`;
        idbSaveCanvas(key, dataUrl);
      } catch {
        // Ignore quota error
      }
    },
    [storageKeyPrefix]
  );

  const loadCanvasFromStorage = useCallback(
    async (page: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      undoStackRef.current = [];
      redoStackRef.current = [];
      setCanUndo(false);
      setCanRedo(false);

      try {
        const key = `${storageKeyPrefix}${STORAGE_KEY_CANVAS_PREFIX}${page}`;
        const savedDataUrl = await idbLoadCanvas(key);
        if (savedDataUrl) {
          const img = new Image();
          img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            // Initial snapshot for undo
            const initialSnapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
            undoStackRef.current = [initialSnapshot];
            setCanUndo(false);
          };
          img.src = savedDataUrl;
        } else {
          const initialSnapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
          undoStackRef.current = [initialSnapshot];
          setCanUndo(false);
        }
      } catch {
        // Ignore
      }
    },
    [storageKeyPrefix]
  );

  // Switch Page: save current, load next
  const switchPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    saveCanvasToStorage(currentPage);
    setCurrentPage(newPage);
  };

  // ----------------------------------------------------
  // Canvas Resolution Setup & Resize (600+ DPI Engine)
  // ----------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const cssW = container.clientWidth;
    const cssH = container.clientHeight;

    if (cssW <= 0 || cssH <= 0) return;

    const targetW = Math.round(cssW * dpiScale);
    const targetH = Math.round(cssH * dpiScale);

    if (canvas.width === targetW && canvas.height === targetH) {
      return;
    }

    // Temporary copy existing drawing before resize if dimensions changed
    let tempImgData: string | null = null;
    if (canvas.width > 0 && canvas.height > 0) {
      tempImgData = canvas.toDataURL('image/png');
    }

    canvas.width = targetW;
    canvas.height = targetH;
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      if (tempImgData) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, targetW, targetH);
        };
        img.src = tempImgData;
      } else {
        loadCanvasFromStorage(currentPage);
      }
    }
  }, [size, isDocked, isFullscreen, currentPage, dpi, dpiScale, loadCanvasFromStorage]);

  // Push Canvas State to Undo Stack
  const pushUndoState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    undoStackRef.current.push(snapshot);
    if (undoStackRef.current.length > 25) {
      undoStackRef.current.shift();
    }
    redoStackRef.current = [];
    setCanUndo(undoStackRef.current.length > 1);
    setCanRedo(false);
    saveCanvasToStorage(currentPage);
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

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pushUndoState();
  };

  // Download / Export Drawing as PNG
  // Download / Export Drawing as PNG with Genuine 600+ DPI Metadata
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create export canvas with background texture baked in
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;
    const expCtx = exportCanvas.getContext('2d');
    if (!expCtx) return;

    // Draw background
    const light = isLightColor(paperBgColor);
    expCtx.fillStyle = paperBgColor;
    expCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    // Draw grid if selected, scaling step proportional to high-DPI
    const gridStep = Math.round(20 * dpiScale);
    if (paperTexture === 'blueprint' || paperTexture === 'graph') {
      expCtx.strokeStyle = light ? 'rgba(2, 132, 199, 0.28)' : 'rgba(56, 189, 248, 0.18)';
      expCtx.lineWidth = Math.max(1, Math.round(1 * dpiScale));
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
      expCtx.lineWidth = Math.max(1, Math.round(1 * dpiScale));
      const lineStep = Math.round(26 * dpiScale);
      for (let y = lineStep; y < exportCanvas.height; y += lineStep) {
        expCtx.beginPath();
        expCtx.moveTo(0, y);
        expCtx.lineTo(exportCanvas.width, y);
        expCtx.stroke();
      }
    }

    // Draw user's artwork
    expCtx.drawImage(canvas, 0, 0);

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
    saveCanvasToStorage(currentPage);
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
    saveCanvasToStorage(currentPage);
    if (documentId) {
      const thumb = canvasRef.current?.toDataURL('image/png');
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

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Handle Color Bucket Fill
    if (tool === 'bucket') {
      if (isFilling) return;
      const pt = getCanvasPoint(e.clientX, e.clientY);
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (containerRect) {
        setFillRipple({
          x: e.clientX - containerRect.left,
          y: e.clientY - containerRect.top,
          color,
        });
        setTimeout(() => setFillRipple(null), 700);
      }
      performBucketFill(Math.round(pt.x), Math.round(pt.y), color);
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.setPointerCapture(e.pointerId);

    const pt = getCanvasPoint(e.clientX, e.clientY);
    isDrawingRef.current = true;
    lastPointRef.current = { x: pt.x, y: pt.y };

    // Configure Context based on Tool Texture and High-DPI Scale
    configureContext(ctx, tool, color, thickness, pt.scale);

    // Initial dot
    drawStroke(ctx, pt.x, pt.y, pt.x + 0.1, pt.y + 0.1, pt.scale);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (tool === 'bucket') return;
    if (!isDrawingRef.current || !lastPointRef.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentPt = getCanvasPoint(e.clientX, e.clientY);
    configureContext(ctx, tool, color, thickness, currentPt.scale);
    drawStroke(ctx, lastPointRef.current.x, lastPointRef.current.y, currentPt.x, currentPt.y, currentPt.scale);
    lastPointRef.current = { x: currentPt.x, y: currentPt.y };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (tool === 'bucket') return;
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    lastPointRef.current = null;
    const canvas = canvasRef.current;
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
    scale: number
  ) => {
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
        ctx.globalAlpha = 1.0;
      } else if (currentTool === 'pencil') {
        // Graphite pencil with textured grain and light pressure feel
        ctx.lineWidth = Math.max(1.5 * scale, currentThickness * 0.9 * scale);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.7;
      } else if (currentTool === 'calligraphy') {
        // Chisel nib / fountain pen
        ctx.lineWidth = currentThickness * 1.4 * scale;
        ctx.lineCap = 'square';
        ctx.lineJoin = 'miter';
        ctx.globalAlpha = 0.9;
      } else if (currentTool === 'highlighter') {
        // Translucent glowing marker
        ctx.lineWidth = currentThickness * 3.5 * scale;
        ctx.lineCap = 'square';
        ctx.lineJoin = 'bevel';
        ctx.globalAlpha = 0.35;
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
      // Add slight organic stipple jitter for genuine pencil graphite texture scaled to DPI
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * 1.6 * scale;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * 1.6 * scale;
      ctx.quadraticCurveTo(midX, midY, x2, y2);
      ctx.stroke();
    } else if (tool === 'calligraphy') {
      // Dynamic chisel nib angle offset
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
      // Standard pen, highlighter, or pixel eraser
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
      const newW = Math.min(Math.max(340, resizeStartRef.current.initialW + dw), window.innerWidth - 30);
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
    }
    // Blank
    return {
      backgroundColor: paperBgColor,
    };
  };

  return (
    <div
      ref={containerRef}
      className={`scratchpad-root flex flex-col rounded-2xl border shadow-2xl overflow-hidden select-none z-50 backdrop-blur-xl transition-shadow ${
        isDocked
          ? 'w-full h-full relative border-slate-800'
          : isFullscreen
          ? 'fixed inset-4 z-50 border-cyan-500/50'
          : 'fixed border-slate-700/80'
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
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.75), 0 0 25px rgba(56, 189, 248, 0.15)',
            }
      }
    >
      {/* ====================================================
          1. HEADER TOOLBAR & WINDOW DRAG HANDLE
          ==================================================== */}
      <div
        onMouseDown={handleHeaderMouseDown}
        className={`px-3 py-2 flex items-center justify-between border-b border-slate-800/80 cursor-grab active:cursor-grabbing transition-colors ${
          isDocked ? 'bg-slate-900/95' : 'bg-slate-950/95'
        }`}
      >
        {/* Title, Mode Tabs, and Move Grip */}
        <div className="flex items-center space-x-2">
          {!isDocked && !isFullscreen && (
            <Move className="w-3.5 h-3.5 text-slate-500 mr-0.5 cursor-grab" />
          )}

          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="font-arnie text-xs font-bold text-slate-100 tracking-wider truncate max-w-[140px] sm:max-w-xs" title={title || 'Scratchpad'}>
              {title || 'Scratchpad'}
            </h3>
          </div>

          {/* Mode Switcher: Draw | Notes | Calculator */}
          <div className="flex items-center space-x-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 ml-2">
            <button
              type="button"
              onClick={() => setActiveTab('draw')}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                activeTab === 'draw'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PenTool className="w-2.5 h-2.5" />
              <span>Canvas</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('notes')}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                activeTab === 'notes'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-2.5 h-2.5" />
              <span>Notes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('calc')}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                activeTab === 'calc'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calculator className="w-2.5 h-2.5" />
              <span>Calc</span>
            </button>
          </div>
        </div>

        {/* Right Actions: Sheets, Dock, Fullscreen, Close */}
        <div className="flex items-center space-x-1">
          {activeTab === 'draw' && (
            <div className="flex items-center space-x-1 mr-1">
              <span className="text-[10px] font-mono text-slate-400">Sheet:</span>
              <div className="flex items-center space-x-0.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                  <button
                    key={pg}
                    type="button"
                    onClick={() => switchPage(pg)}
                    className={`w-4.5 h-4.5 rounded text-[9px] font-bold font-mono transition-all cursor-pointer ${
                      currentPage === pg
                        ? 'bg-cyan-400 text-slate-950 scale-105'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                    title={`Switch to Rough Sheet #${pg}`}
                  >
                    {pg}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* High-DPI Engine Selector (600+ DPI) */}
          {activeTab === 'draw' && (
            <div className="relative mr-1">
              <button
                type="button"
                onClick={() => setShowDpiMenu((prev) => !prev)}
                className="flex items-center space-x-1 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-[9px] font-mono font-bold text-cyan-300 hover:text-white hover:border-cyan-400 transition-all cursor-pointer shadow-sm"
                title="Canvas Resolution: At least 600 DPI hardware-accelerated precision"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{dpi} DPI</span>
                <span className="text-[7px] text-slate-400">▼</span>
              </button>

              {showDpiMenu && (
                <div className="absolute right-0 top-full mt-1.5 w-52 p-2 rounded-xl bg-slate-950 border border-slate-700 shadow-2xl z-50 text-[10px] space-y-1 backdrop-blur-xl">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-1 pb-1 border-b border-slate-800 flex items-center justify-between">
                    <span>Engine Resolution</span>
                    <span className="text-cyan-400 font-mono">600+ DPI</span>
                  </div>

                  {[
                    { value: 600, label: '600 DPI', tag: 'Ultra-HD (Default)', desc: 'Sharp engineering drafting & calculations' },
                    { value: 720, label: '720 DPI', tag: 'Master Blueprint', desc: 'High-density architectural line resolution' },
                    { value: 1200, label: '1200 DPI', tag: 'CAD Archival', desc: 'Extreme subpixel drafting precision' },
                    { value: 300, label: '300 DPI', tag: 'Standard High-Res', desc: 'Compact memory footprint' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        saveCanvasToStorage(currentPage);
                        setDpi(opt.value as DpiMode);
                        setShowDpiMenu(false);
                      }}
                      className={`w-full text-left px-2 py-1 rounded-lg flex flex-col cursor-pointer transition-colors ${
                        dpi === opt.value
                          ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 font-bold'
                          : 'hover:bg-slate-800 text-slate-300 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono">{opt.label}</span>
                        <span className={`text-[8px] px-1 py-0.2 rounded font-mono ${
                          dpi === opt.value ? 'bg-cyan-400 text-slate-950 font-bold' : 'text-slate-400 bg-slate-900'
                        }`}>
                          {opt.tag}
                        </span>
                      </div>
                      <span className="text-[8px] text-slate-400 mt-0.5">{opt.desc}</span>
                    </button>
                  ))}

                  <div className="pt-1 border-t border-slate-800 text-[8px] text-slate-500 font-mono px-1 flex justify-between">
                    <span>Buffer:</span>
                    <span className="text-cyan-400">
                      {canvasRef.current ? `${canvasRef.current.width} × ${canvasRef.current.height} px` : `${dpi} DPI`}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {onToggleDock && (
            <button
              type="button"
              onClick={onToggleDock}
              className={`p-1 rounded-md text-xs transition-colors cursor-pointer ${
                isDocked
                  ? 'bg-cyan-500/20 text-cyan-300'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={isDocked ? 'Undock to floating window' : 'Dock to side alongside questions'}
            >
              <Columns className="w-3.5 h-3.5" />
            </button>
          )}

          {!isDocked && (
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 text-xs transition-colors cursor-pointer"
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
            className="p-1 rounded-md text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 text-xs transition-colors cursor-pointer ml-1"
            title="Minimize Scratchpad"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ====================================================
          2. SECONDARY CONTROLS (Only visible in 'draw' tab)
             Tools, Textures, Thickness, Color, Undo/Redo
          ==================================================== */}
      {activeTab === 'draw' && (
        <div className="px-3 py-1.5 bg-slate-950/80 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-1.5 text-xs">
          {/* Pen Tool Selectors with Textures */}
          <div className="flex items-center space-x-1">
            <button
              type="button"
              onClick={() => setTool('pen')}
              className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-[10px] font-medium transition-all cursor-pointer ${
                tool === 'pen'
                  ? 'bg-cyan-500/20 border border-cyan-400/60 text-cyan-200 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Ballpoint Pen: Smooth, crisp precision strokes"
            >
              <PenTool className="w-3 h-3 text-cyan-400" />
              <span className="hidden sm:inline">Pen</span>
            </button>

            <button
              type="button"
              onClick={() => setTool('pencil')}
              className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-[10px] font-medium transition-all cursor-pointer ${
                tool === 'pencil'
                  ? 'bg-amber-500/20 border border-amber-400/60 text-amber-200 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Graphite Pencil: Natural texture with organic grain and light shading"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">Pencil</span>
            </button>

            <button
              type="button"
              onClick={() => setTool('calligraphy')}
              className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-[10px] font-medium transition-all cursor-pointer ${
                tool === 'calligraphy'
                  ? 'bg-purple-500/20 border border-purple-400/60 text-purple-200 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Chisel Pen: Angle-sensitive engineering sketching"
            >
              <PenTool className="w-3 h-3 text-purple-400" />
              <span className="hidden sm:inline">Chisel</span>
            </button>

            <button
              type="button"
              onClick={() => setTool('highlighter')}
              className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-[10px] font-medium transition-all cursor-pointer ${
                tool === 'highlighter'
                  ? 'bg-yellow-500/20 border border-yellow-400/60 text-yellow-200 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Highlighter: Semi-transparent marker"
            >
              <Palette className="w-3 h-3 text-yellow-400" />
              <span className="hidden sm:inline">Marker</span>
            </button>

            {/* COLOR BUCKET FILL (Spreading Flood Fill on closed areas) */}
            <button
              type="button"
              onClick={() => setTool('bucket')}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[10px] font-medium transition-all cursor-pointer ${
                tool === 'bucket'
                  ? 'bg-cyan-500 text-slate-950 border border-cyan-400 font-bold shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-cyan-300 hover:text-white hover:bg-slate-800'
              }`}
              title="Color Bucket: Click inside any closed area (e.g. drawn box/circle) to fill with spreading animation"
            >
              <PaintBucket className="w-3 h-3" />
              <span>Fill</span>
            </button>

            {/* PRECISION PIXEL ERASER (Only erases where hit) */}
            <button
              type="button"
              onClick={() => setTool('eraser')}
              className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[10px] font-medium transition-all cursor-pointer ${
                tool === 'eraser'
                  ? 'bg-rose-500 text-slate-950 border border-rose-400 font-bold shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-rose-300 hover:text-white hover:bg-slate-800'
              }`}
              title="Precision Pixel Eraser: Erases exactly where touched without deleting connected lines"
            >
              <Eraser className="w-3 h-3" />
              <span>Eraser</span>
            </button>
          </div>

          {/* Stroke Thickness Controls & Indicator */}
          <div className="flex items-center space-x-1.5">
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">Size:</span>
            <div className="flex items-center space-x-1">
              {THICKNESS_PRESETS.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setThickness(p.value)}
                  className={`w-5 h-5 rounded-md flex items-center justify-center transition-all cursor-pointer ${
                    thickness === p.value
                      ? 'bg-slate-700 border border-cyan-400 text-cyan-300 font-bold'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                  title={`${p.label} (${p.value}px)`}
                >
                  <span
                    className="rounded-full bg-current"
                    style={{
                      width: `${Math.min(12, Math.max(2, p.value))}px`,
                      height: `${Math.min(12, Math.max(2, p.value))}px`,
                    }}
                  />
                </button>
              ))}

              <input
                type="range"
                min="1"
                max="32"
                value={thickness}
                onChange={(e) => setThickness(parseInt(e.target.value, 10))}
                className="w-14 sm:w-20 accent-cyan-400 h-1 bg-slate-800 rounded cursor-pointer"
                title={`Custom Thickness: ${thickness}px`}
              />
              <span className="text-[9px] font-mono text-cyan-300 w-5">{thickness}p</span>
            </div>
          </div>

          {/* Color Palette & Custom Color Picker */}
          {tool !== 'eraser' && (
            <div className="flex items-center space-x-1">
              {COLOR_PRESETS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={`w-4.5 h-4.5 rounded-full border transition-all cursor-pointer ${
                    color === c ? 'scale-125 border-white ring-1 ring-cyan-400' : 'border-slate-700'
                  }`}
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}

              {/* Native Color Picker */}
              <label
                className="w-4.5 h-4.5 rounded-full overflow-hidden border border-slate-700 cursor-pointer relative flex items-center justify-center"
                title="Custom Color"
              >
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="opacity-0 absolute inset-0 cursor-pointer"
                />
                <span
                  className="w-full h-full"
                  style={{
                    background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
                  }}
                />
              </label>
            </div>
          )}

          {/* Paper Background & History Actions */}
          <div className="flex items-center space-x-1">
            {/* Texture Selector */}
            <select
              value={paperTexture}
              onChange={(e) => setPaperTexture(e.target.value as PaperTexture)}
              className="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] rounded px-1.5 py-0.5 cursor-pointer outline-none"
              title="Paper Background Grid"
            >
              <option value="blueprint">Blueprint Grid</option>
              <option value="graph">Engineering Graph</option>
              <option value="lined">Ruled Lines</option>
              <option value="blank">Blank Slate</option>
            </select>

            {/* Sheet Background Color Option */}
            <div className="flex items-center space-x-1 pl-1.5 border-l border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono hidden md:inline">Sheet BG:</span>
              <div className="flex items-center space-x-1">
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
                    className={`w-4 h-4 rounded border transition-all cursor-pointer ${
                      paperBgColor.toLowerCase() === p.color.toLowerCase()
                        ? 'scale-120 border-white ring-1 ring-cyan-400 z-10'
                        : 'border-slate-700/80 hover:scale-110 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: p.color }}
                    title={`Sheet Color: ${p.label}`}
                  />
                ))}

                {/* Custom Sheet Background Color Picker */}
                <label
                  className="w-4 h-4 rounded overflow-hidden border border-slate-700 cursor-pointer relative flex items-center justify-center hover:scale-110 transition-transform"
                  title="Pick Custom Sheet Background Color"
                >
                  <input
                    type="color"
                    value={paperBgColor}
                    onChange={(e) => setPaperBgColor(e.target.value)}
                    className="opacity-0 absolute inset-0 cursor-pointer"
                  />
                  <div
                    className="w-full h-full flex items-center justify-center text-[7px]"
                    style={{
                      background: 'conic-gradient(from 180deg at 50% 50%, #38bdf8 0deg, #f59e0b 90deg, #10b981 180deg, #f43f5e 270deg, #38bdf8 360deg)',
                    }}
                  />
                </label>
              </div>
            </div>

            {/* Undo */}
            <button
              type="button"
              onClick={handleUndo}
              disabled={!canUndo}
              className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white transition-colors cursor-pointer"
              title="Undo Stroke (Ctrl+Z)"
            >
              <RotateCcw className="w-3 h-3" />
            </button>

            {/* Redo */}
            <button
              type="button"
              onClick={handleRedo}
              disabled={!canRedo}
              className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:text-white transition-colors cursor-pointer"
              title="Redo Stroke"
            >
              <RotateCw className="w-3 h-3" />
            </button>

            {/* Hidden file input for .cescratch upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportFile}
              accept=".cescratch,.json"
              className="hidden"
            />

            {/* Import .cescratch bundle */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
              title="Import .cescratch or .json file from computer or tablet"
            >
              <Upload className="w-3 h-3" />
            </button>

            {/* Download / Export Multi-Format */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowExportMenu((prev) => !prev)}
                className="flex items-center space-x-0.5 p-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                title="Download / Export Scratchpad (PNG, SVG, or .cescratch for tablets)"
              >
                <Download className="w-3 h-3" />
                <span className="text-[7px]">▼</span>
              </button>

              {showExportMenu && (
                <div className="absolute right-0 top-full mt-1.5 w-60 p-2 rounded-xl bg-slate-950 border border-slate-700 shadow-2xl z-50 text-[10px] space-y-1 backdrop-blur-xl">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 border-b border-slate-800">
                    Export Options
                  </div>

                  <button
                    type="button"
                    onClick={handleExportCescratch}
                    className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-800 text-slate-200 flex items-center space-x-2 cursor-pointer transition-colors"
                  >
                    <Tablet className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-[10px]">.cescratch (Universal Editable)</div>
                      <div className="text-[8px] text-slate-500">All 5 sheets + notes for tablets/apps</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={handleExportSvg}
                    className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-800 text-slate-200 flex items-center space-x-2 cursor-pointer transition-colors"
                  >
                    <FileCode className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-[10px]">.svg (Vector / Tablet Canvas)</div>
                      <div className="text-[8px] text-slate-500">GoodNotes, Notability, Procreate, Illustrator</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handleDownload();
                      setShowExportMenu(false);
                    }}
                    className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-800 text-slate-200 flex items-center space-x-2 cursor-pointer transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-[10px]">.png (600+ DPI Archival Image)</div>
                      <div className="text-[8px] text-slate-500">Ultra-HD with pHYs print metadata</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Clear Sheet */}
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded bg-slate-900 border border-slate-800 text-rose-400 hover:bg-rose-500/20 transition-colors cursor-pointer"
              title="Clear Current Sheet"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* ====================================================
          3. MAIN WORKSPACE CONTENT
             Tab 1: Canvas Drawing Surface
             Tab 2: Text / Notes Pad
             Tab 3: Engineering Mini-Calculator
          ==================================================== */}
      <div className="relative flex-1 w-full h-full overflow-hidden bg-slate-950">
        {/* TAB 1: CANVAS DRAWING */}
        {activeTab === 'draw' && (
          <div
            className="relative w-full h-full overflow-hidden touch-none"
            style={getTextureStyle()}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className={`w-full h-full block ${tool === 'bucket' ? 'cursor-pointer' : 'cursor-crosshair'}`}
              style={{
                touchAction: 'none',
              }}
            />

            {/* Liquid Fill Click Ripple Wave */}
            {fillRipple && (
              <div
                className="pointer-events-none absolute rounded-full border-2 animate-ping z-30 transition-all"
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

            {/* Small Floating Eraser Status Indicator */}
            {tool === 'eraser' && (
              <div className="absolute bottom-2 left-2 pointer-events-none px-2 py-0.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-[9px] text-rose-200">
                Pixel Eraser Active ({thickness * 2.5}px) • Only hits touched points
              </div>
            )}

            {/* Floating Color Bucket Status Indicator */}
            {tool === 'bucket' && (
              <div className="absolute bottom-2 left-2 pointer-events-none px-2.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-500/50 text-[10px] text-cyan-200 flex items-center space-x-1.5 shadow-lg backdrop-blur-sm">
                <PaintBucket className={`w-3 h-3 ${isFilling ? 'animate-bounce text-cyan-300' : 'text-cyan-400'}`} />
                <span>
                  {isFilling ? 'Liquid fill spreading...' : 'Click inside any closed box/shape to fill with spreading color'}
                </span>
                <span
                  className="w-2.5 h-2.5 rounded-full border border-white/60 ml-1 inline-block"
                  style={{ backgroundColor: color }}
                />
              </div>
            )}

            {/* High-DPI Engine Status Badge */}
            <div className="absolute bottom-2 right-2 pointer-events-none px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800/80 text-[8px] font-mono text-slate-400 flex items-center space-x-1.5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{dpi} DPI • IndexedDB</span>
            </div>

            {/* Import Notification Toast */}
            {importNotification && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1.5 rounded-full bg-cyan-950/95 border border-cyan-400 text-xs font-mono text-cyan-200 shadow-2xl backdrop-blur-md flex items-center space-x-1.5 animate-in fade-in">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>{importNotification}</span>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: TEXT & CALCULATION NOTES */}
        {activeTab === 'notes' && (
          <div
            className="w-full h-full p-3 flex flex-col space-y-2 transition-colors"
            style={getTextureStyle()}
          >
            {/* Quick Math Symbols Helper */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-[11px] text-slate-400 shrink-0">
              <span className={`text-[10px] font-mono ${isLightColor(paperBgColor) ? 'text-slate-600' : 'text-slate-500'}`}>Insert:</span>
              {['π', 'θ', '√', '²', '³', '°', '±', 'Σ', 'Δ', 'λ', 'μ', '≤', '≥', '≈'].map((sym) => (
                <button
                  key={sym}
                  type="button"
                  onClick={() => handleNotesChange(notesText + sym)}
                  className={`px-1.5 py-0.5 rounded border font-mono cursor-pointer transition-colors ${
                    isLightColor(paperBgColor)
                      ? 'bg-white/80 hover:bg-white text-slate-800 border-slate-300 shadow-sm'
                      : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-cyan-300'
                  }`}
                >
                  {sym}
                </button>
              ))}
            </div>

            <textarea
              value={notesText}
              onChange={(e) => handleNotesChange(e.target.value)}
              placeholder="Type your engineering scratch notes, formula derivations, given parameters, and intermediate computations here... (Auto-saved across reloads)"
              className={`w-full flex-1 p-3 rounded-xl border font-mono text-xs leading-relaxed resize-none outline-none focus:ring-1 transition-colors ${
                isLightColor(paperBgColor)
                  ? 'bg-white/70 border-slate-300/80 text-slate-900 placeholder-slate-400 focus:border-cyan-500 focus:ring-cyan-500'
                  : 'bg-slate-900/90 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:ring-amber-400'
              }`}
            />
          </div>
        )}

        {/* TAB 3: ENGINEERING MINI-CALCULATOR */}
        {activeTab === 'calc' && (
          <div className="w-full h-full p-4 flex flex-col items-center justify-center bg-slate-950">
            <div className="w-full max-w-sm space-y-3">
              {/* Display */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-right space-y-1">
                <div className="text-xs font-mono text-slate-400 overflow-x-auto whitespace-nowrap min-h-[16px]">
                  {calcInput || '0'}
                </div>
                <div className="text-xl font-bold font-mono text-emerald-400 min-h-[28px]">
                  {calcResult || '= 0'}
                </div>
              </div>

              {/* Keypad */}
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

                  let btnStyle = 'bg-slate-900 text-slate-200 border-slate-800 hover:bg-slate-800';
                  if (btn === '=') {
                    btnStyle = 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md';
                  } else if (isAction) {
                    btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500/30 hover:bg-rose-500/30';
                  } else if (isOp) {
                    btnStyle = 'bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30 font-bold';
                  } else if (isSci) {
                    btnStyle = 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/25 text-[10px]';
                  }

                  return (
                    <button
                      key={btn}
                      type="button"
                      onClick={() => handleCalcButton(btn)}
                      className={`h-9 rounded-lg border text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-center ${btnStyle}`}
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
          4. RESIZE HANDLE (Bottom-Right Corner)
          ==================================================== */}
      {!isDocked && !isFullscreen && (
        <div
          onMouseDown={handleResizeMouseDown}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-center justify-center z-20 group"
          title="Drag to resize scratchpad"
        >
          <div className="w-2 h-2 border-r-2 border-b-2 border-slate-400 group-hover:border-cyan-400 transition-colors" />
        </div>
      )}
    </div>
  );
};
