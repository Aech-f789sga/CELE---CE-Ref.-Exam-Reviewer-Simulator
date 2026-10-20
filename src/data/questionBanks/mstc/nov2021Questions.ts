import { Question } from '../../../types/exam';
import { MSTC_NOV2021_PART1 } from './nov2021_part1';
import { MSTC_NOV2021_PART2 } from './nov2021_part2';
import { MSTC_NOV2021_PART3 } from './nov2021_part3';
import { MSTC_NOV2021_PART4 } from './nov2021_part4';

/** MSTC November 2021 — 69 items, booklet pp. 240-255. */
export const MSTC_NOV_2021_QUESTIONS: Question[] = [
  ...MSTC_NOV2021_PART1,
  ...MSTC_NOV2021_PART2,
  ...MSTC_NOV2021_PART3,
  ...MSTC_NOV2021_PART4,
];
