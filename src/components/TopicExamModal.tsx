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
 * Access: locked by default. `readTopicLock()` reads the admin's flag from
 * `app_config/topic_exams`; the admin always sees the entry, everyone else sees
 * it only once it has been unlocked. As noted in topicLock.ts this gates
 * visibility, not secrecy — the items ship in the bundle.
 */
import { useEffect, useMemo, useState } from 'react';
import { X, Shuffle, Lock, CheckCircle2 } from 'lucide-react';
import {
  TOPICS,
  TOPIC_SUBJECTS,
  topicCount,
  pickTopicQuestions,
  availableFor,
  type TopicQuestion,
} from '../data/topicBanks';
import { readTopicLock } from '../data/topicLock';
import { useAuth } from '../context/AuthContext';

interface Props {
  onClose: () => void;
  onStart: (questions: TopicQuestion[]) => void;
}

export function TopicExamModal({ onClose, onStart }: Props) {
  const { isAdmin } = useAuth();
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const [picked, setPicked] = useState<Set<string>>(() => new Set(['bm-algebra']));
  const [perTopic, setPerTopic] = useState(10);

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
  const total = availableFor([...picked]);
  const draw = Math.min(perTopic * chosen.length, total);

  const toggle = (id: string) => {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const start = () => {
    const qs = pickTopicQuestions([...picked], perTopic);
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
              Pick the topics you want, choose how many items each, and the paper is drawn at random.
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
                <label className="text-xs font-semibold text-slate-300" htmlFor="per-topic">
                  Items per topic
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="per-topic"
                    type="range"
                    min={5}
                    max={25}
                    step={5}
                    value={perTopic}
                    onChange={(e) => setPerTopic(Number(e.target.value))}
                    className="w-40 accent-amber-500"
                  />
                  <span className="font-tech-mono text-sm text-white w-8 text-right">{perTopic}</span>
                </div>
              </div>
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
