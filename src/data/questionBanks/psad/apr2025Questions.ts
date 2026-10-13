import { Question } from '../../../types/exam';
import { PSAD_APR2025_PART1 } from './apr2025_part1';
import { PSAD_APR2025_PART2 } from './apr2025_part2';
import { PSAD_APR2025_PART3 } from './apr2025_part3';
import { PSAD_APR2025_PART4 } from './apr2025_part4';
import { PSAD_APR2025_PART5 } from './apr2025_part5';

/** April 2025 PSAD items included in the supplied scanned booklet (Questions 6–75). */
export const PSAD_APRIL_2025_QUESTIONS: Question[] = [
  ...PSAD_APR2025_PART1,
  ...PSAD_APR2025_PART2,
  ...PSAD_APR2025_PART3,
  ...PSAD_APR2025_PART4,
  ...PSAD_APR2025_PART5,
];
