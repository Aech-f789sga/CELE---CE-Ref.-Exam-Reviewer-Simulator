import { Question } from '../../../types/exam';
import { PSAD_MAY2022_PART1 } from './may2022_part1';
import { PSAD_MAY2022_PART2 } from './may2022_part2';
import { PSAD_MAY2022_PART3 } from './may2022_part3';
import { PSAD_MAY2022_PART4 } from './may2022_part4';

/**
 * PSAD May 2022 — 72 items across 24 situations, transcribed from the
 * scanned booklet (pages 436-455). Worked solutions live on pages 456-493.
 */
export const PSAD_MAY_2022_QUESTIONS: Question[] = [
  ...PSAD_MAY2022_PART1,
  ...PSAD_MAY2022_PART2,
  ...PSAD_MAY2022_PART3,
  ...PSAD_MAY2022_PART4,
];
