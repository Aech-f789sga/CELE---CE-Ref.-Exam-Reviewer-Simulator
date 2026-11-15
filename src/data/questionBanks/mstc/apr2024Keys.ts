/**
 * MSTC April 2024 — printed answer key, transcribed from the Gillesania
 * Civil Engineering Reference Vol. 6 (the 349-page spread scan).
 *
 * This file is the anchor for the rest of the section: the questions are being
 * transcribed against this key, and every solution crop is checked against it.
 * It is deliberately standalone so the transcription can resume without
 * re-reading the key page.
 *
 * ## Where the section lives in the PDF
 *
 * The volume is a photo scan of two-page spreads — one PDF page carries two
 * booklet folios — so the folio arithmetic in TRANSCRIPTION_PROMPT.md (written
 * for the 844-page flatbed edition) does not apply. What does hold:
 *
 *   left folio = 2 × pdf_page − 10        (checked: pdf 10 → folios 10, 11;
 *                                          pdf 16 → folios 22, 23)
 *
 *   Q1–Q75 ......... pdf 5–14   (Q1–Q4 sit on pdf 5, right half)
 *   Answer key ..... pdf 15, left half  (folio 20)
 *   Solutions ...... pdf 15, right half (folio 21) → pdf 37 (folio 64)
 *   HPGE begins .... pdf 38 (folio 65)
 *
 * ## Booklet defect
 *
 * The key prints answers for items 1–74 and leaves **item 75 blank**. The paper
 * does run to 75 items, so this is a gap in the booklet, not a shorter paper.
 * Do not infer 75 from the working — record it as unresolved.
 */
export const MSTC_APR2024_KEY: string[] = [
  'A', 'B', 'B', 'B', 'B', 'A', 'B', 'A', 'D', 'B',
  'C', 'A', 'B', 'C', 'C', 'A', 'C', 'C', 'D', 'D',
  'B', 'A', 'D', 'C', 'A', 'A', 'D', 'C', 'A', 'B',
  'B', 'C', 'D', 'D', 'C', 'D', 'C', 'D', 'C', 'B',
  'A', 'A', 'D', 'A', 'C', 'B', 'B', 'D', 'A', 'A',
  'C', 'C', 'A', 'C', 'D', 'D', 'A', 'D', 'A', 'D',
  'C', 'B', 'D', 'D', 'B', 'C', 'C', 'B', 'B', 'B',
  'A', 'D', 'A', 'B',
];

/** Item 75 has no printed answer. */
export const MSTC_APR2024_MISSING_KEY = [75];

/**
 * Questions that lean on a printed figure, so each needs its own crop in
 * `src/images/MSTCApr2024/` before the item can be shown honestly.
 */
export const MSTC_APR2024_FIGURES: Record<number, string> = {
  11: 'rectangular pool with constant-width sidewalk',
  16: 'overhang above a sliding door, 55° depression, 63° sun elevation',
  19: 'frequency polygon, e-mail messages sent per day',
  23: 'Gateway Arch parabola, 630 ft high and 630 ft across',
  27: 'box net: 18 in × 24 in sheet with corner squares of side x',
  40: 'hoisting mechanism cable system with load W at B',
  52: 'traverse table A–E with departures and latitudes',
  54: 'horizontal compound curve, back and forward tangents',
};
