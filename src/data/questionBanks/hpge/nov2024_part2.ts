import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

export const HPGE_NOV2024_PART2: Question[] = [
  // Item 13
  {
    id: 'hpge-nov2024-q13',
    number: 13,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Definitions & Terminology',
    text: 'What is the term used to describe the ratio of the weight of water to the weight of solids?',
    options: [
      { label: 'A', text: 'void ratio' },
      { label: 'B', text: 'degree of saturation' },
      { label: 'C', text: 'water content' },
      { label: 'D', text: 'porosity' },
    ],
    ...solved(13, 'C', 'water content (Option C)'),
  },

  // Item 14
  {
    id: 'hpge-nov2024-q14',
    number: 14,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Phase Relationships',
    text: 'If a fully saturated soil sample has a water content of 100%, what is its void ratio?',
    options: [
      { label: 'A', text: 'Equal to the specific gravity of the soil solids' },
      { label: 'B', text: 'Less than the specific gravity of the soil solids' },
      { label: 'C', text: 'Greater than the specific gravity of the soil solids' },
      { label: 'D', text: 'Independent of the specific gravity of the soil solids' },
    ],
    ...solved(14, 'A', 'Equal to the specific gravity of the soil solids (Option A)'),
  },

  // Item 15
  {
    id: 'hpge-nov2024-q15',
    number: 15,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Primary Consolidation Settlement',
    text: 'For a normally consolidated clay layer, the following properties are given:\n• Thickness of layer, H = 7.6 m\n• Initial void ratio, e₀ = 1.132\n• Compression index, Cc = 0.35\n• Initial average effective stress, σ₀\' = 200 kPa\n\nDetermine the primary consolidation settlement, in meters, resulting from an increase in effective stress of 120 kPa.',
    options: [
      { label: 'A', text: '0.334' },
      { label: 'B', text: '0.214' },
      { label: 'C', text: '0.135' },
      { label: 'D', text: '0.255' },
    ],
    ...solved(15, 'D', '0.255 (Option D)'),
  },

  // Item 16
  {
    id: 'hpge-nov2024-q16',
    number: 16,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Primary Consolidation Settlement',
    text: 'For a normally consolidated clay layer, the following properties are given:\n• Thickness of layer, H = 3 m\n• Initial void ratio, e₀ = 0.84\n• Compression index, Cc = 0.274\n• Initial average effective stress, σ₀\' = 125 kPa\n\nDetermine the primary consolidation settlement of the layer (in mm) resulting from an increase in effective stress of 55 kPa.',
    options: [
      { label: 'A', text: '70.7' },
      { label: 'B', text: '44.5' },
      { label: 'C', text: '56.3' },
      { label: 'D', text: '67.1' },
    ],
    ...solved(16, 'A', '70.7 (Option A)'),
  },

  // Item 17
  {
    id: 'hpge-nov2024-q17',
    number: 17,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - 2:1 Stress Distribution Method',
    text: 'A rectangular footing measuring 1.5 m × 2.5 m carries a concentrated load of 450 kN. Determine the vertical stress increase at the mid-depth of the clay layer, located 2.7 m below the footing base, using the 1H:2V stress-distribution method.',
    options: [
      { label: 'A', text: '33.2' },
      { label: 'B', text: '21.3' },
      { label: 'C', text: '45.5' },
      { label: 'D', text: '20.6' },
    ],
    ...solved(17, 'D', '20.6 (Option D)'),
  },

  // Item 18
  {
    id: 'hpge-nov2024-q18',
    number: 18,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Soil Permeability & Seepage Velocity',
    text: 'An embankment is inclined at 5° and has a thickness of 3 m. The soil has a permeability of 0.0014 cm/hr and a porosity of 0.25. Over a horizontal distance of 2 km, the piezometric head decreases from 75 m to 65 m. Evaluate the seepage velocity through the embankment in cm/hr.',
    options: [
      { label: 'A', text: '0.000028' },
      { label: 'B', text: '0.000042' },
      { label: 'C', text: '0.000055' },
      { label: 'D', text: '0.000078' },
    ],
    ...solved(18, 'A', '0.000028 (Option A)'),
  },

  // Item 19
  {
    id: 'hpge-nov2024-q19',
    number: 19,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Triaxial Shear Test',
    text: 'A cohesionless soil specimen is subjected to a triaxial compression test under a chamber pressure of 12 kPa. Shear failure occurs when the axial compressive stress reaches 34 kPa. Determine the angle of shearing resistance, (φ), of the soil.',
    options: [
      { label: 'A', text: '18.38°' },
      { label: 'B', text: '23.76°' },
      { label: 'C', text: '28.57°' },
      { label: 'D', text: '25.29°' },
    ],
    ...solved(19, 'C', '28.57° (Option C)'),
  },

  // Item 20
  {
    id: 'hpge-nov2024-q20',
    number: 20,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Triaxial Shear Test',
    text: 'A cohesionless soil specimen is tested in a triaxial shear apparatus. The specimen is first consolidated under a chamber confining pressure of 40 kPa. The axial stress is then increased until failure occurs at an additional axial stress of 60 kPa. Determine the angle of internal friction of the soil.',
    options: [
      { label: 'A', text: '15.46°' },
      { label: 'B', text: '25.38°' },
      { label: 'C', text: '23.44°' },
      { label: 'D', text: '31.24°' },
    ],
    ...solved(20, 'B', '25.38° (Option B)'),
  },

  // Item 21
  {
    id: 'hpge-nov2024-q21',
    number: 21,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Footing Settlement on Stratified Soil',
    text: 'A 2.4 m × 2.4 m square footing carries a design load of 800 kN. The underlying clay layer has a compression index of 0.247 and an initial void ratio of 0.84. Using the information shown in the figure, determine the primary consolidation settlement of the clay layer.',
    figureSvg: '/src/images/HPGENov2024/HPGE_November_2024_21.png',
    figureCaption: 'Figure for Question 21: Soil stratigraphy and square footing settlement',
    options: [
      { label: 'A', text: '0.018' },
      { label: 'B', text: '0.021' },
      { label: 'C', text: '0.015' },
      { label: 'D', text: '0.013' },
    ],
    ...solved(21, 'D', '0.013 (Option D)'),
  },

  // Item 22
  {
    id: 'hpge-nov2024-q22',
    number: 22,
    pageNumber: 2,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Direct Shear Test',
    text: 'A direct shear test was performed:\n\n| | Normal Force | Shear Force |\n|:---|:---:|:---:|\n| Test 1 | 240 | 481 |\n| Test 2 | 135 | 352 |\n\nCalculate the average angle of friction.',
    options: [
      { label: 'A', text: '54.81°' },
      { label: 'B', text: '65.76°' },
      { label: 'C', text: '50.86°' },
      { label: 'D', text: '49.13°' },
    ],
    ...solved(22, 'C', '50.86° (Option C)'),
  },

  // Item 23
  {
    id: 'hpge-nov2024-q23',
    number: 23,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Terzaghi Bearing Capacity',
    text: 'A 3 m × 4 m rectangular footing is embedded 1.2 m below the ground surface. The soil has a specific gravity of solids of 2.7, a void ratio of 0.40, and a degree of saturation of 40%. Its cohesion is 10 kPa, and its angle of internal friction is 30°. Using Terzaghi\'s bearing-capacity equation for general shear failure, evaluate the allowable bearing pressure and allowable load.\n\n| Footing | $K_c$ | $K_q$ | $K_\\gamma$ |\n|:---|:---:|:---:|:---:|\n| Long | 1.00 | 1.00 | 0.50 |\n| Square | 1.30 | 1.00 | 0.40 |\n| Circular | 1.30 | 1.00 | 0.30 |\n| Rectangular | $1 + 0.3(B/L)$ | 1.00 | $\\frac{1}{2}(1 - 0.2B/L)$ |\n\nGiven the bearing capacity constant:\n$N_c = 37.2$, $N_q = 22.5$, $N_\\gamma = 19.10$',
    options: [
      { label: 'A', text: '5939' },
      { label: 'B', text: '4119' },
      { label: 'C', text: '567' },
      { label: 'D', text: '305' },
    ],
    ...solved(23, 'A', '5939 (Option A)'),
  },

  // Item 24
  {
    id: 'hpge-nov2024-q24',
    number: 24,
    pageNumber: 3,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Unconfined Compression Test',
    text: 'In an unconfined compression test, a vertical axial stress of 100 kPa was applied. The angle of failure from the horizontal is 45°. What is the angle of friction and cohesion?',
    options: [
      { label: 'A', text: 'φ = 45°, c = 0' },
      { label: 'B', text: 'φ = 28°, c = 0' },
      { label: 'C', text: 'φ = 0, c = 50 kPa' },
      { label: 'D', text: 'φ = 28°, c = 45 kPa' },
    ],
    ...solved(24, 'C', 'φ = 0, c = 50 kPa (Option C)'),
  },
];
