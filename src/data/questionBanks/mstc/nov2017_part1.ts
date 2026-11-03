import { Question } from '../../../types/exam';
import { solved, recall, opts } from './nov2017Helpers';

export const MSTC_NOV2017_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q1',
    number: 1,
    pageNumber: 553,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Logarithms',
    text: 'On the Richter scale, the magnitude, $R$, of an earthquake of intensity $I$ is given by $R = \\log I/I_0$, where $I_0$ is the intensity of a barely felt zero-level earthquake. If the intensity of an earthquake is $1000I_0$, what is its magnitude on the Richter scale?',
    options: opts('3', '2', '4', '1'),
    ...solved(1, 'A', '3'),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q2',
    number: 2,
    pageNumber: 553,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Inverse Variation',
    text: "Boyle's law says that if the temperature stays the same, the pressure $P$ of a gas is inversely proportional to the volume $V$. If a cylinder in a stream engine has a pressure of 960 kilopascals when the volume is 1.4 cubic meters, find the pressure when the volume increases to 2.5 cubic meters.",
    options: opts('456.3 kPa', '537.6 kPa', '632.47 kPa', '587.9 kPa'),
    ...solved(2, 'B', '537.6 kPa'),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q3',
    number: 3,
    pageNumber: 553,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Series',
    text: 'Find the value of $\\displaystyle\\sum_{k=0}^{4} \\frac{1}{k!}$.',
    options: opts('3.253', '2.425', '2.083', '2.708'),
    ...solved(3, 'D', '2.708'),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q4',
    number: 4,
    pageNumber: 553,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Functions',
    text: 'During a hurricane, a brick breaks loose from the top of a chimney 38 feet above the ground. As the brick falls, its distance from the ground after $t$ seconds is given by: $d(t) = -16t^2 + 38$. Find the equation of $d(t) = 15$.',
    options: opts(
      '$d(t) = -16t^2 + 43$',
      '$d(t) = -16t^2 + 33$',
      '$d(t) = -16t^2 + 53$',
      '$d(t) = -16t^2 + 23$',
    ),
    ...solved(4, 'D', '$d(t) = -16t^2 + 23$'),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q5',
    number: 5,
    pageNumber: 553,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Combined Variation',
    text: 'Given that "w" varies directly as the product of "x" and "y" and inversely as the square of "z", and that $w = 4$ when $x = 2$, $y = 6$ and $z = 3$. Find the value of "w" when $x = 1$, $y = 4$ and $z = 2$.',
    options: opts('3', '2', '4', '5'),
    ...solved(
      5,
      'A',
      '3',
      'The scan of folio 565 — the page this working continues onto — is a Hydraulics page bound into the Mathematics run, so the crop ends at the problem statement. The proportionality constant is $k = 3$, giving $w = 3(1)(4)/2^2 = 3$.',
    ),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q6',
    number: 6,
    pageNumber: 553,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Exponential Decay',
    text: "The 1986 explosion at the Chernobyl nuclear power plant in the former Soviet Union sent about 1000 kilograms of radioactive cesium-137 into the atmosphere. The function $f(x) = 1000(0.5)^{x/30}$ describes the amount, $f(x)$, in kilograms, of cesium-137 remaining in Chernobyl $x$ years after 1986. If even 100 kilograms of cesium-137 remain in Chernobyl's atmosphere, the area is considered unsafe for human habitation. Find the remaining amount of cesium particles after 80 years.",
    options: opts('142.78 kg', '245.96 kg', '157.49 kg', '168.98 kg'),
    ...recall(
      'C',
      '157.49 kg',
      'The booklet works this item on folio 565, but that folio is a Hydraulics page bound into the Mathematics run — a binding defect — so no working is present in the scan. From the printed function, $f(80) = 1000(0.5)^{80/30} = 157.49$ kg.',
    ),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q7',
    number: 7,
    pageNumber: 554,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Rate Problems',
    text: 'A plane flies 465 miles with the wind and 345 miles against the wind in the same length of time. If the speed of the wind is 20 mph, find the speed of the plane in still air.',
    options: opts('125 mph', '155 mph', '165 mph', '135 mph'),
    ...recall(
      'D',
      '135 mph',
      'The booklet works this item on folio 565, but that folio is a Hydraulics page bound into the Mathematics run — a binding defect — so no working is present in the scan. Equating the two flight times, $465/(v+20) = 345/(v-20)$, gives $v = 135$ mph.',
    ),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q8',
    number: 8,
    pageNumber: 554,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Work Problems',
    text: 'If one pump can fill the tank in 16 hours, two pumps can fill the tank in 6 hours, how fast can the other pump can fill the tank?',
    options: opts('9.6 hours', '6.5 hours', '8.2 hours', '7.6 hours'),
    ...recall(
      'A',
      '9.6 hours',
      'The booklet works this item on folio 565, but that folio is a Hydraulics page bound into the Mathematics run — a binding defect — so no working is present in the scan. From $1/16 + 1/t = 1/6$, $t = 9.6$ hours.',
    ),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q9',
    number: 9,
    pageNumber: 554,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Rate of Work',
    text: 'An ordinary home lawn mower can trim a grass field 1 kilometer per hour. Estimate how long would it take one person to mow a football field if the cutting width of the mower is 0.5 m. The football field is 110 m long and 49 m wide.',
    options: opts('10 hours', '9 hours', '11 hours', '12 hours'),
    ...solved(9, 'C', '11 hours'),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q10',
    number: 10,
    pageNumber: 554,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Relative Motion',
    text: 'Dr. Irving Weiman, who is always in a hurry, walks up an upgoing escalator at the rate of one step per second. Twenty steps bring him to the top. Next day he goes up at two steps per second, reaching the top in 32 steps. How many steps are there in the escalator?',
    options: opts('50', '80', '40', '60'),
    ...solved(10, 'B', '80 steps'),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q11',
    number: 11,
    pageNumber: 554,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Algebra — Percentage Change',
    text: 'A politician states, "If you elect me to office, I promise to cut your taxes for each of my first three years in office by 10% each year, for a total reduction of 30%." Evaluate the accuracy of the politician\'s statement.',
    options: opts('27.10%', '28.20%', '29.99%', '30%'),
    ...solved(11, 'A', '27.10%'),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q12',
    number: 12,
    pageNumber: 554,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Trigonometry — Angles',
    text: 'If two angles are in the ratio of 3:2, find the angles if they are adjacent and form an angle measuring 40°.',
    options: opts('16° and 24°', '10° and 30°', '18° and 22°', '15° and 25°'),
    ...solved(12, 'A', '16° and 24°'),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q13',
    number: 13,
    pageNumber: 554,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Trigonometry — Coterminal Angles',
    text: 'What are the positive and negative co-terminal angles of 10°?',
    options: opts(
      '370°, 730°, -350°, -710°',
      '350°, 710°, -370°, -730°',
      '360°, 720°, -360°, -720°',
      '380°, 700°, -380°, -700°',
    ),
    ...solved(13, 'A', '370°, 730°, -350°, -710°'),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q14',
    number: 14,
    pageNumber: 554,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Trigonometry — Angle Conversion',
    text: 'Convert 630° to centesimal system.',
    options: opts('800 grads', '600 grads', '700 grads', '750 grads'),
    ...solved(14, 'C', '700 grads'),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q15',
    number: 15,
    pageNumber: 554,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Trigonometry — Vector Addition',
    text: 'Cebu Pacific airplane travels in a direction of N 30° W at an air speed of 600 kph. If the wind has a speed of 80 kph on a direction of N 40° E, what is the ground speed of the plane?',
    options: opts('683.51 kph', '685.31 kph', '638.15 kph', '631.85 kph'),
    ...solved(15, 'D', '631.85 kph'),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q16',
    number: 16,
    pageNumber: 555,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Trigonometry — Relative Velocity',
    text: "A boat's speed in still water is $v_{bw} = 1.85$ m/s. If the boat is to travel north, directly across a river whose westward current has speed $v_{ws} = 1.20$ m/s, at what upstream angle must the boat head?",
    options: opts('40.44°', '45.21°', '53.65°', '49.56°'),
    ...recall(
      'D',
      '49.56°',
      'The booklet works this item on folio 568, but that folio is a Hydraulics page bound into the Mathematics run — a binding defect — so no working is present in the scan. The heading angle satisfies $\\cos\\theta = 1.20/1.85$, giving $\\theta = 49.56°$.',
    ),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q17',
    number: 17,
    pageNumber: 555,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Trigonometry — River Crossing',
    text: 'A swimmer is capable of swimming 0.45 m/s in still water, if she aims her body directly across a 75-m wide river whose current is 0.40 m/s, how far downstream will she land? (from a point opposite her starting point).',
    options: opts('70 m', '65 m', '75 m', '67 m'),
    ...recall(
      'D',
      '67 m',
      'The booklet works this item on folio 568, but that folio is a Hydraulics page bound into the Mathematics run — a binding defect — so no working is present in the scan. The crossing takes $75/0.45 = 166.7$ s, drifting $0.40(166.7) = 66.7$ m downstream.',
    ),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q18',
    number: 18,
    pageNumber: 555,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Geometry — Triangles',
    text: 'Which of the following is/are correct?\nI. If two sides of a triangle are congruent, the angles opposite these sides are congruent.\nII. If two angles of a triangle are congruent, the sides opposite these angles are congruent.\nIII. An equilateral triangle is equiangular.\nIV. An equiangular triangle is equilateral.',
    options: opts(
      'I, II, and III only',
      'II and III only',
      'III and IV only',
      'All of the above',
    ),
    ...recall(
      'D',
      'All of the above',
      'The booklet works this item on folio 568, but that folio is a Hydraulics page bound into the Mathematics run — a binding defect — so no working is present in the scan. All four statements are standard theorems of Euclidean geometry.',
    ),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q19',
    number: 19,
    pageNumber: 555,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Geometry — Circular Arc',
    text: 'A new kind of atom smasher is to be composed of two tangents and a circular arc which is concave towards the point of intersection of the two tangents. Each tangent and the arc of the circle is 1-mile long. What is the radius of the circle?',
    options: opts('1473.45 ft', '1347.54 ft', '1437.45 ft', '1374.54 ft'),
    ...recall(
      'C',
      '1437.45 ft',
      'The booklet works this item on folio 568, but that folio is a Hydraulics page bound into the Mathematics run — a binding defect — so no working is present in the scan. The four choices are all within 7% of each other (1437.45, 1473.45, 1374.54, 1347.54 ft), so the printed key is the only authority for this item.',
    ),
  },
];
