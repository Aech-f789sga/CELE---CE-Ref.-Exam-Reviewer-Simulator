import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const HPGE_APR2025_PART2: Question[] = [
  // Item 13
  {
    id: 'hpge-apr2025-q13',
    number: 13,
    pageNumber: 389,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Shear Strength Testing Methods Accuracy',
    text: 'Which among the following is known to be the least accurate method for determining the shear strength of soil?',
    options: [
      { label: 'A', text: 'Triaxial Test' },
      { label: 'B', text: 'Unconfined Compressive Test' },
      { label: 'C', text: 'Direct Shear Test' },
      { label: 'D', text: 'SPT' },
    ],
    ...solved(13, 'D', 'SPT (Option D)'),
  },

  // Item 14
  {
    id: 'hpge-apr2025-q14',
    number: 14,
    pageNumber: 389,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Shear Strength Testing Economics',
    text: 'Which among the following is considered the least expensive shear strength test for soils?',
    options: [
      { label: 'A', text: 'Triaxial Test' },
      { label: 'B', text: 'Unconfined Compressive Test' },
      { label: 'C', text: 'Direct Shear Test' },
      { label: 'D', text: 'SPT' },
    ],
    ...solved(14, 'B', 'Unconfined Compressive Test (Option B)'),
  },

  // Item 15
  {
    id: 'hpge-apr2025-q15',
    number: 15,
    pageNumber: 389,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Controlled Drainage Triaxial Testing',
    text: 'Which among the following is considered the most reliable for determining the shear strength parameters of soil, especially under controlled drainage conditions?',
    options: [
      { label: 'A', text: 'Triaxial Test' },
      { label: 'B', text: 'Unconfined Compressive Test' },
      { label: 'C', text: 'Direct Shear Test' },
      { label: 'D', text: 'SPT' },
    ],
    ...solved(15, 'A', 'Triaxial Test (Option A)'),
  },

  // Item 16
  {
    id: 'hpge-apr2025-q16',
    number: 16,
    pageNumber: 389,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Phase Relationships & Moisture Content',
    text: 'A soil sample has a specific gravity of 2.70, a void ratio of 0.50, and a moist unit weight of 21.9 kN/m³. Based on these values, determine the water content of the soil expressed in percent.',
    options: [
      { label: 'A', text: '24%' },
      { label: 'B', text: '81%' },
      { label: 'C', text: '17%' },
      { label: 'D', text: '64%' },
    ],
    ...solved(16, 'A', '24% (Option A)'),
  },

  // Item 17
  {
    id: 'hpge-apr2025-q17',
    number: 17,
    pageNumber: 389,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Air Void Ratio & Degree of Saturation',
    text: 'A soil sample was tested to determine its engineering properties. The specific gravity of the soil solids is 2.67, the void ratio is 0.59, and the water content is 11.2%. Compute the air void ratio of the soil.',
    options: [
      { label: 'A', text: '50.7%' },
      { label: 'B', text: '37.1%' },
      { label: 'C', text: '26.5%' },
      { label: 'D', text: '18.3%' },
    ],
    ...solved(17, 'D', '18.3% (Option D)'),
  },

  // Item 18
  {
    id: 'hpge-apr2025-q18',
    number: 18,
    pageNumber: 389,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Clay Layer Consolidation Settlement',
    text: 'A 6-m-thick layer of soft clay has an initial void ratio of 1.20. Due to a compressive load applied at the ground surface, its void ratio decreases to one-third of its initial value. Determine the resulting reduction in the thickness of the clay layer, in meters.',
    options: [
      { label: 'A', text: '2.2' },
      { label: 'B', text: '1.1' },
      { label: 'C', text: '3.3' },
      { label: 'D', text: '4.5' },
    ],
    ...solved(18, 'A', '2.2 (Option A)'),
  },

  // Item 19
  {
    id: 'hpge-apr2025-q19',
    number: 19,
    pageNumber: 389,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Permeability - Constant Head Permeability Test',
    text: 'The permeameter in a permeability test setup involves a soil sample 80 mm diameter and a length of 200 mm. The height of water is kept constant of 400 mm in a duration of 4 minutes, water was collected in the graduated flask having a volume of 320 cm³. Determine the coefficient of permeability in cm/hr.',
    options: [
      { label: 'A', text: '19.89' },
      { label: 'B', text: '79.57' },
      { label: 'C', text: '47.75' },
      { label: 'D', text: '70.15' },
    ],
    ...solved(19, 'C', '47.75 (Option C)'),
  },

  // Item 20
  {
    id: 'hpge-apr2025-q20',
    number: 20,
    pageNumber: 390,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Direct Shear Test & Angle of Internal Friction',
    text: 'A direct shear test was performed and observed that the shear stress increased by 15 kPa while the normal stress increased by 30 kPa. Approximate the angle of friction.',
    options: [
      { label: 'A', text: '63.4°' },
      { label: 'B', text: '30.0°' },
      { label: 'C', text: '60.0°' },
      { label: 'D', text: '26.6°' },
    ],
    ...solved(20, 'D', '26.6° (Option D)'),
  },

  // Item 21
  {
    id: 'hpge-apr2025-q21',
    number: 21,
    pageNumber: 390,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Triaxial Shear Test & Maximum Shear Stress',
    text: 'In a consolidated undrained triaxial test, the chamber confining pressure is 2 kPa. The difference between the normal stress and the confining pressure at the failure plane is 2.8 kPa. The angle of failure is 57.16°, and the pore water pressure is 1.8 kPa. Determine the maximum shear stress in kPa developed during the test.',
    options: [
      { label: 'A', text: '0.9' },
      { label: 'B', text: '1.4' },
      { label: 'C', text: '1.0' },
      { label: 'D', text: '2.4' },
    ],
    ...solved(21, 'B', '1.4 (Option B)'),
  },

  // Item 22
  {
    id: 'hpge-apr2025-q22',
    number: 22,
    pageNumber: 390,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Permeability & Seepage - Seepage Velocity in Inclined Embankment',
    text: 'An embankment is inclined at 4°, the coefficient of permeability passing through the soil is 0.0018 cm/hr and the horizontal length of the embankment considered is 2.5 km. The piezometer tube heights are 70 m and 60 m respectively. The porosity of the soil is 0.33. Calculate the seepage velocity in m/s.',
    options: [
      { label: 'A', text: '1.08 × 10⁻¹¹' },
      { label: 'B', text: '3.09 × 10⁻¹¹' },
      { label: 'C', text: '4.05 × 10⁻¹¹' },
      { label: 'D', text: '6.04 × 10⁻¹¹' },
    ],
    ...solved(22, 'D', '6.04 × 10⁻¹¹ (Option D)'),
  },

  // Item 23
  {
    id: 'hpge-apr2025-q23',
    number: 23,
    pageNumber: 390,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Permeability & Seepage - Flow Net Seepage Beneath Dam',
    text: 'The coefficient of permeability below a dam is 3 m/day. The water on the upstream side is 30 meter higher than on the downstream side. To estimate the seepage below the dam, a flow net was graphically drawn such that the number of potential drops, N_d = 10 and the number of flow channels, N_f = 4. The base of the dam is 1 m below the ground. Between the heel and the toe of the dam, a distance of 25 meters, there are 10 potential drops. Evaluate the seepage flow per meter width of the dam in liters/min.',
    options: [
      { label: 'A', text: '25' },
      { label: 'B', text: '30' },
      { label: 'C', text: '20' },
      { label: 'D', text: '35' },
    ],
    ...solved(23, 'A', '25 (Option A)'),
  },

  // Item 24
  {
    id: 'hpge-apr2025-q24',
    number: 24,
    pageNumber: 390,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Foundation Engineering - Friction Pile Group in Clay',
    text: 'Friction piles, 400 mm square are embedded 20 m into a layer of plastic clay to support a pile cap factored load of 12 MN. The unconfined compression strength of the clay was obtained at 120 kPa. Evaluate the number of piles required in a cluster to support on the assumption that the pile group has 80% efficiency.',
    options: [
      { label: 'A', text: '6' },
      { label: 'B', text: '7' },
      { label: 'C', text: '5' },
      { label: 'D', text: '8' },
    ],
    ...solved(24, 'D', '8 (Option D)'),
  },
];
