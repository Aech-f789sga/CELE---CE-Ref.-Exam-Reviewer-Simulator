import { Question } from '../../../types/exam';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART2: Question[] = [
  // Item 16
  {
    id: 'psad-may2015-q16',
    number: 16,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Frames under Wind Load',
    text: 'Situation 4 (continued) – Determine the total horizontal force acting on the frame.',
    options: [
      { label: 'A', text: '68.3 kN' },
      { label: 'B', text: '54.9 kN' },
      { label: 'C', text: '49.6 kN' },
      { label: 'D', text: '64.8 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The horizontal reactions at the two supports must balance the net horizontal wind thrust on both faces.',
      formulas: [
        'F_H = P_1 + P_4 - P_{2H} + P_{3H}',
        'F_H = 41.472 + 20.736 - 2.592 + 5.184',
      ],
      steps: [
        'Step 1: Windward wall $P_1 = 41.472\\ \\text{kN}$ pushes to the right.',
        'Step 2: Leeward wall $P_4 = 20.736\\ \\text{kN}$ pushes to the right.',
        'Step 3: Windward roof $P_{2H} = 2.592\\ \\text{kN}$ acts to the left.',
        'Step 4: Leeward roof $P_{3H} = 5.184\\ \\text{kN}$ acts to the right.',
        'Step 5: $F_H = 41.472 + 20.736 - 2.592 + 5.184 = 64.8\\ \\text{kN}$.',
      ],
      finalAnswer: '64.8 kN (Option D)',
    },
  },

  // Item 17
  {
    id: 'psad-may2015-q17',
    number: 17,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 5 – For the plane truss shown in the figure, a = 3 m, b = 2.25 m, h = 3 m, $P_1$ = 1 kN, $P_2$ = 3 kN, $P_3$ = 3 kN, and $P_4$ = 1.5 kN. The diagonal members CF, BG, DG, and CH are cables. What is the force in member BF?',
    figureSvg: psadMay2015Figure(
      5,
      'Figure 5: Plane truss on span 2a + 2b with top chord F-G-H at height h, bottom chord A-B-C-D-E, cable diagonals CF, BG, DG and CH, and loads P1 to P4.',
    ),
    figureCaption:
      'Figure 5: Plane truss for Situations 5 and 6, with cable diagonals (Situation 5).',
    options: [
      { label: 'A', text: '5.2 kN' },
      { label: 'B', text: '5.0 kN' },
      { label: 'C', text: '4.5 kN' },
      { label: 'D', text: '4.7 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Get the reaction at B from a moment equation about E, then read member BF directly at joint B — the cable BG drops out because a cable cannot push.',
      formulas: [
        '\\sum M_E = 0:\\ B_y(7.5) - 1(10.5) - 3(4.5) - 3(2.25) - 1.5(3) = 0',
      ],
      steps: [
        'Step 1: Span $= 2a + 2b = 6 + 4.5 = 10.5\\ \\text{m}$; B sits at $x = 3\\ \\text{m}$, so its lever arm about E is $7.5\\ \\text{m}$.',
        'Step 2: $B_y(7.5) = 10.5 + 13.5 + 6.75 + 4.5 = 35.25 \\Rightarrow B_y = 4.7\\ \\text{kN}$.',
        'Step 3: At joint B the only members are AB, BC, BF (vertical) and the cable BG. A cable can only pull, so the required 3.7 kN of downward force from BG cannot be supplied — $F_{BG} = 0$.',
        'Step 4: Vertical equilibrium at B: $F_{BF} = B_y = 4.7\\ \\text{kN}$ (compression).',
      ],
      finalAnswer: '4.7 kN (Option D)',
    },
  },

  // Item 18
  {
    id: 'psad-may2015-q18',
    number: 18,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 5 (continued) – What is the force in member DG?',
    options: [
      { label: 'A', text: '0.925 kN' },
      { label: 'B', text: '0.825 kN' },
      { label: 'C', text: '0.875 kN' },
      { label: 'D', text: '0.725 kN' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'A vertical section through the right panel isolates the vertical component of cable DG; the other cable cut by the section carries nothing.',
      formulas: [
        '\\tan\\alpha = \\dfrac{3}{2.25} \\Rightarrow \\alpha = 53.13°',
        'F_{DG}\\sin\\alpha = 0.7',
      ],
      steps: [
        'Step 1: Panel b = 2.25 m wide, height h = 3 m, so $\\alpha = \\arctan(3/2.25) = 53.13°$ and $\\sin\\alpha = 0.8$.',
        'Step 2: On section y-y, cable CH is the other diagonal cut. The net vertical force required there is 0.7 kN, which CH would have to push — impossible for a cable, so $F_{CH} = 0$.',
        'Step 3: All of it goes into DG: $F_{DG}\\sin 53.13° = 0.7$.',
        'Step 4: $F_{DG} = 0.7/0.8 = 0.875\\ \\text{kN}$ (tension).',
      ],
      finalAnswer: '0.875 kN (Option C)',
    },
  },

  // Item 19
  {
    id: 'psad-may2015-q19',
    number: 19,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 5 (continued) – What is the force in member DH?',
    options: [
      { label: 'A', text: '2.3 kN' },
      { label: 'B', text: '2.5 kN' },
      { label: 'C', text: '2.1 kN' },
      { label: 'D', text: '3.25 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Joint D carries the 3 kN load, the vertical member DH and the vertical component of cable DG.',
      formulas: ['F_{DH} + F_{DG}\\sin\\alpha = 3'],
      steps: [
        'Step 1: Joint D has the applied load $P_3 = 3\\ \\text{kN}$ downward.',
        'Step 2: Cable DG contributes an upward vertical component $0.875\\sin 53.13° = 0.7\\ \\text{kN}$.',
        'Step 3: $F_{DH} = 3 - 0.7 = 2.3\\ \\text{kN}$ (tension).',
      ],
      finalAnswer: '2.3 kN (Option A)',
    },
  },

  // Item 20
  {
    id: 'psad-may2015-q20',
    number: 20,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 6 – For the plane truss shown in the figure, a = 3 m, b = 2.25 m, h = 3 m, $P_1$ = 1 kN, $P_2$ = 0 kN, $P_3$ = 0 kN, and $P_4$ = 1.5 kN. The diagonal members CF, BG, DG, and CH are cables. What is the force in member AF?',
    figureSvg: psadMay2015Figure(
      6,
      'Figure 6: The same plane truss as Figure 5, now loaded only with P1 = 1 kN at A and the horizontal P4 = 1.5 kN at H.',
    ),
    figureCaption:
      'Figure 6: Plane truss loaded with P₁ = 1 kN at A and P₄ = 1.5 kN at H (Situation 6).',
    options: [
      { label: 'A', text: '1.414 kN' },
      { label: 'B', text: '1 kN' },
      { label: 'C', text: '1.325 kN' },
      { label: 'D', text: '1.25 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Joint A has only two members, so the vertical 1 kN load is carried entirely by the vertical component of the end diagonal.',
      formulas: ['F_{AF}\\sin 45° = 1'],
      steps: [
        'Step 1: Panel a = 3 m wide and h = 3 m high, so member AF makes 45° with the horizontal.',
        'Step 2: $\\sum F_y = 0$ at A: $F_{AF}\\sin 45° = P_1 = 1$.',
        'Step 3: $F_{AF} = 1/\\sin 45° = 1.414\\ \\text{kN}$ (compression).',
      ],
      finalAnswer: '1.414 kN (Option A)',
    },
  },

  // Item 21
  {
    id: 'psad-may2015-q21',
    number: 21,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 6 (continued) – What is the force in member DG?',
    options: [
      { label: 'A', text: '1 kN' },
      { label: 'B', text: '1.45 kN' },
      { label: 'C', text: '0.75 kN' },
      { label: 'D', text: '1.25 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'On the right-hand section the net vertical cable demand is 1 kN upward, and it all goes into DG because CH cannot push.',
      formulas: ['F_{DG}\\sin 53.13° = 1'],
      steps: [
        'Step 1: Section y-y cuts cables DG and CH. The required net vertical cable force is 1 kN upward.',
        'Step 2: A cable cannot push, so $F_{CH} = 0$.',
        'Step 3: $F_{DG}(0.8) = 1 \\Rightarrow F_{DG} = 1.25\\ \\text{kN}$ (tension).',
      ],
      finalAnswer: '1.25 kN (Option D)',
    },
  },

  // Item 22
  {
    id: 'psad-may2015-q22',
    number: 22,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Plane Truss with Cable Diagonals',
    text: 'Situation 6 (continued) – What is the force in member GH?',
    options: [
      { label: 'A', text: '1.45 kN' },
      { label: 'B', text: '0.75 kN' },
      { label: 'C', text: '1.25 kN' },
      { label: 'D', text: '1 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Take moments about joint D for the portion of the truss to the right of a cut through GH.',
      formulas: ['\\sum M_D = 0:\\ F_{GH}(3) + 1(2.25) = 1.5(3)'],
      steps: [
        'Step 1: The horizontal 1.5 kN at H acts 3 m above D, giving $1.5(3) = 4.5\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 2: The reaction at E is 1 kN downward, 2.25 m to the right of D: $1(2.25) = 2.25\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 3: Member GH acts at the 3 m height, lever arm 3 m.',
        'Step 4: $F_{GH}(3) = 4.5 - 2.25 = 2.25 \\Rightarrow F_{GH} = 0.75\\ \\text{kN}$ (compression).',
      ],
      finalAnswer: '0.75 kN (Option B)',
    },
  },

  // Item 23
  {
    id: 'psad-may2015-q23',
    number: 23,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Moving Loads on a Beam',
    text: 'Situation 7 – A truck with axle loads of $W_1$ = 19.6 kN and $W_2$ = 78.6 kN on a wheel base of d = 4.3 m rolls across the beam shown in the figure. Determine the following: The maximum positive moment that can be developed in the beam.',
    figureSvg: psadMay2015Figure(
      7,
      'Figure 7: Beam A-B-C on a 25 m span with B at 3 m from A, carrying two truck axle loads W1 and W2 spaced d = 4.3 m apart.',
    ),
    figureCaption:
      'Figure 7: Beam with overhang carrying the moving axle loads W₁ and W₂ (Situation 7).',
    options: [
      { label: 'A', text: '524.98 kN-m' },
      { label: 'B', text: '384.33 kN-m' },
      { label: 'C', text: '498.78 kN-m' },
      { label: 'D', text: '452.12 kN-m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The maximum positive moment in span BC occurs with both axles inside the span, under the resultant of the two loads.',
      formulas: [
        'M_{max} = \\dfrac{(PL - P_1 d)^2}{4PL}',
        'M_{max} = \\dfrac{[98.2(22) - 19.6(4.3)]^2}{4(98.2)(22)}',
      ],
      steps: [
        'Step 1: Span BC $= 22\\ \\text{m}$; the smaller load $P_1 = W_1 = 19.6\\ \\text{kN}$ leads.',
        'Step 2: Total load $P = 19.6 + 78.6 = 98.2\\ \\text{kN}$, wheel base $d = 4.3\\ \\text{m}$.',
        'Step 3: $PL - P_1 d = 98.2(22) - 19.6(4.3) = 2160.4 - 84.28 = 2076.12$.',
        'Step 4: $4PL = 4(98.2)(22) = 8641.6$.',
        'Step 5: $M_{max} = (2076.12)^2/8641.6 = 498.78\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '498.78 kN-m (Option C)',
    },
  },

  // Item 24
  {
    id: 'psad-may2015-q24',
    number: 24,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Moving Loads on a Beam',
    text: 'Situation 7 (continued) – The maximum negative moment that can be developed in the beam.',
    options: [
      { label: 'A', text: '58.8 kN-m' },
      { label: 'B', text: '204.4 kN-m' },
      { label: 'C', text: '235.8 kN-m' },
      { label: 'D', text: '263.2 kN-m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The largest negative moment at B occurs when the heavy axle sits over the 3 m overhang at A.',
      formulas: ['M_{max} = -W_2(3)'],
      steps: [
        'Step 1: The support B is 3 m from the free end A, so the overhang is 3 m.',
        'Step 2: Place the heavier axle $W_2 = 78.6\\ \\text{kN}$ at A.',
        'Step 3: $M_{max} = -78.6(3) = -235.8\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '235.8 kN-m (Option C)',
    },
  },

  // Item 25
  {
    id: 'psad-may2015-q25',
    number: 25,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Moving Loads on a Beam',
    text: 'Situation 7 (continued) – The maximum negative shear that can be developed in the beam.',
    options: [
      { label: 'A', text: '105.87 kN' },
      { label: 'B', text: '94.37 kN' },
      { label: 'C', text: '76.35 kN' },
      { label: 'D', text: '82.84 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Maximum shear at B is the reaction at C when the axles are placed as far right as the span allows.',
      formulas: ['\\sum M_B = 0:\\ R_C(22) = W_1(17.7) + W_2(22)'],
      steps: [
        'Step 1: Put $W_2$ at C and $W_1$ 4.3 m to its left, i.e. 17.7 m from B.',
        'Step 2: $R_C(22) = 19.6(17.7) + 78.6(22) = 346.92 + 1729.2 = 2076.12$.',
        'Step 3: $R_C = 94.369\\ \\text{kN}$.',
        'Step 4: The shear just left of C equals this reaction: $V_{max} = 94.37\\ \\text{kN}$.',
      ],
      finalAnswer: '94.37 kN (Option B)',
    },
  },

  // Item 26
  {
    id: 'psad-may2015-q26',
    number: 26,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 8 – The beam AB shown in the figure supports the load of w = 36 kN/m. The beam is fixed at B and simply supported at A. Length of beam AB is L = 8 m and height of column AC is H = 6 m. Determine the moment at B.',
    figureSvg: psadMay2015Figure(
      8,
      'Figure 8: Beam AB of length L carrying a uniform load w, fixed at B and propped at A by column AC of height H.',
    ),
    figureCaption:
      'Figure 8: Propped cantilever AB with column AC (Situation 8).',
    options: [
      { label: 'A', text: '-384 kN-m' },
      { label: 'B', text: '-288 kN-m' },
      { label: 'C', text: '-164.57 kN-m' },
      { label: 'D', text: '-460.8 kN-m' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'A propped cantilever under uniform load carries 3wL/8 at the prop; the fixed-end moment follows from statics.',
      formulas: [
        'R_A = \\dfrac{3wL}{8} = \\dfrac{3(36)(8)}{8}',
        'M_B = R_A L - \\dfrac{wL^2}{2}',
      ],
      steps: [
        'Step 1: $R_A = 3(36)(8)/8 = 108\\ \\text{kN}$.',
        'Step 2: $M_B = 108(8) - 36(8)^2/2$.',
        'Step 3: $M_B = 864 - 1152 = -288\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '-288 kN-m (Option B)',
    },
  },

  // Item 27
  {
    id: 'psad-may2015-q27',
    number: 27,
    pageNumber: 76,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 8 (continued) – Determine the location of the point of maximum moment from point A.',
    options: [
      { label: 'A', text: '3 m' },
      { label: 'B', text: '3.43 m' },
      { label: 'C', text: '2.67 m' },
      { label: 'D', text: '2.4 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Maximum moment is where the shear passes through zero, measured from the prop end.',
      formulas: ['R_A - wx = 0'],
      steps: [
        'Step 1: Shear at distance x from A: $V = R_A - wx$.',
        'Step 2: $108 - 36x = 0$.',
        'Step 3: $x = 3\\ \\text{m}$ from A.',
      ],
      finalAnswer: '3 m (Option A)',
    },
  },

  // Item 28
  {
    id: 'psad-may2015-q28',
    number: 28,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 8 (continued) – Determine the load of column AC.',
    options: [
      { label: 'A', text: '86.4 kN' },
      { label: 'B', text: '90 kN' },
      { label: 'C', text: '108 kN' },
      { label: 'D', text: '123.4 kN' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The column carries exactly the prop reaction at A.',
      formulas: ['P_{AC} = R_A = \\dfrac{3wL}{8}'],
      steps: [
        'Step 1: The column is the simple support at A, so its axial load is the reaction there.',
        'Step 2: $R_A = 3(36)(8)/8 = 108\\ \\text{kN}$.',
        'Step 3: $P_{AC} = 108\\ \\text{kN}$ (compression).',
      ],
      finalAnswer: '108 kN (Option C)',
    },
  },

  // Item 29
  {
    id: 'psad-may2015-q29',
    number: 29,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Cantilever Retaining Wall',
    text: 'Situation 9 – A 3-m-high cantilever retaining wall is acted on by an active force that varies uniformly from 3 kN/m at the top to 54 kN/m at the base. Assume that the flexural rigidity of the wall is constant. See figure above. Compute the maximum moment in the wall.',
    figureSvg: psadMay2015Figure(
      9,
      'Figure 9: Cantilever retaining wall 3 m high, fixed at the base A and free at the top B, loaded by a pressure varying from 3 kN/m at the top to 54 kN/m at the base.',
    ),
    figureCaption:
      'Figure 9: Cantilever wall under a linearly varying pressure, 3 kN/m at top to 54 kN/m at base (Situation 9).',
    options: [
      { label: 'A', text: '100 kN-m' },
      { label: 'B', text: '70 kN-m' },
      { label: 'C', text: '90 kN-m' },
      { label: 'D', text: '80 kN-m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Split the trapezoidal pressure into two triangles and take moments about the base.',
      formulas: [
        'M_A = \\frac{1}{2}(3)(3)\\left(\\frac{2}{3}\\right)(3) + \\frac{1}{2}(3)(54)\\left(\\frac{1}{3}\\right)(3)',
      ],
      steps: [
        'Step 1: Small triangle 3 kN/m at the top: $\\frac{1}{2}(3)(3) = 4.5\\ \\text{kN}$ acting $2\\ \\text{m}$ above the base.',
        'Step 2: Large triangle 54 kN/m at the base: $\\frac{1}{2}(3)(54) = 81\\ \\text{kN}$ acting $1\\ \\text{m}$ above the base.',
        'Step 3: $M_A = 4.5(2) + 81(1) = 9 + 81 = 90\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '90 kN-m (Option C)',
    },
  },

  // Item 30
  {
    id: 'psad-may2015-q30',
    number: 30,
    pageNumber: 77,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Propped Cantilever',
    text: 'Situation 9 (continued) – If the wall is simply supported at the top, compute the maximum moment in the wall.',
    options: [
      { label: 'A', text: '33.975 kN-m' },
      { label: 'B', text: '40.125 kN-m' },
      { label: 'C', text: '31.125 kN-m' },
      { label: 'D', text: '29.625 kN-m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Propping the top turns the wall into a propped cantilever; the base moment falls from 90 to 33.975 kN·m.',
      formulas: [
        'R_B = 18.675\\ \\text{kN}\\ (\\text{from } \\delta_B = 0)',
        'M_A = 18.675(3) - 3(3)(1.5) - \\frac{1}{2}(3)(51)(1)',
      ],
      steps: [
        'Step 1: Total moment about A from the pressure is 90 kN·m, so $M_A = 90 - 3R_B$.',
        'Step 2: Enforcing zero deflection at the top gives $R_B = 18.675\\ \\text{kN}$.',
        'Step 3: $M_A = 18.675(3) - 3(3)(1.5) - \\frac{1}{2}(3)(51)(1)$.',
        'Step 4: $M_A = 56.025 - 13.5 - 76.5 = -33.975\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '33.975 kN-m (Option A)',
    },
  },
];
