/**
 * "By topics" — the third exam type, as a modal launched from Step 1.
 *
 * Two things make this different from picking a past paper:
 *
 *   - the unit is a **topic**, not a sitting, so the learner chooses which
 *     ground to cover and how many items to sit;
 *   - the paper is **drawn at random** from the chosen topics each time, so the
 *     same drill is not the same questions twice.
 *
 * The size of the drill is a *quota* per topic rather than one number for the
 * whole paper: a learner may want all of Algebra but only a dozen Trigonometry
 * items. One default covers every chosen topic, and any topic can be pinned to
 * its own count — or to "All", meaning everything the bank holds for it.
 *
 * Access: locked by default. `readTopicLock()` reads the admin's flag from
 * `app_config/topic_exams`; the admin always sees the entry, everyone else sees
 * it only once it has been unlocked. As noted in topicLock.ts this gates
 * visibility, not secrecy — the items ship in the bundle.
 */
import { useEffect, useMemo, useState } from 'react';
import { X, Shuffle, Lock, CheckCircle2, Minus, Plus, RotateCcw } from 'lucide-react';
import {
  TOPICS,
  TOPIC_SUBJECTS,
  topicCount,
  pickTopicQuestions,
  planTopicDrill,
  type TopicQuestion,
  type TopicQuota,
} from '../data/topicBanks';
import { readTopicLock } from '../data/topicLock';
import { useAuth } from '../context/AuthContext';

interface Props {
  onClose: () => void;
  onStart: (questions: TopicQuestion[]) => void;
}

/**
 * One quota: a typed count with −/+ steppers, plus an "All" toggle.
 *
 * The field is deliberately forgiving while it has focus. A half-typed or
 * out-of-range number is kept on screen and simply not committed, so clearing
 * the box to retype it does not snap it to 1, and typing past the ceiling does
 * not rewrite what you are typing. Blur is where out-of-range input is corrected.
 */
function QuotaControl({
  value,
  max,
  onChange,
  label,
  inputId,
  allAsText = false,
}: {
  value: TopicQuota;
  max: number;
  onChange: (v: TopicQuota) => void;
  label: string;
  inputId?: string;
  /** Show the word "All" instead of a number when everything is selected. */
  allAsText?: boolean;
}) {
  const ceiling = Math.max(1, max);
  const isAll = value === 'all';
  const shown = isAll ? ceiling : Math.min(Math.max(1, value), ceiling);
  const [draft, setDraft] = useState(String(shown));

  // Keep the field in step when the value changes from outside this control
  // (the All toggle, a default change, a reset). While the learner is typing an
  // out-of-range value nothing is committed, so this does not fire and fight them.
  useEffect(() => {
    setDraft(String(shown));
  }, [shown]);

  const commit = (v: number) => {
    onChange(Math.min(ceiling, Math.max(1, Math.trunc(v))));
  };

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        aria-label={`One fewer item — ${label}`}
        disabled={!isAll && shown <= 1}
        onClick={() => commit(shown - 1)}
        className="grid h-7 w-7 place-items-center rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-slate-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Minus className="h-3 w-3" />
      </button>

      {isAll && allAsText ? (
        <span className="w-12 text-center font-tech-mono text-sm text-amber-300">All</span>
      ) : (
        <input
          id={inputId}
          type="number"
          inputMode="numeric"
          min={1}
          max={ceiling}
          value={draft}
          disabled={isAll}
          aria-label={label}
          onChange={(e) => {
            const raw = e.target.value;
            setDraft(raw);
            const v = Number(raw);
            if (raw.trim() !== '' && Number.isFinite(v) && v >= 1 && v <= ceiling) commit(v);
          }}
          onBlur={() => {
            const v = Number(draft);
            const next = draft.trim() === '' || !Number.isFinite(v) ? shown : v;
            commit(next);
            setDraft(String(Math.min(ceiling, Math.max(1, Math.trunc(next)))));
          }}
          className="w-12 rounded-lg border border-slate-700 bg-slate-950/60 py-1 text-center font-tech-mono text-sm text-white outline-none transition-colors focus:border-amber-500 disabled:opacity-60"
        />
      )}

      <button
        type="button"
        aria-label={`One more item — ${label}`}
        disabled={!isAll && shown >= ceiling}
        onClick={() => commit(shown + 1)}
        className="grid h-7 w-7 place-items-center rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-slate-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        <Plus className="h-3 w-3" />
      </button>

      <button
        type="button"
        aria-pressed={isAll}
        aria-label={`Include every item — ${label}`}
        title={`Every item this topic holds`}
        onClick={() => onChange(isAll ? Math.min(10, ceiling) : 'all')}
        className={
          'h-7 rounded-lg border px-2 text-[10px] font-bold uppercase tracking-wider transition-colors ' +
          (isAll
            ? 'border-amber-500/60 bg-amber-500/15 text-amber-300'
            : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200')
        }
      >
        All
      </button>
    </div>
  );
}

export function TopicExamModal({ onClose, onStart }: Props) {
  const { isAdmin } = useAuth();
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [picked, setPicked] = useState<Set<string>>(() => new Set(['bm-algebra']));
  /** Applies to every chosen topic that has no entry in `overrides`. */
  const [defaultQuota, setDefaultQuota] = useState<TopicQuota>(10);
  /** Topics pinned away from the default. `'all'` means the whole topic. */
  const [overrides, setOverrides] = useState<Record<string, TopicQuota>>({});

  useEffect(() => {
    let alive = true;
    void readTopicLock().then((l) => {
      if (alive) {
        setUnlocked(l.unlocked);
        setChecked(true);
      }
    });
    return () => {
      alive = false;
    };
  }, []);

  const allowed = isAdmin || unlocked;
  const chosen = useMemo(() => TOPICS.filter((t) => picked.has(t.id)), [picked]);
  const { rows, draw, available: total } = planTopicDrill(
    chosen.map((t) => t.id),
    defaultQuota,
    overrides
  );
  // The default control steps within the richest topic in the bank, so it stays
  // usable before anything is picked; each row still clamps to its own ceiling.
  const widest = TOPICS.reduce((a, t) => Math.max(a, topicCount(t.id)), 0);

  const toggle = (id: string) => {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const resetTopic = (id: string) => {
    setOverrides((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const start = () => {
    const quotas: Record<string, TopicQuota> = {};
    for (const r of rows) quotas[r.topicId] = r.quota;
    const qs = pickTopicQuestions(quotas);
    if (qs.length) onStart(qs);
  };

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl max-h-[88vh] overflow-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="flex items-start justify-between gap-4 p-5 border-b border-slate-800">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
              By topics
            </div>
            <h2 className="text-lg font-bold text-white leading-tight">Drill by subject matter</h2>
            <p className="text-xs text-slate-400 mt-1">
              Pick the topics you want and how many items each — a number of your own, or every item
              the topic holds. The paper is drawn at random.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!allowed ? (
          <div className="p-6 flex items-start gap-3 text-sm text-slate-300">
            <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-white">Not open yet</div>
              <p className="text-slate-400 mt-1">
                By-topic drills are still being prepared. The administrator can open them from the
                admin panel.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="p-5 space-y-4">
              {TOPIC_SUBJECTS.map((sub) => {
                const list = TOPICS.filter((t) => t.subject === sub.id);
                return (
                  <div key={sub.id}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        {sub.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-tech-mono">{sub.blurb}</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {list.map((t) => {
                        const n = topicCount(t.id);
                        const on = picked.has(t.id);
                        const empty = n === 0;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            disabled={empty}
                            onClick={() => toggle(t.id)}
                            className={
                              'flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs font-semibold transition-all ' +
                              (empty
                                ? 'border-slate-800 bg-slate-950/40 text-slate-600 cursor-not-allowed'
                                : on
                                  ? 'border-amber-500/60 bg-amber-500/15 text-amber-200'
                                  : 'border-slate-800 bg-slate-950/50 text-slate-300 hover:border-slate-700')
                            }
                            title={empty ? 'No items transcribed yet' : `${n} items available`}
                          >
                            {on && !empty ? (
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            ) : (
                              <span className="w-3.5 h-3.5 rounded-full border border-current shrink-0" />
                            )}
                            <span className="flex-1 min-w-0 truncate">{t.name}</span>
                            <span className="font-tech-mono text-[10px] opacity-70">{n}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="px-5 pb-5 space-y-3 border-t border-slate-800 pt-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-300">Items per topic</div>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Applies to every chosen topic unless overridden below.
                  </p>
                </div>
                <QuotaControl
                  inputId="per-topic-default"
                  value={defaultQuota}
                  max={widest}
                  onChange={setDefaultQuota}
                  label="default items per topic"
                  allAsText
                />
              </div>

              {rows.length > 0 && (
                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-2 space-y-1">
                  <div className="flex items-baseline justify-between px-1 pb-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                      Per topic
                    </span>
                    <span className="text-[10px] text-slate-600">step away from the default</span>
                  </div>
                  {rows.map((r) => (
                    <div key={r.topicId} className="flex items-center gap-2 px-1 py-0.5">
                      <span className="flex-1 min-w-0 truncate text-xs text-slate-300">
                        {r.name}
                      </span>
                      <QuotaControl
                        value={r.quota}
                        max={r.available}
                        onChange={(v) =>
                          setOverrides((prev) => ({ ...prev, [r.topicId]: v }))
                        }
                        label={`items for ${r.name}`}
                      />
                      <span
                        className="w-14 shrink-0 text-right font-tech-mono text-[10px] text-slate-500"
                        title={`${r.available} items in this topic`}
                      >
                        of {r.available}
                      </span>
                      <button
                        type="button"
                        onClick={() => resetTopic(r.topicId)}
                        disabled={!r.overridden}
                        title="Follow the default again"
                        aria-label={`Reset ${r.name} to the default`}
                        className={
                          'shrink-0 rounded-md p-1 text-slate-500 transition-colors hover:bg-slate-800 hover:text-white ' +
                          (r.overridden ? '' : 'invisible')
                        }
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  {chosen.length === 0
                    ? 'Pick at least one topic'
                    : `${chosen.length} topic${chosen.length > 1 ? 's' : ''} · ${draw} of ${total} items drawn`}
                </span>
                <button
                  type="button"
                  onClick={start}
                  disabled={!checked || chosen.length === 0 || draw === 0}
                  className="flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed px-4 py-2 text-xs font-bold text-slate-950 transition-colors"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  Start by topics
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
