import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';
import {
  PSAD_NOV_2024_SITUATIONS,
  getPsadNov2024FigureHtml,
} from '../../situationImages';

const S16_FIG = getPsadNov2024FigureHtml(16);
const S16_CAP = PSAD_NOV_2024_SITUATIONS[16].caption;

const S17_FIG = getPsadNov2024FigureHtml(17);
const S17_CAP = PSAD_NOV_2024_SITUATIONS[17].caption;

const S18_FIG = getPsadNov2024FigureHtml(18);
const S18_CAP = PSAD_NOV_2024_SITUATIONS[18].caption;

const S19_FIG = getPsadNov2024FigureHtml(19);
const S19_CAP = PSAD_NOV_2024_SITUATIONS[19].caption;

export const PSAD_NOV2024_PART4: Question[] = [
  // Item 46
  {
    id: 'psad-nov2024-q46',
    number: 46,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Compound Bridge Girders & Influence Lines',
    text: 'Situation 16 — The compound bridge girder shown is to be analyzed using the following loads. Dead load = 13 kN/m, Live load = 12 kN/m.\nGiven: L₁ = 4 m, L₂ = 10 m.\n\n46. What is the maximum reaction (kN) at C due to dead load only?',
    figureCaption: S16_CAP,
    figureSvg: S16_FIG,
    options: [
      { label: 'A', text: '163.8' },
      { label: 'B', text: '183.6' },
      { label: 'C', text: '134.0' },
      { label: 'D', text: '143.0' },
    ],
    ...solved(46, 'D', '143.0 (Option D)'),
  },

  // Item 47
  {
    id: 'psad-nov2024-q47',
    number: 47,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Compound Bridge Girders & Influence Lines',
    text: 'Situation 16 — 47. What is the maximum reaction (kN) at C due to live load only?',
    figureCaption: S16_CAP,
    figureSvg: S16_FIG,
    options: [
      { label: 'A', text: '132.0' },
      { label: 'B', text: '151.2' },
      { label: 'C', text: '115.2' },
      { label: 'D', text: '123.0' },
    ],
    ...solved(47, 'B', '151.2 (Option B)'),
  },

  // Item 48
  {
    id: 'psad-nov2024-q48',
    number: 48,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Analysis - Compound Bridge Girders & Influence Lines',
    text: 'Situation 16 — 48. What is the maximum shear (kN) at the midspan due to dead and live load?',
    figureCaption: S16_CAP,
    figureSvg: S16_FIG,
    options: [
      { label: 'A', text: '34.2' },
      { label: 'B', text: '37.1' },
      { label: 'C', text: '22.4' },
      { label: 'D', text: '71.3' },
    ],
    ...solved(48, 'A', '34.2 (Option A)'),
  },

  // Item 49
  {
    id: 'psad-nov2024-q49',
    number: 49,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Welded Connections',
    text: 'Situation 17 — A 12-mm-thick plate acting as a bracket is joined to a structural tee column through fillet welds, welded on each side. Allowable shear stress of the weld, F_vw = 124 MPa.\n\n49. Compute the required length (mm) of each weld if e = 0, P = 85 kN, and weld thickness, t_w = 6 mm.',
    figureCaption: S17_CAP,
    figureSvg: S17_FIG,
    options: [
      { label: 'A', text: '162' },
      { label: 'B', text: '81' },
      { label: 'C', text: '135' },
      { label: 'D', text: '68' },
    ],
    ...solved(49, 'B', '81 (Option B)'),
  },

  // Item 50
  {
    id: 'psad-nov2024-q50',
    number: 50,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Welded Connections',
    text: 'Situation 17 — 50. Calculate the critical weld reaction, R (N/mm) if e = 200 mm, L = 300 mm, P = 85 kN, and weld thickness, t_w = 6 mm.',
    figureCaption: S17_CAP,
    figureSvg: S17_FIG,
    options: [
      { label: 'A', text: '584' },
      { label: 'B', text: '142' },
      { label: 'C', text: '114' },
      { label: 'D', text: '283' },
    ],
    ...solved(50, 'A', '584 (Option A)'),
  },

  // Item 51
  {
    id: 'psad-nov2024-q51',
    number: 51,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Welded Connections',
    text: 'Situation 17 — 51. Calculate the minimum required weld size if e = 250 mm, L = 350 mm, and P = 90 kN.',
    figureCaption: S17_CAP,
    figureSvg: S17_FIG,
    options: [
      { label: 'A', text: '6' },
      { label: 'B', text: '7' },
      { label: 'C', text: '8' },
      { label: 'D', text: '10' },
    ],
    ...solved(51, 'B', '7 (Option B)'),
  },

  // Item 52
  {
    id: 'psad-nov2024-q52',
    number: 52,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Column Analysis & Frame Buckling',
    text: 'Situation 18 — For the figure shown, members AC, BE, and DF are purely axially loaded members. Members AC and DF are tubular sections, while member BE is a wide flange section and buckling considered about x-axis of the section. Use Table 510.\nGiven: P₁ = 60 kN; P₂ = 80 kN; θ = 45°; β = 60°; H = 5 m.\nProperties of tubular section: A = 2.86 × 10³ mm², I_x = 12.11 × 10⁶ mm⁴, I_y = 3.58 × 10⁶ mm⁴.\n\n52. Compute the load (kN) on member AC.',
    figureCaption: S18_CAP,
    figureSvg: S18_FIG,
    options: [
      { label: 'A', text: '56.57' },
      { label: 'B', text: '113.12' },
      { label: 'C', text: '10.15' },
      { label: 'D', text: '8.44' },
    ],
    ...solved(52, 'C', '10.15 (Option C)'),
  },

  // Item 53
  {
    id: 'psad-nov2024-q53',
    number: 53,
    pageNumber: 5,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Column Analysis & Frame Buckling',
    text: 'Situation 18 — 53. Compute the stress (MPa) in member BE.',
    figureCaption: S18_CAP,
    figureSvg: S18_FIG,
    options: [
      { label: 'A', text: '19.78' },
      { label: 'B', text: '39.56' },
      { label: 'C', text: '18.97' },
      { label: 'D', text: '65.93' },
    ],
    ...solved(53, 'B', '39.56 (Option B)'),
  },

  // Item 54
  {
    id: 'psad-nov2024-q54',
    number: 54,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Column Analysis & Frame Buckling',
    text: 'Situation 18 — 54. Compute the ratio of the actual to allowable stress of member BE. Use the table below.\n\nTable 510: Allowable Stress (MPa) for Compression Members with Fy = 248 MPa\n| kL/r | Fa (MPa) |\n|:---:|:---:|\n| 87 | 100.326 |\n| 88 | 99.521 |\n| 89 | 98.711 |\n| 90 | 97.896 |',
    figureCaption: S18_CAP,
    figureSvg: S18_FIG,
    options: [
      { label: 'A', text: '2.50' },
      { label: 'B', text: '1.02' },
      { label: 'C', text: '0.32' },
      { label: 'D', text: '0.40' },
    ],
    ...solved(54, 'D', '0.40 (Option D)'),
  },

  // Item 55
  {
    id: 'psad-nov2024-q55',
    number: 55,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Prestressed Concrete Design - Beam Stresses',
    text: 'Situation 19 — The section shown is subjected to prestressing, with the cable following a linear profile to ensure structural stability. The joists are simply supported on a span of 12 m.\nGiven: Eccentricity at the supports = 60 mm above N.A.; Eccentricity at the midspan = 200 mm below N.A.\nSection properties: Area, A = 2.25 × 10⁵ mm², Moment of inertia, I_na = 5 × 10⁹ mm⁴, Unit weight, γ_c = 24 kN/m³.\nDimensions: h = 520 mm, y_t = 165 mm, b = 150 mm, t = 75 mm, a = 75 mm.\nSuperimposed dead load = 3.5 kN/m, Final prestressing force, P = 650 kN.\n\n55. Calculate the stress (MPa) at the top fiber near the support due to prestress alone.',
    figureCaption: S19_CAP,
    figureSvg: S19_FIG,
    options: [
      { label: 'A', text: '0.28 C' },
      { label: 'B', text: '5.50 C' },
      { label: 'C', text: '4.18 C' },
      { label: 'D', text: '1.60 T' },
    ],
    ...solved(55, 'C', '4.18 C (Option C)'),
  },

  // Item 56
  {
    id: 'psad-nov2024-q56',
    number: 56,
    pageNumber: 6,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Prestressed Concrete Design - Beam Stresses',
    text: 'Situation 19 — 56. Calculate the stress (MPa) at the bottom fiber at L/4 due to prestress alone.',
    figureCaption: S19_CAP,
    figureSvg: S19_FIG,
    options: [
      { label: 'A', text: '1.39 C' },
      { label: 'B', text: '6.12 C' },
      { label: 'C', text: '4.39 C' },
      { label: 'D', text: '0.34 T' },
    ],
    ...solved(56, 'B', '6.12 C (Option B)'),
  },

  // Item 57
  {
    id: 'psad-nov2024-q57',
    number: 57,
    pageNumber: 7,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Prestressed Concrete Design - Beam Stresses',
    text: 'Situation 19 — 57. What is the minimum final prestressing force P (kN) due to dead load and prestress that will not produce tensile stress at the midspan?',
    figureCaption: S19_CAP,
    figureSvg: S19_FIG,
    options: [
      { label: 'A', text: '479' },
      { label: 'B', text: '240' },
      { label: 'C', text: '149' },
      { label: 'D', text: '610' },
    ],
    ...solved(57, 'D', '610 (Option D)'),
  },

  // Item 58
  {
    id: 'psad-nov2024-q58',
    number: 58,
    pageNumber: 7,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - One-Way Slab Flexure',
    text: 'Situation 20 — Given the following data for a one-way slab.\nThickness, t = 125 mm\nClear cover to reinforcement = 20 mm\nSteel strength: f_y = 314 MPa for d_b > 12 mm; f_y = 275 MPa for d_b ≤ 12 mm\nConcrete strength, f\'_c = 27.5 MPa\nStrength reduction factor for moment, φ = 0.90\n\n58. Calculate the ultimate moment capacity (kN·m) per meter if a 10-mm diameter bar is used, spaced 125 mm on center.',
    options: [
      { label: 'A', text: '14.98' },
      { label: 'B', text: '17.01' },
      { label: 'C', text: '16.64' },
      { label: 'D', text: '18.90' },
    ],
    ...solved(58, 'A', '14.98 (Option A)'),
  },

  // Item 59
  {
    id: 'psad-nov2024-q59',
    number: 59,
    pageNumber: 7,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - One-Way Slab Flexure',
    text: 'Situation 20 — 59. Calculate the ultimate moment capacity (kN·m) per meter if a 16-mm diameter bar is used, spaced 100 mm on center.',
    options: [
      { label: 'A', text: '42.38' },
      { label: 'B', text: '47.09' },
      { label: 'C', text: '52.71' },
      { label: 'D', text: '47.44' },
    ],
    ...solved(59, 'D', '47.44 (Option D)'),
  },

  // Item 60
  {
    id: 'psad-nov2024-q60',
    number: 60,
    pageNumber: 7,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - One-Way Slab Flexure',
    text: 'Situation 20 — 60. If the 10 mm bars spaced at 125 mm on center is replaced with 12 mm bar, what is the spacing required?',
    options: [
      { label: 'A', text: '203' },
      { label: 'B', text: '128' },
      { label: 'C', text: '104' },
      { label: 'D', text: '178' },
    ],
    ...solved(60, 'D', '178 (Option D)'),
  },
];
