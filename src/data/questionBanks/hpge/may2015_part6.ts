import { Question } from '../../../types/exam';
import { solved, recall, worked, opts } from './may2015Helpers';
import { hpgeMay2015Figure } from '../../hpgeMay2015Images';

export const HPGE_MAY2015_PART6: Question[] = [
  // Item 76
  {
    id: 'hpge-may2015-q76',
    number: 76,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Lateral Earth Pressure',
    text: 'Situation 16 (continued) – Determine the increase in force on the wall if the soil is fully saturated with rain water.',
    options: opts('305.8 kN', '287.7 kN', '352.6 kN', '421.2 kN'),
    ...solved(76, 'B', '287.7 kN (Option B)', 69, 70),
  },

  // Item 77
  {
    id: 'hpge-may2015-q77',
    number: 77,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Footings)',
    text: 'Situation 17 – The 4-m square footing shown in the figure supports a load Q = 5000 kN. In this problem, $H_1$ = 8 m and $H_2$ = 12 m. Calculate the pressure at the base of the footing.',
    figureSvg: hpgeMay2015Figure(
      17,
      'Figure 9: Square footing of width B carrying load Q, over a clay layer between depths H1 and H2, with layer thickness t.',
    ),
    figureCaption:
      'Figure 9: Footing of width B over a clay layer defined by H₁, H₂ and thickness t (Situation 17).',
    options: opts('325.8 kPa', '312.5 kPa', '284.6 kPa', '275.4 kPa'),
    ...solved(77, 'B', '312.5 kPa (Option B)', 70, 71),
  },

  // Item 78
  {
    id: 'hpge-may2015-q78',
    number: 78,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Footings)',
    text: 'Situation 17 (continued) – Calculate the pressure at the midheight of the clay layer assuming that the stress beneath the footing if spread at a slope of 1H to 2V.',
    options: opts('22.48 kPa', '28.36 kPa', '20.87 kPa', '25.51 kPa'),
    ...solved(78, 'D', '25.51 kPa (Option D)', 70, 71),
  },

  // Item 79
  {
    id: 'hpge-may2015-q79',
    number: 79,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Boussinesq)',
    text: 'Situation 17 (continued) – Calculate the pressure at the midheight of the clay layer (below the center of the footing) using Boussinesq Equation assuming point load.',
    options: opts('22.38 kPa', '24.69 kPa', '28.97 kPa', '23.87 kPa'),
    ...solved(79, 'D', '23.87 kPa (Option D)', 70, 71),
  },

  // Item 80
  {
    id: 'hpge-may2015-q80',
    number: 80,
    pageNumber: 50,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Boussinesq)',
    text: 'Situation 18 – A 4-m-diameter circular footing is supporting a water tank. The total weight of the footing, tank and its content is 1.60 MN.\n\nGiven the Boussinesq’s equation:\n\n$\\sigma_z = q \\times I_B$, where $I_B = 1 - 1/N$ and $N = [(R/z)^2 + 1]^{3/2}$\n\nDetermine the pressure at the base of the footing.',
    options: opts('127.3 kPa', '114.8 kPa', '136.9 kPa', '142.8 kPa'),
    ...solved(80, 'A', '127.3 kPa (Option A)', 71),
  },

  // Item 81
  {
    id: 'hpge-may2015-q81',
    number: 81,
    pageNumber: 50,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Boussinesq)',
    text: 'Situation 18 (continued) – Using the Boussinesq’s equation, what is the increase in pressure at a depth of 4 meters below the base of footing?',
    options: opts('32.5 kPa', '30.7 kPa', '36.2 kPa', '28.4 kPa'),
    ...solved(81, 'C', '36.2 kPa (Option C)', 71),
  },

  // Item 82
  {
    id: 'hpge-may2015-q82',
    number: 82,
    pageNumber: 50,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Stress Distribution (Boussinesq)',
    text: 'Situation 18 (continued) – Using the Boussinesq’s equation, at what depth below the base of footing is the increase in pressure equal to 1/6 the pressure at the base of footing?',
    options: opts('5.56 m', '6.32 m', '5.89 m', '4.89 m'),
    ...solved(82, 'A', '5.56 m (Option A)', 71),
  },
];
