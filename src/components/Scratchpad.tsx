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
} from 'lucide-react';

export type ToolType = 'pen' | 'pencil' | 'calligraphy' | 'highlighter' | 'eraser';
export type PaperTexture = 'blueprint' | 'graph' | 'lined' | 'blank';
export type ScratchpadTab = 'draw' | 'notes' | 'calc';

interface ScratchpadProps {
  isOpen: boolean;
  onClose: () => void;
  isDocked?: boolean;
  onToggleDock?: () => void;
  className?: string;
  storageKeyPrefix?: string;
}

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

export const Scratchpad: React.FC<ScratchpadProps> = ({
  isOpen,
  onClose,
  isDocked = false,
  onToggleDock,
  className = '',
  storageKeyPrefix = '',
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
        size,
        position,
      };
      localStorage.setItem(`${storageKeyPrefix}${STORAGE_KEY_STATE}`, JSON.stringify(stateToSave));
    } catch {
      // Ignore quota errors
    }
  }, [tool, color, thickness, paperTexture, paperBgColor, size, position, storageKeyPrefix]);

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
  const saveCanvasToStorage = useCallback((page: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const dataUrl = canvas.toDataURL('image/png');
      localStorage.setItem(`${storageKeyPrefix}${STORAGE_KEY_CANVAS_PREFIX}${page}`, dataUrl);
    } catch {
      // Ignore quota error
    }
  }, [storageKeyPrefix]);

  const loadCanvasFromStorage = useCallback((page: number) => {
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
      const savedDataUrl = localStorage.getItem(`${storageKeyPrefix}${STORAGE_KEY_CANVAS_PREFIX}${page}`);
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
  }, [storageKeyPrefix]);

  // Switch Page: save current, load next
  const switchPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    saveCanvasToStorage(currentPage);
    setCurrentPage(newPage);
  };

  // ----------------------------------------------------
  // Canvas Resolution Setup & Resize
  // ----------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    if (w <= 0 || h <= 0) return;

    // Temporary copy existing drawing before resize if dimensions changed
    let tempImgData: string | null = null;
    if (canvas.width > 0 && canvas.height > 0) {
      tempImgData = canvas.toDataURL('image/png');
    }

    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext('2d');
    if (ctx && tempImgData) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, w, h);
      };
      img.src = tempImgData;
    } else {
      loadCanvasFromStorage(currentPage);
    }
  }, [size, isDocked, isFullscreen, currentPage, loadCanvasFromStorage]);

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

    // Draw grid if selected
    if (paperTexture === 'blueprint' || paperTexture === 'graph') {
      expCtx.strokeStyle = light ? 'rgba(2, 132, 199, 0.28)' : 'rgba(56, 189, 248, 0.18)';
      expCtx.lineWidth = 1;
      const step = 20;
      for (let x = 0; x < exportCanvas.width; x += step) {
        expCtx.beginPath();
        expCtx.moveTo(x, 0);
        expCtx.lineTo(x, exportCanvas.height);
        expCtx.stroke();
      }
      for (let y = 0; y < exportCanvas.height; y += step) {
        expCtx.beginPath();
        expCtx.moveTo(0, y);
        expCtx.lineTo(exportCanvas.width, y);
        expCtx.stroke();
      }
    } else if (paperTexture === 'lined') {
      expCtx.strokeStyle = light ? 'rgba(15, 23, 42, 0.22)' : 'rgba(148, 163, 184, 0.18)';
      expCtx.lineWidth = 1;
      for (let y = 30; y < exportCanvas.height; y += 24) {
        expCtx.beginPath();
        expCtx.moveTo(0, y);
        expCtx.lineTo(exportCanvas.width, y);
        expCtx.stroke();
      }
    }

    // Draw user's artwork
    expCtx.drawImage(canvas, 0, 0);

    const a = document.createElement('a');
    a.download = `CE_Exam_Scratchpad_Sheet_${currentPage}.png`;
    a.href = exportCanvas.toDataURL('image/png');
    a.click();
  };

  // ----------------------------------------------------
  // Drawing Engine with Multiple Textures & Precision Pixel Eraser
  // ----------------------------------------------------
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Capture pointer for smooth drawing outside boundaries
    canvas.setPointerCapture(e.pointerId);

    const pt = getCoordinates(e);
    isDrawingRef.current = true;
    lastPointRef.current = pt;

    // Configure Context based on Tool Texture
    configureContext(ctx, tool, color, thickness);

    // Initial dot
    drawStroke(ctx, pt.x, pt.y, pt.x + 0.1, pt.y + 0.1);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !lastPointRef.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentPt = getCoordinates(e);
    drawStroke(ctx, lastPointRef.current.x, lastPointRef.current.y, currentPt.x, currentPt.y);
    lastPointRef.current = currentPt;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    lastPointRef.current = null;
    const canvas = canvasRef.current;
    if (canvas && canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
    pushUndoState();
  };

  // Context Configuration for Pen Textures & Localized Pixel Eraser
  const configureContext = (
    ctx: CanvasRenderingContext2D,
    currentTool: ToolType,
    currentColor: string,
    currentThickness: number
  ) => {
    if (currentTool === 'eraser') {
      // CRITICAL REQUIREMENT: "Include eraser that only erases where it hits (not all lines/connected lines)"
      // globalCompositeOperation = 'destination-out' erases only the exact hit area pixels
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.lineWidth = currentThickness * 2.5; // Slightly larger for comfortable erasing
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = 1.0;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
      ctx.fillStyle = currentColor;

      if (currentTool === 'pen') {
        // Solid crisp ballpoint / gel pen
        ctx.lineWidth = currentThickness;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 1.0;
      } else if (currentTool === 'pencil') {
        // Graphite pencil with subtle textured opacity
        ctx.lineWidth = Math.max(1.5, currentThickness * 0.9);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.65;
      } else if (currentTool === 'calligraphy') {
        // Chisel nib / fountain pen
        ctx.lineWidth = currentThickness * 1.4;
        ctx.lineCap = 'square';
        ctx.lineJoin = 'miter';
        ctx.globalAlpha = 0.9;
      } else if (currentTool === 'highlighter') {
        // Wide translucent glowing highlighter
        ctx.lineWidth = currentThickness * 3.5;
        ctx.lineCap = 'square';
        ctx.lineJoin = 'bevel';
        ctx.globalAlpha = 0.35;
      }
    }
  };

  const drawStroke = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) => {
    if (tool === 'pencil') {
      // Add slight organic stipple jitter for genuine pencil graphite texture
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * 0.8;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * 0.8;
      ctx.quadraticCurveTo(midX, midY, x2, y2);
      ctx.stroke();
    } else if (tool === 'calligraphy') {
      // Dynamic chisel offset
      const dx = x2 - x1;
      const dy = y2 - y1;
      const angle = Math.atan2(dy, dx);
      const widthFactor = Math.abs(Math.sin(angle - Math.PI / 4)) * 1.5 + 0.5;
      ctx.lineWidth = thickness * widthFactor;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    } else {
      // Standard pen, highlighter, or eraser
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
            <h3 className="font-arnie text-xs font-bold text-slate-100 tracking-wider">
              Scratchpad
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
            <div className="flex items-center space-x-1 mr-1.5">
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
            onClick={onClose}
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

            {/* Download */}
            <button
              type="button"
              onClick={handleDownload}
              className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
              title="Export Sheet as PNG"
            >
              <Download className="w-3 h-3" />
            </button>

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
              className="w-full h-full block cursor-crosshair"
              style={{
                touchAction: 'none',
              }}
            />

            {/* Small Floating Eraser Status Indicator */}
            {tool === 'eraser' && (
              <div className="absolute bottom-2 left-2 pointer-events-none px-2 py-0.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-[9px] text-rose-200">
                Pixel Eraser Active ({thickness * 2.5}px) • Only hits touched points
              </div>
            )}
          </div>
        )}

        {/* TAB 2: TEXT & CALCULATION NOTES */}
        {activeTab === 'notes' && (
          <div className="w-full h-full p-3 flex flex-col bg-slate-950 space-y-2">
            {/* Quick Math Symbols Helper */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-[11px] text-slate-400 shrink-0">
              <span className="text-[10px] text-slate-500 font-mono">Insert:</span>
              {['π', 'θ', '√', '²', '³', '°', '±', 'Σ', 'Δ', 'λ', 'μ', '≤', '≥', '≈'].map((sym) => (
                <button
                  key={sym}
                  type="button"
                  onClick={() => handleNotesChange(notesText + sym)}
                  className="px-1.5 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-300 font-mono cursor-pointer"
                >
                  {sym}
                </button>
              ))}
            </div>

            <textarea
              value={notesText}
              onChange={(e) => handleNotesChange(e.target.value)}
              placeholder="Type your engineering scratch notes, formula derivations, given parameters, and intermediate computations here... (Auto-saved across reloads)"
              className="w-full flex-1 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder-slate-500 font-mono text-xs leading-relaxed resize-none outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
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
