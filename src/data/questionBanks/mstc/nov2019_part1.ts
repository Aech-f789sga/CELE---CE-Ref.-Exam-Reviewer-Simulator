import { Question } from '../../../types/exam';
import {
  msteNov2019SolutionImages,
  msteNov2019SolutionPage,
  msteNov2019SolutionPageEnd,
} from '../../msteNov2019Images';

const sol = (item: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: msteNov2019SolutionPage(item),
  pageNumberEnd: msteNov2019SolutionPageEnd(item),
  images: msteNov2019SolutionImages(item),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const base = { subject: 'MSTC' as const, year: 2019, month: 'November' as const };

export const MSTE_NOV2019_PART1: Question[] = [
  {
    ...base,
    id: 'mstc-nov2019-q1',
    number: 1,
    pageNumber: 110,
    category: 'Algebra — Factoring',
    text:
      'The volume of a rectangular building with square base and height $x$ is $x^3 - 60x^2 + 900x$. Find the base dimensions in terms of $x$.',
    options: opt(
      '$(x - 20) \\times (x + 20)$',
      '$(x - 20) \\times (x - 20)$',
      '$(x - 30) \\times (x - 30)$',
      '$(x + 30) \\times (x - 30)$'
    ),
    correctAnswer: 'C',
    solution: { ...sol(1), finalAnswer: '$(x - 30) \\times (x - 30)$ (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q2',
    number: 2,
    pageNumber: 110,
    category: 'Algebra — Functions',
    // Option A is printed as "f(x) = f(x)" and the printed solution treats it as
    // the identity function, so it is transcribed verbatim rather than "corrected".
    text: 'Which of the following is an even function?',
    options: opt(
      '$f(x) = f(x)$',
      '$f(x) = \\cos x$',
      '$f(x) = -f(x)$',
      '$f(x) = \\sin x$'
    ),
    correctAnswer: 'B',
    solution: { ...sol(2), finalAnswer: '$f(x) = \\cos x$ (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q3',
    number: 3,
    pageNumber: 110,
    category: 'Concrete — Strength Gain',
    text:
      "The relationship between concrete strengths $f'_c(14)$ and $f'_c(28)$ is given by the following:\n\n" +
      "$$f'_c(14) = \\frac{t}{1.203 + 0.7t - 0.000195t^2}\\, f'_c(28)$$\n\n" +
      'where $t$ is age of concrete in weeks. The concrete strength at the end of 14 days is 24.1 MPa. Determine the concrete strength at the end of 28 days according to the DPWH design guidelines.',
    options: opt('34.2 MPa', '33.5 MPa', '27.5 MPa', '31.4 MPa'),
    correctAnswer: 'D',
    solution: { ...sol(3), finalAnswer: '31.36 MPa ≈ 31.4 MPa (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q4',
    number: 4,
    pageNumber: 110,
    category: 'Algebra — Exponential Decay',
    text:
      "Radon-22 decays according to the formula $A = A_0 e^{-0.181t}$ where $t$ is expressed in days. Find the material's half-life.",
    options: opt('3.83 days', '4.58 days', '3.65 days', '12.47 days'),
    correctAnswer: 'A',
    solution: { ...sol(4), finalAnswer: '3.83 days (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q5',
    number: 5,
    pageNumber: 110,
    category: 'Number Theory — Remainders',
    text:
      'Some Civil Engineering students decide to have a parade during Engineering Week. When the students form ranks of 3 abreast, two are left over. In ranks of 5, four students are left over. In ranks of 7, six are left over. In ranks of 11, ten are left over. What is the least possible number of students in the parade?',
    options: opt('1362', '1154', '986', '1028'),
    correctAnswer: 'B',
    solution: { ...sol(5), finalAnswer: '1154 students (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q6',
    number: 6,
    pageNumber: 112,
    category: 'Algebra — Geometric Progression',
    text:
      'A pendulum swings a length of 40 inches on its first swing. Each successive swing is $4/5$ of the preceding swing. Find the length of the fifth swing.',
    options: opt('10.4 in', '14.4 in', '12.4 in', '16.4 in'),
    correctAnswer: 'D',
    solution: { ...sol(6), finalAnswer: '16.38 in ≈ 16.4 in (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q7',
    number: 7,
    pageNumber: 112,
    category: 'Geometry — Right Triangles',
    text:
      'While framing an addition to an existing home, a carpenter used the Pythagorean theorem to determine whether a wall was "square" — that is, whether the wall formed a right angle with the floor. He used a triangle whose sides are three consecutive integers. Find a right triangle whose sides are three consecutive integers.',
    options: opt(
      '3, 4, and 5 units',
      '4, 5, and 6 units',
      '5, 6, and 7 units',
      '6, 7, and 8 units'
    ),
    correctAnswer: 'A',
    solution: { ...sol(7), finalAnswer: '3, 4, and 5 units (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q8',
    number: 8,
    pageNumber: 112,
    category: 'Trigonometry — Right Triangle',
    text:
      'A 50-m supporting wire is to be attached to a 75-m antenna. Because of surrounding buildings, sidewalks, and roadways, the wire must be anchored exactly 20 m from the base of the antenna. How high from the base of the antenna is the wire attached?',
    options: opt('45.83 m', '53.85 m', '40.58 m', '38.57 m'),
    correctAnswer: 'A',
    solution: { ...sol(8), finalAnswer: '45.83 m (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q9',
    number: 9,
    pageNumber: 112,
    category: 'Trigonometry — Angles of Elevation',
    text:
      'A mountain peak $A$ is 1040 m above the sea level. From the mountain peak $A$, the angle of elevation of mountain peak $B$ was 10 degrees. The pilot of Emirates Airline upon flying directly over peak $A$ took the angle of depression of peak $B$ equal to $46^\\circ12\'$ and reads his altimeter to be 2,820 m above sea level. Determine the elevation of mountain peak $B$.',
    options: opt('1325.68 m', '1297.45 m', '1254.25 m', '1186.98 m'),
    correctAnswer: 'B',
    solution: { ...sol(9), finalAnswer: '1297.45 m (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q10',
    number: 10,
    pageNumber: 112,
    category: 'Trigonometry — Inscribed Angle',
    text:
      'Immediately after Mayon volcano showed tell-tale signs of activity, the PHIVOLCS set up stations to monitor the volcano. Two of such stations were located at points $A$ and $B$, 7 km apart and on the same horizontal plane as the base of the volcano. From station $A$, the angle of elevation of the top of Mayon is $8^\\circ$. When the volcano erupted, the volcanic ash emitted above its crater suspended an angle of $64^\\circ$ from each station $A$ and $B$. Assuming that the points of observations are on the same vertical plane, find the height of the ash.',
    options: opt('32.3 km', '36.8 km', '30.8 km', '28.4 km'),
    correctAnswer: 'A',
    solution: { ...sol(10), finalAnswer: '32.26 km ≈ 32.3 km (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q11',
    number: 11,
    pageNumber: 113,
    category: 'Surveying — Elevation by Two Stations',
    text:
      'In hilly or mountainous terrain, it is often difficult to determine heights. It may be impossible to find an expanse of level ground from which measurements can be taken, and sighting may be limited. Mountain peaks may be visible only from certain places. A geologist took measurements at two points, $B$ and $C$, 928 m apart. The angle of elevation from $B$ to the top of the mountain at $A$ is $47^\\circ10\'$. The angle of elevation from $C$ to $B$ is $8^\\circ40\'$, and the angle of elevation from $C$ to $A$ is $32^\\circ30\'$. It is known that the elevation at $C$ is 1537 m to the nearest meter, what is the elevation at $A$?',
    options: opt('2903 m', '2943 m', '2763 m', '2843 m'),
    correctAnswer: 'C',
    solution: { ...sol(11), finalAnswer: '2762.64 m ≈ 2763 m (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q12',
    number: 12,
    pageNumber: 113,
    category: 'Geometry — Triangle Inequality',
    text: 'Solve the triangle with sides 3, 5, 12.',
    options: opt('21', 'impossible triangle', '9', '12'),
    correctAnswer: 'B',
    solution: { ...sol(12), finalAnswer: 'Impossible triangle (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q13',
    number: 13,
    pageNumber: 113,
    category: 'Algebra — Perimeter',
    text:
      'The two sides of a quadrilateral are twice the shortest side, and the fourth side is 2 m more than the shortest side. If the perimeter of the quadrilateral is 29 m, what is the length of shortest side?',
    options: opt('5.5 m', '5.0 m', '4.5 m', '4.0 m'),
    correctAnswer: 'C',
    solution: { ...sol(13), finalAnswer: '4.5 m (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q14',
    number: 14,
    pageNumber: 113,
    category: 'Solid Geometry — Volume',
    text:
      'A steel storage tank for methane gas is to be constructed in the shape of a right circular cylinder of altitude 10 feet with hemisphere attached to its ends. Express the volume (in cubic feet) of the tank as function of the tank radius.',
    options: opt(
      '$\\dfrac{4}{3}\\pi r^2(15 + 2r)$',
      '$\\dfrac{1}{3}\\pi r^2(15 + 2r)$',
      '$\\dfrac{2}{3}\\pi r^2(15 + 2r)$',
      '$\\dfrac{3}{4}\\pi r^2(15 + 2r)$'
    ),
    correctAnswer: 'C',
    solution: { ...sol(14), finalAnswer: '$V = \\dfrac{2}{3}\\pi r^2(15 + 2r)$ (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2019-q15',
    number: 15,
    pageNumber: 113,
    category: 'Differential Calculus — Related Rates',
    // The booklet misprints the first option's label as "D." and then prints
    // "D." again on the fourth option. Options are normalised to A-D by their
    // printed position; the printed key entry 15D and the printed solution both
    // point at 60 kph, which is the first option, hence A.
    text:
      'A Toyota Land Cruiser drives east from point $A$ at 30 kph. Another car, Ford Expedition, starting from $B$ at the same time, drives S $30^\\circ$ W toward $A$ at 60 kph. $B$ is 30 km from $A$. How fast in kph is the distance between two cars changing after 30 minutes?',
    options: opt('60 kph', '55 kph', '70 kph', '80 kph'),
    correctAnswer: 'A',
    solution: { ...sol(15), finalAnswer: '$ds/dt = 60$ kph (Option A)' },
  },
];
