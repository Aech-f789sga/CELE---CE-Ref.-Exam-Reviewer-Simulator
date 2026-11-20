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
 * Access: locked by default. `watchTopicLock()` follows the admin's switch in
 * `app_config/topic_exams`; the admin always sees the entry, everyone else sees
 * it only once it has been unlocked — and if the admin closes the mode while
 * this is already open, the body swaps to a "not open yet" notice rather than
 * letting a drill start. As noted in topicLock.ts this gates visibility, not
 * secrecy — the items ship in the bundle.
 *
 * ## The ledger pane
 *
 * Once the drills are open the modal is two panes: the setup on the left and a
 * ledger on the right, itself split into two columns — drills parked for later,
 * and drills already sat. They live here rather than on the setup screen
 * because a parked drill belongs to this mode and nowhere else: it has no
 * subject, year or month to file it under, so the paused-paper list cannot hold
 * it (see `data/savedDrills.ts`).
 *
 * Resuming does not delete the record here. `handleStartTopicExam` in App drops
 * it after the account check passes, so a signed-out visitor who is refused a
 * start still finds their drill where they left it.
 */
import { useEffect, useMemo, useState } from 'react';
import {
  X,
  Shuffle,
  Lock,
  CheckCircle2,
  Minus,
  Plus,
  RotateCcw,
  BookmarkCheck,
  History,
  Play,
} from 'lucide-react';
import {
  TOPICS,
  TOPIC_SUBJECTS,
  TOPIC_QUESTIONS,
  topicCount,
  topicDefById,
  pickTopicQuestions,
  planTopicDrill,
  type TopicQuestion,
  type TopicQuota,
} from '../data/topicBanks';
import {
  getSavedDrills,
  onSavedDrillsChanged,
  removeSavedDrill,
  resolveSavedDrill,
  savedDrillAnswered,
  savedDrillFullLabel,
  savedDrillLabel,
  type SavedDrill,
} from '../data/savedDrills';
import { getDrillResults } from '../data/drillResults';
import { loadDifficulty, tallyDifficulty, weightOf, type DifficultyMap } from '../data/itemDifficulty';
import { watchTopicLock } from '../data/topicLock';
import { useAuth } from '../context/AuthContext';

/**
 * Which body the modal shows. Pure so the three-way choice — and the way it
 * moves when the admin flips the switch — can be tested without a DOM.
 *
 * `checking` exists because claiming "locked" before the first read lands would
 * be a claim we cannot back, and it would flicker away a moment later. The
 * admin never waits on it: they are allowed regardless of the flag.
 */
export function topicAccessView(args: {
  checked: boolean;
  isAdmin: boolean;
  unlocked: boolean;
}): 'checking' | 'locked' | 'ready' {
  if (!args.checked && !args.isAdmin) return 'checking';
  if (!args.isAdmin && !args.unlocked) return 'locked';
  return 'ready';
}

/** "a" / "a and b" / "a, b and c" — for naming the unkeyed subjects in prose. */
function joinWords(words: string[], last = 'and'): string {
  if (words.length === 0) return '';
  if (words.length === 1) return words[0];
  return `${words.slice(0, -1).join(', ')} ${last} ${words[words.length - 1]}`;
}

/**
 * How long ago something was saved, in the smallest unit that still says
 * something useful. A parked drill is read at a glance — "2h ago" is the whole
 * question ("is this the one from this morning?"), and an exact timestamp is
 * noise in a column this narrow. The tooltip carries the full date.
 */
function agoLabel(iso: string): string {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return 'earlier';
  const mins = Math.floor((Date.now() - t) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(t).toLocaleDateString([], { month: 'short', day: 'numeric' });
}

/** Full timestamp for a tooltip, where there is room for it. */
function exactLabel(iso: string): string {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return 'Unknown time';
  return new Date(t).toLocaleString([], {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * The right-hand ledger: what is parked, and what has been sat.
 *
 * Two columns because they answer two different questions — "what can I go
 * back to?" and "how did the last ones go?" — and a learner scanning for one
 * should not have to read past the other. Both are capped: the store holds at
 * most a dozen parked drills, and the history is the newest slice of a ledger
 * that can hold hundreds.
 */
function DrillLedgerPanel({
  ownerId,
  onResume,
}: {
  ownerId?: string;
  onResume: (drill: SavedDrill) => void;
}) {
  const [parked, setParked] = useState<SavedDrill[]>(() => getSavedDrills(ownerId));
  const [history, setHistory] = useState(() => getDrillResults());
  /**
   * Which parked drill is waiting on a "really discard?" tap. A parked drill is
   * the answers to a paper the learner already sat — one stray click on a 3 mm
   * × should not be able to throw that away, and this panel is too small for a
   * modal on top of a modal.
   */
  const [confirming, setConfirming] = useState<string | null>(null);

  useEffect(() => {
    const refresh = () => {
      setParked(getSavedDrills(ownerId));
      setHistory(getDrillResults());
    };
    refresh();
    const off = onSavedDrillsChanged(refresh);
    // The drill ledger fires its own event when a drill is submitted.
    window.addEventListener('ce_board_drills_updated', refresh);
    return () => {
      off();
      window.removeEventListener('ce_board_drills_updated', refresh);
    };
  }, [ownerId]);

  /** Newest first, capped — the panel is a glance, not an archive. */
  const recent = useMemo(() => [...history].reverse().slice(0, 12), [history]);

  return (
    <div className="space-y-3">
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
          Your drills
        </div>
        <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500">
          Pick up where you stopped, or look back at what you have already sat.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {/* ------------------------------------------------ unfinished */}
        <section className="min-w-0">
          <header className="mb-1.5 flex items-center gap-1.5">
            <BookmarkCheck className="h-3 w-3 shrink-0 text-amber-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
              Unfinished
            </span>
            {parked.length > 0 && (
              <span className="ml-auto rounded bg-amber-500/20 px-1 font-tech-mono text-[9px] font-bold text-amber-300">
                {parked.length}
              </span>
            )}
          </header>

          {parked.length === 0 ? (
            <p className="rounded-lg border border-dashed border-slate-800 px-2 py-3 text-center text-[10px] leading-relaxed text-slate-600">
              Nothing parked. Choose <span className="text-slate-400">Continue Later</span> when
              you leave a drill and it waits here.
            </p>
          ) : (
            <ul className="space-y-1.5">
              {parked.map((drill) => {
                const answered = savedDrillAnswered(drill);
                const pct = drill.totalQuestions
                  ? Math.round((answered / drill.totalQuestions) * 100)
                  : 0;
                return (
                  <li
                    key={drill.id}
                    className="relative rounded-lg border border-amber-500/30 bg-amber-500/10 transition-colors hover:border-amber-500/60"
                  >
                    <button
                      type="button"
                      onClick={() => onResume(drill)}
                      title={`Resume ${savedDrillFullLabel(drill)} — saved ${exactLabel(drill.savedAt)}`}
                      className="block w-full px-2 py-1.5 pr-6 text-left cursor-pointer"
                    >
                      <span className="block truncate text-[11px] font-semibold text-amber-100">
                        {savedDrillLabel(drill)}
                      </span>
                      <span className="mt-0.5 flex items-center justify-between gap-1 font-tech-mono text-[9px] text-amber-300/80">
                        <span>
                          {answered}/{drill.totalQuestions}
                        </span>
                        <span>{agoLabel(drill.savedAt)}</span>
                      </span>
                      <span className="mt-1 block h-1 overflow-hidden rounded-full bg-slate-950/70">
                        <span
                          className="block h-full rounded-full bg-amber-400"
                          style={{ width: `${Math.max(3, pct)}%` }}
                        />
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirming(drill.id)}
                      title="Discard this parked drill"
                      aria-label={`Discard ${savedDrillFullLabel(drill)}`}
                      className="absolute right-1 top-1 rounded p-0.5 text-amber-300/50 transition-colors hover:bg-rose-500/20 hover:text-rose-300 cursor-pointer"
                    >
                      <X className="h-3 w-3" />
                    </button>

                    {confirming === drill.id && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-lg bg-slate-950 px-1">
                        <span className="text-[9px] font-semibold text-slate-300">
                          Discard {answered} answer{answered === 1 ? '' : 's'}?
                        </span>
                        <span className="flex gap-1">
                          <button
                            type="button"
                            onClick={() => {
                              setParked(removeSavedDrill(drill.id, ownerId));
                              setConfirming(null);
                            }}
                            className="rounded bg-rose-500 px-1.5 py-0.5 text-[9px] font-bold text-white transition-colors hover:bg-rose-400 cursor-pointer"
                          >
                            Discard
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirming(null)}
                            className="rounded bg-slate-700 px-1.5 py-0.5 text-[9px] font-semibold text-slate-200 transition-colors hover:bg-slate-600 cursor-pointer"
                          >
                            Keep
                          </button>
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* --------------------------------------------------- history */}
        <section className="min-w-0">
          <header className="mb-1.5 flex items-center gap-1.5">
            <History className="h-3 w-3 shrink-0 text-slate-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
              History
            </span>
            {recent.length > 0 && (
              <span className="ml-auto font-tech-mono text-[9px] text-slate-600">
                {recent.length}
              </span>
            )}
          </header>

          {recent.length === 0 ? (
            <p className="rounded-lg border border-dashed border-slate-800 px-2 py-3 text-center text-[10px] leading-relaxed text-slate-600">
              No drills finished yet. A submitted drill lands here with its score.
            </p>
          ) : (
            <ul className="space-y-1.5">
              {recent.map((row) => {
                const pct = row.scorable
                  ? Math.round((row.correct / row.scorable) * 100)
                  : 0;
                const name = topicDefById(row.topicId)?.name ?? row.topicId;
                return (
                  <li
                    key={row.id}
                    className="rounded-lg border border-slate-800 bg-slate-900/60 px-2 py-1.5"
                    title={`${name} — ${row.correct} of ${row.scorable} — ${exactLabel(row.at)}`}
                  >
                    <div className="truncate text-[11px] font-semibold text-slate-300">{name}</div>
                    <div className="mt-0.5 flex items-center justify-between gap-1 font-tech-mono text-[9px]">
                      <span className="text-slate-500">
                        {row.correct}/{row.scorable}
                      </span>
                      <span className={pct >= 50 ? 'text-emerald-400' : 'text-rose-400'}>
                        {pct}%
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-600">{agoLabel(row.at)}</div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>

      {parked.length > 0 && (
        <p className="flex items-start gap-1.5 rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-1.5 text-[10px] leading-relaxed text-slate-500">
          <Play className="mt-0.5 h-2.5 w-2.5 shrink-0 text-amber-400" />
          <span>
            A parked drill keeps its answers, flags and clock exactly as you left them — the timer
            does not run while it waits.
          </span>
        </p>
      )}
    </div>
  );
}

interface Props {
  onClose: () => void;
  /** `saved` means the drill is being picked up from the parked list. */
  onStart: (questions: TopicQuestion[], saved?: SavedDrill) => void;
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
  const { isAdmin, user, profile } = useAuth();
  /** Whose difficulty ratings steer the draw. */
  const ownerId = profile?.uid || user?.uid;
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [picked, setPicked] = useState<Set<string>>(() => new Set(['bm-algebra']));
  /** Applies to every chosen topic that has no entry in `overrides`. */
  const [defaultQuota, setDefaultQuota] = useState<TopicQuota>(10);
  /** Topics pinned away from the default. `'all'` means the whole topic. */
  const [overrides, setOverrides] = useState<Record<string, TopicQuota>>({});

  useEffect(
    () =>
      watchTopicLock((lock) => {
        setUnlocked(lock.unlocked);
        setChecked(true);
      }),
    []
  );

  const view = topicAccessView({ checked, isAdmin, unlocked });
  const chosen = useMemo(() => TOPICS.filter((t) => picked.has(t.id)), [picked]);

  /**
   * The subjects whose chosen topics print no key yet, in the order the hub
   * lists them. Derived rather than hard-coded: a second unkeyed booklet then
   * reads correctly without touching the notice's wording.
   */
  const pendingSubjects = useMemo(() => {
    const ids = new Set(chosen.filter((t) => t.keyPending).map((t) => t.subject));
    return TOPIC_SUBJECTS.filter((s) => ids.has(s.id)).map((s) => s.name);
  }, [chosen]);
  const { rows, draw, available: total } = planTopicDrill(
    chosen.map((t) => t.id),
    defaultQuota,
    overrides
  );
  // The default control steps within the richest topic in the bank, so it stays
  // usable before anything is picked; each row still clamps to its own ceiling.
  const widest = TOPICS.reduce((a, t) => Math.max(a, topicCount(t.id)), 0);

  /**
   * The learner's own easy/mid/hard ratings, read once when the modal opens.
   * They are what makes a drill adaptive: the draw is weighted by them, so the
   * items marked hard keep coming back and the easy ones step aside.
   */
  const [flags] = useState<DifficultyMap>(() => loadDifficulty(ownerId));

  /** Ratings across the chosen topics only, so the note describes this drill. */
  const rated = useMemo(
    () =>
      tallyDifficulty(
        flags,
        TOPIC_QUESTIONS.filter((q) => picked.has(q.topicId)).map((q) => q.id)
      ),
    [flags, picked]
  );
  const ratedTotal = rated.easy + rated.mid + rated.hard;

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
    // Weighted by the learner's own ratings: hard items lean in, easy lean out.
    const qs = pickTopicQuestions(quotas, Math.random, (q) => weightOf(flags, q.id));
    if (qs.length) onStart(qs);
  };

  /**
   * Pick a parked drill back up.
   *
   * The record is *not* deleted here — `handleStartTopicExam` drops it once the
   * account check has passed. Removing it first would throw the drill away for
   * a signed-out visitor, who is refused by the start handler and sent to the
   * auth modal instead.
   *
   * If the draw no longer resolves (an item was renumbered or removed since it
   * was parked) the record is dropped rather than resumed: resuming a
   * *different* draw would silently mis-score every answer already given.
   */
  const resumeParked = (drill: SavedDrill) => {
    const qs = resolveSavedDrill(drill);
    if (!qs) {
      removeSavedDrill(drill.id, ownerId);
      return;
    }
    onStart(qs, drill);
  };

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-6xl max-h-[88vh] overflow-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="flex items-start justify-between gap-4 p-5 border-b border-slate-800">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">
              By topics
            </div>
            <h2 className="text-lg font-bold text-white leading-tight">Drill by subject matter</h2>
            <p className="text-xs text-slate-400 mt-1">More topics will be added in the future.</p>
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

        {/*
         * Two panes once the drills are open: the setup on the left, the ledger
         * on the right. The ledger is deliberately its own bordered column
         * rather than a strip under the setup — it answers a different question
         * ("what can I go back to?") and sharing a column would make one read
         * like part of the other. Below `lg` it stacks underneath instead.
         */}
        <div className={view === 'ready' ? 'grid lg:grid-cols-[minmax(0,1fr)_24rem]' : ''}>
          <div className="min-w-0">
            {view === 'checking' ? (
              // The admin's flag has not landed yet. Saying "locked" here would be
              // a claim we cannot back, and it would flicker away a moment later.
              <div className="p-6 text-sm text-slate-400">Checking access…</div>
            ) : view === 'locked' ? (
              <div className="p-6 flex items-start gap-3 text-sm text-slate-300">
                <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Locked by the admin</div>
                  <p className="text-slate-400 mt-1">
                    By-topic drills have not been opened yet. When the admin unlocks them this window
                    opens on its own — there is no need to reload.
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
                            title={
                              empty
                                ? 'No items transcribed yet'
                                : `${n} items available${t.keyPending ? ' — answer key not yet encoded, so they will not be scored' : ''}`
                            }
                          >
                            {on && !empty ? (
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            ) : (
                              <span className="w-3.5 h-3.5 rounded-full border border-current shrink-0" />
                            )}
                            <span className="flex-1 min-w-0 truncate">{t.name}</span>
                            {t.keyPending && (
                              <span
                                className="shrink-0 rounded px-1 py-0.5 text-[8px] font-black uppercase tracking-wider text-amber-400/90 border border-amber-500/40"
                                title="Answer key not yet encoded — items open, but nothing is scored"
                              >
                                no key
                              </span>
                            )}
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

              {ratedTotal > 0 && (
                <p className="rounded-lg border border-slate-700/60 bg-slate-950/50 px-2.5 py-2 text-[10px] leading-relaxed text-slate-400">
                  <strong className="font-bold text-slate-200">{ratedTotal}</strong>{' '}
                  of the items you picked are rated — {rated.hard} hard, {rated.mid} mid,{' '}
                  {rated.easy} easy. Hard items are drawn twice as often as mid, easy half as
                  often.
                </p>
              )}

              {chosen.some((t) => t.keyPending) && (
                <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-2 text-[10px] leading-relaxed text-amber-200/90">
                  {pendingSubjects.length === 1
                    ? `The answer key for ${pendingSubjects[0]} has not been encoded yet.`
                    : `The answer keys for ${joinWords(pendingSubjects)} have not been encoded yet.`}{' '}
                  The items open normally and your answers are kept, but nothing from{' '}
                  {joinWords(pendingSubjects, 'or')} is marked right or wrong — your report will say
                  the score is pending until the key is published.
                </p>
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

          {view === 'ready' && (
            <aside className="min-w-0 border-t border-slate-800 bg-slate-950/40 p-4 lg:border-t-0 lg:border-l">
              <DrillLedgerPanel ownerId={ownerId} onResume={resumeParked} />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
