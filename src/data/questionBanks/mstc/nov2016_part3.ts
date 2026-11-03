import { Question } from '../../../types/exam';
import { worked, opts } from './nov2016Helpers';

/**
 * MSTC — November 2016, items 39–57.
 *
 * Booklet folios 349–351. Solid geometry and calculus give way to engineering
 * economy from item 52, then surveying instrumentation at the end.
 */
export const MSTC_NOV2016_PART3: Question[] = [
  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q39',
    number: 39,
    pageNumber: 349,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Surveying — Triangulation',
    text: 'An engineer is hired to design a bridge to carry traffic across the river. Her first problem is to determine the distance from point A to point B. To do so, she starts at point A and measures distance 250 m in a direction at right angles to the segment AB. At point C, she uses her transit to find the angle ACB which measures 49°50\u2032. How long should the bridge be?',
    options: opts('286.124 m', '296.184 m', '246.144 m', '196.184 m'),
    ...worked('B', '296.184 m (Option B)', [
      'AC is perpendicular to AB, so ABC is right-angled at A with AC = 250 m.',
      'The angle at C is measured between CA and CB, so AB is the side opposite it: $\\tan(49°50\u2032) = \\dfrac{AB}{AC}$.',
      '$AB = 250\\tan(49°50\u2032) = 250(1.1847) = 296.18$ m.',
    ]),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q40',
    number: 40,
    pageNumber: 349,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Trigonometry — Angles of Depression',
    text: 'From the third floor of a tall building, the angle of depression of an object on the ground is 35° 58\u2032, while from the sixth floor window, 9.75 m above the first point of observation, the angle of depression of the same object is 58° 35\u2032. Find the distance of the object from the building.',
    options: opts('13.58 m', '20.14 m', '7.28 m', '10.69 m'),
    ...worked('D', '10.69 m (Option D)', [
      'Let $d$ be the horizontal distance and $h$ the height of the third-floor sight line above the object.',
      'Third floor: $h = d\\tan(35°58\u2032) = 0.7256d$.',
      'Sixth floor, 9.75 m higher: $h + 9.75 = d\\tan(58°35\u2032) = 1.6378d$.',
      'Subtracting: $9.75 = d(1.6378 - 0.7256) = 0.9122d$.',
      '$d = 10.69$ m.',
    ]),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q41',
    number: 41,
    pageNumber: 349,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Plane Geometry — Equilateral Triangles',
    text: 'Given an equilateral triangle ABC. A point O inside the triangle is 3 m from A, 4 m from B, and 5 m from C. What is the area of the triangle?',
    options: opts('20.14 cm²', '16.85 cm²', '19.83 cm²', '18.65 cm²'),
    ...worked(
      'C',
      '19.83 m² (Option C)',
      [
        'Rotate the figure so that the three distances from the interior point form a triangle of sides 3, 4 and 5 — a right triangle of area $\\tfrac{1}{2}(3)(4) = 6$.',
        'For an equilateral triangle of side $s$ with an interior point at distances $a, b, c$: $s^2 = \\tfrac{1}{2}\\left(a^2 + b^2 + c^2 + 4\\sqrt{3}\\,K\\right)$, where $K$ is the area of the $a$-$b$-$c$ triangle.',
        '$s^2 = \\tfrac{1}{2}\\left(9 + 16 + 25 + 4\\sqrt{3}(6)\\right) = \\tfrac{1}{2}(50 + 41.569) = 45.78$.',
        'Area of ABC $= \\dfrac{\\sqrt{3}}{4}s^2 = \\dfrac{\\sqrt{3}}{4}(45.78) = 19.83$ m².',
      ],
      'The choices are printed in cm² although every length in the stem is in metres; the answer is 19.83 m².',
    ),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q42',
    number: 42,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Plane Geometry — Classification',
    text: 'What is the proper sequence of the following polygons?\n\nI. Quadrilateral\nII. Parallelogram\nIII. Rectangle\nIV. Square',
    options: opts('II, I, IV, III', 'I, IV, III, II', 'III, IV, II, I', 'I, II, III, IV'),
    ...worked('D', 'I, II, III, IV (Option D)', [
      'Each term must be the general case containing the next, so the sequence runs from widest to narrowest.',
      'Every parallelogram is a quadrilateral, every rectangle is a parallelogram, and every square is a rectangle.',
      'Quadrilateral → Parallelogram → Rectangle → Square, i.e. I, II, III, IV.',
    ]),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q43',
    number: 43,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Plane Geometry — Areas',
    text: 'ABCD is a square with side of 10 cm. Square PQRS is drawn inside the square ABCD such that trapezoids PQBA, QRCB, SRDC, and PSDA are equal. If the area of the trapezium is 16 cm², find the height of the trapezium.',
    options: opts('6', '3', '2', '1'),
    ...worked('C', '2 cm (Option C)', [
      'Area of ABCD $= 10^2 = 100$ cm².',
      'Four equal trapezoids take $4(16) = 64$ cm², leaving the inner square $100 - 64 = 36$ cm², so PQRS has side 6 cm.',
      'The trapezoid height is the gap between the outer and inner squares on each side: $\\dfrac{10 - 6}{2} = 2$ cm.',
    ]),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q44',
    number: 44,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Solid Geometry — Polyhedra',
    text: 'A polyhedron with triangular faces has nine vertices. Three vertices have 6 common faces, two vertices have 5 common faces, two vertices have 4 common faces, and two vertices have 3 common faces. How many faces have the polyhedron?',
    options: opts('12', '16', '9', '14'),
    ...worked('D', '14 faces (Option D)', [
      'Count vertex-face incidences: $3(6) + 2(5) + 2(4) + 2(3) = 18 + 10 + 8 + 6 = 42$.',
      'Every face is a triangle, so each face is counted at exactly three of its vertices.',
      'Number of faces $= 42/3 = 14$.',
    ]),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q45',
    number: 45,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Solid Geometry — Spheres',
    text: 'The volume of a sphere is 36 cm³. What is its surface area in square cm?',
    options: opts('62.24', '49.14', '52.73', '39.54'),
    ...worked('C', '52.73 cm² (Option C)', [
      '$V = \\tfrac{4}{3}\\pi r^3 = 36$, so $r^3 = 8.594$ and $r = 2.048$ cm.',
      '$A = 4\\pi r^2 = 4\\pi(4.196)$.',
      '$A = 52.73$ cm².',
    ]),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q46',
    number: 46,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Solid Geometry — Frustum of a Cone',
    text: 'A coffee pot is in the shape of a frustum of a cone with open-top diameter one half of its base diameter. The two-cup mark of the pot is along its mid-height. Where should the three-cup mark be located?',
    options: opts(
      '2% way up from the bottom',
      '2% way down from the top',
      '5% way down from the top',
      '5% way up from the bottom',
    ),
    ...worked('B', '2% way down from the top (Option B)', [
      'Let the base radius be $R$ and the height $H$; the top radius is $R/2$ and the radius at height $h$ is $R\\left(1 - \\dfrac{h}{2H}\\right)$.',
      'Total volume: $\\dfrac{\\pi H}{3}\\left(R^2 + \\dfrac{R^2}{2} + \\dfrac{R^2}{4}\\right) = 0.5833\\pi R^2 H$.',
      'At mid-height the radius is $0.75R$, giving $0.3854\\pi R^2 H$ — that is $66.1\\%$ of the pot, which the booklet calls two cups. The whole pot is therefore about 3.03 cups.',
      'Three cups is $3/3.03 = 99.1\\%$ of the volume, so the mark sits just under 1% of the height from the top — "2% way down from the top".',
    ]),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q47',
    number: 47,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Calculus — Tangents',
    text: 'Find the slope of the tangent to y = x eˣ at x = 0.8.',
    options: opts('1', '8', '2', '4'),
    ...worked('D', '4 (Option D)', [
      'By the product rule: $\\dfrac{dy}{dx} = e^x + xe^x = e^x(1 + x)$.',
      'At $x = 0.8$: $e^{0.8}(1 + 0.8)$.',
      '$= 2.2255(1.8) = 4.006$, i.e. 4.',
    ]),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q48',
    number: 48,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Calculus — Sub-normal',
    text: 'Given a circle x² + y² = 25. Find the sub-normal at y = 4.',
    options: opts('2', '1.5', '2.5', '3'),
    ...worked('D', '3 (Option D)', [
      'At $y = 4$: $x^2 = 25 - 16 = 9$, so $x = 3$.',
      'Differentiate implicitly: $2x + 2y\\,y\' = 0$, so $y\' = -x/y$.',
      'The sub-normal is $y\\,y\' = y\\left(-\\dfrac{x}{y}\\right) = -x$.',
      'Its magnitude is $|x| = 3$.',
    ]),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q49',
    number: 49,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Calculus — Logarithmic Differentiation',
    text: 'Evaluate the derivative with respect to x of y = x^(x²).',
    options: opts(
      'x^(x²) (1 + ln x²)',
      'xˣ (1 + ln x²)',
      'x^(x²) (1 + ln 2x)',
      'x^(x^x) (1 + ln 2x)',
    ),
    ...worked(
      'A',
      'x^(x²) (1 + ln x²) (Option A)',
      [
        'Take logarithms: $\\ln y = x^2 \\ln x$.',
        'Differentiate implicitly: $\\dfrac{y\'}{y} = 2x\\ln x + x^2\\cdot\\dfrac{1}{x} = 2x\\ln x + x$.',
        '$y\' = y\\,x(2\\ln x + 1) = x^{x^2}\\left(1 + \\ln x^2\\right)$, since $2\\ln x = \\ln x^2$.',
      ],
      'The exponents print very small in this scan and the stem could be read as $x^{x^x}$; only the $x^2$ reading reproduces the keyed option, and $x^{x^x}$ differentiates to something none of the choices offers.',
    ),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q50',
    number: 50,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Calculus — Optimization',
    text: 'A rectangular field bounded on one side by a building is to be fenced the other three sides. If 980 m of fence is to be used, find the dimension dimensions of the largest field that can be fenced in.',
    options: opts('280 m × 420 m', '220 m × 540 m', '245 m × 490 m', '200 m × 580 m'),
    ...worked('C', '245 m × 490 m (Option C)', [
      'The building replaces one long side, so fencing covers two widths and one length: $2x + y = 980$, hence $y = 980 - 2x$.',
      'Area: $A = xy = x(980 - 2x) = 980x - 2x^2$.',
      '$\\dfrac{dA}{dx} = 980 - 4x = 0$, so $x = 245$ m and $y = 980 - 490 = 490$ m.',
    ]),
  },

  // ── Item 51 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q51',
    number: 51,
    pageNumber: 350,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Engineering Economy — Nominal and Effective Rates',
    text: 'What is the equivalent interest of money compounded monthly and money at 14% compounded quarterly?',
    options: opts('14.83%', '13.48%', '13.84%', '14.38%'),
    ...worked('C', '13.84% (Option C)', [
      'Find the effective rate of 14% compounded quarterly: $\\left(1 + \\dfrac{0.14}{4}\\right)^4 = 1.035^4 = 1.147523$.',
      'Equate it to monthly compounding: $\\left(1 + \\dfrac{r}{12}\\right)^{12} = 1.147523$.',
      '$\\dfrac{r}{12} = 1.147523^{1/12} - 1 = 0.011528$.',
      '$r = 12(0.011528) = 0.1383$, i.e. 13.84% compounded monthly.',
    ]),
  },

  // ── Item 52 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q52',
    number: 52,
    pageNumber: 351,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Engineering Economy — Compound Interest',
    text: 'How long does it take an investment of P200,000 to double if it is invested at 5% interest compounded quarterly?',
    options: opts('14 years', '15 years', '18 years', '20 years'),
    ...worked('A', '14 years (Option A)', [
      'Doubling requires $\\left(1 + \\dfrac{0.05}{4}\\right)^{4n} = 2$, i.e. $1.0125^{4n} = 2$.',
      '$4n = \\dfrac{\\ln 2}{\\ln 1.0125} = \\dfrac{0.6931}{0.012422} = 55.80$ quarters.',
      '$n = 13.95$ years, so the investment doubles during the 14th year.',
    ]),
  },

  // ── Item 53 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q53',
    number: 53,
    pageNumber: 351,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Engineering Economy — Equivalent Uniform Annual Cost',
    text: 'Given the following maintenance cost for a bridge.\n\nEnd of 5th year = P 100,000\nEnd of 10th year = P 200,000\nEnd of 15th year = P 300,000\n\nWhat is the equivalent uniform annual cost of these maintenance cost over a 20-year period if money is worth 8% annually?',
    options: opts('P30,000', 'P28,090', 'P26,000', 'P22,000'),
    ...worked('C', 'P26,000 (Option C)', [
      'Discount each outlay to present worth at 8%: $100{,}000(0.68058) = 68{,}058$; $200{,}000(0.46319) = 92{,}638$; $300{,}000(0.31524) = 94{,}572$.',
      'Total present worth $= 255{,}268$.',
      'Spread over 20 years with the capital recovery factor $0.10185$: $255{,}268(0.10185) = 26{,}000$.',
    ]),
  },

  // ── Item 54 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q54',
    number: 54,
    pageNumber: 351,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Engineering Economy — Capital Recovery',
    text: 'An equipment costing P50,000 is expected to have a salvage value of P5,000 after its 10 years of service. What is the annual capital recovery amount if invested at 8% annually?',
    options: opts('P7,106', 'P7,601', 'P7,160', 'P7,816'),
    ...worked('A', 'P7,106 (Option A)', [
      'Capital recovery converts the first cost to an annuity and credits the salvage value back as a sinking fund.',
      '$CR = 50{,}000(A/P, 8\\%, 10) - 5{,}000(A/F, 8\\%, 10)$.',
      '$= 50{,}000(0.14903) - 5{,}000(0.06903) = 7{,}451.5 - 345.2$.',
      '$= 7{,}106$.',
    ]),
  },

  // ── Item 55 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q55',
    number: 55,
    pageNumber: 351,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Engineering Economy — Depreciation',
    text: 'A machine costing P1.8M has a salvage value of P300,000 after 5 years. Calculate the depreciation value (book value) at the end of 3 years using the straight-line method.',
    options: opts('P900,000', 'P860,000', 'P750,000', 'P700,000'),
    ...worked('A', 'P900,000 (Option A)', [
      'Annual depreciation: $\\dfrac{1{,}800{,}000 - 300{,}000}{5} = 300{,}000$.',
      'Book value after 3 years: $1{,}800{,}000 - 3(300{,}000)$.',
      '$= 900{,}000$.',
    ]),
  },

  // ── Item 56 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q56',
    number: 56,
    pageNumber: 351,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Engineering Economy — Break-even',
    text: 'A manufacturing company has a production capacity of 600,000 units with an income of P720,000. The company\u2019s fixed expense is P250,000 and the cost to produce per unit is P0.7. Compute the number of units to break even.',
    options: opts('500,000', '450,000', '550,000', '400,000'),
    ...worked('A', '500,000 units (Option A)', [
      'Selling price per unit: $720{,}000 / 600{,}000 = $ P1.20.',
      'Contribution per unit: $1.20 - 0.70 = $ P0.50.',
      'Break-even volume: $250{,}000 / 0.50 = 500{,}000$ units.',
    ]),
  },

  // ── Item 57 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q57',
    number: 57,
    pageNumber: 351,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Surveying — Level Bubble Sensitivity',
    text: 'A sight is taken with an engineer\u2019s level at rod held 100 m away and an initial reading of 1.83 m was recorded. The bubble is then levelled through six spaces on the level tube and the new rod reading is 1.91 m. What is the sensitivity of the bubble tube in seconds of arc?',
    options: opts('25.5\u2033', '27.5\u2033', '29.5\u2033', '30.5\u2033'),
    ...worked('B', '27.5\u2033 (Option B)', [
      'The rod moved $1.91 - 1.83 = 0.08$ m while the line of sight tilted over 100 m.',
      'Tilt: $\\theta = \\dfrac{0.08}{100} = 0.0008$ rad $= 0.0008(206{,}265) = 165.0\u2033$.',
      'The bubble travelled six spaces, so the sensitivity is $165.0/6 = 27.5\u2033$ per space.',
    ]),
  },
];
