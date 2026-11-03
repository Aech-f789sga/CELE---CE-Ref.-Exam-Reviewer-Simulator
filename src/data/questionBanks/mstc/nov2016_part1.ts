import { Question } from '../../../types/exam';
import { worked, opts } from './nov2016Helpers';

/**
 * MSTC — November 2016, items 1–19.
 *
 * Booklet folios 345–347. The section opens on folio 345 under the banner
 * "MATHEMATICS, SURVEYING & TRANSPO. ENGINEERING — NOVEMBER 2016" and runs
 * without situations: every item stands alone.
 */
export const MSTC_NOV2016_PART1: Question[] = [
  // ── Item 1 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q01',
    number: 1,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Linear Equations',
    text: 'Nine subtracted from 8 times a number is 39. What is the number?',
    options: opts('5', '8', '7', '6'),
    ...worked('D', '6 (Option D)', [
      'Write the statement as an equation: $8x - 9 = 39$.',
      '$8x = 48$.',
      '$x = 6$.',
      'Check: $8(6) - 9 = 48 - 9 = 39$.',
    ]),
  },

  // ── Item 2 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q02',
    number: 2,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Linear Equations',
    text: 'If the solution is -3 to the equation 6x + 14 = -7 - x, what is the value of the solution?',
    options: opts('-4', '5', '4', '-5'),
    ...worked(
      'A',
      '-4 (Option A)',
      [
        'Substitute $x = -3$ into the left side: $6(-3) + 14 = -18 + 14 = -4$.',
        'Substitute $x = -3$ into the right side: $-7 - (-3) = -7 + 3 = -4$.',
        'Both sides evaluate to $-4$, which is what the printed key marks.',
      ],
      'The stem is garbled in print: it asks for "the value of the solution" when $x = -3$ is already given, and $-3$ is not among the choices. The booklet\'s own working evaluates both sides at $x = -3$ and reports the common value $-4$, which is option A.',
    ),
  },

  // ── Item 3 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q03',
    number: 3,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Simplifying Expressions',
    text: 'Simplify the following expression: 6(2x + 4y) + 10(5x + 3y).',
    options: opts('54x + 62y', '62x + 54y', '50x + 30y', '-12x + 24y'),
    ...worked('B', '62x + 54y (Option B)', [
      'Expand the first bracket: $12x + 24y$.',
      'Expand the second bracket: $50x + 30y$.',
      'Collect like terms: $(12 + 50)x + (24 + 30)y = 62x + 54y$.',
    ]),
  },

  // ── Item 4 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q04',
    number: 4,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Absolute Error',
    text: 'The expression (±x - x) is defined to be absolute in x, where x is the true value of a quantity and x is the measure value or value stored in a computer. If the true value of a quantity is 3.5 and the absolute error must be less than 0.05, find the acceptable measured values.',
    options: opts('3.45 > x < 3.55', '3.45 ≤ x > 3.55', '3.45 < x < 3.55', '3.45 ≥ x > 3.55'),
    ...worked(
      'C',
      '3.45 < x < 3.55 (Option C)',
      [
        'The absolute error is $|x - 3.5|$, and it must be below $0.05$.',
        '$|x - 3.5| < 0.05$ means $-0.05 < x - 3.5 < 0.05$.',
        'Adding 3.5 throughout: $3.45 < x < 3.55$.',
      ],
      'Options A, B and D are malformed: each pairs a strict sign with a reversed one ("> x <", "≤ x >", "≥ x >"), which cannot describe an interval. C is the only well-formed inequality, and it is also the correct one.',
    ),
  },

  // ── Item 5 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q05',
    number: 5,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Investment Word Problems',
    text: 'P16,000 is invested in two accounts paying 6% and 8% annual interest rate. Find the amount deposited in each bank if the total interest from two deposits is P1,100?',
    options: opts('P8,000 & P8,000', 'P11,000 & P5,000', 'P10,000 & P6,000', 'P9,000 & P7,000'),
    ...worked('D', 'P9,000 at 6% and P7,000 at 8% (Option D)', [
      'Let $x$ be the amount at 6%; the remainder, $16{,}000 - x$, earns 8%.',
      '$0.06x + 0.08(16{,}000 - x) = 1{,}100$.',
      '$0.06x + 1{,}280 - 0.08x = 1{,}100$.',
      '$-0.02x = -180$, so $x = 9{,}000$ and the balance is $7{,}000$.',
      'Check: $9{,}000(0.06) + 7{,}000(0.08) = 540 + 560 = 1{,}100$.',
    ]),
  },

  // ── Item 6 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q06',
    number: 6,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Sequences and Series',
    text: 'What is the quotient of the 9th term to 7th term if the sum of n terms is given by the equation 3^(2n-1) + b?',
    options: opts('27', '81', '36', '243'),
    ...worked(
      'B',
      '81 (Option B)',
      [
        'The $n$th term is the difference of consecutive partial sums: $a_n = S_n - S_{n-1}$.',
        '$a_n = 3^{2n-1} - 3^{2n-3} = 3^{2n-3}(3^2 - 1) = 8 \\cdot 3^{2n-3}$.',
        'The constant $b$ cancels in the subtraction, so it never reaches the answer.',
        '$a_9 / a_7 = 3^{15} / 3^{11} = 3^4 = 81$.',
      ],
      'The printed sum is "3^(2n-1) + b". The unknown constant b drops out of the difference, so the answer is fixed regardless of its value.',
    ),
  },

  // ── Item 7 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q07',
    number: 7,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Linear Models',
    text: "Donna Thieme's starting annual salary is $40,000 and increases $1,600 per year for the next 5 years. Determine the model that corresponds to her salary.",
    options: opts('40,000 + 1,600t', '40,000 - 1,600t', '38,400 + 1,600t', '38,400 - 1,600t'),
    ...worked('C', '38,400 + 1,600t (Option C)', [
      'The salary rises by a fixed $1{,}600$ each year, so the model is linear with slope $+1{,}600$; this eliminates B and D.',
      'At $t = 0$ (the starting year) the salary is $40{,}000$, so a model of the form $40{,}000 + 1{,}600t$ would give $40{,}000$ in the starting year and $41{,}600$ one year later.',
      'The keyed model is written so that $t$ counts completed years: $40{,}000 + 1{,}600(t - 1) = 38{,}400 + 1{,}600t$.',
      'Check at $t = 1$: $38{,}400 + 1{,}600 = 40{,}000$, the starting salary.',
    ]),
  },

  // ── Item 8 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q08',
    number: 8,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Arithmetic Progression',
    text: 'In 1990, the average yearly allowance for teachers was P31,076. This salary increased steadily by P1,496 each year. When did the average yearly allowance exceed P40,052?',
    options: opts('after 1997', 'after 1995', 'after 1998', 'after 1996'),
    ...worked('D', 'after 1996 (Option D)', [
      'Allowance after $n$ years from 1990: $31{,}076 + 1{,}496n$.',
      'Set it equal to the target: $31{,}076 + 1{,}496n = 40{,}052$, so $1{,}496n = 8{,}976$ and $n = 6$.',
      'At $n = 6$ the allowance is exactly $40{,}052$ — it has reached the figure but not exceeded it. Exceeding begins at $n = 7$, i.e. 1997.',
      'So the allowance exceeded $40{,}052$ after 1996.',
    ]),
  },

  // ── Item 9 ─────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q09',
    number: 9,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Inclusion and Exclusion',
    text: 'In a certain town, 90% of the residents drink coffee, 80% drink tea, 70% drink whiskey, and 60% drink gin. No one drinks all four. What percent of the residents drink liquor?',
    options: opts('70%', '90%', '80%', '100%'),
    ...worked('D', '100% (Option D)', [
      'Total the four percentages: $90 + 80 + 70 + 60 = 300\\%$.',
      'That total counts every resident once per beverage they drink, so the average resident drinks $300/100 = 3$ of the four.',
      'Nobody drinks all four, so 3 is the largest number anyone can drink.',
      'An average that equals the maximum is only possible if every resident drinks exactly 3 — so every resident drinks at least one, and therefore 100% drink liquor.',
    ]),
  },

  // ── Item 10 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q10',
    number: 10,
    pageNumber: 345,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Work Problems',
    text: 'One pipe can fill a pool in 45 minutes, and two pipes can fill the same pool in 20 minutes. How long will it take for the second pipe alone to fill the pool?',
    options: opts('36 minutes', '25 minutes', '30 minutes', '15 minutes'),
    ...worked('A', '36 minutes (Option A)', [
      'Work rates add: $\\dfrac{1}{45} + \\dfrac{1}{x} = \\dfrac{1}{20}$.',
      '$\\dfrac{1}{x} = \\dfrac{1}{20} - \\dfrac{1}{45} = \\dfrac{9 - 4}{180} = \\dfrac{5}{180} = \\dfrac{1}{36}$.',
      '$x = 36$ minutes.',
    ]),
  },

  // ── Item 11 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q11',
    number: 11,
    pageNumber: 346,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Direct Variation',
    text: 'The volume of a gas (V) at constant pressure varies directly as the temperature (T). The gas has a volume of 250 m³ at a temperature of 30 °Kelvin. Predict the volume of the gas at temperature of 90 °Kelvin.',
    options: opts('750 m³', '700 m³', '800 m³', '650 m³'),
    ...worked('A', '750 m³ (Option A)', [
      'Direct variation gives $\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$.',
      '$\\dfrac{250}{30} = \\dfrac{V_2}{90}$.',
      '$V_2 = 250 \\times \\dfrac{90}{30} = 750$ m³.',
    ]),
  },

  // ── Item 12 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q12',
    number: 12,
    pageNumber: 346,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Direct Variation',
    text: 'The amount P of pollution varies directly with the population N of people. Kansas City has a population of 450,000 and produces 260,000 tons of pollutants. Find how many tons of pollution we should expect St. Louis to produce, if we know that its population is 980,000. Round answer to the nearest whole ton.',
    options: opts('522,662', '526,226', '665,222', '566,222'),
    ...worked('D', '566,222 tons (Option D)', [
      '$\\dfrac{P}{N} = k$, so $\\dfrac{260{,}000}{450{,}000} = \\dfrac{P}{980{,}000}$.',
      '$P = 260{,}000 \\times \\dfrac{980{,}000}{450{,}000}$.',
      '$P = 566{,}222$ tons.',
    ]),
  },

  // ── Item 13 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q13',
    number: 13,
    pageNumber: 346,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Logarithms',
    text: 'The acidity or alkalinity of any solution is determined by the concentration of hydrogen ions, [H+] in the substance, measured in moles per liter. Acidity (or alkalinity) is measured on a pH scale, using the model pH = -log[H+]. The pH scale ranges from 0 to 14. Values below 7 have progressively greater acidity, values greater than 7 are progressively more alkaline. Normal unpolluted rain has a pH of about 5.6. The acidity of rain over the northeastern United States, cause primarily by sulfur dioxide emissions, has had very damaging effects. One of the most acidic rainfalls on record had a pH of 2.4. What was the concentration of hydrogen ions in moles per liter?',
    options: opts('0.003', '0.004', '0.005', '0.006'),
    ...worked('B', '0.004 moles per liter (Option B)', [
      '$pH = -\\log[H^+]$ rearranges to $[H^+] = 10^{-pH}$.',
      '$[H^+] = 10^{-2.4}$.',
      '$10^{-2.4} = 3.98 \\times 10^{-3} \\approx 0.004$ moles per liter.',
    ]),
  },

  // ── Item 14 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q14',
    number: 14,
    pageNumber: 346,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Clock Problems',
    text: 'It is now between 2 and 3 o\u2019clock. At what time will the angle between the hands of the clock be bisected by the line connecting the center of the clock and the 3 o\u2019clock mark?',
    options: opts('2:18.46', '2:17.35', '2:16.58', '2:19.35'),
    ...worked('A', '2:18.46 (Option A)', [
      'Measure everything from the 3 o\u2019clock mark, in minute-spaces. Let $x$ be the minutes past 2.',
      'The hour hand sits $5 - x/12$ spaces from the mark; the minute hand sits $x - 15$ spaces from it on the other side.',
      'Bisecting the angle means the two distances are equal: $5 - \\dfrac{x}{12} = x - 15$.',
      '$20 = \\dfrac{13x}{12}$, so $x = 18.46$ minutes.',
      'The time is 2:18.46.',
    ]),
  },

  // ── Item 15 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q15',
    number: 15,
    pageNumber: 346,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Engineering Economy — Break-even Comparison',
    text: 'Given the following costs for two different kinds of heating systems for a two-bedroom house:\n\n| System | Cost to Install | Annual Operation |\n| :--- | ---: | ---: |\n| Solar | P 29,000 | P 150 |\n| Electric | P 5,000 | P 1,100 |\n\nAfter how many years will total costs for solar heating and electric heating be the same?',
    options: opts('45 years', '26 years', '36 years', '52 years'),
    ...worked('B', '26 years (Option B)', [
      'Let $t$ be the number of years. Solar: $29{,}000 + 150t$. Electric: $5{,}000 + 1{,}100t$.',
      '$29{,}000 + 150t = 5{,}000 + 1{,}100t$.',
      '$24{,}000 = 950t$.',
      '$t = 25.26$ years, which rounds up to 26 years — the first year in which the totals have met.',
    ]),
  },

  // ── Item 16 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q16',
    number: 16,
    pageNumber: 346,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Algebra — Cost Functions',
    text: 'The total cost (in pesos) to produce x pairs of shoes is C = 400x + 500,000/x. If 1,000 shoes were made, how much is the cost of each pair of shoes?',
    options: opts('P450.50', 'P410.50', 'P400.50', 'P402.50'),
    ...worked('C', 'P400.50 per pair (Option C)', [
      'Total cost at $x = 1{,}000$: $C = 400(1{,}000) + \\dfrac{500{,}000}{1{,}000} = 400{,}000 + 500 = 400{,}500$ pesos.',
      'Cost per pair: $\\dfrac{400{,}500}{1{,}000} = 400.50$ pesos.',
    ]),
  },

  // ── Item 17 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q17',
    number: 17,
    pageNumber: 347,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Calculus — Extended Mean Value Theorem',
    text: 'Find x₀ using the extended law of mean of the functions f(x) = 3x + 2 and g(x) = x² + 1 at intervals [1, 4].',
    options: opts('1.5', '3.0', '2.0', '2.5'),
    ...worked('D', 'x₀ = 2.5 (Option D)', [
      'Cauchy\u2019s mean value theorem sets $\\dfrac{f(b) - f(a)}{g(b) - g(a)} = \\dfrac{f\'(x_0)}{g\'(x_0)}$ on $(a, b)$.',
      '$f(4) - f(1) = 14 - 5 = 9$ and $g(4) - g(1) = 17 - 2 = 15$, so the left side is $9/15 = 0.6$.',
      '$f\'(x) = 3$ and $g\'(x) = 2x$, so the right side is $\\dfrac{3}{2x_0}$.',
      '$\\dfrac{3}{2x_0} = 0.6$ gives $x_0 = 2.5$.',
    ]),
  },

  // ── Item 18 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q18',
    number: 18,
    pageNumber: 347,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Permutations',
    text: 'How many ways can an organization with 38 members elect a President, Vice-President and a Secretary/Treasurer if no member can hold more than one position?',
    options: opts('56,166', '50,616', '60,516', '65,610'),
    ...worked('B', '50,616 ways (Option B)', [
      'The three offices are distinct and no one may hold two, so order matters.',
      'President: 38 choices; Vice-President: 37; Secretary/Treasurer: 36.',
      '$38 \\times 37 \\times 36 = 50{,}616$ ways.',
    ]),
  },

  // ── Item 19 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q19',
    number: 19,
    pageNumber: 347,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Probability — Combinations',
    text: 'How many ways can a student choose four Structural books and 3 Hydraulics books if there are nine Structural books and five Hydraulics books.',
    options: opts('2520', '1260', '3780', '630'),
    ...worked('B', '1,260 ways (Option B)', [
      'The order of choosing within a subject does not matter, so use combinations.',
      'Structural: $\\binom{9}{4} = 126$.',
      'Hydraulics: $\\binom{5}{3} = 10$.',
      'Together: $126 \\times 10 = 1{,}260$ ways.',
    ]),
  },
];
