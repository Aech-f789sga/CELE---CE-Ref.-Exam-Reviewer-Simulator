import { Question } from '../../../types/exam';
import { MSTE_NOV2019_PART1 } from './nov2019_part1';
import { MSTE_NOV2019_PART2 } from './nov2019_part2';
import { MSTE_NOV2019_PART3 } from './nov2019_part3';

/**
 * MSTE November 2019 — 44 items, booklet pp. 110-119 (questions), answer key
 * printed in a box at the foot of p. 119, worked solutions pp. 120-147.
 *
 * Filed under the MSTC subject because the booklet's own title is
 * "Mathematics, Surveying and Transportation Engineering", which is exactly what
 * the simulator's MSTC subject covers.
 *
 * The printed key was read off p. 119 and every item was then checked against
 * its printed worked solution. All 44 agree once the two mislabelled option
 * blocks are read by position:
 *
 *   - Item 15 prints the first option as "D." and then prints "D." again on the
 *     fourth option. The solution computes 60 kph, which is the first option,
 *     and the key entry 15D points at that printed "D." label.
 *   - Item 20 prints its left column as "B." and "C." instead of "A." and "B.",
 *     so "C." appears twice. The solution gives 0.049, which is the first
 *     option, and the key entry 20B points at that printed "B." label.
 *
 * In both cases the options are normalised to A-D by printed position, so the
 * correct answer is recorded as A. Everything else is transcribed verbatim,
 * including item 2's option A ("f(x) = f(x)", the identity function, which the
 * printed solution discusses as such) and item 4's "Radon-22".
 */
export const MSTE_NOV2019_QUESTIONS: Question[] = [
  ...MSTE_NOV2019_PART1,
  ...MSTE_NOV2019_PART2,
  ...MSTE_NOV2019_PART3,
];
