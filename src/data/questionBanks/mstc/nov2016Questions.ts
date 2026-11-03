import { Question } from '../../../types/exam';
import {
  mstcNov2016SolutionImages,
  mstcNov2016SolutionPages,
} from '../../mstcNov2016Images';
import { MSTC_NOV2016_PART1 } from './nov2016_part1';
import { MSTC_NOV2016_PART2 } from './nov2016_part2';
import { MSTC_NOV2016_PART3 } from './nov2016_part3';
import { MSTC_NOV2016_PART4 } from './nov2016_part4';

/**
 * MSTC — November 2016, all 75 items.
 *
 * Questions on booklet folios 345–354, the printed key at the foot of folio 354,
 * worked solutions on folios 355–378. Unlike the May 2016 sitting, the booklet
 * prints no situations: every item is self-contained, and items 67–72 are
 * terminology rather than computation.
 *
 * ## Where the working comes from
 *
 * Every item whose working the booklet prints shows that working as a **crop of
 * the booklet page**, exactly like the other Gillesania sections — one crop per
 * item, cut on the item's own left-margin label so a crop never leaks a later
 * item's answer. The part files still carry hand-derived `steps` for all 75
 * items, because those steps are what the printed key was checked against; for
 * the 72 cropped items the steps are replaced here by the scan they were
 * checked against, and for the 3 uncropped items they are all the app can show.
 *
 * Three items have no crop because the booklet prints no working for them —
 * item 4 (eight-times-a-number warm-up), item 42 (polygon classification) and
 * item 71 (a terminology item). The booklet's solution section simply runs
 * 3 → 5, 41 → 43 and 70 → 72. Those three keep their written working and their
 * editorial notes.
 */
const RAW: Question[] = [
  ...MSTC_NOV2016_PART1,
  ...MSTC_NOV2016_PART2,
  ...MSTC_NOV2016_PART3,
  ...MSTC_NOV2016_PART4,
];

export const MSTC_NOV_2016_QUESTIONS: Question[] = RAW.map((question) => {
  const pages = mstcNov2016SolutionPages(question.number);
  if (!pages) return question;

  return {
    ...question,
    solution: {
      ...question.solution,
      steps: [],
      images: mstcNov2016SolutionImages(question.number),
      pageNumber: pages.page,
      pageNumberEnd: pages.pageEnd,
    },
  };
});
