import { Question } from '../../../types/exam';
import { BESA_MSTC_MAR2026_PART1 } from './mar2026Besa_part1';
import { BESA_MSTC_MAR2026_PART2 } from './mar2026Besa_part2';
import { BESA_MSTC_MAR2026_PART3 } from './mar2026Besa_part3';
import { BESA_MSTC_MAR2026_PART4 } from './mar2026Besa_part4';
import { BESA_MSTC_MAR2026_PART5 } from './mar2026Besa_part5';

/**
 * BESAVILLA — Mathematics and Surveying, March 2026 (73 items).
 *
 * Booklet pages M-280 to M-310. Every item is one numbered situation; the
 * booklet does not split a situation into lettered sub-questions the way the
 * PSAD set does, so the count matches the banners exactly.
 *
 * 51 situations print a worked "Solution:" block and are answered by revealing
 * the scanned working and self-marking. The other 22 are four-choice items
 * whose key the booklet marks by italicising the option and setting a pointing
 * hand beside it; two of those (42 and 52) also print a short derivation, so
 * their scanned reasoning is attached to the keyed item for review.
 */
export const BESA_MSTC_MAR2026_QUESTIONS: Question[] = [
  ...BESA_MSTC_MAR2026_PART1,
  ...BESA_MSTC_MAR2026_PART2,
  ...BESA_MSTC_MAR2026_PART3,
  ...BESA_MSTC_MAR2026_PART4,
  ...BESA_MSTC_MAR2026_PART5,
];
