import { Question } from '../../../types/exam';
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
    options: [
      { label: 'A', text: '734 kN' },
      { label: 'B', text: '749 kN' },
      { label: 'C', text: '652 kN' },
      { label: 'D', text: '824 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Block shear adds the tension rupture on the net tension area to the shear rupture on the net shear area.',
      formulas: [
        'P = 0.5F_u A_t + 0.3F_u A_v',
        'A_v = [5(50) - 2.5(27)](12)(2) = 4380\\ \\text{mm}^2',
        'A_t = 1042\\ \\text{mm}^2',
      ],
      steps: [
        'Step 1: Shear area across the five bolt spaces on both webs: $A_v = [5(50) - 2.5(27)](12)(2) = 4380\\ \\text{mm}^2$.',
        'Step 2: Tension area through the two lines of bolts: $A_t = 1042\\ \\text{mm}^2$.',
        'Step 3: $P = 0.5(400)(1042) + 0.3(400)(4380) = 208{,}400 + 525{,}600$.',
        'Step 4: $P = 734{,}000\\ \\text{N} = 734\\ \\text{kN}$.',
      ],
      finalAnswer: '734 kN (Option A)',
    },
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
    options: [
      { label: 'A', text: '232 kN' },
      { label: 'B', text: '112 kN' },
      { label: 'C', text: '224 kN' },
      { label: 'D', text: '116 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Gross-area yielding is checked on both angles, since the member is a pair.',
      formulas: ['P = F_t A_g \\times 2'],
      steps: [
        'Step 1: $F_t = 0.6F_y = 0.6(250) = 150\\ \\text{MPa}$.',
        'Step 2: One angle gives $150(774) = 116.1\\ \\text{kN}$.',
        'Step 3: Two angles: $P = 2(116.1) = 232.2\\ \\text{kN}$.',
      ],
      finalAnswer: '232 kN (Option A)',
    },
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
    options: [
      { label: 'A', text: '221 mm' },
      { label: 'B', text: '68 mm' },
      { label: 'C', text: '153 mm' },
      { label: 'D', text: '142 mm' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Total weld length comes from the throat-area check; the two runs are then split in inverse proportion to their distances from the centroid.',
      formulas: [
        'P = F_{vw}(0.707t)L',
        'L_1\\bar{x} = L_2(75 - \\bar{x})',
      ],
      steps: [
        'Step 1: $116{,}100 = 124(0.707)(6)L \\Rightarrow L = 220.72\\ \\text{mm}$ total.',
        'Step 2: $L_1(23) = L_2(75 - 23) \\Rightarrow L_1 = 2.2609L_2$.',
        'Step 3: $2.2609L_2 + L_2 = 220.72 \\Rightarrow L_2 = 67.7\\ \\text{mm}$.',
        'Step 4: $L_1 = 153.03\\ \\text{mm}$, use $153\\ \\text{mm}$.',
      ],
      finalAnswer: '153 mm (Option C)',
    },
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
    options: [
      { label: 'A', text: '106 mm' },
      { label: 'B', text: '153 mm' },
      { label: 'C', text: '86 mm' },
      { label: 'D', text: '68 mm' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The shorter weld run sits on the side nearer the centroid.',
      formulas: ['L_2 = \\dfrac{220.72}{1 + 2.2609}'],
      steps: [
        'Step 1: Total weld $L = 220.72\\ \\text{mm}$ and $L_1 = 2.2609L_2$.',
        'Step 2: $L_2 = 220.72/3.2609 = 67.7\\ \\text{mm}$, use $68\\ \\text{mm}$.',
      ],
      finalAnswer: '68 mm (Option D)',
    },
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
    options: [
      { label: 'A', text: '3.56 mm' },
      { label: 'B', text: '3.12 mm' },
      { label: 'C', text: '4.21 mm' },
      { label: 'D', text: '5.63 mm' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'With the load at the centroid there is no torsion, so the weld is sized on direct shear alone.',
      formulas: [
        'L = 250 + 125(2) = 500\\ \\text{mm}',
        'P = F_{vw}(0.707t_w)L',
      ],
      steps: [
        'Step 1: Total weld length $= 250 + 2(125) = 500\\ \\text{mm}$.',
        'Step 2: $160{,}000 = 145(0.707)t_w(500)$.',
        'Step 3: $t_w = 160{,}000/51{,}257.5 = 3.12\\ \\text{mm}$.',
      ],
      finalAnswer: '3.12 mm (Option B)',
    },
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
    options: [
      { label: 'A', text: '8.23 × 10⁶ mm³' },
      { label: 'B', text: '7.52 × 10⁶ mm³' },
      { label: 'C', text: '7.12 × 10⁶ mm³' },
      { label: 'D', text: '6.02 × 10⁶ mm³' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply the parallel-axis theorem to the three weld runs about the group centroid.',
      formulas: [
        '\\bar{x} = \\dfrac{2(125)(125/2) + 250(0)}{500} = 31.25\\ \\text{mm}',
        'J = \\sum\\left[\\dfrac{L^3}{12} + L(\\bar{x}^2 + \\bar{y}^2)\\right]',
      ],
      steps: [
        'Step 1: Group centroid $\\bar{x} = 31.25\\ \\text{mm}$ from the vertical weld, so $x_2 = 125/2 - 31.25 = 31.25\\ \\text{mm}$.',
        'Step 2: Vertical run: $250^3/12 + 250(31.25^2) = 1{,}302{,}083 + 244{,}141$.',
        'Step 3: Two horizontal runs: $2\\left[125^3/12 + 125(31.25^2 + 125^2)\\right] = 2(162{,}760 + 2{,}075{,}195)$.',
        'Step 4: $J = 6.022 \\times 10^6\\ \\text{mm}^4/\\text{mm}$ (unit polar moment of inertia).',
      ],
      finalAnswer: '6.02 × 10⁶ mm³ (Option D)',
    },
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
    options: [
      { label: 'A', text: '145.8 kN' },
      { label: 'B', text: '137.9 kN' },
      { label: 'C', text: '124.3 kN' },
      { label: 'D', text: '169.6 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'At the critical corner the direct shear and the torsional shear combine vectorially and must not exceed the throat capacity.',
      formulas: [
        'R_{T1y} = \\dfrac{218.75P(93.75)}{6.022 \\times 10^6} = 0.00341P',
        'R_{T1x} = \\dfrac{218.75P(125)}{6.022 \\times 10^6} = 0.00454P',
        'R_1 = \\sqrt{R_{T1x}^2 + (R_{T1y} + R_{Py})^2}',
      ],
      steps: [
        'Step 1: Torque $T = P(250 - 31.25) = 218.75P$.',
        'Step 2: Direct shear per mm $= P/500 = 0.002P$.',
        'Step 3: Torsional components at corner 1: $0.00341P$ and $0.00454P$.',
        'Step 4: Throat capacity $= 145(0.707)(9.5)(1) = 973.89\\ \\text{N/mm}$.',
        'Step 5: $973.89 = P\\sqrt{0.00454^2 + (0.00341 + 0.002)^2} = 0.007063P \\Rightarrow P = 137.9\\ \\text{kN}$.',
      ],
      finalAnswer: '137.9 kN (Option B)',
    },
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
    options: [
      { label: 'A', text: '94.2' },
      { label: 'B', text: '31.4' },
      { label: 'C', text: '47.1' },
      { label: 'D', text: '52.6' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The box section is built from two flange plates 300 × 16 and two web plates 300 × 16 spaced to a 332 mm overall depth.',
      formulas: [
        'A = 4(300 \\times 16) = 19{,}200\\ \\text{mm}^2',
        'I_x = \\dfrac{300(332)^3 - 268(300)^3}{12} = 311.859 \\times 10^6\\ \\text{mm}^4',
        '\\dfrac{KL}{r_x} = \\dfrac{1(12{,}000)}{127.447}',
      ],
      steps: [
        'Step 1: $A = 19{,}200\\ \\text{mm}^2$.',
        'Step 2: $I_x = 311.859 \\times 10^6\\ \\text{mm}^4$.',
        'Step 3: $r_x = \\sqrt{311.859 \\times 10^6/19{,}200} = 127.447\\ \\text{mm}$.',
        'Step 4: About x the full 12 m is unbraced: $KL/r_x = 12{,}000/127.447 = 94.157$.',
      ],
      finalAnswer: '94.2 (Option A)',
    },
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
    options: [
      { label: 'A', text: '34' },
      { label: 'B', text: '68' },
      { label: 'C', text: '102' },
      { label: 'D', text: '56' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'About y the column is braced at L/3, so the unbraced length drops to 4 m.',
      formulas: [
        'I_y = \\dfrac{332(300)^3 - 300(268)^3}{12} = 265.779 \\times 10^6\\ \\text{mm}^4',
        '\\dfrac{KL}{r_y} = \\dfrac{1(4000)}{117.655}',
      ],
      steps: [
        'Step 1: $I_y = 265.779 \\times 10^6\\ \\text{mm}^4$.',
        'Step 2: $r_y = \\sqrt{265.779 \\times 10^6/19{,}200} = 117.655\\ \\text{mm}$.',
        'Step 3: $L_y = L/3 = 4000\\ \\text{mm}$.',
        'Step 4: $KL/r_y = 4000/117.655 = 33.998$.',
      ],
      finalAnswer: '34 (Option A)',
    },
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
    options: [
      { label: 'A', text: '1963 kN' },
      { label: 'B', text: '1547 kN' },
      { label: 'C', text: '1813 kN' },
      { label: 'D', text: '2015 kN' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The governing slenderness is 94.157 about x; the AISC allowable stress follows from the parabolic formula with a factor of safety of 1.895.',
      formulas: [
        'C_c = \\sqrt{\\dfrac{2\\pi^2E}{F_y}} = \\sqrt{\\dfrac{2\\pi^2(200{,}000)}{248}} = 126.17',
        'F_a = \\dfrac{\\left[1 - \\dfrac{(KL/r)^2}{2C_c^2}\\right]F_y}{FS} = 94.45\\ \\text{MPa}',
      ],
      steps: [
        'Step 1: $C_c = 126.17$; since $KL/r = 94.157 < C_c$ the parabolic formula applies.',
        'Step 2: $FS = \\dfrac{5}{3} + \\dfrac{3(94.157)}{8(126.17)} - \\dfrac{(94.157)^3}{8(126.17)^3} = 1.895$.',
        'Step 3: $F_a = 94.45\\ \\text{MPa}$.',
        'Step 4: $P = 94.45(19{,}200) = 1{,}813{,}400\\ \\text{N} = 1813\\ \\text{kN}$.',
      ],
      finalAnswer: '1813 kN (Option C)',
    },
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
    options: [
      { label: 'A', text: '57.97 kN-m' },
      { label: 'B', text: '42.94 kN-m' },
      { label: 'C', text: '58.93 kN-m' },
      { label: 'D', text: '66.48 kN-m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Transform the void into an equivalent negative area, find the centroid and second moment, then use the modulus of rupture.',
      formulas: [
        'A = 162{,}328.54\\ \\text{mm}^2,\\quad \\bar{y} = 318.48\\ \\text{mm},\\quad I = 5319.71 \\times 10^6\\ \\text{mm}^4',
        'f_r = \\text{smaller of } 0.7\\sqrt{f\u2019_c} \\text{ and } 0.7 \\times 1.8f_{ct} = 3.528\\ \\text{MPa}',
        'M_{cr} = \\dfrac{f_r I}{y_t}',
      ],
      steps: [
        'Step 1: $0.7\\sqrt{28} = 3.704\\ \\text{MPa}$; $0.7(1.8)(2.8) = 3.528\\ \\text{MPa}$ — the smaller governs, $f_r = 3.528\\ \\text{MPa}$.',
        'Step 2: Section properties give $A = 162{,}328.54\\ \\text{mm}^2$, $y_t = 318.48\\ \\text{mm}$, $I = 5319.71 \\times 10^6\\ \\text{mm}^4$.',
        'Step 3: $M_{cr} = 3.528(5319.71 \\times 10^6)/318.48 = 58.93 \\times 10^6\\ \\text{N}\\cdot\\text{mm}$.',
        'Step 4: $M_{cr} = 58.93\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '58.93 kN-m (Option C)',
    },
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
    options: [
      { label: 'A', text: '3.12 MPa' },
      { label: 'B', text: '3.08 MPa' },
      { label: 'C', text: '2.60 MPa' },
      { label: 'D', text: '3.34 MPa' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The same cracking moment produces a linear stress gradient; the compression fibre is 600 − 318.48 mm from the neutral axis.',
      formulas: ['f_c = \\dfrac{M_{cr} y_b}{I}'],
      steps: [
        'Step 1: Distance to the compression fibre $= 600 - 318.48 = 281.52\\ \\text{mm}$.',
        'Step 2: $f_c = 58.929 \\times 10^6(281.52)/5319.71 \\times 10^6$.',
        'Step 3: $f_c = 3.119\\ \\text{MPa}$.',
      ],
      finalAnswer: '3.12 MPa (Option A)',
    },
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
    options: [
      { label: 'A', text: '9.32 kN/m' },
      { label: 'B', text: '10.52 kN/m' },
      { label: 'C', text: '6.37 kN/m' },
      { label: 'D', text: '9.20 kN/m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Subtract the moment caused by the beam\u2019s own weight from the cracking moment, then convert the balance to a uniform load.',
      formulas: [
        'w_b = 24(162{,}328.54 \\times 10^{-6}) = 3.896\\ \\text{kN/m}',
        'M_b = \\dfrac{w_b L^2}{8},\\quad M_{add} = M_{cr} - M_b',
        'w_{add} = \\dfrac{8M_{add}}{L^2}',
      ],
      steps: [
        'Step 1: Self weight $w_b = 24(0.162329) = 3.896\\ \\text{kN/m}$.',
        'Step 2: $M_b = 3.896(6)^2/8 = 17.531\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 3: $M_{add} = 58.93 - 17.531 = 41.399\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 4: $w_{add} = 8(41.399)/36 = 9.2\\ \\text{kN/m}$.',
      ],
      finalAnswer: '9.20 kN/m (Option D)',
    },
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
    options: [
      { label: 'A', text: '189.7 kN-m' },
      { label: 'B', text: '214.8 kN-m' },
      { label: 'C', text: '232.8 kN-m' },
      { label: 'D', text: '247.5 kN-m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'At the support the top steel is in tension; solve the strain compatibility equation for c, confirm both steel assumptions, then take moments about the tension steel.',
      formulas: [
        'T = C_c + C\u2019_s',
        'A_s f_y = 0.85f\u2019_c(\\beta_1 c)b + A\u2019_s(600)\\dfrac{c - d\u2019}{c}',
        'M_n = C_c(d - a/2) + C\u2019_s(d - d\u2019)',
      ],
      steps: [
        'Step 1: $A_s = 8(\\pi/4)(20)^2 = 2513\\ \\text{mm}^2$ (top, in tension); $A\u2019_s = 4(\\pi/4)(28)^2 = 2463\\ \\text{mm}^2$ (bottom, in compression).',
        'Step 2: $d = 350 - 65 = 285\\ \\text{mm}$, $d\u2019 = 60\\ \\text{mm}$, $b = 320\\ \\text{mm}$, $\\beta_1 = 0.85$.',
        'Step 3: $2513(415) = 0.85(28)(0.85c)(320) + 2463(600)(c - 60)/c$ gives $c = 88.17\\ \\text{mm}$.',
        'Step 4: Check: $f\u2019_s = 600(88.17 - 60)/88.17 = 191.72\\ \\text{MPa} < f_y$ (OK); $f_s = 600(285 - 88.17)/88.17 = 1339\\ \\text{MPa} > f_y$ (OK).',
        'Step 5: $a = 0.85(88.17) = 74.95\\ \\text{mm}$.',
        'Step 6: $M_n = 0.85(28)(74.95)(320)(285 - 37.475) + 2463(191.72)(285 - 60) = 247.535\\ \\text{kN}\\cdot\\text{m}$.',
      ],
      finalAnswer: '247.5 kN-m (Option D)',
    },
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
    options: [
      { label: 'A', text: '54.4 kN/m' },
      { label: 'B', text: '62 kN/m' },
      { label: 'C', text: '71 kN/m' },
      { label: 'D', text: '47.4 kN/m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The support moment governs; the NSCP negative-moment coefficient for the exterior face of the first interior support is wL²/9 with the clear span.',
      formulas: [
        'L_n = 6 - 0.4 = 5.6\\ \\text{m}',
        '\\phi M_n = \\dfrac{w_u L_n^2}{9}',
      ],
      steps: [
        'Step 1: Design strength $\\phi M_n = 0.90(247.535) = 222.781\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 2: Clear span $L_n = 6 - 0.4 = 5.6\\ \\text{m}$.',
        'Step 3: $222.781 = w_u(5.6)^2/9$.',
        'Step 4: $w_u = 71.04\\ \\text{kN/m}$.',
      ],
      finalAnswer: '71 kN/m (Option C)',
    },
  },
];
