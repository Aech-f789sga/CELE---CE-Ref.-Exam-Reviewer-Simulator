import React, { useState } from 'react';
import { Download, Smartphone, Share, PlusSquare, Check, X, Sparkles, ShieldCheck } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'navbar' | 'pill' | 'banner' | 'card';
  className?: string;
  showIconOnly?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'pill',
  className = '',
  showIconOnly = false,
}) => {
  const { isInstallable, isInstalled, isStandalone, isIOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // If already running in standalone mode or installed, hide
  if (isStandalone || isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 4000);
      }
    } else {
      // Show instructional modal (iOS Safari or Chromium menu instructions)
      setShowGuideModal(true);
    }
  };

  // Rendering based on variant
  return (
    <>
      {variant === 'navbar' && (
        <button
          type="button"
          onClick={handleInstallClick}
          className={`relative flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/15 to-emerald-500/15 hover:from-amber-500/25 hover:to-emerald-500/25 border border-amber-500/35 text-amber-300 hover:text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm cursor-pointer hover:scale-[1.02] ${className}`}
          title="Install CE Board Exam Reviewer app on your phone, tablet, or desktop for offline access"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <Download className="w-3.5 h-3.5 text-amber-400" />
          {!showIconOnly && <span className="hidden sm:inline font-arnie">Install App</span>}
        </button>
      )}

      {variant === 'pill' && (
        <button
          type="button"
          onClick={handleInstallClick}
          className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-arnie text-xs font-bold tracking-wide shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer ${className}`}
          title="Install app for offline past papers & calculator scratchpad"
        >
          <Download className="w-4 h-4" />
          <span>Install App (Offline Ready)</span>
        </button>
      )}

      {variant === 'card' && (
        <div className={`p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-amber-500/30 shadow-xl space-y-3 ${className}`}>
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5 text-amber-400" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-arnie text-sm font-bold text-white flex items-center space-x-1.5">
                <span>Install for Offline Board Review</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">PWA</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Launch instantly from home screen with zero browser bars, full offline past papers, and responsive scratchpad.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleInstallClick}
            className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-arnie transition-all cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install to Device</span>
          </button>
        </div>
      )}

      {/* Instructional Modal for iOS or manual install guidance */}
      {showGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md rounded-3xl bg-slate-900 border border-slate-700 p-6 shadow-2xl space-y-5">
            <button
              type="button"
              onClick={() => setShowGuideModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-arnie text-lg font-bold text-white">Install CE Board Reviewer</h3>
                <span className="text-xs text-amber-400">Progressive Web App (PWA)</span>
              </div>
            </div>

            {isIOS ? (
              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p className="text-slate-200">
                  Follow these 2 quick steps in <strong className="text-white">Apple Safari</strong> to install to your iPhone or iPad home screen:
                </p>
                <div className="space-y-2.5 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-300">
                      <Share className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Step 1:</span> Tap the <strong className="text-blue-400">Share</strong> icon at the bottom of Safari.
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-300">
                      <PlusSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">Step 2:</span> Scroll down and tap <strong className="text-emerald-400">"Add to Home Screen"</strong>.
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Works completely offline with fast launch and no App Store download required.</span>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  To install directly on Chrome, Edge, Brave or Android:
                </p>
                <div className="space-y-2.5 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-300 font-bold font-mono">
                      1
                    </div>
                    <div>
                      Look for the <strong className="text-amber-400">Install icon</strong> (computer with down arrow) in your browser address bar.
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-300 font-bold font-mono">
                      2
                    </div>
                    <div>
                      Or open browser menu <strong className="text-white">(⋮)</strong> and click <strong className="text-cyan-400">"Install CE Board Exam Reviewer"</strong> or <strong className="text-cyan-400">"Add to Home screen"</strong>.
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Runs full-screen, caches all 2011–2025 question banks, and preserves all exam notes offline.</span>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowGuideModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Success toast if installation completes */}
      {installSuccess && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-emerald-600 text-white text-xs font-bold shadow-2xl animate-in slide-in-from-bottom-3">
          <Check className="w-4 h-4" />
          <span>CE Board Exam App Installed Successfully!</span>
        </div>
      )}
    </>
  );
};
