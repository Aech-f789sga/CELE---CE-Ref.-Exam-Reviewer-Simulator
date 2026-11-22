/**
 * Turning a room's configuration into the actual paper.
 *
 * The config stores an *intent* — "a 20-item drill over these topics", or
 * "some paper from PSAD · Besavilla" — and this resolves it to concrete
 * questions exactly once, when the host presses Start. Every player then reads
 * the resulting ids off the room document, so nobody can draw a different paper
 * by starting at a slightly different moment.
 *
 * ## Why unkeyed topics are excluded
 *
 * A Versus match compares two scores, and a Co-op match compares a team's score
 * against a band. Both need a number, and `summariseScore` returns `null` when
 * every item on the paper is unkeyed. Including Physics — which still has no
 * printed key — would let a host open a room that cannot produce a result at
 * all, so unkeyed topics are filtered out of the picker and out of the surprise
 * draw. The bank knows which ones those are; this reads that flag rather than
 * keeping a second list that could drift.
 */
import type { ExamMonth, Question, ReferenceSource, SubjectArea } from '../types/exam';
import { getQuestionsForExam, hasExamData, ALL_MONTHS, ALL_YEARS } from './questionBankManager';
import { pickTopicQuestions, TOPIC_QUESTIONS, TOPICS, topicCount, type TopicQuota } from './topicBanks';
import { resolveQuestionsById } from './liveSession';
import type { RoomConfig } from './liveRoom';

/** Topics a room may draw from: keyed, and with something in them. */
export function playableTopics(): typeof TOPICS {
  return TOPICS.filter((t) => !t.keyPending && topicCount(t.id) > 0);
}

/** True when this topic cannot be scored, so a room must not use it. */
export function topicIsUnkeyed(topicId: string): boolean {
  const def = TOPICS.find((t) => t.id === topicId);
  return Boolean(def?.keyPending);
}

/** Every paper that actually has questions, for the sitting picker. */
export function availablePapers(
  subject: SubjectArea,
  source: ReferenceSource
): { year: number; month: ExamMonth }[] {
  const out: { year: number; month: ExamMonth }[] = [];
  for (const year of ALL_YEARS) {
    for (const month of ALL_MONTHS) {
      if (hasExamData(subject, year, month, source)) out.push({ year, month });
    }
  }
  return out;
}

/**
 * How many topics a surprise drill covers.
 *
 * Three is the smallest number that still feels random without being a lottery:
 * one topic is just a normal drill with the choice taken away, and five makes
 * a paper so wide that the co-op majority is spread across too few items per
 * topic to matter.
 */
const SURPRISE_TOPIC_COUNT = 3;

function shuffle<T>(items: T[], rng: () => number): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Resolve the config into a paper.
 *
 * Returns an empty array when the configuration cannot produce one — an empty
 * subject, a paper that was removed from the bank — so the caller can refuse to
 * start rather than opening a room on nothing.
 */
export function buildLivePaper(config: RoomConfig, rng: () => number = Math.random): Question[] {
  if (config.kind === 'drill') {
    const pool = playableTopics();
    if (pool.length === 0) return [];

    let chosen: string[];
    if (config.surprise) {
      chosen = shuffle(pool.map((t) => t.id), rng).slice(0, SURPRISE_TOPIC_COUNT);
    } else {
      // Honour the host's order, and drop anything unkeyed that slipped in.
      chosen = config.topicIds.filter((id) => pool.some((t) => t.id === id));
    }
    if (chosen.length === 0) return [];

    const quotas: Record<string, TopicQuota> = {};
    for (const id of chosen) quotas[id] = config.perTopic;

    // No difficulty weighting here: the weight is the *learner's* own rating, and
    // a shared paper has many learners. A uniform draw is the only one that is
    // fair to everyone at the table.
    return pickTopicQuestions(quotas, rng);
  }

  if (config.surprise) {
    const papers = availablePapers(config.subject, config.source);
    if (papers.length === 0) return [];
    const pick = papers[Math.floor(rng() * papers.length)];
    return getQuestionsForExam(config.subject, pick.year, pick.month, config.source);
  }

  return getQuestionsForExam(config.subject, config.year, config.month, config.source);
}

/**
 * Resolve a room's stored ids back into questions.
 *
 * `null` means the bank no longer matches the room — an id that has since been
 * renumbered or removed. That is a real answer, not an error: the caller must
 * refuse to render a *different* paper rather than score answers against one.
 */
export function resolveRoomQuestions(room: {
  questionIds: string[];
  config: Pick<RoomConfig, 'kind' | 'subject' | 'source'>;
}): Question[] | null {
  if (room.config.kind === 'drill') {
    return resolveQuestionsById(room.questionIds, TOPIC_QUESTIONS);
  }
  // A sitting's year and month may have been randomised at start, so the pool is
  // every paper for the chosen area and source rather than the one in the config.
  const pool: Question[] = [];
  for (const p of availablePapers(room.config.subject, room.config.source)) {
    pool.push(...getQuestionsForExam(room.config.subject, p.year, p.month, room.config.source));
  }
  return resolveQuestionsById(room.questionIds, pool);
}

/**
 * How many items a configuration would draw, for the lobby's summary line.
 *
 * Deliberately approximate for a surprise paper: the host has not chosen which
 * one yet, so the honest answer is the size of a typical paper rather than a
 * number that would change the moment they press Start.
 */
export function expectedItemCount(config: RoomConfig): number {
  if (config.kind === 'drill') {
    const topics = config.surprise
      ? playableTopics().slice(0, SURPRISE_TOPIC_COUNT)
      : playableTopics().filter((t) => config.topicIds.includes(t.id));
    return topics.reduce((sum, t) => sum + Math.min(config.perTopic, topicCount(t.id)), 0);
  }
  if (config.surprise) {
    const papers = availablePapers(config.subject, config.source);
    if (papers.length === 0) return 0;
    return getQuestionsForExam(config.subject, papers[0].year, papers[0].month, config.source).length;
  }
  return getQuestionsForExam(config.subject, config.year, config.month, config.source).length;
}
