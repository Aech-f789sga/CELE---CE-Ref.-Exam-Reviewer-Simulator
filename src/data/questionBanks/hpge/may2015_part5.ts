import { Question } from '../../../types/exam';
import { solved, recall, worked, opts } from './may2015Helpers';
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
    options: opts('20.45 kN/m³', '20.89 kN/m³', '21.58 kN/m³', '21.11 kN/m³'),
    ...solved(61, 'D', '21.11 kN/m³ (Option D)', 65),
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
    figureSvg: hpgeMay2015Figure(
      12,
      'Gradation curves for soils A, B and C: percent passing against particle size in mm.',
    ),
    figureCaption: 'Gradation curves for soils A, B and C (Situation 12).',
    options: opts('GP', 'GW', 'SP', 'SW'),
    ...worked(
      'D',
      'SW (Option D)',
      'Soil A is nearly all sand with almost no fines; it is well graded, so it is SW.',
      [
        'Step 1: Only 5 % passes the No. 200 sieve, so the soil is coarse-grained.',
        'Step 2: 90 % passes the No. 4 sieve, so gravel is 10 % and sand is 85 % — sand dominates, giving the S group.',
        'Step 3: Fines are under 5 %, so grading decides between SW and SP.',
        'Step 4: Interpolating the curve gives $D_{60} \\approx 2.31\\ \\text{mm}$, $D_{30} \\approx 0.667\\ \\text{mm}$, $D_{10} \\approx 0.159\\ \\text{mm}$.',
        'Step 5: $C_u = 2.31/0.159 = 14.5 > 6$ and $C_c = 0.667^2/(0.159 \\times 2.31) = 1.21$, which lies between 1 and 3.',
        'Step 6: Well graded sand → SW.',
      ],
      'The booklet works Situation 12 on folio 67, which is missing from the scanned volume -- the scan runs from folio 66 straight to folio 68 -- so the printed working cannot be shown. The classification is written out here from the gradation data on folio 66.',
    ),
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
    figureSvg: hpgeMay2015Figure(
      12,
      'Gradation curves for soils A, B and C: percent passing against particle size in mm.',
    ),
    figureCaption: 'Gradation curves for soils A, B and C (Situation 12).',
    options: opts('SM', 'SC', 'GC', 'GM'),
    ...worked(
      'B',
      'SC (Option B)',
      'Soil B is a sand with 33 % fines whose plasticity index puts the fines in the CL group, hence SC.',
      [
        'Step 1: 33 % passes the No. 200 sieve → coarse-grained.',
        'Step 2: 100 % passes the No. 4 sieve, so there is no gravel and sand is 67 % → S group.',
        'Step 3: Fines exceed 12 %, so the second letter comes from the fines: LL = 46 < 50 and PI = 17 > 7 → CL.',
        'Step 4: Sand with clayey fines → SC.',
        'Step 5: (A strict A-line check puts PI = 17 just below $0.73(46 - 20) = 19.0$, which would read ML; the printed key follows the LL < 50, PI > 7 rule, giving SC.)',
      ],
      'The booklet works Situation 12 on folio 67, which is missing from the scanned volume -- the scan runs from folio 66 straight to folio 68 -- so the printed working cannot be shown. The classification is written out here from the gradation data on folio 66.',
    ),
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
    figureSvg: hpgeMay2015Figure(
      12,
      'Gradation curves for soils A, B and C: percent passing against particle size in mm.',
    ),
    figureCaption: 'Gradation curves for soils A, B and C (Situation 12).',
    options: opts('OL', 'CL', 'ML', 'CH'),
    ...worked(
      'B',
      'CL (Option B)',
      'Soil C is fine-grained with LL below 50 and PI above the A-line, which is CL.',
      [
        'Step 1: 63 % passes the No. 200 sieve → fine-grained.',
        'Step 2: LL = 47 < 50, so the group is L (low plasticity), not H.',
        'Step 3: PI = 23, which is above the A-line value of 19.7, so the soil plots as an inorganic clay.',
        'Step 4: Classification: CL.',
      ],
      'The booklet works Situation 12 on folio 67, which is missing from the scanned volume -- the scan runs from folio 66 straight to folio 68 -- so the printed working cannot be shown. The classification is written out here from the gradation data on folio 66.',
    ),
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
    options: opts('5500', '5600', '5200', '5800'),
    ...solved(65, 'B', '5600 m³/day (Option B)', 68),
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
    options: opts('1.4', '1.5', '1.3', '1.2'),
    ...solved(66, 'A', '1.4 m/day (Option A)', 68),
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
    options: opts('2667', '2857', '3077', '3333'),
    ...solved(67, 'B', '2857 days (Option B)', 68),
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
    options: opts('9.59°', '10.25°', '12.68°', '15.32°'),
    ...solved(68, 'A', '9.59° (Option A)', 68, 69),
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
    options: opts('49.3 kPa', '45.2 kPa', '52.8 kPa', '40.7 kPa'),
    ...solved(69, 'A', '49.3 kPa (Option A)', 68, 69),
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
    options: opts('274.5 kPa', '258.9 kPa', '310.5 kPa', '291.7 kPa'),
    ...solved(70, 'D', '291.7 kPa (Option D)', 68, 69),
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
    options: opts('26.3°', '25.4°', '26.7°', '25.8°'),
    ...solved(71, 'D', '25.8° (Option D)', 69),
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
    options: opts('58.4°', '57.9°', '58.2°', '57.7°'),
    ...solved(72, 'B', '57.9° (Option B)', 69),
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
    options: opts('197.5 kPa', '210 kPa', '195 kPa', '200 kPa'),
    ...solved(73, 'C', '195 kPa (Option C)', 69),
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
    options: opts('317.7 kN', '467.3 kN', '425.6 kN', '387.4 kN'),
    ...solved(74, 'B', '467.3 kN (Option B)', 69, 70),
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
    options: opts('365.3 kN', '288.9 kN', '424.9 kN', '486.2 kN'),
    ...solved(75, 'C', '424.9 kN (Option C)', 69, 70),
  },
];
