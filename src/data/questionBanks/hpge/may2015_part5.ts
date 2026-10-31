import { Question } from '../../../types/exam';
import { hpgeMay2015Figure } from '../../hpgeMay2015Images';

/** Sieve analysis printed at the head of Situation 12 (booklet page 46). */
const SIEVE_TABLE =
  '| Sieve No. | Diameter (mm) | Soil A | Soil B | Soil C |\n' +
  '| --- | --- | --- | --- | --- |\n' +
  '| 4 | 4.760 | 90 | 100 | 100 |\n' +
  '| 6 | 2.380 | 64 | 90 | 100 |\n' +
  '| 10 | 2.000 | 54 | 77 | 98 |\n' +
  '| 20 | 0.840 | 34 | 59 | 92 |\n' +
  '| 40 | 0.420 | 22 | 51 | 84 |\n' +
  '| 60 | 0.250 | 17 | 42 | 79 |\n' +
  '| 100 | 0.149 | 9 | 35 | 70 |\n' +
  '| 200 | 0.074 | 5 | 33 | 63 |\n' +
  '| LL | — | — | 46 | 47 |\n' +
  '| PL | — | — | 29 | 24 |';

export const HPGE_MAY2015_PART5: Question[] = [
  // Item 61
  {
    id: 'hpge-may2015-q61',
    number: 61,
    pageNumber: 45,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'Situation 11 (continued) – The unit weight of the soil when fully saturated.',
    options: [
      { label: 'A', text: '20.45 kN/m³' },
      { label: 'B', text: '20.89 kN/m³' },
      { label: 'C', text: '21.58 kN/m³' },
      { label: 'D', text: '21.11 kN/m³' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Saturation fills every void, so the formula becomes (Gs + e)γw/(1 + e).',
      formulas: ['\\gamma_{sat} = \\dfrac{(G_s + e)\\gamma_w}{1 + e} = \\dfrac{(2.67 + 0.45)(9.81)}{1.45}'],
      steps: [
        'Step 1: $G_s + e = 3.12$; $1 + e = 1.45$.',
        'Step 2: $\\gamma_{sat} = 3.12(9.81)/1.45$.',
        'Step 3: $\\gamma_{sat} = 30.607/1.45 = 21.11\\ \\text{kN/m}^3$.',
      ],
      finalAnswer: '21.11 kN/m³ (Option D)',
    },
  },

  // Item 62
  {
    id: 'hpge-may2015-q62',
    number: 62,
    pageNumber: 45,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Classification (USCS)',
    text:
      'Situation 12 – The results of the sieve analysis of soils A, B, and C is given next. It is required to classify these soils according to USCS.\n\nPercent passing:\n\n' +
      SIEVE_TABLE +
      '\n\nWhich of the following classifies Soil A according to USCS?',
    options: [
      { label: 'A', text: 'GP' },
      { label: 'B', text: 'GW' },
      { label: 'C', text: 'SP' },
      { label: 'D', text: 'SW' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Soil A is nearly all sand with almost no fines; it is well graded, so it is SW.',
      formulas: [
        'C_u = \\dfrac{D_{60}}{D_{10}}, \\quad C_c = \\dfrac{D_{30}^2}{D_{10}D_{60}}',
      ],
      steps: [
        'Step 1: Only 5 % passes the No. 200 sieve, so the soil is coarse-grained.',
        'Step 2: 90 % passes the No. 4 sieve, so gravel is 10 % and sand is 85 % — sand dominates, giving the S group.',
        'Step 3: Fines are under 5 %, so grading decides between SW and SP.',
        'Step 4: Interpolating the curve gives $D_{60} \\approx 2.31\\ \\text{mm}$, $D_{30} \\approx 0.667\\ \\text{mm}$, $D_{10} \\approx 0.159\\ \\text{mm}$.',
        'Step 5: $C_u = 2.31/0.159 = 14.5 > 6$ and $C_c = 0.667^2/(0.159 \\times 2.31) = 1.21$, which lies between 1 and 3.',
        'Step 6: Well graded sand → SW.',
      ],
      finalAnswer: 'SW (Option D)',
    },
  },

  // Item 63
  {
    id: 'hpge-may2015-q63',
    number: 63,
    pageNumber: 45,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Classification (USCS)',
    text:
      'Situation 12 (continued) – Percent passing:\n\n' +
      SIEVE_TABLE +
      '\n\nWhich of the following classifies Soil B according to USCS?',
    options: [
      { label: 'A', text: 'SM' },
      { label: 'B', text: 'SC' },
      { label: 'C', text: 'GC' },
      { label: 'D', text: 'GM' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Soil B is a sand with 33 % fines whose plasticity index puts the fines in the CL group, hence SC.',
      formulas: ['PI = LL - PL = 46 - 29 = 17'],
      steps: [
        'Step 1: 33 % passes the No. 200 sieve → coarse-grained.',
        'Step 2: 100 % passes the No. 4 sieve, so there is no gravel and sand is 67 % → S group.',
        'Step 3: Fines exceed 12 %, so the second letter comes from the fines: LL = 46 < 50 and PI = 17 > 7 → CL.',
        'Step 4: Sand with clayey fines → SC.',
        'Step 5: (A strict A-line check puts PI = 17 just below $0.73(46 - 20) = 19.0$, which would read ML; the printed key follows the LL < 50, PI > 7 rule, giving SC.)',
      ],
      finalAnswer: 'SC (Option B)',
    },
  },

  // Item 64
  {
    id: 'hpge-may2015-q64',
    number: 64,
    pageNumber: 45,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Classification (USCS)',
    text:
      'Situation 12 (continued) – Percent passing:\n\n' +
      SIEVE_TABLE +
      '\n\nWhich of the following classifies Soil C according to USCS?',
    options: [
      { label: 'A', text: 'OL' },
      { label: 'B', text: 'CL' },
      { label: 'C', text: 'ML' },
      { label: 'D', text: 'CH' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Soil C is fine-grained with LL below 50 and PI above the A-line, which is CL.',
      formulas: [
        'PI = 47 - 24 = 23',
        'A\\text{-line } PI = 0.73(LL - 20) = 0.73(27) = 19.7',
      ],
      steps: [
        'Step 1: 63 % passes the No. 200 sieve → fine-grained.',
        'Step 2: LL = 47 < 50, so the group is L (low plasticity), not H.',
        'Step 3: PI = 23, which is above the A-line value of 19.7, so the soil plots as an inorganic clay.',
        'Step 4: Classification: CL.',
      ],
      finalAnswer: 'CL (Option B)',
    },
  },

  // Item 65
  {
    id: 'hpge-may2015-q65',
    number: 65,
    pageNumber: 47,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Seepage (Confined Aquifer)',
    text: 'Situation 13 – A confined aquifer is shown in Figure H06-502.012. This aquifer has a source of recharge located as shown. The hydraulic conductivity of the aquifer is 35 m/day with a porosity of 25%. The piezometric (head) surface in the two observation wells 1000 m apart are at elevation 75 m and 65 m respectively. The aquifer has an average thickness of 4 m and an average width of 4 km. Determine the nearest value to the rate of flow of water through the aquifer, in cubic meters per day.',
    figureSvg: hpgeMay2015Figure(
      13,
      'Figure 7: Confined aquifer cross-section with recharge, two observation wells 1000 m apart, piezometric levels El 75 m and El 65 m, aquifer thickness 4 m.',
    ),
    figureCaption:
      'Figure 7: Confined aquifer between two observation wells, with recharge and the 4 m aquifer thickness (Situation 13).',
    options: [
      { label: 'A', text: '5500' },
      { label: 'B', text: '5600' },
      { label: 'C', text: '5200' },
      { label: 'D', text: '5800' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Apply Darcy’s law across the aquifer cross-section, with the gradient taken from the two well heads.',
      formulas: [
        'i = \\dfrac{75 - 65}{1000} = 0.010',
        'A = \\text{thickness} \\times \\text{width} = 4(4000) = 16000\\ \\text{m}^2',
        'Q = KiA',
      ],
      steps: [
        'Step 1: Hydraulic gradient $i = 10/1000 = 0.01$.',
        'Step 2: Cross-sectional area $= 4 \\times 4000 = 16000\\ \\text{m}^2$.',
        'Step 3: $Q = 35(0.01)(16000)$.',
        'Step 4: $Q = 5600\\ \\text{m}^3/\\text{day}$.',
      ],
      finalAnswer: '5600 m³/day (Option B)',
    },
  },

  // Item 66
  {
    id: 'hpge-may2015-q66',
    number: 66,
    pageNumber: 47,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Seepage (Confined Aquifer)',
    text: 'Situation 13 (continued) – Determine the nearest value to the seepage velocity in m/day.',
    options: [
      { label: 'A', text: '1.4' },
      { label: 'B', text: '1.5' },
      { label: 'C', text: '1.3' },
      { label: 'D', text: '1.2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Seepage velocity is the discharge velocity divided by porosity, since flow only passes through the voids.',
      formulas: ['v_s = \\dfrac{v}{n} = \\dfrac{Ki}{n} = \\dfrac{35(0.01)}{0.25}'],
      steps: [
        'Step 1: Discharge velocity $v = Ki = 35(0.01) = 0.35\\ \\text{m/day}$.',
        'Step 2: $v_s = 0.35/0.25$.',
        'Step 3: $v_s = 1.4\\ \\text{m/day}$.',
      ],
      finalAnswer: '1.4 m/day (Option A)',
    },
  },

  // Item 67
  {
    id: 'hpge-may2015-q67',
    number: 67,
    pageNumber: 48,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Seepage (Confined Aquifer)',
    text: 'Situation 13 (continued) – Determine the nearest value to the time of travel from the head of aquifer to a point 4 km downstream, in days.',
    options: [
      { label: 'A', text: '2667' },
      { label: 'B', text: '2857' },
      { label: 'C', text: '3077' },
      { label: 'D', text: '3333' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Travel time uses the seepage velocity, not the discharge velocity.',
      formulas: ['t = \\dfrac{L}{v_s} = \\dfrac{4000}{1.4}'],
      steps: [
        'Step 1: $L = 4\\ \\text{km} = 4000\\ \\text{m}$.',
        'Step 2: $v_s = 1.4\\ \\text{m/day}$ from item 66.',
        'Step 3: $t = 4000/1.4 = 2857\\ \\text{days}$.',
      ],
      finalAnswer: '2857 days (Option B)',
    },
  },

  // Item 68
  {
    id: 'hpge-may2015-q68',
    number: 68,
    pageNumber: 48,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Mohr Circle)',
    text: 'Situation 14 – In a triaxial test on a cohesionless soil, the principal stresses are 250 kPa and 350 kPa. Determine the following: The angle of shearing resistance.',
    options: [
      { label: 'A', text: '9.59°' },
      { label: 'B', text: '10.25°' },
      { label: 'C', text: '12.68°' },
      { label: 'D', text: '15.32°' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For a cohesionless soil the Mohr circle touches the origin-envelope, giving sin φ from the two principal stresses.',
      formulas: ['\\sin\\phi = \\dfrac{\\sigma_1 - \\sigma_3}{\\sigma_1 + \\sigma_3} = \\dfrac{100}{600}'],
      steps: [
        'Step 1: $\\sigma_1 = 350\\ \\text{kPa}$, $\\sigma_3 = 250\\ \\text{kPa}$.',
        'Step 2: $\\sin\\phi = (350 - 250)/(350 + 250) = 0.16667$.',
        'Step 3: $\\phi = 9.59°$.',
      ],
      finalAnswer: '9.59° (Option A)',
    },
  },

  // Item 69
  {
    id: 'hpge-may2015-q69',
    number: 69,
    pageNumber: 48,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Mohr Circle)',
    text: 'Situation 14 (continued) – The shearing stress at failure plane.',
    options: [
      { label: 'A', text: '49.3 kPa' },
      { label: 'B', text: '45.2 kPa' },
      { label: 'C', text: '52.8 kPa' },
      { label: 'D', text: '40.7 kPa' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The failure plane is at 45° + φ/2 to the major principal plane, where the circle is highest.',
      formulas: [
        '\\theta = 45° + \\dfrac{\\phi}{2} = 49.80°',
        '\\tau = \\dfrac{\\sigma_1 - \\sigma_3}{2}\\sin 2\\theta',
      ],
      steps: [
        'Step 1: $\\theta = 45° + 9.59°/2 = 49.80°$, so $2\\theta = 99.59°$.',
        'Step 2: $\\tau = \\tfrac{1}{2}(100)\\sin 99.59°$.',
        'Step 3: $\\tau = 50(0.98596) = 49.3\\ \\text{kPa}$.',
      ],
      finalAnswer: '49.3 kPa (Option A)',
    },
  },

  // Item 70
  {
    id: 'hpge-may2015-q70',
    number: 70,
    pageNumber: 48,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Mohr Circle)',
    text: 'Situation 14 (continued) – The normal stress at failure plane.',
    options: [
      { label: 'A', text: '274.5 kPa' },
      { label: 'B', text: '258.9 kPa' },
      { label: 'C', text: '310.5 kPa' },
      { label: 'D', text: '291.7 kPa' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Read the normal stress off the Mohr circle at the same 2θ.',
      formulas: [
        '\\sigma = \\dfrac{\\sigma_1 + \\sigma_3}{2} + \\dfrac{\\sigma_1 - \\sigma_3}{2}\\cos 2\\theta',
      ],
      steps: [
        'Step 1: Centre of the circle $= (350 + 250)/2 = 300\\ \\text{kPa}$; radius $= 50\\ \\text{kPa}$.',
        'Step 2: $2\\theta = 99.59°$, $\\cos 99.59° = -0.16667$.',
        'Step 3: $\\sigma = 300 + 50(-0.16667) = 291.7\\ \\text{kPa}$.',
      ],
      finalAnswer: '291.7 kPa (Option D)',
    },
  },

  // Item 71
  {
    id: 'hpge-may2015-q71',
    number: 71,
    pageNumber: 48,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Triaxial Test)',
    text: 'Situation 15 – A consolidated-drained triaxial test was conducted on a normally consolidated clay. The results are as follows: $\\sigma_3$ = 110 kPa, $\\sigma_{d(f)}$ = 170 kPa. Determine the following: The angle of friction, φ.',
    options: [
      { label: 'A', text: '26.3°' },
      { label: 'B', text: '25.4°' },
      { label: 'C', text: '26.7°' },
      { label: 'D', text: '25.8°' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The deviator stress at failure gives σ1; the standard sin φ relation then follows.',
      formulas: [
        '\\sigma_1 = 110 + 170 = 280\\ \\text{kPa}',
        '\\sin\\phi = \\dfrac{170}{280 + 110}',
      ],
      steps: [
        'Step 1: $\\sigma_{d(f)}$ is the deviator stress, so $\\sigma_1 = \\sigma_3 + \\sigma_d = 280\\ \\text{kPa}$.',
        'Step 2: $\\sin\\phi = (280 - 110)/(280 + 110) = 170/390 = 0.43590$.',
        'Step 3: $\\phi = 25.84°$.',
      ],
      finalAnswer: '25.8° (Option D)',
    },
  },

  // Item 72
  {
    id: 'hpge-may2015-q72',
    number: 72,
    pageNumber: 48,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Triaxial Test)',
    text: 'Situation 15 (continued) – The angle θ that the failure plane makes with the major principal plane.',
    options: [
      { label: 'A', text: '58.4°' },
      { label: 'B', text: '57.9°' },
      { label: 'C', text: '58.2°' },
      { label: 'D', text: '57.7°' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'The failure plane is inclined at 45° + φ/2 to the major principal plane.',
      formulas: ['\\theta = 45° + \\dfrac{\\phi}{2} = 45° + \\dfrac{25.84°}{2}'],
      steps: [
        'Step 1: From item 71, $\\phi = 25.84°$.',
        'Step 2: $\\theta = 45° + 12.92°$.',
        'Step 3: $\\theta = 57.92°$.',
      ],
      finalAnswer: '57.9° (Option B)',
    },
  },

  // Item 73
  {
    id: 'hpge-may2015-q73',
    number: 73,
    pageNumber: 48,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Triaxial Test)',
    text: 'Situation 15 (continued) – Determine the effective normal stress on the plane of maximum shear stress.',
    options: [
      { label: 'A', text: '197.5 kPa' },
      { label: 'B', text: '210 kPa' },
      { label: 'C', text: '195 kPa' },
      { label: 'D', text: '200 kPa' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'The plane of maximum shear stress is at 45°, where the normal stress is simply the average of the principal stresses.',
      formulas: ['\\sigma = \\dfrac{\\sigma_1 + \\sigma_3}{2} = \\dfrac{280 + 110}{2}'],
      steps: [
        'Step 1: Maximum shear occurs where $2\\theta = 90°$, i.e. $\\theta = 45°$.',
        'Step 2: At that point the circle is at its centre horizontally.',
        'Step 3: $\\sigma = (280 + 110)/2 = 195\\ \\text{kPa}$.',
        'Step 4: The test is drained, so pore pressure is zero and this is also the effective stress.',
      ],
      finalAnswer: '195 kPa (Option C)',
    },
  },

  // Item 74
  {
    id: 'hpge-may2015-q74',
    number: 74,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Lateral Earth Pressure',
    text: 'Situation 16 – A 10-m high retaining wall is shown in the figure. Determine the active thrust on the wall due to soil and water.',
    figureSvg: hpgeMay2015Figure(
      16,
      'Figure 8: 10 m high retaining wall retaining soil with Gs = 2.65, e = 0.50, w = 10 % and phi = 20 degrees.',
    ),
    figureCaption:
      'Figure 8: 10 m retaining wall with Gs = 2.65, e = 0.50, w = 10 %, φ = 20° (Situation 16).',
    options: [
      { label: 'A', text: '317.7 kN' },
      { label: 'B', text: '467.3 kN' },
      { label: 'C', text: '425.6 kN' },
      { label: 'D', text: '387.4 kN' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: '“Soil and water” here means the moist backfill at its natural water content, not a submerged profile.',
      formulas: [
        '\\gamma = \\dfrac{G_s\\gamma_w(1 + w)}{1 + e} = \\dfrac{2.65(9.81)(1.10)}{1.50} = 19.07\\ \\text{kN/m}^3',
        'K_a = \\tan^2\\left(45° - \\dfrac{20°}{2}\\right) = 0.4903',
        'P_a = \\tfrac{1}{2}K_a\\gamma H^2',
      ],
      steps: [
        'Step 1: $\\gamma = 19.07\\ \\text{kN/m}^3$.',
        'Step 2: $K_a = \\tan^2 35° = 0.4903$.',
        'Step 3: $P_a = \\tfrac{1}{2}(0.4903)(19.07)(10)^2$.',
        'Step 4: $P_a = 467.3\\ \\text{kN}$.',
      ],
      finalAnswer: '467.3 kN (Option B)',
    },
  },

  // Item 75
  {
    id: 'hpge-may2015-q75',
    number: 75,
    pageNumber: 49,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Lateral Earth Pressure',
    text: 'Situation 16 (continued) – Determine the active thrust on the wall due to soil only (dry soil).',
    options: [
      { label: 'A', text: '365.3 kN' },
      { label: 'B', text: '288.9 kN' },
      { label: 'C', text: '424.9 kN' },
      { label: 'D', text: '486.2 kN' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'Remove the water from the backfill, leaving the dry unit weight.',
      formulas: [
        '\\gamma_d = \\dfrac{G_s\\gamma_w}{1 + e} = \\dfrac{2.65(9.81)}{1.50} = 17.34\\ \\text{kN/m}^3',
        'P_a = \\tfrac{1}{2}(0.4903)(17.34)(10)^2',
      ],
      steps: [
        'Step 1: $\\gamma_d = 17.34\\ \\text{kN/m}^3$.',
        'Step 2: $P_a = \\tfrac{1}{2}(0.4903)(17.34)(100)$.',
        'Step 3: $P_a = 424.9\\ \\text{kN}$.',
      ],
      finalAnswer: '424.9 kN (Option C)',
    },
  },
];
