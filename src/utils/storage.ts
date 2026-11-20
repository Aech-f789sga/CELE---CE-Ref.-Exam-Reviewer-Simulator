/**
 * Storage and state persistence manager for CE Board Exam Attempts & Paused Sessions.
 */

import {
  ExamAttempt,
  PausedExamSession,
  PairedCycle,
  SubjectArea,
  ExamMonth,
  ReferenceSource,
} from '../types/exam';
import { buildSampleAttempts, isSampleAttempt } from '../data/sampleAttempts';

const ATTEMPTS_STORAGE_KEY = 'ce_board_attempts_v1';
const PAUSED_SESSIONS_STORAGE_KEY = 'ce_board_paused_sessions_v1';

/**
 * Paused sessions are keyed by sitting *and* review reference, because the same
 * sitting can exist in both references (PSAD November 2025 is in Gillesania and
 * Besavilla) and they are completely different papers. The Gillesania key keeps
 * its historical shape so existing saved sessions still resolve.
 */
export function getSessionKey(
  subject: string,
  year: number | string,
  month: string,
  source: ReferenceSource = 'Gillesania'
): string {
  const base = `paused-${subject}-${year}-${month}`;
  return source === 'Besavilla' ? `${base}-besa` : base;
}

/**
 * Base id used for the exam scratchpad document and its per-page storage keys.
 * The Gillesania form is unchanged so existing rough sheets keep resolving;
 * Besavilla papers get their own namespace because PSAD November 2025 exists in
 * both references.
 */
export function getExamStorageBase(
  subject: SubjectArea | string,
  year: number,
  month: ExamMonth | string,
  source: ReferenceSource = 'Gillesania'
): string {
  return `exam_${subject}_${year}_${month}${source === 'Besavilla' ? '_besa' : ''}`;
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
    /*
     * A real sitting retires the demonstration data.
     *
     * The two cannot coexist honestly. Cycles are paired by position within
     * each subject, so a demo HPGE sitting would be paired with a real PSAD one
     * and the composite on that card would describe nobody; readiness reads the
     * latest sitting per area, so a generated paper could outrank a real one.
     * Either the page shows a demonstration or it shows the learner's record,
     * and a paper of their own is the moment the demonstration stops being
     * useful. It is one click to load again.
     */
    const current = getStoredAttempts().filter((a) => !isSampleAttempt(a));
    // Count how many attempts for this subject already exist
    const subjectAttempts = current.filter((a) => a.subject === attempt.subject);
    const attemptWithIndex: ExamAttempt = {
      ...attempt,
      /*
       * Always the position in the subject, never the caller's value. The engine
       * passes a placeholder `1` here and leaves the numbering to this function,
       * so trusting the field meant every sitting was filed as "Attempt #1" —
       * visible in the log and meaningless in the paired-cycle table.
       */
      attemptIndexInSubject: subjectAttempts.length + 1,
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

/** Write the whole ledger and tell every listener. Newest first, like `saveAttempt`. */
function writeAttempts(attempts: ExamAttempt[]): ExamAttempt[] {
  try {
    localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(attempts));
    window.dispatchEvent(new CustomEvent('ce_board_attempts_updated'));
  } catch (e) {
    console.error('Failed to write exam attempts:', e);
  }
  return attempts;
}

/**
 * Add the demonstration sittings alongside whatever is already recorded.
 *
 * Adding rather than replacing is deliberate: a learner who has one real sitting
 * and wants to see what the panel grows into should not have to lose that
 * sitting to look. Any previous demo is dropped first, so pressing the button
 * twice refreshes the dates instead of stacking a second copy.
 *
 * The cycle numbers are shifted past the real sittings. They have to be: a
 * demo's first MSTC paper is the learner's fifth sitting if they already have
 * four, and leaving it at 1 would pair the demo against their own history.
 */
export function seedSampleAttempts(): ExamAttempt[] {
  const real = getStoredAttempts().filter((a) => !isSampleAttempt(a));

  const highest: Record<SubjectArea, number> = { MSTC: 0, HPGE: 0, PSAD: 0 };
  for (const a of real) {
    highest[a.subject] = Math.max(highest[a.subject], a.attemptIndexInSubject ?? 0);
  }

  const samples = buildSampleAttempts().map((a) => ({
    ...a,
    attemptIndexInSubject: a.attemptIndexInSubject + highest[a.subject],
  }));

  const merged = [...real, ...samples].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return writeAttempts(merged);
}

/**
 * Delete the demonstration sittings and keep everything else.
 *
 * Open to every examinee, unlike {@link clearAllAttempts} — this is the undo for
 * a button anyone can press, so it has to be a button anyone can press. It
 * cannot reach a real attempt: the filter is the `isSample` flag, which only the
 * seeder writes.
 */
export function removeSampleAttempts(): ExamAttempt[] {
  const kept = getStoredAttempts().filter((a) => !isSampleAttempt(a));
  return writeAttempts(kept);
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
  month: ExamMonth,
  source: ReferenceSource = 'Gillesania'
): PausedExamSession | null {
  const sessions = getAllPausedSessions();
  const found = sessions.find(
    (s) =>
      s.subject === subject &&
      Number(s.year) === Number(year) &&
      s.month === month &&
      (s.source ?? 'Gillesania') === source
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
  month?: ExamMonth,
  source: ReferenceSource = 'Gillesania'
): void {
  try {
    const targetId =
      year !== undefined && month !== undefined
        ? getSessionKey(idOrSubject, year, month, source)
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
          s.month === month &&
          (s.source ?? 'Gillesania') === source
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
