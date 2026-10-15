import { ExamAttempt, PairedCycle, SubjectArea, ExamMonth, PausedExamSession } from '../types/exam';

const ATTEMPTS_STORAGE_KEY = 'ce_board_exam_attempts_v1';
const PAUSED_SESSIONS_STORAGE_KEY = 'ce_board_paused_exam_sessions_v1';


export function getStoredAttempts(): ExamAttempt[] {
  try {
    const raw = localStorage.getItem(ATTEMPTS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load exam attempts from storage', e);
    return [];
  }
}

export function saveAttempt(newAttempt: ExamAttempt): ExamAttempt[] {
  const current = getStoredAttempts();
  // Count how many attempts for this subject exist so far
  const subjectAttempts = current.filter((a) => a.subject === newAttempt.subject);
  const updatedAttempt: ExamAttempt = {
    ...newAttempt,
    attemptIndexInSubject: subjectAttempts.length + 1,
  };
  
  const nextList = [updatedAttempt, ...current];
  try {
    localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(nextList));
  } catch (e) {
    console.error('Failed to save attempt to storage', e);
  }
  return nextList;
}

export function clearAllAttempts(): void {
  try {
    localStorage.removeItem(ATTEMPTS_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear attempts', e);
  }
}

/**
 * Calculates Paired Cycles:
 * Groups all Attempt 1 in MSTC, Attempt 1 in HPGE, Attempt 1 in PSAD together into Cycle #1.
 * All Attempt 2 into Cycle #2, and so forth.
 * Formula:
 * GWA = (MSTC% * 0.35) + (HPGE% * 0.30) + (PSAD% * 0.35)
 * Passing requires:
 * 1. GWA >= 70.00%
 * 2. MSTC >= 50.00% AND HPGE >= 50.00% AND PSAD >= 50.00%
 * If ANY subject < 50%, result is FAILED (even if GWA >= 70%).
 */
export function computePairedCycles(attempts: ExamAttempt[]): PairedCycle[] {
  // Separate attempts by subject and sort oldest first (chronological order of attempts)
  const mstcList = attempts
    .filter((a) => a.subject === 'MSTC')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const hpgeList = attempts
    .filter((a) => a.subject === 'HPGE')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const psadList = attempts
    .filter((a) => a.subject === 'PSAD')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const maxAttempts = Math.max(mstcList.length, hpgeList.length, psadList.length, 0);
  if (maxAttempts === 0) return [];

  const cycles: PairedCycle[] = [];

  for (let i = 0; i < maxAttempts; i++) {
    const cycleNum = i + 1;
    const mstc = mstcList[i];
    const hpge = hpgeList[i];
    const psad = psadList[i];

    const isComplete = Boolean(mstc && hpge && psad);

    let compositeRating: number | null = null;
    let isPassed: boolean | null = null;
    let failureReason: string | undefined = undefined;

    if (isComplete && mstc && hpge && psad) {
      const mScore = mstc.ratingPercentage;
      const hScore = hpge.ratingPercentage;
      const pScore = psad.ratingPercentage;

      // 35% MSTC, 30% HPGE, 35% PSAD
      const weightedSum = mScore * 0.35 + hScore * 0.30 + pScore * 0.35;
      compositeRating = Math.round(weightedSum * 100) / 100;

      // Check if any area is below 50%
      const failedAreas: string[] = [];
      if (mScore < 50) failedAreas.push(`MSTC (${mScore.toFixed(1)}% < 50%)`);
      if (hScore < 50) failedAreas.push(`HPGE (${hScore.toFixed(1)}% < 50%)`);
      if (pScore < 50) failedAreas.push(`PSAD (${pScore.toFixed(1)}% < 50%)`);

      if (failedAreas.length > 0) {
        isPassed = false;
        failureReason = `Disqualified: Sub-50% rating in ${failedAreas.join(', ')} (PRC Rule)`;
      } else if (compositeRating >= 70.0) {
        isPassed = true;
      } else {
        isPassed = false;
        failureReason = `Failed: GWA ${compositeRating.toFixed(2)}% is below 70.00% passing threshold`;
      }
    } else {
      // Partial calculation if some subjects completed
      let partialWeight = 0;
      let partialScore = 0;
      if (mstc) {
        partialScore += mstc.ratingPercentage * 0.35;
        partialWeight += 0.35;
      }
      if (hpge) {
        partialScore += hpge.ratingPercentage * 0.30;
        partialWeight += 0.30;
      }
      if (psad) {
        partialScore += psad.ratingPercentage * 0.35;
        partialWeight += 0.35;
      }

      if (partialWeight > 0) {
        compositeRating = Math.round((partialScore / partialWeight) * 100) / 100;
      }
    }

    cycles.push({
      cycleNumber: cycleNum,
      mstcAttempt: mstc,
      hpgeAttempt: hpge,
      psadAttempt: psad,
      isComplete,
      compositeRating,
      isPassed,
      failureReason,
    });
  }

  return cycles;
}

/**
 * Pre-populate realistic sample attempts to demonstrate paired cycle calculations immediately
 */
export function seedSampleAttempts(): ExamAttempt[] {
  const sampleData: ExamAttempt[] = [
    {
      id: 'sample-mstc-1',
      attemptIndexInSubject: 1,
      subject: 'MSTC',
      year: 2024,
      month: 'November',
      date: new Date(Date.now() - 86400000 * 5).toISOString(),
      timeSpentSeconds: 10820,
      timerMode: 'exam_timer',
      isInteractive: false,
      userAnswers: { 'mstc-q1': 'A', 'mstc-q2': 'B', 'mstc-q3': 'B', 'mstc-q4': 'A', 'mstc-q5': 'A', 'mstc-q6': 'A', 'mstc-q7': 'A', 'mstc-q8': 'A', 'mstc-q9': 'A', 'mstc-q10': 'A', 'mstc-q11': 'A', 'mstc-q12': 'A', 'mstc-q13': 'A', 'mstc-q14': 'A', 'mstc-q15': 'A', 'mstc-q16': 'A', 'mstc-q17': 'A', 'mstc-q18': 'B', 'mstc-q19': 'A', 'mstc-q20': 'A' },
      score: 17,
      totalQuestions: 20,
      ratingPercentage: 85.0,
      passedArea: true,
    },
    {
      id: 'sample-hpge-1',
      attemptIndexInSubject: 1,
      subject: 'HPGE',
      year: 2024,
      month: 'November',
      date: new Date(Date.now() - 86400000 * 4).toISOString(),
      timeSpentSeconds: 8420,
      timerMode: 'exam_timer',
      isInteractive: false,
      userAnswers: { 'hpge-q1': 'A', 'hpge-q2': 'A', 'hpge-q3': 'A', 'hpge-q4': 'A' },
      score: 3,
      totalQuestions: 4,
      ratingPercentage: 75.0,
      passedArea: true,
    },
    {
      id: 'sample-psad-1',
      attemptIndexInSubject: 1,
      subject: 'PSAD',
      year: 2024,
      month: 'November',
      date: new Date(Date.now() - 86400000 * 3).toISOString(),
      timeSpentSeconds: 14200,
      timerMode: 'exam_timer',
      isInteractive: false,
      userAnswers: { 'psad-q1': 'A', 'psad-q2': 'A', 'psad-q3': 'A' },
      score: 2,
      totalQuestions: 3,
      ratingPercentage: 66.67,
      passedArea: true,
    },
  ];

  try {
    localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(sampleData));
  } catch (e) {
    console.error('Failed to seed sample attempts', e);
  }
  return sampleData;
}

/**
 * ============================================================================
 * PAUSED EXAM SESSIONS (INTERACTIVE STUDY MODE ONLY)
 * Allows users to pause and continue later in Stopwatch and Untimed modes.
 * ============================================================================
 */

export function getSessionKey(subject: SubjectArea, year: number, month: ExamMonth): string {
  return `${subject}-${year}-${month}`;
}

export function getStoredPausedSessions(): Record<string, PausedExamSession> {
  try {
    const raw = localStorage.getItem(PAUSED_SESSIONS_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load paused exam sessions from storage', e);
    return {};
  }
}

export function getPausedSession(
  subject: SubjectArea,
  year: number,
  month: ExamMonth
): PausedExamSession | null {
  const sessions = getStoredPausedSessions();
  const key = getSessionKey(subject, year, month);
  return sessions[key] || null;
}

export function getAllPausedSessions(): PausedExamSession[] {
  const sessions = getStoredPausedSessions();
  return Object.values(sessions).sort(
    (a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()
  );
}

export function savePausedSession(session: PausedExamSession): void {
  try {
    const sessions = getStoredPausedSessions();
    const key = getSessionKey(session.subject, session.year, session.month);
    sessions[key] = session;
    localStorage.setItem(PAUSED_SESSIONS_STORAGE_KEY, JSON.stringify(sessions));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ce_board_paused_sessions_updated'));
    }
  } catch (e) {
    console.error('Failed to save paused exam session', e);
  }
}

export function deletePausedSession(
  subject: SubjectArea,
  year: number,
  month: ExamMonth
): void {
  try {
    const sessions = getStoredPausedSessions();
    const targetKey = getSessionKey(subject, year, month);
    let modified = false;

    if (sessions[targetKey]) {
      delete sessions[targetKey];
      modified = true;
    }

    // Safety: also scan and remove any session matching subject, year, month (handles string vs number comparisons)
    for (const k of Object.keys(sessions)) {
      const s = sessions[k];
      if (
        s &&
        s.subject === subject &&
        Number(s.year) === Number(year) &&
        s.month === month
      ) {
        delete sessions[k];
        modified = true;
      }
    }

    if (modified) {
      localStorage.setItem(PAUSED_SESSIONS_STORAGE_KEY, JSON.stringify(sessions));
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ce_board_paused_sessions_updated'));
    }
  } catch (e) {
    console.error('Failed to delete paused exam session', e);
  }
}

export function clearAllPausedSessions(): void {
  try {
    localStorage.removeItem(PAUSED_SESSIONS_STORAGE_KEY);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ce_board_paused_sessions_updated'));
    }
  } catch (e) {
    console.error('Failed to clear all paused exam sessions', e);
  }
}

