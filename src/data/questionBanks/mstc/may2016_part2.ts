import { Question } from '../../../types/exam';
import { solved, opts } from './may2016Helpers';

export const MSTC_MAY2016_PART2: Question[] = [
  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q16',
    number: 16,
    pageNumber: 244,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Work and Man-Days',
    text: 'A contractor estimates that he could finish a project in 15 days if he has 20 men. At the start, he hired 10 men then after 6 days, 10 more men are added. How many days was the project delayed?',
    options: opts('6', '5', '4', '3'),
    ...solved(16, 'D', '3 days (Option D)', 256),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q17',
    number: 17,
    pageNumber: 245,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Perimeter and Cost',
    text: "A rectangular beachfront lot has a perimeter of 1000 m. To create a sense of privacy, the lot owner decides to fence along three sides, excluding the side that fronts the water. The fencing cost along the lot's front length is P1,500 per meter, and along two side widths is P500 per meter. The total cost of the fencing along all three sides comes to P650,000. What is the lot's dimensions?",
    options: opts('425 m × 150 m', '350 m × 150 m', '300 m × 200 m', '250 m × 250 m'),
    ...solved(17, 'C', '300 m × 200 m (Option C)', 257),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q18',
    number: 18,
    pageNumber: 245,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Uniform Border Width',
    text: 'A rectangular swimming pool is 12 meters long and 8 meters wide. A tile border of uniform width is to be built around the pool, using 102 square meters of tile. The tile is from a discounted stock (so no additional materials are available), and all 120 square meters are to be used. How wide should the border be?',
    options: opts('1.8 m', '2.8 m', '2.4 m', '2.1 m'),
    ...solved(
      18,
      'D',
      '2.1 m (Option D)',
      257,
      257,
      'Booklet misprint: the stem quotes 102 square meters of tile and then says all 120 square meters are to be used. The working and the key both use the 102 m² figure, which gives w ≈ 2.106 m — option D. The 120 m² clause would give w ≈ 2.47 m, a value in none of the choices.',
    ),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q19',
    number: 19,
    pageNumber: 245,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Systems of Linear Equations',
    text: 'A nutritionist in a hospital is arranging special diets that consist of a combination of three basic foods. It is important that patients on this diet consume exactly 310 units of calcium, 190 units of iron, and 250 units of vitamin A each day. The amounts of these nutrients in one food ounce are given in the following table.\n\n| Units per Ounce | Calcium | Iron | Vitamin A |\n| --- | --- | --- | --- |\n| Food A | 30 | 10 | 10 |\n| Food B | 10 | 10 | 30 |\n| Food C | 20 | 20 | 20 |',
    options: opts(
      'Food A - 5 ounces; Food B - 3 ounces; Food C - 6 ounces',
      'Food A - 5 ounces; Food B - 6 ounces; Food C - 3 ounces',
      'Food A - 6 ounces; Food B - 3 ounces; Food C - 5 ounces',
      'Food A - 6 ounces; Food B - 5 ounces; Food C - 3 ounces',
    ),
    ...solved(19, 'C', 'A = 6 oz, B = 3 oz, C = 5 oz (Option C)', 257),
  },

  // ── Item 20 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q20',
    number: 20,
    pageNumber: 245,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Algebra — Market Equilibrium',
    text: 'The demand function for a certain compact disc is given by the function\n\np = -0.01x² - 0.2x + 9\n\nand the corresponding supply function is given by\n\np = 0.01x² - 0.1x + 3\n\nwhere x is in thousands of units. Find the equilibrium quantity by solving the system consisting of the two given equations.',
    options: opts('30,000', '15,000', '20,000', '25,000'),
    ...solved(
      20,
      'B',
      'x = 15 thousand units (Option B)',
      258,
      258,
      'Booklet inconsistency: the printed supply curve carries the constant +3, but the working drops both constants and solves -0.01x² - 0.2x = 0.01x² + 0.1x instead. Either form gives x = 15, so the key is unaffected.',
    ),
  },

  // ── Item 21 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q21',
    number: 21,
    pageNumber: 245,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Trigonometry — Fourier Series',
    text: 'Given the Fourier series in cosine form:\n\nf(t) = 5 cos 20πt + 2 cos 40πt + cos 80πt\n\nCompute the fundamental frequency.',
    options: opts('40', '10', '20', '80'),
    ...solved(
      21,
      'B',
      '10 (Option B)',
      257,
      258,
      'Booklet misprint: the working writes the three components as 20πt, 60πt and 100πt rather than the 20πt, 40πt and 80πt printed in the stem. The greatest common divisor is 20π in either case, so the fundamental frequency is still 10.',
    ),
  },

  // ── Item 22 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q22',
    number: 22,
    pageNumber: 245,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Trigonometry — Angles of Elevation',
    text: "From point A on level ground, the angles of elevation of the top T and bottom B of a tower situated on the top of a hill are measured as 47° 52' and 39° 36'. Find the height of the hill if the height of the tower is 85.41 m.",
    options: opts('224 m', '197 m', '289 m', '254 m'),
    ...solved(22, 'D', '254 m (Option D)', 258),
  },

  // ── Item 23 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q23',
    number: 23,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Plane Geometry — Area of a Triangle',
    text: 'Find the area of a triangle whose sides are measuring a = 235 m, b = 280 m, and c = 425 m.',
    options: opts('30,390 m²', '30,986 m²', '32,452 m²', '32,875 m²'),
    ...solved(23, 'A', '30,390 m² (Option A)', 258),
  },

  // ── Item 24 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q24',
    number: 24,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Plane Geometry — Area of a Triangular Lot',
    text: 'A piece of property in downtown Cebu is advertised for sale at P9,500 per square meter. If the lengths of the sides of the triangular lot are 70 m, 72 m, and 49 m, what is the asking price for the lot?',
    options: opts('P14,896,520', 'P16,058,000', 'P15,497,290', 'P15,864,250'),
    ...solved(24, 'C', 'P15,497,290 (Option C)', 259),
  },

  // ── Item 25 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q25',
    number: 25,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Plane Geometry — Ratio of Triangle Areas',
    text: 'A line is drawn from point P to point O where P is along the line AB and O is along the line AC of the triangular lot ABC. If AP:PB = 3:1 and AO:OC = 2:5, what is the proportion of the area of APO and ABC?',
    options: opts('2:15', '3:14', '4:7', '3:5'),
    ...solved(25, 'B', '3:14 (Option B)', 259),
  },

  // ── Item 26 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q26',
    number: 26,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Plane Geometry — Similar Regular Polygons',
    text: 'In two regular polygons with the same number of sides, find the length of a side of the smaller if the lengths of the apothems are 20 and 50 and a side of the larger has length 32.5.',
    options: opts('15', '14', '16', '13'),
    ...solved(26, 'D', '13 (Option D)', 260),
  },

  // ── Item 27 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q27',
    number: 27,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Plane Geometry — Interior Angles of a Quadrilateral',
    text: 'Find each interior angle measure of a quadrilateral if its interior angles are represented by x + 10, 2x + 20, 3x - 50, and 2x - 20.',
    options: opts('50°, 100°, 70°, 60°', '70°, 140°, 130°, 100°', '60°, 120°, 100°, 80°', '40°, 80°, 40°, 40°'),
    ...solved(27, 'C', '60°, 120°, 100°, 80° (Option C)', 260),
  },

  // ── Item 28 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q28',
    number: 28,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Plane Geometry — Arc Length',
    text: 'The wagon wheel has a diameter of 28 inches and an angle of 30° between the spokes. What is the length of the arc s (to the nearest hundredth of an inch) between two adjacent spokes? (Hint: use the formula s = rθ to get the arc length)',
    options: opts('8.33 in', '6.67 in', '7.33 in', '7.67 in'),
    ...solved(28, 'C', '7.33 in (Option C)', 260),
  },

  // ── Item 29 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q29',
    number: 29,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Plane Geometry — Intersecting Chords',
    text: 'Chord AB and CD intersect at point O which is inside the circle. AO = 8 cm, CO = 12 cm, and DO = 20 cm. If AB is the diameter of the circle, calculate the area of OCA.',
    options: opts('58.65 cm²', '48.96 cm²', '63.25 cm²', '54.81 cm²'),
    ...solved(29, 'D', '54.81 cm² (Option D)', 260, 261),
  },

  // ── Item 30 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q30',
    number: 30,
    pageNumber: 246,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Plane Geometry — Circular Measure',
    text: 'A train travels at 8 mph along a circular track of radius 2500 ft. Through what angle does it turn in one minute?',
    options: opts('1863°', '15.36°', '14.56°', '16.13°'),
    ...solved(30, 'D', '16.13° (Option D)', 261),
  },
];
