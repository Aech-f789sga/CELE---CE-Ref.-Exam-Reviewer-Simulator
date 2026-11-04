import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';
import {
  PSAD_NOV_2024_SITUATIONS,
  getPsadNov2024FigureHtml,
} from '../../situationImages';

const S22_FIG = getPsadNov2024FigureHtml(22);
const S22_CAP = PSAD_NOV_2024_SITUATIONS[22].caption;

const S25_FIG = getPsadNov2024FigureHtml(25);
const S25_CAP = PSAD_NOV_2024_SITUATIONS[25].caption;

export const PSAD_NOV2024_PART5: Question[] = [
  // Item 61
  {
    id: 'psad-nov2024-q61',
    number: 61,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Short Columns & Interaction',
    text: "Situation 21 — A tied rectangular reinforced concrete column has cross-sectional dimensions b = 400 mm and h = 500 mm. It is reinforced with 8 - 25 mm diameter longitudinal bars distributed symmetrically.\nGiven: Concrete compressive strength f'c = 28 MPa, Steel yield strength fy = 415 MPa.\n\n61. Calculate the nominal axial compressive strength Po (kN) of the column at zero eccentricity.",
    options: [
      { label: 'A', text: '6,296' },
      { label: 'B', text: '5,640' },
      { label: 'C', text: '4,722' },
      { label: 'D', text: '7,120' },
    ],
    ...solved(61, 'A', '6,296 (Option A)'),
  },

  // Item 62
  {
    id: 'psad-nov2024-q62',
    number: 62,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Short Columns & Interaction',
    text: 'Situation 21 — 62. Calculate the maximum design axial strength φPn(max) (kN) permitted by NSCP 2015 for tied columns.',
    options: [
      { label: 'A', text: '4,093' },
      { label: 'B', text: '3,274' },
      { label: 'C', text: '2,860' },
      { label: 'D', text: '3,850' },
    ],
    ...solved(62, 'B', '3,274 (Option B)'),
  },

  // Item 63
  {
    id: 'psad-nov2024-q63',
    number: 63,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Short Columns & Interaction',
    text: 'Situation 21 — 63. If the column is subjected to a factored axial load Pu = 2,400 kN, what is the maximum permissible factored bending moment Mu (kN·m) if the equivalent eccentricity is limited to e = 150 mm?',
    options: [
      { label: 'A', text: '360' },
      { label: 'B', text: '320' },
      { label: 'C', text: '420' },
      { label: 'D', text: '480' },
    ],
    ...solved(63, 'A', '360 (Option A)'),
  },

  // Item 64
  {
    id: 'psad-nov2024-q64',
    number: 64,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Bolted Connections & Eccentric Shear',
    text: 'Situation 22 — A bracket is connected to the flange of a column by a group of six 20-mm diameter bolts in two vertical rows of three bolts each. The bolts are spaced at 100 mm horizontally and 80 mm vertically. A vertical load P = 120 kN acts at an eccentricity e = 250 mm to the right of the centroid of the bolt group.\n\n64. Determine the direct shear force (kN) acting on each bolt.',
    figureCaption: S22_CAP,
    figureSvg: S22_FIG,
    options: [
      { label: 'A', text: '20' },
      { label: 'B', text: '24' },
      { label: 'C', text: '15' },
      { label: 'D', text: '30' },
    ],
    ...solved(64, 'A', '20 (Option A)'),
  },

  // Item 65
  {
    id: 'psad-nov2024-q65',
    number: 65,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Bolted Connections & Eccentric Shear',
    text: 'Situation 22 — 65. Determine the polar moment of inertia J = Σ(x² + y²) (mm²) of the bolt group with respect to its centroid.',
    figureCaption: S22_CAP,
    figureSvg: S22_FIG,
    options: [
      { label: 'A', text: '40,600' },
      { label: 'B', text: '35,200' },
      { label: 'C', text: '48,000' },
      { label: 'D', text: '28,400' },
    ],
    ...solved(65, 'A', '40,600 (Option A)'),
  },

  // Item 66
  {
    id: 'psad-nov2024-q66',
    number: 66,
    pageNumber: 8,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Structural Steel Design - Bolted Connections & Eccentric Shear',
    text: 'Situation 22 — 66. Determine the maximum resultant shear force (kN) carried by the most heavily stressed bolt.',
    figureCaption: S22_CAP,
    figureSvg: S22_FIG,
    options: [
      { label: 'A', text: '82.1' },
      { label: 'B', text: '68.5' },
      { label: 'C', text: '94.3' },
      { label: 'D', text: '75.8' },
    ],
    ...solved(66, 'A', '82.1 (Option A)'),
  },

  // Item 67
  {
    id: 'psad-nov2024-q67',
    number: 67,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Isolated Spread Footings',
    text: "Situation 23 — A 2.8 m × 2.8 m square isolated footing supports a 450 mm × 450 mm tied column carrying dead load D = 850 kN and live load L = 650 kN.\nEffective depth of footing d = 460 mm, f'c = 28 MPa, fy = 415 MPa. Net factored soil pressure qu = 262.76 kPa.\n\n67. Determine the ultimate wide-beam (one-way) shear force Vu (kN) at the critical section located at distance d from the column face.",
    options: [
      { label: 'A', text: '526' },
      { label: 'B', text: '615' },
      { label: 'C', text: '448' },
      { label: 'D', text: '720' },
    ],
    ...solved(67, 'A', '526 (Option A)'),
  },

  // Item 68
  {
    id: 'psad-nov2024-q68',
    number: 68,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Isolated Spread Footings',
    text: 'Situation 23 — 68. Determine the ultimate punching (two-way) shear force Vu (kN) across the critical perimeter located at distance d/2 from the column face.',
    options: [
      { label: 'A', text: '1,842' },
      { label: 'B', text: '1,650' },
      { label: 'C', text: '2,060' },
      { label: 'D', text: '1,480' },
    ],
    ...solved(68, 'A', '1,842 (Option A)'),
  },

  // Item 69
  {
    id: 'psad-nov2024-q69',
    number: 69,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Reinforced Concrete Design - Isolated Spread Footings',
    text: 'Situation 23 — 69. Determine the factored bending moment Mu (kN·m) at the critical section for flexure located at the face of the column.',
    options: [
      { label: 'A', text: '508' },
      { label: 'B', text: '612' },
      { label: 'C', text: '425' },
      { label: 'D', text: '580' },
    ],
    ...solved(69, 'A', '508 (Option A)'),
  },

  // Item 70
  {
    id: 'psad-nov2024-q70',
    number: 70,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Timber Design - Flexure, Shear & Serviceability',
    text: 'Situation 24 — A simply supported timber beam has a rectangular cross section with width b = 150 mm, depth h = 300 mm, and span L = 4 m.\nMaterial properties: Allowable bending stress Fb = 14.5 MPa, Allowable horizontal shear stress Fv = 1.25 MPa, Modulus of elasticity E = 10,000 MPa.\n\n70. Determine the maximum safe uniformly distributed load w (kN/m) that the beam can support based on bending stress.',
    options: [
      { label: 'A', text: '16.3' },
      { label: 'B', text: '18.5' },
      { label: 'C', text: '13.8' },
      { label: 'D', text: '21.0' },
    ],
    ...solved(70, 'A', '16.3 (Option A)'),
  },

  // Item 71
  {
    id: 'psad-nov2024-q71',
    number: 71,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Timber Design - Flexure, Shear & Serviceability',
    text: 'Situation 24 — 71. Determine the maximum safe uniformly distributed load w (kN/m) based on horizontal shear stress.',
    options: [
      { label: 'A', text: '18.8' },
      { label: 'B', text: '15.2' },
      { label: 'C', text: '22.4' },
      { label: 'D', text: '12.5' },
    ],
    ...solved(71, 'A', '18.8 (Option A)'),
  },

  // Item 72
  {
    id: 'psad-nov2024-q72',
    number: 72,
    pageNumber: 9,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Timber Design - Flexure, Shear & Serviceability',
    text: 'Situation 24 — 72. If the maximum deflection is limited to L / 360, calculate the maximum allowable uniformly distributed load w (kN/m) based on deflection.',
    options: [
      { label: 'A', text: '11.3' },
      { label: 'B', text: '13.5' },
      { label: 'C', text: '9.8' },
      { label: 'D', text: '16.3' },
    ],
    ...solved(72, 'A', '11.3 (Option A)'),
  },

  // Item 73
  {
    id: 'psad-nov2024-q73',
    number: 73,
    pageNumber: 10,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Earthquake Engineering & NSCP 2015 - Equivalent Lateral Force Procedure',
    text: 'Situation 25 — A four-story office building located in Seismic Zone 4 has a total seismic dead weight W = 12,000 kN and fundamental period T = 0.50 s.\nGiven: Seismic coefficient Cv = 0.528, Ca = 0.44, Importance factor I = 1.0, Response modification factor R = 8.5.\n\n73. Determine the design total design base shear V (kN) according to the NSCP 2015 equivalent lateral force procedure.',
    figureCaption: S25_CAP,
    figureSvg: S25_FIG,
    options: [
      { label: 'A', text: '1,491' },
      { label: 'B', text: '1,553' },
      { label: 'C', text: '1,240' },
      { label: 'D', text: '1,820' },
    ],
    ...solved(73, 'A', '1,491 (Option A)'),
  },

  // Item 74
  {
    id: 'psad-nov2024-q74',
    number: 74,
    pageNumber: 10,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Earthquake Engineering & NSCP 2015 - Equivalent Lateral Force Procedure',
    text: 'Situation 25 — 74. For T = 0.50 s (T ≤ 0.7 s, so Ft = 0), calculate the lateral seismic force F₄ (kN) distributed to the roof level (Level 4, h₄ = 14 m, W₄ = 2,400 kN) where story weights are: Level 1 = 3,200 kN at 3.5 m, Level 2 = 3,200 kN at 7.0 m, Level 3 = 3,200 kN at 10.5 m, and Level 4 = 2,400 kN at 14.0 m.',
    figureCaption: S25_CAP,
    figureSvg: S25_FIG,
    options: [
      { label: 'A', text: '497' },
      { label: 'B', text: '420' },
      { label: 'C', text: '560' },
      { label: 'D', text: '375' },
    ],
    ...solved(74, 'A', '497 (Option A)'),
  },

  // Item 75
  {
    id: 'psad-nov2024-q75',
    number: 75,
    pageNumber: 10,
    subject: 'PSAD',
    year: 2024,
    month: 'November',
    category: 'Earthquake Engineering & NSCP 2015 - Equivalent Lateral Force Procedure',
    text: 'Situation 25 — 75. Determine the lateral seismic force F₃ (kN) distributed to the 3rd floor level (h₃ = 10.5 m, W₃ = 3,200 kN).',
    figureCaption: S25_CAP,
    figureSvg: S25_FIG,
    options: [
      { label: 'A', text: '497' },
      { label: 'B', text: '331' },
      { label: 'C', text: '166' },
      { label: 'D', text: '540' },
    ],
    ...solved(75, 'A', '497 (Option A)'),
  },
];
