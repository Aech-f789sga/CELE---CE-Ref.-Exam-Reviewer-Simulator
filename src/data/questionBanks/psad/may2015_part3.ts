import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART3: Question[] = [
  // Item 31
  {
    id: 'psad-may2015-q31',
    number: 31,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 9 (continued) – If the wall is simply supported at the top, compute the maximum shear in the wall.',
    options: opts('65.375 kN', '65.075 kN', '69.875 kN', '66.825 kN'),
    ...solved(31, 'D', '66.825 kN', 102, 103),
  },

  // Item 32
  {
    id: 'psad-may2015-q32',
    number: 32,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Timber Design - Truss Members',
    text: 'Situation 10 – The truss shown is made from Guijo. The truss supports a vertical load P = 20 kN at C. Given the following allowable stresses for the grade of wood: Compression parallel to grain = 13.2 MPa; Compression perpendicular to grain = 4.3 MPa; Shear parallel to grain = 2.32 MPa. What is the axial stress of member AC?',
    figureSvg: psadMay2015Figure(
      10,
      'Figure 10: Roof truss with apex at C, members 150 mm x 100 mm, 30 degree slopes, and a detail of the member end showing the bearing dimensions x and y.',
    ),
    figureCaption:
      'Figure 10: Guijo roof truss carrying P = 20 kN at C, with the member-end bearing detail (Situation 10).',
    options: opts('1.33 MPa', '1.25 MPa', '1.15 MPa', '1 MPa'),
    ...solved(32, 'A', '1.33 MPa', 103, 104),
  },

  // Item 33
  {
    id: 'psad-may2015-q33',
    number: 33,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Timber Design - Truss Members',
    text: 'Situation 10 (continued) – What is the minimum value of x?',
    options: opts('100 mm', '50 mm', '75 mm', '125 mm'),
    ...solved(33, 'C', '75 mm', 103, 104),
  },

  // Item 34
  {
    id: 'psad-may2015-q34',
    number: 34,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Timber Design - Truss Members',
    text: 'Situation 10 (continued) – What is the minimum value of y?',
    options: opts('20 mm', '25 mm', '15 mm', '30 mm'),
    ...solved(34, 'A', '20 mm', 103, 104),
  },

  // Item 35
  {
    id: 'psad-may2015-q35',
    number: 35,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Axially Loaded Column',
    text: 'Situation 11 – A steel pipe column resting on a steel base plate concrete pedestal supports an axial load of P = 1200 kN, as shown. The column has an unbraced length of 3.5 m, outside diameter of D = 280 mm and can be assumed hinged at both ends. The allowable compressive strength of column is 60 MPa and the allowable bearing strength of concrete is 9.6 MPa. Which of the following gives the minimum thickness of the column?',
    figureSvg: psadMay2015Figure(
      11,
      'Figure 11: Steel pipe column of length L and outside diameter D on a square base plate over a concrete pedestal, with a circular detail defining the wall thickness t and inner diameter d.',
    ),
    figureCaption:
      'Figure 11: Pipe column on a base plate over a concrete pedestal (Situation 11).',
    options: opts('32 mm', '28 mm', '30 mm', '25 mm'),
    ...solved(35, 'D', '25 mm', 104, 105),
  },

  // Item 36
  {
    id: 'psad-may2015-q36',
    number: 36,
    pageNumber: 78,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Base Plate',
    text: 'Situation 11 (continued) – Which of the following gives the minimum diameter of the base plate?',
    options: opts('500 mm', '400 mm', '450 mm', '420 mm'),
    ...solved(36, 'B', '400 mm', 104, 105),
  },

  // Item 37
  {
    id: 'psad-may2015-q37',
    number: 37,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Axially Loaded Column',
    text: 'Situation 11 (continued) – If the pipe wall is 20 mm thick, which of the following gives the effective slenderness ratio of the column.',
    options: opts('35.21', '37.96', '38.64', '32.36'),
    ...solved(37, 'B', '37.96', 104, 105),
  },

  // Item 38
  {
    id: 'psad-may2015-q38',
    number: 38,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Mohr\u2019s Circle',
    text: 'Situation 12 – The stresses on an element is represented by the Moh\u2019r Circle shown in the figure. Determine the following: The maximum normal stress.',
    figureSvg: psadMay2015Figure(
      12,
      'Figure 12: Mohr\u2019s circle with centre at 65 MPa, a stress point at 30 MPa and 19 MPa, and a diameter of 100 MPa across the sigma axis.',
    ),
    figureCaption:
      'Figure 12: Mohr\u2019s circle for the element, all units in MPa (Situation 12).',
    options: opts('105.511 MPa', '114.283 MPa', '104.825 MPa', '104.283 MPa'),
    ...solved(38, 'C', '104.825 MPa', 105, 106),
  },

  // Item 39
  {
    id: 'psad-may2015-q39',
    number: 39,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Mohr\u2019s Circle',
    text: 'Situation 12 (continued) – The minimum normal stress.',
    options: opts('25.175 MPa', '15.717 MPa', '25.717 MPa', '34.409 MPa'),
    ...solved(39, 'A', '25.175 MPa', 105, 106),
  },

  // Item 40
  {
    id: 'psad-may2015-q40',
    number: 40,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Mohr\u2019s Circle',
    text: 'Situation 12 (continued) – The maximum shearing stress.',
    options: opts('46.235 MPa', '35.511 MPa', '44.283 MPa', '39.825 MPa'),
    ...solved(40, 'D', '39.825 MPa', 105, 106),
  },

  // Item 41
  {
    id: 'psad-may2015-q41',
    number: 41,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Plane Stress',
    text: 'Situation 13 – An element in plane stress is subjected to stresses as shown in the figure. All units are in MPa. What is the magnitude of normal stress $\\sigma_x$?',
    figureSvg: psadMay2015Figure(
      13,
      'Figure 13: Plane stress element with sigma-x, sigma-y and tau-xy, beside its Mohr\u2019s circle with stress points A and B and a diameter of 90 MPa.',
    ),
    figureCaption:
      'Figure 13: Plane stress element and its Mohr\u2019s circle, all units in MPa (Situation 13).',
    options: opts('60', '90', '30', '50'),
    ...solved(41, 'B', '90', 106),
  },

  // Item 42
  {
    id: 'psad-may2015-q42',
    number: 42,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Plane Stress',
    text: 'Situation 13 (continued) – What is the magnitude of normal stress $\\sigma_y$?',
    options: opts('90', '50', '60', '30'),
    ...solved(42, 'D', '30', 106),
  },

  // Item 43
  {
    id: 'psad-may2015-q43',
    number: 43,
    pageNumber: 79,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Plane Stress',
    text: 'Situation 13 (continued) – What is the maximum shearing stress?',
    options: opts('50', '30', '90', '60'),
    ...solved(43, 'A', '50', 106),
  },

  // Item 44
  {
    id: 'psad-may2015-q44',
    number: 44,
    pageNumber: 81,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Bolted Connections',
    text: 'Situation 14 – Two channels are joined together by eight 25-mm-diameter bolts in single shear as shown in the figure. The bolts spacing are $x_1$ = 50 mm and $y_1$ = 60 mm. The steel has $F_y$ = 250 MPa and $F_u$ = 400 MPa. Channel properties: Area = 3644 mm², Web thickness = 12 mm. Allowable stresses of plate: Tension on gross area = 0.60 $F_y$; Tension on net area = 0.50 $F_u$; Shear on net area = 0.30 $F_u$; Bearing on projected area = 1.20 $F_u$. Allowable shearing stress of bolt = 90 MPa; Bolt hole diameter = 27 mm. Find P based on bolt shear.',
    figureSvg: psadMay2015Figure(
      14,
      'Figure 14: Two channels spliced with eight 25 mm bolts in single shear, with bolt spacings x1 to x4 and y1, y2, plus the channel cross-section showing the web thickness.',
    ),
    figureCaption:
      'Figure 14: Bolted channel splice, eight 25 mm bolts in single shear (Situation 14).',
    options: opts('336 kN', '353 kN', '368 kN', '385 kN'),
    ...solved(44, 'B', '353 kN', 107),
  },

  // Item 45
  {
    id: 'psad-may2015-q45',
    number: 45,
    pageNumber: 81,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Bolted Connections',
    text: 'Situation 14 (continued) – Find P based on bearing on plate.',
    options: opts('1265 kN', '1063 kN', '956 kN', '1152 kN'),
    ...solved(45, 'D', '1152 kN', 107),
  },
];
