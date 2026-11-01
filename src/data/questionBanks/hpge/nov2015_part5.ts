import { Question } from '../../../types/exam';
import { hpgeNov2015Figure } from '../../hpgeNov2015Images';
import { solved, opts } from './nov2015Helpers';

export const HPGE_NOV2015_PART5: Question[] = [
  // ── Item 59 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q59',
    number: 59,
    pageNumber: 169,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 12 — Total Vertical Stress in a Clay Layer',
    text: 'Situation 12 – A 5-meter clay layer lies beneath an 8-meter sand layer. The sand is 3 meters below the water surface. Saturated unit weight of sand is 25 kN/m³ and clay is 20 kN/m³. Calculate the following:\n\n59. The total vertical pressure (in kPa) at midheight of clay layer.',
    options: opts('240.1', '248.6', '209.3', '239.4'),
    ...solved(
      's12',
      'D',
      '239.4 kPa (Option D)',
      187,
      188,
      'Booklet defect: the working printed here evaluates $\\sigma_v = 9.81(3) + 25(8) + 20(0.5 \\times 5) = 279.43$ kPa, a value that is in none of the four choices. The key marks D = 239.4 kPa, which follows only if the clay contributes 0.5 m instead of half of the 5 m layer. The printed key is reproduced as issued.',
    ),
  },

  // ── Item 60 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q60',
    number: 60,
    pageNumber: 170,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 12 — Pore Water Pressure',
    text: 'Situation 12 (continued) – The pore water pressure (in kPa) at midheight of clay layer.',
    options: opts('122.6', '132.4', '112.8', '152.1'),
    ...solved('s12', 'B', '132.4 kPa (Option B)', 187, 188),
  },

  // ── Item 61 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q61',
    number: 61,
    pageNumber: 170,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 12 — Effective Vertical Stress',
    text: 'Situation 12 (continued) – The effective vertical stress (in kPa) at midheight of clay layer.',
    options: opts('147', '96.5', '99.4', '117.5'),
    ...solved('s12', 'A', '147 kPa (Option A)', 187, 188),
  },

  // ── Item 62 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q62',
    number: 62,
    pageNumber: 170,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Permeability — Constant-Head Test',
    text: 'The results of a constant-head permeability test for a fine sand sample having a diameter of 150 mm and a length of 300 mm are as follows:\n\n| Quantity | Value |\n| :--- | :--- |\n| Constant head difference | 500 mm |\n| Time of collection of water | 5 min |\n| Volume of water collected | 360 cm³ |\n\nCalculate the hydraulic conductivity of the soil in cm/s.',
    options: opts('4.07 × 10⁻³', '3.54 × 10⁻³', '4.25 × 10⁻³', '2.89 × 10⁻³'),
    ...solved('i62', 'A', '4.07 × 10⁻³ cm/s (Option A)', 188),
  },

  // ── Item 63 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q63',
    number: 63,
    pageNumber: 170,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 13 — Flow Through a Confined Aquifer',
    text: 'Situation 13 – A confined aquifer is shown in the figure. This aquifer has a source of recharge located as shown. The hydraulic conductivity of the aquifer is 40 m/day with a porosity of 25%. The piezometric (head) surface in the two observation wells 1325 m apart are at elevation 65 m and 60 m, respectively from the common datum. The aquifer has an average thickness of 25 m and an average width of 4 km.\n\n63. Determine the nearest value to the rate of flow of water through the aquifer, in cubic meters per day.',
    figureSvg: hpgeNov2015Figure(
      's13',
      'Figure for Situation 13: a recharge area on the left feeds a dipping confined aquifer 25 m thick; two observation wells stand 1325 m apart with water levels at El. 65 m and El. 60 m, and the flow runs to the right.',
    ),
    figureCaption:
      'Figure 13: Confined aquifer 25 m thick recharged on the left, with two observation wells 1325 m apart at El. 65 m and El. 60 m.',
    options: opts('13,210', '16,980', '11,320', '15,090'),
    ...solved('s13', 'D', '15,090 m³/day (Option D)', 188, 189),
  },

  // ── Item 64 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q64',
    number: 64,
    pageNumber: 170,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 13 — Seepage Velocity',
    text: 'Situation 13 (continued) – Determine the nearest value to the seepage velocity in m/day.',
    options: opts('0.528', '0.453', '0.679', '0.604'),
    ...solved('s13', 'D', '0.604 m/day (Option D)', 188, 189),
  },

  // ── Item 65 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q65',
    number: 65,
    pageNumber: 170,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 13 — Time of Travel',
    text: 'Situation 13 (continued) – Determine the nearest value to the time of travel from the head of aquifer to a point 4 km downstream, in days.',
    options: opts('7,570', '8,830', '6,625', '5,890'),
    ...solved('s13', 'C', '6,625 days (Option C)', 188, 189),
  },

  // ── Item 66 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q66',
    number: 66,
    pageNumber: 171,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Shear Strength — Unconfined Compression Test',
    text: 'In an unconfined compression test, a sample of sandy clay 50 mm in diameter fails under a load of 120 N. What is the cohesion of the soil if the sample fails at 15% strain?',
    options: opts('28', '25', '26', '27'),
    ...solved('i66', 'C', '26 kPa (Option C)', 189),
  },

  // ── Item 67 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q67',
    number: 67,
    pageNumber: 171,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 14 — Angle of Shearing Resistance',
    text: 'Situation 14 – The normal and shearing stresses at failure plane in a triaxial test of a normally consolidated clay are $\\sigma_n = 50$ kPa and $\\tau_n = 30$ kPa. Determine the following:\n\n67. The angle of shearing resistance, $\\phi$ in degrees.',
    options: opts('29.6', '31', '37', '26.6'),
    ...solved('s14', 'B', '31° (Option B)', 189, 190),
  },

  // ── Item 68 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q68',
    number: 68,
    pageNumber: 171,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 14 — Angle of the Failure Plane',
    text: 'Situation 14 (continued) – The angle of failure plane in degrees.',
    options: opts('60.5', '63', '59.3', '33.5'),
    ...solved('s14', 'A', '60.5° (Option A)', 189, 190),
  },

  // ── Item 69 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q69',
    number: 69,
    pageNumber: 171,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 14 — Major Principal Stress',
    text: 'Situation 14 (continued) – The major principal stress in kPa.',
    options: opts('103', '100', '108.5', '105.5'),
    ...solved('s14', 'A', '103 kPa (Option A)', 189, 190),
  },

  // ── Item 70 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q70',
    number: 70,
    pageNumber: 171,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Shear Strength — Triaxial Test on Cohesionless Soil',
    text: 'A cohesionless soil sample is subjected to an axial stress with a liquid pressure of 15 kPa in the chamber. It was observed that shear failure occurs when the axial compressive stress is 34 kPa. Calculate the angle of shearing resistance $\\phi$.',
    options: opts('20.68°', '29.06°', '16.32°', '19.47°'),
    ...solved('i70', 'B', '29.06° (Option B)', 190),
  },

  // ── Item 71 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q71',
    number: 71,
    pageNumber: 171,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 15 — Bearing Capacity, Water Table Far Below',
    text: 'Situation 15 – A square footing 2 m × 2 m is located at a depth of 1.2 meters below the ground surface. The soil properties are cohesion, $c = 10$ kPa, $\\phi = 15°$, $\\gamma = 16.7\\ \\text{kN/m}^3$, and $\\gamma_{sat} = 20\\ \\text{kN/m}^3$.\n\nUse Terzaghi’s bearing capacity equation $q_u = 1.3 c N_c + \\gamma D_f N_q + 0.4 \\gamma B N_\\gamma$, with $N_c = 12.9$, $N_q = 4.4$ and $N_\\gamma = 2.5$.\n\nFind $q_u$ under the following conditions:\n\n71. When the water table is way below the bottom of footing.',
    options: opts('294 kPa', '289 kPa', '276 kPa', '242 kPa'),
    ...solved('s15', 'B', '289 kPa (Option B)', 190, 191),
  },

  // ── Item 72 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q72',
    number: 72,
    pageNumber: 171,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 15 — Bearing Capacity, Water Table at Footing Base',
    text: 'Situation 15 (continued) – When the water table is at the bottom of footing.',
    options: opts('276 kPa', '242 kPa', '289 kPa', '294 kPa'),
    ...solved('s15', 'A', '276 kPa (Option A)', 190, 191),
  },

  // ── Item 73 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2015-q73',
    number: 73,
    pageNumber: 171,
    subject: 'HPGE',
    year: 2015,
    month: 'November',
    category: 'Situation 15 — Bearing Capacity, Water Table at Ground Surface',
    text: 'Situation 15 (continued) – When the water table is at the ground surface.',
    options: opts('276 kPa', '289 kPa', '294 kPa', '242 kPa'),
    ...solved('s15', 'D', '242 kPa (Option D)', 190, 191),
  },
];
