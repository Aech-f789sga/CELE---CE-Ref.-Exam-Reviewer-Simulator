import { Question } from '../../../types/exam';
import { psadNov2015Figure } from '../../psadNov2015Images';
import { solved, opts } from './nov2015Helpers';

export const PSAD_NOV2015_PART2: Question[] = [
  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q16',
    number: 16,
    pageNumber: 196,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 5 — Horizontal Reaction at C',
    text: 'Situation 5 (continued) – If W = 80 kN, what is the horizontal reaction at C?',
    options: opts('126.32 kN', '118.45 kN', '138.56 kN', '102.87 kN'),
    ...solved(16, 'C', '138.56 kN (Option C)', 217),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q17',
    number: 17,
    pageNumber: 197,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 6 — Deflection of a Hanger-Supported Beam',
    text: 'Situation 6 – The rigid beam AB shown supports a load W at B. The beam is hinged at A and supported by a steel cable CD at C. The cable is 36 mm in diameter and 3 m long. Use E = 200 GPa. L₁ = 1.8 m, L₂ = 1.2 m. Neglect the weight of the beam.\n\n17. If W = 80 kN, what is the vertical deflection of point B?',
    figureSvg: psadNov2015Figure(
      'fig06_beam',
      'Situation 6: a rigid beam AB hinged at A, hanging from a vertical steel cable CD at C, and carrying a load W at its free end B; C divides the span into L₁ = 1.8 m and L₂ = 1.2 m.',
    ),
    options: opts('1.96 mm', '3.64 mm', '2.46 mm', '3.27 mm'),
    ...solved(17, 'D', '3.27 mm (Option D)', 217, 218),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q18',
    number: 18,
    pageNumber: 197,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 6 — Allowable Cable Stress',
    text: 'Situation 6 (continued) – If the allowable stress of cable CD is 124 MPa, what is the maximum value of W?',
    options: opts('75.73 kN', '96.35 kN', '102.54 kN', '163.24 kN'),
    ...solved(18, 'A', '75.73 kN (Option A)', 218),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q19',
    number: 19,
    pageNumber: 197,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 6 — Cable Strain Limit',
    text: 'Situation 6 (continued) – Find W if the strain of cable CD is 0.002 mm/mm.',
    options: opts('200.7 kN', '215.7 kN', '189.3 kN', '244.3 kN'),
    ...solved(19, 'D', '244.3 kN (Option D)', 218),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q20',
    number: 20,
    pageNumber: 197,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 7 — Wind on a Signage Pole',
    text: 'Situation 7 – The signage shown in Figure ME09-236 is subjected to a wind pressure of 1.6 kPa. Neglect the effect of wind pressure on the pole.\n\n20. What is the maximum moment at the base of the pole?',
    figureSvg: psadNov2015Figure(
      'fig07_sign',
      'Figure ME09-236: a 1 m × 2.40 m sign panel mounted on an 8 m pole, its near edge 0.40 m from the pole centreline.',
    ),
    options: opts('32.42 kN-m', '30.72 kN-m', '36.35 kN-m', '34.36 kN-m'),
    ...solved(20, 'B', '30.72 kN-m (Option B)', 218),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q21',
    number: 21,
    pageNumber: 197,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 7 — Torque at the Pole Base',
    text: 'Situation 7 (continued) – What is the maximum torque at the base of the pole?',
    options: opts('3.254 kN-m', '4.852 kN-m', '5.254 kN-m', '6.104 kN-m'),
    ...solved(
      21,
      'D',
      '6.104 kN-m (Option D)',
      218,
      218,
      'Booklet misprint: the working evaluates $T = Fc = 3.84(1.6) = 6.144$ kN-m, but option D prints 6.104 kN-m — the digits 4 and 0 are transposed. The key marks D and the printed option is reproduced as issued.',
    ),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q22',
    number: 22,
    pageNumber: 197,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 7 — Shear at the Pole Base',
    text: 'Situation 7 (continued) – What is the maximum shear at the base of the pole?',
    options: opts('3980 N', '4025 N', '3840 N', '4230 N'),
    ...solved(22, 'C', '3840 N (Option C)', 218),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q23',
    number: 23,
    pageNumber: 198,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 8 — Twist of a Hollow Pipe',
    text: 'Situation 8 – A hollow vertical cylindrical steel pipe with an outside diameter of 300 mm and 6 mm thick has a length of 3 m. The pipe is fixed at the bottom and free on top and is subjected to a torque of 25 kN-m and a lateral force of 3 kN at the top. The shear modulus of steel is 78 GPa.\n\n23. Calculate the maximum angle of twist in degrees.',
    options: opts('0.46', '0.0803', '0.63', '0.108'),
    ...solved(23, 'A', '0.46° (Option A)', 219),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q24',
    number: 24,
    pageNumber: 198,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 8 — Shear Stress from Torque',
    text: 'Situation 8 (continued) – Calculate the maximum shear stress due to torque.',
    options: opts('31.3 MPa', '36.5 MPa', '28.4 MPa', '25.9 MPa'),
    ...solved(24, 'A', '31.3 MPa (Option A)', 219),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q25',
    number: 25,
    pageNumber: 198,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 8 — Shear Stress from Lateral Force',
    text: 'Situation 8 (continued) – Calculate the maximum shear stress due to lateral force.',
    options: opts('2.36 MPa', '5.87 MPa', '1.36 MPa', '1.08 MPa'),
    ...solved(25, 'D', '1.08 MPa (Option D)', 219),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q26',
    number: 26,
    pageNumber: 198,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 9 — Uniform Pressure on a Combined Footing',
    text: 'Situation 9 – Refer to Figure CO23.52. The column loads of the combined footing are P₁ = 1200 kN and P₂ = 800 kN. Distances b = 6 m and c = 3 m.\n\n26. Determine the value of distance "a" such that the pressure at the base of the footing will be uniform.',
    figureSvg: psadNov2015Figure(
      'fig09_footing',
      'Figure CO23.52: a combined footing carrying two column loads P₁ and P₂; the left overhang is a, the spacing between columns is b, and the right overhang is c.',
    ),
    options: opts('3.6 m', '3.2 m', '3 m', '4.2 m'),
    ...solved(26, 'D', '4.2 m (Option D)', 220),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q27',
    number: 27,
    pageNumber: 198,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 9 — Maximum Shear in the Footing',
    text: 'Situation 9 (continued) – If P₁ = P₂ = 1200 kN and a = 3 m, what is the maximum shear in the footing?',
    options: opts('10000 kN', '4000 kN', '8000 kN', '6000 kN'),
    ...solved(
      27,
      'D',
      '6000 kN (Option D)',
      220,
      220,
      'Booklet defect: the working gives $q = 2400/12 = 200$ kN/m and $V_{max} = 200(3) = 600$ kN, a value that is in none of the four choices. The key marks D = 6000 kN, a factor of ten above the printed working. The key is reproduced as issued.',
    ),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q28',
    number: 28,
    pageNumber: 198,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 9 — Point of Inflection',
    text: 'Situation 9 (continued) – If P₁ = P₂ = 1200 kN and a = 3 m, find the location of the point of inflection from the left end of the footing.',
    options: opts('6 m', '3 m', '4.5 m', '9 m'),
    ...solved(28, 'A', '6 m (Option A)', 220),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q29',
    number: 29,
    pageNumber: 198,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 10 — Length of a Concrete Pad',
    text: 'Situation 10 – A concrete pad is shown in Figure CO32-0205.\n\n29. Find L so that the pressure at the base of pad is uniform.',
    figureSvg: psadNov2015Figure(
      'fig10_pad',
      'Figure CO32-0205: a concrete pad of length L carrying a 290 kN/m load over its first 3 m, a clear 6 m gap, and a 580 kN/m load over the next 3 m, with a further distance x to the right end; the soil reaction w acts upward over the whole length.',
    ),
    options: opts('12 m', '15 m', '16 m', '14 m'),
    ...solved(29, 'B', '15 m (Option B)', 221),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q30',
    number: 30,
    pageNumber: 198,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 10 — Uniform Upward Load',
    text: 'Situation 10 (continued) – Calculate the uniform upward load "w" if the shear at 5 meters from the left end is zero.',
    options: opts('145 kN/m', '136 kN/m', '154 kN/m', '174 kN/m'),
    ...solved(30, 'D', '174 kN/m (Option D)', 221),
  },
];
