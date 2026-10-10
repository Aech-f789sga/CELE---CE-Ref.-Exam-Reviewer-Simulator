import { Question, SubjectArea, ExamMonth } from '../types/exam';
import { MSTC_QUESTIONS } from './questionBanks/mstcQuestions';
import { HPGE_QUESTIONS } from './questionBanks/hpgeQuestions';
import { PSAD_QUESTIONS } from './questionBanks/psadQuestions';

export const ALL_YEARS: number[] = Array.from({ length: 15 }, (_, i) => 2025 - i); // 2025 down to 2011
export const ALL_MONTHS: ExamMonth[] = ['April', 'May', 'October', 'November'];

/**
 * Registry of available exam sets that contain actual verified question data.
 * Currently, data is provided for MSTC, HPGE, and PSAD of April 2024.
 * Other years and months will be blurred out until new data is added.
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

const BASE_QUESTIONS_BY_SUBJECT: Record<SubjectArea, Question[]> = {
  MSTC: MSTC_QUESTIONS,
  HPGE: HPGE_QUESTIONS,
  PSAD: PSAD_QUESTIONS,
};

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

  const baseList = BASE_QUESTIONS_BY_SUBJECT[subject] || [];
  
  return baseList.map((q, idx) => ({
    ...q,
    id: `${subject.toLowerCase()}-${year}-${month.toLowerCase()}-q${idx + 1}`,
    year,
    month,
  }));
}

/**
 * Get question bank statistics
 */
export function getSubjectStats(subject: SubjectArea) {
  const list = BASE_QUESTIONS_BY_SUBJECT[subject] || [];
  const withFigures = list.filter((q) => !!q.figureSvg).length;
  const pagesCovered = Array.from(new Set(list.map((q) => q.pageNumber))).sort((a, b) => a - b);
  return {
    total: list.length,
    withFigures,
    pagesCovered,
  };
}
