/**
 * Question Reports — the admin's queue of defective items.
 *
 * A report arrives with a snapshot of the item as the learner saw it: stem,
 * four choices, the keyed answer, the figure caption and the booklet page. That
 * is the whole point of the feature — the admin can judge the item without
 * hunting through the bank for a number that may have moved since.
 *
 * The keyed answer is shown here and nowhere else. In the learner's dialog it is
 * withheld on purpose (see `ReportQuestionModal`); here it is the evidence, and
 * a report that says "the key is wrong" is unreadable without it.
 *
 * Status is a one-way-ish queue rather than a free field: open → reviewing →
 * fixed, with dismissed as the other exit. Reopening is allowed because a "fix"
 * that did not take is a real outcome, and re-filing the same report to say so
 * would lose the history.
 */
import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  ExternalLink,
  EyeOff,
  Flag,
  Loader2,
  RefreshCw,
  Search,
  XCircle,
} from 'lucide-react';
import { MathView } from './MathView';
import {
  updateQuestionReport,
  type QuestionReport,
  type QuestionReportStatus,
} from '../services/firebase';

interface Props {
  reports: QuestionReport[];
  /** Reloads the queue after a status change. */
  onRefresh: () => void | Promise<void>;
  /** Recorded on the report as the person who moved it. */
  reviewerName: string;
}

const STATUS_STYLE: Record<QuestionReportStatus, { label: string; chip: string }> = {
  open: { label: 'Open', chip: 'border-rose-500/40 bg-rose-500/15 text-rose-300' },
  reviewing: { label: 'Reviewing', chip: 'border-amber-500/40 bg-amber-500/15 text-amber-300' },
  fixed: { label: 'Fixed', chip: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300' },
  dismissed: { label: 'Dismissed', chip: 'border-slate-600 bg-slate-800 text-slate-400' },
};

type Filter = 'open' | 'reviewing' | 'fixed' | 'dismissed' | 'all';

const FILTERS: Filter[] = ['open', 'reviewing', 'fixed', 'dismissed', 'all'];

function when(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString([], {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/** Where the learner met the item — a drill names topics, a paper names a sitting. */
function contextLine(r: QuestionReport): string {
  const bits: string[] = [];
  if (r.mode === 'by-topic') {
    bits.push('Drill');
    if (r.topicName) bits.push(r.topicName);
  } else {
    bits.push('Board sitting');
    bits.push(r.subject);
    if (r.month || r.year) bits.push(`${r.month ?? ''} ${r.year ?? ''}`.trim());
  }
  if (r.source) bits.push(r.source);
  if (r.pageNumber) bits.push(`Booklet p. ${r.pageNumber}`);
  return bits.join(' · ');
}

export function AdminQuestionReports({ reports, onRefresh, reviewerName }: Props) {
  const [filter, setFilter] = useState<Filter>('open');
  const [search, setSearch] = useState('');
  const [busyId, setBusyId] = useState<string | null>(null);
  const [noteFor, setNoteFor] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const counts = useMemo(() => {
    const base: Record<Filter, number> = {
      open: 0,
      reviewing: 0,
      fixed: 0,
      dismissed: 0,
      all: reports.length,
    };
    reports.forEach((r) => {
      base[r.status] = (base[r.status] ?? 0) + 1;
    });
    return base;
  }, [reports]);

  const visible = useMemo(() => {
    const term = search.trim().toLowerCase();
    return reports.filter((r) => {
      if (filter !== 'all' && r.status !== filter) return false;
      if (!term) return true;
      return (
        r.questionText.toLowerCase().includes(term) ||
        String(r.itemNumber) === term ||
        (r.topicName ?? '').toLowerCase().includes(term) ||
        (r.category ?? '').toLowerCase().includes(term) ||
        (r.reporterName ?? '').toLowerCase().includes(term) ||
        (r.note ?? '').toLowerCase().includes(term)
      );
    });
  }, [reports, filter, search]);

  const move = async (id: string, status: QuestionReportStatus, adminNote?: string) => {
    setBusyId(id);
    try {
      await updateQuestionReport(id, { status, ...(adminNote ? { adminNote } : {}) }, reviewerName);
      await onRefresh();
      setNoteFor(null);
      setNoteDraft('');
    } finally {
      setBusyId(null);
    }
  };

  const copyId = async (id: string) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1500);
    } catch {
      /* Clipboard refused (insecure context); the id is visible in the card. */
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="flex items-center gap-2 font-arnie text-base font-bold text-white">
            <Flag className="h-4 w-4 text-rose-400" />
            Question Reports
          </h3>
          <p className="mt-0.5 text-[11px] text-slate-400">
            Items flagged from inside a drill or a board sitting, with the item as the learner saw
            it.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void onRefresh()}
          className="flex items-center gap-1.5 rounded-xl border border-slate-700 px-3 py-1.5 text-[11px] font-bold text-slate-300 transition-colors hover:border-slate-600 hover:text-white cursor-pointer"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Refresh
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {FILTERS.map((f) => {
            const on = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold capitalize transition-colors cursor-pointer ${
                  on
                    ? 'border-amber-500/60 bg-amber-500/15 text-amber-200'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200'
                }`}
              >
                {f === 'all' ? 'All' : STATUS_STYLE[f as QuestionReportStatus].label}
                <span className="font-tech-mono text-[10px] opacity-70">{counts[f]}</span>
              </button>
            );
          })}
        </div>

        <div className="relative ml-auto min-w-[12rem] flex-1 sm:max-w-xs">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Item number, text, topic or reporter"
            className="w-full rounded-lg border border-slate-800 bg-slate-950/60 py-1.5 pl-8 pr-2.5 text-[11.5px] text-slate-200 placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
          />
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-10 text-center">
          <ClipboardCheck className="mx-auto h-8 w-8 text-slate-600" />
          <p className="mt-2 text-sm font-semibold text-slate-300">
            {reports.length === 0 ? 'No reports yet' : 'Nothing in this filter'}
          </p>
          <p className="mx-auto mt-1 max-w-sm text-[11.5px] leading-relaxed text-slate-500">
            {reports.length === 0
              ? 'Learners file these from the Report button beside Flag while answering an item. They appear here with the question text attached.'
              : 'Try another status, or clear the search.'}
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {visible.map((r) => {
            const style = STATUS_STYLE[r.status];
            const busy = busyId === r.id;
            const keyed = r.options.find((o) => o.label === r.correctAnswer);
            return (
              <li
                key={r.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${style.chip}`}
                  >
                    {style.label}
                  </span>
                  <span className="rounded-full border border-slate-700 bg-slate-800/60 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-300">
                    {r.reason}
                  </span>
                  <span className="font-tech-mono text-[11px] font-bold text-white">
                    Item #{r.itemNumber}
                  </span>
                  <span className="text-[10.5px] text-slate-500">{contextLine(r)}</span>
                  <span className="ml-auto text-[10px] text-slate-500">{when(r.createdAt)}</span>
                </div>

                <div className="mt-2.5 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <MathView
                    text={r.questionText}
                    className="text-[12px] leading-relaxed text-slate-200"
                  />
                  <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                    {r.options.map((o) => {
                      const isKey = o.label === r.correctAnswer;
                      return (
                        <li
                          key={o.label}
                          className={`flex items-start gap-1.5 rounded px-1 py-0.5 text-[11px] ${
                            isKey ? 'bg-emerald-500/10 text-emerald-200' : 'text-slate-400'
                          }`}
                        >
                          <span className="font-tech-mono text-[10px] opacity-80">{o.label}</span>
                          <MathView text={o.text} className="min-w-0" />
                          {isKey && (
                            <span className="ml-auto shrink-0 rounded border border-emerald-500/40 px-1 text-[8px] font-black uppercase tracking-wider">
                              key
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  {keyed === undefined && (
                    <p className="mt-1 text-[10px] text-amber-400/80">
                      The keyed answer “{r.correctAnswer}” matches none of the choices on file — the
                      item was edited after this report.
                    </p>
                  )}
                </div>

                {r.note && (
                  /* `MathView`, not a plain paragraph: a learner explaining a
                     wrong key almost always writes the arithmetic, and half of
                     them will type it as `$…$`. Rendering it as text leaves the
                     dollar signs in the admin's face. */
                  <MathView
                    text={`“${r.note}”`}
                    className="mt-2 border-l-2 border-slate-700 pl-2.5 text-[11.5px] leading-relaxed text-slate-300"
                  />
                )}

                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-slate-500">
                  <span>
                    Filed by{' '}
                    <strong className="font-semibold text-slate-400">{r.reporterName}</strong>
                    {r.reporterEmail ? ` · ${r.reporterEmail}` : ''}
                  </span>
                  <button
                    type="button"
                    onClick={() => void copyId(r.id)}
                    className="flex items-center gap-1 hover:text-slate-300 cursor-pointer"
                    title={r.id}
                  >
                    <Copy className="h-3 w-3" />
                    {copiedId === r.id ? 'Copied' : 'Report id'}
                  </button>
                  <span className="font-tech-mono opacity-60">{r.questionId}</span>
                </div>

                {r.adminNote && (
                  <p className="mt-2 rounded-lg border border-slate-800 bg-slate-950/40 px-2.5 py-1.5 text-[11px] text-slate-400">
                    <span className="font-bold uppercase tracking-wider text-slate-500">Note: </span>
                    {r.adminNote}
                  </p>
                )}

                {noteFor === r.id ? (
                  <div className="mt-2 flex flex-wrap items-start gap-2">
                    <textarea
                      value={noteDraft}
                      onChange={(e) => setNoteDraft(e.target.value.slice(0, 500))}
                      rows={2}
                      placeholder="What was wrong, and what you changed (kept on the report)."
                      className="min-w-[12rem] flex-1 resize-none rounded-lg border border-slate-800 bg-slate-950/60 px-2.5 py-1.5 text-[11.5px] text-slate-200 placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                    />
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => void move(r.id, 'fixed', noteDraft.trim() || undefined)}
                        className="rounded-lg border border-emerald-500/50 bg-emerald-500/15 px-2.5 py-1.5 text-[11px] font-bold text-emerald-300 hover:bg-emerald-500/25 disabled:opacity-50 cursor-pointer"
                      >
                        {busy ? 'Saving…' : 'Save & mark fixed'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setNoteFor(null);
                          setNoteDraft('');
                        }}
                        className="rounded-lg px-2 py-1.5 text-[11px] text-slate-400 hover:text-white cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                    {r.status !== 'fixed' && (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => {
                          setNoteFor(r.id);
                          setNoteDraft(r.adminNote ?? '');
                        }}
                        className="flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5 text-[11px] font-bold text-emerald-300 transition-colors hover:bg-emerald-500/20 disabled:opacity-50 cursor-pointer"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Mark fixed
                      </button>
                    )}
                    {r.status === 'open' && (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => void move(r.id, 'reviewing')}
                        className="flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-2.5 py-1.5 text-[11px] font-bold text-amber-300 transition-colors hover:bg-amber-500/20 disabled:opacity-50 cursor-pointer"
                      >
                        {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <AlertTriangle className="h-3.5 w-3.5" />}
                        Reviewing
                      </button>
                    )}
                    {r.status !== 'dismissed' ? (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => void move(r.id, 'dismissed')}
                        className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-2.5 py-1.5 text-[11px] font-semibold text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-200 disabled:opacity-50 cursor-pointer"
                      >
                        <XCircle className="h-3.5 w-3.5" />
                        Dismiss
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() => void move(r.id, 'open')}
                        className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-2.5 py-1.5 text-[11px] font-semibold text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-200 disabled:opacity-50 cursor-pointer"
                      >
                        <EyeOff className="h-3.5 w-3.5" />
                        Reopen
                      </button>
                    )}
                    <span className="ml-auto flex items-center gap-1 text-[9.5px] text-slate-600">
                      <ExternalLink className="h-3 w-3" />
                      {r.mode === 'by-topic' ? 'drill' : 'sitting'} · {r.subject}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
