import { Question } from '../../../types/exam';
import { HPGE_NOV2019_PART1 } from './nov2019_part1';
import { HPGE_NOV2019_PART2 } from './nov2019_part2';
import { HPGE_NOV2019_PART3 } from './nov2019_part3';

export const HPGE_NOV_2019_QUESTIONS: Question[] = [
  ...HPGE_NOV2019_PART1,
  ...HPGE_NOV2019_PART2,
  ...HPGE_NOV2019_PART3,
];
