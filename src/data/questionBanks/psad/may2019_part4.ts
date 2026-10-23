import { Question } from '../../../types/exam';
import {
  psadMay2019Figure,
  psadMay2019SolutionImages,
  psadMay2019SolutionPage,
  psadMay2019SolutionPageEnd,
} from '../../psadMay2019Images';

const solution = (n: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: psadMay2019SolutionPage(n),
  pageNumberEnd: psadMay2019SolutionPageEnd(n),
  images: psadMay2019SolutionImages(n),
});

/** Situation 14 — channel purlin on an inclined truss. */
const SITUATION_14 =
  'Situation 14 — Light-grade Channel section is used as a purlin of a truss.\n\n' +
  'Given the following data:\n\n' +
  'Properties Channel section:\n' +
  '$W = 79$ N/m\n' +
  '$S_x = 6.19 \\times 10^4$ mm³\n' +
  '$S_y = 1.61 \\times 10^4$ mm³\n\n' +
  'Simple span $= 6$ m\n' +
  'Angle of inclination of truss $= 15^\\circ$\n' +
  'Spacing of purlins $= 1$ m\n' +
  'Total gravity load (applied at top of purlin) $= 950$ Pa\n\n' +
  'Wind load:\n' +
  'Windward side $= 288$ Pa (pressure)\n' +
  'Leeward side $= 864$ Pa (suction)\n\n' +
  'Allowable stresses:\n' +
  '$F_{bx} = F_{by} = 195$ MPa';

/** Situation 15 — beam end bearing on a concrete wall. */
const SITUATION_15 =
  "Situation 15 — A beam rests on a concrete wall 306 mm wide and with 27.5 MPa compressive " +
  "strength, f'c. Refer to the Figure shown.\n\n" +
  'Given:\n' +
  'Beam Properties\n' +
  '$d = 450$ mm\n' +
  '$b_f = 190$ mm\n' +
  '$t_f = 18$ mm\n' +
  '$t_w = 10$ mm\n' +
  'The critical section for bending in bearing plates is at a distance, $k$, from the ' +
  'centroidal $Y$-axis: $k = 35$ mm\n\n' +
  'Allowable Stresses\n' +
  '$F_y = 248$ MPa\n' +
  "$F_p = 0.35f'_c$\n" +
  '$F_b = 0.75F_y$\n' +
  'Beam End Reaction $= 480$ kN';

/** Situation 16 — spandrel beam over four spans. */
const SITUATION_16 =
  'Situation 16 — Refer to the figure shown.\n\n' +
  'Given:\n' +
  '$W_{dl} = 15$ kN/m\n' +
  '$W_{ll} = 19$ kN/m\n\n' +
  'Dimensions:\n' +
  '$L_1 = 6$ m\n' +
  '$L_2 = 7$ m\n' +
  '$L_3 = 6.5$ m\n' +
  '$L_4 = 6$ m\n' +
  'Column dimension $= 0.3$ m';

/** Situation 17 — doubly reinforced T-beam. */
const SITUATION_17 =
  'Situation 17 — Refer to the Figure shown.\n\n' +
  'Given:\n' +
  '$h_1 = 125$ mm\n' +
  '$h_2 = 475$ mm\n' +
  '$c = 60$ mm\n' +
  'Clear concrete cover $= 40$ mm\n' +
  'Tension bars, $A_s = 8 - 28$ mm diameter\n' +
  "Compression bars, $A'_s = 4 - 28$ mm diameter\n" +
  'Stirrups $= 12$ mm diameter\n' +
  'Concrete 28-day compressive strength $= 28$ MPa\n' +
  'Steel strength, $f_{yh} = 275$ MPa\n' +
  'Reduction factor for shear $= 0.75$\n' +
  'Size of coarse aggregate $= 20$ mm';

/** Situation 18 — rectangular tied column under shear. */
const SITUATION_18 =
  'Situation 18 — Given the following data of the column shown:\n' +
  'Dimension, $B \\times L = 600$ mm $\\times$ 450 mm\n' +
  'Longitudinal bars $= 16$ pcs of 25-mm-diameter\n' +
  'Ties $= 12$-mm-diameter spaced at 100 mm\n' +
  'Steel strengths: $f_y = 414$ MPa, $f_{yh} = 275$ MPa\n' +
  "Concrete strength, f'c $= 27.5$ MPa\n" +
  'Effective cover to the centroid of longitudinal steel $= 65$ mm\n' +
  'Allowable concrete shear stress $= 1.75$ MPa\n' +
  'Strength reduction factor for shear $= 0.75$';

export const PSAD_MAY2019_PART4: Question[] = [
  // Item 43
  {
    id: 'psad-may2019-q43',
    number: 43,
    pageNumber: 71,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Steel Design — Bending Stress about the Strong Axis of a Purlin',
    text: `${SITUATION_14}\n\nHow much is the critical bending stress, $f_{bx}$, (MPa) due to gravity loads and wind load.`,
    options: [
      { label: 'A', text: '143.2' },
      { label: 'B', text: '110.5' },
      { label: 'C', text: '93.2' },
      { label: 'D', text: '126.3' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(43), finalAnswer: '93.22 MPa (Option C)' },
  },

  // Item 44
  {
    id: 'psad-may2019-q44',
    number: 44,
    pageNumber: 71,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Steel Design — Bending Stress about the Weak Axis of a Purlin',
    text: `${SITUATION_14}\n\nHow much is the critical bending stress, $f_{by}$, (MPa) due to gravity loads and wind load.`,
    options: [
      { label: 'A', text: '126.3' },
      { label: 'B', text: '143.2' },
      { label: 'C', text: '110.5' },
      { label: 'D', text: '93.2' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(44), finalAnswer: '143.22 MPa (Option B)' },
  },

  // Item 45
  {
    id: 'psad-may2019-q45',
    number: 45,
    pageNumber: 71,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Steel Design — Maximum Purlin Spacing by Interaction',
    text: `${SITUATION_14}\n\nWhat is the maximum spacing (m) of purlins to prevent overstressing?`,
    options: [
      { label: 'A', text: '0.80' },
      { label: 'B', text: '0.70' },
      { label: 'C', text: '0.90' },
      { label: 'D', text: '1.10' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(45), finalAnswer: '0.816 m, taken as 0.80 (Option A)' },
  },

  // Item 46
  {
    id: 'psad-may2019-q46',
    number: 46,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Steel Design — Bearing Plate Width on Concrete',
    text: `${SITUATION_15}\n\nDetermine the minimum width $B$ (mm) of the base plate with bearing length $N$ of 200 mm base on bearing stress.`,
    figureSvg: psadMay2019Figure(
      46,
      'Figure: Bearing plate B x N on a concrete wall, with web yielding at N + 2.5k and N + 5k'
    ),
    figureCaption: 'Bearing plate detail at the beam end',
    options: [
      { label: 'A', text: '220' },
      { label: 'B', text: '240' },
      { label: 'C', text: '230' },
      { label: 'D', text: '250' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(46), finalAnswer: '249.4 mm, use 250 mm (Option D)' },
  },

  // Item 47
  {
    id: 'psad-may2019-q47',
    number: 47,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Steel Design — Web Yielding Stress at a Bearing Plate',
    text: `${SITUATION_15}\n\nDetermine the web yielding stress (MPa) which occurs at a distance ($N + 2.5k$) where $N$ is the length of the bearing plate. The bearing plate is 250 mm wide × 200 mm long along the wall.`,
    options: [
      { label: 'A', text: '124' },
      { label: 'B', text: '187' },
      { label: 'C', text: '134' },
      { label: 'D', text: '167' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(47), finalAnswer: '167 MPa (Option D)' },
  },

  // Item 48
  {
    id: 'psad-may2019-q48',
    number: 48,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'Steel Design — Required Bearing Plate Thickness',
    text: `${SITUATION_15}\n\nDetermine the required bearing plate thickness (mm) if the bearing plate ($B \\times N$) 250 mm × 250 mm.`,
    options: [
      { label: 'A', text: '32' },
      { label: 'B', text: '36' },
      { label: 'C', text: '28' },
      { label: 'D', text: '25' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(48), finalAnswer: '31.7 mm, use 32 mm (Option A)' },
  },

  // Item 49
  {
    id: 'psad-may2019-q49',
    number: 49,
    pageNumber: 72,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Approximate Positive Moment at an Interior Support',
    text: `${SITUATION_16}\n\nWhat is the maximum positive moment at $G$ in kN-m?`,
    figureSvg: psadMay2019Figure(
      49,
      'Figure: Spandrel beam elevation with columns G, H, I and spans L1 to L4'
    ),
    figureCaption: 'Spandrel beam over four spans',
    options: [
      { label: 'A', text: '76.2' },
      { label: 'B', text: '111.3' },
      { label: 'C', text: '95.4' },
      { label: 'D', text: '87.4' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(49), finalAnswer: '87.43 kN-m (Option D)' },
  },

  // Item 50
  {
    id: 'psad-may2019-q50',
    number: 50,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Approximate Positive Moment at an Interior Support',
    text: `${SITUATION_16}\n\nWhat is the maximum positive moment at $H$ in kN-m?`,
    options: [
      { label: 'A', text: '67.9' },
      { label: 'B', text: '102.6' },
      { label: 'C', text: '89.8' },
      { label: 'D', text: '130.6' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(50), finalAnswer: '89.78 kN-m (Option C)' },
  },

  // Item 51
  {
    id: 'psad-may2019-q51',
    number: 51,
    pageNumber: 73,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Approximate Positive Moment at an Interior Support',
    text: `${SITUATION_16}\n\nWhat is the maximum positive moment at $I$ in kN-m?`,
    options: [
      { label: 'A', text: '87.4' },
      { label: 'B', text: '76.2' },
      { label: 'C', text: '111.3' },
      { label: 'D', text: '95.4' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(51), finalAnswer: '87.43 kN-m (Option A)' },
  },

  // Item 52
  {
    id: 'psad-may2019-q52',
    number: 52,
    pageNumber: 74,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Minimum Beam Width from Bar Spacing',
    text: `${SITUATION_17}\n\nWhat is minimum beam width "b" (mm) based on spacing and concrete cover according to NSCP.`,
    figureSvg: psadMay2019Figure(
      52,
      'Figure: T-beam section with flange h1, web h2, cover c and width b, showing tension and compression bars'
    ),
    figureCaption: 'Doubly reinforced T-beam section',
    options: [
      { label: 'A', text: '300' },
      { label: 'B', text: '320' },
      { label: 'C', text: '280' },
      { label: 'D', text: '340' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(52), finalAnswer: '300 mm (Option A)' },
  },

  // Item 53
  {
    id: 'psad-may2019-q53',
    number: 53,
    pageNumber: 74,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Minimum Web Width for Shear with Four-Leg Stirrups',
    text: `${SITUATION_17}\n\nGiven:\nFactored shear, $V_u = 480$ kN\nSpacing of 4 legs of stirrups $= 160$ mm\n\nHow much is the minimum beam width "b" (mm)?`,
    options: [
      { label: 'A', text: '350' },
      { label: 'B', text: '600' },
      { label: 'C', text: '550' },
      { label: 'D', text: '500' },
    ],
    correctAnswer: 'C',
    solution: { ...solution(53), finalAnswer: '548 mm, say 550 mm (Option C)' },
  },

  // Item 54
  {
    id: 'psad-may2019-q54',
    number: 54,
    pageNumber: 74,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Minimum Web Width for Shear with Two-Leg Stirrups',
    text: `${SITUATION_17}\n\nGiven:\nFactored shear, $V_u = 480$ kN\nSpacing of 2 legs of stirrups $= 70$ mm\n\nHow much is the minimum beam width "b" (mm)?`,
    options: [
      { label: 'A', text: '400' },
      { label: 'B', text: '450' },
      { label: 'C', text: '375' },
      { label: 'D', text: '425' },
    ],
    correctAnswer: 'D',
    solution: { ...solution(54), finalAnswer: '425 mm (Option D)' },
  },

  // Item 55
  {
    id: 'psad-may2019-q55',
    number: 55,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Shear Strength of a Tied Column about the y-axis',
    text: `${SITUATION_18}\n\nFind the shear strength (kN) of the column along the $y$-axis.`,
    figureSvg: psadMay2019Figure(
      55,
      'Figure: Rectangular column section B x L with 16 longitudinal bars, X and Y axes and shears Vux and Vuy'
    ),
    figureCaption: 'Rectangular tied column section under biaxial shear',
    options: [
      { label: 'A', text: '453' },
      { label: 'B', text: '572' },
      { label: 'C', text: '763' },
      { label: 'D', text: '36' },
    ],
    correctAnswer: 'B',
    solution: { ...solution(55), finalAnswer: '572.36 kN (Option B)' },
  },

  // Item 56
  {
    id: 'psad-may2019-q56',
    number: 56,
    pageNumber: 75,
    subject: 'PSAD',
    year: 2019,
    month: 'May',
    category: 'RC Design — Shear Strength of a Tied Column about the x-axis',
    text: `${SITUATION_18}\n\nFind the shear strength (kN) of the column along the $x$-axis.`,
    options: [
      { label: 'A', text: '690' },
      { label: 'B', text: '510' },
      { label: 'C', text: '920' },
      { label: 'D', text: '750' },
    ],
    correctAnswer: 'A',
    solution: { ...solution(56), finalAnswer: '690.03 kN (Option A)' },
  },
];
