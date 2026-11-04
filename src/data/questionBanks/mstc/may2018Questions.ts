import { Question } from '../../../types/exam';
import { MSTC_MAY2018_PART1 } from './may2018_part1';
import { MSTC_MAY2018_PART2 } from './may2018_part2';
import { MSTC_MAY2018_PART3 } from './may2018_part3';
import { MSTC_MAY2018_PART4 } from './may2018_part4';

/**
 * MSTC — May 2018, from Gillesania "Civil Engineering Reference Vol. 4".
 *
 * 62 items, printed on booklet folios 659-668 with the answer key at the foot of
 * folio 669 and the worked solutions on folios 670-689 under the running head
 * "Solutions to May 2018 Examination". The paper closes with "** END ***" after
 * item 62.
 *
 * The answer grid is seven columns of ten — 1-60 down the first six columns and
 * 61-62 alone in the seventh — so the grid is exactly filled. This is the only
 * section of the volume where the grid's capacity and the paper's item count
 * agree.
 *
 * The section is a single running list rather than grouped situations, so each
 * item is cropped on its own margin label. Four items run over a folio break and
 * yield two crops: 14, 39, 45 and 51.
 *
 * Items 58-62 close the paper with transportation-engineering recall questions —
 * wind waves, freeway capacity, warning signs, edge lines, road capacity — and
 * the booklet prints no working for them, so its solution run stops at item 57.
 *
 * Seven tables and diagrams are reproduced as figures: the falling-body data
 * (item 11), the consulting-job distribution (37), the quadrilateral angles (48),
 * the lot dimensions (49), the closed traverse (50), the azimuth/distance
 * traverse with its correction formulas (51) and the compound vertical-curve
 * diagram (57). The last of these is printed only on the solution folio, not
 * beside the stem.
 *
 * Two printed keys are internally inconsistent with the booklet's own material
 * and are noted on the item: 7 (the working gives 250, the grid says B = 273) and
 * 61 (the stem asks for the exception but the grid names a valid purpose).
 */
export const MSTC_MAY_2018_QUESTIONS: Question[] = [
  ...MSTC_MAY2018_PART1,
  ...MSTC_MAY2018_PART2,
  ...MSTC_MAY2018_PART3,
  ...MSTC_MAY2018_PART4,
];
