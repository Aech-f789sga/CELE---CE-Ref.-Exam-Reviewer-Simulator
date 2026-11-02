import { Question } from '../../../types/exam';
import { psadNov2015Figure } from '../../psadNov2015Images';
import { solved, opts } from './nov2015Helpers';

export const PSAD_NOV2015_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q1',
    number: 1,
    pageNumber: 194,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Moving Loads — Maximum Reaction',
    text: 'A 10-m long beam is simply supported at the left end and at 2 m from the right end. The beam is subjected to a uniform moving load. What is the maximum length of the moving load to cause maximum reaction at the right support?',
    options: opts('10 m', '8 m', '6 m', '4 m'),
    ...solved(1, 'A', '10 m (Option A)', 213),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q2',
    number: 2,
    pageNumber: 194,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 1 — Crane Reaction',
    text: 'Situation 1 – A crane supports the load W as shown.\n\n2. If W = 24 kN, find the total reaction at B neglecting the weight of the boom.',
    figureSvg: psadNov2015Figure(
      'fig01_crane',
      'Situation 1: a boom BC rises from a foot at B to a point C, guyed by a cable AC running down to A; the horizontal distances are 8 m from A to B and 4 m from B to the load W, and C stands 9 m above the base line.',
    ),
    options: opts('35.6 kN', '42.5 kN', '39.4 kN', '53.4 kN'),
    ...solved(2, 'C', '39.4 kN (Option C)', 213),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q3',
    number: 3,
    pageNumber: 194,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 1 — Limiting Cable Tension',
    text: 'Situation 1 (continued) – If the allowable tension of cable AC is 48 kN, find the maximum value of W. Neglect the weight of boom.',
    options: opts('48.7 kN', '40.3 kN', '52.8 kN', '57.6 kN'),
    ...solved(3, 'D', '57.6 kN (Option D)', 213),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q4',
    number: 4,
    pageNumber: 194,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 1 — Boom Weight Included',
    text: 'Situation 1 (continued) – If the boom (mast) weighs 8 kN and the allowable tension of the cable AC is 50 kN, find the maximum value of W.',
    options: opts('63 kN', '68 kN', '56 kN', '74 kN'),
    ...solved(4, 'C', '56 kN (Option C)', 214),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q5',
    number: 5,
    pageNumber: 194,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 2 — Truss Reaction',
    text: 'Situation 2 – For the truss shown in Figure AN36-2058, P₁ = 13 kN and P₂ = 6.5 kN.\n\n5. Find the reaction at B in kN.',
    figureSvg: psadNov2015Figure(
      'fig02_truss',
      'Figure AN36-2058: a pitched roof truss spanning 10.5 m in seven equal panels, with loads P₁ at successive panel points on the left rafter, P₂ at the right rafter end, and a horizontal H at the apex; the truss is 3 m high at the ridge.',
    ),
    options: opts('14.53', '31.65', '16.32', '25.14'),
    ...solved(5, 'A', '14.53 kN (Option A)', 214),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q6',
    number: 6,
    pageNumber: 194,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 2 — Reaction with Added Load',
    text: 'Situation 2 (continued) – If an additional vertical load of W = 27.5 kN is applied at D, find the reaction at B in kN.',
    options: opts('32.65', '28.28', '20.36', '35.85'),
    ...solved(6, 'B', '28.28 kN (Option B)', 214),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q7',
    number: 7,
    pageNumber: 194,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 2 — Member Force',
    text: 'Situation 2 (continued) – If an additional vertical load of W = 27.5 kN is applied at D, what will be the axial force in member CD in kN?',
    options: opts('22.5', '29.6', '25.7', '27.5'),
    ...solved(7, 'D', '27.5 kN (Option D)', 214),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q8',
    number: 8,
    pageNumber: 195,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 3 — Cable-Braced Truss',
    text: 'Situation 3 – For the plane truss shown, P₁ = 1.5 kN, P₂ = 0 kN, P₃ = 0 kN and H₁ = 1 kN. The diagonal members CF, BG, DG and CH are cables.\n\n8. What is the force (N) in member EH?',
    figureSvg: psadNov2015Figure(
      'fig03_truss',
      'Situation 3: a parallel-chord truss with bottom joints A, B, C, D, E and top joints F, G, H; the bottom chord runs 3 m + 3 m + 2.25 m + 2.25 m, the truss is 3 m deep, and the four diagonals CF, BG, DG and CH are marked as cables.',
    ),
    options: opts('1,250T', '1,500C', '900T', '1000C'),
    ...solved(8, 'A', '1,250 N tension (Option A)', 215),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q9',
    number: 9,
    pageNumber: 195,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 3 — Member Force',
    text: 'Situation 3 (continued) – What is the force (N) in member GD?',
    options: opts('1,250', '1000', '1,500', '0'),
    ...solved(9, 'A', '1,250 N (Option A)', 215),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q10',
    number: 10,
    pageNumber: 195,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 3 — Member Force',
    text: 'Situation 3 (continued) – What is the force (N) in member FG?',
    options: opts('700C', '1000T', '600C', '500T'),
    ...solved(10, 'D', '500 N tension (Option D)', 216),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q11',
    number: 11,
    pageNumber: 195,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 4 — Same Truss, Member AB',
    text: 'Situation 4 – For the plane truss shown in Figure TS63-0251, P₁ = 1.5 kN, P₂ = 0 kN, P₃ = 0 kN and H₁ = 1 kN. The diagonal members CF, BG, DG and CH are cables.\n\n11. What is the force (N) in member AB?',
    figureSvg: psadNov2015Figure(
      'fig04_truss',
      'Figure TS63-0251: the same parallel-chord truss as Situation 3 — bottom joints A to E at 3 m, 3 m, 2.25 m and 2.25 m spacing, top joints F, G, H, 3 m deep, with cables CF, BG, DG and CH.',
    ),
    options: opts('1,250T', '1,500C', '1,000C', '750T'),
    ...solved(11, 'B', '1,500 N compression (Option B)', 216),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q12',
    number: 12,
    pageNumber: 196,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 4 — Member BG',
    text: 'Situation 4 (continued) – What is the force (N) in member BG?',
    options: opts('1,250 N', '1,000 N', '0', '750 N'),
    ...solved(12, 'C', '0 (Option C)', 216),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q13',
    number: 13,
    pageNumber: 196,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 4 — Member BC',
    text: 'Situation 4 (continued) – What is the force (N) in member BC?',
    options: opts('1,000C', '1,100T', '1,250T', '1,500C'),
    ...solved(13, 'D', '1,500 N compression (Option D)', 216),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q14',
    number: 14,
    pageNumber: 196,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 5 — Eyebar Under Normal Stress',
    text: 'Situation 5 – The eyebar AC shown in Figure ME63-2501 has an outside and inside dimension of 76 mm × 38 mm and a uniform thickness of 6 mm. Length L = 1.50 m, E = 200 GPa, θ = 30°.\n\n14. Calculate the maximum load W without exceeding a normal stress in AC of 24 MPa.',
    figureSvg: psadNov2015Figure(
      'fig05_eyebar',
      'Figure ME63-2501: an eyebar AC pinned at C and carrying a load W at its lower end A; a horizontal member BC of length L runs from a pin at B to A, and the eyebar makes an angle θ with the horizontal.',
    ),
    options: opts('16.87 kN', '10.36 kN', '14.69 kN', '12.35 kN'),
    ...solved(14, 'C', '14.69 kN (Option C)', 216, 217),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q15',
    number: 15,
    pageNumber: 196,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 5 — Eyebar Strain Limit',
    text: 'Situation 5 (continued) – Calculate the maximum load W without exceeding a normal strain in AC of 0.0002 mm/mm.',
    options: opts('28.65 kN', '24.48 kN', '20.12 kN', '16.25 kN'),
    ...solved(15, 'B', '24.48 kN (Option B)', 217),
  },
];
