import { Question } from '../../../types/exam';
import { MSTC_MAY2015_PART1 } from './may2015_part1';
import { MSTC_MAY2015_PART2 } from './may2015_part2';
import { MSTC_MAY2015_PART3 } from './may2015_part3';
import { MSTC_MAY2015_PART4 } from './may2015_part4';
import { MSTC_MAY2015_PART5 } from './may2015_part5';
import { MSTC_MAY2015_PART6 } from './may2015_part6';

/**
 * MSTC — May 2015, from Gillesania "Civil Engineering Reference Vol. 4".
 *
 * 89 items. The section is key-then-solutions: questions on booklet folios 1-10,
 * the printed answer key at the foot of folio 11, and "Solutions to May 2015
 * Examination" running from folio 12 to folio 37.
 *
 * ## How the working is shown
 *
 * Every item's working is a **crop of the booklet page**, cut on the item's
 * left-margin marker (the open-book glyph plus its number) and closed on the
 * last printed line before the next marker. Nothing is retyped. Items 23, 29,
 * 41, 54 and 70 run over a page turn and therefore carry two crops, shown in
 * reading order.
 *
 * See `mstcMay2015Images.ts` for how the crops were located, and
 * `may2015Helpers.solved` for how an item points at its crop.
 */
export const MSTC_MAY_2015_QUESTIONS: Question[] = [
  ...MSTC_MAY2015_PART1,
  ...MSTC_MAY2015_PART2,
  ...MSTC_MAY2015_PART3,
  ...MSTC_MAY2015_PART4,
  ...MSTC_MAY2015_PART5,
  ...MSTC_MAY2015_PART6,
];
