import { Question } from '../../../types/exam';
import { MSTC_NOV2025_PART1 } from './nov2025_part1';
import { MSTC_NOV2025_PART2 } from './nov2025_part2';
import { MSTC_NOV2025_PART3 } from './nov2025_part3';
import { MSTC_NOV2025_PART4 } from './nov2025_part4';

export const MSTC_NOVEMBER_2025_QUESTIONS: Question[] = [
  ...MSTC_NOV2025_PART1,
  ...MSTC_NOV2025_PART2,
  ...MSTC_NOV2025_PART3,
  ...MSTC_NOV2025_PART4,
];
