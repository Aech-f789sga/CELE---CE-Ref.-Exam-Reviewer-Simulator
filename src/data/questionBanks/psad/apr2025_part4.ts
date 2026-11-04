import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const PSAD_APR2025_PART4: Question[] = [
  // Item 46
  {
    id: 'psad-apr2025-q46',
    number: 46,
    pageNumber: 428,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Beam-Column Interaction',
    text: 'Situation 16 — W250 × 67 is used as a column having a length of 8 m. The column is hinged at both ends and laterally supported at the midheight of its weak axis.\n\nProperties of W25 × 67: Area, $A = 8,580$ mm$^2$; Depth, $d = 255$ mm; Flange width, $b_f = 205$ mm; Flange thickness, $t_f = 16$ mm; Web thickness, $t_w = 10$ mm; Moment of inertia: $I_x = 1.03 \\times 10^8$ mm$^4$, $I_y = 2.22 \\times 10^7$ mm$^4$.\n\n46. Compute the critical effective slenderness ratio of the column.',
    options: [
      { label: 'A', text: '51' },
      { label: 'B', text: '79' },
      { label: 'C', text: '157' },
      { label: 'D', text: '96' },
    ],
    ...solved(46, 'B', '79 (Option B)'),
  },

  // Item 47
  {
    id: 'psad-apr2025-q47',
    number: 47,
    pageNumber: 428,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Beam-Column Interaction',
    text: 'Situation 16 — 47. The column is subjected to the following loads: Axial load $P = 200$ kN applied 0.25 m from the centroidal $x$-axis; Bending moment about $x$-axis, $M_x = 25$ kN m. Compute the maximum bending stress (MPa).',
    options: [
      { label: 'A', text: '93' },
      { label: 'B', text: '85' },
      { label: 'C', text: '62' },
      { label: 'D', text: '31' },
    ],
    ...solved(47, 'A', '93 MPa (Option A)'),
  },

  // Item 48
  {
    id: 'psad-apr2025-q48',
    number: 48,
    pageNumber: 429,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Beam-Column Interaction',
    text: 'Situation 16 — 48. Given: Allowable axial compressive stress $= 100$ MPa; Allowable bending stress about $x$-axis $= 148$ MPa; Bending moment about $x$-axis, $M_x = 25$ kN m. Compute the maximum axial load $P$ (kN) that can be applied at an eccentricity of 0.25 m from the centroidal $x$-axis. Use the interaction criterion $f_a/F_a + f_{bx}/F_{bx} \\le 1.0$.',
    options: [
      { label: 'A', text: '678' },
      { label: 'B', text: '242' },
      { label: 'C', text: '307' },
      { label: 'D', text: '421' },
    ],
    ...solved(48, 'B', '242 kN (Option B)'),
  },

  // Item 49
  {
    id: 'psad-apr2025-q49',
    number: 49,
    pageNumber: 429,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Prestressed Concrete - Flexural Stresses',
    text: 'Situation 17 — A prestressed concrete beam is simply supported on a span of 10 m. Given the following data:\n\nSection properties: $H = 600$ mm; $y_t = 176.5$ mm; Cross-sectional area, $A = 2.1 \\times 10^5$ mm$^2$; Centroidal moment of inertia, $I_{NA} = 6.7 \\times 10^9$ mm$^4$.\n\nService loads: Superimposed dead load $= 3.5$ kN/m; Live load $= 5$ kN/m; Unit weight of concrete $= 24$ kN/m$^3$.\n\nInitial prestressing force $= 800$ kN; Final prestressing force $= 720$ kN.\n\nLocation of tendons: At support, located at N.A.; At midspan, located 75 mm from the bottom fiber.\n\n49. Determine the maximum stress (MPa) at the top fibers of the beam at support due to initial prestress only.',
    options: [
      { label: 'A', text: '3.8' },
      { label: 'B', text: '5.6' },
      { label: 'C', text: '4.8' },
      { label: 'D', text: '3.4' },
    ],
    ...solved(49, 'A', '3.8 MPa (Option A)'),
  },

  // Item 50
  {
    id: 'psad-apr2025-q50',
    number: 50,
    pageNumber: 430,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Prestressed Concrete - Flexural Stresses',
    text: 'Situation 17 — 50. Determine the maximum stress (MPa) at the top fibers of the beam at midspan due to prestress and service loads.',
    options: [
      { label: 'A', text: '8.59 C' },
      { label: 'B', text: '8.59 T' },
      { label: 'C', text: '1.28 T' },
      { label: 'D', text: '1.28 C' },
    ],
    ...solved(50, 'D', '1.28 C (Option D)'),
  },

  // Item 51
  {
    id: 'psad-apr2025-q51',
    number: 51,
    pageNumber: 430,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Prestressed Concrete - Flexural Stresses',
    text: 'Situation 17 — 51. What prestressing force under the given loads will not produce tensile stress at midspan. Assume 15% loss of prestress at service loads.',
    options: [
      { label: 'A', text: '859' },
      { label: 'B', text: '400' },
      { label: 'C', text: '470' },
      { label: 'D', text: '1011' },
    ],
    ...solved(51, 'C', '470 kN (Option C)'),
  },

  // Item 52
  {
    id: 'psad-apr2025-q52',
    number: 52,
    pageNumber: 430,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Concrete Technology - Mix Proportioning',
    text: 'Situation 18 — The basic data for proportioning trial batches for normal weight concrete with an average compressive strength of 35 MPa at 28 days are as follows:\n\nSlump $= 70$ mm to 100 mm; Water-cement ratio by weight $= 0.41$; Specific gravity of cement $= 3.15$; Specific gravity of fine aggregate $= 2.68$; Specific gravity of coarse aggregate $= 2.64$; Water (net mixing) $= 180$ kg/m$^3$; Weight of coarse aggregate $= 10$ kN/m$^3$; Entrapped air $= 1\\%$; Concrete unit weight $= 23.4$ kN/m$^3$.\n\n52. What is the required volume (m$^3$) of coarse aggregate per cubic meter of concrete.',
    options: [
      { label: 'A', text: '0.46' },
      { label: 'B', text: '0.32' },
      { label: 'C', text: '0.43' },
      { label: 'D', text: '0.39' },
    ],
    ...solved(52, 'D', '0.39 m³ (Option D)'),
  },

  // Item 53
  {
    id: 'psad-apr2025-q53',
    number: 53,
    pageNumber: 430,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Concrete Technology - Mix Proportioning',
    text: 'Situation 18 — 53. Compute the volume of cement (m$^3$) per cubic meter of concrete.',
    options: [
      { label: 'A', text: '0.10' },
      { label: 'B', text: '0.18' },
      { label: 'C', text: '0.21' },
      { label: 'D', text: '0.14' },
    ],
    ...solved(53, 'D', '0.14 m³ (Option D)'),
  },

  // Item 54
  {
    id: 'psad-apr2025-q54',
    number: 54,
    pageNumber: 430,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Concrete Technology - Mix Proportioning',
    text: 'Situation 18 — 54. If the combined solid volume of cement, water, coarse aggregate and entrapped air is 0.65 m$^3$, what is the weight (kN) of dry sand required?',
    options: [
      { label: 'A', text: '10.3' },
      { label: 'B', text: '8.4' },
      { label: 'C', text: '9.2' },
      { label: 'D', text: '12.6' },
    ],
    ...solved(54, 'C', '9.2 kN (Option C)'),
  },

  // Item 55
  {
    id: 'psad-apr2025-q55',
    number: 55,
    pageNumber: 431,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - NSCP Moment Coefficients',
    text: 'Situation 19 — Given the following data of the continuous beam shown.\n\n$L_1 = 6$ m; $L_2 = 6.5$ m; $L_3 = 5.5$ m; $L_4 = 5.8$ m. Uniform factored loads (at ultimate conditions): Dead load $= 12$ kN/m; Live load $= 12.5$ kN/m. Use Figure Code 1.\n\n55. Compute the moment at $B$ (kN·m) in beam $AB$.',
    options: [
      { label: 'A', text: '87.0' },
      { label: 'B', text: '134.4' },
      { label: 'C', text: '95.7' },
      { label: 'D', text: '122.2' },
    ],
    ...solved(55, 'C', '95.7 kN·m (Option C)'),
  },

  // Item 56
  {
    id: 'psad-apr2025-q56',
    number: 56,
    pageNumber: 431,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - NSCP Moment Coefficients',
    text: 'Situation 19 — 56. Compute the moment at $E$ (kN·m) in beam $DE$.',
    options: [
      { label: 'A', text: '82.7' },
      { label: 'B', text: '58.9' },
      { label: 'C', text: '72.3' },
      { label: 'D', text: '51.5' },
    ],
    ...solved(56, 'D', '51.5 kN·m (Option D)'),
  },

  // Item 57
  {
    id: 'psad-apr2025-q57',
    number: 57,
    pageNumber: 431,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - NSCP Moment Coefficients',
    text: 'Situation 19 — 57. Compute the moment at $F$ (kN·m).',
    options: [
      { label: 'A', text: '55.1' },
      { label: 'B', text: '77.4' },
      { label: 'C', text: '63' },
      { label: 'D', text: '88.4' },
    ],
    ...solved(57, 'C', '63 kN·m (Option C)'),
  },

  // Item 58
  {
    id: 'psad-apr2025-q58',
    number: 58,
    pageNumber: 432,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - One-Way Slab Design',
    text: 'Situation 20 — Given the following data of a one-way slab:\n\nSlab thickness, $h = 110$ mm; Effective cover to reinforcement $= 20$ mm; Bar diameter at support: 12 mm spaced at 120 mm o.c.; Bar diameter at midspan: 12 mm spaced at 200 mm o.c.; Concrete strength, $f\'_c = 27.5$ MPa; Steel strength, $f_y = 275$ MPa. Consider 1 m width of slab.\n\n58. Determine the design moment (kN·m) at support.',
    options: [
      { label: 'A', text: '20.3' },
      { label: 'B', text: '23.2' },
      { label: 'C', text: '25.8' },
      { label: 'D', text: '18.3' },
    ],
    ...solved(58, 'D', '18.3 kN·m (Option D)'),
  },

  // Item 59
  {
    id: 'psad-apr2025-q59',
    number: 59,
    pageNumber: 432,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - One-Way Slab Design',
    text: 'Situation 20 — 59. Determine the design moment (kN·m) at midspan.',
    options: [
      { label: 'A', text: '18.4' },
      { label: 'B', text: '16.6' },
      { label: 'C', text: '11.3' },
      { label: 'D', text: '12.5' },
    ],
    ...solved(59, 'C', '11.3 kN·m (Option C)'),
  },

  // Item 60
  {
    id: 'psad-apr2025-q60',
    number: 60,
    pageNumber: 432,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Reinforced Concrete - One-Way Slab Design',
    text: 'Situation 20 — 60. If the 12 mm slab reinforcement is spaced at 200 mm o.c., what is the required spacing if 10 mm bar is used?',
    options: [
      { label: 'A', text: '121' },
      { label: 'B', text: '165' },
      { label: 'C', text: '158' },
      { label: 'D', text: '139' },
    ],
    ...solved(60, 'D', '139 mm (Option D)'),
  },
];
