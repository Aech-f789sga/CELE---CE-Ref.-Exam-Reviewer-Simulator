import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const PSAD_APR2025_PART2: Question[] = [
  // Item 16
  {
    id: 'psad-apr2025-q16',
    number: 16,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Mechanics - Curved Beam Stresses',
    text: 'Situation 6 — Given the following data of the semi-circular beam shown.\n\nRadius, $R = 0.8$ m; Outside diameter $= 200$ mm; Wall thickness $= 11$ mm; Load, $P = 20$ kN; Angle $\\theta = 30^\\circ$.\n\n16. Compute the shear (kN) at point $C$.',
    options: [
      { label: 'A', text: '10.00' },
      { label: 'B', text: '20.00' },
      { label: 'C', text: '17.32' },
      { label: 'D', text: '8.66' },
    ],
    ...solved(16, 'A', '10 kN (Option A)'),
  },

  // Item 17
  {
    id: 'psad-apr2025-q17',
    number: 17,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Mechanics - Curved Beam Stresses',
    text: 'Situation 6 — 17. Compute the axial stress (MPa) at point $C$.',
    options: [
      { label: 'A', text: '2.65' },
      { label: 'B', text: '3.25' },
      { label: 'C', text: '1.53' },
      { label: 'D', text: '1.63' },
    ],
    ...solved(17, 'A', '2.65 MPa (Option A)'),
  },

  // Item 18
  {
    id: 'psad-apr2025-q18',
    number: 18,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Mechanics - Curved Beam Stresses',
    text: 'Situation 6 — 18. Compute the flexural stress (MPa) at point $C$.',
    options: [
      { label: 'A', text: '15.42' },
      { label: 'B', text: '27.34' },
      { label: 'C', text: '7.33' },
      { label: 'D', text: '22.36' },
    ],
    ...solved(18, 'C', '7.33 MPa (Option C)'),
  },

  // Item 19
  {
    id: 'psad-apr2025-q19',
    number: 19,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Gravity Dam Stability',
    text: 'Situation 7 — The symmetrical earth dam shown is held in place by its own weight. Given the following data:\n\nDam dimensions: $a = 2$ m; $B = 14$ m; $H = 12$ m. Depth of water, $h = 9$ m. Unit weight of soil, $\\gamma_s = 17.3$ kN/m$^3$. Unit weight of water, $\\gamma_w = 9.81$ kN/m$^3$.\n\n19. Compute the factor of safety against overturning.',
    options: [
      { label: 'A', text: '14.25' },
      { label: 'B', text: '11.84' },
      { label: 'C', text: '5.36' },
      { label: 'D', text: '13.36' },
    ],
    ...solved(19, 'B', '11.84 (Option B)'),
  },

  // Item 20
  {
    id: 'psad-apr2025-q20',
    number: 20,
    pageNumber: 422,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Gravity Dam Stability',
    text: 'Situation 7 — 20. Compute the factor of safety against sliding if the coefficient of friction at the base of the dam is $0.45$.',
    options: [
      { label: 'A', text: '2.11' },
      { label: 'B', text: '3.25' },
      { label: 'C', text: '2.56' },
      { label: 'D', text: '5.24' },
    ],
    ...solved(20, 'A', '2.11 (Option A)'),
  },

  // Item 21
  {
    id: 'psad-apr2025-q21',
    number: 21,
    pageNumber: 423,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Gravity Dam Stability',
    text: 'Situation 7 — 21. Determine the eccentricity (m) of the resultant force at the base.',
    options: [
      { label: 'A', text: '0.105' },
      { label: 'B', text: '0.032' },
      { label: 'C', text: '0.325' },
      { label: 'D', text: '0.053' },
    ],
    ...solved(21, 'D', '0.053 m (Option D)'),
  },

  // Item 22
  {
    id: 'psad-apr2025-q22',
    number: 22,
    pageNumber: 423,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Mechanics - Combined Bending and Torsion',
    text: 'Situation 8 — Given the following data of the figure shown.\n\nLengths, $L_1 = 125$ mm, $L_2 = 75$ mm. Shaft diameter $= 38$ mm. Loads: $P_1 = 20$ kN; $P_2 = 16$ kN.\n\n22. Determine the maximum flexural stress (MPa) in the shaft.',
    options: [
      { label: 'A', text: '650' },
      { label: 'B', text: '389' },
      { label: 'C', text: '464' },
      { label: 'D', text: '296' },
    ],
    ...solved(22, 'C', '464 MPa (Option C)'),
  },

  // Item 23
  {
    id: 'psad-apr2025-q23',
    number: 23,
    pageNumber: 423,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Mechanics - Combined Bending and Torsion',
    text: 'Situation 8 — 23. Determine the maximum torsional shear stress (MPa) in the shaft.',
    options: [
      { label: 'A', text: '186' },
      { label: 'B', text: '251' },
      { label: 'C', text: '139' },
      { label: 'D', text: '111' },
    ],
    ...solved(23, 'D', '111 MPa (Option D)'),
  },

  // Item 24
  {
    id: 'psad-apr2025-q24',
    number: 24,
    pageNumber: 423,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Mechanics - Combined Bending and Torsion',
    text: 'Situation 8 — 24. Determine the maximum normal shear stress (MPa) in the shaft.',
    options: [
      { label: 'A', text: '18.8' },
      { label: 'B', text: '37.6' },
      { label: 'C', text: '14.1' },
      { label: 'D', text: '17.6' },
    ],
    ...solved(24, 'A', '18.8 MPa (Option A)'),
  },

  // Item 25
  {
    id: 'psad-apr2025-q25',
    number: 25,
    pageNumber: 424,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Hollow Column with Bending',
    text: 'Situation 9 — A hollow circular column with unsupported length of 5 m is simply supported at the top and fixed at the bottom.\n\nGiven: Outside diameter $= 400$ mm; Wall thickness $= 15$ mm; Modulus of elasticity of steel $= 200$ GPa; Axial dead load $= 1800$ kN; Axial live load $= 1030$ kN; Bending moment at fixed end $= 11.9$ kN m.\n\n25. Determine the maximum compressive stress (MPa) at the top of the column.',
    options: [
      { label: 'A', text: '210' },
      { label: 'B', text: '156' },
      { label: 'C', text: '124' },
      { label: 'D', text: '195' },
    ],
    ...solved(25, 'B', '156 MPa (Option B)'),
  },

  // Item 26
  {
    id: 'psad-apr2025-q26',
    number: 26,
    pageNumber: 424,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Hollow Column with Bending',
    text: 'Situation 9 — 26. Determine the maximum compressive stress (MPa) at the bottom of the column.',
    options: [
      { label: 'A', text: '235' },
      { label: 'B', text: '186' },
      { label: 'C', text: '217' },
      { label: 'D', text: '163' },
    ],
    ...solved(26, 'D', '163 MPa (Option D)'),
  },

  // Item 27
  {
    id: 'psad-apr2025-q27',
    number: 27,
    pageNumber: 424,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Hollow Column with Bending',
    text: 'Situation 9 — 27. Compute the critical buckling load (kN) of the column.',
    options: [
      { label: 'A', text: '34,225' },
      { label: 'B', text: '45,524' },
      { label: 'C', text: '26,581' },
      { label: 'D', text: '54,248' },
    ],
    ...solved(27, 'D', '54,248 kN (Option D)'),
  },

  // Item 28
  {
    id: 'psad-apr2025-q28',
    number: 28,
    pageNumber: 424,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Frame Reactions from Moment Diagram',
    text: 'Situation 10 — Given the following data of the frame shown in the figure.\n\nDimensions: $L_1 = 10$ m, $L_2 = 6$ m, $L_3 = 4$ m, $H = 8$ m. Moments: $M_1 = 35$ kN m, $M_2 = -64$ kN m.\n\n28. What is the magnitude (kN) of the load $P_1$?',
    options: [
      { label: 'A', text: '20' },
      { label: 'B', text: '32' },
      { label: 'C', text: '16' },
      { label: 'D', text: '40' },
    ],
    ...solved(28, 'A', '20 kN (Option A)'),
  },

  // Item 29
  {
    id: 'psad-apr2025-q29',
    number: 29,
    pageNumber: 424,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Frame Reactions from Moment Diagram',
    text: 'Situation 10 — 29. What is the magnitude (kN) of the load $P_2$?',
    options: [
      { label: 'A', text: '32' },
      { label: 'B', text: '20' },
      { label: 'C', text: '40' },
      { label: 'D', text: '16' },
    ],
    ...solved(29, 'D', '16 kN (Option D)'),
  },

  // Item 30
  {
    id: 'psad-apr2025-q30',
    number: 30,
    pageNumber: 425,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Frame Reactions from Moment Diagram',
    text: 'Situation 10 — 30. Compute the critical shear at $B$.',
    options: [
      { label: 'A', text: '3.5' },
      { label: 'B', text: '16.5' },
      { label: 'C', text: '23.5' },
      { label: 'D', text: '18.5' },
    ],
    ...solved(30, 'B', '16.5 kN (Option B)'),
  },
];
