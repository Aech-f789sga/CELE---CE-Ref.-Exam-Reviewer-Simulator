import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Minus,
  Square,
  Maximize2,
  Minimize2,
  X,
  Palette,
  GripHorizontal,
  PenTool,
} from 'lucide-react';

export interface ScratchpadProps {
  isOpen: boolean;
  onClose: () => void;
  isDocked?: boolean;
  onToggleDock?: () => void;
  className?: string;
  storageKeyPrefix?: string;
  title?: string;
  documentId?: string;
  onSaveBundle?: () => void;
  initialMode?: 'library' | 'editor';
}

export const Scratchpad: React.FC<ScratchpadProps> = ({
  isOpen,
  onClose,
  isDocked = false,
  onToggleDock,
  className = '',
  storageKeyPrefix,
  title,
  documentId,
  onSaveBundle,
}) => {
  const { themeConfig } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Adapt to Theme Toggle
  const [adaptToTheme, setAdaptToTheme] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('inkpad-adapt-theme');
      return saved !== null ? saved === 'true' : true;
    } catch {
      return true;
    }
  });

  // Window states: Minimized, Maximized, Position, Size
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  // Position: default to right side of viewport
  const [pos, setPos] = useState<{ x: number; y: number }>(() => {
    const defaultX = Math.max(20, window.innerWidth - 640);
    const defaultY = Math.max(20, 80);
    return { x: defaultX, y: defaultY };
  });

  // Size: comfortable aspect for drafting
  const [size, setSize] = useState<{ w: number; h: number }>(() => {
    const defaultW = Math.min(window.innerWidth - 40, 620);
    const defaultH = Math.min(window.innerHeight - 100, 750);
    return { w: defaultW, h: defaultH };
  });

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const dragStartRef = useRef<{ startX: number; startY: number; posX: number; posY: number }>({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0,
  });
  const resizeStartRef = useRef<{ startX: number; startY: number; w: number; h: number }>({
    startX: 0,
    startY: 0,
    w: 0,
    h: 0,
  });

  // Toggle Adapt to Theme
  const handleToggleAdapt = () => {
    setAdaptToTheme((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('inkpad-adapt-theme', String(next));
      } catch {}
      sendThemeToIframe(next);
      return next;
    });
  };

  const sendThemeToIframe = useCallback(
    (adapt: boolean) => {
      if (!iframeRef.current || !iframeRef.current.contentWindow) return;
      const themeVars = {
        '--app-bg-page': themeConfig.bgPage,
        '--app-bg-card': themeConfig.bgCard,
        '--app-text-primary': themeConfig.textPrimary,
        '--app-text-muted': themeConfig.textMuted,
        '--app-accent': themeConfig.accent,
        '--app-border': themeConfig.border,
      };
      iframeRef.current.contentWindow.postMessage(
        {
          type: 'INKPAD_SET_THEME',
          adapt,
          vars: themeVars,
        },
        '*'
      );
    },
    [themeConfig]
  );

  const sendOpenNotebookToIframe = useCallback(() => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    if (documentId) {
      iframeRef.current.contentWindow.postMessage(
        {
          type: 'INKPAD_OPEN_NOTEBOOK',
          id: documentId,
          title: title || 'CE Board Inkpad',
        },
        '*'
      );
    }
  }, [documentId, title]);

  // Sync theme when iframe loads or themeConfig changes
  useEffect(() => {
    sendThemeToIframe(adaptToTheme);
  }, [adaptToTheme, themeConfig, sendThemeToIframe]);

  // Sync notebook document selection
  useEffect(() => {
    sendOpenNotebookToIframe();
  }, [sendOpenNotebookToIframe]);

  // Listen for notebook saved event from iframe
  useEffect(() => {
    const handleMsg = (e: MessageEvent) => {
      if (!e.data) return;
      if (e.data.type === 'INKPAD_NOTEBOOK_SAVED' || e.data.type === 'INKPAD_SAVED') {
        if (onSaveBundle) onSaveBundle();
      }
    };
    window.addEventListener('message', handleMsg);
    return () => window.removeEventListener('message', handleMsg);
  }, [onSaveBundle]);

  // Dragging handler
  const handleDragPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMaximized || isDocked) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: pos.x,
      posY: pos.y,
    };
  };

  const handleDragPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;
    const nextX = Math.max(10, Math.min(window.innerWidth - size.w - 10, dragStartRef.current.posX + dx));
    const nextY = Math.max(10, Math.min(window.innerHeight - 60, dragStartRef.current.posY + dy));
    setPos({ x: nextX, y: nextY });
  };

  const handleDragPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
      setIsDragging(false);
    }
  };

  // Resizing handler
  const handleResizePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMaximized || isDocked) return;
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsResizing(true);
    resizeStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      w: size.w,
      h: size.h,
    };
  };

  const handleResizePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isResizing) return;
    const dw = e.clientX - resizeStartRef.current.startX;
    const dh = e.clientY - resizeStartRef.current.startY;
    const nextW = Math.max(360, Math.min(window.innerWidth - pos.x - 20, resizeStartRef.current.w + dw));
    const nextH = Math.max(380, Math.min(window.innerHeight - pos.y - 20, resizeStartRef.current.h + dh));
    setSize({ w: nextW, h: nextH });
  };

  const handleResizePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isResizing) {
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
      setIsResizing(false);
    }
  };

  if (!isOpen) return null;

  // Render: Minimized Floating Pill Button
  if (isMinimized) {
    return (
      <div
        className="fixed z-50 bottom-6 right-6 flex items-center gap-2 p-2 px-3 rounded-full shadow-2xl border backdrop-blur-md cursor-pointer hover:scale-105 transition-all select-none animate-in fade-in"
        style={{
          backgroundColor: adaptToTheme ? 'rgba(15, 23, 42, 0.92)' : 'rgba(26, 26, 28, 0.95)',
          borderColor: adaptToTheme ? themeConfig.accent : '#5b8cff',
          boxShadow: '0 12px 32px rgba(0,0,0,0.4), 0 0 16px rgba(91,140,255,0.3)',
        }}
        onClick={() => setIsMinimized(false)}
        title="Click to restore Inkpad Scratchpad"
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            backgroundColor: adaptToTheme ? themeConfig.accent : '#5b8cff',
            color: '#08050e',
          }}
        >
          <PenTool className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-bold text-white pr-1">
          {title || 'Inkpad Scratchpad'} (Minimized)
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="p-1 rounded-full text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
          title="Close Scratchpad"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  // Render: Draggable Window or Docked Panel
  const isWindowed = !isDocked && !isMaximized;

  return (
    <div
      data-tour="inkpad-studio"
      className={`fixed z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl border transition-all ${
        isDocked
          ? 'right-0 top-0 bottom-0 w-[580px] rounded-none border-l'
          : isMaximized
          ? 'inset-2 rounded-2xl'
          : ''
      } ${className}`}
      style={{
        ...(isWindowed
          ? {
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              width: `${size.w}px`,
              height: `${size.h}px`,
            }
          : {}),
        backgroundColor: adaptToTheme ? themeConfig.bgCard : '#1a1a1c',
        borderColor: adaptToTheme ? themeConfig.border : '#3d3d42',
        boxShadow: isWindowed
          ? '0 24px 60px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.1)'
          : undefined,
      }}
    >
      {/* Draggable Header Titlebar */}
      <div
        className={`flex items-center justify-between px-3.5 py-2 border-b select-none ${
          isWindowed ? 'cursor-grab active:cursor-grabbing' : ''
        }`}
        style={{
          backgroundColor: adaptToTheme ? themeConfig.bgPage : '#2a2a2d',
          borderColor: adaptToTheme ? themeConfig.border : '#3d3d42',
        }}
        onPointerDown={handleDragPointerDown}
        onPointerMove={handleDragPointerMove}
        onPointerUp={handleDragPointerUp}
      >
        {/* Left: Drag grip & Title */}
        <div className="flex items-center gap-2 min-w-0 pointer-events-none">
          {isWindowed && <GripHorizontal className="w-4 h-4 text-slate-400 shrink-0" />}
          <div
            className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0"
            style={{
              backgroundColor: adaptToTheme ? themeConfig.accent : '#5b8cff',
              color: '#08050e',
            }}
          >
            <PenTool className="w-3 h-3" />
          </div>
          <span className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-[280px]">
            {title || 'Inkpad – Handwritten Notes'}
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 shrink-0" onPointerDown={(e) => e.stopPropagation()}>
          {/* Adapt to Theme Toggle */}
          <button
            type="button"
            onClick={handleToggleAdapt}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer mr-1"
            style={{
              backgroundColor: adaptToTheme ? 'rgba(91, 140, 255, 0.2)' : 'transparent',
              borderColor: adaptToTheme ? (themeConfig.accent || '#5b8cff') : 'rgba(255, 255, 255, 0.2)',
              color: adaptToTheme ? '#ffffff' : '#9a9aa0',
            }}
            title="Toggle whether Inkpad adapts to the active app theme or stays native"
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{adaptToTheme ? 'Theme: Adaptive' : 'Theme: Native'}</span>
          </button>

          {/* Minimize */}
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
            title="Minimize to floating pill while solving problem"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          {/* Maximize / Restore */}
          {!isDocked && (
            <button
              type="button"
              onClick={() => setIsMaximized((prev) => !prev)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
              title={isMaximized ? 'Restore window size' : 'Maximize window'}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          )}

          {/* Dock / Undock */}
          {onToggleDock && (
            <button
              type="button"
              onClick={onToggleDock}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
              title={isDocked ? 'Undock to draggable window' : 'Dock to side'}
            >
              <Square className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-rose-400 hover:bg-rose-500/20 transition-colors ml-1"
            title="Close Scratchpad"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Body: Pristine Inkpad HTML via iFrame */}
      <div className="flex-1 w-full h-full relative overflow-hidden bg-black/10">
        <iframe
          ref={iframeRef}
          src="/inkpad.html"
          className="w-full h-full border-0 block"
          style={{
            pointerEvents: isDragging || isResizing ? 'none' : 'auto',
          }}
          onLoad={() => {
            sendThemeToIframe(adaptToTheme);
            sendOpenNotebookToIframe();
          }}
          title="Inkpad Handwritten Notes"
        />
      </div>

      {/* Resize Grip Handle at bottom-right corner */}
      {isWindowed && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize z-20 flex items-center justify-center select-none"
          onPointerDown={handleResizePointerDown}
          onPointerMove={handleResizePointerMove}
          onPointerUp={handleResizePointerUp}
          title="Drag to resize window"
        >
          <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-slate-500 pointer-events-none">
            <path d="M9 1L1 9M9 5L5 9M9 9L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  );
};
