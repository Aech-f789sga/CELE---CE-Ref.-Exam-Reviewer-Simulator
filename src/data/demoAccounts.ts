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
 * Everything here is derived from the same fields a real attempt carries, so
 * `computeLeaderboards` treats them identically: no special casing anywhere in
 * the ranking code, which is the only way the numbers stay believable (the GWA
 * and the pass/fail verdict are computed by the real function, not typed in).
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

interface AttemptSpec {
  subject: SubjectArea;
  year: number;
  month: ExamMonth;
  totalQuestions: number;
  score: number;
  timeSpentSeconds: number;
  /** Days before today, so the board never goes stale. */
  daysAgo: number;
  timerMode?: TimerMode;
}

interface DemoAccountSpec {
  uid: string;
  displayName: string;
  email: string;
  joinedDaysAgo: number;
  lastSeenDaysAgo: number;
  attempts: AttemptSpec[];
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
 * Two cycles of the three areas, in the order they were sat.
 *
 * `computeLeaderboards` pairs attempts by position within each subject (the
 * first MSTC with the first HPGE with the first PSAD), so the day offsets have to
 * keep every cycle in the same relative order per subject — which is also how a
 * real reviewee sits them.
 */
const ACCOUNTS: DemoAccountSpec[] = [
  {
    // Clear front-runner: a strong first cycle, then a better one a month later.
    uid: 'demo-maria-santos',
    displayName: 'Maria Kristina Santos',
    email: 'maria.santos@example.com',
    joinedDaysAgo: 148,
    lastSeenDaysAgo: 1,
    attempts: [
      { subject: 'MSTC', year: 2018, month: 'May', totalQuestions: 62, score: 50, timeSpentSeconds: 14280, daysAgo: 45 },
      { subject: 'HPGE', year: 2015, month: 'May', totalQuestions: 82, score: 66, timeSpentSeconds: 11640, daysAgo: 44 },
      { subject: 'PSAD', year: 2019, month: 'May', totalQuestions: 69, score: 56, timeSpentSeconds: 17400, daysAgo: 43 },

      { subject: 'MSTC', year: 2017, month: 'May', totalQuestions: 75, score: 64, timeSpentSeconds: 13140, daysAgo: 12 },
      { subject: 'HPGE', year: 2016, month: 'May', totalQuestions: 50, score: 42, timeSpentSeconds: 9840, daysAgo: 11 },
      { subject: 'PSAD', year: 2022, month: 'May', totalQuestions: 72, score: 62, timeSpentSeconds: 16020, daysAgo: 10 },
    ],
  },
  {
    // One strong cycle, no retake yet.
    uid: 'demo-jomar-dela-cruz',
    displayName: 'Jomar Dela Cruz',
    email: 'jomar.delacruz@example.com',
    joinedDaysAgo: 96,
    lastSeenDaysAgo: 2,
    attempts: [
      { subject: 'MSTC', year: 2025, month: 'April', totalQuestions: 66, score: 55, timeSpentSeconds: 15060, daysAgo: 30 },
      { subject: 'HPGE', year: 2015, month: 'May', totalQuestions: 82, score: 64, timeSpentSeconds: 12300, daysAgo: 29 },
      { subject: 'PSAD', year: 2017, month: 'May', totalQuestions: 66, score: 54, timeSpentSeconds: 18120, daysAgo: 28, timerMode: 'stopwatch' },
    ],
  },
  {
    // Mid-pack: a passable first cycle, then a clear improvement.
    uid: 'demo-angelica-reyes',
    displayName: 'Angelica Reyes',
    email: 'angelica.reyes@example.com',
    joinedDaysAgo: 121,
    lastSeenDaysAgo: 3,
    attempts: [
      { subject: 'MSTC', year: 2018, month: 'May', totalQuestions: 62, score: 44, timeSpentSeconds: 15300, daysAgo: 55 },
      { subject: 'HPGE', year: 2016, month: 'May', totalQuestions: 50, score: 35, timeSpentSeconds: 11220, daysAgo: 54 },
      { subject: 'PSAD', year: 2019, month: 'May', totalQuestions: 69, score: 48, timeSpentSeconds: 18960, daysAgo: 53 },

      { subject: 'MSTC', year: 2017, month: 'May', totalQuestions: 75, score: 57, timeSpentSeconds: 14580, daysAgo: 18 },
      { subject: 'HPGE', year: 2018, month: 'May', totalQuestions: 50, score: 37, timeSpentSeconds: 10500, daysAgo: 17 },
      { subject: 'PSAD', year: 2019, month: 'May', totalQuestions: 69, score: 52, timeSpentSeconds: 17880, daysAgo: 16 },
    ],
  },
  {
    // Scrapes past the 70% GWA line, with one area close to the 50% floor.
    uid: 'demo-reymart-villanueva',
    displayName: 'Reymart Villanueva',
    email: 'reymart.villanueva@example.com',
    joinedDaysAgo: 74,
    lastSeenDaysAgo: 4,
    attempts: [
      { subject: 'MSTC', year: 2018, month: 'May', totalQuestions: 62, score: 45, timeSpentSeconds: 15720, daysAgo: 25 },
      { subject: 'HPGE', year: 2016, month: 'May', totalQuestions: 50, score: 34, timeSpentSeconds: 12840, daysAgo: 24 },
      { subject: 'PSAD', year: 2017, month: 'May', totalQuestions: 66, score: 47, timeSpentSeconds: 19260, daysAgo: 23 },
    ],
  },
  {
    // Improving but still short of the GWA requirement — the board is not all passes.
    uid: 'demo-kyla-mae-bautista',
    displayName: 'Kyla Mae Bautista',
    email: 'kyla.bautista@example.com',
    joinedDaysAgo: 132,
    lastSeenDaysAgo: 6,
    attempts: [
      { subject: 'MSTC', year: 2018, month: 'May', totalQuestions: 62, score: 38, timeSpentSeconds: 16080, daysAgo: 60 },
      { subject: 'HPGE', year: 2016, month: 'May', totalQuestions: 50, score: 30, timeSpentSeconds: 13320, daysAgo: 59 },
      { subject: 'PSAD', year: 2019, month: 'May', totalQuestions: 69, score: 41, timeSpentSeconds: 20100, daysAgo: 58, timerMode: 'stopwatch' },

      { subject: 'MSTC', year: 2017, month: 'May', totalQuestions: 75, score: 50, timeSpentSeconds: 15120, daysAgo: 20 },
      { subject: 'HPGE', year: 2018, month: 'May', totalQuestions: 50, score: 33, timeSpentSeconds: 12060, daysAgo: 19 },
      { subject: 'PSAD', year: 2022, month: 'May', totalQuestions: 72, score: 48, timeSpentSeconds: 19500, daysAgo: 18 },
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

/** The attempts behind those profiles. Ratings are derived, never typed in. */
export const DEMO_ATTEMPTS: CloudExamAttempt[] = ACCOUNTS.flatMap((acc) =>
  acc.attempts.map((spec, index) => {
    const ratingPercentage = Math.round((spec.score / spec.totalQuestions) * 10000) / 100;
    return {
      id: `demo-att-${acc.uid}-${spec.subject}-${index + 1}`,
      userId: acc.uid,
      userEmail: acc.email,
      userDisplayName: acc.displayName,
      subject: spec.subject,
      year: spec.year,
      month: spec.month,
      score: spec.score,
      totalQuestions: spec.totalQuestions,
      ratingPercentage,
      passedArea: ratingPercentage >= 50.0,
      timeSpentSeconds: spec.timeSpentSeconds,
      timerMode: spec.timerMode ?? 'exam_timer',
      completedAt: daysAgoAt(spec.daysAgo, 20, 30),
    } satisfies CloudExamAttempt;
  })
);

/** Ids of the seeded profiles, for any caller that needs to tell them apart. */
export const DEMO_USER_IDS = new Set(DEMO_USERS.map((u) => u.uid));
