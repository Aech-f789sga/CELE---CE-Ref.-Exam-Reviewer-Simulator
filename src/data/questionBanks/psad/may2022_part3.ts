import { Question } from '../../../types/exam';
import {
  psadFigure,
  psadMay2022SolutionImages,
  psadMay2022SolutionPage,
  psadMay2022SolutionPageEnd,
} from '../../psadMay2022Images';

const sol = (situation: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: psadMay2022SolutionPage(situation),
  pageNumberEnd: psadMay2022SolutionPageEnd(situation),
  images: psadMay2022SolutionImages(situation),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const SITUATION_13 =
  'Situation 13 — Refer to the figure shown. A four-span beam is simply supported at A, B, C, D, and E.\n\nGiven the following data:\n  Span length, l = 8 m\n  Factored uniform dead load, wD = 15 kN/m\n  Factored uniform live load, wL = 18 kN/m';

const SITUATION_14 =
  'Situation 14 — Light-gage Channel section is used as a purlin of a truss. Given the following data:\n\n  Simple span = 6 m\n  Spacing of purlins = 1.2 m\n  Bending stresses (without sag rods):\n    fbx = 112 MPa\n    fby = 199 MPa';

const SITUATION_15 =
  'Situation 15 — A vertical angle is axially loaded along its neutral axis as shown.\n\nProperties of 1L 100 × 100 × 9 mm:\n  Area, A = 1,720 mm²\n  a = 29 mm\n  Yield strength, Fy = 248 MPa\n  Allowable weld shear stress = 98 MPa';

const SITUATION_16 =
  "Situation 16 — The basic data for proportioning trial batches for normal weight concrete with an average compressive strength of 35 MPa at 28 days are as follows:\n\n  Slump = 75 mm to 100 mm\n  Water-cement ratio by weight = 0.46\n  Specific gravity of cement = 3.15\n  Specific gravity of coarse aggregate = 2.68\n  Specific gravity of fine aggregate = 2.64\n  Water (net mixing) = 203 kg/m³\n  Unit weight of dry-rodded coarse aggregates = 16.5 kN/m³\n  Volume of dry-rodded coarse aggregate = 0.67 m³\n  Concrete unit weight = 23.5 kN/m³";

const SITUATION_17 =
  'Situation 17 — Given the following data of a prestressed rectangular beam:\n\n  Dimension, b × h = 250 mm × 500 mm\n  Simple span, L = 6 m\n  Bending stresses due to external loads:\n    Tension = 4.75 MPa;  Compression = 4.75 MPa\n  Stresses due to initial prestress:\n    Tension = 1.26 MPa;  Compression = 7.44 MPa\n  Unit weight of concrete = 24 kN/m³';

const SITUATION_18 =
  "Situation 18 — Refer to the T-beam shown:\n\nGiven:\n  Beam dimension: b × h = 350 mm × 550 mm\n  Slab thickness, t = 100 mm\n  Clear concrete cover to 12 mm ties = 40 mm\n  Top reinforcement = 3 - 28-mm bars\n  Bottom reinforcement = 5 - 28-mm bars\n  Concrete strength, f'c = 27.5 MPa\n  Steel strength:\n    Longitudinal bars, fy = 415 MPa\n    Transverse reinforcement, fyt = 275 MPa\n  Allowable shear stress of concrete = 0.90 MPa\n  Reduction factors:\n    Moment = 0.90;  Shear = 0.75\n\nThe beam has a total length of 12 m and is simply supported at the left end and at 3 m from the right end.";

export const PSAD_MAY2022_PART3: Question[] = [
  // --- SITUATION 13 (Items 37 - 39) ---
  {
    id: 'psad-may2022-q37',
    number: 37,
    pageNumber: 443,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 13 — Four-Span Continuous Beam: Maximum Reaction at B',
    text: `${SITUATION_13}\n\n37. How much is the maximum reaction (kN) at B?`,
    figureSvg: psadFigure(13, 'Situation 13: four equal span continuous beam, all spans loaded'),
    figureCaption: 'Situation 13: four equal span continuous beam, all spans loaded',
    options: opt('258.4', '269.3', '313.3', '325.7'),
    correctAnswer: 'C',
    solution: { ...sol(13), finalAnswer: '313.3 kN (Option C)' },
  },
  {
    id: 'psad-may2022-q38',
    number: 38,
    pageNumber: 443,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 13 — Four-Span Continuous Beam: Maximum Shear at B',
    text: '38. How much is the maximum shear (kN) at B?',
    options: opt('145.9', '162.1', '178.6', '196.2'),
    correctAnswer: 'B',
    solution: { ...sol(13), finalAnswer: '162.1 kN (Option B)' },
  },
  {
    id: 'psad-may2022-q39',
    number: 39,
    pageNumber: 443,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 13 — Four-Span Continuous Beam: Maximum Positive Moment in AB',
    text: '39. How much is the maximum positive moment (kN-m) in span AB?',
    options: opt('188', '154', '198', '214'),
    correctAnswer: 'A',
    solution: { ...sol(13), finalAnswer: '188 kN-m (Option A)' },
  },

  // --- SITUATION 14 (Items 40 - 42) ---
  {
    id: 'psad-may2022-q40',
    number: 40,
    pageNumber: 445,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 14 — Light-Gage Purlin: Bending Stress fbx with Sag Rod',
    text: `${SITUATION_14}\n\n40. Compute the bending stress fbx (MPa) when the purlin is provided with one line of sag rod.`,
    options: opt('224', '56', '84', '112'),
    correctAnswer: 'D',
    solution: { ...sol(14), finalAnswer: 'fbx = 112 MPa (Option D)' },
  },
  {
    id: 'psad-may2022-q41',
    number: 41,
    pageNumber: 445,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 14 — Light-Gage Purlin: Bending Stress fby with Sag Rod',
    text: '41. Compute the bending stress fby (MPa) when the purlin is provided with one line of sag rod.',
    options: opt('149.25', '199', '49.75', '99.5'),
    correctAnswer: 'C',
    solution: { ...sol(14), finalAnswer: 'fby = 49.75 MPa (Option C)' },
  },
  {
    id: 'psad-may2022-q42',
    number: 42,
    pageNumber: 445,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 14 — Light-Gage Purlin: Reduced Purlin Spacing',
    text: '42. Compute the bending stress fby (MPa) when the purlin is provided with one line of sag rod and the spacing of purlin is reduced to 0.8 m.',
    options: opt('45.26', '25.48', '33.17', '74.63'),
    correctAnswer: 'C',
    solution: { ...sol(14), finalAnswer: 'fby = 33.17 MPa (Option C)' },
  },

  // --- SITUATION 15 (Items 43 - 45) ---
  {
    id: 'psad-may2022-q43',
    number: 43,
    pageNumber: 445,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 15 — Welded Angle: Tensile Capacity',
    text: `${SITUATION_15}\n\n43. How much is the tensile capacity (kN) of the angle?`,
    figureSvg: psadFigure(15, 'Situation 15: vertical angle axially loaded with longitudinal welds L1 and L2'),
    figureCaption: 'Situation 15: vertical angle axially loaded with longitudinal welds L₁ and L₂',
    options: opt('296.2', '321.4', '289.7', '255.9'),
    correctAnswer: 'D',
    solution: { ...sol(15), finalAnswer: '255.9 kN (Option D)' },
  },
  {
    id: 'psad-may2022-q44',
    number: 44,
    pageNumber: 446,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 15 — Welded Angle: Longitudinal Weld Length',
    text: '44. Using 9 mm longitudinal welds only, compute the value of L₁ (mm).',
    options: opt('236.9', '215.5', '254.2', '291.4'),
    correctAnswer: 'D',
    solution: { ...sol(15), finalAnswer: 'L₁ = 291.4 mm (Option D)' },
  },
  {
    id: 'psad-may2022-q45',
    number: 45,
    pageNumber: 446,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 15 — Welded Angle: Combined Longitudinal and Transverse Weld',
    text: '45. Using 9 mm longitudinal welds and 8 mm transverse weld, compute the value of L₁ (mm).',
    options: opt('252', '247', '205', '223'),
    correctAnswer: 'B',
    solution: { ...sol(15), finalAnswer: 'L₁ = 247 mm (Option B)' },
  },

  // --- SITUATION 16 (Items 46 - 48) ---
  {
    id: 'psad-may2022-q46',
    number: 46,
    pageNumber: 446,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 16 — Concrete Trial Batch: Weight of Water',
    text: `${SITUATION_16}\n\n46. Compute the weight (kN) of water.`,
    options: opt('2.36', '1.99', '1.58', '3.69'),
    correctAnswer: 'B',
    solution: { ...sol(16), finalAnswer: '1.99 kN (Option B)' },
  },
  {
    id: 'psad-may2022-q47',
    number: 47,
    pageNumber: 446,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 16 — Concrete Trial Batch: Dry Sand Requirement',
    text: '47. How much dry sand (kN) is needed?',
    options: opt('7.31', '10.25', '6.87', '6.13'),
    correctAnswer: 'D',
    solution: { ...sol(16), finalAnswer: '6.13 kN (Option D)' },
  },
  {
    id: 'psad-may2022-q48',
    number: 48,
    pageNumber: 446,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 16 — Concrete Trial Batch: Excess Water',
    text: '48. Compute the excess water (kg) if the excess moisture of fine and coarse aggregates is 5% and 3%, respectively.',
    options: opt('46', '65', '58', '30'),
    correctAnswer: 'B',
    solution: { ...sol(16), finalAnswer: '65 kg (Option B)' },
  },

  // --- SITUATION 17 (Items 49 - 51) ---
  {
    id: 'psad-may2022-q49',
    number: 49,
    pageNumber: 447,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 17 — Prestressed Beam: Total Stress at Bottom Fiber',
    text: `${SITUATION_17}\n\n49. How much is the total stress (MPa) at the bottom fiber?`,
    options: opt('2.69 C', '3.49 T', '3.49 C', '2.69 T'),
    correctAnswer: 'A',
    solution: { ...sol(17), finalAnswer: '2.69 MPa compression (Option A)' },
  },
  {
    id: 'psad-may2022-q50',
    number: 50,
    pageNumber: 447,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 17 — Prestressed Beam: Additional External Moment',
    text: '50. Compute the maximum additional external moment (kN-m) without producing tensile stress in concrete. Assume loss of prestress of 20%.',
    options: opt('18.36', '12.52', '8.51', '5.36'),
    correctAnswer: 'B',
    solution: { ...sol(17), finalAnswer: '12.52 kN-m (Option B)' },
  },
  {
    id: 'psad-may2022-q51',
    number: 51,
    pageNumber: 447,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 17 — Prestressed Beam: Maximum Superimposed Load',
    text: '51. Given: Allowable tensile stress of concrete = 3.2 MPa; Allowable compressive stress of concrete = 14.5 MPa; Loss of prestress = 20%. Determine the maximum superimposed load (kN/m) of the beam.',
    options: opt('18.18', '12.58', '3.37', '3.86'),
    correctAnswer: 'A',
    solution: { ...sol(17), finalAnswer: '18.18 kN/m (Option A)' },
  },

  // --- SITUATION 18 (Items 52 - 54) ---
  {
    id: 'psad-may2022-q52',
    number: 52,
    pageNumber: 447,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 18 — T-Beam: Positive Nominal Moment',
    text: `${SITUATION_18}\n\n52. Compute the positive nominal moment (kN-m) of the beam.`,
    figureSvg: psadFigure(18, 'Situation 18: T-beam cross section with top and bottom reinforcement'),
    figureCaption: 'Situation 18: T-beam cross section with top and bottom reinforcement',
    options: opt('638', '524', '732', '547'),
    correctAnswer: 'D',
    solution: { ...sol(18), finalAnswer: '547 kN-m (Option D)' },
  },
  {
    id: 'psad-may2022-q53',
    number: 53,
    pageNumber: 448,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 18 — T-Beam: Negative Nominal Moment',
    text: '53. Compute the negative nominal moment (kN-m) of the beam.',
    options: opt('389', '417', '337', '321'),
    correctAnswer: 'C',
    solution: { ...sol(18), finalAnswer: '337 kN-m (Option C)' },
  },
  {
    id: 'psad-may2022-q54',
    number: 54,
    pageNumber: 448,
    subject: 'PSAD',
    year: 2022,
    month: 'May',
    category: 'Situation 18 — T-Beam: Maximum Factored Uniform Load from Shear',
    text: '54. Determine the maximum factored uniform load (kN/m) that the beam can support based on shear. Spacing of ties near the support is 90 mm.',
    options: opt('96.3', '102.8', '85.7', '80.8'),
    correctAnswer: 'D',
    solution: { ...sol(18), finalAnswer: '80.8 kN/m (Option D)' },
  },
];
