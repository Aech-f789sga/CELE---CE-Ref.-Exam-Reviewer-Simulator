import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';
import {
  PSAD_NOV_2024_SITUATIONS,
  getPsadNov2024FigureHtml,
} from '../../situationImages';

const S11_FIG = getPsadNov2024FigureHtml(11);
const S11_CAP = PSAD_NOV_2024_SITUATIONS[11].caption;

const S12_FIG = getPsadNov2024FigureHtml(12);
const S12_CAP = PSAD_NOV_2024_SITUATIONS[12].caption;

const S13_FIG = getPsadNov2024FigureHtml(13);
const S13_CAP = PSAD_NOV_2024_SITUATIONS[13].caption;

const S14_FIG = getPsadNov2024FigureHtml(14);
const S14_CAP = PSAD_NOV_2024_SITUATIONS[14].caption;

const S15_FIG = getPsadNov2024FigureHtml(15);
const S15_CAP = PSAD_NOV_2024_SITUATIONS[15].caption;

export const PSAD_NOV2024_PART3: Question[] = [
  // Item 31
  {
    id: 'psad-nov2024-q31',
    number: 31,
    pageNumber: 3,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Roof Purlin Design',
    text: 'Situation 11 — A wide flange is used as a purlin of a truss whose top chord is sloped at θ = 20° from the horizontal. The trusses are 8 m apart, and the purlins are spaced at 3 m on centers along the top chord.\nLoads: w₁ = 1.8 kN/m, w₂ = 2.16 kN/m, w₃ = 1.44 kN/m.\nProperties of wide flange: S_x = 2.74 × 10⁵ mm³, S_y = 0.94 × 10⁵ mm³, Z_x = 3.01 × 10⁵ mm³, Z_y = 1.03 × 10⁵ mm³, F_y = 345 MPa, E = 200 GPa.\n\n31. What is the maximum bending stress f_bx (MPa) about the x-axis?',
    figureCaption: S11_CAP,
    figureSvg: S11_FIG,
    options: [
      { label: 'A', text: '157.7' },
      { label: 'B', text: '86.1' },
      { label: 'C', text: '81.6' },
      { label: 'D', text: '150.7' },
    ],
    ...solved(31, 'D', '150.7 (Option D)'),
  },

  // Item 32
  {
    id: 'psad-nov2024-q32',
    number: 32,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Roof Purlin Design',
    text: 'Situation 11 — 32. What is the maximum bending stress f_by (MPa) about the y-axis?',
    figureCaption: S11_CAP,
    figureSvg: S11_FIG,
    options: [
      { label: 'A', text: '176.6' },
      { label: 'B', text: '167.7' },
      { label: 'C', text: '151.3' },
      { label: 'D', text: '115.3' },
    ],
    ...solved(32, 'B', '167.7 (Option B)'),
  },

  // Item 33
  {
    id: 'psad-nov2024-q33',
    number: 33,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Roof Purlin Design',
    text: 'Situation 11 — 33. Based on the design moment about the x-axis, and considering wind load only, determine the maximum factored wind load that the purlin can support. Resistance factor for flexure, φ = 0.90. Nominal moment capacity, M_n = F_y Z_x.',
    figureCaption: S11_CAP,
    figureSvg: S11_FIG,
    options: [
      { label: 'A', text: '11.68' },
      { label: 'B', text: '12.98' },
      { label: 'C', text: '16.18' },
      { label: 'D', text: '18.29' },
    ],
    ...solved(33, 'A', '11.68 (Option A)'),
  },

  // Item 34
  {
    id: 'psad-nov2024-q34',
    number: 34,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Indeterminacy of Structures',
    text: 'Situation 12 — Refer to the figure shown.\n\n34. Determine the degree of indeterminacy.',
    figureCaption: S12_CAP,
    figureSvg: S12_FIG,
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '4' },
      { label: 'D', text: '5' },
    ],
    ...solved(34, 'D', '5 (Option D)'),
  },

  // Item 35
  {
    id: 'psad-nov2024-q35',
    number: 35,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Indeterminacy of Structures',
    text: 'Situation 12 — 35. If the support at B is eliminated, determine the degree of indeterminacy.',
    figureCaption: S12_CAP,
    figureSvg: S12_FIG,
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '4' },
      { label: 'D', text: '5' },
    ],
    ...solved(35, 'B', '3 (Option B)'),
  },

  // Item 36
  {
    id: 'psad-nov2024-q36',
    number: 36,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Indeterminacy of Structures',
    text: 'Situation 12 — 36. If support C is changed to pin, determine the degree of indeterminacy.',
    figureCaption: S12_CAP,
    figureSvg: S12_FIG,
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '4' },
      { label: 'D', text: '5' },
    ],
    ...solved(36, 'C', '4 (Option C)'),
  },

  // Item 37
  {
    id: 'psad-nov2024-q37',
    number: 37,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Fixed-Ended Beams with Triangular Load',
    text: 'Situation 13 — Refer to the diagram shown. Calculate the value of w (kN/m) based on the following conditions:\n\n37. Given: L = 6 m, R_A = 7.65 kN, M_A = -10.2 kN·m, M_B = -15.3 kN·m.',
    figureCaption: S13_CAP,
    figureSvg: S13_FIG,
    options: [
      { label: 'A', text: '8.9' },
      { label: 'B', text: '8.5' },
      { label: 'C', text: '7.2' },
      { label: 'D', text: '7.5' },
    ],
    ...solved(37, 'B', '8.5 (Option B)'),
  },

  // Item 38
  {
    id: 'psad-nov2024-q38',
    number: 38,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Fixed-Ended Beams with Triangular Load',
    text: 'Situation 13 — 38. Given: L = 8 m, x = 4.382 m, V_A = 10.8 kN.',
    figureCaption: S13_CAP,
    figureSvg: S13_FIG,
    options: [
      { label: 'A', text: '9' },
      { label: 'B', text: '4' },
      { label: 'C', text: '12' },
      { label: 'D', text: '6' },
    ],
    ...solved(38, 'A', '9 (Option A)'),
  },

  // Item 39
  {
    id: 'psad-nov2024-q39',
    number: 39,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Fixed-Ended Beams with Triangular Load',
    text: 'Situation 13 — 39. Given: L = 10 m, M_A = -70 kN·m, M_B = -105 kN·m, x = 5.477 m.',
    figureCaption: S13_CAP,
    figureSvg: S13_FIG,
    options: [
      { label: 'A', text: '12' },
      { label: 'B', text: '10' },
      { label: 'C', text: '15' },
      { label: 'D', text: '21' },
    ],
    ...solved(39, 'D', '21 (Option D)'),
  },

  // Item 40
  {
    id: 'psad-nov2024-q40',
    number: 40,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Continuous Beams',
    text: 'Situation 14 — The continuous beam in the figure will be subjected to the following loads: Dead load, w = 10 kN/m; Live load, P = 71 kN; Length of span, L = 25 m.\n\n40. What is the maximum shear (kN) at B due to dead load only?',
    figureCaption: S14_CAP,
    figureSvg: S14_FIG,
    options: [
      { label: 'A', text: '78.125' },
      { label: 'B', text: '63.255' },
      { label: 'C', text: '46.875' },
      { label: 'D', text: '88.475' },
    ],
    ...solved(40, 'C', '46.875 (Option C)'),
  },

  // Item 41
  {
    id: 'psad-nov2024-q41',
    number: 41,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Continuous Beams',
    text: 'Situation 14 — 41. What is the maximum shear (kN) at B due to concentrated live load at midspan AB?',
    figureCaption: S14_CAP,
    figureSvg: S14_FIG,
    options: [
      { label: 'A', text: '42.156' },
      { label: 'B', text: '59.375' },
      { label: 'C', text: '40.625' },
      { label: 'D', text: '56.250' },
    ],
    ...solved(41, 'A', '42.156 (Option A)'),
  },

  // Item 42
  {
    id: 'psad-nov2024-q42',
    number: 42,
    pageNumber: 4,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Continuous Beams',
    text: 'Situation 14 — 42. What is the maximum moment (kN·m) at B to dead load and live load?',
    figureCaption: S14_CAP,
    figureSvg: S14_FIG,
    options: [
      { label: 'A', text: '321.45' },
      { label: 'B', text: '278.52' },
      { label: 'C', text: '525.65' },
      { label: 'D', text: '195.31' },
    ],
    ...solved(42, 'B', '278.52 (Option B)'),
  },

  // Item 43
  {
    id: 'psad-nov2024-q43',
    number: 43,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Propped Cantilever Beams',
    text: 'Situation 15 — The beam shown is propped at the left end and fixed at the right end.\nGiven: w = 24 kN/m, L = 4 m.\n\n43. Determine the location (m) of zero shear from the left end.',
    figureCaption: S15_CAP,
    figureSvg: S15_FIG,
    options: [
      { label: 'A', text: '1.5' },
      { label: 'B', text: '2.5' },
      { label: 'C', text: '3.5' },
      { label: 'D', text: '2.1' },
    ],
    ...solved(43, 'A', '1.5 (Option A)'),
  },

  // Item 44
  {
    id: 'psad-nov2024-q44',
    number: 44,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Propped Cantilever Beams',
    text: 'Situation 15 — 44. What is the maximum positive moment (kN·m)?',
    figureCaption: S15_CAP,
    figureSvg: S15_FIG,
    options: [
      { label: 'A', text: '48' },
      { label: 'B', text: '32' },
      { label: 'C', text: '27' },
      { label: 'D', text: '23' },
    ],
    ...solved(44, 'C', '27 (Option C)'),
  },

  // Item 45
  {
    id: 'psad-nov2024-q45',
    number: 45,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Propped Cantilever Beams',
    text: 'Situation 15 — 45. Determine the location (m) of maximum deflection from the left end.',
    figureCaption: S15_CAP,
    figureSvg: S15_FIG,
    options: [
      { label: 'A', text: '2.314' },
      { label: 'B', text: '3.214' },
      { label: 'C', text: '1.876' },
      { label: 'D', text: '1.686' },
    ],
    ...solved(45, 'D', '1.686 (Option D)'),
  },
];
