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
 *   Statics ....... same series. Keyed: the booklet's printed answer key
 *                   (items 1–176) is encoded in `topicBanksStatics.ts`, so all
 *                   three Statics topics are scored. It carries letters only,
 *                   not worked solutions.
 *   Fluid Mech .... same series, "[FLUID MECHANICS]" practice set, 148 items
 *                   across nine sections. **No answer key yet**, so it carries
 *                   the `keyPending` treatment: the UI refuses to score rather
 *                   than marking every answer wrong. The arithmetic for that
 *                   lives in `grading.ts`; the flag is the only switch.
 *
 * ## Adaptive draws
 *
 * A drill is redrawn every time, so the learner's own easy/mid/hard rating is
 * the only way to steer it: items marked hard come back more often, easy ones
 * less often. The weights and the storage live in `itemDifficulty.ts` and reach
 * the draw through `pickTopicQuestions`'s third argument. With nothing rated,
 * every item carries the same weight and the draw is uniform — exactly the
 * behaviour before ratings existed.
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
import type { Question, SubjectArea } from '../types/exam';
import { BM_ALGEBRA } from './topicBanksBasicMath';
import { BM_TRIG } from './topicBanksTrig';
import { BM_GEOMETRY } from './topicBanksGeometry';
import { CAL_DIFF, CAL_INT, CAL_DE } from './topicBanksCalculus';
import { STAT_FORCES, STAT_EQUIL, STAT_FRAMES } from './topicBanksStatics';
import {
  FLUID_PROPERTIES,
  FLUID_PRESSURE,
  HYDRO_PLANE,
  HYDRO_CURVED,
  BUOYANCY,
  DAM_ANALYSIS,
  METACENTER,
  RIGID_RECTILINEAR,
  RIGID_ROTATIONAL,
} from './topicBanksFluid';

export type TopicSubject = 'BasicMath' | 'Calculus' | 'Statics' | 'FluidMech';

export interface TopicSubjectMeta {
  id: TopicSubject;
  name: string;
  blurb: string;
}

export const TOPIC_SUBJECTS: TopicSubjectMeta[] = [
  { id: 'BasicMath', name: 'Basic Mathematics', blurb: 'Algebra · Trigonometry · Geometry' },
  { id: 'Calculus', name: 'Calculus', blurb: 'Differential · Integral · Differential Equations' },
  { id: 'Statics', name: 'Statics', blurb: 'Forces · Equilibrium · Frames & Trusses' },
  {
    id: 'FluidMech',
    name: 'Fluid Mechanics',
    blurb: 'Properties · Hydrostatics · Buoyancy · Dams · Rigid-body motion',
  },
];

export interface TopicDef {
  id: string;
  subject: TopicSubject;
  name: string;
  /**
   * Which board area the subject matter belongs to: MSTC, HPGE or PSAD.
   *
   * A drill itself is none of the three — it is a practice draw, not a sitting,
   * which is why the engine refuses to stamp an area and a month on it. The
   * *items* still belong somewhere, and that is what analytics needs in order
   * to say "your buoyancy is weak" and mean an HPGE topic. Keeping the mapping
   * here, beside the topics, is what stops it drifting from the bank: a new
   * topic without an area is a type error rather than a silent miscount.
   */
  boardArea: SubjectArea;
  /** True when the booklet prints no key for this topic's items yet. */
  keyPending?: boolean;
}

export const TOPICS: TopicDef[] = [
  { id: 'bm-algebra', subject: 'BasicMath', name: 'Algebra', boardArea: 'MSTC' },
  { id: 'bm-trig', subject: 'BasicMath', name: 'Trigonometry', boardArea: 'MSTC' },
  { id: 'bm-geometry', subject: 'BasicMath', name: 'Geometry', boardArea: 'MSTC' },
  { id: 'cal-diff', subject: 'Calculus', name: 'Differential Calculus', boardArea: 'MSTC' },
  { id: 'cal-int', subject: 'Calculus', name: 'Integral Calculus', boardArea: 'MSTC' },
  { id: 'cal-de', subject: 'Calculus', name: 'Differential Equations', boardArea: 'MSTC' },
  { id: 'stat-forces', subject: 'Statics', name: 'Forces & Resultants', boardArea: 'PSAD' },
  { id: 'stat-equil', subject: 'Statics', name: 'Equilibrium', boardArea: 'PSAD' },
  { id: 'stat-frames', subject: 'Statics', name: 'Frames & Trusses', boardArea: 'PSAD' },
  { id: 'fluid-properties', subject: 'FluidMech', name: 'Fluid Properties', boardArea: 'HPGE', keyPending: true },
  { id: 'fluid-pressure', subject: 'FluidMech', name: 'Pressure', boardArea: 'HPGE', keyPending: true },
  { id: 'hydro-plane', subject: 'FluidMech', name: 'Plane Surfaces', boardArea: 'HPGE', keyPending: true },
  { id: 'hydro-curved', subject: 'FluidMech', name: 'Curved Surfaces', boardArea: 'HPGE', keyPending: true },
  { id: 'buoyancy', subject: 'FluidMech', name: 'Buoyancy', boardArea: 'HPGE', keyPending: true },
  { id: 'dam-analysis', subject: 'FluidMech', name: 'Dam Analysis', boardArea: 'HPGE', keyPending: true },
  { id: 'metacenter', subject: 'FluidMech', name: 'Metacenter', boardArea: 'HPGE', keyPending: true },
  { id: 'rigid-rectilinear', subject: 'FluidMech', name: 'Rigid Body — Linear', boardArea: 'HPGE', keyPending: true },
  { id: 'rigid-rotational', subject: 'FluidMech', name: 'Rigid Body — Rotation', boardArea: 'HPGE', keyPending: true },
];

const TOPIC_DEF_BY_ID = new Map(TOPICS.map((t) => [t.id, t]));

/**
 * The hub's own topic definition, by id.
 *
 * Distinct from `data/topics.ts`'s `topicById`, which answers a different
 * question: that table maps a free-text category onto a board-paper bucket.
 * This one answers "what did the learner actually drill?".
 */
export function topicDefById(id: string): TopicDef | undefined {
  return TOPIC_DEF_BY_ID.get(id);
}

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
  ...FLUID_PROPERTIES,
  ...FLUID_PRESSURE,
  ...HYDRO_PLANE,
  ...HYDRO_CURVED,
  ...BUOYANCY,
  ...DAM_ANALYSIS,
  ...METACENTER,
  ...RIGID_RECTILINEAR,
  ...RIGID_ROTATIONAL,
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
 * Draw `k` items from `pool` without replacement, favouring the heavy ones.
 *
 * Uses the Efraimidis–Spirakis construction: give each item the key
 * `u^(1/w)` for a uniform `u`, keep the `k` largest keys. Each item's chance of
 * landing in the sample is then proportional to its weight, no item can be
 * drawn twice, and equal weights degenerate to a uniform shuffle — so a learner
 * with no ratings gets exactly the old behaviour.
 *
 * `k >= pool.length` returns the whole pool: a quota the topic cannot fill must
 * yield everything it has, and no weighting may shrink that to a subset.
 */
export function weightedSample<T>(
  pool: T[],
  k: number,
  weight: (item: T) => number,
  rng: () => number = Math.random
): T[] {
  if (k <= 0) return [];
  if (k >= pool.length) return [...pool];
  const keyed = pool.map((item) => {
    const w = weight(item);
    // A non-positive or broken weight would make the key meaningless (0^∞ or
    // NaN), so it falls back to 1: still drawable, just not favoured.
    const safe = Number.isFinite(w) && w > 0 ? w : 1;
    return { item, key: Math.pow(rng(), 1 / safe) };
  });
  keyed.sort((a, b) => b.key - a.key);
  return keyed.slice(0, k).map((e) => e.item);
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
 * `weight` biases the draw towards the items the learner found hard (see
 * `itemDifficulty.ts`). It defaults to a constant, which is a uniform draw, so
 * an unrated learner is unaffected and the function stays usable without one.
 *
 * `quotas` is keyed by topic id; iteration follows the key order, so pass it in
 * the order the topics should be drawn.
 */
export function pickTopicQuestions(
  quotas: Record<string, TopicQuota>,
  rng: () => number = Math.random,
  weight: (q: TopicQuestion) => number = () => 1
): TopicQuestion[] {
  const out: TopicQuestion[] = [];
  for (const [id, quota] of Object.entries(quotas)) {
    const pool = TOPIC_QUESTIONS.filter((q) => q.topicId === id);
    out.push(...weightedSample(pool, resolveQuota(id, quota), weight, rng));
  }
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  // renumber so the paper reads 1..n regardless of source numbering
  return out.map((q, i) => ({ ...q, number: i + 1 }));
}
