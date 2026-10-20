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

export const MSTC_NOV2021_PART2: Question[] = [
  {
    ...base,
    id: 'mstc-nov2021-q19',
    number: 19,
    pageNumber: 243,
    category: 'Surveying — Slope from Contour Map',
    text:
      'A topographic surveying map using a scale 1 cm = 40 m, and width a contour interval of 1.0 m. The distance scaled on the map between two adjacent contours is 15 mm. Determine the slope of the ground in percent.',
    options: opt('1.766%', '1.787%', '1.667%', '1.662%'),
    correctAnswer: 'C',
    solution: { ...sol(19), finalAnswer: '1.667% (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q20',
    number: 20,
    pageNumber: 244,
    category: 'Algebra — Factoring Polynomials',
    text:
      'A manufacturer of metal washers needs to determine the cross-sectional area of each washer. If the outer radius of the washer is $R$ and the radius of hole is $r$, express the area of the washer as polynomial. Factor this polynomial completely.',
    options: opt(
      '$\\pi(R + r)(R + r)$ sq. units',
      '$\\pi(R + r)(R - r)$ sq. units',
      '$(R - r)(R + r)$ sq. units',
      '$(R + r)(R - r)$ sq. units',
    ),
    correctAnswer: 'B',
    solution: { ...sol(20), finalAnswer: 'π(R + r)(R − r) sq. units (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q21',
    number: 21,
    pageNumber: 244,
    category: 'Solid Geometry — Similar Solids',
    text:
      'The famous pyramid of Egypt has an altitude of 15 m and weight of 4,000 kg. It has a square base. At what distance from its base must it be cut by a plane parallel to its base so that the two solids of equal weight will be formed?',
    options: opt('6.8', '3.1', '5.3', '4.8'),
    correctAnswer: 'B',
    solution: { ...sol(21), finalAnswer: '3.0945 m ≈ 3.1 m (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q22',
    number: 22,
    pageNumber: 244,
    category: 'Solid Geometry — Sphere Surface Area',
    text:
      'The radius of the Moon is 1080 miles. Use the formula of the radius $r$ of a sphere given its surface area $A$, $r = \\sqrt{\\dfrac{A}{4\\pi}}$ to find the surface are of the moon. Round to the nearest square mile.',
    options: opt('10,657,415 sq. mi.', '14,657,415 sq. mi.', '12,657,415 sq. mi.', '13,657,415 sq. mi.'),
    correctAnswer: 'B',
    solution: { ...sol(22), finalAnswer: '14,657,415 sq. mi. (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q23',
    number: 23,
    pageNumber: 244,
    category: 'Analytic Geometry — Perpendicular Lines',
    text:
      'The coordinate system is designed for a football field. Each unit represents on meter. Pepe is at point $P(35, -20)$. The path of the ball from the corner kick is represented by the equation $y = (4/3)x$. To have the best chance for a shot on goal, Pepe wants to run to toward the ball so that his path meets the ball at right angles.\n\nFind the equation for the line on which Pepe should run.',
    options: opt(
      '$y - 20 = (3/4)(x - 35)$',
      '$y + 20 = -(3/4)(x - 35)$',
      '$y + 20 = -(3/4)(x + 35)$',
      '$y - 20 = -(3/4)(x + 35)$',
    ),
    correctAnswer: 'B',
    solution: { ...sol(23), finalAnswer: 'y + 20 = −(3/4)(x − 35) (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q24',
    number: 24,
    pageNumber: 244,
    category: 'Analytic Geometry — Parabola',
    text:
      'The interior of a satellite TV antenna is a dish having the shape of a (finite) paraboloid that has diameter 12 m and 2 m deep. Find the distance from the center of a dish to the focus.',
    options: opt('5.8 m', '4.5 m', '3 m', '6 m'),
    correctAnswer: 'B',
    solution: { ...sol(24), finalAnswer: '4.5 m (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q25',
    number: 25,
    pageNumber: 244,
    category: 'Complex Numbers — Polar Form',
    text: 'Find the magnitude and direction of the vector represented by (-5, -5).',
    options: opt(
      '$r = 4\\sqrt{2};\\ \\theta = 5\\pi/4$',
      '$r = 5\\sqrt{2};\\ \\theta = 4\\pi/5$',
      '$r = 5\\sqrt{2};\\ \\theta = 5\\pi/4$',
      '$r = 4\\sqrt{2};\\ \\theta = 3\\pi/4$',
    ),
    correctAnswer: 'C',
    solution: { ...sol(25), finalAnswer: 'r = 5√2, θ = 5π/4 (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q26',
    number: 26,
    pageNumber: 245,
    category: 'Calculus — Optimization',
    text:
      'The length of the base of rectangular box without a top is to be twice the width. Find the width that gives the smallest surface area if its volume is to be 1.78 m³.',
    options: opt('1.10 m', '1.11 m', '1.12 m', '1.13 m'),
    correctAnswer: 'A',
    solution: { ...sol(26), finalAnswer: '1.10 m (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q27',
    number: 27,
    pageNumber: 245,
    category: 'Calculus — Optimization',
    text:
      'A 25 ft long water trough has ends in the form of isosceles triangles whose equal sides are 5 ft long. Determine the dimension across the top of the triangular end so that the volume of the trough is a maximum.',
    options: opt('8.1 feet', '6.5 feet', '7.5 feet', '7.1 feet'),
    correctAnswer: 'D',
    solution: { ...sol(27), finalAnswer: '7.07 ft ≈ 7.1 ft (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q28',
    number: 28,
    pageNumber: 245,
    category: 'Calculus — Related Rates',
    text:
      'Two containers are being used. One container is in the form of an inverted right circular cone with height of 10 meters and a radius at the base of 4 meter. The other container is a right circular cylinder with a radius of 6 meters a height of 8 meters. If water is being drained from the conical container into the cylindrical container at the rate of 15 m³/min, how fast is the water level falling in the conical tank when the water level in the conical tank is 5 meters high?',
    options: opt('-1.91 m/min', '-1.99 m/min', '-1.19 m/min', '-1.11 m/min'),
    correctAnswer: 'C',
    solution: { ...sol(28), finalAnswer: '−1.19 m/min (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q29',
    number: 29,
    pageNumber: 246,
    category: 'Calculus — Derivatives',
    text:
      'The height $s$ above the ground of a ball dropped from the vista of Mines View park is given by $s = -4.9t^2 + 192$, where $s$ is measured in meters and $t$ in seconds. Find the instantaneous velocity of the falling ball at $t = 3$ sec.',
    options: opt('-24.9 m/s', '-29.4 m/s', '24.9 m/s', '29.4 m/s'),
    correctAnswer: 'B',
    solution: { ...sol(29), finalAnswer: '−29.4 m/s (Option B)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q30',
    number: 30,
    pageNumber: 246,
    category: 'Physics — Power',
    text:
      'Calculate the power required of a 1500-kg car when the car climbs a 10° hill at a steady 80 kph. Assume retarding force on the car $F_r = 750$ N.',
    options: opt('95.8 hp', '101.2 hp', '92.6 hp', '98.5 hp'),
    correctAnswer: 'D',
    solution: { ...sol(30), finalAnswer: '98.5 hp (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q31',
    number: 31,
    pageNumber: 246,
    category: 'Physics — Potential Energy',
    text:
      'A 5.00 kg box is pushed from the top of an incline and travels down the incline with and initial speed 10.0 m/s. The incline is 5.00 m long and the angle of the incline is 30°. The coefficient of friction between the box and the incline is 0.200. Determine the loss of potential energy.\n\n' +
      'Hint: $PE = mgh_2 - mgh_1 = mg(h_2 - h_1)$',
    options: opt('-373 J', '-250 J', '132 J', '-123 J'),
    correctAnswer: 'D',
    solution: { ...sol(31), finalAnswer: '−123 J (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q32',
    number: 32,
    pageNumber: 246,
    category: 'Thermodynamics — Air Compression',
    text:
      'Find the theoretical horsepower required to compress 2.8 m³ of air per minute from atmosphere (0.101 N/mm^2) to (0.7 N/mm^2) indicated on the gauge (i.e., 8.01 bar absolute).',
    options: opt('9.7 kW', '7.9 kW', '13.2 kW', '11.5 kW'),
    correctAnswer: 'C',
    solution: { ...sol(32), finalAnswer: '13.2 kW (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q33',
    number: 33,
    pageNumber: 246,
    category: 'Engineering Economy — Pump Cost',
    text:
      'An electric replacement sewage pump is being considered for purchase, it is capable of providing 200 hp. The pertinent data are as follows:\n\n' +
      '| Item | Value |\n|:---|:---|\n| Cost | P320,000 |\n| Annual Maintenance | P5,000 |\n| Electric efficiency | 0.85 |\n| Life expectancy | 14 years |\n\n' +
      'The pump is used for 400 hours per year and the cost of electricity is P4.0 per kilowatt-hour (1 hp = 0.746 kW). Assuming the pump will have no salvage value, what will be the monthly power and maintenance cost?',
    options: opt('P52,036.80', 'P30,440.70', 'P42,510.30', 'P23,820.50'),
    correctAnswer: 'D',
    solution: { ...sol(33), finalAnswer: 'P23,820.50 per month (Option D)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q34',
    number: 34,
    pageNumber: 246,
    category: 'Engineering Economy — Capacity Cost',
    text:
      'Your engineering group just finished the preliminary design of a small refinery. The estimated cost is P190 million for a capacity of 2 million barrels per year. Your management has asked you for order-of-magnitude estimates for facilities with capacities of 1 million and 3 million barrels per year. Compute the cost per barrel capacity.\n\n' +
      '| Capacity Exponents, n | Facility | Capacity Exponents, n | Facility |\n' +
      '|:---:|:---|:---:|:---|\n' +
      '| 0.07 | LP gas recovery in refineries | 0.65 | Oxygen plants |\n' +
      '| 0.73 | Polymerization, small plants | 0.65 | Styrene plant |\n' +
      '| 0.91 | Polymerization, large plants | 0.98 | Ammonia, and nitric acid or urea |\n' +
      '| 0.61 | Steam generation, large, 200 psi | 0.75 | Chlorine plants, electrolytic |\n' +
      '| 0.81 | Steam generation, large, 1000 psi | 0.57 | Refineries, small |\n' +
      '| 0.88 | Power generation, 2,000–20,000 kW | 0.67 | Refineries, large |\n' +
      '| 0.5 | Power generation, oil field, 20–200 kW | 0.55 | Hydrogen sulfide removal |\n' +
      '| 0.64 | Sulfur from H₂S | | |',
    options: opt(
      '1M = P95.00, 2M = P80.00, 3M = P128.00',
      '1M = P95.00, 2M = P128.00, 3M = P80.00',
      '1M = P128.00, 2M = P95.00, 3M = P80.00',
      '1M = P80.00, 2M = P128.00, 3M = P95.00',
    ),
    correctAnswer: 'C',
    solution: { ...sol(34), finalAnswer: '1M = P128.00, 2M = P95.00, 3M = P80.00 (Option C)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q35',
    number: 35,
    pageNumber: 247,
    category: 'Probability — Hypergeometric',
    text:
      'An Engineer selects a sample of 5 memory card from shipment of 100 that contains 5 defectives. Find the probability that the sample contains at least on defective.',
    options: opt('0.23', '0.83', '0.43', '0.63'),
    correctAnswer: 'A',
    solution: { ...sol(35), finalAnswer: '0.2304 ≈ 0.23 (Option A)' },
  },
  {
    ...base,
    id: 'mstc-nov2021-q36',
    number: 36,
    pageNumber: 247,
    category: 'Probability — Normal Distribution',
    text:
      'The amount of annual rainfall in a certain region is known from past experience to be a normally distributed random variable with a mean annual rainfall of 50 inches and a standard deviation of 4 inches. If the rainfall exceeds 57 inches during a year, it leads to floods. Find the probability that during a randomly picked year there will be floods.',
    options: opt('0.321', '0.231', '0.104', '0.401'),
    correctAnswer: 'D',
    solution: { ...sol(36), finalAnswer: '0.0401 (printed as 0.401, Option D)' },
  },
];
