import { Question } from '../../../types/exam';
import {
  besaMar2026MstcFigure,
  besaMar2026MstcSolutionImages,
} from '../../besaMar2026MstcImages';

/** Worked-solution item: no choices, scanned solution revealed on demand. */
const worked = (key: string, page: number, pageEnd: number, answer: string) => ({
  options: [] as Question['options'],
  correctAnswer: 'A' as const,
  workedSolution: true,
  referenceSource: 'Besavilla' as const,
  solution: {
    summary: '',
    steps: [],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: besaMar2026MstcSolutionImages(key),
  },
});

/** Four-choice item whose key the booklet marks with a pointing hand. */
const keyed = (
  key: string,
  correct: 'A' | 'B' | 'C' | 'D',
  answer: string,
  page: number,
  pageEnd: number,
) => ({
  correctAnswer: correct,
  referenceSource: 'Besavilla' as const,
  solution: {
    summary: '',
    steps: [],
    finalAnswer: answer,
    pageNumber: page,
    pageNumberEnd: pageEnd,
    images: besaMar2026MstcSolutionImages(key),
  },
});

const figure = (key: string) => besaMar2026MstcFigure(key);

export const BESA_MSTC_MAR2026_PART1: Question[] = [
  // ── Situation 1 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q1',
    number: 1,
    pageNumber: 280,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Transportation Engineering — Shock Wave Analysis',
    text:
      'The volume at a section of a two-lane highway is 1500 veh/hr in each direction and the density is about 25 veh/km. A large dump truck loaded with soil from an adjacent construction site joins the traffic stream and travels at a speed of 10 kph for a length of 2.5 km along the upgrade before turning off onto a dump site. Due to relatively high flow in the opposite direction, it is impossible for any car to pass the truck. Vehicles just behind the truck therefore have to travel at the speed of the truck, which results in the formation of a platoon having a density of 100 veh/km and a flow of 1000 veh/hr. Determine how many vehicles will be in the platoon by the time the truck leaves the highway.\n\n' +
      'Hint:\n\n' +
      '$u_w = \\dfrac{q_2 - q_1}{k_2 - k_1}$',
    ...worked('S01', 280, 280, '420 vehicles'),
  },

  // ── Situation 2 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q2',
    number: 2,
    pageNumber: 280,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Surveying — Coordinates of a Point by Triangle Solution',
    text: 'From the situation shown in the figure, compute the North and East coordinates of point B.',
    figureSvg: figure('S02'),
    figureCaption: 'Triangle ABC with side lengths and the coordinates of A and C',
    ...worked('S02', 280, 281, 'N = 1550 m, E = 1200 m'),
  },

  // ── Situation 3 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q3',
    number: 3,
    pageNumber: 281,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Solid Waste Management — Life of a Sanitary Landfill',
    text:
      'A proposed landfill is to be 400 m × 200 m in plan area and 25 m deep. The average daily filling pattern is expected to be 15 m × 10 m × 3 m deep and the daily cover to be used is 0.2 m thick. Assume that the landfill will be operational every week from Monday through Friday. Determine the projected life of the landfill.',
    ...worked('S03', 281, 281, '16 years'),
  },

  // ── Situation 4 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q4',
    number: 4,
    pageNumber: 281,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Highway Engineering — Stopping Sight Distance',
    text:
      'A driver with a reaction time of 0.5 sec is driving a car down a 5% grade at 89 kph when a deer runs onto the road 0.04 km in front of the car. The road is dry with a coefficient of friction of $f = 0.70$. Determine the distance the car travels from the moment the deer appears until the car comes to a stop.',
    ...worked('S04', 281, 282, 'S = 60.24 m, say 0.06 km'),
  },

  // ── Situation 5 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q5',
    number: 5,
    pageNumber: 282,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Highway Engineering — Minimum Radius of a Horizontal Curve',
    text:
      'A road is being designed for a speed of 110 kph on a horizontal curve with a super elevation of 6%. If the coefficient of side friction is 0.10, what is the minimum radius of the curve (in meters) required for safe vehicular movement?',
    ...worked('S05', 282, 282, 'R = 595 m'),
  },

  // ── Situation 6 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q6',
    number: 6,
    pageNumber: 282,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Numerical Integration — Midpoint Rule',
    text:
      'A cross section of an airplane wing is shown. Measurements of the thickness of the wing, in cm, at 20 cm intervals are 5.8, 20.3, 26.7, 29.0, 27.6, 27.3, 23.8, 20.5, 15.1, 8.7 and 2.8. Use the midpoint rule to estimate the area of the wing’s cross-section.',
    figureSvg: figure('S06'),
    figureCaption: 'Wing section 200 cm long with the eleven measured thicknesses',
    ...worked('S06', 282, 282, '4232 cm²'),
  },

  // ── Situation 7 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q7',
    number: 7,
    pageNumber: 282,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Mechanics — Two Blocks over a Pulley',
    text:
      'Suppose the coefficient of kinetic friction between A and the plane is $\\mu = 0.30$. A and B have a mass of 10 kg and 12 kg. As B moves down, neglecting masses of the frictionless pulley and the chord, find the acceleration of A and B if $\\theta = 30°$.',
    figureSvg: figure('S07'),
    figureCaption: 'Block A on a 30° incline connected over a pulley to block B',
    ...worked('S07', 282, 283, 'a = 1.96 m/s²'),
  },

  // ── Situation 8 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q8',
    number: 8,
    pageNumber: 283,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Calculus — Limit of the Chord-to-Arc Ratio',
    text:
      'The figure shows a circular arc of length $S$ and a chord of length $d$, both subtended by a central angle $\\theta$. Find $\\lim_{\\theta \\to 0} \\dfrac{d}{S}$.',
    figureSvg: figure('S08'),
    figureCaption: 'Circle of radius r with arc S and chord d subtending θ',
    ...worked('S08', 283, 283, '1'),
  },

  // ── Situation 9 ────────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q9',
    number: 9,
    pageNumber: 284,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Mechanics — Mechanical Advantage of Pulleys',
    text:
      'Given: frictionless pulleys are lifting a certain load as shown. Determine the mechanical advantage of the frictionless pulley.',
    figureSvg: figure('S09'),
    figureCaption: 'Four-pulley block and tackle lifting load W against force P',
    ...worked('S09', 284, 284, 'M.A. = 4'),
  },

  // ── Situation 10 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q10',
    number: 10,
    pageNumber: 284,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Safety — Structural Collapse Patterns',
    text:
      'Pancake collapse is a type of building collapse that usually occurs when the connections between the floor and a load-bearing wall are lost. Which shows this type of collapse?',
    figureSvg: figure('S10'),
    figureCaption: 'Four collapse sketches, a) to d)',
    options: [
      { label: 'A', text: 'Sketch (a)' },
      { label: 'B', text: 'Sketch (b)' },
      { label: 'C', text: 'Sketch (c)' },
      { label: 'D', text: 'Sketch (d)' },
    ],
    ...keyed('S10', 'C', 'Sketch (c) — the floors have pancaked one onto the other', 284, 284),
  },

  // ── Situation 11 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q11',
    number: 11,
    pageNumber: 284,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Solid Mensuration — Volume of a Spherical Segment',
    text: 'Select the formula for the volume of a segment with height $h$, from a sphere of radius $r$.',
    figureSvg: figure('S11'),
    figureCaption: 'Spherical segment of height h cut from a sphere of radius r',
    ...worked('S11', 284, 284, '$V = \\dfrac{\\pi h^2}{3}(3r - h)$'),
  },

  // ── Situation 12 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q12',
    number: 12,
    pageNumber: 284,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Differential Calculus — Marginal Revenue',
    text:
      'The total revenue in dollars from the sale of $x$ units of a product is given by $R(x) = \\dfrac{2500x}{\\ln(10x + 10)}$. Find the marginal revenue function.',
    ...worked(
      'S12',
      284,
      285,
      "$R'(x) = \\dfrac{2500\\left[(x+1)\\ln(10x+10) - x\\right]}{(x+1)\\left[\\ln(10x+10)\\right]^2}$",
    ),
  },

  // ── Situation 13 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q13',
    number: 13,
    pageNumber: 285,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Engineering Economy — Continuous Money Flow',
    text:
      'A continuous money flow starts at P1000 and increases exponentially at 2% per year, given that the amount of money at time $t$ is $A = e^{jt} \\int_0^t f(t)e^{-jt}\\,dt$, where $i$ or $j$ = interest rate and $f(x)$ = rate of money flow. Using $j = 0.10$ and $t = 5$, what is the amount at the end of 5 years at 10% compounded continuously?',
    ...worked('S13', 285, 285, 'A = 6794.37'),
  },

  // ── Situation 14 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q14',
    number: 14,
    pageNumber: 285,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Construction Management — Composite Weighted Cost Index',
    text:
      'The engineering office within the DPWH recently completed a study of the following breakdown for highway bridge modification projects in the last few years. The provided table outlines the cost elements and their average percentage for a highway bridge modification project. A comparable project was completed in the reference year at a total cost of P1,870,000. Based on this information, develop a composite weighted index for the reference year and the current year respectively.\n\n' +
      '| Cost Element | Average Percentage of Total Cost | Index (reference year) | Index (current year) |\n' +
      '| --- | --- | --- | --- |\n' +
      '| Labor | 22% | 141 | 191 |\n' +
      '| Construction materials | 43% | 162 | 233 |\n' +
      '| Equipment | 16% | 135 | 165 |\n' +
      '| Engineering | 7% | 120 | 150 |\n' +
      '| Project Management | 4% | 115 | 145 |\n' +
      '| Other costs | 8% | 105 | 130 |\n' +
      '| **Total** | **100%** | | |\n\n' +
      'Hint:\n\n' +
      '$I = \\sum (\\text{average percentage})(\\text{index of year for cost element})$',
    ...worked('S14', 285, 286, '$I_k = 143.68$, $I_c = 195.31$'),
  },

  // ── Situation 15 ───────────────────────────────────────────────────────────
  {
    id: 'mstc-mar2026-besa-q15',
    number: 15,
    pageNumber: 286,
    subject: 'MSTC',
    year: 2026,
    month: 'March',
    category: 'Matrix Algebra — Cost of Exterior Materials',
    text:
      'A contractor builds three kinds of houses, namely: low, medium and high end, with a choice of two styles, namely: Ranch or Asian Modern. Matrix A shows the number of each kind of house planned for a new 100-unit subdivision. The quantity for each of the exterior materials depends primarily on the style of the house. These amounts are shown in matrix B. Matrix C gives the cost for each kind of material. What is the total cost of these materials for each model house?\n\n' +
      '$A = \\begin{bmatrix} 0 & 30 \\\\ 10 & 20 \\\\ 20 & 20 \\end{bmatrix}$ (rows: Low, Medium, High End; columns: Ranch, Asian Modern)\n\n' +
      '$B = \\begin{bmatrix} 10 & 2 & 0 & 2 \\\\ 50 & 1 & 20 & 2 \\end{bmatrix}$ (rows: Ranch, Asian Modern; columns: Concrete, Lumber, Brick, Shingles)\n\n' +
      '$C = \\begin{bmatrix} 20 \\\\ 180 \\\\ 60 \\\\ 25 \\end{bmatrix}$ (Concrete, Lumber, Brick, Shingles)',
    ...worked('S15', 286, 287, 'Low $72,900; Medium $54,760; High End $60,800'),
  },
];
