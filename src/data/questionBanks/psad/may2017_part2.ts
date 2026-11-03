import { Question } from '../../../types/exam';
import { psadMay2017Figure } from '../../psadMay2017Images';
import { solved, opts } from './may2017Helpers';

/** Situation 7 is printed once and shared by items 19-21. */
const SIT7 =
  'Situation 7 – The shear diagram of a loaded beam is shown. Assume no couple acts on the beam.';

/** Situation 8 is printed once and shared by items 22-24. */
const SIT8 = 'Situation 8 – A 15-m long prestressed pile is to be lifted by two cables.';

/** Situation 9 is printed once and shared by items 25-27. */
const SIT9 =
  'Situation 9 – A 25-m long beam is simply supported at the left end and at 3 m from the right end. The beam will be crossed by the following loads.\n\n' +
  'Uniform load $= 9.35\\ \\text{kN/m}$\nDirect load for maximum moment $= 80\\ \\text{kN}$\nDirect load for maximum shear $= 115\\ \\text{kN}$';

/** Situation 10 is printed once and shared by items 28-30. */
const SIT10 =
  'Situation 10 – A cylindrical tank having a diameter of 2 m and wall thickness of 3 mm is filled with 2.4 m deep of water.';

export const PSAD_MAY2017_PART2: Question[] = [
  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q19',
    number: 19,
    pageNumber: 511,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Beams — Shear Diagram',
    text: SIT7 + '\n\nWhat is the concentrated load at C in kN?',
    figureSvg: psadMay2017Figure(
      'fig07_shear',
      'The shear diagram of a beam with spans 2 m, 5 m, 5 m and 2 m between points A to E, showing values 4 kN, 12 kN, −4 kN and −12 kN.',
    ),
    options: opts('24', '16', '8', '12'),
    ...solved(19, 'C', '8 kN'),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q20',
    number: 20,
    pageNumber: 511,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Beams — Shear Diagram',
    text: 'What is the reaction at D in kN?',
    options: opts('16', '8', '12', '24'),
    ...solved(20, 'A', 'R_D = 16 kN'),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q21',
    number: 21,
    pageNumber: 511,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Beams — Moment Diagram',
    text: 'What is the maximum bending moment on the beam in kN-m.',
    options: opts('8', '12', '24', '16'),
    ...solved(21, 'A', '8 kN-m'),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q22',
    number: 22,
    pageNumber: 512,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Prestressed Piles — Lifting Stresses',
    text: SIT8 + '\n\nAt what distance from the pile ends must each cable be placed so that the maximum shear is the least possible value.',
    options: opts('4.39', '3.75', '2.75', '3.11'),
    ...solved(22, 'B', 'x = 0.25L = 3.75 m'),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q23',
    number: 23,
    pageNumber: 512,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Prestressed Piles — Lifting Stresses',
    text: 'At what distance from the pile ends must each cable be placed so that the maximum moment is the least possible value.',
    options: opts('3.11', '4.39', '3.75', '2.75'),
    ...solved(23, 'A', 'x = 0.2071L = 3.107 m'),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q24',
    number: 24,
    pageNumber: 512,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Prestressed Piles — Single Lift',
    text: 'With one end of the pile resting on the ground, at what distance from the other end must the cable be placed so that the maximum moment is the least possible value.',
    options: opts('2.75', '3.11', '4.39', '4.39'),
    ...solved(
      24,
      'D',
      'x = 0.2929L = 4.393 m',
      'Choices C and D are both printed as 4.39 in the booklet. The key is D.',
    ),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q25',
    number: 25,
    pageNumber: 512,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Moving Loads — Maximum Moment',
    text: SIT9 + '\n\nDetermine the maximum positive moment in kN-m.',
    options: opts('1158', '1006', '1365', '854'),
    ...solved(25, 'B', 'M_max = 1,005.68 kN-m'),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q26',
    number: 26,
    pageNumber: 512,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Moving Loads — Maximum Shear',
    text: 'Determine the maximum shear in kN.',
    options: opts('218', '268', '241', '365'),
    ...solved(26, 'A', 'V_max = 217.85 kN'),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q27',
    number: 27,
    pageNumber: 512,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Moving Loads — Negative Moment',
    text: 'Determine the maximum negative moment in kN-m.',
    options: opts('312', '254', '296', '282'),
    ...solved(27, 'D', 'M_max = −282.1 kN-m'),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q28',
    number: 28,
    pageNumber: 512,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Thin-Walled Vessels — Circumferential Stress',
    text: SIT10 + '\n\nCalculate the maximum circumferential stress (MPa) in the tank.',
    options: opts('7.85', '6.25', '3.92', '3.12'),
    ...solved(28, 'A', 'σ_t = 7.848 MPa'),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q29',
    number: 29,
    pageNumber: 512,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Thin-Walled Vessels — Longitudinal Stress',
    text: 'If the tank is supported at the top only, calculate the maximum longitudinal stress in MPa.',
    options: opts('3.12', '3.92', '0', '7.85'),
    ...solved(29, 'B', 'σ_l = 3.924 MPa'),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q30',
    number: 30,
    pageNumber: 512,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Thin-Walled Vessels — Longitudinal Stress',
    text: 'If the tank is supported at the top and bottom, calculate the maximum longitudinal stress in MPa.',
    options: opts('7.85', '3.12', '3.92', '0'),
    ...solved(30, 'D', 'σ_l = 0'),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q31',
    number: 31,
    pageNumber: 513,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Compression Members — Pipe Column',
    text:
      'Situation 11 – A 3-m-long steel pipe column with an outside diameter of 260 mm supports an axial load of 800 kN. The column can be considered hinged at both ends and sideways is prevented.\n\n' +
      'Calculate the minimum thickness (mm) of the column if the allowable compressive stress of the column is 55 MPa.',
    options: opts('20', '22', '18', '25'),
    ...solved(31, 'A', 't = 19.23 mm'),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q32',
    number: 32,
    pageNumber: 513,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Base Plates — Bearing',
    text: 'Calculate the minimum diameter (mm) of the circular base plate supporting the column if the allowable bearing stress of concrete pedestal is 10 MPa.',
    options: opts('230', '320', '210', '240'),
    ...solved(32, 'B', 'D_bp = 319.2 mm'),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q33',
    number: 33,
    pageNumber: 513,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Compression Members — Slenderness',
    text: 'Calculate the effective slenderness ratio of the column if its thickness is 10 mm.',
    options: opts('56.3', '42.1', '88.5', '33.9'),
    ...solved(33, 'D', 'KL/r = 33.9'),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'psad-may2017-q34',
    number: 34,
    pageNumber: 513,
    subject: 'PSAD',
    year: 2017,
    month: 'May',
    category: 'Poles — Wind Load',
    text:
      'Situation 12 – A 15-m high hollow circular pole is subjected to wind force that varies uniformly from 1.92 kPa at the top to 1.44 kPa at the base. The pole has an outside diameter of 180 mm and a wall thickness of 15 mm.\n\n' +
      'Compute the maximum shear (kN) at the base of the pole.',
    options: opts('12.36', '8.25', '6.32', '4.54'),
    ...solved(34, 'D', 'V_max = 4.536 kN'),
  },
];
