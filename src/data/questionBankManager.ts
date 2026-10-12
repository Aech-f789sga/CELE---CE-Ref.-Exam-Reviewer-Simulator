import { Question, SubjectArea, ExamMonth } from '../types/exam';
import { MSTC_QUESTIONS } from './questionBanks/mstcQuestions';
import { HPGE_QUESTIONS } from './questionBanks/hpgeQuestions';
import { PSAD_QUESTIONS } from './questionBanks/psadQuestions';
import { MSTC_NOVEMBER_2024_QUESTIONS } from './questionBanks/mstc/nov2024Questions';
import { HPGE_NOVEMBER_2024_QUESTIONS } from './questionBanks/hpge/nov2024Questions';
import { PSAD_NOVEMBER_2024_QUESTIONS } from './questionBanks/psad/nov2024Questions';

export const ALL_YEARS: number[] = Array.from({ length: 15 }, (_, i) => 2025 - i); // 2025 down to 2011
export const ALL_MONTHS: ExamMonth[] = ['April', 'May', 'October', 'November'];

/**
 * Registry of available exam sets that contain actual verified question data.
 * Currently, data is provided for:
 * 1. MSTC, HPGE, and PSAD of April 2024
 * 2. MSTC of November 2024 (66 Items)
 * 3. HPGE of November 2024 (46 Items)
 * 4. PSAD of November 2024 (75 Items)
 */
export const AVAILABLE_EXAM_SETS: {
  year: number;
  month: ExamMonth;
  subjects: SubjectArea[];
}[] = [
  {
    year: 2024,
    month: 'April',
    subjects: ['MSTC', 'HPGE', 'PSAD'],
  },
  {
    year: 2024,
    month: 'November',
    subjects: ['MSTC', 'HPGE', 'PSAD'],
  },
];

/**
 * Check if a specific subject, year, and month combination has data.
 */
export function hasExamData(
  subject: SubjectArea,
  year: number,
  month: ExamMonth
): boolean {
  return AVAILABLE_EXAM_SETS.some(
    (set) => set.year === year && set.month === month && set.subjects.includes(subject)
  );
}

/**
 * Check if a specific year has any data available under any month/subject.
 */
export function isYearAvailable(year: number, subject?: SubjectArea): boolean {
  return AVAILABLE_EXAM_SETS.some((set) => {
    if (set.year !== year) return false;
    if (subject && !set.subjects.includes(subject)) return false;
    return true;
  });
}

/**
 * Check if a specific month has any data available for a given year (and optional subject).
 */
export function isMonthAvailable(
  month: ExamMonth,
  year: number,
  subject?: SubjectArea
): boolean {
  return AVAILABLE_EXAM_SETS.some((set) => {
    if (set.year !== year || set.month !== month) return false;
    if (subject && !set.subjects.includes(subject)) return false;
    return true;
  });
}

/**
 * Key mapping for question sets based on subject, year, and month.
 */
function getBaseQuestions(subject: SubjectArea, year: number, month: ExamMonth): Question[] {
  if (subject === 'MSTC' && year === 2024 && month === 'November') {
    return MSTC_NOVEMBER_2024_QUESTIONS;
  }
  if (subject === 'HPGE' && year === 2024 && month === 'November') {
    return HPGE_NOVEMBER_2024_QUESTIONS;
  }
  if (subject === 'PSAD' && year === 2024 && month === 'November') {
    return PSAD_NOVEMBER_2024_QUESTIONS;
  }
  if (subject === 'MSTC') {
    return MSTC_QUESTIONS;
  }
  if (subject === 'HPGE') {
    return HPGE_QUESTIONS;
  }
  if (subject === 'PSAD') {
    return PSAD_QUESTIONS;
  }
  return [];
}

/**
 * Retrieve questions for the chosen subject, year, and month.
 * Returns questions if data exists for this set, otherwise returns an empty array.
 */
export function getQuestionsForExam(
  subject: SubjectArea,
  year: number,
  month: ExamMonth
): Question[] {
  // Only return questions if data actually exists for this exam set
  if (!hasExamData(subject, year, month)) {
    return [];
  }

  const baseList = getBaseQuestions(subject, year, month);
  
  return baseList.map((q, idx) => ({
    ...q,
    id: `${subject.toLowerCase()}-${year}-${month.toLowerCase()}-q${idx + 1}`,
    year,
    month,
  }));
}

/**
 * Get question bank statistics for a given subject (defaults to latest available set)
 */
export function getSubjectStats(subject: SubjectArea, year: number = 2024, month: ExamMonth = 'April') {
  const list = getBaseQuestions(subject, year, month);
  const withFigures = list.filter((q) => !!q.figureSvg).length;
  const pagesCovered = Array.from(new Set(list.map((q) => q.pageNumber))).sort((a, b) => a - b);
  return {
    total: list.length,
    withFigures,
    pagesCovered,
  };
}
