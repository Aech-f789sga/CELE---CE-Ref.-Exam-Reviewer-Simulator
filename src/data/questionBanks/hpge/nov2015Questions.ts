import { Question } from '../../../types/exam';
import { HPGE_NOV2015_PART1 } from './nov2015_part1';
import { HPGE_NOV2015_PART2 } from './nov2015_part2';
import { HPGE_NOV2015_PART3 } from './nov2015_part3';
import { HPGE_NOV2015_PART4 } from './nov2015_part4';
import { HPGE_NOV2015_PART5 } from './nov2015_part5';
import { HPGE_NOV2015_PART6 } from './nov2015_part6';

/**
 * Gillesania Volume 4 — Hydraulics & Geotechnical Engineering,
 * November 2015 PRC board examination. 80 items over booklet pp. 164–172;
 * the printed key sits on p. 173 and the worked solutions on pp. 174–193.
 */
export const HPGE_NOV_2015_QUESTIONS: Question[] = [
  ...HPGE_NOV2015_PART1,
  ...HPGE_NOV2015_PART2,
  ...HPGE_NOV2015_PART3,
  ...HPGE_NOV2015_PART4,
  ...HPGE_NOV2015_PART5,
  ...HPGE_NOV2015_PART6,
];
