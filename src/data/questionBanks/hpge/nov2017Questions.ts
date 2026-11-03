import { Question } from '../../../types/exam';
import { HPGE_NOV2017_PART1 } from './nov2017_part1';
import { HPGE_NOV2017_PART2 } from './nov2017_part2';
import { HPGE_NOV2017_PART3 } from './nov2017_part3';
import { HPGE_NOV2017_PART4 } from './nov2017_part4';

/**
 * HPGE — November 2017, from Gillesania "Civil Engineering Reference Vol. 4".
 *
 * 49 items, printed on booklet folios 588-597 with the answer key at the foot of
 * folio 597 and the worked solutions on folios 598-614. The booklet closes the
 * section with "*** END ***" after item 49, and the key is a five-column grid of
 * ten rows.
 *
 * The paper is built from fourteen situations plus seven standalone items:
 *
 *   Situation 1  items 4-6      buoy and anchor block
 *   Situation 2  items 7-9      vertical triangular gate
 *   Situation 3  items 10-12    inclined triangular gate
 *   Situation 4  items 13-15    rotating open tank
 *   Situation 5  items 16-18    jet from an inclined tank wall
 *   Situation 6  items 20-22    three-reservoir pipe network
 *   Situation 7  items 24-26    soil weight-volume properties
 *   Situation 8  items 27-29    three gradation curves
 *   Situation 9  items 30-32    sieve analysis and USCS classification
 *   Situation 10 items 33-35    effective stress under a lowered water table
 *   Situation 11 items 37-39    pumping well and observation wells
 *   Situation 12 items 40-42    direct shear tests
 *   Situation 13 items 44-46    square footing, c = 0
 *   Situation 14 items 47-49    square footing, c = 8 kPa
 *
 * standalone: 1, 2, 3, 19, 23, 36, 43.
 *
 * Every one of the 49 items has printed working, so none is keyed from the stem
 * alone. The booklet works each situation as one column of working tagged
 * "Part 1 / Part 2 / Part 3" and each item takes only its own band. Two
 * exceptions are recorded in the data: Situation 6 is worked as a single
 * untagged block (items 20-22 share both crops), and Situation 10's Part 2 runs
 * over a page break, so item 34 carries two crops in reading order. Item 15's
 * Part 3 opens folio 603 and is complete there, so it needs only one.
 *
 * Three question figures are reproduced (the jet trajectory, the reservoir
 * network, the gradation curves) together with the three reference tables the
 * stems tell the candidate to use — the sieve analysis, the USCS chart and
 * Terzaghi's bearing-capacity factors.
 */
export const HPGE_NOV_2017_QUESTIONS: Question[] = [
  ...HPGE_NOV2017_PART1,
  ...HPGE_NOV2017_PART2,
  ...HPGE_NOV2017_PART3,
  ...HPGE_NOV2017_PART4,
];
