import { Question } from '../../../types/exam';
import {
  besaNov2025Figure,
  besaNov2025SolutionImages,
} from '../../besaNov2025Images';

/** Worked-solution item: no choices, scanned solution revealed on demand. */
const worked = (key: string, page: number, pageEnd: number, answer: string) => ({
  options: [] as Question['options'],
  correctAnswer: 'A' as const,
  workedSolution: true,
  solution: {
    summary: '',
    steps: [],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: besaNov2025SolutionImages(key),
  },
});

const figure = (key: string) => besaNov2025Figure(key);

/** Situation 1 — strutted sheet piles driven into a stiff clay layer. */
const SITUATION_1 =
  '**Situation 1** — To minimize the deflection of sheet piles due to soil pressure, struts are used. ' +
  'The sheet piles are considered fixed at C.\n\n' +
  'Given:\n' +
  '$F = 110$ kN/m   $H_3 = 1.5$ m\n' +
  '$H_1 = 8$ m   $H_4 = 3.6$ m\n' +
  '$H_2 = 0.7$ m\n\n' +
  'Properties of the sheet piles:\n' +
  'Moment of inertia $I_x = 53 \\times 10^6$ mm$^4$\n' +
  'Section modulus $S_x = 0.56 \\times 10^6$ mm$^3$\n' +
  'Modulus of elasticity, $E = 200$ GPa\n' +
  'Effective width of sheet pile $= 0.40$ m\n\n' +
  'Neglect passive earth pressure at the toe.';

/** Situation 2 — solid steel shaft fixed at both ends under an applied torque. */
const SITUATION_2 =
  '**Situation 2** — A torque $T_1$ is applied to a solid steel shaft which is fixed at the ends.\n\n' +
  'Given: $a = 4$ m   $b = 3$ m\n' +
  'Modulus of rigidity, $G = 83$ GPa\n\n' +
  'Shaft polar moment of inertia $= \\dfrac{\\pi d^4}{32}$\n\n' +
  'Angle of twist: $\\theta = \\dfrac{TL}{JG}$\n\n' +
  '$T = 40$ kN·m (torque)\n' +
  'Diameter of shaft $= 50$ mm';

/** Situation 3 — butt splice with A-325 bolts in double shear. */
const SITUATION_3 =
  '**Situation 3** — A butt splice for a tension member consists of plates with thickness ' +
  '$t_1 = 16$ mm and splice plates with thickness $t_2 = 12$ mm. They are connected using ' +
  'A-325 bolts with allowable stresses as follows:\n\n' +
  'Bolt shear stress, $F_v = 120$ MPa\n' +
  'Bolt bearing stress, $F_p = 480$ MPa\n' +
  'Plate shear stress on the net area $= 120$ MPa\n\n' +
  'Dimensions:\n' +
  '$S_1 = 50$ mm   $S_3 = 38$ mm\n' +
  '$S_2 = 100$ mm   $S_4 = 76$ mm\n' +
  'Gap between plates $= 10$ mm';

/** Situation 4 — rectangular tied column under biaxial factored shear. */
const SITUATION_4 =
  '**Situation 4** — A rectangular tied column is reinforced with 8 – 25 mm diameter bars equally ' +
  'distributed along all sides. Lateral ties is 12 mm diameter bars.\n\n' +
  'Given: $b \\times h = 400$ mm $\\times$ 600 mm\n' +
  "Concrete, $f'_c = 28$ MPa\n" +
  'Reinforcing steel:\n' +
  '  Main reinforcement, $f_{yL} = 413$ MPa\n' +
  '  Lateral ties, $f_{yv} = 275$ MPa\n' +
  'Modulus of elasticity of steel, $E_s = 200$ GPa\n' +
  'Clear concrete cover to ties $= 40$ mm\n\n' +
  'The nominal axial load strength of a column at zero eccentricity:\n' +
  "$P_0 = 0.85\\,f'_c\\,(A_g - A_s\\,t) + f_y\\,A_s\\,t$\n" +
  'The nominal strength $P_n = 0.80\\,P_0$\n\n' +
  'Column shear strength:\n' +
  "$V_c = 0.17\\sqrt{f'_c}\\,bd$\n" +
  '$V_s = \\dfrac{A_v\\,f_{yv}\\,d}{S}$\n\n' +
  'Strength reduction factor $= 0.75$';

/** Situation 5 — singly/doubly reinforced beam and its stirrup capacity. */
const SITUATION_5 =
  '**Situation 5** — A beam is designed using the following data:\n\n' +
  'Material strength:\n' +
  "Concrete: $f'_c = 30$ MPa\n" +
  'Reinforcing steel: $f_y$ (main reinforcement) $= 415$ MPa\n' +
  'Reinforcing steel: $f_{yv}$ (stirrups) $= 275$ MPa\n' +
  '$E_s = 200{,}000$ MPa\n\n' +
  'Dimensions:\n' +
  'Beam, $b \\times h = 300$ mm $\\times$ 450 mm\n' +
  'Effective concrete cover to the centroid of main reinforcement $= 80$ mm\n' +
  'Strength reduction factors:\n' +
  '  For moment $= 0.90$   For shear $= 0.75$\n' +
  'Balanced steel ratio $= 0.0308$\n' +
  'Allowable concrete shear stress $= 0.93$ MPa';

export const BESA_PSAD_NOV2025_PART1: Question[] = [
  // ── Situation 1 ────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q1',
    number: 1,
    pageNumber: 433,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Sheet Piles — Flexural Stress Without Struts',
    text:
      SITUATION_1 +
      '\n\n**a)** When struts are not used, the sheet piles are cantilever at C. ' +
      'Compute the resulting flexural stress (MPa) in each pile. Neglecting the struts.',
    figureSvg: figure('F01'),
    figureCaption: 'Sheet-pile elevation with strut and wales, fixed at the point of fixity C',
    ...worked('S01A', 433, 433, '$f = 283$ MPa'),
  },
  {
    id: 'psad-nov2025-besa-q2',
    number: 2,
    pageNumber: 434,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Sheet Piles — Moment at the Point of Fixity',
    text:
      SITUATION_1 +
      '\n\n**b)** When struts are used and are located at a distance $H_3$ from the top, ' +
      'solve the resulting moment (kN·m) per meter at the point of fixity at C.',
    figureSvg: figure('F01B'),
    figureCaption: 'Propped-cantilever deflection cases and the area-moment diagrams used in the solution',
    ...worked('S01B', 434, 434, '$M_C = 65.30$ kN·m'),
  },
  {
    id: 'psad-nov2025-besa-q3',
    number: 3,
    pageNumber: 434,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Sheet Piles — Strut Force for Zero Deflection',
    text:
      SITUATION_1 +
      '\n\n**c)** To prevent deflection at the free end A, what is the force (kN) developed in ' +
      'the strut? The struts are spaced at 3.0 m center to center.',
    figureSvg: figure('F01'),
    figureCaption: 'Sheet-pile elevation with strut and wales, fixed at the point of fixity C',
    ...worked('S01C', 434, 435, '$F = 132$ kN'),
  },

  // ── Situation 2 ────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q4',
    number: 4,
    pageNumber: 435,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Torsion — Shaft Fixed at Both Ends',
    text: SITUATION_2 + '\n\n**a)** What is the value of the resisting torque $T_1$ in kN·m?',
    figureSvg: figure('F02'),
    figureCaption: 'Solid steel shaft fixed at both ends with an applied torque T',
    ...worked('S02A', 435, 435, '$T_1 = 17.1$ kN·m'),
  },
  {
    id: 'psad-nov2025-besa-q5',
    number: 5,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Torsion — Angle of Twist Limitation',
    text:
      SITUATION_2 +
      '\n\n**b)** If $T = 40$ kN·m, what is the minimum diameter (mm) of the shaft that will ' +
      'not twist through more than 6°?',
    figureSvg: figure('F02'),
    figureCaption: 'Solid steel shaft fixed at both ends with an applied torque T',
    ...worked('S02B', 436, 436, '$d = 135$ mm'),
  },

  // ── Situation 3 ────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q6',
    number: 6,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Bolted Connections — Bolt Diameter in Double Shear',
    text:
      SITUATION_3 +
      '\n\n**a)** If the tensile force $T = 450$ kN, determine the bolt diameter in mm.',
    figureSvg: figure('F03'),
    figureCaption: 'Butt splice — plan and elevation with bolt spacing S1 to S4',
    ...worked('S03A', 436, 437, '$d = 18$ mm'),
  },
  {
    id: 'psad-nov2025-besa-q7',
    number: 7,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Bolted Connections — Bearing Capacity',
    text:
      SITUATION_3 +
      '\n\n**b)** Using 16 mm diameter bolts, how much tensile load $T$ (in kN) can the ' +
      'connection support based on bolt bearing capacity?',
    figureSvg: figure('F03'),
    figureCaption: 'Butt splice — plan and elevation with bolt spacing S1 to S4',
    ...worked('S03B', 437, 437, '$T = 983$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q8',
    number: 8,
    pageNumber: 436,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'Bolted Connections — Block Shear Strength',
    text:
      SITUATION_3 +
      '\n\n**c)** Using 16 mm diameter bolts, how much tensile load, $T$ (in kN) can the ' +
      'connection support based on block shear strength? Use 19 mm for the bolt hole diameter.',
    figureSvg: figure('F03'),
    figureCaption: 'Butt splice — plan and elevation with bolt spacing S1 to S4',
    ...worked('S03C', 437, 437, '$T = 553$ kN'),
  },

  // ── Situation 4 ────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q9',
    number: 9,
    pageNumber: 438,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'RC Column — Factored Shear Along x',
    text:
      SITUATION_4 +
      '\n\n**a)** Solve for the factored shear force $V_{ux}$ (kN) which the column can be ' +
      'subjected to the nominal shear strength provided by the ties $= 375$ kN.',
    figureSvg: figure('F04'),
    figureCaption: 'Tied column section with factored shears Vux and Vuy',
    ...worked('S04A', 438, 438, '$V_{ux} = 426$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q10',
    number: 10,
    pageNumber: 438,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'RC Column — Factored Shear Along y',
    text:
      SITUATION_4 +
      '\n\n**b)** Determine the permissible factored shear force $V_{uy}$ (in kN) if the ' +
      'lateral ties are spaced at 110 mm center to center.',
    figureSvg: figure('F04'),
    figureCaption: 'Tied column section with factored shears Vux and Vuy',
    ...worked('S04B', 438, 439, '$V_{uy} = 349$ kN'),
  },
  {
    id: 'psad-nov2025-besa-q11',
    number: 11,
    pageNumber: 439,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'RC Column — Factored Shear with 12 mm Ties',
    text:
      SITUATION_4 +
      '\n\n**c)** Determine the permissible factored shear force, $V_{ux}$ (kN) if the ' +
      'lateral ties are spaced at 110 mm center to center.',
    figureSvg: figure('F04'),
    figureCaption: 'Tied column section with factored shears Vux and Vuy',
    ...worked('S04C', 439, 439, '$V_{ux} = 485$ kN'),
  },

  // ── Situation 5 ────────────────────────────────────────────────────────────
  {
    id: 'psad-nov2025-besa-q12',
    number: 12,
    pageNumber: 439,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'RC Beam — Ultimate Moment, Tension Only',
    text:
      SITUATION_5 +
      '\n\n**a)** For negative moment, the beam reinforcements are:\n' +
      '4 – 25 mm ø top bars\n2 – 25 mm ø bottom bars\n\n' +
      'Determine the ultimate moment capacity of the beam in (kN·m).',
    ...worked('S05A', 440, 440, '$M_u = 232$ kN·m'),
  },
  {
    id: 'psad-nov2025-besa-q13',
    number: 13,
    pageNumber: 439,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'RC Beam — Ultimate Moment, Doubly Reinforced',
    text:
      SITUATION_5 +
      '\n\n**b)** Find the ultimate moment capacity (kN·m) of the beam if the reinforcements ' +
      'for negative moment consist of the following:\n' +
      '6 – 25 mm diameter top bars\n4 – 25 mm diameter bottom bars',
    ...worked('S05B', 440, 442, '$M_u = 339$ kN·m'),
  },
  {
    id: 'psad-nov2025-besa-q14',
    number: 14,
    pageNumber: 440,
    subject: 'PSAD',
    year: 2025,
    month: 'November',
    category: 'RC Beam — Ultimate Shear Capacity of Stirrups',
    text:
      SITUATION_5 +
      '\n\n**c)** The stirrups consists of 2 legs of 12 mm diameter bars spaced at 110 mm ' +
      'on center. Compute the ultimate shear capacity (kN) of the beam.',
    ...worked('S05C', 442, 442, '$V_u = 234.35$ kN'),
  },
];
