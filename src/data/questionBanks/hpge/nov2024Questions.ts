import { Question } from '../../../types/exam';
import { HPGE_NOV2024_PART1 } from './nov2024_part1';
import { HPGE_NOV2024_PART2 } from './nov2024_part2';
import { HPGE_NOV2024_PART3 } from './nov2024_part3';
import { HPGE_NOV2024_PART4 } from './nov2024_part4';

export const HPGE_NOVEMBER_2024_QUESTIONS: Question[] = [
  ...HPGE_NOV2024_PART1,
  ...HPGE_NOV2024_PART2,
  ...HPGE_NOV2024_PART3,
  ...HPGE_NOV2024_PART4,
];
