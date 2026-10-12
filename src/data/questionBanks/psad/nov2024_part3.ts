import { Question } from '../../../types/exam';

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
    options: [
      { label: 'A', text: '157.7' },
      { label: 'B', text: '86.1' },
      { label: 'C', text: '81.6' },
      { label: 'D', text: '150.7' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute the normal load component perpendicular to the roof slope: w_nt = w₃ + (w₁ + w₂) cos 20° = 1.44 + (1.8 + 2.16) cos 20° = 5.161 kN/m. Moment M_x = w_nt L² / 8 = 41.288 kN·m. Bending stress f_bx = M_x / S_x = 150.7 MPa.',
      formulas: [
        'w_{nt} = w_3 + (w_1 + w_2)\\cos 20^{\\circ} = 1.44 + (1.8 + 2.16)\\cos 20^{\\circ} = 5.161\\text{ kN/m}',
        'M_x = \\frac{w_{nt} L^2}{8} = \\frac{5.161(8)^2}{8} = 41.288\\text{ kN}\\cdot\\text{m}',
        'f_{bx} = \\frac{M_x}{S_x} = \\frac{41.288 \\times 10^6}{2.74 \\times 10^5} = 150.686\\text{ MPa} \\approx 150.7\\text{ MPa}',
      ],
      steps: [
        'Step 1: Normal load on the roof slope: w_nt = 1.44 + (1.8 + 2.16) cos 20° = 5.161 kN/m.',
        'Step 2: Maximum bending moment about major axis: M_x = 5.161(8)² / 8 = 41.288 kN·m.',
        'Step 3: Bending stress f_bx = M_x / S_x = 41.288 × 10⁶ / (2.74 × 10⁵) = 150.7 MPa.',
      ],
      finalAnswer: '150.7 (Option D)',
      pageNumber: 296,
    },
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
    options: [
      { label: 'A', text: '176.6' },
      { label: 'B', text: '167.7' },
      { label: 'C', text: '151.3' },
      { label: 'D', text: '115.3' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Tangential load components parallel to the roof: w_t1 = w₁ sin 20° = 0.616 kN/m acting on top flange and w_t2 = w₂ sin 20° = 0.739 kN/m acting at centroid. Combine the resulting minor axis stresses: f_by = f_by1 + f_by2 = 104.85 + 62.89 = 167.7 MPa.',
      formulas: [
        'w_{t1} = 1.8\\sin 20^{\\circ} = 0.616\\text{ kN/m},\\; M_{y1} = \\frac{0.616(8)^2}{8} = 4.928\\text{ kN}\\cdot\\text{m}',
        'f_{by1} = \\frac{M_{y1}}{0.5 S_y} = \\frac{4.928 \\times 10^6}{0.5(0.94 \\times 10^5)} = 104.85\\text{ MPa}',
        'w_{t2} = 2.16\\sin 20^{\\circ} = 0.739\\text{ kN/m},\\; M_{y2} = \\frac{0.739(8)^2}{8} = 5.912\\text{ kN}\\cdot\\text{m}',
        'f_{by2} = \\frac{M_{y2}}{S_y} = \\frac{5.912 \\times 10^6}{0.94 \\times 10^5} = 62.89\\text{ MPa}',
        'f_{by} = f_{by1} + f_{by2} = 104.85 + 62.89 = 167.74\\text{ MPa} \\approx 167.7\\text{ MPa}',
      ],
      steps: [
        'Step 1: Component w_t1 acting on top flange produces bending on top flange with S = 0.5 S_y: f_by1 = 4.928 × 10⁶ / [0.5(0.94 × 10⁵)] = 104.85 MPa.',
        'Step 2: Component w_t2 acting at centroid produces bending on full cross-section: f_by2 = 5.912 × 10⁶ / (0.94 × 10⁵) = 62.89 MPa.',
        'Step 3: Total bending stress about y-axis: f_by = 104.85 + 62.89 = 167.7 MPa.',
      ],
      finalAnswer: '167.7 (Option B)',
      pageNumber: 297,
    },
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
    options: [
      { label: 'A', text: '11.68' },
      { label: 'B', text: '12.98' },
      { label: 'C', text: '16.18' },
      { label: 'D', text: '18.29' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Design flexural strength φ M_nx = φ F_y Z_x = 0.90(345)(3.01 × 10⁵) = 93.46 kN·m. Equate to M_ux = w_u L² / 8 and solve for factored wind load w_u.',
      formulas: [
        'M_{nx} = F_y Z_x = 345(3.01 \\times 10^5) = 103.845 \\times 10^6\\text{ N}\\cdot\\text{mm} = 103.845\\text{ kN}\\cdot\\text{m}',
        '\\phi M_{nx} = 0.90(103.845) = 93.46\\text{ kN}\\cdot\\text{m}',
        'M_{ux} = \\frac{w_u L^2}{8} \\le \\phi M_{nx} \\implies \\frac{w_u(8)^2}{8} \\le 93.46 \\implies 8 w_u = 93.46',
        'w_u = \\frac{93.46}{8} = 11.6825\\text{ kN/m} \\approx 11.68\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Nominal plastic moment capacity: M_nx = 345 MPa × 3.01 × 10⁵ mm³ = 103.845 kN·m.',
        'Step 2: Factored design moment capacity: φ M_nx = 0.90 × 103.845 = 93.46 kN·m.',
        'Step 3: M_ux = w_u(8)² / 8 = 8 w_u.',
        'Step 4: 8 w_u = 93.46 => w_u = 11.68 kN/m.',
      ],
      finalAnswer: '11.68 (Option A)',
      pageNumber: 298,
    },
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
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '4' },
      { label: 'D', text: '5' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'For the continuous frame/beam with 2 members (AB and BC) and 3 joints (A, B, C): support A is fixed (3 reactions), support B has roller/fixed components (2 reactions), support C is fixed (3 reactions), total reactions r = 8. Unknowns U = 3m + r = 3(2) + 8 = 14. Equations E = 3n + c = 3(3) + 0 = 9. Degree of indeterminacy = U - E = 14 - 9 = 5.',
      formulas: [
        'm = 2,\\; n = 3,\\; r = 3 + 2 + 3 = 8,\\; c = 0',
        'U = 3m + r = 3(2) + 8 = 14',
        'E = 3n + c = 3(3) + 0 = 9',
        '\\text{Indeterminacy} = U - E = 14 - 9 = 5',
      ],
      steps: [
        'Step 1: Number of members m = 2, joints n = 3, releases c = 0.',
        'Step 2: Number of support reactions r = 8.',
        'Step 3: Degree of indeterminacy = 3m + r - (3n + c) = 14 - 9 = 5.',
      ],
      finalAnswer: '5 (Option D)',
      pageNumber: 298,
    },
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
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '4' },
      { label: 'D', text: '5' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'With support B eliminated, the structure is a fixed-fixed single beam: m = 1, n = 2, r = 3 + 3 = 6. U = 3(1) + 6 = 9. Equations E = 3(2) = 6. Degree of indeterminacy = 9 - 6 = 3.',
      formulas: [
        'm = 1,\\; n = 2,\\; r = 3 + 3 = 6',
        'U = 3(1) + 6 = 9,\\; E = 3(2) = 6',
        '\\text{Indeterminacy} = U - E = 9 - 6 = 3',
      ],
      steps: [
        'Step 1: Fixed-fixed beam with both ends clamped.',
        'Step 2: Number of reactions r = 6; equations of equilibrium E = 3.',
        'Step 3: Degree of indeterminacy = 6 - 3 = 3.',
      ],
      finalAnswer: '3 (Option B)',
      pageNumber: 298,
    },
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
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '4' },
      { label: 'D', text: '5' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Changing support C from fixed (3 reactions) to pin (2 reactions) reduces external reactions by 1: r = 3 + 2 + 2 = 7. U = 3(2) + 7 = 13. Equations E = 3(3) = 9. Degree of indeterminacy = 13 - 9 = 4.',
      formulas: [
        'r = 3 + 2 + 2 = 7',
        'U = 3(2) + 7 = 13,\\; E = 3(3) = 9',
        '\\text{Indeterminacy} = 13 - 9 = 4',
      ],
      steps: [
        'Step 1: Total reactions with pinned support C: r = 7.',
        'Step 2: U = 3(2) + 7 = 13; E = 9.',
        'Step 3: Degree of indeterminacy = 13 - 9 = 4.',
      ],
      finalAnswer: '4 (Option C)',
      pageNumber: 299,
    },
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
    options: [
      { label: 'A', text: '8.9' },
      { label: 'B', text: '8.5' },
      { label: 'C', text: '7.2' },
      { label: 'D', text: '7.5' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Using moment equilibrium at B: M_B = M_A + R_A(L) - (1/2)(w)(L)(L/3). Substitute the given values to solve for w = 8.5 kN/m.',
      formulas: [
        'M_{B} = R_A(6) + M_A - \\frac{1}{2} w(6)\\left(\\frac{6}{3}\\right)',
        '-15.3 = 7.65(6) - 10.2 - 6w \\implies -15.3 = 45.9 - 10.2 - 6w = 35.7 - 6w',
        '6w = 35.7 + 15.3 = 51.0 \\implies w = 8.5\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Moment about right support B: M_B = M_A + R_A(6) - (1/2)w(6)(2).',
        'Step 2: -15.3 = -10.2 + 7.65(6) - 6w.',
        'Step 3: -15.3 = 35.7 - 6w => 6w = 51.0 => w = 8.5 kN/m.',
      ],
      finalAnswer: '8.5 (Option B)',
      pageNumber: 299,
    },
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
    options: [
      { label: 'A', text: '9' },
      { label: 'B', text: '4' },
      { label: 'C', text: '12' },
      { label: 'D', text: '6' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'At the location of maximum positive moment (x = 4.382 m), shear force is zero: V(x) = V_A - (1/2) x w_x = 0, where w_x = w(x / L). Solve for w.',
      formulas: [
        'w_x = \\frac{w}{8}(4.382) = 0.54775 w',
        'V(x) = V_A - \\frac{1}{2} x w_x = 0 \\implies 10.8 - \\frac{1}{2}(4.382)(0.54775 w) = 0',
        '10.8 - 1.200 w = 0 \\implies w = \\frac{10.8}{1.200} = 9\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Shear at point of zero shear: V(x) = V_A - (1/2) x (w x / L) = 0.',
        'Step 2: 10.8 = 0.5(4.382)² w / 8.',
        'Step 3: 10.8 = 1.1999 w => w = 9 kN/m.',
      ],
      finalAnswer: '9 (Option A)',
      pageNumber: 300,
    },
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
    options: [
      { label: 'A', text: '12' },
      { label: 'B', text: '10' },
      { label: 'C', text: '15' },
      { label: 'D', text: '21' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'For a fixed beam under triangular loading: M_A = -w L² / 30 and M_B = -w L² / 20. With M_A = -70 kN·m and L = 10 m: w = 70(30) / 100 = 21 kN/m.',
      formulas: [
        'M_A = -\\frac{w L^2}{30} \\implies -70 = -\\frac{w(10)^2}{30} \\implies w = \\frac{70 \\times 30}{100} = 21\\text{ kN/m}',
        'M_B = -\\frac{w L^2}{20} \\implies -105 = -\\frac{w(10)^2}{20} \\implies w = \\frac{105 \\times 20}{100} = 21\\text{ kN/m}',
      ],
      steps: [
        'Step 1: Standard fixed end moments for triangular load: M_A = -wL² / 30 and M_B = -wL² / 20.',
        'Step 2: From M_A: w = 70 × 30 / 10² = 21 kN/m.',
        'Step 3: From M_B: w = 105 × 20 / 10² = 21 kN/m.',
      ],
      finalAnswer: '21 (Option D)',
      pageNumber: 301,
    },
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
    options: [
      { label: 'A', text: '78.125' },
      { label: 'B', text: '63.255' },
      { label: 'C', text: '46.875' },
      { label: 'D', text: '88.475' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For a two-span continuous beam with span L = 12.5 m under uniform dead load w = 10 kN/m: end reaction R_A = 3 w L / 8 = 3(10)(12.5)/8 = 46.875 kN. Shear just to the left of interior support B is V_Bleft = -(5/8) w L = -46.875 kN (magnitude 46.875 kN).',
      formulas: [
        'L_1 = L_2 = 12.5\\text{ m}',
        'V_{B\\text{left}} = R_A - w(L_1) = 78.125 - 10(12.5) = -46.875\\text{ kN}',
      ],
      steps: [
        'Step 1: Total beam length = 25 m, each span = 12.5 m.',
        'Step 2: End reaction R_A = 78.125 kN.',
        'Step 3: Shear at B due to dead load: V_Bleft = 78.125 - 10(12.5) = -46.875 kN.',
      ],
      finalAnswer: '46.875 (Option C)',
      pageNumber: 302,
    },
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
    options: [
      { label: 'A', text: '42.156' },
      { label: 'B', text: '59.375' },
      { label: 'C', text: '40.625' },
      { label: 'D', text: '56.250' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Solve for interior support moment M_B using three-moment equation with P = 71 kN at midspan of AB: M_B = -83.203 kN·m. Reaction R_A = 28.844 kN. Shear at B is V_Bleft = R_A - P = 28.844 - 71 = -42.156 kN (magnitude 42.156 kN).',
      formulas: [
        'M_A L_1 + 2 M_B (L_1 + L_2) + M_C L_2 = -\\frac{3}{8} P L_1^2 \\implies 0 + 2 M_B (25) + 0 = -\\frac{3}{8}(71)(12.5)^2 = -4160.16',
        'M_B = -83.203\\text{ kN}\\cdot\\text{m}',
        'R_A = \\frac{P(6.25) + M_B}{12.5} = \\frac{71(6.25) - 83.203}{12.5} = 28.844\\text{ kN}',
        'V_{B\\text{left}} = R_A - P = 28.844 - 71 = -42.156\\text{ kN}',
      ],
      steps: [
        'Step 1: Apply three-moment equation for point load P = 71 kN at midspan: M_B = -83.203 kN·m.',
        'Step 2: Solve for reaction at A: R_A = [71(6.25) - 83.203] / 12.5 = 28.844 kN.',
        'Step 3: Shear just left of B: V_B = 28.844 - 71 = -42.156 kN.',
      ],
      finalAnswer: '42.156 (Option A)',
      pageNumber: 303,
    },
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
    options: [
      { label: 'A', text: '321.45' },
      { label: 'B', text: '278.52' },
      { label: 'C', text: '525.65' },
      { label: 'D', text: '195.31' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Superimpose support moments at B: M_B,dead = -w L_total² / 32 = -10(25)² / 32 = -195.31 kN·m. Live load moment M_B,live = -83.203 kN·m. Total moment M_B = -(195.31 + 83.203) = -278.52 kN·m.',
      formulas: [
        'M_{B,\\text{dead}} = -\\frac{w L^2}{32} = -\\frac{10(25)^2}{32} = -195.3125\\text{ kN}\\cdot\\text{m}',
        'M_{B,\\text{live}} = -83.203\\text{ kN}\\cdot\\text{m}',
        'M_B = -195.3125 - 83.203 = -278.516\\text{ kN}\\cdot\\text{m} \\approx -278.52\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Dead load moment at interior support B: M_B,dead = -wL² / 32 = -10(25)² / 32 = -195.31 kN·m.',
        'Step 2: Live load moment at B: M_B,live = -83.203 kN·m.',
        'Step 3: Total moment at B: M_B = -195.31 - 83.203 = -278.52 kN·m.',
      ],
      finalAnswer: '278.52 (Option B)',
      pageNumber: 303,
    },
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
    options: [
      { label: 'A', text: '1.5' },
      { label: 'B', text: '2.5' },
      { label: 'C', text: '3.5' },
      { label: 'D', text: '2.1' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For a propped cantilever beam with uniform load w, the propped end reaction is R_A = (3/8) w L. Zero shear occurs at x = R_A / w = (3/8) L.',
      formulas: [
        'R_A = \\frac{3}{8} w L = \\frac{3}{8}(24)(4) = 36\\text{ kN}',
        'V(x) = R_A - w x = 0 \\implies x = \\frac{R_A}{w} = \\frac{3}{8} L = \\frac{3}{8}(4) = 1.5\\text{ m}',
      ],
      steps: [
        'Step 1: Propped reaction R_A = (3/8) w L = 36 kN.',
        'Step 2: V(x) = 36 - 24x = 0.',
        'Step 3: x = 36 / 24 = 1.5 m from the left end.',
      ],
      finalAnswer: '1.5 (Option A)',
      pageNumber: 304,
    },
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
    options: [
      { label: 'A', text: '48' },
      { label: 'B', text: '32' },
      { label: 'C', text: '27' },
      { label: 'D', text: '23' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The maximum positive moment occurs at the point of zero shear (x = 1.5 m): M_max = R_A² / (2w) = (9/128) w L².',
      formulas: [
        'M_{\\text{pos,max}} = \\frac{R_A^2}{2w} = \\frac{36^2}{2(24)} = \\frac{1296}{48} = 27\\text{ kN}\\cdot\\text{m}',
      ],
      steps: [
        'Step 1: Point of zero shear is at x = 1.5 m.',
        'Step 2: M_max = R_A(1.5) - w(1.5)² / 2 = 36(1.5) - 24(2.25) / 2 = 54 - 27 = 27 kN·m.',
      ],
      finalAnswer: '27 (Option C)',
      pageNumber: 304,
    },
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
    options: [
      { label: 'A', text: '2.314' },
      { label: 'B', text: '3.214' },
      { label: 'C', text: '1.876' },
      { label: 'D', text: '1.686' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Using double integration of beam deflection: slope equation is E I y\' = (3/16) w L x² - w x³ / 6 - w L³ / 48 = 0. Solving the cubic equation yields x = 0.42154 L = 1.686 m.',
      formulas: [
        'EI y\' = \\frac{3wL}{16} x^2 - \\frac{wx^3}{6} - \\frac{wL^3}{48} = 0',
        '\\frac{x}{L} = \\frac{15 - \\sqrt{33}}{16} \\approx 0.42154',
        'x = 0.42154(4) = 1.68616\\text{ m} \\approx 1.686\\text{ m}',
      ],
      steps: [
        'Step 1: Set slope y\' = 0 for maximum deflection.',
        'Step 2: Roots of the equation within the span: x / L = 0.42154.',
        'Step 3: Distance from left propped support: x = 0.42154 × 4 = 1.686 m.',
      ],
      finalAnswer: '1.686 (Option D)',
      pageNumber: 306,
    },
  },
];
