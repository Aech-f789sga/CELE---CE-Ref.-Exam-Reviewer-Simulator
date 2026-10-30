import { Question } from '../../../types/exam';
import { BESA_MSTC_NOV2025_PART1 } from './nov2025Besa_part1';
import { BESA_MSTC_NOV2025_PART2 } from './nov2025Besa_part2';
import { BESA_MSTC_NOV2025_PART3 } from './nov2025Besa_part3';
import { BESA_MSTC_NOV2025_PART4 } from './nov2025Besa_part4';
import { BESA_MSTC_NOV2025_PART5 } from './nov2025Besa_part5';

/**
 * BESAVILLA — MSTC November 2025.
 *
 * Transcribed from "Civil Engineering Licensure Examinations — Mathematics, Surveying and
 * Transportation Engineering, November 2025" (booklet pp. M-257 to M-280, 24 PDF pages).
 *
 * The book is a solved-problem review, so 49 of the 61 numbered situations print the worked
 * solution directly underneath the statement and carry no A–D choices. Those items set
 * `workedSolution: true` and are answered by revealing the scanned solution and self-marking.
 * The other 12 (situations 13, 18, 22, 23, 24, 30, 34, 35, 42, 45, 51 and 54) are genuine
 * multiple-choice questions whose key the booklet marks by italicising the option and setting a
 * pointing hand beside it. Situation 30 is a hybrid: it prints four matrix choices *and* a worked
 * solution, so it carries both a key and the scanned derivation.
 */
export const BESA_MSTC_NOV2025_QUESTIONS: Question[] = [
  ...BESA_MSTC_NOV2025_PART1,
  ...BESA_MSTC_NOV2025_PART2,
  ...BESA_MSTC_NOV2025_PART3,
  ...BESA_MSTC_NOV2025_PART4,
  ...BESA_MSTC_NOV2025_PART5,
];
