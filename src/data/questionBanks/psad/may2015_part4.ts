import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART4: Question[] = [
  // Item 46
  {
    id: 'psad-may2015-q46',
    number: 46,
    pageNumber: 81,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Bolted Connections',
    text: 'Situation 14 (continued) – Find P based on block shear.',
    options: opts('734 kN', '749 kN', '652 kN', '824 kN'),
    ...solved(46, 'A', '734 kN', 107),
  },

  // Item 47
  {
    id: 'psad-may2015-q47',
    number: 47,
    pageNumber: 81,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Welded Connection',
    text: 'Situation 15 – The vertical member of a truss is welded to a gusset plate as shown in the figure. All steel is A36 steel with $F_y$ = 250 MPa. The electrode used is E60 with allowable shearing stress of 124 MPa. Properties of 1.75 × 60 × 6: A = 774 mm², $\\bar{x}$ = 23 mm. Weld size, t = 6 mm. Allowable tensile stress on gross area, $F_t$ = 0.6$F_y$. What is the value of load P based on gross area yielding?',
    figureSvg: psadMay2015Figure(
      15,
      'Figure 15: Vertical truss member made of two 1.75 x 60 x 6 angles welded to a horizontal gusset plate, with weld lengths L1 and L2 and a 75 mm dimension.',
    ),
    figureCaption:
      'Figure 15: Double-angle truss member welded to a gusset plate (Situation 15).',
    options: opts('232 kN', '112 kN', '224 kN', '116 kN'),
    ...solved(47, 'A', '232 kN', 108),
  },

  // Item 48
  {
    id: 'psad-may2015-q48',
    number: 48,
    pageNumber: 81,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Welded Connection',
    text: 'Situation 15 (continued) – What is the value of $L_1$?',
    options: opts('221 mm', '68 mm', '153 mm', '142 mm'),
    ...solved(48, 'C', '153 mm', 108),
  },

  // Item 49
  {
    id: 'psad-may2015-q49',
    number: 49,
    pageNumber: 81,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Welded Connection',
    text: 'Situation 15 (continued) – What is the value of $L_2$?',
    options: opts('106 mm', '153 mm', '86 mm', '68 mm'),
    ...solved(49, 'D', '68 mm', 108),
  },

  // Item 50
  {
    id: 'psad-may2015-q50',
    number: 50,
    pageNumber: 82,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Eccentric Welded Connection',
    text: 'Situation 16 – Given the following data for the welded bracket shown in the figure: a = 125 mm, b = 250 mm, c = 250 mm. Allowable shear stress of weld metal is $F_{vw}$ = 145 MPa. If P = 160 kN and acts at the centroid of the weld group, what is the required weld thickness?',
    figureSvg: psadMay2015Figure(
      16,
      'Figure 16: Welded bracket with weld group of width a and heights b and c, the load P applied at the centroid of the weld group.',
    ),
    figureCaption:
      'Figure 16: Welded bracket with dimensions a, b and c (Situation 16).',
    options: opts('3.56 mm', '3.12 mm', '4.21 mm', '5.63 mm'),
    ...solved(50, 'B', '3.12 mm', 108, 109),
  },

  // Item 51
  {
    id: 'psad-may2015-q51',
    number: 51,
    pageNumber: 82,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Eccentric Welded Connection',
    text: 'Situation 16 (continued) – What is the unit polar moment of inertia of the weld group?',
    options: opts('8.23 × 10⁶ mm³', '7.52 × 10⁶ mm³', '7.12 × 10⁶ mm³', '6.02 × 10⁶ mm³'),
    ...solved(51, 'D', '6.02 × 10⁶ mm³', 108, 109),
  },

  // Item 52
  {
    id: 'psad-may2015-q52',
    number: 52,
    pageNumber: 82,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Eccentric Welded Connection',
    text: 'Situation 16 (continued) – If the thickness of the weld is 9.5 mm, what is the allowable load P applied as shown in the figure.',
    options: opts('145.8 kN', '137.9 kN', '124.3 kN', '169.6 kN'),
    ...solved(52, 'B', '137.9 kN', 108, 109),
  },

  // Item 53
  {
    id: 'psad-may2015-q53',
    number: 53,
    pageNumber: 82,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Built-up Column',
    text: 'Situation 17 – The column shown in the figure is made from four 300 mm × 16 mm A36 steel. The column is 12 m long, hinged at both ends, and laterally supported at L/3 about the y-axis. Calculate the following: The effective slenderness ratio about the x-axis.',
    figureSvg: psadMay2015Figure(
      17,
      'Figure 17: Box column built from four 300 mm x 16 mm plates forming a 332 mm square section, with the x and y axes through the centre.',
    ),
    figureCaption:
      'Figure 17: Box column of four 300 mm × 16 mm plates (Situation 17).',
    options: opts('94.2', '31.4', '47.1', '52.6'),
    ...solved(53, 'A', '94.2', 110, 111),
  },

  // Item 54
  {
    id: 'psad-may2015-q54',
    number: 54,
    pageNumber: 82,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Built-up Column',
    text: 'Situation 17 (continued) – The effective slenderness ratio about the y-axis.',
    options: opts('34', '68', '102', '56'),
    ...solved(54, 'A', '34', 110, 111),
  },

  // Item 55
  {
    id: 'psad-may2015-q55',
    number: 55,
    pageNumber: 82,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Steel Design - Built-up Column',
    text: 'Situation 17 (continued) – The axial load capacity of the column.',
    options: opts('1963 kN', '1547 kN', '1813 kN', '2015 kN'),
    ...solved(55, 'C', '1813 kN', 110, 111),
  },

  // Item 56
  {
    id: 'psad-may2015-q56',
    number: 56,
    pageNumber: 83,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Cracking Moment',
    text: 'Situation 18 – The section of a concrete beam is shown in the figure. The beam is simply supported over a span of 6 m. Unit weight of concrete is 24 kN/m³. Concrete compressive strength $f\u2019_c$ = 28 MPa and concrete tensile strength $f_{ct}$ = 2.8 MPa. In this problem, $b_1$ = 250 mm, $b_2$ = 350 mm, h = 600 mm, and D = 150 mm. Calculate the cracking moment of the beam.',
    figureSvg: psadMay2015Figure(
      18,
      'Figure 18: Tapered concrete beam section of height h, top width b1 and bottom width b2, with a circular void of diameter D.',
    ),
    figureCaption:
      'Figure 18: Tapered beam section with a circular void, b₁ = 250 mm, b₂ = 350 mm, h = 600 mm, D = 150 mm (Situation 18).',
    options: opts('57.97 kN-m', '42.94 kN-m', '58.93 kN-m', '66.48 kN-m'),
    ...solved(56, 'C', '58.93 kN-m', 111, 112),
  },

  // Item 57
  {
    id: 'psad-may2015-q57',
    number: 57,
    pageNumber: 83,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Cracking Moment',
    text: 'Situation 18 (continued) – Calculate the compressive stress in the beam due to this cracking moment.',
    options: opts('3.12 MPa', '3.08 MPa', '2.60 MPa', '3.34 MPa'),
    ...solved(57, 'A', '3.12 MPa', 111, 112),
  },

  // Item 58
  {
    id: 'psad-may2015-q58',
    number: 58,
    pageNumber: 83,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Cracking Moment',
    text: 'Situation 18 (continued) – What additional weight can the beam support without cracking?',
    options: opts('9.32 kN/m', '10.52 kN/m', '6.37 kN/m', '9.20 kN/m'),
    ...solved(58, 'D', '9.20 kN/m', 111, 112),
  },

  // Item 59
  {
    id: 'psad-may2015-q59',
    number: 59,
    pageNumber: 84,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Doubly Reinforced Beam',
    text: 'Situation 19 – The floor framing plan of a reinforced concrete structure is shown in the figure. The columns are 400 mm × 400 mm and the beams are 320 mm wide with h = 350 mm. The section at support for beam EFGH is also shown in the figure. Assume $f\u2019_c$ = 28 MPa and $f_y$ = 415 MPa. The NSCP coefficients for continuous beams and slabs is given in Figure Code-523. Calculate the nominal moment strength of the beam.',
    figureSvg: psadMay2015Figure(
      19,
      'Figure 19: Floor framing plan with three 6 m bays and three 2.5 m bays, and the T-beam section at support EFGH with 8-20 mm top bars and 4-28 mm bottom bars in a 320 mm web.',
    ),
    figureCaption:
      'Figure 19: Floor framing plan and the beam EFGH section at support (Situation 19).',
    options: opts('189.7 kN-m', '214.8 kN-m', '232.8 kN-m', '247.5 kN-m'),
    ...solved(59, 'D', '247.5 kN-m', 112, 115),
  },

  // Item 60
  {
    id: 'psad-may2015-q60',
    number: 60,
    pageNumber: 84,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Continuous Beam',
    text: 'Situation 19 (continued) – Calculate the maximum factored uniform load $w_u$ that can be supported by beam EFGH.',
    options: opts('54.4 kN/m', '62 kN/m', '71 kN/m', '47.4 kN/m'),
    ...solved(60, 'C', '71 kN/m', 112, 115),
  },
];
