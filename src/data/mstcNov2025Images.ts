/**
 * Direct static asset imports for MSTC November 2025 images.
 * This guarantees Vite bundles and emits every illustration image into dist/assets/ on Vercel deployments,
 * completely eliminating 404 image load errors on Vercel and production builds.
 */
import mstcNov25_2 from '../images/MSTCNov2025/MSTC_November_2024_2.png';
import mstcNov25_12 from '../images/MSTCNov2025/MSTC_November_2024_12.png';
import mstcNov25_13 from '../images/MSTCNov2025/MSTC_November_2024_13.png';
import mstcNov25_14 from '../images/MSTCNov2025/MSTC_November_2024_14.png';
import mstcNov25_15 from '../images/MSTCNov2025/MSTC_November_2024_15.png';
import mstcNov25_20 from '../images/MSTCNov2025/MSTC_November_2024_20.png';
import mstcNov25_24 from '../images/MSTCNov2025/MSTC_November_2024_24.png';
import mstcNov25_25 from '../images/MSTCNov2025/MSTC_November_2024_25.png';
import mstcNov25_26 from '../images/MSTCNov2025/MSTC_November_2024_26.png';
import mstcNov25_39 from '../images/MSTCNov2025/MSTC_November_2024_39.png';
import mstcNov25_40 from '../images/MSTCNov2025/MSTC_November_2024_40.png';
import mstcNov25_50 from '../images/MSTCNov2025/MSTC_November_2024_50.png';
import mstcNov25_56 from '../images/MSTCNov2025/MSTC_November_2024_56.png';

/**
 * Mapping of MSTC November 2025 question numbers to bundled asset URLs.
 */
export const MSTC_NOV_2025_BUNDLED_MAP: Record<number, string> = {
  2: mstcNov25_2,
  12: mstcNov25_12,
  13: mstcNov25_13,
  14: mstcNov25_14,
  15: mstcNov25_15,
  20: mstcNov25_20,
  24: mstcNov25_24,
  25: mstcNov25_25,
  26: mstcNov25_26,
  39: mstcNov25_39,
  40: mstcNov25_40,
  50: mstcNov25_50,
  56: mstcNov25_56,
};

/**
 * Get the bundled image URL for a given MSTC Nov 2025 question number.
 */
export function getMstcNov2025ImageUrl(questionNumber: number): string {
  if (MSTC_NOV_2025_BUNDLED_MAP[questionNumber]) {
    return MSTC_NOV_2025_BUNDLED_MAP[questionNumber];
  }
  return `/images/MSTCNov2025/MSTC_November_2024_${questionNumber}.png`;
}

/**
 * Helper to build the HTML string for figureSvg with Vite-bundled asset URLs.
 */
export function getMstcNov2025FigureHtml(
  questionNumber: number,
  caption: string = `Figure ${questionNumber}: MSTC November 2025 Illustration`
): string {
  const bundledSrc = getMstcNov2025ImageUrl(questionNumber);
  const fallbackSrc1 = `/images/MSTCNov2025/MSTC_November_2024_${questionNumber}.png`;
  const fallbackSrc2 = `/images/MSTCNov2025/MSTC_November_2025_${questionNumber}.png`;
  const fallbackSrc3 = `/src/images/MSTCNov2025/MSTC_November_2024_${questionNumber}.png`;

  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img 
    src="${bundledSrc}" 
    alt="${caption}" 
    class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
    loading="eager" 
    referrerpolicy="no-referrer"
    onerror="if(this.dataset.tried === 'p2'){ this.src = '${fallbackSrc3}'; this.dataset.tried = 'done'; } else if(this.dataset.tried === 'p1'){ this.src = '${fallbackSrc2}'; this.dataset.tried = 'p2'; } else if(!this.dataset.tried){ this.dataset.tried = 'p1'; this.src = '${fallbackSrc1}'; }"
  />
</div>`;
}
