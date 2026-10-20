import { Question } from '../../../types/exam';
import { HPGE_MAY2022_PART1 } from './may2022_part1';
import { HPGE_MAY2022_PART2 } from './may2022_part2';
import { HPGE_MAY2022_PART3 } from './may2022_part3';
import { HPGE_MAY2022_PART4 } from './may2022_part4';

export const HPGE_MAY_2022_QUESTIONS: Question[] = [
  ...HPGE_MAY2022_PART1,
  ...HPGE_MAY2022_PART2,
  ...HPGE_MAY2022_PART3,
  ...HPGE_MAY2022_PART4,
];
