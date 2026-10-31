/**
 * Scanned illustrations for the Gillesania Volume 4 set, PSAD May 2015.
 *
 * Source: Diego Inocencio T. Gillesania, "Civil Engineering Reference Vol. 4",
 * Structural Engineering & Construction section of the May 2015 PRC board
 * examination, booklet pages 72–93.
 *
 * The booklet prints its drawings inline with the question text, so each one is
 * cropped straight out of the scan at 7× and cleaned to grayscale. Tables are
 * never cropped — they are transcribed as markdown inside the question text.
 *
 * Figures are keyed by the number of the *situation* they belong to (not the
 * item number), because one drawing serves every item in its situation.
 * Situations 23 and 25 print no drawing of their own: the booklet refers back to
 * the column section already given for Situations 22 and 24, so they reuse it.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a production build.
 */

import s1 from '../images/PSADMay2015/camp1.jpg';
import s2 from '../images/PSADMay2015/tower2.jpg';
import s3 from '../images/PSADMay2015/arch3.jpg';
import s4 from '../images/PSADMay2015/frame4.jpg';
import s5 from '../images/PSADMay2015/truss5.jpg';
import s6 from '../images/PSADMay2015/truss6.jpg';
import s7 from '../images/PSADMay2015/beam7.jpg';
import s8 from '../images/PSADMay2015/frame8.jpg';
import s9 from '../images/PSADMay2015/wall9.jpg';
import s10 from '../images/PSADMay2015/truss10.jpg';
import s11 from '../images/PSADMay2015/col11.jpg';
import s12 from '../images/PSADMay2015/mohr12.jpg';
import s13 from '../images/PSADMay2015/elem13.jpg';
import s14 from '../images/PSADMay2015/splice14.jpg';
import s15 from '../images/PSADMay2015/weld15.jpg';
import s16 from '../images/PSADMay2015/brkt16.jpg';
import s17 from '../images/PSADMay2015/boxcol17.jpg';
import s18 from '../images/PSADMay2015/tbeam18.jpg';
import s19 from '../images/PSADMay2015/plan19.jpg';
import s21 from '../images/PSADMay2015/beam21.jpg';
import s22 from '../images/PSADMay2015/colsec22.jpg';
import s24 from '../images/PSADMay2015/tcol24.jpg';
import s26 from '../images/PSADMay2015/pile26.jpg';

export const PSAD_MAY_2015_FIGURES: Record<number, string> = {
  1: s1,
  2: s2,
  3: s3,
  4: s4,
  5: s5,
  6: s6,
  7: s7,
  8: s8,
  9: s9,
  10: s10,
  11: s11,
  12: s12,
  13: s13,
  14: s14,
  15: s15,
  16: s16,
  17: s17,
  18: s18,
  19: s19,
  21: s21,
  22: s22,
  23: s22,
  24: s24,
  25: s24,
  26: s26,
};

/**
 * HTML for a scanned figure, handed to EngineeringFigure through `figureSvg`.
 */
export function psadMay2015Figure(situation: number, alt: string): string {
  const src = PSAD_MAY_2015_FIGURES[situation];
  if (!src) throw new Error(`No PSAD May 2015 figure for situation ${situation}`);
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
