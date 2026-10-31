import { Question } from '../../../types/exam';

export const MSTC_MAY2015_PART6: Question[] = [
  // Item 76
  {
    id: 'mstc-may2015-q76',
    number: 76,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Simple Curves',
    text: 'A simple curve has an external distance of 15 m and a central angle of 30°. If the length of one station is 20 m, find the radius of the curve.',
    options: [
      { label: 'A', text: '544.34 m' },
      { label: 'B', text: '689.25 m' },
      { label: 'C', text: '552.61 m' },
      { label: 'D', text: '425.22 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The external distance is E = R(sec I/2 − 1).',
      formulas: [
        'E = R\\left(\\sec\\frac{I}{2}-1\\right)',
        '15 = R(\\sec 15^\\circ - 1) = 0.035276R',
        'R = 425.22 \\text{ m}',
      ],
      steps: [
        'Step 1: I/2 = 15° and sec 15° = 1.035276.',
        'Step 2: 15 = R(0.035276).',
        'Step 3: R = 425.22 m.',
      ],
      finalAnswer: '425.22 m (Option D)',
    },
  },

  // Item 77
  {
    id: 'mstc-may2015-q77',
    number: 77,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Parabolic Curves',
    text: 'A 160 m long sag parabolic curve connects a −8% grade to a +2% grade. If the vertical curves intersect at station 1 + 240 and elevation 14.87 m, find the elevation of the first quarter point of the curve.',
    options: [
      { label: 'A', text: '16.97 m' },
      { label: 'B', text: '19.67 m' },
      { label: 'C', text: '15.85 m' },
      { label: 'D', text: '18.57 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Locate the PC 80 m back from the VPI, then apply the tangent grade and the parabolic correction at x = 40 m.',
      formulas: [
        'El_{PC} = 14.87 + 0.08(80) = 21.27 \\text{ m}',
        'y = \\frac{(g_2-g_1)x^2}{2L} = \\frac{0.10(40)^2}{2(160)} = 0.50 \\text{ m}',
        'El = 21.27 - 0.08(40) + 0.50 = 18.57 \\text{ m}',
      ],
      steps: [
        'Step 1: The first quarter point is 40 m from the PC.',
        'Step 2: PC elevation = 14.87 + 0.08(80) = 21.27 m.',
        'Step 3: Tangent elevation at 40 m = 21.27 − 3.20 = 18.07 m.',
        'Step 4: Parabolic correction = (0.10)(1600)/(320) = 0.50 m, so El = 18.57 m.',
      ],
      finalAnswer: '18.57 m (Option D)',
    },
  },

  // Item 78
  {
    id: 'mstc-may2015-q78',
    number: 78,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Tape Corrections',
    text: 'A line was measured with a 50-m tape which is 0.04 m too long and the measured length is 512.21 m. Find the true length of the line.',
    options: [
      { label: 'A', text: '512.62 m' },
      { label: 'B', text: '511.80 m' },
      { label: 'C', text: '512.35 m' },
      { label: 'D', text: '511.95 m' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Scale the measured length by the ratio of the actual tape length to its nominal length.',
      formulas: [
        '\\text{True length} = \\text{measured}\\times\\frac{L_{actual}}{L_{nominal}}',
        '= 512.21\\left(\\frac{50.04}{50}\\right) = 512.21(1.0008)',
        '= 512.62 \\text{ m}',
      ],
      steps: [
        'Step 1: The tape is 0.04 m too long, so each tape length measures 50.04 m of true distance.',
        'Step 2: Correction factor = 50.04/50 = 1.0008.',
        'Step 3: True length = 512.21 × 1.0008 = 512.62 m.',
      ],
      finalAnswer: '512.62 m (Option A)',
    },
  },

  // Item 79
  {
    id: 'mstc-may2015-q79',
    number: 79,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Stadia',
    text: 'A transit is set up and the stadia intercept is found to be 0.60 and the distance from the center of the instrument to the rod is 61.20 m. If the sum of the focal length and the distance from the center of the instrument to the principal focus is 0.30, compute the stadia constant k.',
    options: [
      { label: 'A', text: '101.5' },
      { label: 'B', text: '99.5' },
      { label: 'C', text: '100.0' },
      { label: 'D', text: '98.5' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For a horizontal sight, D = k·s + (f + c).',
      formulas: [
        'D = ks + (f+c)',
        '61.20 = k(0.60) + 0.30',
        'k = \\frac{60.90}{0.60} = 101.5',
      ],
      steps: [
        'Step 1: D = 61.20 m, s = 0.60 and f + c = 0.30.',
        'Step 2: 0.60k = 61.20 − 0.30 = 60.90.',
        'Step 3: k = 101.5.',
      ],
      finalAnswer: 'k = 101.5 (Option A)',
    },
  },

  // Item 80
  {
    id: 'mstc-may2015-q80',
    number: 80,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Weighted Measurements',
    text: 'From the given data of difference of elevation, compute the weighted mean.\n\n| Trial | Difference of elevation (m) | No. of measurements |\n| --- | --- | --- |\n| 1 | 351.1 | 2 |\n| 2 | 352.3 | 5 |\n| 3 | 351.3 | 1 |\n| 4 | 351.7 | 6 |',
    options: [
      { label: 'A', text: '351.8' },
      { label: 'B', text: '352.7' },
      { label: 'C', text: '351.2' },
      { label: 'D', text: '350.5' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Weight each elevation by its number of measurements and divide by the total weight.',
      formulas: [
        '\\bar{x} = \\frac{\\sum wx}{\\sum w}',
        '= \\frac{351.1(2)+352.3(5)+351.3(1)+351.7(6)}{2+5+1+6}',
        '= \\frac{4925.2}{14} = 351.8 \\text{ m}',
      ],
      steps: [
        'Step 1: Weighted sum = 702.2 + 1761.5 + 351.3 + 2110.2 = 4925.2.',
        'Step 2: Total weight = 2 + 5 + 1 + 6 = 14.',
        'Step 3: Weighted mean = 4925.2/14 = 351.8 m.',
      ],
      finalAnswer: '351.8 m (Option A)',
    },
  },

  // Item 81
  {
    id: 'mstc-may2015-q81',
    number: 81,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Weighted Measurements',
    text: 'From the given data of measured distances, compute the weighted mean.\n\n| Trial | Distance (m) | No. of measurements |\n| --- | --- | --- |\n| 1 | 521.62 | 2 |\n| 2 | 521.51 | 5 |\n| 3 | 521.13 | 1 |\n| 4 | 521.93 | 8 |',
    options: [
      { label: 'A', text: '521.71' },
      { label: 'B', text: '521.45' },
      { label: 'C', text: '521.88' },
      { label: 'D', text: '521.30' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Same weighted-mean treatment with weights equal to the number of measurements.',
      formulas: [
        '\\bar{x} = \\frac{521.62(2)+521.51(5)+521.13(1)+521.93(8)}{16}',
        '= \\frac{8347.36}{16} = 521.71 \\text{ m}',
      ],
      steps: [
        'Step 1: Weighted sum = 1043.24 + 2607.55 + 521.13 + 4175.44 = 8347.36.',
        'Step 2: Total weight = 16.',
        'Step 3: Weighted mean = 521.71 m.',
      ],
      finalAnswer: '521.71 m (Option A)',
    },
  },

  // Item 82
  {
    id: 'mstc-may2015-q82',
    number: 82,
    pageNumber: 9,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Traverse Adjustment',
    text: 'In the survey of a closed lot with five sides, the following data are given: the sum of the positive departures exceeds the sum of the negative departures by 0.31 m, and the sum of the negative latitudes exceeds the sum of the positive latitudes by 1.67 m. Find the corrected latitude of the 48.12 m side whose latitude is 21.09 m if the total traverse length is 292.52 m.',
    options: [
      { label: 'A', text: '20.82 m' },
      { label: 'B', text: '21.09 m' },
      { label: 'C', text: '21.64 m' },
      { label: 'D', text: '21.36 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Apply the compass (bowditch) rule: the latitude correction is the closure error times the side over the perimeter.',
      formulas: [
        'c = -\\frac{(\\Sigma L)\\,l}{P} = -\\frac{(-1.67)(48.12)}{292.52}',
        'c = +0.2747 \\text{ m}',
        '\\text{Corrected latitude} = 21.09 + 0.27 = 21.36 \\text{ m}',
      ],
      steps: [
        'Step 1: The latitude closure error is −1.67 m (negatives exceed positives).',
        'Step 2: Correction for the 48.12 m side = −(−1.67)(48.12/292.52) = +0.275 m.',
        'Step 3: Corrected latitude = 21.09 + 0.275 = 21.36 m.',
      ],
      finalAnswer: '21.36 m (Option D)',
    },
  },

  // Item 83
  {
    id: 'mstc-may2015-q83',
    number: 83,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Surveying - Traverse Area',
    text: 'Determine the area of the given closed traverse.\n\n| Line | Length (m) | Bearing |\n| --- | --- | --- |\n| AB | 42.0 | N 64° 32\' E |\n| BC | 12.0 | S 38° 45\' E |\n| CD | 18.5 | S 34° 56\' W |\n| DE | 28.4 | S 72° 12\' W |\n| EA | 17.0 | N 27° 14\' W |',
    options: [
      { label: 'A', text: '820.6 m²' },
      { label: 'B', text: '786.4 m²' },
      { label: 'C', text: '648.8 m²' },
      { label: 'D', text: '867.9 m²' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Resolve each line into latitude and departure, then run the double meridian distance (DMD) table.',
      formulas: [
        '\\text{Lat} = L\\cos\\theta,\\quad \\text{Dep} = L\\sin\\theta',
        '\\text{AB: } 18.059\\ \\text{N},\\ 37.919\\ \\text{E}',
        '\\text{BC: } 9.437\\ \\text{S},\\ 7.574\\ \\text{E}',
        '\\text{CD: } 15.167\\ \\text{S},\\ 10.594\\ \\text{W}',
        '\\text{DE: } 8.682\\ \\text{S},\\ 27.040\\ \\text{W}',
        '\\text{EA: } 15.116\\ \\text{N},\\ 7.779\\ \\text{W}',
        '2A = \\Sigma(\\text{DMD}\\times\\text{Dep}) = 1\\,572.832 \\Rightarrow A = 786.416 \\text{ m}^2',
      ],
      steps: [
        'Step 1: Convert each bearing to a latitude and a departure.',
        'Step 2: Compute the DMD of every line, starting with the first departure.',
        'Step 3: Multiply each DMD by its departure and sum: Σ = 1 572.832.',
        'Step 4: A = 1 572.832/2 = 786.416 m².',
      ],
      finalAnswer: '786.4 m² (Option B)',
    },
  },

  // Item 84
  {
    id: 'mstc-may2015-q84',
    number: 84,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Highway Engineering - Superelevation',
    text: 'Compute the impact factor for a highway curve having a radius of 550 m for a design speed of 100 kph.',
    options: [
      { label: 'A', text: '0.322' },
      { label: 'B', text: '0.211' },
      { label: 'C', text: '0.143' },
      { label: 'D', text: '0.189' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Impact factor (side friction demand) is v²/(gR) with v in m/s.',
      formulas: [
        'v = \\frac{100}{3.6} = 27.778 \\text{ m/s}',
        'f = \\frac{v^2}{gR} = \\frac{771.6}{9.81(550)}',
        'f = 0.143',
      ],
      steps: [
        'Step 1: Convert the design speed to 27.778 m/s.',
        'Step 2: v² = 771.6 m²/s².',
        'Step 3: f = 771.6/5395.5 = 0.143.',
      ],
      finalAnswer: '0.143 (Option C)',
    },
  },

  // Item 85
  {
    id: 'mstc-may2015-q85',
    number: 85,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Highway Engineering - Braking Distance',
    text: 'Compute the braking distance of a car traveling at 100 kph on an ascending grade of 2%. The coefficient of friction between the tire and the pavement is 0.60.',
    options: [
      { label: 'A', text: '78.52 m' },
      { label: 'B', text: '55.34 m' },
      { label: 'C', text: '71.28 m' },
      { label: 'D', text: '63.43 m' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Braking distance is v²/[2g(μ + G)] with the grade adding to the available deceleration.',
      formulas: [
        'BD = \\frac{v^2}{2g(\\mu+G)}',
        'BD = \\frac{27.778^2}{2(9.81)(0.60+0.02)}',
        'BD = \\frac{771.6}{12.164} = 63.43 \\text{ m}',
      ],
      steps: [
        'Step 1: v = 100/3.6 = 27.778 m/s.',
        'Step 2: μ + G = 0.60 + 0.02 = 0.62.',
        'Step 3: BD = 771.6/12.164 = 63.43 m.',
      ],
      finalAnswer: '63.43 m (Option D)',
    },
  },

  // Item 86
  {
    id: 'mstc-may2015-q86',
    number: 86,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Highway Engineering - Pavement Design',
    text: 'The bearing capacity of the soil under a 200 kN wheel load is 0.15 MPa. If the contact radius is 165 mm, what should be the minimum thickness of the pavement?',
    options: [
      { label: 'A', text: '487 mm' },
      { label: 'B', text: '352 mm' },
      { label: 'C', text: '564 mm' },
      { label: 'D', text: '421 mm' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Spread the wheel load at 45°, so the effective radius at the subgrade is r + t.',
      formulas: [
        '\\sigma = \\frac{W}{\\pi(r+t)^2}',
        '0.15 = \\frac{200\\,000}{\\pi(165+t)^2}',
        '165 + t = 651.47 \\Rightarrow t = 486.47 \\text{ mm}',
      ],
      steps: [
        'Step 1: Effective area = π(r + t)².',
        'Step 2: 0.15 = 200 000/[π(165 + t)²] gives (165 + t)² = 424 413.',
        'Step 3: 165 + t = 651.47, so t = 486.47 mm ≈ 487 mm.',
      ],
      finalAnswer: '487 mm (Option A)',
    },
  },

  // Item 87
  {
    id: 'mstc-may2015-q87',
    number: 87,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Railway Engineering - Turnouts',
    text: 'A railroad curve has a frog number of 10. Determine the frog angle.',
    options: [
      { label: 'A', text: '4.5°' },
      { label: 'B', text: '6.2°' },
      { label: 'C', text: '5.7°' },
      { label: 'D', text: '7.4°' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The frog number is half the cotangent of half the frog angle.',
      formulas: [
        'F_n = \\frac{1}{2}\\cot\\frac{F}{2}',
        '10 = \\frac{1}{2}\\cot\\frac{F}{2} \\Rightarrow \\frac{F}{2} = 2.862^\\circ',
        'F = 5.725^\\circ',
      ],
      steps: [
        'Step 1: cot(F/2) = 20, so tan(F/2) = 0.05.',
        'Step 2: F/2 = 2.862°.',
        'Step 3: F = 5.725° ≈ 5.7°.',
      ],
      finalAnswer: '5.7° (Option C)',
    },
  },

  // Item 88
  {
    id: 'mstc-may2015-q88',
    number: 88,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Mining Engineering - Vein Dip',
    text: 'A vein has a strike of N 43° 20\' W and a drift is driven in the vein in the direction of N 47° 20\' W with a grade of 2%. Find the dip of the vein.',
    options: [
      { label: 'A', text: '14°' },
      { label: 'B', text: '10°' },
      { label: 'C', text: '18°' },
      { label: 'D', text: '16°' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The drift is only 4° off strike, so the small apparent grade implies a much steeper true dip.',
      formulas: [
        '\\alpha = \\theta - \\beta = 47^\\circ20\' - 43^\\circ20\' = 4^\\circ',
        'a = 100\\tan\\alpha = 6.9927',
        '\\gamma = \\arctan\\frac{2}{a} = 15.96^\\circ',
      ],
      steps: [
        'Step 1: The angle between the drift and the strike is 4°.',
        'Step 2: Over 100 m of drift, the horizontal offset perpendicular to strike is 6.9927 m.',
        'Step 3: The 2% grade means a 2 m rise over that 100 m.',
        'Step 4: dip = arctan(2/6.9927) = 15.96° ≈ 16°.',
      ],
      finalAnswer: '16° (Option D)',
    },
  },

  // Item 89
  {
    id: 'mstc-may2015-q89',
    number: 89,
    pageNumber: 10,
    subject: 'MSTC',
    year: 2015,
    month: 'May',
    category: 'Construction - Earthworks',
    text: 'The cost of hauling materials is ₱0.25 per cubic meter per meter station and the free haul distance is 50 m. Find the limit of economical haul if the limit is 450 m.',
    options: [
      { label: 'A', text: '5.0' },
      { label: 'B', text: '4.0' },
      { label: 'C', text: '6.50' },
      { label: 'D', text: '7.50' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The limit of economical haul equals the free haul distance plus the economic overhaul.',
      formulas: [
        'LEH = FHD + EOH,\\quad EOH = \\frac{20C_b}{0.25}',
        '450 = 50 + \\frac{20C_b}{0.25}',
        'C_b = \\text{₱}5.00 \\text{ per meter station}',
      ],
      steps: [
        'Step 1: One station equals 20 m, so the overhaul cost per station is 20C_b.',
        'Step 2: 450 = 50 + 20C_b/0.25.',
        'Step 3: 20C_b = 100, giving C_b = ₱5.00 per meter station.',
      ],
      finalAnswer: '₱5.00 (Option A)',
    },
  },
];
