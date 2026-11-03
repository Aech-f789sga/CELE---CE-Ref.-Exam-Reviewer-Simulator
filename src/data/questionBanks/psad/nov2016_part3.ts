import { Question } from '../../../types/exam';
import { psadNov2016Figure } from '../../psadNov2016Images';
import { solved, opts } from './nov2016Helpers';

export const PSAD_NOV2016_PART3: Question[] = [
  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q41',
    number: 41,
    pageNumber: 405,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 12 — Wooden Planks Retaining Soil',
    text: 'Situation 12 (continued)\n\n41. If there is a strut at the mid-height, what pulling force (kN) of the strut will eliminate the deflection at the free end?',
    options: opts('18.7', '8.5', '13.9', '32.6'),
    ...solved(41, 'C', '13.9 kN (Option C)', 430, 431),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q42',
    number: 42,
    pageNumber: 405,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 12 — Wooden Planks Retaining Soil',
    text: 'Situation 12 (continued)\n\n42. Compute the maximum bending (MPa) stress in the cantilevered wood planks.',
    options: opts('15.7', '14.2', '16.5', '13.0'),
    ...solved(42, 'D', '13.0 MPa (Option D)', 431),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q43',
    number: 43,
    pageNumber: 406,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 13 — Channel Purlin on a Sloped Chord',
    text: 'Situation 13 – Light-grade channel is used as a purlin of a truss whose top chord is sloped at 4H to 1V.\n\nProperties channel section:\nSₓ = 6.19 × 10⁴ mm³, S_y = 1.38 × 10⁴ mm³\nWeight = 76 N/m\n\nSimple span = 6 m\n\nLoads\nRoof loads (applied at centroid of purlin)\n  Dead load = 720 Pa (including weight of purlin)\n  Live load = 1000 Pa\nWind pressure = 1.44 kPa\n  Wind pressure coefficient at windward side = 0.18 (pressure)\n  Wind pressure coefficient at leeward side = 0.6 (suction)\n\nAllowable stresses:\nFbx = Fby = 207 MPa\n\nAssume that all loads pass through the centroid of the channel section.\nFor D + L + W, a one third increase in allowable stresses is allowed.\n\n43. Find the maximum spacing of purlins (m) due to dead load plus live load only.',
    options: opts('0.90', '0.80', '1.00', '1.10'),
    ...solved(43, 'B', '0.80 m (Option B)', 432, 433),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q44',
    number: 44,
    pageNumber: 406,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 13 — Channel Purlin on a Sloped Chord',
    text: 'Situation 13 (continued)\n\n44. Find the maximum spacing of purlins (in m) due to dead load plus live load plus wind load on the windward side.',
    options: opts('0.80', '1.10', '0.90', '1.00'),
    ...solved(44, 'D', '1.00 m (Option D)', 433),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q45',
    number: 45,
    pageNumber: 406,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 13 — Channel Purlin on a Sloped Chord',
    text: 'Situation 13 (continued)\n\n45. Find the maximum spacing of purlins (in m) due to dead load plus live load plus wind load on the leeward side.',
    options: opts('1.20', '0.90', '0.70', '1.40'),
    ...solved(45, 'D', '1.40 m (Option D)', 433),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q46',
    number: 46,
    pageNumber: 406,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 14 — Steel Beam BF of a Floor Frame',
    text: 'Situation 14 – Refer to the Figure shown.\n\nGiven:\nS = 3 m, L = 10 m\nSuperimposed dead load = 6 kPa\nLive load = 4.8 kPa\n\nProperties of W460 × 97 kg/m (Beam BF)\nA = 12,320 mm²\nd = 465 mm, tf = 19 mm\nbf = 193 mm, tw = 11 mm\nIx = 445 × 10⁶ mm⁴, Iy = 23 × 10⁶ mm⁴\nrt = 50 mm, Fy = 344 MPa\n\nConsider bending about the x-axis.\n\n46. Compute the maximum bending stress in beam BF in MPa.',
    figureSvg: psadNov2016Figure(
      'figS14_plan',
      'Situation 14: the floor framing plan — three bays of 3 m between the column lines A-B-C-D across the top and E-F-G-H across the bottom, with the frame 10 m deep and beam BF running down the left-hand bay.',
    ),
    options: opts('248', '118', '217', '134'),
    ...solved(46, 'C', '217 MPa (Option C)', 433, 434),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q47',
    number: 47,
    pageNumber: 407,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 14 — Steel Beam BF of a Floor Frame',
    text: 'Situation 14 (continued)\n\n47. If lateral supports are to be provided, find the biggest distance (meters) between lateral supports such that the maximum allowable flexural stress is Fb = 0.66Fy.',
    options: opts('2', '1', '3', '4'),
    ...solved(47, 'A', '2 m (Option A)', 434),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q48',
    number: 48,
    pageNumber: 407,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 14 — Steel Beam BF of a Floor Frame',
    text: 'Situation 14 (continued)\n\n48. If the compression flange is laterally supported at midspan, what is the permissible flexural stress in MPa? Use Cb = 1.0.',
    options: opts('117', '130', '107', '148'),
    ...solved(48, 'B', '130 MPa (Option B)', 434, 435),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q49',
    number: 49,
    pageNumber: 409,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 15 — Eccentric Welded Bracket',
    text: 'Situation 15 – A bracket is welded to a steel column as shown.\n\nGiven:\na = 200 mm, b = 500 mm\nLoad, P = 360 kN\nAllowable weld shear stress, Fvw = 93 MPa\n\n49. Calculate the load in the weld (N/mm) due to P only when a = 0.',
    figureSvg: psadNov2016Figure(
      'figS15_bracket',
      'Situation 15: the bracket plate welded to the face of the column by two vertical fillet welds of length b, with the load P acting vertically at an eccentricity a from the weld group.',
    ),
    options: opts('360', '390', '420', '340'),
    ...solved(49, 'A', '360 N/mm (Option A)', 435),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q50',
    number: 50,
    pageNumber: 409,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 15 — Eccentric Welded Bracket',
    text: 'Situation 15 (continued)\n\n50. Calculate the maximum resultant load in the weld (N/mm) when the load is applied at eccentricity of a = 200 mm.',
    options: opts('864', '1014', '936', '745'),
    ...solved(50, 'C', '936 N/mm (Option C)', 435),
  },

  // ── Item 51 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q51',
    number: 51,
    pageNumber: 409,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 15 — Eccentric Welded Bracket',
    text: 'Situation 15 (continued)\n\n51. If the maximum resultant load in the weld is 720 N/mm, what the required weld thickness in mm?',
    options: opts('11', '12', '10', '9'),
    ...solved(51, 'A', '11 mm (Option A)', 436),
  },

  // ── Item 52 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q52',
    number: 52,
    pageNumber: 409,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 16 — Steel Column Buckling',
    text: 'Situation 16 – Given the following data for a steel column:\n\nEffective slenderness ratio with respect to x-axis, (KL/r)ₓ = 53.8\nEffective slenderness ratio with respect to y-axis, (KL/r)_y = 144\nModulus of elasticity of steel, E = 200 GPa\nCross-sectional area of the column = 7610 mm²\nYield strength of steel, Fy = 248 MPa\n\n52. Calculate the allowable axial stress (MPa) for buckling about the x-axis.',
    options: opts('114', '142', '95', '124'),
    ...solved(52, 'D', '124 MPa (Option D)', 436),
  },

  // ── Item 53 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q53',
    number: 53,
    pageNumber: 409,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 16 — Steel Column Buckling',
    text: 'Situation 16 (continued)\n\n53. Calculate the allowable axial stress (MPa) for buckling about the y-axis.',
    options: opts('49.6', '58.7', '36.5', '69.8'),
    ...solved(53, 'A', '49.6 MPa (Option A)', 436),
  },

  // ── Item 54 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q54',
    number: 54,
    pageNumber: 409,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 16 — Steel Column Buckling',
    text: 'Situation 16 (continued)\n\n54. Calculate the allowable load (kN) of the column.',
    options: opts('446', '944', '377', '531'),
    ...solved(54, 'C', '377 kN (Option C)', 437),
  },

  // ── Item 55 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q55',
    number: 55,
    pageNumber: 411,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 17 — Continuous Beam With Slab',
    text: 'Situation 17 – Given the following data of the figure shown:\n\nDimensions:\nBeam b × h = 350 mm × 450 mm\nSlab thickness, t = 100 mm\nL₁ = L₂ = 6 m, L₃ = 7 m, S = 2.5 m\n\nLoads:\nDead load = 5 kPa, Live load = 3.6 kPa\nConcrete strength, f\u2032c = 27.5 MPa\nSteel strength, fy = 415 MPa\nLoad combination, U = 1.2D + 1.6L\n\n55. Calculate the moment at end F of beam EF.',
    figureSvg: psadNov2016Figure(
      'figS17_frame',
      'Situation 17: the beam-and-slab framing in elevation — beams EF, FG and GH on three spans L₁ = L₂ = 6 m and L₃ = 7 m at 2.5 m centres, with a detail of the 350 mm × 450 mm beam carrying the 100 mm slab.',
    ),
    options: opts('93.8 kN-m', '104.3 kN-m', '93.9 kN-m', '78.2 kN-m'),
    ...solved(55, 'A', '93.8 kN-m (Option A)', 437),
  },

  // ── Item 56 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q56',
    number: 56,
    pageNumber: 411,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 17 — Continuous Beam With Slab',
    text: 'Situation 17 (continued)\n\n56. Calculate the moment at midspan of beam FG.',
    options: opts('67.0 kN-m', '72.6 kN-m', '85.3 kN-m', '58.7 kN-m'),
    ...solved(56, 'D', '58.7 kN-m (Option D)', 438),
  },

  // ── Item 57 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q57',
    number: 57,
    pageNumber: 411,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 17 — Continuous Beam With Slab',
    text: 'Situation 17 (continued)\n\n57. Calculate the shear at end F of beam EF.',
    options: opts('102.6 kN', '76.5 kN', '95.5 kN', '83.1 kN'),
    ...solved(57, 'C', '95.5 kN (Option C)', 438),
  },

  // ── Item 58 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q58',
    number: 58,
    pageNumber: 412,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 18 — Pattern Loading of a Continuous Beam',
    text: 'Situation 18 – Refer to the figure shown.\n\nGiven:\nL = 8 m\nS₁ = S₃ = 2.5 m\nS₂ = 3 m\n\nDead load (including concrete) = 4.5 kPa\nLive load = 4.8 kPa\n\nFor maximum stresses, apply the following:\n1. Pattern loading for live load\n2. Ultimate load combination, U = 1.2D + 1.6L\n\nGiven in Figure 1-A are the possible load patterns and corresponding reactions, shears, and moments.\n\n58. Calculate the maximum factored reaction (kN) at L.',
    figureSvg: psadNov2016Figure(
      'figS18_patterns',
      'Situation 18, Figure 1-A: the ACI load-pattern sheet — continuous beams of four equal spans and of four spans with an end span, each diagrammed with dead load on all spans and with live load on alternate spans, annotated with the reaction, shear and moment coefficients.',
    ),
    options: opts('221', '217', '302', '290'),
    ...solved(
      58,
      'C',
      '302 kN (Option C)',
      438,
      439,
      'The booklet\'s own working gives R_L,max = 1.143(15.18)(8) + 1.223(21.12)(8) = 345.44 kN, which matches none of the four printed choices. The key prints C, i.e. 302 kN — the value the same coefficients give for a 7 m span. The crop is reproduced unchanged.',
    ),
  },

  // ── Item 59 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q59',
    number: 59,
    pageNumber: 412,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 18 — Pattern Loading of a Continuous Beam',
    text: 'Situation 18 (continued)\n\n59. Calculate the minimum factored reaction (kN) at G.',
    options: opts('68', '31', '106', '38.6'),
    ...solved(59, 'D', '38.6 kN (Option D)', 439),
  },

  // ── Item 60 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2016-q60',
    number: 60,
    pageNumber: 412,
    subject: 'PSAD',
    year: 2016,
    month: 'November',
    category: 'Situation 18 — Pattern Loading of a Continuous Beam',
    text: 'Situation 18 (continued)\n\n60. Calculate the maximum factored moment (kN-m) at L.',
    options: opts('163', '267', '244', '248'),
    ...solved(60, 'B', '267 kN-m (Option B)', 440),
  },
];
