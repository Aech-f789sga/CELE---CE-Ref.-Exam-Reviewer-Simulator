import { Question, SubjectArea, ExamMonth } from '../types/exam';
import { MSTC_QUESTIONS } from './questionBanks/mstcQuestions';
import { HPGE_QUESTIONS } from './questionBanks/hpgeQuestions';
import { PSAD_QUESTIONS } from './questionBanks/psadQuestions';

export const ALL_YEARS: number[] = Array.from({ length: 15 }, (_, i) => 2025 - i); // 2025 down to 2011
export const ALL_MONTHS: ExamMonth[] = ['May', 'November', 'April', 'October'];

const BASE_QUESTIONS_BY_SUBJECT: Record<SubjectArea, Question[]> = {
  MSTC: MSTC_QUESTIONS,
  HPGE: HPGE_QUESTIONS,
  PSAD: PSAD_QUESTIONS,
};

/**
 * Retrieve questions for the chosen subject, year, and month.
 * If user selects a historical year/month, we adapt the questions and maintain consistency.
 */
export function getQuestionsForExam(
  subject: SubjectArea,
  year: number,
  month: ExamMonth
): Question[] {
  const baseList = BASE_QUESTIONS_BY_SUBJECT[subject] || [];
  
  // Clone and adapt to selected year & month
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
