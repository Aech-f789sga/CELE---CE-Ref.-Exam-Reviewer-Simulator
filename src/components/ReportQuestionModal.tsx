/**
 * "Something is wrong with this item."
 *
 * A defective question is discovered in the middle of answering it, which is
 * the worst possible moment to send the learner off to a general contact form:
 * they would have to retype the stem from memory, and the admin would have
 * nothing to search on. So the dialog opens over the paper, shows the item back
 * to them as a snapshot, and asks one question — what is wrong with it — plus
 * an optional note.
 *
 * ## What it deliberately does not show
 *
 * The keyed answer. A drill reveals keys as it goes, but a by-area paper hides
 * them until submit, and this dialog has to behave identically in both — an
 * item that "looks wrong" is often the learner mis-remembering a rule, and
 * showing the key here would turn a bug report into an answer check. The
 * snapshot sent to the admin *does* carry `correctAnswer`; it just never appears
 * on the learner's side of the wire.
 *
 * ## Filing is forgiving
 *
 * `submitQuestionReport` keeps a local copy if Firestore refuses the write, so
 * the confirmation is honest: the report is recorded either way, and the panel
 * merges local copies in. Nothing here asks the learner to retry.
 */
import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, CheckCircle2, Flag, Loader2, X } from 'lucide-react';
import type { Question } from '../types/exam';
import { useAuth } from '../context/AuthContext';
import {
  QUESTION_REPORT_REASONS,
  submitQuestionReport,
  type QuestionReportReason,
} from '../services/firebase';
import { MathView } from './MathView';
import { TOPICS } from '../data/topicBanks';

interface Props {
  question: Question;
  /** A drill draws by topic; a paper is a sitting. They file differently. */
  mode: 'by-topic' | 'by-area';
  subject: string;
  year?: number;
  month?: string;
  source?: string;
  onClose: () => void;
}

const MAX_NOTE = 600;

export function ReportQuestionModal({ question, mode, subject, year, month, source, onClose }: Props) {
  const { user, profile } = useAuth();
  const [reason, setReason] = useState<QuestionReportReason | null>(null);
  const [note, setNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [filed, setFiled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !submitting) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [onClose, submitting]);

  const topicName = question.topicId
    ? TOPICS.find((t) => t.id === question.topicId)?.name
    : undefined;

  const handleSubmit = async () => {
    if (!reason || submitting) return;
    setSubmitting(true);
    try {
      await submitQuestionReport({
        questionId: question.id,
        itemNumber: question.number,
        questionText: question.text,
        options: question.options.map((o) => ({ label: o.label, text: o.text })),
        correctAnswer: question.correctAnswer,
        figureCaption: question.figureCaption,
        pageNumber: question.pageNumber,
        category: question.category,
        mode,
        subject,
        year: mode === 'by-area' ? year : undefined,
        month: mode === 'by-area' ? month : undefined,
        source,
        topicId: question.topicId,
        topicName,
        reason,
        note: note.trim().slice(0, MAX_NOTE),
        reporterId: profile?.uid || user?.uid,
        reporterName: profile?.displayName || user?.displayName || user?.email || 'Signed-in reviewee',
        reporterEmail: profile?.email || user?.email,
      });
      setFiled(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[140] flex items-start justify-center overflow-y-auto bg-slate-950/85 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-item-title"
      onClick={(e) => {
        if (e.target === e.currentTarget && !submitting) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl outline-none"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-5 py-4">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/40 bg-rose-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-rose-300">
              <Flag className="h-3 w-3" />
              Report item
            </span>
            <h2 id="report-item-title" className="mt-2 font-arnie text-lg font-bold text-white">
              Item #{question.number}
              {question.category ? (
                <span className="ml-2 text-xs font-normal text-slate-400">{question.category}</span>
              ) : null}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            aria-label="Close"
            className="shrink-0 rounded-lg border border-slate-700 p-1.5 text-slate-400 transition-colors hover:border-slate-600 hover:text-slate-200 disabled:opacity-50 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {filed ? (
          <div className="px-5 py-7 text-center sm:px-6">
            <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-400" />
            <h3 className="mt-3 font-arnie text-base font-bold text-white">Report filed</h3>
            <p className="mx-auto mt-1.5 max-w-sm text-[12px] leading-relaxed text-slate-400">
              The item went to the admin with its text, choices and the keyed answer attached, so
              there is nothing else to describe. You can keep answering — this sitting is untouched.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 rounded-xl border border-amber-500/60 bg-amber-500 px-4 py-2 text-xs font-bold text-amber-950 transition-colors hover:bg-amber-400 cursor-pointer"
            >
              Back to the paper
            </button>
          </div>
        ) : (
          <>
            {/*
              The body scrolls rather than the page, so the reason chips and the
              submit button stay reachable on a short window. The cap has to be
              generous: at 38vh the note field fell entirely below the fold on a
              1000px window and the "Anything to add?" label was sliced in half
              by the scroll edge, which reads as a broken dialog rather than as
              content to scroll to.
            */}
            <div className="max-h-[62vh] overflow-y-auto px-5 py-4 sm:px-6">
              {/* The item as it stands, so the learner can point at the fault. */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <div className="max-h-32 overflow-y-auto pr-1">
                  <MathView text={question.text} className="text-[12px] leading-relaxed text-slate-300" />
                </div>
                <ul className="mt-2.5 grid gap-1 sm:grid-cols-2">
                  {question.options.map((option) => (
                    <li key={option.label} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <span className="font-tech-mono text-[10px] text-slate-500">{option.label}</span>
                      <MathView text={option.text} className="min-w-0" />
                    </li>
                  ))}
                </ul>
                <p className="mt-2 border-t border-slate-800 pt-2 text-[10px] text-slate-500">
                  {mode === 'by-topic'
                    ? `Drill · ${topicName ?? question.category ?? 'By topics'}`
                    : `Sitting · ${subject} ${month ?? ''} ${year ?? ''}`.replace(/\s+/g, ' ')}
                  {question.pageNumber ? ` · Booklet p. ${question.pageNumber}` : ''}
                  {source ? ` · ${source}` : ''}
                </p>
              </div>

              <div className="mt-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  What is wrong with it?
                </span>
                <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {QUESTION_REPORT_REASONS.map((r) => {
                    const on = reason === r;
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setReason(r)}
                        aria-pressed={on}
                        className={`rounded-lg border px-2.5 py-2 text-left text-[11.5px] font-medium transition-colors cursor-pointer ${
                          on
                            ? 'border-amber-500/60 bg-amber-500/15 text-amber-200'
                            : 'border-slate-800 bg-slate-950/50 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {r}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="report-note"
                  className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
                >
                  Anything to add? <span className="font-normal normal-case tracking-normal">(optional)</span>
                </label>
                <textarea
                  id="report-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value.slice(0, MAX_NOTE))}
                  rows={3}
                  placeholder="e.g. the key says C, but 3 kN × 1.2 m gives 3.6 kN·m, which is option B."
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-[12px] text-slate-200 placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none"
                />
                <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    Filed as {profile?.displayName || user?.email || 'your account'}
                  </span>
                  <span className="font-tech-mono">
                    {note.length}/{MAX_NOTE}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-slate-800 px-5 py-3 sm:px-6">
              <button
                type="button"
                onClick={onClose}
                disabled={submitting}
                className="rounded-lg border border-slate-700 px-3 py-2 text-[11.5px] font-semibold text-slate-300 transition-colors hover:border-slate-600 hover:text-white disabled:opacity-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!reason || submitting}
                className={`flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-[11.5px] font-bold transition-colors ${
                  reason && !submitting
                    ? 'border-amber-500/60 bg-amber-500 text-amber-950 hover:bg-amber-400 cursor-pointer'
                    : 'border-slate-800 bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Filing…
                  </>
                ) : (
                  <>
                    <Flag className="h-3.5 w-3.5" />
                    Submit report
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
