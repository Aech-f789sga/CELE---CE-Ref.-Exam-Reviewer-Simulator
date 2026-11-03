import { Question } from '../../../types/exam';
import { solved, recall, opts } from './nov2017Helpers';
import { psadNov2017Figure } from '../../psadNov2017Images';

/**
 * Situations 19-24, items 55-72.
 *
 * Situation 24 closes the paper with three recall questions that the booklet
 * keys but never works, so items 70-72 use {@link recall} rather than
 * {@link solved}.
 */

const SIT19 =
  'Situation 19 – To construct the deck of a bridge over a deep ravine, steel beams spaced at 2.4 m on centers and simply supported on a span of 25 m, are used to support the construction loads which include temporary formwork and construction live loads equivalent to 4000 Pa. At this stage, only the steel beam carries the loads. After the slab has hardened, sufficient shear connectors welded to the beam flanges provide full composite action of the steel beam with 0.15 m thick cast-in-place concrete slab. Given: Concrete, f′c = 20.7 MPa; Concrete unit weight = 24 kN/m³; Steel strength F_y = 345 MPa; Modular ratio, n = 9. Properties of W 685 mm × 152 kg/m: A = 19355 mm²; d = 688 mm; t_w = 13 mm; b_f = 250 mm; t_f = 21 mm; I_x = 15 × 10⁸ mm⁴; I_y = 0.58 × 10⁸ mm⁴. For composite action, use 1.8 m effective flange width. Composite moment of inertia with concrete transformed to steel = 36.2 × 10⁸ mm⁴. Neutral axis of composite section from top of concrete = 239 mm. Superimposed dead load: Wearing surface = 900 Pascals. Live load: Standard truck load (H load) consisting of 17.8 kN front wheel load and 71.2 kN rear wheel load. Distance between when loads is 4.27 m. Include 24% impact on live load.';

const SIT20 =
  'Situation 20 – Light-grade channel is used as a purlin of a truss. Given the following data: Properties channel section: S_x = 4.52 × 10⁴ mm³; S_y = 0.98 × 10⁴ mm³. Simple span = 6 m; Spacing of purlins = 0.90 m with two sag rods @ 2 m; Angle of inclination of truss = 35°. Loads: Roof loads (applied at centroid of purlin): Dead load = 750 Pa (including weight of purlin); Live load = 1000 Pa. Wind pressure = 1440 Pa; Wind pressure coefficient at windward side = 0.24 (pressure); Wind pressure coefficient at leeward side = 0.52 (suction). Assume that all loads pass through the centroid of the channel section.';

const SIT21 =
  'Situation 21 – Refer to the floor framing plan shown in the figure: Given: Beam dimensions, b × h = 250 mm × 400 mm; Slab thickness, t = 100 mm; Concrete cover to centroid of reinforcement = 75 mm; L₁ = L₂ = 5.3 m; S = 2.6 m. Loadings: Dead load = 2.6 kPa (not including slab weight); Live load = 3.6 kPa; Load combination, U = 1.4D + 1.7L. Unit weight of concrete = 23.6 kN/m³. Concrete strength, f′c = 27 MPa; Steel strength, f_y = 415 MPa. Use FIGURE CODE-523.';

const SIT22 =
  'Situation 22 – Given the following data of a circular spiral column: Concrete strength f′c = 34 MPa; Steel yield strength, f_y = 413 MPa; Steel ratio = 2.5%; Nominal strength = 4500 kN; Spiral bar diameter = 10 mm; Clear concrete cover = 40 mm.';

const SIT23 =
  'Situation 23 – Refer to the tied column shown: Given: Dimension, B × H: 400 mm × 450 mm; Length of column, L = 2.5 m; Clear concrete cover: 50 mm; Main bars: 8 – 25 mm diameter; Tie diameter: 10 mm; Concrete strength, f′c = 27.5 MPa; Steel strength, f_y = 414 MPa; Modulus of elasticity = 25,000 MPa; Effective length factor, K = 1.0.';

const SIT24 = 'Situation 24 – Answer the following questions:';

export const PSAD_NOV2017_PART4: Question[] = [
  // ── Item 55 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q55',
    number: 55,
    pageNumber: 628,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Composite Beam Stresses',
    text: `${SIT19}\n\nDetermine the maximum compressive stress (MPa) in the beam due to live load.`,
    options: opts('17.4', '15.8', '19.6', '22.4'),
    ...solved(55, 'B', '15.82 MPa ≈ 15.8 MPa'),
  },

  // ── Item 56 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q56',
    number: 56,
    pageNumber: 628,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Composite Beam Stresses',
    text: `${SIT19}\n\nDetermine the maximum tensile stress (MPa) in the beam due to live load.`,
    options: opts('96.3', '87.5', '106.5', '101.4'),
    ...solved(56, 'C', '106.5 MPa'),
  },

  // ── Item 57 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q57',
    number: 57,
    pageNumber: 628,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Composite Beam Stresses',
    text: `${SIT19}\n\nDetermine the maximum compressive stress (MPa) in concrete due to live load.`,
    options: opts('5.65', '6.98', '3.25', '4.72'),
    ...solved(57, 'D', '4.72 MPa'),
  },

  // ── Item 58 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q58',
    number: 58,
    pageNumber: 629,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Purlin Bending',
    text: `${SIT20}\n\nFind the bending stress, f_bx, (MPa) due to dead and live load.`,
    options: opts('128.4', '114.2', '85.4', '138.4'),
    ...solved(58, 'B', '114.17 MPa ≈ 114.2 MPa'),
  },

  // ── Item 59 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q59',
    number: 59,
    pageNumber: 629,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Purlin Bending',
    text: `${SIT20}\n\nFind the bending stress, f_by, (MPa) due to dead and live load.`,
    options: opts('36.9', '103.7', '76.3', '414.8'),
    ...solved(59, 'A', '36.873 MPa ≈ 36.9 MPa'),
  },

  // ── Item 60 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q60',
    number: 60,
    pageNumber: 629,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Steel Design — Purlin Interaction',
    text: `${SIT20}\n\nFind the interaction value for 0.75(W + D + L) at the windward side if F_bx = F_by = 207 MPa.`,
    options: opts('0.33', '2.08', '0.65', '0.95'),
    ...solved(60, 'C', '0.647 ≈ 0.65'),
  },

  // ── Item 61 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q61',
    number: 61,
    pageNumber: 629,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Continuous Beam Reinforcement',
    text: `${SIT21}\n\nWhat is the minimum required number of 25-mm bars at end H of beam GH?`,
    figureSvg:
      psadNov2017Figure(
        'fig_s21_plan',
        'Floor framing plan with beams A to L, dimensions L1, L2 and S, and section a-a of the T-beam',
      ) +
      psadNov2017Figure(
        'fig_code_523a',
        'Figure CODE-523: NSCP coefficients for positive and negative moments of continuous beams',
      ) +
      psadNov2017Figure(
        'fig_code_523b',
        'Figure CODE-523 continued: NSCP shear coefficients at supports',
      ),
    options: opts('4', '5', '2', '3'),
    ...solved(61, 'C', '2 bars', 'The arithmetic gives N = 878/491 = 1.8, which the booklet rounds up to 2 bars.'),
  },

  // ── Item 62 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q62',
    number: 62,
    pageNumber: 629,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Continuous Beam Reinforcement',
    text: `${SIT21}\n\nWhat is the shear force at end H of beam GH?`,
    options: opts('102.9', '116.3', '78.4', '98.6'),
    ...solved(62, 'D', '98.63 kN ≈ 98.6 kN'),
  },

  // ── Item 63 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q63',
    number: 63,
    pageNumber: 629,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Continuous Beam Reinforcement',
    text: `${SIT21}\n\nIf end H is reinforced with 3-25 mm dia. top and bottom bars, what is its moment capacity in kN·m?`,
    options: opts('152', '140', '124', '168'),
    ...solved(63, 'A', 'φM_n = 0.90(168.9) = 152 kN·m'),
  },

  // ── Item 64 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q64',
    number: 64,
    pageNumber: 631,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Circular Spiral Column',
    text: `${SIT22}\n\nDetermine the minimum required column diameter in mm.`,
    options: opts('410', '430', '400', '420'),
    ...solved(64, 'D', '418 mm ≈ 420 mm'),
  },

  // ── Item 65 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q65',
    number: 65,
    pageNumber: 631,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Circular Spiral Column',
    text: `${SIT22}\n\nIf the column diameter is 600 mm and is reinforced with six 28-mm-diameter bars, compute the design axial strength (kN) of the column. Use φ = 0.75.`,
    options: opts('5824', '8151', '6113', '6325'),
    ...solved(65, 'C', 'φP_n = 6113.9 kN ≈ 6113 kN'),
  },

  // ── Item 66 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q66',
    number: 66,
    pageNumber: 631,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Circular Spiral Column',
    text: `${SIT22}\n\nWhat is the minimum pitch of spiral (mm) according to the provisions of NSCP?`,
    options: opts('35', '50', '80', '65'),
    ...solved(66, 'A', '35 mm'),
  },

  // ── Item 67 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q67',
    number: 67,
    pageNumber: 632,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Tied Column',
    text: `${SIT23}\n\nCompute the nominal axial strength (kN) of the column.`,
    figureSvg: psadNov2017Figure(
      'fig_s23_col',
      'Tied column section with B, H and eight main bars, and column elevation with Pu, Mu and Vu',
    ),
    options: opts('3,210', '6,550', '4,590', '5,240'),
    ...solved(67, 'C', '4,593 kN ≈ 4,590 kN'),
  },

  // ── Item 68 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q68',
    number: 68,
    pageNumber: 632,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Tied Column',
    text: `${SIT23}\n\nDetermine the critical axial load (kN) to prevent buckling.`,
    options: opts('42,635', '28,745', '66,323', '54,859'),
    ...solved(68, 'C', '66,323 kN'),
  },

  // ── Item 69 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q69',
    number: 69,
    pageNumber: 632,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'RC Design — Tied Column Shear',
    text: `${SIT23}\n\nCompute the nominal shear strength for bending about the y-direction if the ties are spaced at 100 mm. Use f_yh = 275 MPa. Allowable shear stress of concrete is 1.95 MPa.`,
    options: opts('539', '287', '212', '499'),
    ...solved(
      69,
      'A',
      'V_nx = V_c + V_s = 539 kN',
      'The stem asks for the nominal shear strength yet gives the allowable shear stress of concrete; the booklet adds the concrete and tie contributions, V_c + V_s = 294.45 + 244.58 = 539 kN.',
    ),
  },

  // ── Item 70 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q70',
    number: 70,
    pageNumber: 632,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Code — Seismic Provisions',
    text: `${SIT24}\n\nWhat will develop if the center of mass and center of rigidity of a structure does not coincide?`,
    options: opts(
      'in-plane offset',
      'flexural stress',
      'out-of-plane offset',
      'torsional shear stress',
    ),
    ...recall(
      'D',
      'torsional shear stress',
      'Situation 24 is a set of recall questions; the booklet keys them but prints no working.',
    ),
  },

  // ── Item 71 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q71',
    number: 71,
    pageNumber: 632,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Code — Seismic Provisions',
    text: `${SIT24}\n\nA building which has a floor which is less than 70% as stiff as the floor immediately above it, or less than 80% as stiff as the average stiffness of the three floors above it.`,
    options: opts('soft storey', 'hard storey', 'shear wall', 'bearing walls'),
    ...recall(
      'A',
      'soft storey',
      'Situation 24 is a set of recall questions; the booklet keys them but prints no working.',
    ),
  },

  // ── Item 72 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2017-q72',
    number: 72,
    pageNumber: 632,
    subject: 'PSAD',
    year: 2017,
    month: 'November',
    category: 'Code — Seismic Provisions',
    text: `${SIT24}\n\nRefers to the lateral displacement of one level relative to the other level above or below.`,
    options: opts(
      'storey drift',
      'deflection',
      'storey displacement',
      'accidental eccentricity',
    ),
    ...recall(
      'A',
      'storey drift',
      'Situation 24 is a set of recall questions; the booklet keys them but prints no working.',
    ),
  },
];
