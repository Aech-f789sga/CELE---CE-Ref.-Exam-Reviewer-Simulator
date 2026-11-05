/**
 * Seeded examinee accounts for the public leaderboards.
 *
 * The roster starts empty on a fresh install, and an empty leaderboard tells a
 * visitor nothing about what the board looks like once it has a population. These
 * five accounts fill it with a plausible spread — a clear front-runner, two
 * solid mid-pack reviewees, one borderline pass, and one who improved between
 * cycles but still fell short — so the Overall and per-area tables read the way
 * they will once real attempts arrive.
 *
 * Each account has sat three full cycles (MSTC, HPGE, PSAD), so every row shows
 * three completed attempts and the retake columns are not empty. The score for
 * each cycle is written down once; the rating, the GWA, the average and the
 * PRC verdict are all derived by the same `computeLeaderboards` the real
 * attempts go through, which is the only way the numbers stay believable.
 *
 * The names are handles, not people. Reviewees sign up with a board-exam pun and
 * a number more often than with their real name, so the seeded rows carry
 * IGN-style handles — `SlabMaster64`, `Rebar_Rush` — in the mix of casing and
 * digits real ones use, rather than invented full names that would read as fake
 * the moment two of them sat next to each other.
 *
 * They are deliberately NOT written to Firestore and NOT merged into
 * `fetchAllUsers`, so the admin's user table — where every row can be renamed,
 * banned or deleted — keeps showing only accounts that actually exist. The merge
 * happens in `LeaderboardView`, behind `SHOW_DEMO_ACCOUNTS`.
 *
 * To remove them: set `SHOW_DEMO_ACCOUNTS` to false, or delete this file and the
 * import in `LeaderboardView`.
 *
 * Scores are quoted against the real item counts of the papers named, so
 * "62 items, 50 correct, 80.65%" is arithmetic a reader can check.
 */

import type { CloudExamAttempt, UserProfile } from '../services/firebase';
import type { ExamMonth, SubjectArea, TimerMode } from '../types/exam';

/** Master switch for the seeded accounts. */
export const SHOW_DEMO_ACCOUNTS = true;

const AREAS: SubjectArea[] = ['MSTC', 'HPGE', 'PSAD'];

interface PaperSpec {
  year: number;
  month: ExamMonth;
  totalQuestions: number;
}

/**
 * One sitting of all three areas. `scores` is what the examinee actually got
 * right on each paper that cycle — everything else about the attempt follows
 * from it.
 */
interface CycleSpec {
  /** Days before today; the three areas are sat on consecutive evenings. */
  daysAgo: number;
  scores: Record<SubjectArea, number>;
}

interface DemoAccountSpec {
  uid: string;
  displayName: string;
  email: string;
  joinedDaysAgo: number;
  lastSeenDaysAgo: number;
  /** One paper per area, retaken across the cycles. */
  papers: Record<SubjectArea, PaperSpec>;
  /** Seconds on the clock in the first cycle; each retake shaves eight minutes. */
  paceSeconds: Record<SubjectArea, number>;
  cycles: CycleSpec[];
}

/**
 * A local date `daysAgo` in the past, at a fixed evening hour.
 *
 * Relative rather than hard-coded dates: a board whose newest attempt is three
 * years old is more conspicuous than an empty one.
 */
function daysAgoAt(daysAgo: number, hour: number, minute: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

/**
 * Three cycles each, oldest first.
 *
 * `computeLeaderboards` pairs attempts by position within each subject (the
 * first MSTC with the first HPGE with the first PSAD), so the day offsets have to
 * keep every cycle in the same relative order per subject — which is also how a
 * real reviewee sits them. Each progression is meant to look like work: a weak
 * opening, a solid middle, and a best cycle that is either a small gain or a
 * plateau, because nobody climbs ten points a month.
 */
const ACCOUNTS: DemoAccountSpec[] = [
  {
    // Clear front-runner: starts strong and keeps tightening.
    uid: 'demo-slab-master-64',
    displayName: 'SlabMaster64',
    email: 'slabmaster64@example.com',
    joinedDaysAgo: 148,
    lastSeenDaysAgo: 1,
    papers: {
      MSTC: { year: 2018, month: 'May', totalQuestions: 62 },
      HPGE: { year: 2015, month: 'May', totalQuestions: 82 },
      PSAD: { year: 2019, month: 'May', totalQuestions: 69 },
    },
    paceSeconds: { MSTC: 15000, HPGE: 11400, PSAD: 17400 },
    cycles: [
      { daysAgo: 70, scores: { MSTC: 48, HPGE: 64, PSAD: 53 } },
      { daysAgo: 40, scores: { MSTC: 51, HPGE: 67, PSAD: 56 } },
      { daysAgo: 9, scores: { MSTC: 53, HPGE: 69, PSAD: 59 } },
    ],
  },
  {
    // Strong from the start, gaining a couple of points a cycle rather than leaping.
    uid: 'demo-moment-of-inertia',
    displayName: 'MomentOfInertia',
    email: 'momentofinertia@example.com',
    joinedDaysAgo: 96,
    lastSeenDaysAgo: 2,
    papers: {
      MSTC: { year: 2025, month: 'April', totalQuestions: 66 },
      HPGE: { year: 2015, month: 'May', totalQuestions: 82 },
      PSAD: { year: 2017, month: 'May', totalQuestions: 66 },
    },
    paceSeconds: { MSTC: 16200, HPGE: 12600, PSAD: 19200 },
    cycles: [
      { daysAgo: 58, scores: { MSTC: 51, HPGE: 60, PSAD: 49 } },
      { daysAgo: 34, scores: { MSTC: 54, HPGE: 63, PSAD: 52 } },
      { daysAgo: 12, scores: { MSTC: 55, HPGE: 64, PSAD: 54 } },
    ],
  },
  {
    // Mid-pack: a rough opening, then steady gains that clear the passing line.
    uid: 'demo-rebar-rush',
    displayName: 'Rebar_Rush',
    email: 'rebar_rush@example.com',
    joinedDaysAgo: 121,
    lastSeenDaysAgo: 3,
    papers: {
      MSTC: { year: 2018, month: 'May', totalQuestions: 62 },
      HPGE: { year: 2016, month: 'May', totalQuestions: 50 },
      PSAD: { year: 2019, month: 'May', totalQuestions: 69 },
    },
    paceSeconds: { MSTC: 16800, HPGE: 13200, PSAD: 20400 },
    cycles: [
      { daysAgo: 76, scores: { MSTC: 39, HPGE: 31, PSAD: 43 } },
      { daysAgo: 46, scores: { MSTC: 43, HPGE: 34, PSAD: 47 } },
      { daysAgo: 15, scores: { MSTC: 47, HPGE: 37, PSAD: 52 } },
    ],
  },
  {
    // Scrapes past the 70% GWA line, with one area close to the 50% floor.
    uid: 'demo-cantilever-kid',
    displayName: 'CantileverKid',
    email: 'cantileverkid@example.com',
    joinedDaysAgo: 74,
    lastSeenDaysAgo: 4,
    papers: {
      MSTC: { year: 2018, month: 'May', totalQuestions: 62 },
      HPGE: { year: 2016, month: 'May', totalQuestions: 50 },
      PSAD: { year: 2017, month: 'May', totalQuestions: 66 },
    },
    paceSeconds: { MSTC: 15900, HPGE: 12900, PSAD: 19800 },
    cycles: [
      { daysAgo: 63, scores: { MSTC: 41, HPGE: 30, PSAD: 42 } },
      { daysAgo: 37, scores: { MSTC: 44, HPGE: 33, PSAD: 45 } },
      { daysAgo: 18, scores: { MSTC: 45, HPGE: 34, PSAD: 47 } },
    ],
  },
  {
    // Improving every cycle but still short of the GWA requirement — the board is not all passes.
    uid: 'demo-soil-slinger-07',
    displayName: 'SoilSlinger07',
    email: 'soilslinger07@example.com',
    joinedDaysAgo: 132,
    lastSeenDaysAgo: 6,
    papers: {
      MSTC: { year: 2017, month: 'May', totalQuestions: 75 },
      HPGE: { year: 2018, month: 'May', totalQuestions: 50 },
      PSAD: { year: 2022, month: 'May', totalQuestions: 72 },
    },
    paceSeconds: { MSTC: 17100, HPGE: 13500, PSAD: 20700 },
    cycles: [
      { daysAgo: 82, scores: { MSTC: 42, HPGE: 26, PSAD: 36 } },
      { daysAgo: 52, scores: { MSTC: 46, HPGE: 29, PSAD: 42 } },
      { daysAgo: 21, scores: { MSTC: 50, HPGE: 33, PSAD: 48 } },
    ],
  },
];

/** Profile rows, shaped exactly like a real one minus the Firestore document. */
export const DEMO_USERS: UserProfile[] = ACCOUNTS.map((acc) => ({
  uid: acc.uid,
  email: acc.email,
  displayName: acc.displayName,
  role: 'user',
  isDemo: true,
  createdAt: daysAgoAt(acc.joinedDaysAgo, 9, 12),
  lastLoginAt: daysAgoAt(acc.lastSeenDaysAgo, 20, 5),
}));

/**
 * Nine attempts per account: three cycles of three areas.
 *
 * Ratings are derived from the score and the paper's real item count, never
 * typed in. The time on the clock shortens a little each retake, which is what
 * makes `bestTimeSpentSeconds` on the per-area board mean something.
 */
export const DEMO_ATTEMPTS: CloudExamAttempt[] = ACCOUNTS.flatMap((acc) =>
  acc.cycles.flatMap((cycle, cycleIndex) =>
    AREAS.map((area, areaIndex) => {
      const paper = acc.papers[area];
      const score = cycle.scores[area];
      const ratingPercentage = Math.round((score / paper.totalQuestions) * 10000) / 100;
      const timerMode: TimerMode = cycleIndex === 0 && area === 'PSAD' ? 'stopwatch' : 'exam_timer';

      return {
        id: `demo-att-${acc.uid}-${area}-${cycleIndex + 1}`,
        userId: acc.uid,
        userEmail: acc.email,
        userDisplayName: acc.displayName,
        subject: area,
        year: paper.year,
        month: paper.month,
        score,
        totalQuestions: paper.totalQuestions,
        ratingPercentage,
        passedArea: ratingPercentage >= 50.0,
        timeSpentSeconds: Math.max(3600, acc.paceSeconds[area] - cycleIndex * 480),
        timerMode,
        // Areas are sat on consecutive evenings inside a cycle, so the per-subject
        // order still matches the cycle order the pairing relies on.
        completedAt: daysAgoAt(cycle.daysAgo - areaIndex, 20, 30),
      } satisfies CloudExamAttempt;
    })
  )
);

/** Ids of the seeded profiles, for any caller that needs to tell them apart. */
export const DEMO_USER_IDS = new Set(DEMO_USERS.map((u) => u.uid));
