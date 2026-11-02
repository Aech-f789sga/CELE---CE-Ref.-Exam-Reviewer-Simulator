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
 * Two gaps in the source are recorded rather than papered over: items 15, 16 and
 * 18 are pure recall and the booklet never works them, and the scan omits folio
 * 298, so items 47–50 have no printed working at all.
 */
export const HPGE_MAY_2016_QUESTIONS: Question[] = [
  ...HPGE_MAY2016_PART1,
  ...HPGE_MAY2016_PART2,
  ...HPGE_MAY2016_PART3,
  ...HPGE_MAY2016_PART4,
];
