import { Question } from '../../../types/exam';
import { HPGE_MAY2015_PART1 } from './may2015_part1';
import { HPGE_MAY2015_PART2 } from './may2015_part2';
import { HPGE_MAY2015_PART3 } from './may2015_part3';
import { HPGE_MAY2015_PART4 } from './may2015_part4';
import { HPGE_MAY2015_PART5 } from './may2015_part5';
import { HPGE_MAY2015_PART6 } from './may2015_part6';

/**
 * HPGE — May 2015, from Gillesania "Civil Engineering Reference Vol. 4".
 *
 * 82 items, printed on booklet folios 38–50 with the answer key at the foot of
 * folio 50 and the worked solutions on folios 51–71. The booklet closes the
 * section after item 82.
 *
 * Every item's solution is the booklet's own working, cropped from the scan
 * (see `hpgeMay2015Images`). Items 1–28 are worked one at a time and each gets
 * its own crop; from item 29 the booklet groups the items into situations of
 * three and works each situation as one block, so those share their situation's
 * crop. The exceptions are items 18–20, which are pure recall and have no
 * working to show, and items 62–64, whose working page — folio 67 — is missing
 * from the scanned volume.
 */
export const HPGE_MAY_2015_QUESTIONS: Question[] = [
  ...HPGE_MAY2015_PART1,
  ...HPGE_MAY2015_PART2,
  ...HPGE_MAY2015_PART3,
  ...HPGE_MAY2015_PART4,
  ...HPGE_MAY2015_PART5,
  ...HPGE_MAY2015_PART6,
];
