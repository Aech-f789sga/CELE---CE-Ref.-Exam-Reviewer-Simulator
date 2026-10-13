import { Question } from '../../../types/exam';
import { HPGE_APR2025_PART1 } from './apr2025_part1';
import { HPGE_APR2025_PART2 } from './apr2025_part2';
import { HPGE_APR2025_PART3 } from './apr2025_part3';
import { HPGE_APR2025_PART4 } from './apr2025_part4';

export const HPGE_APRIL_2025_QUESTIONS: Question[] = [
  ...HPGE_APR2025_PART1,
  ...HPGE_APR2025_PART2,
  ...HPGE_APR2025_PART3,
  ...HPGE_APR2025_PART4,
];
