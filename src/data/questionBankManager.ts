import { Question, SubjectArea, ExamMonth, ReferenceSource } from '../types/exam';
import { MSTC_QUESTIONS } from './questionBanks/mstcQuestions';
import { HPGE_QUESTIONS } from './questionBanks/hpgeQuestions';
import { PSAD_QUESTIONS } from './questionBanks/psadQuestions';
import { MSTC_NOVEMBER_2024_QUESTIONS } from './questionBanks/mstc/nov2024Questions';
import { HPGE_NOVEMBER_2024_QUESTIONS } from './questionBanks/hpge/nov2024Questions';
import { PSAD_NOVEMBER_2024_QUESTIONS } from './questionBanks/psad/nov2024Questions';
import { MSTC_APRIL_2025_QUESTIONS } from './questionBanks/mstc/apr2025Questions';
import { HPGE_APRIL_2025_QUESTIONS } from './questionBanks/hpge/apr2025Questions';
import { PSAD_APRIL_2025_QUESTIONS } from './questionBanks/psad/apr2025Questions';
import { HPGE_NOVEMBER_2025_QUESTIONS } from './questionBanks/hpge/nov2025Questions';
import { MSTC_NOVEMBER_2025_QUESTIONS } from './questionBanks/mstc/nov2025Questions';
import { PSAD_NOVEMBER_2025_QUESTIONS } from './questionBanks/psad/nov2025Questions';
import { MSTC_MAY_2022_QUESTIONS } from './questionBanks/mstc/may2022Questions';
import { HPGE_MAY_2022_QUESTIONS } from './questionBanks/hpge/may2022Questions';
import { PSAD_MAY_2022_QUESTIONS } from './questionBanks/psad/may2022Questions';
import { MSTC_NOV_2021_QUESTIONS } from './questionBanks/mstc/nov2021Questions';
import { HPGE_NOV_2021_QUESTIONS } from './questionBanks/hpge/nov2021Questions';
import { PSAD_NOV_2021_QUESTIONS } from './questionBanks/psad/nov2021Questions';
import { MSTE_MAY2019_QUESTIONS } from './questionBanks/mstc/may2019Questions';
import { HPGE_NOV_2019_QUESTIONS } from './questionBanks/hpge/nov2019Questions';
import { HGE_MAY_2019_QUESTIONS } from './questionBanks/hpge/may2019Questions';
import { PSAD_MAY_2019_QUESTIONS } from './questionBanks/psad/may2019Questions';
import { MSTE_NOV2019_QUESTIONS } from './questionBanks/mstc/nov2019Questions';
import { BESA_PSAD_NOV2025_QUESTIONS } from './questionBanks/psad/nov2025BesaQuestions';
import { BESA_MSTC_NOV2025_QUESTIONS } from './questionBanks/mstc/nov2025BesaQuestions';
import { BESA_PSAD_MAR2026_QUESTIONS } from './questionBanks/psad/mar2026BesaQuestions';
import { BESA_MSTC_MAR2026_QUESTIONS } from './questionBanks/mstc/mar2026BesaQuestions';
import { BESA_HPGE_MAR2026_QUESTIONS } from './questionBanks/hpge/mar2026BesaQuestions';
import { MSTC_MAY_2015_QUESTIONS } from './questionBanks/mstc/may2015Questions';

export const ALL_YEARS: number[] = Array.from({ length: 15 }, (_, i) => 2026 - i); // 2026 down to 2012
export const ALL_MONTHS: ExamMonth[] = ['March', 'April', 'May', 'October', 'November'];

/**
 * Registry of available exam sets that contain actual verified question data.
 *
 * Every entry names the review reference it was transcribed from, because the
 * two references do not always cover the same sittings — and where they do
 * (PSAD November 2025) the question sets are completely different papers.
 *
 * Gillesania (PRC compilations, printed keys):
 * 1. MSTC, HPGE, and PSAD of April 2024
 * 2. MSTC of November 2024 (66 Items)
 * 3. HPGE of November 2024 (46 Items)
 * 4. PSAD of November 2024 (75 Items)
 * 5. MSTC of April 2025 (66 Items)
 * 6. HPGE of April 2025 (45 Items)
 * 7. PSAD of April 2025 (75 Items)
 * 8. HPGE of November 2025 (47 Items)
 * 9. MSTC of November 2025 (65 Items)
 * 10. PSAD of November 2025 (75 Items)
 * 11. MSTC of November 2021 (69 Items)
 * 12. HPGE of November 2021 (50 Items)
 * 13. PSAD of November 2021 (69 Items)
 * 14. MSTC (MSTE) of May 2019 (60 Items)
 * 15. HPGE of November 2019 (45 Items)
 * 16. PSAD (SEC) of May 2019 (69 Items)
 * 17. MSTC (MSTE) of November 2019 (44 Items)
 * 18. HPGE (HGE) of May 2019 (47 Items)
 * 19. MSTC of May 2015 (89 Items) — from Volume 4, printed A–D choices with
 *     the answer key printed at the end of the question section
 *
 * Besavilla (solved-problem review book, reveal-and-self-mark):
 * 20. PSAD of November 2025 (71 Items — 24 situations, 65 worked sub-parts
 *     plus 6 conceptual multiple-choice items)
 * 21. MSTC of November 2025 (61 Items — 49 worked situations answered by
 *     reveal-and-self-mark plus 12 keyed multiple-choice items, one of which
 *     also prints a worked solution)
 * 22. PSAD of March 2026 (69 Items — 22 situations split into a/b/c worked
 *     sub-parts plus 3 conceptual multiple-choice items)
 * 23. MSTC of March 2026 (73 Items — 51 worked situations answered by
 *     reveal-and-self-mark plus 22 keyed multiple-choice items, several of
 *     which print their options as drawings)
 * 24. HPGE of March 2026 (47 Items — 27 worked problems with a printed
 *     solution plus 20 keyed concept items)
 */
export const AVAILABLE_EXAM_SETS: {
  year: number;
  month: ExamMonth;
  subjects: SubjectArea[];
  source: ReferenceSource;
}[] = [
  {
    year: 2024,
    month: 'April',
    subjects: ['MSTC', 'HPGE', 'PSAD'],
    source: 'Gillesania',
  },
  {
    year: 2024,
    month: 'November',
    subjects: ['MSTC', 'HPGE', 'PSAD'],
    source: 'Gillesania',
  },
  {
    year: 2025,
    month: 'April',
    subjects: ['MSTC', 'HPGE', 'PSAD'],
    source: 'Gillesania',
  },
  {
    year: 2025,
    month: 'November',
    subjects: ['MSTC', 'HPGE', 'PSAD'],
    source: 'Gillesania',
  },
  {
    year: 2022,
    month: 'May',
    subjects: ['MSTC', 'HPGE', 'PSAD'],
    source: 'Gillesania',
  },
  {
    year: 2021,
    month: 'November',
    subjects: ['MSTC', 'HPGE', 'PSAD'],
    source: 'Gillesania',
  },
  {
    year: 2019,
    month: 'May',
    subjects: ['MSTC', 'PSAD', 'HPGE'],
    source: 'Gillesania',
  },
  {
    year: 2019,
    month: 'November',
    subjects: ['HPGE', 'MSTC'],
    source: 'Gillesania',
  },
  {
    year: 2025,
    month: 'November',
    subjects: ['PSAD', 'MSTC'],
    source: 'Besavilla',
  },
  {
    year: 2026,
    month: 'March',
    subjects: ['PSAD', 'MSTC', 'HPGE'],
    source: 'Besavilla',
  },
  {
    year: 2015,
    month: 'May',
    subjects: ['MSTC'],
    source: 'Gillesania',
  },
];

/**
 * Check if a specific subject, year, and month combination has data.
 */
export function hasExamData(
  subject: SubjectArea,
  year: number,
  month: ExamMonth,
  source: ReferenceSource = 'Gillesania'
): boolean {
  return AVAILABLE_EXAM_SETS.some(
    (set) =>
      set.year === year &&
      set.month === month &&
      set.source === source &&
      set.subjects.includes(subject)
  );
}

/**
 * Check if a specific year has any data available under any month/subject.
 */
export function isYearAvailable(
  year: number,
  subject?: SubjectArea,
  source: ReferenceSource = 'Gillesania'
): boolean {
  return AVAILABLE_EXAM_SETS.some((set) => {
    if (set.year !== year) return false;
    if (set.source !== source) return false;
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
  subject?: SubjectArea,
  source: ReferenceSource = 'Gillesania'
): boolean {
  return AVAILABLE_EXAM_SETS.some((set) => {
    if (set.year !== year || set.month !== month) return false;
    if (set.source !== source) return false;
    if (subject && !set.subjects.includes(subject)) return false;
    return true;
  });
}

/**
 * How many sittings a reference holds for a subject — shown on the source
 * toggle so it is obvious that Besavilla currently only carries one paper.
 */
export function countSetsForSource(source: ReferenceSource, subject?: SubjectArea): number {
  return AVAILABLE_EXAM_SETS.filter(
    (set) => set.source === source && (!subject || set.subjects.includes(subject))
  ).length;
}

/**
 * First sitting available for a subject under a reference, used to snap the
 * year/month selectors when the learner flips the reference toggle.
 */
export function firstAvailableSet(
  source: ReferenceSource,
  subject: SubjectArea
): { year: number; month: ExamMonth } | null {
  const matches = AVAILABLE_EXAM_SETS.filter(
    (set) => set.source === source && set.subjects.includes(subject)
  ).sort((a, b) => b.year - a.year || ALL_MONTHS.indexOf(a.month) - ALL_MONTHS.indexOf(b.month));
  if (!matches.length) return null;
  return { year: matches[0].year, month: matches[0].month };
}

/**
 * Key mapping for question sets based on subject, year, and month.
 */
function getBaseQuestions(
  subject: SubjectArea,
  year: number,
  month: ExamMonth,
  source: ReferenceSource
): Question[] {
  if (source === 'Besavilla') {
    if (subject === 'PSAD' && year === 2026 && month === 'March') {
      return BESA_PSAD_MAR2026_QUESTIONS;
    }
    if (subject === 'MSTC' && year === 2026 && month === 'March') {
      return BESA_MSTC_MAR2026_QUESTIONS;
    }
    if (subject === 'HPGE' && year === 2026 && month === 'March') {
      return BESA_HPGE_MAR2026_QUESTIONS;
    }
    if (subject === 'PSAD' && year === 2025 && month === 'November') {
      return BESA_PSAD_NOV2025_QUESTIONS;
    }
    if (subject === 'MSTC' && year === 2025 && month === 'November') {
      return BESA_MSTC_NOV2025_QUESTIONS;
    }
    return [];
  }

  if (subject === 'MSTC' && year === 2015 && month === 'May') {
    return MSTC_MAY_2015_QUESTIONS;
  }
  if (subject === 'MSTC' && year === 2025 && month === 'April') {
    return MSTC_APRIL_2025_QUESTIONS;
  }
  if (subject === 'MSTC' && year === 2025 && month === 'November') {
    return MSTC_NOVEMBER_2025_QUESTIONS;
  }
  if (subject === 'HPGE' && year === 2025 && month === 'April') {
    return HPGE_APRIL_2025_QUESTIONS;
  }
  if (subject === 'PSAD' && year === 2025 && month === 'April') {
    return PSAD_APRIL_2025_QUESTIONS;
  }
  if (subject === 'HPGE' && year === 2025 && month === 'November') {
    return HPGE_NOVEMBER_2025_QUESTIONS;
  }
  if (subject === 'PSAD' && year === 2025 && month === 'November') {
    return PSAD_NOVEMBER_2025_QUESTIONS;
  }
  if (subject === 'MSTC' && year === 2024 && month === 'November') {
    return MSTC_NOVEMBER_2024_QUESTIONS;
  }
  if (subject === 'HPGE' && year === 2024 && month === 'November') {
    return HPGE_NOVEMBER_2024_QUESTIONS;
  }
  if (subject === 'PSAD' && year === 2024 && month === 'November') {
    return PSAD_NOVEMBER_2024_QUESTIONS;
  }
  if (subject === 'MSTC' && year === 2022 && month === 'May') {
    return MSTC_MAY_2022_QUESTIONS;
  }
  if (subject === 'HPGE' && year === 2022 && month === 'May') {
    return HPGE_MAY_2022_QUESTIONS;
  }
  if (subject === 'PSAD' && year === 2022 && month === 'May') {
    return PSAD_MAY_2022_QUESTIONS;
  }
  if (subject === 'MSTC' && year === 2021 && month === 'November') {
    return MSTC_NOV_2021_QUESTIONS;
  }
  if (subject === 'HPGE' && year === 2021 && month === 'November') {
    return HPGE_NOV_2021_QUESTIONS;
  }
  if (subject === 'PSAD' && year === 2021 && month === 'November') {
    return PSAD_NOV_2021_QUESTIONS;
  }
  if (subject === 'MSTC' && year === 2019 && month === 'May') {
    return MSTE_MAY2019_QUESTIONS;
  }
  if (subject === 'HPGE' && year === 2019 && month === 'November') {
    return HPGE_NOV_2019_QUESTIONS;
  }
  if (subject === 'HPGE' && year === 2019 && month === 'May') {
    return HGE_MAY_2019_QUESTIONS;
  }
  if (subject === 'PSAD' && year === 2019 && month === 'May') {
    return PSAD_MAY_2019_QUESTIONS;
  }
  if (subject === 'MSTC' && year === 2019 && month === 'November') {
    return MSTE_NOV2019_QUESTIONS;
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
  month: ExamMonth,
  source: ReferenceSource = 'Gillesania'
): Question[] {
  // Only return questions if data actually exists for this exam set
  if (!hasExamData(subject, year, month, source)) {
    return [];
  }

  const baseList = getBaseQuestions(subject, year, month, source);
  const sourceSlug = source === 'Besavilla' ? 'besa' : 'gil';

  return baseList.map((q, idx) => ({
    ...q,
    id: `${subject.toLowerCase()}-${year}-${month.toLowerCase()}-${sourceSlug}-q${idx + 1}`,
    year,
    month,
    referenceSource: source,
  }));
}

/**
 * Get question bank statistics for a given subject (defaults to latest available set)
 */
export function getSubjectStats(
  subject: SubjectArea,
  year: number = 2024,
  month: ExamMonth = 'April',
  source: ReferenceSource = 'Gillesania'
) {
  const list = getBaseQuestions(subject, year, month, source);
  const withFigures = list.filter((q) => !!q.figureSvg).length;
  const pagesCovered = Array.from(new Set(list.map((q) => q.pageNumber))).sort((a, b) => a - b);
  return {
    total: list.length,
    withFigures,
    pagesCovered,
  };
}

/**
 * True when a sitting is made of reveal-and-self-mark worked examples rather
 * than printed multiple-choice items. Used to steer the learner to Interactive
 * Study mode, which is the only mode that can score those items.
 */
export function isWorkedSolutionSet(
  subject: SubjectArea,
  year: number,
  month: ExamMonth,
  source: ReferenceSource = 'Gillesania'
): boolean {
  if (!hasExamData(subject, year, month, source)) return false;
  const list = getBaseQuestions(subject, year, month, source);
  return list.length > 0 && list.every((q) => q.workedSolution);
}
