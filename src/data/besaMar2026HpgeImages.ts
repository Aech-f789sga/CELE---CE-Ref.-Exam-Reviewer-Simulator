/**
 * Scanned assets for BESAVILLA HPGE March 2026.
 *
 * Source: Venancio I. Besavilla Jr., "Civil Engineering Licensure Examinations
 * — Hydraulics and Geotechnical Engineering, March 2026" (10 PDF pages, booklet
 * pages H-222 to H-231).
 *
 * 47 items. The first twenty are four-choice concept questions whose key the
 * booklet marks by italicising the option and setting a pointing hand beside
 * it; they print no working, so they carry no images. The other twenty-seven
 * print a worked "Solution:" block, so those items carry `workedSolution: true`,
 * no choices, and are answered by revealing the scanned working and
 * self-marking.
 *
 * - Solutions: one crop per column of the working in reading order. The booklet
 *   is printed two columns to a page, and the longer derivations run from the
 *   foot of one column into the next, so two items need two crops each.
 * - Figures: only item 21 prints a drawing in its statement (the retaining
 *   wall). The diagrams inside the worked solutions are already part of the
 *   solution crops.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */

import i2101 from '../images/BESAMar2026HPGE/I21_01.jpg';
import i2102 from '../images/BESAMar2026HPGE/I21_02.jpg';
import i2103 from '../images/BESAMar2026HPGE/I21_03.jpg';
import i2201 from '../images/BESAMar2026HPGE/I22_01.jpg';
import i2301 from '../images/BESAMar2026HPGE/I23_01.jpg';
import i2401 from '../images/BESAMar2026HPGE/I24_01.jpg';
import i2501 from '../images/BESAMar2026HPGE/I25_01.jpg';
import i2601 from '../images/BESAMar2026HPGE/I26_01.jpg';
import i2701 from '../images/BESAMar2026HPGE/I27_01.jpg';
import i2801 from '../images/BESAMar2026HPGE/I28_01.jpg';
import i2901 from '../images/BESAMar2026HPGE/I29_01.jpg';
import i3001 from '../images/BESAMar2026HPGE/I30_01.jpg';
import i3101 from '../images/BESAMar2026HPGE/I31_01.jpg';
import i3201 from '../images/BESAMar2026HPGE/I32_01.jpg';
import i3301 from '../images/BESAMar2026HPGE/I33_01.jpg';
import i3401 from '../images/BESAMar2026HPGE/I34_01.jpg';
import i3501 from '../images/BESAMar2026HPGE/I35_01.jpg';
import i3601 from '../images/BESAMar2026HPGE/I36_01.jpg';
import i3701 from '../images/BESAMar2026HPGE/I37_01.jpg';
import i3801 from '../images/BESAMar2026HPGE/I38_01.jpg';
import i3901 from '../images/BESAMar2026HPGE/I39_01.jpg';
import i4001 from '../images/BESAMar2026HPGE/I40_01.jpg';
import i4101 from '../images/BESAMar2026HPGE/I41_01.jpg';
import i4201 from '../images/BESAMar2026HPGE/I42_01.jpg';
import i4301 from '../images/BESAMar2026HPGE/I43_01.jpg';
import i4401 from '../images/BESAMar2026HPGE/I44_01.jpg';
import i4501 from '../images/BESAMar2026HPGE/I45_01.jpg';
import i4601 from '../images/BESAMar2026HPGE/I46_01.jpg';
import i4602 from '../images/BESAMar2026HPGE/I46_02.jpg';
import i4701 from '../images/BESAMar2026HPGE/I47_01.jpg';
import f2101 from '../images/BESAMar2026HPGE/F21_01.jpg';

/** Scanned working, keyed by item (I21 … I47). */
const SOLUTIONS: Record<string, string[]> = {
  I21: [i2101, i2102, i2103],
  I22: [i2201],
  I23: [i2301],
  I24: [i2401],
  I25: [i2501],
  I26: [i2601],
  I27: [i2701],
  I28: [i2801],
  I29: [i2901],
  I30: [i3001],
  I31: [i3101],
  I32: [i3201],
  I33: [i3301],
  I34: [i3401],
  I35: [i3501],
  I36: [i3601],
  I37: [i3701],
  I38: [i3801],
  I39: [i3901],
  I40: [i4001],
  I41: [i4101],
  I42: [i4201],
  I43: [i4301],
  I44: [i4401],
  I45: [i4501],
  I46: [i4601, i4602],
  I47: [i4701],
};

/** Statement drawings, keyed by item. */
const FIGURES: Record<string, string[]> = {
  F21: [f2101],
};

/**
 * Wraps the statement drawings for an item in the markup `EngineeringFigure`
 * expects.
 *
 * `figureSvg` is injected with `dangerouslySetInnerHTML`, so it must be HTML,
 * not a bare URL — handing it a URL renders the path as text.
 */
export function besaMar2026HpgeFigure(key: string): string | undefined {
  const srcs = FIGURES[key];
  if (!srcs?.length) return undefined;
  const imgs = srcs
    .map(
      (src, i) => `<img
    src="${src}"
    alt="Besavilla HPGE March 2026 illustration${srcs.length > 1 ? ` ${i + 1}` : ''}"
    class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
    referrerpolicy="no-referrer"
  />`,
    )
    .join('\n  ');
  return `<div class="flex flex-col items-center justify-center gap-2 w-full py-2">
  ${imgs}
</div>`;
}

/**
 * Scanned working for an item. `SolutionFigures` puts these straight into
 * `<img src>`, so here a bare URL is what it wants.
 */
export function besaMar2026HpgeSolutionImages(key: string): string[] {
  return SOLUTIONS[key] ?? [];
}
