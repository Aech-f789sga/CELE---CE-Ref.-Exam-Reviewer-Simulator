/**
 * "A new version is available" prompt.
 *
 * The app is a PWA and previously registered with `registerType: 'autoUpdate'`,
 * which swaps the service worker out silently: the new build lands, but the tab
 * you are already looking at keeps running the old one until you happen to
 * reload. Worse, because the old worker precached index.html, a normal reload
 * could still hand you the stale shell.
 *
 * So the registration is now `'prompt'` and this component owns the decision:
 * when a new worker is waiting, say so, and only take over when the learner
 * presses Update. `updateServiceWorker(true)` sends the skip-waiting message and
 * reloads once the new worker is in control.
 *
 * The check runs on the events that actually mean "something changed" rather
 * than on a timer alone — a tab that has been in the background for hours is
 * exactly the case where the build is stale, and coming back to it is the right
 * moment to look.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

const POLL_MS = 30 * 60 * 1000;

const CARD: React.CSSProperties = {
  position: 'fixed',
  left: '50%',
  bottom: 18,
  transform: 'translateX(-50%)',
  zIndex: 90,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  maxWidth: 'min(94vw, 460px)',
  padding: '11px 14px',
  borderRadius: 14,
  background: '#0f172a',
  border: '1px solid #334155',
  color: '#f8fafc',
  boxShadow: '0 12px 34px rgba(2, 6, 23, 0.55)',
  fontSize: 13,
  lineHeight: 1.35,
};

export function UpdatePrompt() {
  const [visible, setVisible] = useState(false);
  const [busy, setBusy] = useState(false);
  const regRef = useRef<ServiceWorkerRegistration | null>(null);

  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_swUrl, registration) {
      regRef.current = registration ?? null;
    },
  });

  useEffect(() => {
    if (needRefresh) setVisible(true);
  }, [needRefresh]);

  // Ask the browser to look for a new worker on the moments that matter.
  useEffect(() => {
    const check = () => {
      if (document.visibilityState !== 'visible') return;
      void regRef.current?.update().catch(() => {});
    };
    const timer = window.setInterval(check, POLL_MS);
    window.addEventListener('focus', check);
    document.addEventListener('visibilitychange', check);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('focus', check);
      document.removeEventListener('visibilitychange', check);
    };
  }, []);

  const later = useCallback(() => {
    // Hide for this session only. The worker stays waiting, so the next launch
    // (or the next focus check) offers it again rather than silently applying.
    setVisible(false);
  }, []);

  const apply = useCallback(() => {
    setBusy(true);
    void updateServiceWorker(true);
  }, [updateServiceWorker]);

  if (!visible || !needRefresh) return null;

  return (
    <div style={CARD} role="status" aria-live="polite">
      <span style={{ fontSize: 16 }} aria-hidden="true">
        ⬆️
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600 }}>A new version is available</div>
        <div style={{ color: '#94a3b8', fontSize: 11.5, marginTop: 1 }}>
          Reload to get the latest questions and fixes.
        </div>
      </div>
      <button
        type="button"
        onClick={later}
        disabled={busy}
        style={{
          padding: '6px 10px',
          borderRadius: 9,
          border: '1px solid #334155',
          background: 'transparent',
          color: '#cbd5e1',
          fontSize: 12,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Later
      </button>
      <button
        type="button"
        onClick={apply}
        disabled={busy}
        style={{
          padding: '6px 12px',
          borderRadius: 9,
          border: '1px solid #b45309',
          background: '#f59e0b',
          color: '#1c1206',
          fontSize: 12,
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        {busy ? 'Updating…' : 'Update'}
      </button>
      <button
        type="button"
        onClick={() => {
          setVisible(false);
          setNeedRefresh(false);
        }}
        aria-label="Dismiss"
        style={{
          background: 'transparent',
          border: 'none',
          color: '#64748b',
          fontSize: 14,
          cursor: 'pointer',
          padding: 2,
        }}
      >
        ✕
      </button>
    </div>
  );
}
