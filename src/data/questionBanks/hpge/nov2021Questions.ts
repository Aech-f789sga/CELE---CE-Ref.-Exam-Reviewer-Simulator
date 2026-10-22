import { Question } from '../../../types/exam';
import { HPGE_NOV2021_PART1 } from './nov2021_part1';
import { HPGE_NOV2021_PART2 } from './nov2021_part2';
import { HPGE_NOV2021_PART3 } from './nov2021_part3';
import { HPGE_NOV2021_PART4 } from './nov2021_part4';

export const HPGE_NOV_2021_QUESTIONS: Question[] = [
  ...HPGE_NOV2021_PART1,
  ...HPGE_NOV2021_PART2,
  ...HPGE_NOV2021_PART3,
  ...HPGE_NOV2021_PART4,
];
