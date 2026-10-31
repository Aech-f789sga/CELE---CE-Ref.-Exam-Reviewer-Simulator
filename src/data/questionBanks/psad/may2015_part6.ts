import { Question } from '../../../types/exam';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART6: Question[] = [
  // Item 76
  {
    id: 'psad-may2015-q76',
    number: 76,
    pageNumber: 90,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Centroids',
    text: 'Situation 24 (continued) – If the column is reinforced such that the plastic centroid is located 270 mm from line 1 along the x-axis, determine the moment due to a factored load of 3500 kN acting at 460 mm from line 1 along the x-axis.',
    options: [
      { label: 'A', text: '665 kN-m' },
      { label: 'B', text: '625 kN-m' },
      { label: 'C', text: '675 kN-m' },
      { label: 'D', text: '655 kN-m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The moment is the factored load times its eccentricity measured from the plastic centroid.',
      formulas: ['e = 460 - 270 = 190\\ \\text{mm}', 'M = P_u e'],
      steps: [
        'Step 1: Eccentricity $= 460 - 270 = 190\\ \\text{mm} = 0.19\\ \\text{m}$.',
        'Step 2: $M = 3500(0.19)$.',
        'Step 3: $M = 665\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '665 kN-m (Option A)',
    },
  },

  // Item 77
  {
    id: 'psad-may2015-q77',
    number: 77,
    pageNumber: 91,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Centroids',
    text: 'Situation 25 – The column of a non-sway frame is shown in the figure above. Concrete strength $f\u2019_c$ = 28 MPa and steel strength $f_y$ = 415 MPa. The diameter is 10 mm with clear cover of 40 mm. Consider bending parallel to x-axis and neglect the concrete area displaced by steel. Given the following dimensions: $x_1$ = 250 mm, $x_2$ = 350 mm, $y_1$ = 150 mm, $y_2$ = 300 mm. Determine the location of the geometric centroid from x-axis.',
    figureSvg: psadMay2015Figure(
      25,
      'Figure 25: The same T-shaped column section as Figure 24, with the flange and web depths y1 and y2 measured from the x-axis.',
    ),
    figureCaption:
      'Figure 25: T-shaped column section, bending about the x-axis (Situation 25).',
    options: [
      { label: 'A', text: '257 mm' },
      { label: 'B', text: '249 mm' },
      { label: 'C', text: '236 mm' },
      { label: 'D', text: '0' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The section is doubly symmetric about the x-axis, so its centroid lies on that axis.',
      steps: [
        'Step 1: The flange extends $y_1$ above and below the x-axis, and the web $y_2$ likewise.',
        'Step 2: First moment about the x-axis cancels exactly.',
        'Step 3: The centroid is on the x-axis — a distance of 0 from it.',
      ],
      finalAnswer: '0 (Option D)',
    },
  },

  // Item 78
  {
    id: 'psad-may2015-q78',
    number: 78,
    pageNumber: 91,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Centroids',
    text: 'Situation 25 (continued) – Determine the location of the plastic centroid from x-axis.',
    options: [
      { label: 'A', text: '268 mm' },
      { label: 'B', text: '0' },
      { label: 'C', text: '256 mm' },
      { label: 'D', text: '105 mm' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Both the steel and the concrete are symmetric about the x-axis, so the squash load resultant passes through it.',
      steps: [
        'Step 1: The reinforcement is symmetric about the x-axis.',
        'Step 2: The concrete areas are symmetric about the x-axis as well.',
        'Step 3: The plastic centroid therefore coincides with the x-axis — 0 mm from it.',
      ],
      finalAnswer: '0 (Option B)',
    },
  },

  // Item 79
  {
    id: 'psad-may2015-q79',
    number: 79,
    pageNumber: 91,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Centroids',
    text: 'Situation 25 (continued) – Determine the moment due to a factored load of 4600 kN acting at 26 mm from the x-axis.',
    options: [
      { label: 'A', text: '124.5 kN-m' },
      { label: 'B', text: '105.32 kN-m' },
      { label: 'C', text: '136.7 kN-m' },
      { label: 'D', text: '119.6 kN-m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Since the plastic centroid lies on the x-axis, the eccentricity is simply the 26 mm offset.',
      formulas: ['M_u = P_u e = 4600(0.026)'],
      steps: [
        'Step 1: Eccentricity from the plastic centroid $= 26\\ \\text{mm} = 0.026\\ \\text{m}$.',
        'Step 2: $M_u = 4600(0.026)$.',
        'Step 3: $M_u = 119.6\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '119.6 kN-m (Option D)',
    },
  },

  // Item 80
  {
    id: 'psad-may2015-q80',
    number: 80,
    pageNumber: 92,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Pile Cap Shear',
    text: 'Situation 26 – The pile cap shown in the figure supports a 400-mm square column. In this problem, $x_1$ = 2 m, $x_2$ = 0.60 m and d = 0.60 m. Loads: Axial dead load, $P_D$ = 430 kN; Axial live load, $P_L$ = 380 kN; Axial earthquake load, $P_E$ = 220 kN; Moment due to earthquake, $M_E$ = 170 kN-m. Load combinations: Dead & Live load: U = 1.4D + 1.7L; Dead, Live, & Earthquake: U = 1.32D + 1.1L + 1.1E. Calculate the required nominal wide beam shear stress at critical section.',
    figureSvg: psadMay2015Figure(
      26,
      'Figure 26: Square pile cap in plan with five piles and a 400 mm square column, plus the elevation showing P, M and the effective depth d.',
    ),
    figureCaption:
      'Figure 26: Pile cap with five piles supporting a 400 mm square column (Situation 26).',
    options: [
      { label: 'A', text: '0.306 MPa' },
      { label: 'B', text: '0.358 MPa' },
      { label: 'C', text: '0.385 MPa' },
      { label: 'D', text: '0.412 MPa' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Get the governing pile reaction, take the shear across the critical section two piles wide, then divide by bw·d.',
      formulas: [
        'P_{u1} = 1.4(430) + 1.7(380) = 1248\\ \\text{kN}',
        'R_p = \\dfrac{1248}{5} = 249.6\\ \\text{kN}',
        'V_u = 2R_p = 584.54\\ \\text{kN}',
      ],
      steps: [
        'Step 1: D + L: $P_{u1} = 1248\\ \\text{kN}$; D + L + E: $P_{u2} = 1227.6\\ \\text{kN}$, $M_{u2} = 187\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 2: Five piles, so $R_p = 1248/5 = 249.6\\ \\text{kN}$ governs the shear.',
        'Step 3: $V_u = 2(249.6) = 584.54\\ \\text{kN}$; $V_n = 584.54/0.85 = 687.694\\ \\text{kN}$.',
        'Step 4: $b_w = x_1 + 2x_2 = 2 + 1.2 = 3.2\\ \\text{m} = 3200\\ \\text{mm}$.',
        'Step 5: $v_n = 687{,}694/[3200(600)] = 0.358\\ \\text{MPa}$.',
      ],
      finalAnswer: '0.358 MPa (Option B)',
    },
  },

  // Item 81
  {
    id: 'psad-may2015-q81',
    number: 81,
    pageNumber: 92,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Pile Cap Shear',
    text: 'Situation 26 (continued) – Calculate the required nominal punching shear stress at critical section.',
    options: [
      { label: 'A', text: '0.416 MPa' },
      { label: 'B', text: '0.489 MPa' },
      { label: 'C', text: '0.481 MPa' },
      { label: 'D', text: '0.523 MPa' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Punching shear is the column load minus the piles inside the perimeter, spread over the perimeter at d/2.',
      formulas: [
        'V_u = 4R_p = 998.4\\ \\text{kN}',
        'b_o = 4(400 + 600) = 4000\\ \\text{mm}',
        'v_n = \\dfrac{V_n}{b_o d}',
      ],
      steps: [
        'Step 1: $V_u = 4(249.6) = 998.4\\ \\text{kN}$ for D + L (982.08 kN for D + L + E, so 998.4 governs).',
        'Step 2: $V_n = 998.4/0.85 = 1174.588\\ \\text{kN}$.',
        'Step 3: $b_o = 4(400 + 600) = 4000\\ \\text{mm}$.',
        'Step 4: $v_n = 1{,}174{,}588/[4000(600)] = 0.489\\ \\text{MPa}$.',
      ],
      finalAnswer: '0.489 MPa (Option B)',
    },
  },

  // Item 82
  {
    id: 'psad-may2015-q82',
    number: 82,
    pageNumber: 92,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Pile Cap Shear',
    text: 'Situation 26 (continued) – Calculate the required moment at critical section.',
    options: [
      { label: 'A', text: '519.59 kN-m' },
      { label: 'B', text: '399.36 kN-m' },
      { label: 'C', text: '356.98 kN-m' },
      { label: 'D', text: '467.63 kN-m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The moment at the column face is the reaction of the two outer piles times their lever arm from that face.',
      formulas: ['M_u = 2R_{p1}x_m', 'x_m = 0.5x_1 - 0.5(0.4)'],
      steps: [
        'Step 1: Lever arm $x_m = 0.5(2) - 0.5(0.4) = 0.8\\ \\text{m}$.',
        'Step 2: $R_{p1} = 1227.6/5 + 187(1)/4 = 292.27\\ \\text{kN}$ (governing).',
        'Step 3: $M_u = 2(292.27)(0.8)$.',
        'Step 4: $M_u = 467.63\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '467.63 kN-m (Option D)',
    },
  },

  // Item 83
  {
    id: 'psad-may2015-q83',
    number: 83,
    pageNumber: 92,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Footing Shear',
    text: 'Situation 27 – The rectangular footing shown is subjected to factored axial load of $P_u$ = 3600 kN, factored moment $M_u$ = 660 kN-m. The effective depth of footing is d = 650 mm. Calculate the critical nominal wide-beam shear stress due to axial load only.',
    figureCaption:
      'Figure: Rectangular footing 3 m × 2.5 m carrying a 600 mm square column, effective depth d = 650 mm. (The drawing is not reproduced in the source scan; the dimensions are those given in the book\u2019s worked solution.)',
    options: [
      { label: 'A', text: '0.486 MPa' },
      { label: 'B', text: '0.524 MPa' },
      { label: 'C', text: '0.478 MPa' },
      { label: 'D', text: '0.261 MPa' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With axial load only the soil pressure is uniform; the wide-beam critical section sits d from the column face.',
      formulas: [
        'q_u = \\dfrac{P_u}{BL} = \\dfrac{3600}{3(2.5)} = 480\\ \\text{kPa}',
        'x_1 = 0.5(3 - 0.6) - 0.65 = 0.55\\ \\text{m}',
        'V_u = q_u L x_1',
      ],
      steps: [
        'Step 1: $q_u = 3600/7.5 = 480\\ \\text{kPa}$.',
        'Step 2: $x_1 = 0.5(3 - 0.6) - 0.65 = 0.55\\ \\text{m}$.',
        'Step 3: $V_u = 480(2.5)(0.55) = 660\\ \\text{kN}$; $V_n = 660/0.85 = 776.47\\ \\text{kN}$.',
        'Step 4: $v_n = 776{,}470/[2500(650)] = 0.478\\ \\text{MPa}$.',
      ],
      finalAnswer: '0.478 MPa (Option C)',
    },
  },

  // Item 84
  {
    id: 'psad-may2015-q84',
    number: 84,
    pageNumber: 92,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Footing Shear',
    text: 'Situation 27 (continued) – Calculate the critical nominal punching shear stress due to axial load only.',
    options: [
      { label: 'A', text: '1.032 MPa' },
      { label: 'B', text: '1.125 MPa' },
      { label: 'C', text: '1.049 MPa' },
      { label: 'D', text: '0.985 MPa' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Punching force is the footing load less the pressure inside the critical perimeter.',
      formulas: [
        'V_u = q_u[BL - (0.6 + d)^2]',
        'v_n = \\dfrac{V_n}{4(600 + 650)(650)}',
      ],
      steps: [
        'Step 1: $V_u = 480[3(2.5) - (0.6 + 0.65)^2] = 480(7.5 - 1.5625) = 2850\\ \\text{kN}$.',
        'Step 2: $V_n = 2850/0.85 = 3352.94\\ \\text{kN}$.',
        'Step 3: $b_o = 4(600 + 650) = 5000\\ \\text{mm}$.',
        'Step 4: $v_n = 3{,}352{,}940/[5000(650)] = 1.032\\ \\text{MPa}$.',
      ],
      finalAnswer: '1.032 MPa (Option A)',
    },
  },

  // Item 85
  {
    id: 'psad-may2015-q85',
    number: 85,
    pageNumber: 92,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Footing Shear',
    text: 'Situation 27 (continued) – Calculate the critical nominal wide-beam shear stress due to axial load and moment.',
    options: [
      { label: 'A', text: '0.542 MPa' },
      { label: 'B', text: '0.512 MPa' },
      { label: 'C', text: '0.555 MPa' },
      { label: 'D', text: '0.528 MPa' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The moment makes the pressure trapezoidal; integrate the pressure between the critical section and the near edge.',
      formulas: [
        'q_u = \\dfrac{P_u}{BL} \\pm \\dfrac{6M_u}{LB^2} = 480 \\pm 176',
        'V_u = \\tfrac{1}{2}(q_{u1} + q_{u3})(1.5 - x_2)L',
      ],
      steps: [
        'Step 1: $6M_u/(LB^2) = 6(660)/[2.5(3)^2] = 176\\ \\text{kPa}$, so $q_{u1} = 656\\ \\text{kPa}$ and $q_{u2} = 304\\ \\text{kPa}$.',
        'Step 2: $x_2 = 0.5(0.6) + 0.65 = 0.95\\ \\text{m}$; the critical section is 0.55 m from the high-pressure edge.',
        'Step 3: $q_{u3} = 656 - 352(0.55/3) = 591.467\\ \\text{kPa}$.',
        'Step 4: $V_u = \\tfrac{1}{2}(656 + 591.467)(0.55)(2.5) = 857.63\\ \\text{kN}$.',
        'Step 5: $v_n = 857{,}630/[2500(650)] = 0.528\\ \\text{MPa}$.',
      ],
      finalAnswer: '0.528 MPa (Option D)',
    },
  },
];
