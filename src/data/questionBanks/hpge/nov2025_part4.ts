import { Question } from '../../../types/exam';
import { solved, opts } from './nov2025Helpers';

export const HPGE_NOV2025_PART4: Question[] = [
  // Item 37
  {
    id: 'hpge-nov2025-q37',
    number: 37,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Properties - Inter-particle Attraction & Cohesion Magnitude',
    text: 'Which of the following soil types has the highest cohesion?\nA. Clay\nB. Silt\nC. Peat\nD. Sand',
    options: opts('Clay', 'Silt', 'Peat', 'Sand'),
    ...solved(37, 'A', 'Clay (Option A)'),
  },

  // Item 38
  {
    id: 'hpge-nov2025-q38',
    number: 38,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Field Compaction Control - Philippine Standard Field Density Testing',
    text: 'What is the most common test used in the Philippines (Ph) for finding the field density of soil?\nA. Triaxial\nB. Sieve analysis\nC. Sand cone method\nD. Direct Shear',
    options: opts('Triaxial', 'Sieve analysis', 'Sand cone method', 'Direct Shear'),
    ...solved(38, 'C', 'Sand cone method (Option C)'),
  },

  // Item 39
  {
    id: 'hpge-nov2025-q39',
    number: 39,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Triangular Gate Total Thrust',
    text: 'Situation 1 - A triangular gate with a base width of 0.9 m and a height of 1.2 m is submerged vertically in water. The top vertex of the triangle is located 2 meters below the water surface.\n\nCalculate the hydrostatic force acting on the gate.\nA. 15.43\nB. 10.32\nC. 11.88\nD. 14.83',
    options: opts('15.43', '10.32', '11.88', '14.83'),
    ...solved(39, 'D', '14.83 (Option D)'),
  },

  // Item 40
  {
    id: 'hpge-nov2025-q40',
    number: 40,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Distance to Center of Pressure',
    text: 'Situation 1 (Continued) - Determine the distance of the water surface to the center of pressure (CP)\nA. 2.83\nB. 2.38\nC. 2.59\nD. 2.95',
    options: opts('2.83', '2.38', '2.59', '2.95'),
    ...solved(40, 'A', '2.83 (Option A)'),
  },

  // Item 41
  {
    id: 'hpge-nov2025-q41',
    number: 41,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydrostatic Forces on Surfaces - Opening Force About Bottom Hinge',
    text: 'Situation 1 (Continued) - If the gate is hinged at the bottom, calculate the force applied at the top vertex required to open the gate\nA. 3.84\nB. 4.59\nC. 3.99\nD. 4.12',
    options: opts('3.84', '4.59', '3.99', '4.12'),
    ...solved(41, 'B', '4.59 (Option B)'),
  },

  // Item 42
  {
    id: 'hpge-nov2025-q42',
    number: 42,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Dams & Retaining Walls - Upstream Hydrostatic Thrust on Dam',
    text: 'Situation 2 - A concrete gravity dam has a top width of 0.6 m, a base width of 4.2 m, and a total height of 7.0 m. The upstream face is vertical, while the downstream face is inclined. The water depth on the upstream side is 6.0 m.\nThe unit weight of concrete is 23.5 kN/m³, and the coefficient of friction between the dam base and its foundation is 0.60. Consider a 1.0-m length of the dam perpendicular to the cross-section.\n\nDetermine the hydrostatic force acting on the dam.\nA. 176.58 kN\nB. 132.53 kN\nC. 99.32 kN\nD. 117.42 kN',
    options: opts('176.58 kN', '132.53 kN', '99.32 kN', '117.42 kN'),
    ...solved(42, 'A', '176.58 kN (Option A)'),
  },

  // Item 43
  {
    id: 'hpge-nov2025-q43',
    number: 43,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Dams & Retaining Walls - Overturning Moment About the Toe',
    text: 'Situation 2 (Continued) - Determine the overturning moment.\nA. 353.2 kN - m\nB. 312.8 kN - m\nC. 223.4 kN - m\nD. 271.4 kN - m',
    options: opts('353.2 kN - m', '312.8 kN - m', '223.4 kN - m', '271.4 kN - m'),
    ...solved(43, 'A', '353.2 kN - m (Option A)'),
  },

  // Item 44
  {
    id: 'hpge-nov2025-q44',
    number: 44,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Dams & Retaining Walls - Factor of Safety Against Sliding',
    text: 'Situation 2 (Continued) - The factor of safety against sliding.\nA. 2.22\nB. 1.34\nC. 1.78\nD. 1.29',
    options: opts('2.22', '1.34', '1.78', '1.29'),
    ...solved(44, 'B', '1.34 (Option B)'),
  },

  // Item 45
  {
    id: 'hpge-nov2025-q45',
    number: 45,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Phase Relationships - Saturated Unit Weight Below Water Table',
    text: 'Situation 3 - A 3.2-m-thick sand layer overlies a very thick clay deposit. The groundwater table is located 1.2 m below the ground surface. The sand above the groundwater table has a degree of saturation of 12%.\nThe soil properties are as follows:\n• Sand: specific gravity, Gs = 2.62; void ratio, e = 0.58\n• Clay: specific gravity, Gs = 2.72; moisture content, MC = 36%\n\nWhat is the unit weight of sand below water table in kN per cubic meter?\nA. 19.32\nB. 20.11\nC. 17.63\nD. 19.87',
    options: opts('19.32', '20.11', '17.63', '19.87'),
    ...solved(45, 'D', '19.87 (Option D)'),
  },

  // Item 46
  {
    id: 'hpge-nov2025-q46',
    number: 46,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Effective Stress - Total Overburden Stress Across Layered Strata',
    text: 'Situation 3 (Continued) - What is the total stress, in kPa, at a point 6 m below the ground?\nA. 111.75\nB. 112.57\nC. 111.13\nD. 110.98',
    options: opts('111.75', '112.57', '111.13', '110.98'),
    ...solved(46, 'C', '111.13 (Option C)'),
  },

  // Item 47
  {
    id: 'hpge-nov2025-q47',
    number: 47,
    pageNumber: 555,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Effective Stress - Subsurface Effective Overburden Pressure',
    text: 'Situation 3 (Continued) - What is the effective stress, in kPa, at a point 6 m below the ground?\nA. 64.77\nB. 59.32\nC. 68.90\nD. 64.04',
    options: opts('64.77', '59.32', '68.90', '64.04'),
    ...solved(47, 'D', '64.04 (Option D)'),
  },
];
