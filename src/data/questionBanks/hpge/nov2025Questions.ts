import { Question } from '../../../types/exam';
import { HPGE_NOV2025_PART1 } from './nov2025_part1';
import { HPGE_NOV2025_PART2 } from './nov2025_part2';
import { HPGE_NOV2025_PART3 } from './nov2025_part3';
import { HPGE_NOV2025_PART4 } from './nov2025_part4';

export const HPGE_NOVEMBER_2025_QUESTIONS: Question[] = [
  ...HPGE_NOV2025_PART1,
  ...HPGE_NOV2025_PART2,
  ...HPGE_NOV2025_PART3,
  ...HPGE_NOV2025_PART4,
];
