/**
 * "You left this one unfinished."
 *
 * Shown once on boot when the engine's autosave slot holds a sitting — a paper
 * or a drill — that was interrupted by a refresh, a closed tab or a killed app.
 *
 * The choice is offered rather than assumed, in both directions: silently
 * resuming would hijack a learner who came back to do something else, and
 * silently discarding would throw away answers they may have spent an hour on.
 * So the sitting is described — what it was, how far it got, how much time is
 * left — and the learner decides.
 *
 * The one case that cannot be resumed is a paper whose questions no longer
 * resolve (the bank was edited between the save and the reload). Resuming then
 * would silently score a *different* paper, so the prompt says so and offers
 * only a fresh start.
 */
import { Clock, AlertTriangle, PlayCircle, RotateCcw, BookmarkCheck } from 'lucide-react';
import {
  liveSessionLabel,
  liveSessionProgress,
  resumeElapsed,
  resumeRemaining,
  type LiveSession,
} from '../data/liveSession';

interface Props {
  session: LiveSession;
  /** False when the paper no longer resolves and only a fresh start makes sense. */
  canResume: boolean;
  onResume: () => void;
  /** Discard the sitting and start over. */
  onDiscard: () => void;
  /** Hide the prompt but keep the sitting for the next load. */
  onLater: () => void;
}

/** "2h 15m" / "43m" / "18s" — a span, not a stopwatch reading. */
function formatSpan(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  if (s >= 3600) return `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m`;
  if (s >= 60) return `${Math.floor(s / 60)}m`;
  return `${s}s`;
}

function savedAtLabel(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 'earlier';
  return d.toLocaleString([], {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function ResumeSessionModal({ session, canResume, onResume, onDiscard, onLater }: Props) {
  const progress = liveSessionProgress(session);
  const answeredPct = progress.total ? Math.round((progress.answered / progress.total) * 100) : 0;
  const timed = session.timerMode === 'exam_timer';
  const remaining = resumeRemaining(session);
  const elapsed = resumeElapsed(session);
  /** A timed paper whose clock ran out while the tab was closed. */
  const expired = canResume && timed && remaining === 0;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-session-title"
    >
      <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5 min-w-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-300">
                <BookmarkCheck className="w-3 h-3" />
                Unfinished sitting
              </span>
              <h2
                id="resume-session-title"
                className="font-arnie text-lg font-bold leading-tight text-white"
              >
                {liveSessionLabel(session)}
              </h2>
              <p className="text-[11px] text-slate-400">
                Left at {savedAtLabel(session.savedAt)}
              </p>
            </div>
          </div>

          {canResume ? (
            <>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2">
                  <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Question
                  </div>
                  <div className="font-tech-mono text-sm font-bold text-white">
                    {progress.question}
                    <span className="text-slate-500"> / {progress.total}</span>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2">
                  <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Answered
                  </div>
                  <div className="font-tech-mono text-sm font-bold text-emerald-400">
                    {progress.answered}
                    <span className="text-slate-500"> ({answeredPct}%)</span>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2">
                  <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    {timed ? 'Time left' : 'Time on task'}
                  </div>
                  <div
                    className={`font-tech-mono text-sm font-bold ${
                      timed ? 'text-amber-300' : 'text-cyan-300'
                    }`}
                  >
                    {formatSpan(timed ? remaining : elapsed)}
                  </div>
                </div>
              </div>

              <p className="text-[11px] leading-relaxed text-slate-400">
                {expired ? (
                  <>
                    <Clock className="mr-1 inline h-3 w-3 text-rose-400" />
                    The clock ran out while this was closed. Reopening it hands in the answers you
                    had — nothing is lost, but there is no time left to add.
                  </>
                ) : timed ? (
                  <>
                    The clock kept running while this was closed, so the time above is what is
                    actually left. Your answers and flags are exactly as you left them.
                  </>
                ) : (
                  <>
                    The timer was stopped while this was closed — only time actually spent working
                    is counted. Your answers and flags are exactly as you left them.
                  </>
                )}
              </p>
            </>
          ) : (
            <p className="flex items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2.5 text-[11px] leading-relaxed text-amber-200/90">
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
              <span>
                This paper has changed since you started it, so it can no longer be resumed — doing
                so would score a different set of items. Start a fresh one instead.
              </span>
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-800 bg-slate-950/40 p-4">
          {canResume && (
            <button
              type="button"
              onClick={onResume}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold tracking-wide text-slate-950 shadow-md transition-colors hover:bg-amber-400"
            >
              <PlayCircle className="h-4 w-4" />
              <span>{expired ? 'Reopen and hand in' : 'Resume where I left off'}</span>
            </button>
          )}
          <button
            type="button"
            onClick={onDiscard}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-xs font-bold tracking-wide text-slate-300 transition-colors hover:border-rose-500/50 hover:text-white"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Start a new one</span>
          </button>
          <button
            type="button"
            onClick={onLater}
            className="self-center px-3 py-1 text-[11px] text-slate-500 transition-colors hover:text-slate-300"
          >
            Not now — keep it for later
          </button>
        </div>
      </div>
    </div>
  );
}
