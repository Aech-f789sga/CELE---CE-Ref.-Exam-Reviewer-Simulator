import { Question } from '../../../types/exam';
import { BESA_PSAD_NOV2025_PART1 } from './nov2025Besa_part1';
import { BESA_PSAD_NOV2025_PART2 } from './nov2025Besa_part2';
import { BESA_PSAD_NOV2025_PART3 } from './nov2025Besa_part3';
import { BESA_PSAD_NOV2025_PART4 } from './nov2025Besa_part4';
import { BESA_PSAD_NOV2025_PART5 } from './nov2025Besa_part5';

/**
 * BESAVILLA — PSAD November 2025.
 *
 * Transcribed from "Civil Engineering Licensure Examinations — Structural Design
 * and Construction, November 2025" (booklet pp. D-433 to D-469). The book is a
 * solved-problem review, so 65 of the 71 items are worked examples: the a/b/c
 * sub-parts of 24 numbered "CE Board Nov. 2025" situations, each with its
 * solution printed underneath and no A–D choices. Those items carry
 * `workedSolution: true` and are answered by revealing the scanned solution and
 * self-marking. The remaining 6 items (situations 8 and 24) are genuine
 * multiple-choice questions whose answers the booklet marks by italicising the
 * option and adding a tick, so they keep a normal printed key.
 */
export const BESA_PSAD_NOV2025_QUESTIONS: Question[] = [
  ...BESA_PSAD_NOV2025_PART1,
  ...BESA_PSAD_NOV2025_PART2,
  ...BESA_PSAD_NOV2025_PART3,
  ...BESA_PSAD_NOV2025_PART4,
  ...BESA_PSAD_NOV2025_PART5,
];
