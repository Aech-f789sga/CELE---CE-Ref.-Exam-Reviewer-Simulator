import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Layers,
  ExternalLink,
  RefreshCw,
  Maximize2,
  Minimize2,
  Loader2,
  WifiOff,
  Cloud,
  ShieldCheck,
  Sparkles,
  Info,
  TriangleAlert,
  BookOpen,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/**
 * SLATE — Scratchpad V2
 *
 * SLATE is a separate, independently deployed notebook app (its own repo and its
 * own Firebase project). It is embedded cross-origin on purpose:
 *
 *  • SLATE stores its library under `localStorage['inkpad']` — the exact key the
 *    legacy Inkpad V1 (`/inkpad.html`) uses here. Serving it same-origin would
 *    make the two notebooks libraries overwrite each other.
 *  • Cross-origin framing also gives SLATE its own IndexedDB / service worker
 *    scope, so a crash or storage quota overflow in one engine cannot take the
 *    other down.
 *  • Upstream fixes land the moment SLATE is redeployed — no copy to re-sync.
 */

export const SLATE_URL = 'https://slate-omega-henna.vercel.app/';

interface SlateStudioProps {
  /** Optional callback so the hub can keep the version switcher in sync. */
  onSwitchToV1?: () => void;
}

export const SlateStudio: React.FC<SlateStudioProps> = ({ onSwitchToV1 }) => {
  const { themeConfig } = useTheme();

  const [frameKey, setFrameKey] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSlow, setIsSlow] = useState(false);
  const [isOffline, setIsOffline] = useState<boolean>(
    typeof navigator !== 'undefined' ? !navigator.onLine : false
  );
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const frameRef = useRef<HTMLIFrameElement | null>(null);

  // Slow-load watchdog: SLATE is a large bundle, so give it room before we
  // suggest the "open in a new tab" escape hatch.
  useEffect(() => {
    if (isLoaded) return;
    const timer = setTimeout(() => setIsSlow(true), 12000);
    return () => clearTimeout(timer);
  }, [isLoaded, frameKey]);

  // Network awareness so we can show an honest offline state instead of a
  // permanently blank frame.
  useEffect(() => {
    const goOnline = () => setIsOffline(false);
    const goOffline = () => setIsOffline(true);
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  // Escape closes focus mode — matches the rest of the app's modal behaviour.
  useEffect(() => {
    if (!isFocusMode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFocusMode(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFocusMode]);

  const handleReload = useCallback(() => {
    setIsLoaded(false);
    setIsSlow(false);
    setFrameKey((k) => k + 1);
  }, []);

  const handleRetry = useCallback(() => {
    setIsOffline(typeof navigator !== 'undefined' ? !navigator.onLine : false);
    handleReload();
  }, [handleReload]);

  const frameShell = (
    <div
      className={`relative w-full overflow-hidden flex flex-col ${
        isFocusMode ? 'h-full' : 'h-[calc(100vh-16rem)] min-h-[620px]'
      }`}
      style={{
        backgroundColor: themeConfig.bgCard,
        borderColor: themeConfig.border,
      }}
    >
      {/* Frame chrome — hidden in focus mode so SLATE owns the whole viewport */}
      {!isFocusMode && (
        <div
          className="flex items-center justify-between gap-3 px-3.5 py-2.5 border-b shrink-0"
          style={{
            backgroundColor: themeConfig.bgCardSubtle,
            borderColor: themeConfig.border,
          }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              <Layers className="w-3.5 h-3.5" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-white truncate">SLATE Studio</span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-indigo-500/25 text-indigo-200 border border-indigo-500/40">
                  V2
                </span>
              </div>
              <span className="text-[9px] font-mono text-slate-500 truncate block">
                slate-omega-henna.vercel.app
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handleReload}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 transition-colors cursor-pointer"
              title="Reload SLATE"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${!isLoaded ? 'animate-spin' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => setIsFocusMode(true)}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 transition-colors cursor-pointer"
              title="Focus mode — SLATE fills the whole screen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            <a
              href={SLATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-[11px] font-bold transition-colors cursor-pointer"
              title="Open SLATE in a new tab (recommended on tablets and phones)"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>
          </div>
        </div>
      )}

      {/* Focus-mode exit control */}
      {isFocusMode && (
        <button
          type="button"
          onClick={() => setIsFocusMode(false)}
          className="absolute top-3 right-3 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/90 hover:bg-slate-800 text-white text-[11px] font-bold border border-slate-700 shadow-xl backdrop-blur-md cursor-pointer"
          title="Exit focus mode (Esc)"
        >
          <Minimize2 className="w-3.5 h-3.5" />
          <span>Exit Focus</span>
        </button>
      )}

      {/* The SLATE app itself */}
      <div className="relative flex-1 w-full min-h-0">
        <iframe
          key={frameKey}
          ref={frameRef}
          src={SLATE_URL}
          title="SLATE — Scratchpad V2 Handwritten Notes"
          className="absolute inset-0 w-full h-full border-0 block"
          style={{ backgroundColor: '#0b0d12' }}
          allow="clipboard-read; clipboard-write; fullscreen; download"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => {
            setIsLoaded(true);
            setIsSlow(false);
          }}
        />

        {/* Loading veil */}
        {!isLoaded && !isOffline && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-950/95 text-center px-6">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/40 flex items-center justify-center">
                <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white">Booting SLATE Studio…</p>
              <p className="text-[11px] font-mono text-slate-400">
                Loading the V2 notebook engine
              </p>
            </div>
            {isSlow && (
              <div className="max-w-sm space-y-2.5 animate-in fade-in">
                <p className="text-[11px] text-amber-300/90 leading-relaxed">
                  This is taking longer than usual. If it stays blank, your browser may be blocking
                  the embedded app — open it in its own tab instead.
                </p>
                <a
                  href={SLATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open SLATE in a new tab</span>
                </a>
              </div>
            )}
          </div>
        )}

        {/* Offline state */}
        {isOffline && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-950/95 text-center px-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center">
              <WifiOff className="w-6 h-6 text-amber-400" />
            </div>
            <div className="space-y-1 max-w-sm">
              <p className="text-sm font-bold text-white">You're offline</p>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                SLATE Studio runs on its own domain, so it needs a connection the first time it
                loads. Your V1 scratchpads are stored locally and still work offline.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleRetry}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
              {onSwitchToV1 && (
                <button
                  type="button"
                  onClick={onSwitchToV1}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Use V1 instead</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (isFocusMode) {
    return (
      <div className="fixed inset-0 z-[120] bg-slate-950 animate-in fade-in duration-150">
        {frameShell}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Info strip explaining the two-engine setup */}
      <div
        className="rounded-2xl border p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        style={{
          backgroundColor: themeConfig.bgCardSubtle,
          borderColor: themeConfig.border,
        }}
      >
        <div className="flex items-start gap-2.5 min-w-0">
          <span className="p-1.5 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </span>
          <div className="min-w-0 space-y-0.5">
            <p className="text-[11px] font-bold text-white">
              SLATE is a standalone engine with its own notebook library
            </p>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Your SLATE notebooks live on its own domain and sync through its own account — they
              are separate from the V1 Inkpad sheets listed in this hub.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">
            <ShieldCheck className="w-3 h-3" />
            Isolated storage
          </span>
          <span className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/30 text-[10px] font-mono">
            <Cloud className="w-3 h-3" />
            Own cloud sync
          </span>
          <button
            type="button"
            onClick={() => setShowNotes((v) => !v)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 text-[10px] font-semibold transition-colors cursor-pointer"
            title="Why is SLATE embedded rather than bundled?"
          >
            <Info className="w-3 h-3" />
            <span>Details</span>
          </button>
        </div>
      </div>

      {showNotes && (
        <div
          className="rounded-2xl border p-4 space-y-2 text-[11px] leading-relaxed animate-in fade-in"
          style={{
            backgroundColor: themeConfig.bgCard,
            borderColor: themeConfig.border,
          }}
        >
          <p className="font-bold text-white flex items-center gap-1.5">
            <TriangleAlert className="w-3.5 h-3.5 text-amber-400" />
            Why SLATE runs in its own frame
          </p>
          <ul className="space-y-1.5 text-slate-400 list-disc list-inside">
            <li>
              <span className="text-slate-300 font-semibold">No storage collisions.</span> SLATE
              keeps its library under the same <code className="font-mono text-cyan-300">inkpad</code>{' '}
              key as the legacy V1 engine. Bundled into this site, the two libraries would overwrite
              each other.
            </li>
            <li>
              <span className="text-slate-300 font-semibold">Fault isolation.</span> A storage-quota
              overflow or renderer crash inside SLATE cannot take down your exam session.
            </li>
            <li>
              <span className="text-slate-300 font-semibold">Always current.</span> SLATE ships from
              its own deployment, so fixes arrive without rebuilding this app.
            </li>
            <li>
              <span className="text-slate-300 font-semibold">Sign in once per domain.</span> SLATE
              uses its own Firebase project, so you may need to log in inside the frame the first
              time.
            </li>
          </ul>
        </div>
      )}

      <div
        className="rounded-2xl overflow-hidden border shadow-xl"
        style={{ borderColor: themeConfig.border }}
      >
        {frameShell}
      </div>
    </div>
  );
};

export default SlateStudio;
