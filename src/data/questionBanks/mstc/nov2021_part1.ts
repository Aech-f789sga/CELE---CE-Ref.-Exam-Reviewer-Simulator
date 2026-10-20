import { Question } from '../../../types/exam';
import {
  mstcNov2021SolutionImages,
  mstcNov2021SolutionPage,
  mstcNov2021SolutionPageEnd,
} from '../../mstcNov2021Images';

const sol = (item: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: mstcNov2021SolutionPage(item),
  pageNumberEnd: mstcNov2021SolutionPageEnd(item),
  images: mstcNov2021SolutionImages(item),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const base = { subject: 'MSTC' as const, year: 2021, month: 'November' as const };

export const MSTC_NOV2021_PART1: Question[] = [
  {
    ...base,
    id: 'mstc-nov2021-q1',
    number: 1,
    pageNumber: 240,
    category: 'Algebra — Inverse Variation',
    text: 'The intensity of light (in foot-candles) varies inversely as the square of $x$, the distance in feet from the light source. The intensity of the light 2 feet from the source is 80 foot-candles. How far away is the source if the intensity of light is 5 foot-candles?',
    options: opt('6 feet', '7 feet', '8 feet', '5 feet'),
    correctAnswer: 'C',
    solution: { ...sol(1), finalAnswer: '8 feet (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q2',
    number: 2,
    pageNumber: 240,
    category: 'Algebra — Exponential Model',
    text:
      'Zoologist have determined empirically that the total number of endangered species, $y$, may be approximated by the formula\n\n' +
      '$$y = \\frac{1883}{1 + 7.892\\left(1.097^{-t}\\right)}$$\n\n' +
      'Where $t$ is the number of years past 1980.\n\n' +
      'How many more species does the formula estimate will be added to the endangered list for 2020 than the actual number given for 2007?\n\n' +
      'The actual number of endangered species for selected years were as follow.\n\n' +
      '| Year | 1990 | 2003 | 2007 |\n|:---|:---:|:---:|:---:|\n| **Actual number of endangered species** | 442 | 987 | 1137 |',
    options: opt('439', '1576', '469', '1238'),
    correctAnswer: 'A',
    solution: { ...sol(2), finalAnswer: '439 species (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q3',
    number: 3,
    pageNumber: 240,
    category: 'Algebra — Work Problem',
    text: 'An experience roofer can roof a house in 26 hours. A beginner roofer needs 39 hours to complete the same job. Find how long it takes for the two to do the job together.',
    options: opt('14.6 hours', '13.6 hours', '15.6 hours', '12.6 hours'),
    correctAnswer: 'C',
    solution: { ...sol(3), finalAnswer: '15.6 hours (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q4',
    number: 4,
    pageNumber: 240,
    category: 'Algebra — Polynomial Evaluation',
    text:
      "The world's highest bridge, the Millau Viaduct, is 1125 feet above the river Tarn. An object is dropped from the top of this bridge. Neglecting air resistance, the height of the object at time $t$ seconds is given by the polynomial function $h(t) = -16t^2 + 1125$. Find the height of the object when $t = 6$ seconds.",
    options: opt('549 feet', '725 feet', '341 feet', '101 feet'),
    correctAnswer: 'A',
    solution: { ...sol(4), finalAnswer: '549 feet (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q5',
    number: 5,
    pageNumber: 241,
    category: 'Algebra — Commission',
    text:
      'An insurance salesperson makes 2% of the face value of a permanent policy and 1% of the face value of term policy. Suppose he sells $x$ pesos worth of permanent insurance and $y$ pesos worth of term insurance. How much does he make if sells a P200,000 term and a P100,000 policy?',
    options: opt('P4,000', 'P5,000', 'P6,000', 'P3,000'),
    correctAnswer: 'B',
    solution: { ...sol(5), finalAnswer: 'P5,000 (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q6',
    number: 6,
    pageNumber: 241,
    category: 'Algebra — Rational Roots',
    text: 'Find all rational solutions of the equation,\n\n$$3x^4 + 14x^3 + 14x^2 - 8x - 8 = 0$$',
    options: opt('-3 & -8/3', '2/3 & 2', '7/3 & 3', '-2 & -2/3'),
    correctAnswer: 'D',
    solution: { ...sol(6), finalAnswer: 'x = -2 and x = -2/3 (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q7',
    number: 7,
    pageNumber: 241,
    category: 'Algebra — Gompertz Curve',
    text:
      "Medicare has instituted an incentive for hospitals to file their claims for reimbursement under the MALASAKIT system in a specific electronic format. Assume that the number of hospitals is steady at 1000, and that 5 and 70 hospitals switched in the first and second years, respectively. In order to plan for the upgrade of the Medicare's computer network, you must estimate the number for hospitals that will switch in each of the next 4 years. Assume Gompertz curve applies. Compute for the value of $c$.\n\n" +
      'Hint: $D = Le^{-ce^{-dt}}$ (For Gompertz curve)',
    options: opt('10.7683', '10.3768', '10.8376', '10.6837'),
    correctAnswer: 'C',
    solution: { ...sol(7), finalAnswer: 'c = 10.8376 (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q8',
    number: 8,
    pageNumber: 241,
    category: 'Algebra — Logistic Curve',
    text:
      'A logistic curve is the graph of an equation of the form\n\n' +
      '$$y = \\frac{k}{1 + be^{-cx}}$$\n\n' +
      'where $k$, $b$ and $c$ are positive constants. Such curves are useful for describing a population of protozoa was found to be describes by a logistic equation with $c = 1.1244$, $k = 105$, and $x$ the time in days. Find $b$ if the initial population was 3 protozoa.',
    options: opt('56', '65', '44', '34'),
    correctAnswer: 'D',
    solution: { ...sol(8), finalAnswer: 'b = 34 (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q9',
    number: 9,
    pageNumber: 242,
    category: 'Algebra — Sequences',
    text:
      'A lighthouse shows successive one-second flashes of red, white, green, white, red. A second lighthouse does the same only with two-second flashes. The six-second sequence of the lighthouse is repeatedly steadily as the twelve-second sequence of the other lighthouse. What fraction of the time do the two lights show the same color if the given sequences start at the same time?',
    options: opt('1/6', '1/3', '1/4', '1/5'),
    correctAnswer: 'A',
    solution: { ...sol(9), finalAnswer: '1/6 (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q10',
    number: 10,
    pageNumber: 242,
    category: 'Geometry — Pythagorean Theorem',
    text:
      'In a large city, streets are run north and south, and avenues run east and west. Streets and avenues are 850 feet apart. The city plans to construct a straight freeway from the intersection of 25th street and 8th avenue to the intersection of 115th street and 64th avenue. How long will the freeway be?',
    options: opt('17 miles', '18 miles', '15 miles', '11 miles'),
    correctAnswer: 'A',
    solution: { ...sol(10), finalAnswer: '17 miles (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q11',
    number: 11,
    pageNumber: 242,
    category: 'Geometry — Triangle Angles',
    text:
      'The measure of the largest angle of triangle is 80° more than the measure of the smallest angle, and the measure of the remaining angle is 10° more that the measure of the smallest angle. What is the measure of each angle of the triangle?',
    options: opt(
      '(50°, 100°, 30°)',
      '(20°, 120°, 40°)',
      '(40°, 100°, 60°)',
      '(30°, 110°, 40°)',
    ),
    correctAnswer: 'D',
    solution: { ...sol(11), finalAnswer: '30°, 110° and 40° (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q12',
    number: 12,
    pageNumber: 242,
    category: 'Trigonometry — Right Triangle',
    text:
      'An engineer is hired to design a bridge to carry traffic across the river. His first problem is to determine the distance from point $A$ to point $B$. To do so, he starts at point $A$ and measures distance of 280 m to point $C$ in a direction at right angles to the segment $AB$. At point $C$, he uses his transit to find that angle $ACB$ measures 49°50′. How long should the bridge be?',
    options: opt('331.73 m', '287.25 m', '356.96 m', '314.17 m'),
    correctAnswer: 'A',
    solution: { ...sol(12), finalAnswer: '331.73 m (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q13',
    number: 13,
    pageNumber: 242,
    category: 'Trigonometry — Snell’s Law',
    text:
      "A spotlight shining on a pond strikes the water so that the angle of incidence $A$ is 24.5°. Find the refracted angle $A$. Use Snell's law and the fact that $n = 1.33$ for water and $n = 1.00$ for air.",
    options: opt('19.6°', '20.7°', '15.3°', '18.2°'),
    correctAnswer: 'D',
    solution: { ...sol(13), finalAnswer: '18.2° (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q14',
    number: 14,
    pageNumber: 243,
    category: 'Trigonometry — Angle of Elevation',
    text:
      'The angle of elevation of the top of the tower from point $A$ on the ground is 19.9°. Point $B$, 50 feet closer to the tower, the angle of elevation is 21.8°. What is the height of the tower?',
    options: opt('161 ft', '171 ft', '191 ft', '181 ft'),
    correctAnswer: 'C',
    solution: { ...sol(14), finalAnswer: '191 ft (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q15',
    number: 15,
    pageNumber: 243,
    category: 'Geometry — Sector and Inscribed Circle',
    text:
      'The area of the sector $AOB$ with center at point $O$ and radius of 24 m is $96\\pi$. A small circle is inscribed in the sector which is tangent to all the three sides of the sector. Compute the radius of the small circle.',
    options: opt('10 m', '6 m', '4 m', '8 m'),
    correctAnswer: 'D',
    solution: { ...sol(15), finalAnswer: '8 m (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q16',
    number: 16,
    pageNumber: 243,
    category: 'Solid Geometry — Angles of Elevation',
    text:
      'From a point $O$ on the ground of a square courtyard of area 160,000 square feet, the angles of elevation of three flagstaffs of equal heights at three consecutive corners of the yard at $A$, $B$ and $C$ are 45°, 60° and 60° respectively. Find the height of each flagstaff in meters.',
    options: opt('149.58', '114.32', '136.78', '125.47'),
    correctAnswer: 'B',
    solution: { ...sol(16), finalAnswer: '114.32 m (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q17',
    number: 17,
    pageNumber: 243,
    category: 'Geometry — Perimeter',
    text:
      'The perimeter of the triangle is 93 centimeters. If two sides are equally long and the third side is 9 centimeters longer than the others, find the lengths of the longest side.',
    options: opt('37 cm', '28 cm', '35 cm', '58 cm'),
    correctAnswer: 'A',
    solution: { ...sol(17), finalAnswer: '37 cm (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q18',
    number: 18,
    pageNumber: 243,
    category: 'Calculus — Related Rates',
    text:
      'A satellite camera takes a rectangular shaped picture. The smallest area that can be photographed is 5 km by 7 km rectangle. As the camera zooms out, the length ($l$) and the width ($w$) of the rectangle increases at a rate of 2 km/sec. How long does it take for the area $A$ to be at least 5 times its original size?',
    options: opt('3.36 sec', '3.33 sec', '3.63 sec', '3.66 sec'),
    correctAnswer: 'C',
    solution: { ...sol(18), finalAnswer: '3.63 sec (Option C)' },
  },
];
