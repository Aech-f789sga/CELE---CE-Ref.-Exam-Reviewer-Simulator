import { Question } from '../../../types/exam';
import { MSTC_APR2025_PART1 } from './apr2025_part1';
import { MSTC_APR2025_PART2 } from './apr2025_part2';
import { MSTC_APR2025_PART3 } from './apr2025_part3';
import { MSTC_APR2025_PART4 } from './apr2025_part4';
import { MSTC_APR2025_PART5 } from './apr2025_part5';

export const MSTC_APRIL_2025_QUESTIONS: Question[] = [
  ...MSTC_APR2025_PART1,
  ...MSTC_APR2025_PART2,
  ...MSTC_APR2025_PART3,
  ...MSTC_APR2025_PART4,
  ...MSTC_APR2025_PART5,
];
