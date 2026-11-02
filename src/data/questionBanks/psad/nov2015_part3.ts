import { Question } from '../../../types/exam';
import { psadNov2015Figure } from '../../psadNov2015Images';
import { solved, opts } from './nov2015Helpers';

export const PSAD_NOV2015_PART3: Question[] = [
  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q31',
    number: 31,
    pageNumber: 199,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 10 — Point of Zero Moment',
    text: 'Situation 10 (continued) – Find the point of zero moment from the left end.',
    options: opts('7.5 m', '8.16 m', '7.86 m', '8.25 m'),
    ...solved(31, 'B', '8.16 m (Option B)', 221),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q32',
    number: 32,
    pageNumber: 199,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 11 — Internal Pressure in a Closed Cylindrical Tank',
    text: 'Situation 11 – A closed cylindrical tank 400 mm in diameter and 2.5 mm thick is subjected to an axial compressive force and uniform internal pressure. The stresses acting on an element of side is shown in the figure.\n\n32. Find the magnitude of the internal pressure.',
    figureSvg: psadNov2015Figure(
      'fig11_mohr',
      'Situation 11: a Mohr circle for the tank wall, with the stress point at 30 MPa on the horizontal axis and 40 MPa on the vertical axis, and a 90-unit horizontal span.',
    ),
    options: opts('1.587 MPa', '1.375 MPa', '1.113 MPa', '0.956 MPa'),
    ...solved(
      32,
      'B',
      '1.375 MPa (Option B)',
      222,
      222,
      'Booklet quirk: the printed working stops at $\\sigma_1 = \\sigma_{max} = 110$ MPa and never divides the pressure back out, so the last step is left to the reader — from $\\sigma_1 = pD/2t$, $p = 2t\\sigma_1/D = 2(2.5)(110)/400 = 1.375$ MPa, which is option B. The printed option list also repeats the letter B for the third choice (1.113 MPa).',
    ),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q33',
    number: 33,
    pageNumber: 199,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 11 — Axial Force in the Tank Wall',
    text: 'Situation 11 (continued) – Find the magnitude of the axial force.',
    options: opts('136.3 kN', '141.4 kN', '124.2 kN', '110.3 kN'),
    ...solved(33, 'B', '141.4 kN (Option B)', 222),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q34',
    number: 34,
    pageNumber: 199,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 11 — Maximum Shearing Stress',
    text: 'Situation 11 (continued) – What is the maximum shearing stress?',
    options: opts('60 MPa', '50 MPa', '45 MPa', '55 MPa'),
    ...solved(34, 'B', '50 MPa (Option B)', 222),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q35',
    number: 35,
    pageNumber: 199,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 12 — Maximum Normal Stress',
    text: "Situation 12 – An element is subjected to the stresses as presented in the Mohr circle shown in the Figure. Calculate the following:\n\n35. The maximum normal stress.",
    figureSvg: psadNov2015Figure(
      'fig12_mohr',
      'Situation 12: a Mohr circle with centre at 65 MPa, the stress point 35 MPa to the right of centre and 19 MPa above the axis, and a 100-unit horizontal span.',
    ),
    options: opts('95.63 MPa', '112.36 MPa', '124.85 MPa', '104.82 MPa'),
    ...solved(35, 'D', '104.82 MPa (Option D)', 223),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q36',
    number: 36,
    pageNumber: 200,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 12 — Minimum Normal Stress',
    text: 'Situation 12 (continued) – The minimum normal stress.',
    options: opts('45.25 MPa', '30.12 MPa', '23.18 MPa', '36.51 MPa'),
    ...solved(
      36,
      'C',
      '23.18 MPa (Option C)',
      223,
      223,
      'Booklet misprint: the working gives $\\sigma_{min} = 65 - R = 65 - 39.825 = 25.175$ MPa, a value that is in none of the four choices. Option C prints 23.18 MPa — the 5 and the 3 are transposed. The key marks C and the printed option is reproduced as issued.',
    ),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q37',
    number: 37,
    pageNumber: 200,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 12 — Maximum Shearing Stress',
    text: 'Situation 12 (continued) – The maximum shearing stress.',
    options: opts('35.21 MPa', '32.21 MPa', '39.82 MPa', '42.58 MPa'),
    ...solved(37, 'C', '39.82 MPa (Option C)', 223),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q38',
    number: 38,
    pageNumber: 200,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 13 — Vertical Deflection under B',
    text: 'Situation 13 – The cantilever beam shown supports a load P = 400 kN. Assume EI = 75,000 kN-m².\n\n38. What is the vertical deflection under B?',
    figureSvg: psadNov2015Figure(
      'fig13_cantilever',
      'Situation 13: a cantilever fixed at A, with a concentrated load P applied downward at B, 3.75 m from the fixed end; the free end C is a further 1.25 m on, for a total length L = 5 m.',
    ),
    options: opts('85.64 mm', '93.75 mm', '106.32 mm', '124.87 mm'),
    ...solved(38, 'B', '93.75 mm (Option B)', 223),
  },

  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q39',
    number: 39,
    pageNumber: 201,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 13 — Maximum Deflection',
    text: 'Situation 13 (continued) – What is the maximum deflection of the beam?',
    options: opts('130.5 mm', '160.6 mm', '145 mm', '140.6 mm'),
    ...solved(39, 'D', '140.6 mm (Option D)', 223),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q40',
    number: 40,
    pageNumber: 201,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 13 — Upward Force at C to Eliminate Deflection',
    text: 'Situation 13 (continued) – What upward force at C is required to eliminate the deflection at that point?',
    options: opts('218 kN', '197 kN', '224 kN', '253 kN'),
    ...solved(40, 'D', '253 kN (Option D)', 223),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q41',
    number: 41,
    pageNumber: 201,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 14 — Force at the Free End to Eliminate Deflection',
    text: 'Situation 14 – A 4-meter cantilever beam supports a uniform load of 25 kN/m throughout its length. The beam deflects 16 mm at the free end.\n\nGiven the following formulas for deflection at free-end of a cantilever beam:\n\n$\\delta = \\dfrac{wL^4}{8EI}$    $\\delta = \\dfrac{PL^3}{3EI}$    $\\delta = \\dfrac{Pa^2}{6EI}(3L - a)$\n\n41. What force at the free end is required to eliminate the deflection at that end?',
    options: opts('37.5 kN', '42.6 kN', '32.4 kN', '48.7 kN'),
    ...solved(41, 'A', '37.5 kN (Option A)', 224),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q42',
    number: 42,
    pageNumber: 201,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 14 — Force to Reduce the Deflection by 10 mm',
    text: 'Situation 14 (continued) – What force at the free end is required to reduce the deflection at that end by 10 mm?',
    options: opts('14.1 kN', '16.8 kN', '19.6 kN', '23.4 kN'),
    ...solved(42, 'D', '23.4 kN (Option D)', 224),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q43',
    number: 43,
    pageNumber: 201,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 14 — Force at the Midspan to Eliminate Deflection',
    text: 'Situation 14 (continued) – What force at the midspan is required to eliminate the deflection at that point?',
    options: opts('96.3 kN', '92.4 kN', '106.3 kN', '100.7 kN'),
    ...solved(43, 'C', '106.3 kN (Option C)', 224),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q44',
    number: 44,
    pageNumber: 201,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 15 — Moment at the Base of a Free-Standing Wall',
    text: 'Situation 15 – An 8-m-high retaining wall resists active pressure increasing from 0 at the top to 55 kN/m at the base per meter strip of length along the longitudinal axis.\n\n44. Determine the moment (kN-m) at the base if the wall is free at the top.',
    options: opts('235', '365', '489', '587'),
    ...solved(44, 'D', '587 kN-m (Option D)', 225),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q45',
    number: 45,
    pageNumber: 201,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 15 — Design Moment with the Top Laterally Supported',
    text: 'Situation 15 (continued) – If the wall is laterally supported at the top, determine the design moment at the base (in kN-m). Apply end moment equations wL²/30 at the top and wL²/20 at the base. Assume EI is constant throughout.',
    options: opts('489', '235', '365', '587'),
    ...solved(45, 'B', '235 kN-m (Option B)', 225),
  },
];
