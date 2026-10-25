import React, { useState, useEffect } from 'react';
import { WifiOff, CheckCircle2 } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();
  const [wasOffline, setWasOffline] = useState(false);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setWasOffline(true);
    } else if (wasOffline) {
      setShowReconnected(true);
      const timer = setTimeout(() => {
        setShowReconnected(false);
        setWasOffline(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (isOnline && !showReconnected) {
    return null;
  }

  if (showReconnected) {
    return (
      <div className="fixed bottom-4 left-4 z-50 flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-emerald-600/95 text-white border border-emerald-400/40 text-xs font-semibold shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-200" />
        <span>Back online — All exam data synchronized</span>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-slate-950/90 text-amber-300 border border-amber-500/40 text-xs font-medium shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
      </span>
      <WifiOff className="w-4 h-4 text-amber-400 shrink-0" />
      <span>Offline Review Mode — Question bank &amp; scratchpad cached</span>
    </div>
  );
};
