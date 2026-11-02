import { Question } from '../../../types/exam';
import { psadNov2015Figure } from '../../psadNov2015Images';
import { solved, opts } from './nov2015Helpers';

export const PSAD_NOV2015_PART5: Question[] = [
  // ── Item 61 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q61',
    number: 61,
    pageNumber: 205,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 20 — Plate-Reinforced Beam Width',
    text: 'Situation 20 (continued) – If the beam is reinforced with 16-mm-thick plate at the top and bottom, find the required width of plate if P = 278 kN.',
    options: opts('180 mm', '160 mm', '200 mm', '220 mm'),
    ...solved(61, 'C', '200 mm (Option C)', 230),
  },

  // ── Item 62 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q62',
    number: 62,
    pageNumber: 205,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 21 — Purlin Spacing under Dead plus Live Load',
    text: 'Situation 21 – Light-grade channel C200 × 76 is used as a purlin of a truss whose top chord is sloped at 4H to 1V. The trusses are spaced at 6 m. The total roof dead load is 720 Pa and live load is 1000 Pa. Wind pressure is 1.44 kPa and the wind pressure coefficients at windward and leeward sides are 0.60 and 0.20, respectively.\n\nProperties of C200 × 76:\nSx = 6.19 × 10⁴ mm³\nSy = 1.38 × 10⁴ mm³\nWeight = 79 N/m\n\nAllowable stresses:\nFbx = Fby = 148 MPa\n\nIf wind loads are included in the design, the allowable bending stress is increased by 1/3.\n\n62. Find the maximum spacing of purlins (in mm) due to dead load plus live load only.',
    options: opts('650', '710', '520', '560'),
    ...solved(
      62,
      'C',
      '520 mm (Option C)',
      230,
      231,
      'Booklet misprint: the interaction equation closes with $s = 0.529$ m = 529 mm, a value that is in none of the four choices. Option C prints 520 — the 9 and the 0 are transposed. The key marks C and the printed option is reproduced as issued.',
    ),
  },

  // ── Item 63 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q63',
    number: 63,
    pageNumber: 205,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 21 — Purlin Spacing under Dead plus Live plus Leeward Wind',
    text: 'Situation 21 (continued) – Find the maximum spacing of purlins (in mm) due to dead load plus live load plus wind load on the leeward side.',
    options: opts('660', '600', '750', '700'),
    ...solved(63, 'A', '660 mm (Option A)', 231),
  },

  // ── Item 64 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q64',
    number: 64,
    pageNumber: 205,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 21 — Purlin Spacing under Dead plus Live plus Windward Wind',
    text: 'Situation 21 (continued) – Find the maximum spacing of purlins (in mm) due to dead load plus live load plus wind load on the windward side.',
    options: opts('610', '670', '710', '570'),
    ...solved(64, 'D', '570 mm (Option D)', 232),
  },

  // ── Item 65 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q65',
    number: 65,
    pageNumber: 206,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 22 — Factored Uniform Load on Beam GH',
    text: 'Situation 22 – The floor framing plan shown in the figure carries service dead load of 4.8 kPa (including slab and beam weight) and service live load of 2.9 kPa. Loads are computed using the tributary area method. Use FIGURE CODE-523.\n\nL₁ = L₂ = 8 m\nS = 3 m\nSlab thickness = 100 mm\nBeam dimension, b × h = 300 mm × 400 mm\nColumn dimension = 400 mm × 400 mm\n\nConcrete strength, f\'c = 20.7 MPa\nSteel yield strength, fy = 415 MPa\n\nU = 1.4D + 1.7L\n\n65. Calculate the factored uniform load on beam GH in kN/m.',
    figureSvg: psadNov2015Figure(
      'fig22_plan',
      'Figure CODE-523: a floor framing plan on a three-by-three grid A-B-C, D-E-F, G-H-I, J-K-L, with span L₁ between the A and B column lines, span L₂ between the B and C column lines, and three equal s spacings down the A-D-G-J column line. Below the plan is a T-beam section of flange thickness t, overall depth h and web width b.',
    ),
    options: opts('34.95', '36.66', '32.15', '39.54'),
    ...solved(
      65,
      'A',
      '34.95 kN/m (Option A)',
      233,
      233,
      'Booklet misprint: the working writes $w_u = p_u \\times S = 11.65(3) = 34.95$ kPa, but a load per unit length of beam cannot be a pressure — the 3 m is the tributary width, so the result is 34.95 kN/m. The magnitude is correct and the option is reproduced as issued.',
    ),
  },

  // ── Item 66 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q66',
    number: 66,
    pageNumber: 206,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 22 — Factored Moment of Beam GH at G',
    text: 'Situation 22 (continued) – What is the factored moment of beam GH at G in kN-m?',
    options: opts('168.2', '126.2', '84.1', '132.3'),
    ...solved(66, 'B', '126.2 kN-m (Option B)', 233),
  },

  // ── Item 67 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q67',
    number: 67,
    pageNumber: 206,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 22 — Factored Moment of Beam GH at H',
    text: 'Situation 22 (continued) – What is the factored moment of beam GH at H in kN-m?',
    options: opts('183.5', '201.9', '224.3', '235.3'),
    ...solved(67, 'C', '224.3 kN-m (Option C)', 233),
  },

  // ── Item 68 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q68',
    number: 68,
    pageNumber: 207,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 23 — Positive Moment in Slab CDEF',
    text: 'Situation 23 – The floor framing plan of a concrete structure is shown in the figure. Diameter of slab reinforcement is 10 mm with clear cover of 20 mm. Concrete strength f\'c = 20.7 MPa and steel strength fy = 275 MPa. Use FIGURE CODE-523.\n\nGiven:\nDead load = 4.8 kPa (including weight of slab)\nLive load = 2.9 kPa\nU = 1.4D + 1.7L\n\nSlab thickness, t = 100 mm\nL = 7.5 m; S = 3 m\nb × h = 300 mm × 400 mm\n\n68. Calculate the positive moment in the slab bounded by CDEF, in kN-m.',
    figureSvg: psadNov2015Figure(
      'fig23_slab',
      'Figure CODE-523: a two-way slab panel bounded by corner points A, B, D, C, F, E, with span L across the top, two equal s spacings down the right-hand side, and the 1-m design strip marked. Below the plan is a T-beam section of flange thickness t, overall depth h and web width b.',
    ),
    options: opts('5.3', '7.1', '7.7', '6.1'),
    ...solved(68, 'D', '6.1 kN-m (Option D)', 234),
  },

  // ── Item 69 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q69',
    number: 69,
    pageNumber: 207,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 23 — Slab Reinforcement Spacing at Interior Beam CD',
    text: 'Situation 23 (continued) – Calculate the required spacing (in mm) of slab reinforcement for negative moment at interior beam CD?',
    options: opts('145', '163', '180', '190'),
    ...solved(69, 'A', '145 mm (Option A)', 234),
  },

  // ── Item 70 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q70',
    number: 70,
    pageNumber: 207,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 23 — Maximum Spacing Prescribed by NSCP',
    text: 'Situation 23 (continued) – What is the maximum spacing (in mm) of 10 mm slab reinforcement prescribed by NSCP?',
    options: opts('450', '300', '330', '3800'),
    ...solved(
      70,
      'B',
      '300 mm (Option B)',
      234,
      234,
      'Booklet quirk: option D prints 3800 mm, three orders of magnitude above the other three choices — almost certainly a misprint of 380. The printed option is reproduced as issued. The working applies NSCP §407.7.5 and takes $s_{max} = 3t = 3(100) = 300$ mm, which is option B.',
    ),
  },

  // ── Item 71 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q71',
    number: 71,
    pageNumber: 208,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 24 — Minimum Bar-Group Centroid Distance',
    text: 'Situation 24 – The section of a T-beam is shown in Figure CO96-4502. The beam is reinforced with six 28-mm-diameter tension bars and four 28-mm-diameter compression bars with fy = 415 MPa. The stirrups provided are 10 mm in diameter with fyh = 275 MPa. Clear concrete cover is 40 mm. f\'c = 21 MPa. The nominal shear stress of concrete section is 0.88 MPa.\n\n71. What is the minimum value of "a" according to NSCP?',
    figureSvg: psadNov2015Figure(
      'fig24_tbeam',
      'Figure CO96-4502: T-beam section with a 100 mm thick flange, 500 mm overall depth and 350 mm web width. Four 28 mm bars sit in the flange and six 28 mm bars in two rows at the bottom, with the dimension "a" taken from the soffit to the centroid of the lower bar group.',
    ),
    options: opts('53 mm', '56 mm', '51 mm', '59 mm'),
    ...solved(71, 'A', '53 mm (Option A)', 235),
  },

  // ── Item 72 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q72',
    number: 72,
    pageNumber: 209,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 24 — Shear Strength Provided by Concrete',
    text: 'Situation 24 (continued) – Calculate the nominal shear strength provided by concrete if the effective depth d = 520 mm.',
    options: opts('196 kN', '160 kN', '132 kN', '215 kN'),
    ...solved(
      72,
      'B',
      '160 kN (Option B)',
      235,
      235,
      'Booklet misprint: the stem asks for the nominal shear strength "(MPa)" but all four options are forces in kN. The working gives $V_c = F_{vc} b_w d = 0.88(350)(520) = 160.16$ kN, which is option B — a force, matching the options rather than the stem.',
    ),
  },

  // ── Item 73 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q73',
    number: 73,
    pageNumber: 209,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 24 — Design Shear Strength with 100 mm Stirrups',
    text: 'Situation 24 (continued) – If the stirrups are spaced at 100 mm on centers, calculate the design shear strength of the beam.',
    options: opts('383 kN', '302 kN', '327 kN', '285 kN'),
    ...solved(73, 'C', '327 kN (Option C)', 235, 236),
  },

  // ── Item 74 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q74',
    number: 74,
    pageNumber: 209,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 25 — Nominal Axial Strength of the Column',
    text: 'Situation 25 – The column shown is reinforced with ten 28-mm-diameter longitudinal bars (fy = 415 MPa) and 12-mm-diameter lateral ties (fyh = 275 MPa). Concrete strength f\'c = 28 MPa, clear cover is 40 mm. Allowable shear strength of concrete is 0.88 MPa.\n\n74. Calculate the nominal axial strength of the column.',
    figureSvg: psadNov2015Figure(
      'fig25_column',
      'Column cross-section 600 mm wide by 400 mm deep with 40 mm clear cover and 12 mm closed ties. Ten 28 mm longitudinal bars are distributed round the perimeter; arrows labelled Vnx and Vny show the two orthogonal shear directions.',
    ),
    options: opts('6497 kN', '4548 kN', '5025 kN', '6865 kN'),
    ...solved(74, 'A', '6497 kN (Option A)', 236),
  },

  // ── Item 75 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2015-q75',
    number: 75,
    pageNumber: 209,
    subject: 'PSAD',
    year: 2015,
    month: 'November',
    category: 'Situation 25 — Nominal Shear Strength Vnx',
    text: 'Situation 25 (continued) – If the ties are spaced at 100 mm on centers, calculate the nominal shear strength Vnx of the column.',
    options: opts('498 kN', '686 kN', '533 kN', '416 kN'),
    ...solved(75, 'B', '686 kN (Option B)', 236),
  },
];
