/**
 * Scanned assets for BESAVILLA PSAD November 2025.
 *
 * Source: Venancio I. Besavilla Jr., "Civil Engineering Licensure Examinations —
 * Structural Design and Construction, November 2025" (booklet pages D-433 to
 * D-469, 37 PDF pages). Unlike the Gillesania compilations this is a
 * solved-problem review book: every "CE Board Nov. 2025" situation is split
 * into a/b/c sub-parts with the worked solution printed directly underneath,
 * and there are no A-D choices. Those items are answered by revealing the
 * scanned solution and self-marking.
 *
 * - Figures: eighteen diagrams are printed with the situations (sheet-pile
 *   elevation and propped-cantilever deflection cases, shaft fixed at both
 *   ends, butt-splice detail, tied column section, three cylinders in a bin,
 *   roof truss, bridge truss with influence line, W410x100 section, lamp-post
 *   cables, lifting mast, AASHTO Type V girder, two-span and triangular-load
 *   beam diagram sets, weld groups, footing plan, 30-degree block, and the two
 *   bar-support figures). The AISC allowable-stress table on p. D-460 is book
 *   reference data, so it is encoded as markdown on the item that cites it
 *   rather than cropped.
 * - Solutions: one crop per sub-part, page-aligned and split across columns
 *   where the derivation runs over a column break (S05B, S18C, S20B, S21B and
 *   friends). Crops are rendered at 300 dpi, illumination-flattened, trimmed to
 *   their ink, capped at 1400 px on the long edge, and never include the
 *   running head or the next situation's banner.
 *
 * Images are imported statically so Vite emits them into dist/assets and they
 * survive a Vercel build.
 */
import f01 from '../images/BESANov2025/F01.jpg';
import f01b from '../images/BESANov2025/F01B.jpg';
import f02 from '../images/BESANov2025/F02.jpg';
import f03 from '../images/BESANov2025/F03.jpg';
import f04 from '../images/BESANov2025/F04.jpg';
import f06 from '../images/BESANov2025/F06.jpg';
import f07 from '../images/BESANov2025/F07.jpg';
import f09 from '../images/BESANov2025/F09.jpg';
import f10 from '../images/BESANov2025/F10.jpg';
import f11 from '../images/BESANov2025/F11.jpg';
import f13 from '../images/BESANov2025/F13.jpg';
import f15 from '../images/BESANov2025/F15.jpg';
import f16 from '../images/BESANov2025/F16.jpg';
import f17 from '../images/BESANov2025/F17.jpg';
import f20 from '../images/BESANov2025/F20.jpg';
import f21 from '../images/BESANov2025/F21.jpg';
import f23 from '../images/BESANov2025/F23.jpg';
import f24 from '../images/BESANov2025/F24.jpg';
import s01a01 from '../images/BESANov2025/S01A_01.jpg';
import s01b01 from '../images/BESANov2025/S01B_01.jpg';
import s01b02 from '../images/BESANov2025/S01B_02.jpg';
import s01c01 from '../images/BESANov2025/S01C_01.jpg';
import s01c02 from '../images/BESANov2025/S01C_02.jpg';
import s02a01 from '../images/BESANov2025/S02A_01.jpg';
import s02b01 from '../images/BESANov2025/S02B_01.jpg';
import s03a01 from '../images/BESANov2025/S03A_01.jpg';
import s03a02 from '../images/BESANov2025/S03A_02.jpg';
import s03b01 from '../images/BESANov2025/S03B_01.jpg';
import s03c01 from '../images/BESANov2025/S03C_01.jpg';
import s03c02 from '../images/BESANov2025/S03C_02.jpg';
import s04a01 from '../images/BESANov2025/S04A_01.jpg';
import s04b01 from '../images/BESANov2025/S04B_01.jpg';
import s04b02 from '../images/BESANov2025/S04B_02.jpg';
import s04c01 from '../images/BESANov2025/S04C_01.jpg';
import s04c02 from '../images/BESANov2025/S04C_02.jpg';
import s05a01 from '../images/BESANov2025/S05A_01.jpg';
import s05a02 from '../images/BESANov2025/S05A_02.jpg';
import s05b01 from '../images/BESANov2025/S05B_01.jpg';
import s05b02 from '../images/BESANov2025/S05B_02.jpg';
import s05b03 from '../images/BESANov2025/S05B_03.jpg';
import s05b04 from '../images/BESANov2025/S05B_04.jpg';
import s05c01 from '../images/BESANov2025/S05C_01.jpg';
import s05c02 from '../images/BESANov2025/S05C_02.jpg';
import s06a01 from '../images/BESANov2025/S06A_01.jpg';
import s06b01 from '../images/BESANov2025/S06B_01.jpg';
import s06c01 from '../images/BESANov2025/S06C_01.jpg';
import s07a01 from '../images/BESANov2025/S07A_01.jpg';
import s07b01 from '../images/BESANov2025/S07B_01.jpg';
import s07c01 from '../images/BESANov2025/S07C_01.jpg';
import s09a01 from '../images/BESANov2025/S09A_01.jpg';
import s09b01 from '../images/BESANov2025/S09B_01.jpg';
import s09c01 from '../images/BESANov2025/S09C_01.jpg';
import s10a01 from '../images/BESANov2025/S10A_01.jpg';
import s10b01 from '../images/BESANov2025/S10B_01.jpg';
import s10b02 from '../images/BESANov2025/S10B_02.jpg';
import s10c01 from '../images/BESANov2025/S10C_01.jpg';
import s11a01 from '../images/BESANov2025/S11A_01.jpg';
import s11a02 from '../images/BESANov2025/S11A_02.jpg';
import s11b01 from '../images/BESANov2025/S11B_01.jpg';
import s11b02 from '../images/BESANov2025/S11B_02.jpg';
import s11c01 from '../images/BESANov2025/S11C_01.jpg';
import s12a01 from '../images/BESANov2025/S12A_01.jpg';
import s12a02 from '../images/BESANov2025/S12A_02.jpg';
import s12b01 from '../images/BESANov2025/S12B_01.jpg';
import s12c01 from '../images/BESANov2025/S12C_01.jpg';
import s12c02 from '../images/BESANov2025/S12C_02.jpg';
import s13a01 from '../images/BESANov2025/S13A_01.jpg';
import s13a02 from '../images/BESANov2025/S13A_02.jpg';
import s13b01 from '../images/BESANov2025/S13B_01.jpg';
import s13c01 from '../images/BESANov2025/S13C_01.jpg';
import s13c02 from '../images/BESANov2025/S13C_02.jpg';
import s14a01 from '../images/BESANov2025/S14A_01.jpg';
import s14a02 from '../images/BESANov2025/S14A_02.jpg';
import s14b01 from '../images/BESANov2025/S14B_01.jpg';
import s14c01 from '../images/BESANov2025/S14C_01.jpg';
import s14c02 from '../images/BESANov2025/S14C_02.jpg';
import s15a01 from '../images/BESANov2025/S15A_01.jpg';
import s15b01 from '../images/BESANov2025/S15B_01.jpg';
import s15b02 from '../images/BESANov2025/S15B_02.jpg';
import s15c01 from '../images/BESANov2025/S15C_01.jpg';
import s16a01 from '../images/BESANov2025/S16A_01.jpg';
import s16b01 from '../images/BESANov2025/S16B_01.jpg';
import s16c01 from '../images/BESANov2025/S16C_01.jpg';
import s16c02 from '../images/BESANov2025/S16C_02.jpg';
import s17a01 from '../images/BESANov2025/S17A_01.jpg';
import s17b01 from '../images/BESANov2025/S17B_01.jpg';
import s17b02 from '../images/BESANov2025/S17B_02.jpg';
import s17c01 from '../images/BESANov2025/S17C_01.jpg';
import s18a01 from '../images/BESANov2025/S18A_01.jpg';
import s18b01 from '../images/BESANov2025/S18B_01.jpg';
import s18b02 from '../images/BESANov2025/S18B_02.jpg';
import s18c01 from '../images/BESANov2025/S18C_01.jpg';
import s18c02 from '../images/BESANov2025/S18C_02.jpg';
import s19a01 from '../images/BESANov2025/S19A_01.jpg';
import s19a02 from '../images/BESANov2025/S19A_02.jpg';
import s19b01 from '../images/BESANov2025/S19B_01.jpg';
import s19c01 from '../images/BESANov2025/S19C_01.jpg';
import s20a01 from '../images/BESANov2025/S20A_01.jpg';
import s20a02 from '../images/BESANov2025/S20A_02.jpg';
import s20b01 from '../images/BESANov2025/S20B_01.jpg';
import s20b02 from '../images/BESANov2025/S20B_02.jpg';
import s20b03 from '../images/BESANov2025/S20B_03.jpg';
import s20c01 from '../images/BESANov2025/S20C_01.jpg';
import s21a01 from '../images/BESANov2025/S21A_01.jpg';
import s21a02 from '../images/BESANov2025/S21A_02.jpg';
import s21b01 from '../images/BESANov2025/S21B_01.jpg';
import s21b02 from '../images/BESANov2025/S21B_02.jpg';
import s21c01 from '../images/BESANov2025/S21C_01.jpg';
import s21c02 from '../images/BESANov2025/S21C_02.jpg';
import s22a01 from '../images/BESANov2025/S22A_01.jpg';
import s22a02 from '../images/BESANov2025/S22A_02.jpg';
import s22b01 from '../images/BESANov2025/S22B_01.jpg';
import s22c01 from '../images/BESANov2025/S22C_01.jpg';
import s22c02 from '../images/BESANov2025/S22C_02.jpg';
import s23a01 from '../images/BESANov2025/S23A_01.jpg';
import s23b01 from '../images/BESANov2025/S23B_01.jpg';
import s23b02 from '../images/BESANov2025/S23B_02.jpg';
import s23c01 from '../images/BESANov2025/S23C_01.jpg';

/** Situation figures, keyed by the id used in the question bank. */
const FIGURES: Record<string, string> = {
  F01: f01,
  F01B: f01b,
  F02: f02,
  F03: f03,
  F04: f04,
  F06: f06,
  F07: f07,
  F09: f09,
  F10: f10,
  F11: f11,
  F13: f13,
  F15: f15,
  F16: f16,
  F17: f17,
  F20: f20,
  F21: f21,
  F23: f23,
  F24: f24,
};

/** Worked-solution crops, one array per sub-part, in reading order. */
const SOLUTIONS: Record<string, string[]> = {
  S01A: [s01a01],
  S01B: [s01b01, s01b02],
  S01C: [s01c01, s01c02],
  S02A: [s02a01],
  S02B: [s02b01],
  S03A: [s03a01, s03a02],
  S03B: [s03b01],
  S03C: [s03c01, s03c02],
  S04A: [s04a01],
  S04B: [s04b01, s04b02],
  S04C: [s04c01, s04c02],
  S05A: [s05a01, s05a02],
  S05B: [s05b01, s05b02, s05b03, s05b04],
  S05C: [s05c01, s05c02],
  S06A: [s06a01],
  S06B: [s06b01],
  S06C: [s06c01],
  S07A: [s07a01],
  S07B: [s07b01],
  S07C: [s07c01],
  S09A: [s09a01],
  S09B: [s09b01],
  S09C: [s09c01],
  S10A: [s10a01],
  S10B: [s10b01, s10b02],
  S10C: [s10c01],
  S11A: [s11a01, s11a02],
  S11B: [s11b01, s11b02],
  S11C: [s11c01],
  S12A: [s12a01, s12a02],
  S12B: [s12b01],
  S12C: [s12c01, s12c02],
  S13A: [s13a01, s13a02],
  S13B: [s13b01],
  S13C: [s13c01, s13c02],
  S14A: [s14a01, s14a02],
  S14B: [s14b01],
  S14C: [s14c01, s14c02],
  S15A: [s15a01],
  S15B: [s15b01, s15b02],
  S15C: [s15c01],
  S16A: [s16a01],
  S16B: [s16b01],
  S16C: [s16c01, s16c02],
  S17A: [s17a01],
  S17B: [s17b01, s17b02],
  S17C: [s17c01],
  S18A: [s18a01],
  S18B: [s18b01, s18b02],
  S18C: [s18c01, s18c02],
  S19A: [s19a01, s19a02],
  S19B: [s19b01],
  S19C: [s19c01],
  S20A: [s20a01, s20a02],
  S20B: [s20b01, s20b02, s20b03],
  S20C: [s20c01],
  S21A: [s21a01, s21a02],
  S21B: [s21b01, s21b02],
  S21C: [s21c01, s21c02],
  S22A: [s22a01, s22a02],
  S22B: [s22b01],
  S22C: [s22c01, s22c02],
  S23A: [s23a01],
  S23B: [s23b01, s23b02],
  S23C: [s23c01],
};

export function besaNov2025Figure(key: string): string | undefined {
  return FIGURES[key];
}

export function besaNov2025SolutionImages(key: string): string[] {
  return SOLUTIONS[key] ?? [];
}
