import { Question } from '../../../types/exam';
import { solved, opts } from './nov2016Helpers';

/**
 * HPGE November 2016, items 14–26.
 *
 * Closes the buoyancy run and Situation 3 (items 15–17, the floating block of
 * wood), then turns to relative equilibrium of liquids: the swung bucket, the
 * rotating vessel (Situation 4, items 20–22) and the orifice discharge from a
 * tank that is first at rest and then accelerating upward (Situation 5, items
 * 23–25). Item 26 opens Situation 6, the three parallel pipes.
 */
export const HPGE_NOV2016_PART2: Question[] = [
  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q14',
    number: 14,
    pageNumber: 379,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Buoyancy — Forced Submergence of a Cube',
    text: 'A cubical block 0.3 m on each side has a specific gravity of 2.35. What downward force (in N) is required to keep the block in equilibrium if it is completely submerged in a liquid whose specific gravity is 4.7?',
    options: opts('521', '864', '758', '623'),
    ...solved(14, 'D', '$623\\text{ N}$ (Option D)', 387),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q15',
    number: 15,
    pageNumber: 379,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 3 — Specific Gravity of the Wood',
    text: 'Situation 3 – A block of wood with length "h" and cross-sectional area "A" is submerged in water with 50 mm exposed above the water surface. When submerged in a liquid with specific gravity of 1.35, it will float with 75 mm exposed above the liquid surface.\n\nObtain the specific gravity of the wood.',
    options: opts('0.752', '0.956', '0.524', '0.659'),
    ...solved(15, 'D', '0.659 (Option D)', 388),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q16',
    number: 16,
    pageNumber: 379,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 3 — Length of the Block of Wood',
    text: 'Situation 3 – A block of wood with length "h" and cross-sectional area "A" is submerged in water with 50 mm exposed above the water surface. When submerged in a liquid with specific gravity of 1.35, it will float with 75 mm exposed above the liquid surface.\n\nObtain the length of the wood in mm.',
    options: opts('163.2', '124.8', '132.1', '146.4'),
    ...solved(16, 'D', '$146.4\\text{ mm}$ (Option D)', 388),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q17',
    number: 17,
    pageNumber: 379,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 3 — Exposure in a Lighter Liquid',
    text: 'Situation 3 – A block of wood with length "h" and cross-sectional area "A" is submerged in water with 50 mm exposed above the water surface. When submerged in a liquid with specific gravity of 1.35, it will float with 75 mm exposed above the liquid surface.\n\nIf the wood is submerged vertically in a liquid with specific gravity of 1.03, obtain the length of wood exposed above the surface in mm.',
    options: opts('62.1', '48.2', '52.8', '58.9'),
    ...solved(17, 'C', '$52.8\\text{ mm}$ (Option C)', 389),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q18',
    number: 18,
    pageNumber: 380,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Relative Equilibrium — Bucket Swung in a Vertical Circle',
    text: 'A bucket 200 mm in diameter and 300 mm in height is 2/3 full of water. It is swung on a vertical plane such that its bottom of the bucket describes a circle of radius of 1 m. Determine the speed of rotation (in rpm) such that no water is spilled.',
    options: opts('31.5', '18.4', '25.6', '38.5'),
    ...solved(18, 'A', '$31.5\\text{ rpm}$ (Option A)', 389),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q19',
    number: 19,
    pageNumber: 380,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Relative Equilibrium — Smallest Vessel That Will Not Spill',
    text: 'An open cylindrical vessel having a height equal to its diameter is half-filled with water and rotated about its vertical axis at constant speed of 120 rpm. Obtain the minimum diameter of the vessel to avoid spillage.',
    options: opts('0.652 m', '0.497 m', '0.561 m', '0.371 m'),
    ...solved(19, 'B', '$0.497\\text{ m}$ (Option B)', 390),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q20',
    number: 20,
    pageNumber: 380,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 4 — Depth of the Vertex of the Paraboloid',
    text: 'Situation 4 – An open cylindrical container, 2 m in diameter and 4 m high is one-half full of water and rotated at 60 rpm about its own axis.\n\nEvaluate the depth of water at the center of the container in meters.',
    options: opts('1.254', '1.987', '1.523', '0.994'),
    ...solved(20, 'D', '$0.994\\text{ m}$ (Option D)', 390),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q21',
    number: 21,
    pageNumber: 380,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 4 — Pressure at the Base Perimeter',
    text: 'Situation 4 – An open cylindrical container, 2 m in diameter and 4 m high is one-half full of water and rotated at 60 rpm about its own axis.\n\nObtain the pressure at the base perimeter of the container in kPa.',
    options: opts('9.75', '15.63', '22.58', '29.49'),
    ...solved(21, 'D', '$29.49\\text{ kPa}$ (Option D)', 391),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q22',
    number: 22,
    pageNumber: 380,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 4 — Volume of the Paraboloid',
    text: 'Situation 4 – An open cylindrical container, 2 m in diameter and 4 m high is one-half full of water and rotated at 60 rpm about its own axis.\n\nObtain the volume of the paraboloid formed in the container in $\\text{m}^3$.',
    options: opts('3.162', '1.581', '2.568', '3.654'),
    ...solved(22, 'A', '$3.162\\ \\text{m}^3$ (Option A)', 391),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q23',
    number: 23,
    pageNumber: 380,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 5 — Theoretical Discharge from an Orifice',
    text: 'Situation 5 – Water is discharging from a cylindrical tank through a 40-mm-diameter orifice located 5 m below the water surface.\n\nObtain the theoretical discharge in $\\text{m}^3/\\text{s}$.',
    options: opts('0.0158', '0.0214', '0.0142', '0.0124'),
    ...solved(23, 'D', '$0.0124\\ \\text{m}^3/\\text{s}$ (Option D)', 391),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q24',
    number: 24,
    pageNumber: 380,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 5 — Actual Discharge with Cc and Cv',
    text: 'Situation 5 – Water is discharging from a cylindrical tank through a 40-mm-diameter orifice located 5 m below the water surface.\n\nRefer from the first question, what is the discharge given that $C_c = 0.65$ and $C_v = 0.95$.',
    options: opts('0.0077', '0.0081', '0.0120', '0.0092'),
    ...solved(24, 'A', '$0.0077\\ \\text{m}^3/\\text{s}$ (Option A)', 391),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q25',
    number: 25,
    pageNumber: 380,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 5 — Discharge from an Accelerating Tank',
    text: 'Situation 5 – Water is discharging from a cylindrical tank through a 40-mm-diameter orifice located 5 m below the water surface.\n\nWhat is the theoretical discharge (in $\\text{m}^3/\\text{s}$) if the tank is moving upward with an acceleration of one-half the acceleration due to gravity?',
    options: opts('0.0152', '0.0217', '0.0196', '0.0132'),
    ...solved(25, 'A', '$0.0152\\ \\text{m}^3/\\text{s}$ (Option A)', 392),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'hpge-nov2016-q26',
    number: 26,
    pageNumber: 381,
    subject: 'HPGE',
    year: 2016,
    month: 'November',
    category: 'Situation 6 — Flow in Pipe 1',
    text: 'Situation 6 – Given the following data for three pipes in parallel:\n\nPipe 1: $D_1 = 450\\text{ mm}$, $L_1 = 800\\text{ m}$\nPipe 2: $D_2 = 400\\text{ mm}$, $L_2 = 700\\text{ m}$\nPipe 3: $D_3 = 500\\text{ mm}$, $L_3 = 600\\text{ m}$\n\nThe total flow is $0.86\\ \\text{m}^3/\\text{s}$. Assuming $f = 0.02$ for all pipes, evaluate the following:\n\nThe flow in pipe 1 in $\\text{m}^3/\\text{s}$.',
    options: opts('0.208', '0.261', '0.392', '0.356'),
    ...solved(26, 'B', '$0.261\\ \\text{m}^3/\\text{s}$ (Option B)', 392),
  },
];
