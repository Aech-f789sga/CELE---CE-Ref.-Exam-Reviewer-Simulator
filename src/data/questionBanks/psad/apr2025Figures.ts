import psadS3 from '../../../image/PSADAp2025/PSAD_April_2025_Situation_3.png';
import psadS4 from '../../../image/PSADAp2025/PSAD_April_2025_Situation_4.png';

export interface PsadApr2025Figure {
  src: string;
  caption: string;
}

/** Figures cropped from the user-provided April 2025 PSAD scan. */
export const PSAD_APRIL_2025_FIGURES: Record<number, PsadApr2025Figure> = {
  3: { src: psadS3, caption: 'Situation 3: Rigid boom BCD supported by cables AC and AD' },
  4: { src: psadS4, caption: 'Situation 4: Pickup truck pulling a log; dimensions and friction data' },
};

export function getPsadApr2025FigureHtml(situationNumber: number): string {
  const figure = PSAD_APRIL_2025_FIGURES[situationNumber];
  if (!figure) return '';
  const safeAlt = figure.caption.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return `<div class="flex flex-col items-center justify-center w-full py-2">
    <img src="${figure.src}" alt="${safeAlt}" class="max-w-xl w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" loading="lazy" />
  </div>`;
}
