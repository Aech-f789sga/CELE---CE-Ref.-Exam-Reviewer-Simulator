import { Question } from '../../../types/exam';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART1: Question[] = [
  // Item 1
  {
    id: 'psad-may2015-q1',
    number: 1,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Material Properties',
    text: 'The material composition is the same but its mechanical properties are different in every direction.',
    options: [
      { label: 'A', text: 'isotropic material' },
      { label: 'B', text: 'orthotropic material' },
      { label: 'C', text: 'homogeneous material' },
      { label: 'D', text: 'elastic material' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Properties that vary with direction define anisotropy; the specific case of three mutually perpendicular planes of symmetry is orthotropy.',
      steps: [
        'Step 1: Isotropic means identical properties in all directions — the opposite of what is described.',
        'Step 2: Homogeneous refers to uniformity of composition from point to point, not direction.',
        'Step 3: Elastic refers to recovery of shape on unloading.',
        'Step 4: A material with the same composition but direction-dependent properties is orthotropic (e.g. wood, rolled steel plate).',
      ],
      finalAnswer: 'orthotropic material (Option B)',
    },
  },

  // Item 2
  {
    id: 'psad-may2015-q2',
    number: 2,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Material Properties',
    text: 'Refers to the tendency of solid materials to return to their original shape after being forces are applied on them. When the forces are removed, the object will return to its initial shape and size.',
    options: [
      { label: 'A', text: 'buckling' },
      { label: 'B', text: 'yielding' },
      { label: 'C', text: 'strain hardening' },
      { label: 'D', text: 'elasticity' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Full recovery of shape and size on removal of load is the definition of elastic behaviour.',
      steps: [
        'Step 1: Buckling is a instability failure of slender members under compression.',
        'Step 2: Yielding is permanent plastic deformation.',
        'Step 3: Strain hardening is the strength increase after yielding.',
        'Step 4: Recovery to the original shape and size is elasticity.',
      ],
      finalAnswer: 'elasticity (Option D)',
    },
  },

  // Item 3
  {
    id: 'psad-may2015-q3',
    number: 3,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Mechanics of Materials - Material Properties',
    text: 'Refers to the stress at which a material begins to deform plastically.',
    options: [
      { label: 'A', text: 'strain hardening' },
      { label: 'B', text: 'buckling' },
      { label: 'C', text: 'yielding' },
      { label: 'D', text: 'rapture' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The onset of permanent deformation is yielding, marked by the yield stress.',
      steps: [
        'Step 1: Up to the yield point the strain is recoverable.',
        'Step 2: Beyond it, deformation becomes plastic and permanent.',
        'Step 3: The stress at that transition is the yield stress — yielding.',
      ],
      finalAnswer: 'yielding (Option C)',
    },
  },

  // Item 4
  {
    id: 'psad-may2015-q4',
    number: 4,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Dynamics - Newton’s Second Law',
    text: 'A car is being towed up on an incline with an angle of 15° with the horizontal. Find the force (parallel to the incline) needed to pull the car with an acceleration of 1.2 m/s². The car weighs 20 kN. Neglect friction.',
    options: [
      { label: 'A', text: '5.18 kN' },
      { label: 'B', text: '8.36 kN' },
      { label: 'C', text: '2.45 kN' },
      { label: 'D', text: '7.62 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The towing force must overcome the component of weight along the slope and supply the accelerating force.',
      formulas: [
        'F = W\\sin\\theta + \\dfrac{W}{g}a',
        'F = 20\\sin 15° + \\dfrac{20}{9.81}(1.2)',
      ],
      steps: [
        'Step 1: Weight component along the incline $= 20\\sin 15° = 5.176\\ \\text{kN}$.',
        'Step 2: Mass $= 20/9.81 = 2.0387\\ \\text{t}$.',
        'Step 3: Accelerating force $= 2.0387(1.2) = 2.446\\ \\text{kN}$.',
        'Step 4: $F = 5.176 + 2.446 = 7.62\\ \\text{kN}$.',
      ],
      finalAnswer: '7.62 kN (Option D)',
    },
  },

  // Item 5
  {
    id: 'psad-may2015-q5',
    number: 5,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Frames and Machines',
    text: 'Situation 1 – The portable camping table shown in the Figure is to support a load P = 1500 N at a variable distance x from D. If x = 0.60 m, determine the following: The reaction at A.',
    figureSvg: psadMay2015Figure(
      1,
      'Figure 1: Portable camping table, 1.50 m between A and B, with load P applied at distance x from D on the top member DE and X-braced legs.',
    ),
    figureCaption:
      'Figure 1: Camping table with load P at distance x from D (Situation 1).',
    options: [
      { label: 'A', text: '600 N' },
      { label: 'B', text: '800 N' },
      { label: 'C', text: '750 N' },
      { label: 'D', text: '900 N' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Take moments about the far support B; the load sits 0.90 m from B because it is 0.60 m from D.',
      formulas: ['R_A(1.50) = P(1.50 - 0.60)'],
      steps: [
        'Step 1: A and B are 1.50 m apart; the load is 0.60 m from D, hence 0.90 m from B.',
        'Step 2: $\\sum M_B = 0$: $R_A(1.50) = 1500(0.90)$.',
        'Step 3: $R_A = 1350/1.50 = 900\\ \\text{N}$.',
      ],
      finalAnswer: '900 N (Option D)',
    },
  },

  // Item 6
  {
    id: 'psad-may2015-q6',
    number: 6,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Frames and Machines',
    text: 'Situation 1 (continued) – The reaction at B.',
    options: [
      { label: 'A', text: '750 N' },
      { label: 'B', text: '600 N' },
      { label: 'C', text: '900 N' },
      { label: 'D', text: '800 N' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Vertical equilibrium: the two reactions share the 1500 N load.',
      formulas: ['R_B = P - R_A'],
      steps: [
        'Step 1: $\\sum F_y = 0$: $R_A + R_B = 1500$.',
        'Step 2: $R_B = 1500 - 900$.',
        'Step 3: $R_B = 600\\ \\text{N}$.',
      ],
      finalAnswer: '600 N (Option B)',
    },
  },

  // Item 7
  {
    id: 'psad-may2015-q7',
    number: 7,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Frames and Machines',
    text: 'Situation 1 (continued) – The reaction at D.',
    options: [
      { label: 'A', text: '800 N' },
      { label: 'B', text: '900 N' },
      { label: 'C', text: '600 N' },
      { label: 'D', text: '750 N' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'D is the top joint directly above A, so it carries the same vertical reaction as support A.',
      formulas: ['R_D = R_A = 900\\ \\text{N}'],
      steps: [
        'Step 1: The leg AD is vertical and carries no horizontal load.',
        'Step 2: The whole load path from the top member into leg AD is therefore vertical.',
        'Step 3: $R_D = R_A = 900\\ \\text{N}$.',
      ],
      finalAnswer: '900 N (Option B)',
    },
  },

  // Item 8
  {
    id: 'psad-may2015-q8',
    number: 8,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Cables',
    text: 'Situation 2 – The towers at the opposite side of the river supports the load W = 50 kN as shown in the Figure. The distance L = 20 m and the sag d = 1.5 m. At what distance from A should the load be positioned such that the tensions in AC and BC are equal?',
    figureSvg: psadMay2015Figure(
      2,
      'Figure 2: Cable suspended between two towers A and B a distance L apart, carrying load W at point C with sag d, split into spans x1 and x2.',
    ),
    figureCaption:
      'Figure 2: Cable between two towers with load W at C, spans x₁ and x₂, sag d (Situation 2).',
    options: [
      { label: 'A', text: '5 m' },
      { label: 'B', text: '15 m' },
      { label: 'C', text: '10 m' },
      { label: 'D', text: '12 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Equal tensions in the two segments occur when the geometry is symmetric, i.e. the load sits at mid-span.',
      steps: [
        'Step 1: Both segments carry the same horizontal component $H$ because the cable is continuous and in equilibrium at C.',
        'Step 2: Tension $T = \\sqrt{H^2 + V^2}$, so equal tensions require equal vertical components.',
        'Step 3: $V = H(d/x)$, so equal $V$ requires equal $x$ — the load must be at mid-span.',
        'Step 4: $x_1 = L/2 = 10\\ \\text{m}$.',
      ],
      finalAnswer: '10 m (Option C)',
    },
  },

  // Item 9
  {
    id: 'psad-may2015-q9',
    number: 9,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Cables',
    text: 'Situation 2 (continued) – If $x_1$ = 5 m, what is the tension in segment BC?',
    options: [
      { label: 'A', text: '130.50 kN' },
      { label: 'B', text: '128.36 kN' },
      { label: 'C', text: '120.45 kN' },
      { label: 'D', text: '125.62 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The horizontal component is common to both segments; vertical components follow from the two slopes and must sum to W.',
      formulas: [
        'V_{AC} = H\\dfrac{d}{x_1} = H\\dfrac{1.5}{5}, \\quad V_{BC} = H\\dfrac{d}{x_2} = H\\dfrac{1.5}{15}',
        'V_{AC} + V_{BC} = W',
      ],
      steps: [
        'Step 1: With $x_1 = 5\\ \\text{m}$, $x_2 = 20 - 5 = 15\\ \\text{m}$.',
        'Step 2: $V_{AC} = 0.30H$ and $V_{BC} = 0.10H$.',
        'Step 3: $0.30H + 0.10H = 50 \\Rightarrow H = 125\\ \\text{kN}$.',
        'Step 4: $V_{BC} = 0.10(125) = 12.5\\ \\text{kN}$.',
        'Step 5: $T_{BC} = \\sqrt{125^2 + 12.5^2} = 125.62\\ \\text{kN}$.',
      ],
      finalAnswer: '125.62 kN (Option D)',
    },
  },

  // Item 10
  {
    id: 'psad-may2015-q10',
    number: 10,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Statics - Cables',
    text: 'Situation 2 (continued) – If $x_1$ = 5 m, what is the total length of the cable?',
    options: [
      { label: 'A', text: '20.375 m' },
      { label: 'B', text: '21.025 m' },
      { label: 'C', text: '20.295 m' },
      { label: 'D', text: '20.985 m' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Each segment is the hypotenuse of its horizontal span and the sag.',
      formulas: [
        'L_{AC} = \\sqrt{5^2 + 1.5^2}, \\quad L_{BC} = \\sqrt{15^2 + 1.5^2}',
      ],
      steps: [
        'Step 1: $L_{AC} = \\sqrt{25 + 2.25} = 5.220\\ \\text{m}$.',
        'Step 2: $L_{BC} = \\sqrt{225 + 2.25} = 15.075\\ \\text{m}$.',
        'Step 3: Total $= 5.220 + 15.075 = 20.295\\ \\text{m}$.',
      ],
      finalAnswer: '20.295 m (Option C)',
    },
  },

  // Item 11
  {
    id: 'psad-may2015-q11',
    number: 11,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Three-Hinged Arch',
    text: 'Situation 3 – The three-hinged arch shown in the Figure is loaded with vertical loads only. Distance H = 12 m and s = 4 m. Determine the horizontal reaction at A.',
    figureSvg: psadMay2015Figure(
      3,
      'Figure 3: Symmetric three-hinged arch with hinge C at the crown, rise H = 12 m, six panels of s = 4 m, loaded 90 kN, 240 kN, 240 kN, 90 kN.',
    ),
    figureCaption:
      'Figure 3: Three-hinged arch, rise H, panels of width s, with four vertical loads (Situation 3).',
    options: [
      { label: 'A', text: '210 kN' },
      { label: 'B', text: '170 kN' },
      { label: 'C', text: '180 kN' },
      { label: 'D', text: '190 kN' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'First get the vertical reactions from the whole arch, then take moments about the crown hinge for one half.',
      formulas: [
        '\\sum M_B = 0:\\ R_{Ay}(24) = 90(20) + 240(16) + 240(8) + 90(4)',
        '\\sum M_C = 0\\ (\\text{left half}):\\ R_{Ay}(12) - H_A(12) - 90(8) - 240(4) = 0',
      ],
      steps: [
        'Step 1: Span $= 6s = 24\\ \\text{m}$.',
        'Step 2: $R_{Ay}(24) = 1800 + 3840 + 1920 + 360 = 7920 \\Rightarrow R_{Ay} = 330\\ \\text{kN}$.',
        'Step 3: Left half about C: $330(12) - 12H_A - 90(8) - 240(4) = 0$.',
        'Step 4: $3960 - 12H_A - 1680 = 0 \\Rightarrow H_A = 190\\ \\text{kN}$.',
      ],
      finalAnswer: '190 kN (Option D)',
    },
  },

  // Item 12
  {
    id: 'psad-may2015-q12',
    number: 12,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Three-Hinged Arch',
    text: 'Situation 3 (continued) – Determine the vertical reaction at B.',
    options: [
      { label: 'A', text: '330 kN' },
      { label: 'B', text: '90 kN' },
      { label: 'C', text: '190 kN' },
      { label: 'D', text: '240 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The loading is symmetric, so the two vertical reactions share the total load equally.',
      formulas: ['R_{By} = \\dfrac{90 + 240 + 240 + 90}{2}'],
      steps: [
        'Step 1: Total vertical load $= 660\\ \\text{kN}$.',
        'Step 2: Symmetric geometry and symmetric loading give $R_{Ay} = R_{By}$.',
        'Step 3: $R_{By} = 330\\ \\text{kN}$.',
      ],
      finalAnswer: '330 kN (Option A)',
    },
  },

  // Item 13
  {
    id: 'psad-may2015-q13',
    number: 13,
    pageNumber: 74,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Three-Hinged Arch',
    text: 'Situation 3 (continued) – Determine the vertical reaction at C.',
    options: [
      { label: 'A', text: '0' },
      { label: 'B', text: '330 kN' },
      { label: 'C', text: '240 kN' },
      { label: 'D', text: '90 kN' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The crown hinge of a symmetric three-hinged arch under symmetric load carries no vertical shear.',
      formulas: ['\\sum F_y = 0\\ (\\text{left half}):\\ R_{Ay} - 90 - 240 - V_C = 0'],
      steps: [
        'Step 1: Left half carries $R_{Ay} = 330\\ \\text{kN}$ upward.',
        'Step 2: Loads on the left half are $90 + 240 = 330\\ \\text{kN}$ downward.',
        'Step 3: $330 - 330 - V_C = 0 \\Rightarrow V_C = 0$.',
      ],
      finalAnswer: '0 (Option A)',
    },
  },

  // Item 14
  {
    id: 'psad-may2015-q14',
    number: 14,
    pageNumber: 74,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Frames under Wind Load',
    text: 'Situation 4 – The frame shown in the figure is acted on by wind load pressure of q = 1.44 kPa. These frames are spaced 6 m apart normal to the paper. Consider the roller support at B and the joint at D as pin. Determine the vertical component of the reaction at A.',
    figureSvg: psadMay2015Figure(
      4,
      'Figure 4: Gable frame 9 m wide, 6 m eaves height, with wind pressure 1.44 kPa acting on both the windward and leeward faces; wind coefficients c = 0.8, 0.1, 0.2 and 0.4 are marked.',
    ),
    figureCaption:
      'Figure 4: Gable frame under wind pressure q = 1.44 kPa, frames spaced 6 m (Situation 4).',
    options: [
      { label: 'A', text: '23.653 kN' },
      { label: 'B', text: '27.756 kN' },
      { label: 'C', text: '16.092 kN' },
      { label: 'D', text: '32.685 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Apply the NSCP wind coefficients to both faces, take moments about A for the roller reaction, then sum vertical forces.',
      formulas: [
        'P_1 = 1.44(0.8)(6 \\times 6) = 41.472\\ \\text{kN}',
        'P_{2H} = 1.44(0.1)(3 \\times 6) = 2.592\\ \\text{kN},\\quad P_{2V} = 1.44(0.1)(4.5 \\times 6) = 3.888\\ \\text{kN}',
        'P_{3H} = 1.44(0.2)(3 \\times 6) = 5.184\\ \\text{kN},\\quad P_{3V} = 1.44(0.2)(4.5 \\times 6) = 7.776\\ \\text{kN}',
        'P_4 = 1.44(0.4)(6 \\times 6) = 20.736\\ \\text{kN}',
      ],
      steps: [
        'Step 1: Windward wall (c = 0.8) over 6 m height: $P_1 = 41.472\\ \\text{kN}$ at 3 m.',
        'Step 2: Windward roof (c = 0.1): horizontal $P_{2H} = 2.592\\ \\text{kN}$ at 7.5 m, vertical $P_{2V} = 3.888\\ \\text{kN}$ at 2.25 m from A.',
        'Step 3: Leeward roof (c = 0.2): horizontal $P_{3H} = 5.184\\ \\text{kN}$ at 7.5 m, vertical $P_{3V} = 7.776\\ \\text{kN}$ at 6.75 m from A.',
        'Step 4: Leeward wall (c = 0.4): $P_4 = 20.736\\ \\text{kN}$ at 3 m.',
        'Step 5: $\\sum M_A = 0$: $(P_1 + P_4)(3) + (P_{3H} - P_{2H})(7.5) - P_{2V}(2.25) - P_{3V}(6.75) - B_y(9) = 0$.',
        'Step 6: $186.624 + 19.44 - 8.748 - 52.488 = 9B_y \\Rightarrow B_y = 16.092\\ \\text{kN}$.',
        'Step 7: $\\sum F_v = 0$: $A_y = B_y + P_{2V} + P_{3V} = 16.092 + 3.888 + 7.776 = 27.756\\ \\text{kN}$.',
      ],
      finalAnswer: '27.756 kN (Option B)',
    },
  },

  // Item 15
  {
    id: 'psad-may2015-q15',
    number: 15,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Structural Analysis - Frames under Wind Load',
    text: 'Situation 4 (continued) – Determine the vertical component of the reaction at B.',
    options: [
      { label: 'A', text: '32.685 kN' },
      { label: 'B', text: '16.092 kN' },
      { label: 'C', text: '23.653 kN' },
      { label: 'D', text: '27.756 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The roller reaction at B follows from the moment equation about A.',
      formulas: [
        'B_y(9) = (P_1 + P_4)(3) + (P_{3H} - P_{2H})(7.5) - P_{2V}(2.25) - P_{3V}(6.75)',
      ],
      steps: [
        'Step 1: Wall terms: $(41.472 + 20.736)(3) = 186.624\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 2: Roof horizontals: $(5.184 - 2.592)(7.5) = 19.44\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 3: Roof verticals: $-3.888(2.25) - 7.776(6.75) = -61.236\\ \\text{kN}\\cdot\\text{m}$.',
        'Step 4: Net $= 144.828 = 9B_y \\Rightarrow B_y = 16.092\\ \\text{kN}$.',
      ],
      finalAnswer: '16.092 kN (Option B)',
    },
  },
];
