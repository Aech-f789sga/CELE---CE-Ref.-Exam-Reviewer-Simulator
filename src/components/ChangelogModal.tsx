/**
 * "What's new" — the full release history.
 *
 * The update prompt has room for a headline and a few bullets; this is where
 * the rest lives, and where a learner who pressed "Later" (or closed the prompt
 * weeks ago) can find out what they have been missing. It reads from
 * `changelog.ts`, so it is the same list the prompt summarises — never a
 * second, drifting copy.
 *
 * Nothing here is interactive beyond closing: this is a record, not a task.
 */
import { useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';
import {
  CHANGE_KIND_LABEL,
  RELEASES,
  formatReleaseDate,
  type ChangeKind,
} from '../data/changelog';

interface Props {
  onClose: () => void;
}

/**
 * One colour per kind, kept together so a new kind cannot be added without
 * deciding how it looks. `content` is amber because it is the one that matters
 * most to a reviewee: it means the question bank itself grew.
 */
const KIND_STYLE: Record<ChangeKind, { chip: string; dot: string }> = {
  new: { chip: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300', dot: 'bg-emerald-400' },
  improved: { chip: 'border-sky-500/40 bg-sky-500/10 text-sky-300', dot: 'bg-sky-400' },
  fixed: { chip: 'border-rose-500/40 bg-rose-500/10 text-rose-300', dot: 'bg-rose-400' },
  content: { chip: 'border-amber-500/40 bg-amber-500/10 text-amber-300', dot: 'bg-amber-400' },
};

export function ChangelogModal({ onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Escape closes, and the panel takes focus so the dialog is reachable without
  // a mouse. The restore is skipped if the opener has since unmounted.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[130] flex items-start justify-center overflow-y-auto p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="changelog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="w-full max-w-2xl my-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden outline-none"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-300">
              <Sparkles className="w-3 h-3" />
              Release notes
            </span>
            <h2 id="changelog-title" className="mt-2 font-arnie text-xl font-bold text-white">
              What&rsquo;s new
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Every change to the reviewer and the question bank, newest first.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close release notes"
            className="shrink-0 rounded-lg border border-slate-700 p-1.5 text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[62vh] overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
          <ol className="space-y-6">
            {RELEASES.map((release, index) => (
              <li key={release.version} className="relative pl-4">
                {/* A spine down the left edge, so the list reads as a timeline
                    rather than as unrelated blocks. */}
                <span className="absolute left-0 top-1.5 bottom-0 w-px bg-slate-800" aria-hidden="true" />
                <span
                  className={`absolute left-0 top-1.5 w-px h-8 ${
                    index === 0 ? 'bg-amber-400' : 'bg-slate-700'
                  }`}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className="font-tech-mono text-[11px] font-bold text-slate-300">
                    v{release.version}
                  </span>
                  <span className="text-[11px] text-slate-500">{formatReleaseDate(release.date)}</span>
                  {index === 0 && (
                    <span className="rounded border border-amber-500/40 bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-amber-300">
                      Latest
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-[13.5px] font-semibold leading-snug text-slate-100">
                  {release.title}
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {release.changes.map((change, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] leading-relaxed text-slate-300">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${KIND_STYLE[change.kind].dot}`}
                        aria-hidden="true"
                      />
                      <span className="min-w-0">
                        <span
                          className={`mr-1.5 rounded border px-1 py-px align-[1px] text-[9px] font-bold uppercase tracking-wider ${
                            KIND_STYLE[change.kind].chip
                          }`}
                        >
                          {CHANGE_KIND_LABEL[change.kind]}
                        </span>
                        {change.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="border-t border-slate-800 px-5 py-3 text-[10.5px] leading-relaxed text-slate-500 sm:px-6">
          The log begins on 20 Nov 2026. Papers, solutions and sittings from before that
          date are unchanged.
        </div>
      </div>
    </div>
  );
}
