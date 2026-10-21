import { Question } from '../../../types/exam';
import {
  msteMay2019SolutionImages,
  msteMay2019SolutionPage,
  msteMay2019SolutionPageEnd,
} from '../../msteMay2019Images';

const sol = (item: number) => ({
  summary: '',
  steps: [],
  finalAnswer: '',
  pageNumber: msteMay2019SolutionPage(item),
  pageNumberEnd: msteMay2019SolutionPageEnd(item),
  images: msteMay2019SolutionImages(item),
});

const opt = (a: string, b: string, c: string, d: string) => [
  { label: 'A' as const, text: a },
  { label: 'B' as const, text: b },
  { label: 'C' as const, text: c },
  { label: 'D' as const, text: d },
];

const base = { subject: 'MSTC' as const, year: 2019, month: 'May' as const };

export const MSTE_MAY2019_PART2: Question[] = [
  {
    ...base,
    id: 'mstc-may2019-q16',
    number: 16,
    pageNumber: 3,
    category: 'Algebra — Venn Diagram',
    text:
      'The passengers on an excursion bus consisted of 14 married couples, 8 of whom brought no children and, 6 of whom brought 3 children a piece. Counting the driver, the bus has 31 occupants. How is this possible?',
    options: opt(
      'included among the 18 children were 8 married couples.',
      'included among the 18 children were 6 married couples.',
      'included among the 18 children were 10 married couples.',
      'included among the 18 children were 4 married couples.'
    ),
    correctAnswer: 'A',
    solution: { ...sol(16), finalAnswer: '8 married couples were among the 18 children (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q17',
    number: 17,
    pageNumber: 3,
    category: 'Probability — Random Walk',
    text:
      'Players $A$ and $B$ matches pennies $N$ times. They keep a tally of their gains and losses. After the first loss, what is the chance that at no time during the game will they be even?',
    options: opt(
      '$\\binom{N}{n}/2n$',
      '$\\binom{N}{n}/2^n$',
      '$\\binom{N}{n}/2$',
      '$\\binom{N}{n}/2^N$'
    ),
    correctAnswer: 'D',
    solution: { ...sol(17), finalAnswer: '$\\binom{N}{n}/2^N$ (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q18',
    number: 18,
    pageNumber: 3,
    category: 'Probability — Circular Permutation',
    text: 'How many different ways are there to arrange six people in a round table?',
    options: opt('240', '120', '60', '720'),
    correctAnswer: 'B',
    solution: { ...sol(18), finalAnswer: '120 ways (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q19',
    number: 19,
    pageNumber: 4,
    category: 'Probability — Binomial',
    text:
      'Samsung, a computer chip manufacturer, has found that only 1 out of 2000 chips is defective. A certain company ordered a shipment of chips. How many chips will the company order before the probability that at least one chip is defective is 45%.',
    options: opt('1246', '1428', '1086', '1194'),
    correctAnswer: 'D',
    solution: { ...sol(19), finalAnswer: '$n = 1195.38 \\approx 1194$ chips (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q20',
    number: 20,
    pageNumber: 4,
    category: 'Probability — Bayes Theorem',
    text:
      'The local TV weather forecaster says "no rain" and his recorded is $2/3$ accuracy of prediction. But the Federal Meteorological Service predicts rain and their record is $3/4$ with no other data available, what is the chance of rain?',
    options: opt('25%', '76.7%', '83.3%', '50%'),
    correctAnswer: 'C',
    solution: { ...sol(20), finalAnswer: '$5/6 = 83.33\\%$ (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q21',
    number: 21,
    pageNumber: 4,
    category: 'Statistics — Standard Deviation',
    text:
      'Determine the standard deviation of the given data:\n\n' +
      '| Score | 1 | 2 | 3 | 4 | 5 |\n' +
      '|:---|:---:|:---:|:---:|:---:|:---:|\n' +
      '| **Frequency** | 14 | 15 | 14 | 17 | 10 |',
    options: opt('1.842', '1.768', '1.162', '1.349'),
    correctAnswer: 'D',
    solution: { ...sol(21), finalAnswer: '$\\sigma = 1.349$ (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q22',
    number: 22,
    pageNumber: 4,
    category: 'Trigonometry — Cofunctions',
    text:
      'Given that $\\sin 34^\\circ = 0.5592$, find an acute angle $\\theta$ such that $\\cos \\theta = 0.5592$.',
    options: opt('$56^\\circ$', '$34^\\circ$', '$62^\\circ$', '$72^\\circ$'),
    correctAnswer: 'A',
    solution: { ...sol(22), finalAnswer: '$\\theta = 56^\\circ$ (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q23',
    number: 23,
    pageNumber: 4,
    category: 'Trigonometry — Angle of Depression',
    text:
      'From the top of a lighthouse 120 m above the sea, the angle of depression of a boat is $15^\\circ$. How far is the boat from the lighthouse?',
    options: opt('421.4 m', '385.9 m', '447.9 m', '632.8 m'),
    correctAnswer: 'C',
    solution: { ...sol(23), finalAnswer: '$x = 447.85$ m (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q24',
    number: 24,
    pageNumber: 4,
    category: 'Trigonometry — Angle of Elevation',
    text:
      'The angle of elevation of the top of a building from point $A$ on a ground is $24^\\circ$. From point $B$, which is 44.5 meters closer, the angle of elevation is $34.5^\\circ$. What is the height of the building?',
    options: opt('52.4 m', '36.9 m', '56.3 m', '62.8 m'),
    correctAnswer: 'C',
    solution: { ...sol(24), finalAnswer: '$H = 56.26$ m (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q25',
    number: 25,
    pageNumber: 4,
    category: 'Plane Geometry — Circle',
    text:
      '$AB$ is diameter of a circle, $BC$ is a chord 10 cm long. $CD$ is another chord. Angle $BDC = 18^\\circ$. What is the area of the circle in square cm?',
    options: opt('3289.8', '1254.4', '822.4', '205.6'),
    correctAnswer: 'C',
    solution: { ...sol(25), finalAnswer: '$822.4\\ \\text{cm}^2$ (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q26',
    number: 26,
    pageNumber: 5,
    category: 'Plane Geometry — Circumcenter',
    text:
      'In triangle $ABC$, $AB = 30$ cm, $BC = 36$ cm, and $AC = 48$ cm. The perpendicular bisectors of the sides intersect at point $P$. How far is $P$ from side $BC$?',
    options: opt('12.85 cm', '15.92 cm', '18.96 cm', '22.54 cm'),
    correctAnswer: 'B',
    solution: { ...sol(26), finalAnswer: '$x = 15.92$ cm (Option B)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q27',
    number: 27,
    pageNumber: 5,
    category: 'Plane Geometry — Rectangle',
    text:
      "A rectangular soccer field is twice as long as it is wide. If the perimeter of soccer field is 300 yards, what are the field's dimensions?",
    options: opt('40 yd by 80 yd', '45 yd by 90 yd', '50 yd by 100 yd', '60 yd by 120 yd'),
    correctAnswer: 'C',
    solution: { ...sol(27), finalAnswer: '50 yd by 100 yd (Option C)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q28',
    number: 28,
    pageNumber: 5,
    category: 'Solid Geometry — Polyhedron',
    text:
      'A polyhedron having 12 faces and has for its face 12 regular pentagon is called dodecahedron. Determine the number of edges.',
    options: opt('60', '45', '15', '30'),
    correctAnswer: 'D',
    solution: { ...sol(28), finalAnswer: '30 edges (Option D)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q29',
    number: 29,
    pageNumber: 5,
    category: 'Solid Geometry — Cone',
    text:
      'A metal sphere with specific gravity of 3 originally weighs 34 kg. It underwent a process of recasting and was formed into a solid cone with a base having a radius of 6 cm. Assuming 12% of the metal was lost in the process. What is the perpendicular height of the new cone?',
    options: opt('264.5 cm', '214.8 cm', '325.8 cm', '526.3 cm'),
    correctAnswer: 'A',
    solution: { ...sol(29), finalAnswer: '$h = 264.55$ cm (Option A)' },
  },
  {
    ...base,
    id: 'mstc-may2019-q30',
    number: 30,
    pageNumber: 5,
    category: 'Analytic Geometry — Circle',
    text:
      'The equation of a circle is $x^2 + y^2 + 2ky = 0$. What is the value of $k$ when the length of the tangent from $(5, 4)$ to the circle is 1?',
    options: opt('-3', '-2', '-4', '-5'),
    correctAnswer: 'D',
    solution: { ...sol(30), finalAnswer: '$k = -5$ (Option D)' },
  },
];
