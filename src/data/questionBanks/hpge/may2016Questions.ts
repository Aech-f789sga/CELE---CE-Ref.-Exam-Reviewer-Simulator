import { Question } from '../../../types/exam';
import { HPGE_MAY2016_PART1 } from './may2016_part1';
import { HPGE_MAY2016_PART2 } from './may2016_part2';
import { HPGE_MAY2016_PART3 } from './may2016_part3';
import { HPGE_MAY2016_PART4 } from './may2016_part4';

/**
 * HPGE — May 2016, from Gillesania "Civil Engineering Reference Vol. 4".
 *
 * 50 items, printed on booklet pages 277–284 with the answer key at the foot of
 * page 284 and the worked solutions on pages 285–297. The booklet closes the
 * section with "** END ***" after item 50.
 *
 * Ten situations carry three items each (3–5, 6–8, 12–14, 20–22, 25–27, 28–30,
 * 32–34, 39–41, 44–46, 47–49); the other twenty items stand alone.
 *
 * ## How the working is shown
 *
 * Every item whose working the booklet prints shows that working as a **crop of
 * the booklet page**. The booklet prints one block per situation, divided into
 * "Part 1 / Part 2 / Part 3" with no per-item marker, so the three items of a
 * situation share that situation's crop rather than being cut apart — cutting
 * between the parts is what truncated the crops in earlier revisions. Standalone
 * items keep a crop of their own, cut on the item's left-margin marker.
 *
 * ## Two gaps in the source, recorded rather than papered over
 *
 * Items 15, 16 and 18 are pure recall and the booklet never works them. Items
 * 47–50 are worse: the scan omits folios 298–314 outright (it jumps from 297 to
 * 315), so the page that works them is not in the file at all. Those four carry
 * written working and a note saying why the scan is silent.
 */
export const HPGE_MAY_2016_QUESTIONS: Question[] = [
  ...HPGE_MAY2016_PART1,
  ...HPGE_MAY2016_PART2,
  ...HPGE_MAY2016_PART3,
  ...HPGE_MAY2016_PART4,
];
