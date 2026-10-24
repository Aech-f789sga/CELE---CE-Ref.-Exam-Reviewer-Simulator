/**
 * Storage and state persistence manager for CE Board Exam Attempts & Paused Sessions.
 */

import {
  ExamAttempt,
  PausedExamSession,
  PairedCycle,
  SubjectArea,
  ExamMonth,
} from '../types/exam';

const ATTEMPTS_STORAGE_KEY = 'ce_board_attempts_v1';
const PAUSED_SESSIONS_STORAGE_KEY = 'ce_board_paused_sessions_v1';

export function getSessionKey(
  subject: string,
  year: number | string,
  month: string
): string {
  return `paused-${subject}-${year}-${month}`;
}

export function getStoredAttempts(): ExamAttempt[] {
  try {
    const raw = localStorage.getItem(ATTEMPTS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Failed to load stored exam attempts:', e);
    return [];
  }
}

export function saveAttempt(attempt: ExamAttempt): ExamAttempt[] {
  try {
    const current = getStoredAttempts();
    // Count how many attempts for this subject already exist
    const subjectAttempts = current.filter((a) => a.subject === attempt.subject);
    const attemptWithIndex: ExamAttempt = {
      ...attempt,
      attemptIndexInSubject: attempt.attemptIndexInSubject || subjectAttempts.length + 1,
    };
    const updated = [attemptWithIndex, ...current];
    localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('ce_board_attempts_updated'));
    return updated;
  } catch (e) {
    console.error('Failed to save exam attempt:', e);
    return getStoredAttempts();
  }
}

export function clearAllAttempts(): void {
  try {
    localStorage.removeItem(ATTEMPTS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('ce_board_attempts_updated'));
  } catch (e) {
    console.error('Failed to clear exam attempts:', e);
  }
}

export function seedSampleAttempts(): ExamAttempt[] {
  const sampleAttempts: ExamAttempt[] = [
    {
      id: 'demo-mstc-1',
      attemptIndexInSubject: 1,
      subject: 'MSTC',
      year: 2024,
      month: 'November',
      date: new Date(Date.now() - 86400000 * 3).toISOString(),
      timeSpentSeconds: 12450,
      timerMode: 'exam_timer',
      isInteractive: true,
      userAnswers: {},
      score: 62,
      totalQuestions: 75,
      ratingPercentage: 82.67,
      passedArea: true,
    },
    {
      id: 'demo-hpge-1',
      attemptIndexInSubject: 1,
      subject: 'HPGE',
      year: 2024,
      month: 'November',
      date: new Date(Date.now() - 86400000 * 2).toISOString(),
      timeSpentSeconds: 10800,
      timerMode: 'exam_timer',
      isInteractive: true,
      userAnswers: {},
      score: 41,
      totalQuestions: 50,
      ratingPercentage: 82.0,
      passedArea: true,
    },
    {
      id: 'demo-psad-1',
      attemptIndexInSubject: 1,
      subject: 'PSAD',
      year: 2024,
      month: 'November',
      date: new Date(Date.now() - 86400000 * 1).toISOString(),
      timeSpentSeconds: 17200,
      timerMode: 'exam_timer',
      isInteractive: true,
      userAnswers: {},
      score: 56,
      totalQuestions: 75,
      ratingPercentage: 74.67,
      passedArea: true,
    },
  ];

  try {
    localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(sampleAttempts));
    window.dispatchEvent(new CustomEvent('ce_board_attempts_updated'));
  } catch (e) {
    console.error('Failed to seed sample attempts:', e);
  }

  return sampleAttempts;
}

export function computePairedCycles(attempts: ExamAttempt[]): PairedCycle[] {
  if (!attempts || attempts.length === 0) return [];

  const mstcList = attempts
    .filter((a) => a.subject === 'MSTC')
    .sort((a, b) => (a.attemptIndexInSubject || 0) - (b.attemptIndexInSubject || 0) || new Date(a.date).getTime() - new Date(b.date).getTime());

  const hpgeList = attempts
    .filter((a) => a.subject === 'HPGE')
    .sort((a, b) => (a.attemptIndexInSubject || 0) - (b.attemptIndexInSubject || 0) || new Date(a.date).getTime() - new Date(b.date).getTime());

  const psadList = attempts
    .filter((a) => a.subject === 'PSAD')
    .sort((a, b) => (a.attemptIndexInSubject || 0) - (b.attemptIndexInSubject || 0) || new Date(a.date).getTime() - new Date(b.date).getTime());

  const maxCycles = Math.max(mstcList.length, hpgeList.length, psadList.length);
  const cycles: PairedCycle[] = [];

  for (let i = 0; i < maxCycles; i++) {
    const cycleNumber = i + 1;
    const mstcAttempt = mstcList[i];
    const hpgeAttempt = hpgeList[i];
    const psadAttempt = psadList[i];
    const isComplete = Boolean(mstcAttempt && hpgeAttempt && psadAttempt);

    let compositeRating: number | null = null;
    let isPassed: boolean | null = null;
    let failureReason: string | undefined = undefined;

    if (isComplete && mstcAttempt && hpgeAttempt && psadAttempt) {
      const calcComposite =
        mstcAttempt.ratingPercentage * 0.35 +
        hpgeAttempt.ratingPercentage * 0.30 +
        psadAttempt.ratingPercentage * 0.35;
      compositeRating = Math.round(calcComposite * 100) / 100;

      const sub50Subjects: string[] = [];
      if (mstcAttempt.ratingPercentage < 50) sub50Subjects.push('MSTC');
      if (hpgeAttempt.ratingPercentage < 50) sub50Subjects.push('HPGE');
      if (psadAttempt.ratingPercentage < 50) sub50Subjects.push('PSAD');

      if (compositeRating >= 70 && sub50Subjects.length === 0) {
        isPassed = true;
      } else {
        isPassed = false;
        if (sub50Subjects.length > 0 && compositeRating < 70) {
          failureReason = `Composite rating (${compositeRating.toFixed(2)}% < 70%) and below 50% minimum in ${sub50Subjects.join(', ')}.`;
        } else if (sub50Subjects.length > 0) {
          failureReason = `Failed to achieve 50.00% minimum passing grade in ${sub50Subjects.join(', ')}.`;
        } else {
          failureReason = `Composite rating (${compositeRating.toFixed(2)}%) is below the required 70.00% PRC standard.`;
        }
      }
    }

    cycles.push({
      cycleNumber,
      mstcAttempt,
      hpgeAttempt,
      psadAttempt,
      isComplete,
      compositeRating,
      isPassed,
      failureReason,
    });
  }

  return cycles;
}

export function getAllPausedSessions(): PausedExamSession[] {
  try {
    const raw = localStorage.getItem(PAUSED_SESSIONS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Failed to load paused exam sessions:', e);
    return [];
  }
}

export function getPausedSession(
  subject: SubjectArea,
  year: number,
  month: ExamMonth
): PausedExamSession | null {
  const sessions = getAllPausedSessions();
  const found = sessions.find(
    (s) => s.subject === subject && Number(s.year) === Number(year) && s.month === month
  );
  return found || null;
}

export function savePausedSession(session: PausedExamSession): void {
  try {
    const sessions = getAllPausedSessions();
    const filtered = sessions.filter((s) => s.id !== session.id);
    const updated = [session, ...filtered];
    localStorage.setItem(PAUSED_SESSIONS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('ce_board_paused_sessions_updated'));
  } catch (e) {
    console.error('Failed to save paused exam session:', e);
  }
}

export function deletePausedSession(
  idOrSubject: string | SubjectArea,
  year?: number,
  month?: ExamMonth
): void {
  try {
    const targetId =
      year !== undefined && month !== undefined
        ? getSessionKey(idOrSubject, year, month)
        : idOrSubject;

    const sessions = getAllPausedSessions();
    const updated = sessions.filter(
      (s) =>
        s.id !== targetId &&
        !(
          year !== undefined &&
          month !== undefined &&
          s.subject === idOrSubject &&
          Number(s.year) === Number(year) &&
          s.month === month
        )
    );
    localStorage.setItem(PAUSED_SESSIONS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('ce_board_paused_sessions_updated'));
  } catch (e) {
    console.error('Failed to delete paused exam session:', e);
  }
}

export function clearAllPausedSessions(): void {
  try {
    localStorage.removeItem(PAUSED_SESSIONS_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('ce_board_paused_sessions_updated'));
  } catch (e) {
    console.error('Failed to clear paused sessions:', e);
  }
}
