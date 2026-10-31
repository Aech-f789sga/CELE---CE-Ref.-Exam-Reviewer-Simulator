/**
 * Scanned illustrations for the Gillesania Volume 4 set, HPGE May 2015.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * HPGE section of the May 2015 PRC board examination, booklet pages 38–50.
 *
 * The booklet prints its drawings inline with the question text, so each one is
 * cropped straight out of the scan at 7× and cleaned to grayscale. Tables are
 * never cropped — they are transcribed as markdown inside the question text.
 *
 * Figures are keyed by the number of the *situation* they belong to (not the
 * item number), because one drawing serves every item in its situation.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import s3 from '../images/HPGEMay2015/gate3.jpg';
import s4 from '../images/HPGEMay2015/dam4.jpg';
import s5 from '../images/HPGEMay2015/cyl5.jpg';
import s7 from '../images/HPGEMay2015/jet7.jpg';
import s9 from '../images/HPGEMay2015/net9.jpg';
import s10 from '../images/HPGEMay2015/net10.jpg';
import s13 from '../images/HPGEMay2015/aquif13.jpg';
import s16 from '../images/HPGEMay2015/wall16.jpg';
import s17 from '../images/HPGEMay2015/foot17.jpg';

export const HPGE_MAY_2015_FIGURES: Record<number, string> = {
  3: s3,
  4: s4,
  5: s5,
  7: s7,
  9: s9,
  10: s10,
  13: s13,
  16: s16,
  17: s17,
};

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 */
export function hpgeMay2015Figure(situation: number, alt: string): string {
  const src = HPGE_MAY_2015_FIGURES[situation];
  if (!src) throw new Error(`No HPGE May 2015 figure for situation ${situation}`);
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img
    src="${src}"
    alt="${alt}"
    class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
    referrerpolicy="no-referrer"
  />
</div>`;
}
