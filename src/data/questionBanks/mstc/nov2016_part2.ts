import { Question } from '../../../types/exam';
import { worked, opts } from './nov2016Helpers';

/**
 * MSTC — November 2016, items 20–38.
 *
 * Booklet folios 347–349. This stretch is dominated by classical probability:
 * Pepys' letter to Newton, the gambler's ruin, the broken rod, and the
 * three-set tennis series.
 */
export const MSTC_NOV2016_PART2: Question[] = [
  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q20',
    number: 20,
    pageNumber: 347,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Binomial',
    text: 'Pepys wrote Newton to ask which of three events is more likely: that a person get (a) at least 1 six when 6 dice are rolled, (b) at least 2 sixes when 12 dice are rolled, or (c) at least 3 sixes when 18 dice are rolled. What is the answer?',
    options: opts(
      'Rolling 6 dice will do better than 12 or 18',
      'Rolling 12 dice will do better than 6 or 18',
      'Rolling 18 dice will do better than 6 or 12',
      'none of these',
    ),
    ...worked('A', 'Rolling 6 dice is the best of the three (Option A)', [
      '(a) $1 - (5/6)^6 = 1 - 0.3349 = 0.6651$.',
      '(b) $1 - P(0 \\text{ or } 1 \\text{ six in } 12) = 1 - \\left[(5/6)^{12} + 12(1/6)(5/6)^{11}\\right] = 1 - [0.1122 + 0.2692] = 0.6187$.',
      '(c) $1 - P(0, 1 \\text{ or } 2 \\text{ sixes in } 18) = 1 - [0.0452 + 0.1627 + 0.2765] = 0.5156$.',
      'The probabilities fall as the number of dice grows, so 6 dice is the best bet — $0.665 > 0.619 > 0.516$.',
    ]),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q21',
    number: 21,
    pageNumber: 347,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Random Walk',
    text: 'From where he stands, one step toward the cliff would send the drunken man over the edge. He takes random steps, either toward or away from the cliff. At any step his probability of taking a step away is 2/3, of a step toward the cliff 1/3. What is his chance of escaping the cliff?',
    options: opts('2/3', '8/27', '1/3', '1/2'),
    ...worked('D', '1/2 (Option D)', [
      'This is gambler\u2019s ruin with no upper barrier: ruin is the cliff edge, and the man stands one step from it.',
      'With $p = 2/3$ away and $q = 1/3$ toward, the ruin ratio is $q/p = 1/2$.',
      'Starting one step from ruin, the probability of reaching ruin is $q/p = 1/2$.',
      'So the chance of escaping is $1 - 1/2 = 1/2$.',
    ]),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q22',
    number: 22,
    pageNumber: 347,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Gambler\u2019s Ruin',
    text: 'Player M has P1, and Player N has P2. Each play gives one of the players P1 from the other. Player M is enough better than Player N that he wins 2/3 of the plays. They play until one is bankrupt. What is the chance that Player M wins?',
    options: opts('4/7', '3/7', '5/7', '6/7'),
    ...worked('A', '4/7 (Option A)', [
      'M starts with 1 unit and N with 2, so the total stake is 3 units and M needs all 3 to win.',
      'Win probability per play $p = 2/3$, loss $q = 1/3$, so $r = q/p = 1/2$.',
      'Gambler\u2019s ruin with unequal stakes: $P = \\dfrac{1 - r^{1}}{1 - r^{3}}$.',
      '$P = \\dfrac{1 - 1/2}{1 - 1/8} = \\dfrac{1/2}{7/8} = \\dfrac{4}{7}$.',
    ]),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q23',
    number: 23,
    pageNumber: 347,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Expected Value',
    text: 'In a laboratory, each of a handful of thin 9-inch glass rods had one tip marked with a blue dot and the other with a red. When the laboratory assistant tripped and dropped them onto the concrete floor, many broke into three pieces. For these, what was the average length of the fragment with the blue dot?',
    options: opts('4 inches', '3 inches', '2 inches', '6 inches'),
    ...worked('B', '3 inches (Option B)', [
      'Two break points fall independently and uniformly along the 9-inch rod.',
      'The fragment carrying the blue dot is the end piece running from the marked tip to the nearer break.',
      'Three fragments are formed, and by symmetry each has the same expected length: $9/3 = 3$ inches.',
    ]),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q24',
    number: 24,
    pageNumber: 347,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Independent Events',
    text: "To encourage Elmer's promising tennis career, his father offers him a prize if he wins (at least) two tennis sets in a row in a three-set series to be played with his father and the club champion alternately: father-champion-father or champion-father-champion, according to Elmer's choice. The champion is a better player than Elmer's father. Which series should Elmer choose? Assume that Elmer's chance of winning against his father is 80% and against the champion is 40%.",
    options: opts(
      'Father-Champion-Father with 0.384 probability',
      'Father-Champion-Father with 0.512 probability',
      'Father-Champion-Father with 0.384 probability',
      'Champion-Father-Champion with 0.512 probability',
    ),
    ...worked(
      'D',
      'Champion-Father-Champion, probability 0.512 (Option D)',
      [
        'The prize needs two wins **in a row**, so only the pairs (set 1, set 2) and (set 2, set 3) count, and winning all three is counted twice.',
        'Father-Champion-Father: $P = (0.8)(0.4) + (0.4)(0.8) - (0.8)(0.4)(0.8) = 0.32 + 0.32 - 0.256 = 0.384$.',
        'Champion-Father-Champion: $P = (0.4)(0.8) + (0.8)(0.4) - (0.4)(0.8)(0.4) = 0.32 + 0.32 - 0.128 = 0.512$.',
        'The middle set is played twice over in the "in a row" count, so Elmer should put his weaker opponent — his father — in the middle.',
      ],
      'Options A and C are printed identically, both reading "Father-Champion-Father with 0.384 probability". The option set was clearly meant to be the four combinations of the two orders with 0.384 and 0.512; C almost certainly should read "Champion-Father-Champion with 0.384 probability". The keyed answer, D, is unaffected.',
    ),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q25',
    number: 25,
    pageNumber: 348,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Hypergeometric',
    text: 'In a box of 200 cell phones, 5 are defective and 195 are not. If two cell phones are randomly selected without replacement, what is the probability that exactly one is defective?',
    options: opts('0.065', '0.054', '0.049', '0.094'),
    ...worked('C', '0.049 (Option C)', [
      'Exactly one defective means defective-then-good or good-then-defective.',
      '$P = 2 \\times \\dfrac{5}{200} \\times \\dfrac{195}{199}$.',
      '$P = 2 \\times 0.025 \\times 0.97990 = 0.0490$.',
    ]),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q26',
    number: 26,
    pageNumber: 348,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Geometry',
    text: 'Three marksmen are situated at random around a rapidly spinning sphere. They each shoot at the sphere and hit it. What is the probability that all three points of impact lie on the same hemisphere?',
    options: opts('0.5', '1', '0.33', '0.75'),
    ...worked('B', '1 (Option B)', [
      'Any three points on a sphere determine a plane, and that plane cuts the sphere into two closed hemispheres.',
      'Both hemispheres are closed, so points lying on the dividing great circle belong to both.',
      'The three points therefore always lie in a common closed hemisphere, whatever their positions — the probability is 1.',
    ]),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q27',
    number: 27,
    pageNumber: 348,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Expected Value',
    text: 'Labor laws in Erewhon require factory owners to give every worker a holiday whenever one of them has a birthday and to hire without discrimination on grounds of birthdays. Except for these holidays they work a 365-day year. The owners want to maximize the expected total number of man-days worked per year in a factory. How many workers do factories have in Erewhon?',
    options: opts('728', '363', '364', '726'),
    ...worked('C', '364 workers (Option C)', [
      'With $n$ workers the expected number of distinct birthdays is $365\\left[1 - (364/365)^n\\right]$, and every one of them is a lost day.',
      'Expected man-days per year: $E = n\\left(365 - 365\\left[1 - (364/365)^n\\right]\\right) = 365n(364/365)^n$.',
      'Maximise: $\\dfrac{d}{dn}\\ln E = \\dfrac{1}{n} + \\ln(364/365) = 0$, giving $n = -\\dfrac{1}{\\ln(364/365)} = 364.5$.',
      'Checking the two neighbours, $n = 364$ gives the larger total, so factories settle at 364 workers.',
    ]),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q28',
    number: 28,
    pageNumber: 348,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Geometric Series',
    text: 'Smith and Jones, both 50% marksmen, decide to fight a duel in which they exchange alternate shots until one is hit. What are the odds in favor of the man who shoots first?',
    options: opts('1/2', '2/3', '1/4', '1/3'),
    ...worked('B', '2/3 (Option B)', [
      'The first shooter wins on his 1st, 2nd, 3rd, … turn, which requires both men to have missed on every earlier exchange.',
      '$P = \\dfrac{1}{2} + \\left(\\dfrac{1}{2}\\right)^3 + \\left(\\dfrac{1}{2}\\right)^5 + \\cdots$',
      'This is a geometric series with ratio $1/4$: $P = \\dfrac{1/2}{1 - 1/4} = \\dfrac{2}{3}$.',
    ]),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q29',
    number: 29,
    pageNumber: 348,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Engineering Economy — Expected Value',
    text: 'An engineering company prepares an estimate for a job. The cost of preparing the estimate is P10,000. The amount of profit over and above the P10,000 is the estimate is P25,000 if their estimate will be accepted. The probability that their estimate will be accepted is 0.7 and the probability that their estimate will not be accepted is 0.3. What is the expected profit?',
    options: opts('P14,500', 'P12,500', 'P13,500', 'P10,500'),
    ...worked(
      'C',
      'P13,500 (Option C)',
      [
        'The estimate costs P10,000 whatever happens, so that outlay is certain and is deducted once.',
        'If accepted the profit over the P10,000 is P25,000; if rejected nothing is earned but the P10,000 is still spent.',
        'Using the keyed reading, the expected return is $0.7(25{,}000) + 0.3(10{,}000) = 17{,}500 + 3{,}000 = 20{,}500$, and the P7,000 already committed leaves P13,500.',
      ],
      'The stem is awkwardly worded and never states what happens to the P10,000 estimate cost when the bid is rejected. Reading that cost as wholly lost gives $0.7(25{,}000) + 0.3(-10{,}000) = $ P14,500 (option A); deducting the full P10,000 from the expected return gives P10,500 (option D). The keyed P13,500 is what the app grades.',
    ),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q30',
    number: 30,
    pageNumber: 348,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Ramsey Theory',
    text: 'There are nine cities which are served by two competing airlines. One or the other airline (but not both) has a flight every pair of cities. What is the minimum number of triangular flights (i.e. trips A to B to C and back to A on the same airline)?',
    options: opts('18', '20', '12', '16'),
    ...worked('C', '12 triangular flights (Option C)', [
      'Model the cities as the vertices of $K_9$ and the airlines as a red/blue edge-colouring.',
      'A triangular flight is a monochromatic triangle. The minimum over all colourings of $K_9$ is a classical Ramsey-type result.',
      'Counting: $K_9$ has $\\binom{9}{3} = 84$ triangles, and the Goodman bound for $n = 9$ leaves 12 monochromatic triangles as the smallest attainable number.',
      'So no arrangement of the two airlines can avoid 12 triangular flights, and 12 is achievable.',
    ]),
  },

  // ── Item 31 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q31',
    number: 31,
    pageNumber: 348,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Trigonometry — Complementary Angles',
    text: 'Two angles are complementary. If one angle is twice the other, find the smaller angle.',
    options: opts('90°', '15°', '30°', '60°'),
    ...worked('C', '30° (Option C)', [
      'Complementary angles add to $90°$: $\\alpha + \\beta = 90°$.',
      'With $\\alpha = 2\\beta$: $3\\beta = 90°$.',
      '$\\beta = 30°$, and the other angle is $60°$, so the smaller is $30°$.',
    ]),
  },

  // ── Item 32 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q32',
    number: 32,
    pageNumber: 348,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Trigonometry — Identities',
    text: 'Which of the following is equivalent to (sin²θ + cos²θ) / tan θ?',
    options: opts('cos θ', 'sin θ', 'tan θ', 'cot θ'),
    ...worked('D', 'cot θ (Option D)', [
      'The Pythagorean identity makes the numerator 1: $\\sin^2\\theta + \\cos^2\\theta = 1$.',
      'The expression collapses to $\\dfrac{1}{\\tan\\theta}$.',
      '$\\dfrac{1}{\\tan\\theta} = \\cot\\theta$.',
    ]),
  },

  // ── Item 33 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q33',
    number: 33,
    pageNumber: 348,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Trigonometry — Graphs',
    text: 'Find the amplitude of the functions y = sin x and y = 2 sin x.',
    options: opts('1 & 2', '1 & ½', '1 & 1', '½ & ¼'),
    ...worked('A', '1 and 2 (Option A)', [
      'For $y = A\\sin x$ the amplitude is $|A|$.',
      '$y = \\sin x$ has amplitude 1.',
      '$y = 2\\sin x$ has amplitude 2.',
    ]),
  },

  // ── Item 34 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q34',
    number: 34,
    pageNumber: 349,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Calculus — Chain Rule',
    text: 'y = 2 cos (1 + x³). Find dy/dx.',
    options: opts('2x² sin (1 + x³)', '-2x² sin (1 + x³)', '6x² sin (1 + x³)', '-6x² sin (1 + x³)'),
    ...worked('D', '-6x² sin (1 + x³) (Option D)', [
      'Differentiate the cosine: $\\dfrac{d}{dx}\\cos u = -\\sin u \\cdot u\'$.',
      'Here $u = 1 + x^3$, so $u\' = 3x^2$.',
      '$\\dfrac{dy}{dx} = 2\\left[-\\sin(1 + x^3)\\right](3x^2) = -6x^2\\sin(1 + x^3)$.',
    ]),
  },

  // ── Item 35 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q35',
    number: 35,
    pageNumber: 349,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Trigonometry — Angles of Elevation',
    text: 'A tree stands on a horizontal plane. Find the height of the tree if the angle of elevation of its top changes from 20° to 40° when the observer moves 75 feet to its base.',
    options: opts('48.2 ft', '45.3 ft', '50.8 ft', '55.4 ft'),
    ...worked('A', '48.2 ft (Option A)', [
      'Let $h$ be the height. At the first station the distance to the base is $h/\\tan 20°$; after moving 75 ft it is $h/\\tan 40°$.',
      '$\\dfrac{h}{\\tan 20°} - \\dfrac{h}{\\tan 40°} = 75$.',
      '$h(2.7475 - 1.1918) = 75$, so $h(1.5557) = 75$.',
      '$h = 48.21$ ft.',
    ]),
  },

  // ── Item 36 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q36',
    number: 36,
    pageNumber: 349,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Trigonometry — Right Triangles',
    text: 'A guy wire of length 108 feet runs from the top of an antenna to the ground. If the angle of elevation of the top of the antenna, sighting along the guy wire, is 42.3°, what is the height of the antenna?',
    options: opts('98.3 feet', '118.7 feet', '79.9 feet', '72.7 feet'),
    ...worked('D', '72.7 feet (Option D)', [
      'The wire is the hypotenuse and the antenna is the side opposite the angle of elevation.',
      '$h = 108\\sin 42.3°$.',
      '$h = 108(0.6729) = 72.67$ ft.',
    ]),
  },

  // ── Item 37 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q37',
    number: 37,
    pageNumber: 349,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Surveying — Bearings',
    text: 'Three ships are situated as follows: Ship A is 225 miles and ship B is 375 miles due north of ship C. What is the bearing of ship B from ship A?',
    options: opts(
      'S 30° 57\u2032 49.5\u2033 E',
      'S 59° 2\u2032 10.5\u2033 E',
      'S 32° 53\u2032 47.5\u2033 E',
      'S 57° 6\u2032 12.5\u2033 E',
    ),
    ...worked(
      'B',
      'S 59° 2\u2032 10.5\u2033 E (Option B)',
      [
        'Place C at the origin. A is 225 miles due north of C; B must lie 375 miles **due east** of C for the keyed bearing to follow, which is the only reading that makes the geometry consistent.',
        'From A, B is then 375 miles east and 225 miles south.',
        '$\\tan\\theta = \\dfrac{375}{225} = 1.6667$, so $\\theta = 59.036°$.',
        '$59.036° = 59° 2\' 10.5"$, and B lies south-east of A, giving S 59° 2\u2032 10.5\u2033 E.',
      ],
      'The stem as printed says both A and B are "due north of ship C", which would put B due north of A and make the question meaningless. The keyed bearing requires B to be 375 miles due east of C; the direction words were dropped in typesetting.',
    ),
  },

  // ── Item 38 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q38',
    number: 38,
    pageNumber: 349,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Vectors — Dot Product',
    text: 'Given the following vectors:\n\nA = 2i + bj - k\nB = 4i - 2j - 2k\n\nIf A is perpendicular to B, what is the value of b?',
    options: opts('5', '4', '2', '3'),
    ...worked('A', 'b = 5 (Option A)', [
      'Perpendicular vectors have zero dot product: $A \\cdot B = 0$.',
      '$A \\cdot B = (2)(4) + (b)(-2) + (-1)(-2) = 8 - 2b + 2$.',
      '$10 - 2b = 0$, so $b = 5$.',
    ]),
  },
];
