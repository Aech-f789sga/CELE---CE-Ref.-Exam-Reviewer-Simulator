import { Question } from '../../../types/exam';
import { MSTC_NOV2017_PART1 } from './nov2017_part1';
import { MSTC_NOV2017_PART2 } from './nov2017_part2';
import { MSTC_NOV2017_PART3 } from './nov2017_part3';
import { MSTC_NOV2017_PART4 } from './nov2017_part4';

/**
 * MSTC — November 2017, from Gillesania "Civil Engineering Reference Vol. 4".
 *
 * 74 items, printed on booklet folios 553-563 with the answer key at the foot of
 * folio 563 and the worked solutions on folios 564-587. The booklet closes the
 * section with "** END **" after item 74, and the key is an eight-column grid
 * whose last column carries items 71-74.
 *
 * The section is a single running list rather than grouped situations, so each
 * item is cropped on its own margin label.
 *
 * Two folios of the solutions run are **Hydraulics pages bound into the
 * Mathematics section** — folio 565 carries a direct-shear situation and folio
 * 568 opens the Hydraulics paper. Their Mathematics content is therefore absent
 * from the scan, which costs items 6-8 and 16-19 entirely and cuts item 5 off
 * at its problem statement. Those seven items carry a written explanation
 * instead of a crop.
 *
 * Eleven further items — 35, 44, 58, 63, 67-70 and 72-74 — are keyed from the
 * stem alone; the booklet prints no working for them at all.
 *
 * Three tables are reproduced as figures: the traverse chaining notes (item 63),
 * the latitudes/departures table (item 64) and the contour table (item 71).
 */
export const MSTC_NOV_2017_QUESTIONS: Question[] = [
  ...MSTC_NOV2017_PART1,
  ...MSTC_NOV2017_PART2,
  ...MSTC_NOV2017_PART3,
  ...MSTC_NOV2017_PART4,
];
