/**
 * Scanned assets for BESAVILLA MSTC November 2025.
 *
 * Source: Venancio I. Besavilla Jr., "Civil Engineering Licensure Examinations —
 * Mathematics, Surveying and Transportation Engineering, November 2025"
 * (24 PDF pages, booklet pages M-257 to M-280).
 *
 * The booklet is a solved-problem review, so 50 of the 61 numbered situations
 * print the worked solution directly under the statement. Those items carry
 * `workedSolution: true`, no choices, and are answered by revealing the scanned
 * solution and self-marking. The other 11 situations are genuine four-choice
 * items whose key the booklet marks by italicising the option and setting a
 * pointing hand beside it.
 *
 * - Figures: ten diagrams are printed with their situations (painting-of-house
 *   activity network, microwave tower elevation, dead-shore detail, cliff
 *   traverse profile, contour interpolation grid, copper-based box, parabolic
 *   arc, forearm with biceps force, isosceles triangle about the unit circle,
 *   and the four pulley arrangements). The colour choices, household-frequency
 *   and site-cost tables are reference data, so they are encoded as markdown on
 *   the items that cite them rather than cropped.
 * - Solutions: one crop per situation, page-aligned and split across columns
 *   where the derivation runs over a column break (S11, S16, S17, S36, S43,
 *   S44, S49, S50, S52, S56 and S57). Crops are rendered at 300 dpi,
 *   illumination-flattened, trimmed to their ink, capped at 1400 px on the long
 *   edge, and never include the running head or the next situation's banner.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import f14 from '../images/BESANov2025MSTC/F14.jpg';
import f17 from '../images/BESANov2025MSTC/F17.jpg';
import f18 from '../images/BESANov2025MSTC/F18.jpg';
import f21 from '../images/BESANov2025MSTC/F21.jpg';
import f31 from '../images/BESANov2025MSTC/F31.jpg';
import f33 from '../images/BESANov2025MSTC/F33.jpg';
import f36 from '../images/BESANov2025MSTC/F36.jpg';
import f40 from '../images/BESANov2025MSTC/F40.jpg';
import f50 from '../images/BESANov2025MSTC/F50.jpg';
import f51 from '../images/BESANov2025MSTC/F51.jpg';
import s0101 from '../images/BESANov2025MSTC/S01_01.jpg';
import s0201 from '../images/BESANov2025MSTC/S02_01.jpg';
import s0301 from '../images/BESANov2025MSTC/S03_01.jpg';
import s0401 from '../images/BESANov2025MSTC/S04_01.jpg';
import s0501 from '../images/BESANov2025MSTC/S05_01.jpg';
import s0601 from '../images/BESANov2025MSTC/S06_01.jpg';
import s0701 from '../images/BESANov2025MSTC/S07_01.jpg';
import s0801 from '../images/BESANov2025MSTC/S08_01.jpg';
import s0901 from '../images/BESANov2025MSTC/S09_01.jpg';
import s1001 from '../images/BESANov2025MSTC/S10_01.jpg';
import s1101 from '../images/BESANov2025MSTC/S11_01.jpg';
import s1102 from '../images/BESANov2025MSTC/S11_02.jpg';
import s1201 from '../images/BESANov2025MSTC/S12_01.jpg';
import s1401 from '../images/BESANov2025MSTC/S14_01.jpg';
import s1501 from '../images/BESANov2025MSTC/S15_01.jpg';
import s1601 from '../images/BESANov2025MSTC/S16_01.jpg';
import s1602 from '../images/BESANov2025MSTC/S16_02.jpg';
import s1701 from '../images/BESANov2025MSTC/S17_01.jpg';
import s1702 from '../images/BESANov2025MSTC/S17_02.jpg';
import s1901 from '../images/BESANov2025MSTC/S19_01.jpg';
import s2001 from '../images/BESANov2025MSTC/S20_01.jpg';
import s2101 from '../images/BESANov2025MSTC/S21_01.jpg';
import s2501 from '../images/BESANov2025MSTC/S25_01.jpg';
import s2601 from '../images/BESANov2025MSTC/S26_01.jpg';
import s2701 from '../images/BESANov2025MSTC/S27_01.jpg';
import s2801 from '../images/BESANov2025MSTC/S28_01.jpg';
import s2901 from '../images/BESANov2025MSTC/S29_01.jpg';
import s3001 from '../images/BESANov2025MSTC/S30_01.jpg';
import s3101 from '../images/BESANov2025MSTC/S31_01.jpg';
import s3201 from '../images/BESANov2025MSTC/S32_01.jpg';
import s3301 from '../images/BESANov2025MSTC/S33_01.jpg';
import s3601 from '../images/BESANov2025MSTC/S36_01.jpg';
import s3602 from '../images/BESANov2025MSTC/S36_02.jpg';
import s3701 from '../images/BESANov2025MSTC/S37_01.jpg';
import s3801 from '../images/BESANov2025MSTC/S38_01.jpg';
import s3901 from '../images/BESANov2025MSTC/S39_01.jpg';
import s4001 from '../images/BESANov2025MSTC/S40_01.jpg';
import s4101 from '../images/BESANov2025MSTC/S41_01.jpg';
import s4301 from '../images/BESANov2025MSTC/S43_01.jpg';
import s4302 from '../images/BESANov2025MSTC/S43_02.jpg';
import s4401 from '../images/BESANov2025MSTC/S44_01.jpg';
import s4402 from '../images/BESANov2025MSTC/S44_02.jpg';
import s4601 from '../images/BESANov2025MSTC/S46_01.jpg';
import s4701 from '../images/BESANov2025MSTC/S47_01.jpg';
import s4801 from '../images/BESANov2025MSTC/S48_01.jpg';
import s4901 from '../images/BESANov2025MSTC/S49_01.jpg';
import s4902 from '../images/BESANov2025MSTC/S49_02.jpg';
import s5001 from '../images/BESANov2025MSTC/S50_01.jpg';
import s5002 from '../images/BESANov2025MSTC/S50_02.jpg';
import s5201 from '../images/BESANov2025MSTC/S52_01.jpg';
import s5202 from '../images/BESANov2025MSTC/S52_02.jpg';
import s5301 from '../images/BESANov2025MSTC/S53_01.jpg';
import s5501 from '../images/BESANov2025MSTC/S55_01.jpg';
import s5601 from '../images/BESANov2025MSTC/S56_01.jpg';
import s5602 from '../images/BESANov2025MSTC/S56_02.jpg';
import s5701 from '../images/BESANov2025MSTC/S57_01.jpg';
import s5702 from '../images/BESANov2025MSTC/S57_02.jpg';
import s5801 from '../images/BESANov2025MSTC/S58_01.jpg';
import s5901 from '../images/BESANov2025MSTC/S59_01.jpg';
import s6001 from '../images/BESANov2025MSTC/S60_01.jpg';
import s6101 from '../images/BESANov2025MSTC/S61_01.jpg';

const FIGURES: Record<string, string> = {
  F14: f14,
  F17: f17,
  F18: f18,
  F21: f21,
  F31: f31,
  F33: f33,
  F36: f36,
  F40: f40,
  F50: f50,
  F51: f51,
};

const SOLUTIONS: Record<string, string[]> = {
  S01: [s0101],
  S02: [s0201],
  S03: [s0301],
  S04: [s0401],
  S05: [s0501],
  S06: [s0601],
  S07: [s0701],
  S08: [s0801],
  S09: [s0901],
  S10: [s1001],
  S11: [s1101, s1102],
  S12: [s1201],
  S14: [s1401],
  S15: [s1501],
  S16: [s1601, s1602],
  S17: [s1701, s1702],
  S19: [s1901],
  S20: [s2001],
  S21: [s2101],
  S25: [s2501],
  S26: [s2601],
  S27: [s2701],
  S28: [s2801],
  S29: [s2901],
  S30: [s3001],
  S31: [s3101],
  S32: [s3201],
  S33: [s3301],
  S36: [s3601, s3602],
  S37: [s3701],
  S38: [s3801],
  S39: [s3901],
  S40: [s4001],
  S41: [s4101],
  S43: [s4301, s4302],
  S44: [s4401, s4402],
  S46: [s4601],
  S47: [s4701],
  S48: [s4801],
  S49: [s4901, s4902],
  S50: [s5001, s5002],
  S52: [s5201, s5202],
  S53: [s5301],
  S55: [s5501],
  S56: [s5601, s5602],
  S57: [s5701, s5702],
  S58: [s5801],
  S59: [s5901],
  S60: [s6001],
  S61: [s6101],
};

/**
 * Wraps a figure crop in the markup `EngineeringFigure` expects.
 *
 * `figureSvg` is injected with `dangerouslySetInnerHTML`, so it must be HTML,
 * not a bare URL — handing it a URL string renders the path as text. This
 * mirrors the `besaNov2025Figure` helper used by the PSAD bank.
 */
export function besaMstcNov2025Figure(key: string): string | undefined {
  const src = FIGURES[key];
  if (!src) return undefined;
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img
    src="${src}"
    alt="Besavilla MSTC November 2025 illustration"
    class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
    referrerpolicy="no-referrer"
  />
</div>`;
}

export function besaMstcNov2025SolutionImages(key: string): string[] {
  return SOLUTIONS[key] ?? [];
}
