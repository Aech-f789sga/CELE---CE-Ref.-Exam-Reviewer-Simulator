/**
 * "By topics" — the third exam type.
 *
 * The two existing types are whole papers: a sitting (MSTC May 2017) or a
 * solved-problem booklet. This one is organised by subject matter instead, so a
 * learner can drill Algebra alone, or Differential Calculus alone, and choose
 * how many items to sit.
 *
 * ## Sources
 *
 *   Basic Math .... Margallo's Buckling Review Center practice set
 *                   (Algebra, Trigonometry, Geometry). Answer key printed
 *                   separately: items 1–50.
 *   Calculus ...... same series (Differential, Integral, Differential Equations).
 *   Statics ....... same series. **No answer key yet** — items are transcribed
 *                   with `correctAnswer` left as the printed placeholder and
 *                   `keyPending: true` so the UI can refuse to score them
 *                   rather than marking every answer wrong.
 *
 * ## Why `subject` is carried as 'MSTC'
 *
 * `Question.subject` is typed to the three board areas. Topic items are not a
 * board area at all, and widening that union would ripple through
 * `SUBJECT_CONFIGS` and every lookup keyed on it. So the field keeps a legal
 * value for type-safety and the real classification lives in `topicId` and
 * `category`. Nothing in the engine branches on `subject` except cosmetic
 * labelling, which the topic hub overrides.
 */
import type { Question } from '../types/exam';
import { BM_ALGEBRA } from './topicBanksBasicMath';
import { BM_TRIG } from './topicBanksTrig';
import { BM_GEOMETRY } from './topicBanksGeometry';
import { CAL_DIFF, CAL_INT, CAL_DE } from './topicBanksCalculus';
import { STAT_FORCES, STAT_EQUIL, STAT_FRAMES } from './topicBanksStatics';

export type TopicSubject = 'BasicMath' | 'Calculus' | 'Statics';

export interface TopicSubjectMeta {
  id: TopicSubject;
  name: string;
  blurb: string;
}

export const TOPIC_SUBJECTS: TopicSubjectMeta[] = [
  { id: 'BasicMath', name: 'Basic Mathematics', blurb: 'Algebra · Trigonometry · Geometry' },
  { id: 'Calculus', name: 'Calculus', blurb: 'Differential · Integral · Differential Equations' },
  { id: 'Statics', name: 'Statics', blurb: 'Forces · Equilibrium · Frames & Trusses' },
];

export interface TopicDef {
  id: string;
  subject: TopicSubject;
  name: string;
  /** True when the booklet prints no key for this topic's items yet. */
  keyPending?: boolean;
}

export const TOPICS: TopicDef[] = [
  { id: 'bm-algebra', subject: 'BasicMath', name: 'Algebra' },
  { id: 'bm-trig', subject: 'BasicMath', name: 'Trigonometry' },
  { id: 'bm-geometry', subject: 'BasicMath', name: 'Geometry' },
  { id: 'cal-diff', subject: 'Calculus', name: 'Differential Calculus' },
  { id: 'cal-int', subject: 'Calculus', name: 'Integral Calculus' },
  { id: 'cal-de', subject: 'Calculus', name: 'Differential Equations' },
  { id: 'stat-forces', subject: 'Statics', name: 'Forces & Resultants', keyPending: true },
  { id: 'stat-equil', subject: 'Statics', name: 'Equilibrium', keyPending: true },
  { id: 'stat-frames', subject: 'Statics', name: 'Frames & Trusses', keyPending: true },
];

/** A topic item: a normal Question plus the topic it belongs to. */
export interface TopicQuestion extends Question {
  topicId: string;
  /** Set when the source prints no key yet, so scoring must stay off. */
  keyPending?: boolean;
  /**
   * The booklet's "Situation N" that this item hangs off. Items sharing a
   * situation share one figure, so they must stay contiguous and be read
   * together — a paired item is unsolvable on its own.
   */
  situation?: number;
  /** The situation's shared wording, repeated on each of its items. */
  situationText?: string;
}

/**
 * The bank. Each topic lives in its own module so it can be transcribed,
 * reviewed and committed independently; this array is the assembly point.
 */
export const TOPIC_QUESTIONS: TopicQuestion[] = [
  ...BM_ALGEBRA,
  ...BM_TRIG,
  ...BM_GEOMETRY,
  ...CAL_DIFF,
  ...CAL_INT,
  ...CAL_DE,
  ...STAT_FORCES,
  ...STAT_EQUIL,
  ...STAT_FRAMES,
];

/** How many items each topic currently holds. */
export function topicCount(topicId: string): number {
  return TOPIC_QUESTIONS.filter((q) => q.topicId === topicId).length;
}

/** How many items to draw from one topic: an exact count, or everything it holds. */
export type TopicQuota = number | 'all';

/**
 * Resolve a quota against what a topic actually holds.
 *
 * `'all'` is resolved at draw time rather than frozen when the learner picks
 * it, so "everything in Algebra" still means everything after more items are
 * transcribed. A number larger than the pool is capped at the pool — asking for
 * 40 from a 12-item topic sits you on 12 rather than silently borrowing from a
 * neighbour.
 */
export function resolveQuota(topicId: string, quota: TopicQuota): number {
  const have = topicCount(topicId);
  if (quota === 'all') return have;
  const want = Math.floor(quota);
  if (!Number.isFinite(want) || want <= 0) return 0;
  return Math.min(want, have);
}

/** One topic's line in the drill the learner is assembling. */
export interface TopicPlanRow {
  topicId: string;
  name: string;
  /** What was asked for: a count, or the whole topic. */
  quota: TopicQuota;
  /** What will actually be drawn, once the pool is taken into account. */
  count: number;
  /** How many items the topic holds. */
  available: number;
  /** True when this topic departs from the drill-wide default. */
  overridden: boolean;
}

export interface TopicPlan {
  rows: TopicPlanRow[];
  /** Items the drill will contain. */
  draw: number;
  /** Items the chosen topics hold in total. */
  available: number;
}

/**
 * Work out what a by-topic drill will actually contain.
 *
 * One default applies to every chosen topic; a topic that appears in
 * `overrides` steps away from it, either to its own count or to `'all'`. Kept
 * separate from the modal so the arithmetic — default propagation, clamping to
 * the pool, what "all" means — can be exercised without a DOM.
 *
 * `topicIds` is honoured in the order given, and unknown ids are skipped.
 */
export function planTopicDrill(
  topicIds: string[],
  defaultQuota: TopicQuota,
  overrides: Record<string, TopicQuota> = {}
): TopicPlan {
  const rows: TopicPlanRow[] = [];
  for (const id of topicIds) {
    const topic = TOPICS.find((t) => t.id === id);
    if (!topic) continue;
    const overridden = id in overrides;
    const quota = overridden ? overrides[id] : defaultQuota;
    const available = topicCount(id);
    rows.push({
      topicId: id,
      name: topic.name,
      quota,
      count: resolveQuota(id, quota),
      available,
      overridden,
    });
  }
  return {
    rows,
    draw: rows.reduce((a, r) => a + r.count, 0),
    available: rows.reduce((a, r) => a + r.available, 0),
  };
}

/**
 * Randomly draw a quota of items from each chosen topic.
 *
 * Each topic is drawn independently so a thin topic cannot starve a rich one,
 * and the result is shuffled across topics so a paper is not "all Algebra, then
 * all Trigonometry". A topic asked for more than it holds simply contributes
 * everything it has — silently substituting from another topic would
 * misrepresent the drill.
 *
 * `quotas` is keyed by topic id; iteration follows the key order, so pass it in
 * the order the topics should be drawn.
 */
export function pickTopicQuestions(
  quotas: Record<string, TopicQuota>,
  rng: () => number = Math.random
): TopicQuestion[] {
  const out: TopicQuestion[] = [];
  for (const [id, quota] of Object.entries(quotas)) {
    const pool = TOPIC_QUESTIONS.filter((q) => q.topicId === id);
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    out.push(...shuffled.slice(0, resolveQuota(id, quota)));
  }
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  // renumber so the paper reads 1..n regardless of source numbering
  return out.map((q, i) => ({ ...q, number: i + 1 }));
}
