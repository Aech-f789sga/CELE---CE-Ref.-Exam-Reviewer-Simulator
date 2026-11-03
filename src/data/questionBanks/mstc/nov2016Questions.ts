import { Question } from '../../../types/exam';
import { MSTC_NOV2016_PART1 } from './nov2016_part1';
import { MSTC_NOV2016_PART2 } from './nov2016_part2';
import { MSTC_NOV2016_PART3 } from './nov2016_part3';
import { MSTC_NOV2016_PART4 } from './nov2016_part4';

/**
 * MSTC — November 2016, all 75 items.
 *
 * Questions on booklet folios 345–354, the printed key at the foot of folio 354,
 * worked solutions on folios 355–378. Unlike the May 2016 sitting, the booklet
 * prints no situations: every item is self-contained, and items 67–72 are
 * terminology rather than computation.
 */
export const MSTC_NOV_2016_QUESTIONS: Question[] = [
  ...MSTC_NOV2016_PART1,
  ...MSTC_NOV2016_PART2,
  ...MSTC_NOV2016_PART3,
  ...MSTC_NOV2016_PART4,
];
