import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';
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
    options: opts('665 kN-m', '625 kN-m', '675 kN-m', '655 kN-m'),
    ...solved(76, 'A', '665 kN-m', 119, 120),
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
    options: opts('257 mm', '249 mm', '236 mm', '0'),
    ...solved(77, 'D', '0', 120),
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
    options: opts('268 mm', '0', '256 mm', '105 mm'),
    ...solved(78, 'B', '0', 120),
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
    options: opts('124.5 kN-m', '105.32 kN-m', '136.7 kN-m', '119.6 kN-m'),
    ...solved(79, 'D', '119.6 kN-m', 120),
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
    options: opts('0.306 MPa', '0.358 MPa', '0.385 MPa', '0.412 MPa'),
    ...solved(80, 'B', '0.358 MPa', 121, 122),
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
    options: opts('0.416 MPa', '0.489 MPa', '0.481 MPa', '0.523 MPa'),
    ...solved(81, 'B', '0.489 MPa', 121, 122),
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
    options: opts('519.59 kN-m', '399.36 kN-m', '356.98 kN-m', '467.63 kN-m'),
    ...solved(82, 'D', '467.63 kN-m', 121, 122),
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
    options: opts('0.486 MPa', '0.524 MPa', '0.478 MPa', '0.261 MPa'),
    ...solved(83, 'C', '0.478 MPa', 123, 124),
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
    options: opts('1.032 MPa', '1.125 MPa', '1.049 MPa', '0.985 MPa'),
    ...solved(84, 'A', '1.032 MPa', 123, 124),
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
    options: opts('0.542 MPa', '0.512 MPa', '0.555 MPa', '0.528 MPa'),
    ...solved(85, 'D', '0.528 MPa', 123, 124),
  },
];
