/**
 * Scanned assets for MSTE November 2019.
 *
 * The booklet is titled "Mathematics, Surveying and Transportation Engineering —
 * November 2019", which is the subject the simulator labels MSTC, so the set is
 * filed under MSTC / November / 2019.
 *
 * The source is a CamScanner scan with no text layer. This booklet prints **no**
 * illustrations on the question pages: every diagram in it lives inside a worked
 * solution (the pendulum, the antenna, the mountain profile, the inscribed-angle
 * circle, the tripod of stations, the conical pile, the box blank, the parabola,
 * the vehicle-position triangle, the slope-distance sketch, the rolling-resistance
 * table). Those are all captured by the page crops below.
 *
 * The only non-prose layouts on the question pages are four tables — the
 * sandwich-machine reliabilities, the benefit-cost schedule, and the two copies of
 * the asphalt mix-design table — and those are encoded as markdown text in the
 * question bank rather than cropped.
 *
 * Booklet page (120-147) -> solution crop. The crop index is the page number
 * offset by 119, so page 120 is S01 and page 147 is S28.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import sol01 from '../images/MSTENov2019/MSTE_Nov_2019_S01.jpg';
import sol02 from '../images/MSTENov2019/MSTE_Nov_2019_S02.jpg';
import sol03 from '../images/MSTENov2019/MSTE_Nov_2019_S03.jpg';
import sol04 from '../images/MSTENov2019/MSTE_Nov_2019_S04.jpg';
import sol05 from '../images/MSTENov2019/MSTE_Nov_2019_S05.jpg';
import sol06 from '../images/MSTENov2019/MSTE_Nov_2019_S06.jpg';
import sol07 from '../images/MSTENov2019/MSTE_Nov_2019_S07.jpg';
import sol08 from '../images/MSTENov2019/MSTE_Nov_2019_S08.jpg';
import sol09 from '../images/MSTENov2019/MSTE_Nov_2019_S09.jpg';
import sol10 from '../images/MSTENov2019/MSTE_Nov_2019_S10.jpg';
import sol11 from '../images/MSTENov2019/MSTE_Nov_2019_S11.jpg';
import sol12 from '../images/MSTENov2019/MSTE_Nov_2019_S12.jpg';
import sol13 from '../images/MSTENov2019/MSTE_Nov_2019_S13.jpg';
import sol14 from '../images/MSTENov2019/MSTE_Nov_2019_S14.jpg';
import sol15 from '../images/MSTENov2019/MSTE_Nov_2019_S15.jpg';
import sol16 from '../images/MSTENov2019/MSTE_Nov_2019_S16.jpg';
import sol17 from '../images/MSTENov2019/MSTE_Nov_2019_S17.jpg';
import sol18 from '../images/MSTENov2019/MSTE_Nov_2019_S18.jpg';
import sol19 from '../images/MSTENov2019/MSTE_Nov_2019_S19.jpg';
import sol20 from '../images/MSTENov2019/MSTE_Nov_2019_S20.jpg';
import sol21 from '../images/MSTENov2019/MSTE_Nov_2019_S21.jpg';
import sol22 from '../images/MSTENov2019/MSTE_Nov_2019_S22.jpg';
import sol23 from '../images/MSTENov2019/MSTE_Nov_2019_S23.jpg';
import sol24 from '../images/MSTENov2019/MSTE_Nov_2019_S24.jpg';
import sol25 from '../images/MSTENov2019/MSTE_Nov_2019_S25.jpg';
import sol26 from '../images/MSTENov2019/MSTE_Nov_2019_S26.jpg';
import sol27 from '../images/MSTENov2019/MSTE_Nov_2019_S27.jpg';
import sol28 from '../images/MSTENov2019/MSTE_Nov_2019_S28.jpg';

const SOLUTION_PAGES: Record<number, string> = {
  120: sol01,
  121: sol02,
  122: sol03,
  123: sol04,
  124: sol05,
  125: sol06,
  126: sol07,
  127: sol08,
  128: sol09,
  129: sol10,
  130: sol11,
  131: sol12,
  132: sol13,
  133: sol14,
  134: sol15,
  135: sol16,
  136: sol17,
  137: sol18,
  138: sol19,
  139: sol20,
  140: sol21,
  141: sol22,
  142: sol23,
  143: sol24,
  144: sol25,
  145: sol26,
  146: sol27,
  147: sol28,
};

/**
 * Item number -> booklet pages its worked solution is printed on. The solutions
 * run together without page breaks between items, so an item that starts near the
 * foot of a page continues onto the next one.
 */
const SOLUTION_SPREAD: Record<number, number[]> = {
  1: [120],
  2: [120],
  3: [121],
  4: [121, 122],
  5: [123],
  6: [123],
  7: [124],
  8: [124],
  9: [124],
  10: [125, 126],
  11: [126, 127],
  12: [127],
  13: [127],
  14: [128],
  15: [128],
  16: [129],
  17: [129],
  18: [130],
  19: [130],
  20: [130, 131],
  21: [131],
  22: [131],
  23: [132],
  24: [132, 133],
  25: [133],
  26: [133, 134],
  27: [134, 135],
  28: [135, 136],
  29: [136, 137],
  30: [137, 138],
  31: [138],
  32: [139],
  33: [139],
  34: [140],
  35: [141],
  36: [141, 142],
  37: [142],
  38: [142, 143],
  39: [143],
  40: [144],
  41: [145],
  42: [145, 146],
  43: [146],
  44: [146, 147],
};

export const msteNov2019SolutionImages = (item: number): string[] =>
  (SOLUTION_SPREAD[item] ?? []).map((p) => SOLUTION_PAGES[p]).filter(Boolean);

export const msteNov2019SolutionPage = (item: number): number =>
  SOLUTION_SPREAD[item]?.[0] ?? 120;

export const msteNov2019SolutionPageEnd = (item: number): number => {
  const pages = SOLUTION_SPREAD[item] ?? [];
  return pages.length ? pages[pages.length - 1] : 120;
};
