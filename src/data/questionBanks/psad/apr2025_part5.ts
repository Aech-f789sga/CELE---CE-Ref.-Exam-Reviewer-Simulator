import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const PSAD_APR2025_PART5: Question[] = [
  // Item 61
  {
    id: 'psad-apr2025-q61',
    number: 61,
    pageNumber: 433,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Beam Sizing and Steel Area',
    text: 'Situation 21 — Given the following data of a rectangular concrete beam:\n\nBeam width, $b = 350$ mm; Effective cover to centroid of bar $= 75$ mm; Concrete strength, $f\'_c = 28$ MPa; Steel strength: main bar, $f_y = 413$ MPa; stirrups, $f_{yh} = 275$ MPa. Reduction factor: shear $= 0.75$; moment $= 0.90$.\n\n61. Given: Required moment, $M_u = 310$ kN m; Maximum steel ratio, $\\rho = 0.018$. Determine the required thickness of the beam (mm) if it is reinforced for tension only.',
    options: [
      { label: 'A', text: '423' },
      { label: 'B', text: '512' },
      { label: 'C', text: '397' },
      { label: 'D', text: '472' },
    ],
    ...solved(61, 'D', '472 mm (Option D)'),
  },

  // Item 62
  {
    id: 'psad-apr2025-q62',
    number: 62,
    pageNumber: 433,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Beam Sizing and Steel Area',
    text: 'Situation 21 — 62. Given: Required shear, $V_u = 250$ kN; Spacing of 12-mm U-stirrups $= 100$ mm. Determine the required beam thickness (mm) using normal weight concrete.',
    options: [
      { label: 'A', text: '524' },
      { label: 'B', text: '475' },
      { label: 'C', text: '431' },
      { label: 'D', text: '356' },
    ],
    ...solved(62, 'C', '431 mm (Option C)'),
  },

  // Item 63
  {
    id: 'psad-apr2025-q63',
    number: 63,
    pageNumber: 433,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Beam Sizing and Steel Area',
    text: 'Situation 21 — 63. Given: Beam thickness, $h = 600$ mm; Required moment, $M_u = 680$ kN m; Maximum steel ratio, $\\rho = 0.018$. Determine the required tension steel area in mm$^2$. Hint: $\\rho = (A_s - A\'_s)/bd$.',
    options: [
      { label: 'A', text: '4560' },
      { label: 'B', text: '4120' },
      { label: 'C', text: '3670' },
      { label: 'D', text: '3310' },
    ],
    ...solved(63, 'B', '4120 mm² (Option B)'),
  },

  // Item 64
  {
    id: 'psad-apr2025-q64',
    number: 64,
    pageNumber: 434,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Column Capacity and Shear',
    text: 'Situation 22 — Given the following data of the rectangular concrete column shown in the figure:\n\nColumn dimensions, $B \\times H = 500$ mm × 600 mm; Column length, $L = 8$ m; Bar diameter: main bars $= 28$ mm, ties $= 12$ mm; Effective cover to centroid of main bar $= 70$ mm; Concrete strength, $f\'_c = 34$ MPa; Steel yield strength: main bars, $f_y = 413$ MPa; ties, $f_{yh} = 275$ MPa; Modulus of elasticity of concrete, $E_c = 25000$ MPa. The column is fixed at the bottom and fixed at the top, $k = 0.70$. Factored vertical column load $= 4,800$ kN. Spacing of ties $= 100$ mm.\n\n$P_o = 0.85f\'_c(A_g - A_{st}) + f_yA_{st}$\n\n64. Determine the critical buckling load (kN) of the column.',
    options: [
      { label: 'A', text: '56,325' },
      { label: 'B', text: '70,811' },
      { label: 'C', text: '65,235' },
      { label: 'D', text: '49,175' },
    ],
    ...solved(64, 'D', '49,175 kN (Option D)'),
  },

  // Item 65
  {
    id: 'psad-apr2025-q65',
    number: 65,
    pageNumber: 434,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Column Capacity and Shear',
    text: 'Situation 22 — 65. Determine the maximum nominal axial strength of the column. Use eccentricity reduction factor of 0.8.',
    options: [
      { label: 'A', text: '12,454' },
      { label: 'B', text: '6,476' },
      { label: 'C', text: '9,963' },
      { label: 'D', text: '8,365' },
    ],
    ...solved(65, 'C', '9,963 kN (Option C)'),
  },

  // Item 66
  {
    id: 'psad-apr2025-q66',
    number: 66,
    pageNumber: 434,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Column Capacity and Shear',
    text: 'Situation 22 — 66. What is the nominal shear strength (kN) of the column considering bending about the $x$-axis.',
    options: [
      { label: 'A', text: '985' },
      { label: 'B', text: '1,083' },
      { label: 'C', text: '1,452' },
      { label: 'D', text: '1,222' },
    ],
    ...solved(66, 'B', '1,083 kN (Option B)'),
  },

  // Item 67
  {
    id: 'psad-apr2025-q67',
    number: 67,
    pageNumber: 434,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Slenderness Limits',
    text: 'Situation 23 — Given the following data of a circular spiral column:\n\nAxial dead load, $P_D = 1450$ kN; Axial live load, $P_L = 1570$ kN; $U = 1.2D + 1.6L$; Concrete strength, $f\'_c = 27.5$ MPa; Steel strength, $f_y = 415$ MPa; Column unsupported length, $L = 6$ m; Effective length factor, $k = 1$; Reduction factor $= 0.75$.\n\n67. Using 2.5% steel ratio, compute the required column diameter in mm.',
    options: [
      { label: 'A', text: '565' },
      { label: 'B', text: '465' },
      { label: 'C', text: '510' },
      { label: 'D', text: '500' },
    ],
    ...solved(67, 'C', '510 mm (Option C)'),
  },

  // Item 68
  {
    id: 'psad-apr2025-q68',
    number: 68,
    pageNumber: 435,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Slenderness Limits',
    text: 'Situation 23 — 68. Determine the minimum column diameter (mm) such that the effects of slenderness may be neglected. Assume that the column is not braced against sidesway.',
    options: [
      { label: 'A', text: '910' },
      { label: 'B', text: '1150' },
      { label: 'C', text: '1050' },
      { label: 'D', text: '1100' },
    ],
    ...solved(68, 'D', '1100 mm (Option D)'),
  },

  // Item 69
  {
    id: 'psad-apr2025-q69',
    number: 69,
    pageNumber: 435,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Slenderness Limits',
    text: 'Situation 23 — 69. Determine the minimum column diameter (mm) such that the effects of slenderness may be neglected. Assume that the column is braced against sidesway and bent in double curvature with end moments $M_2 = 1.5M_1$.',
    options: [
      { label: 'A', text: '600' },
      { label: 'B', text: '500' },
      { label: 'C', text: '580' },
      { label: 'D', text: '930' },
    ],
    ...solved(69, 'A', '600 mm (Option A)'),
  },

  // Item 70
  {
    id: 'psad-apr2025-q70',
    number: 70,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Combined Footing Shear',
    text: 'Situation 24 — The combined footing shown supports the two square columns. The shear diagram at factored loads is also shown. Given the following data:\n\nDimensions: $a = 1.3$ m; $b = 3.5$ m; $c = 0.4$ m; Footing width, $W = 4$ m; Footing effective depth $= 500$ mm.\n\nShear at factored loads: $e = 509.6$ kN; $f = -605.4$ kN; $g = 766.6$ kN; $h = 156.8$ kN.\n\nUniform soil pressure, $qu = 98$ kPa. Material strengths: Concrete, $f\'_c = 27.6$ MPa; Steel yield strength, $f_y = 413$ MPa; Main bar diameter $= 20$ mm; Reduction factor for shear $= 0.75$; Reduction factor for moment $= 0.9$.\n\n70. Determine the maximum wide beam shear stress (MPa) at critical section near column $A$.',
    options: [
      { label: 'A', text: '0.404' },
      { label: 'B', text: '0.227' },
      { label: 'C', text: '0.273' },
      { label: 'D', text: '0.205' },
    ],
    ...solved(70, 'C', '0.273 MPa (Option C)'),
  },

  // Item 71
  {
    id: 'psad-apr2025-q71',
    number: 71,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Combined Footing Shear',
    text: 'Situation 24 — 71. Determine the maximum wide beam shear stress (MPa) along the $x$-axis.',
    options: [
      { label: 'A', text: '0.34' },
      { label: 'B', text: '0.28' },
      { label: 'C', text: '0.75' },
      { label: 'D', text: '0.26' },
    ],
    ...solved(71, 'A', '0.34 MPa (Option A)'),
  },

  // Item 72
  {
    id: 'psad-apr2025-q72',
    number: 72,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Combined Footing Shear',
    text: 'Situation 24 — 72. What is the maximum punching shear stress (MPa) at column $A$.',
    options: [
      { label: 'A', text: '1.25' },
      { label: 'B', text: '0.883' },
      { label: 'C', text: '0.736' },
      { label: 'D', text: '0.662' },
    ],
    ...solved(72, 'B', '0.883 MPa (Option B)'),
  },

  // Item 73
  {
    id: 'psad-apr2025-q73',
    number: 73,
    pageNumber: 437,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Pile Cap Reactions and Shear',
    text: 'Situation 25 — Given the following data of the pile cap shown:\n\nDimensions: $a = 1.5$ m; $b = 1.8$ m; $c = 0.85$ m; Column size: 600 mm × 600 mm; Effective depth of the pile cap, $d = 1.2$ m; Factored column load, $P_u = 4,500$ kN; Factored moments: $M_{ux} = 420$ kN m; $M_{uy} = 380$ kN m; Strength reduction factor for shear $= 0.75$.\n\n73. Compute the biggest pile reaction (kN) due to the given factored loads.',
    options: [
      { label: 'A', text: '538.9' },
      { label: 'B', text: '496.7' },
      { label: 'C', text: '581.1' },
      { label: 'D', text: '418.9' },
    ],
    ...solved(73, 'C', '581.1 kN (Option C)'),
  },

  // Item 74
  {
    id: 'psad-apr2025-q74',
    number: 74,
    pageNumber: 437,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Pile Cap Reactions and Shear',
    text: 'Situation 25 — 74. Compute the smallest pile reaction (kN) due to the given factored loads.',
    options: [
      { label: 'A', text: '496.7' },
      { label: 'B', text: '418.9' },
      { label: 'C', text: '538.9' },
      { label: 'D', text: '581.1' },
    ],
    ...solved(74, 'B', '418.9 kN (Option B)'),
  },

  // Item 75
  {
    id: 'psad-apr2025-q75',
    number: 75,
    pageNumber: 437,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - Pile Cap Reactions and Shear',
    text: 'Situation 25 — 75. Compute the critical wide-beam shear stress (MPa).',
    options: [
      { label: 'A', text: '0.28' },
      { label: 'B', text: '0.46' },
      { label: 'C', text: '0.34' },
      { label: 'D', text: '0.38' },
    ],
    ...solved(75, 'D', '0.38 MPa (Option D)'),
  },
];
