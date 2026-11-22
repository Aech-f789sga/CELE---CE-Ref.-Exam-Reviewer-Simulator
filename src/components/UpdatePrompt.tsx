/**
 * "A new version is available" — and what is in it.
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
 *
 * ## Why the notes are fetched, not just read from the bundle
 *
 * Asking someone to reload a half-finished drill on trust is a poor trade, so
 * the prompt names the changes. The subtlety is *which* changes: this component
 * runs in the stale build, whose compiled copy of the notes stops at its own
 * release. So when the prompt appears it also re-fetches `changelog.json` from
 * the deployment that the waiting worker came from, and shows that list —
 * the changes actually arriving, not the ones already here. If the fetch fails
 * (offline, or a cache that ignores the query string) the compiled list stands
 * in, one release behind at worst.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { ArrowUpCircle, X } from 'lucide-react';
import {
  CHANGE_KIND_LABEL,
  RELEASES,
  fetchReleases,
  type ChangeKind,
  type Release,
} from '../data/changelog';

const POLL_MS = 30 * 60 * 1000;

/** How many bullets fit before the card stops being a glance. */
const PREVIEW_COUNT = 3;

const DOT: Record<ChangeKind, string> = {
  new: 'bg-emerald-400',
  improved: 'bg-sky-400',
  fixed: 'bg-rose-400',
  content: 'bg-amber-400',
};

interface Props {
  /** Opens the full history. The prompt only has room for the headline. */
  onOpenChangelog?: () => void;
}

export function UpdatePrompt({ onOpenChangelog }: Props) {
  const [visible, setVisible] = useState(false);
  const [busy, setBusy] = useState(false);
  const [releases, setReleases] = useState<Release[]>(RELEASES);
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

  // Name the build that is about to land, not the one already running.
  useEffect(() => {
    if (!needRefresh) return;
    let cancelled = false;
    void fetchReleases().then((list) => {
      if (!cancelled) setReleases(list);
    });
    return () => {
      cancelled = true;
    };
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

  const latest = releases[0];
  const preview = latest?.changes.slice(0, PREVIEW_COUNT) ?? [];
  const hidden = Math.max(0, (latest?.changes.length ?? 0) - preview.length);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed left-1/2 bottom-4 z-[90] w-[min(94vw,32rem)] -translate-x-1/2 rounded-2xl border border-slate-700 bg-slate-900/98 p-3.5 text-slate-100 shadow-[0_14px_40px_rgba(2,6,23,0.6)] backdrop-blur-sm"
    >
      <div className="flex items-start gap-2.5">
        <ArrowUpCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-[13px] font-semibold text-white">Update ready</span>
            {latest && (
              <span className="font-tech-mono text-[10.5px] text-slate-400">v{latest.version}</span>
            )}
          </div>
          {latest && (
            <p className="mt-0.5 text-[12px] font-medium leading-snug text-amber-200/90">
              {latest.title}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
            setNeedRefresh(false);
          }}
          aria-label="Dismiss"
          className="-mt-0.5 shrink-0 rounded p-1 text-slate-500 transition-colors hover:text-slate-300 cursor-pointer"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {preview.length > 0 && (
        <ul className="mt-2 space-y-1 pl-[1.6rem]">
          {preview.map((change, i) => (
            <li key={i} className="flex items-start gap-1.5 text-[11.5px] leading-relaxed text-slate-300">
              <span
                className={`mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full ${DOT[change.kind]}`}
                aria-hidden="true"
              />
              <span className="min-w-0">
                <span className="sr-only">{CHANGE_KIND_LABEL[change.kind]}: </span>
                {change.text}
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-2.5 flex flex-wrap items-center gap-2 pl-[1.6rem]">
        {onOpenChangelog && (
          <button
            type="button"
            /*
             * The prompt stays put underneath: the panel is a read, not a
             * decision, and hiding the Update button while the learner reads
             * the notes would leave them with no way to take the build.
             */
            onClick={onOpenChangelog}
            className="text-[11px] font-semibold text-amber-300 underline decoration-amber-500/40 underline-offset-2 transition-colors hover:text-amber-200 cursor-pointer"
          >
            {hidden > 0 ? `See all ${latest.changes.length} changes` : 'See all changes'}
          </button>
        )}
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={later}
            disabled={busy}
            className="rounded-lg border border-slate-700 px-2.5 py-1.5 text-[11.5px] font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:text-white disabled:opacity-60 cursor-pointer"
          >
            Later
          </button>
          <button
            type="button"
            onClick={apply}
            disabled={busy}
            className="rounded-lg border border-amber-500/60 bg-amber-500 px-3 py-1.5 text-[11.5px] font-bold text-amber-950 transition-colors hover:bg-amber-400 disabled:opacity-70 cursor-pointer"
          >
            {busy ? 'Updating…' : 'Update now'}
          </button>
        </div>
      </div>
    </div>
  );
}
