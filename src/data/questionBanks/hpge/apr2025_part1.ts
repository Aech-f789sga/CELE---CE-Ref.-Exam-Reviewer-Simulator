import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const HPGE_APR2025_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-apr2025-q1',
    number: 1,
    pageNumber: 387,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Fluid Statics - Atmospheric Pressure & Barometer',
    text: 'An improvised barometer uses a liquid which was observed to weigh 0.90 times of mercury. At the base of the mountain the barometer reads 850 mm. At the same instant, another barometer of the same kind at the top of the mountain reads 500 mm. Determine the height (km) of the mountain. Assume unit weight of air = 12 N/m³.',
    options: [
      { label: 'A', text: '5.5' },
      { label: 'B', text: '2.5' },
      { label: 'C', text: '4.5' },
      { label: 'D', text: '3.5' },
    ],
    ...solved(1, 'D', '3.5 (Option D)'),
  },

  // Item 2
  {
    id: 'hpge-apr2025-q2',
    number: 2,
    pageNumber: 387,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Fluid Statics - Hydrostatic Pressure Variation with Depth',
    text: 'A certain liquid inside a vessel reads 60 kPa and 85.5 kPa at a point 6 m and 3 m from the base of the vessel respectively. Evaluate the unit weight (kN/m³) of the liquid.',
    options: [
      { label: 'A', text: '5.5' },
      { label: 'B', text: '7.5' },
      { label: 'C', text: '8.5' },
      { label: 'D', text: '6.5' },
    ],
    ...solved(2, 'C', '8.5 (Option C)'),
  },

  // Item 3
  {
    id: 'hpge-apr2025-q3',
    number: 3,
    pageNumber: 387,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Fluid Statics - Layered Immiscible Liquids Pressure',
    text: 'A container holds two immiscible liquids stacked on top of each other. The upper liquid has a specific weight of 8 kN/m³ and a depth of 6 m, while the lower liquid has a specific weight of 9.81 kN/m³ and a depth of 4 m. Assuming that the pressure at the free surface is atmospheric, determine the pressure, in kilopascals, at the mid-depth of the lower liquid layer.',
    options: [
      { label: 'A', text: '87.24' },
      { label: 'B', text: '61.43' },
      { label: 'C', text: '67.62' },
      { label: 'D', text: '39.24' },
    ],
    ...solved(3, 'C', '67.62 (Option C)'),
  },

  // Item 4
  {
    id: 'hpge-apr2025-q4',
    number: 4,
    pageNumber: 387,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Buoyancy & Flotation - Scale Reading with Submerged Object',
    text: 'A tank containing water has a total weight of 80 kg when weighed. Obtain the new reading on the weighing scale (kg) if a 50 mm by 50 mm piece of wood is held vertically in the water to a depth of 700 mm.',
    options: [
      { label: 'A', text: '87.15' },
      { label: 'B', text: '81.57' },
      { label: 'C', text: '81.75' },
      { label: 'D', text: '85.71' },
    ],
    ...solved(4, 'C', '81.75 (Option C)'),
  },

  // Item 5
  {
    id: 'hpge-apr2025-q5',
    number: 5,
    pageNumber: 387,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Buoyancy & Flotation - Weighted Floating Timber with Lead',
    text: 'A piece of wood having a specific gravity of 0.60 is 70 mm square and 1.5 m long. How many kilograms of lead fastened at one end of the wood so that it will float upright with 0.30 m projecting out when floating in water? Specific gravity of the lead is 11.2.',
    options: [
      { label: 'A', text: '1.41' },
      { label: 'B', text: '1.61' },
      { label: 'C', text: '1.71' },
      { label: 'D', text: '1.51' },
    ],
    ...solved(5, 'B', '1.61 (Option B)'),
  },

  // Item 6
  {
    id: 'hpge-apr2025-q6',
    number: 6,
    pageNumber: 387,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Buoyancy & Stability - Metacentric Height & Overturning Moment',
    text: 'A rectangular scow 6 m wide, 15 m long, and 4 m deep is floating in water in upright position with a draft of 2.4 m in water. The center of gravity is located 2.7 m from the bottom of the scow. The scow tilts such that one corner is just at the point of submergence. Calculate the moment (kN·m) acting on the scow.',
    options: [
      { label: 'A', text: '72 (OM)' },
      { label: 'B', text: '62 (OM)' },
      { label: 'C', text: '72 (RM)' },
      { label: 'D', text: '62 (RM)' },
    ],
    ...solved(6, 'A', '72 (OM) (Option A)'),
  },

  // Item 7
  {
    id: 'hpge-apr2025-q7',
    number: 7,
    pageNumber: 388,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Hydrostatic Forces on Surfaces - Vertical Sluice Gate Lifting Force',
    text: 'A rigid gate in a river flood-control structure is 6 m wide and 4 m high and weighs 10 kN. The gate is installed with its longer edge horizontal and is raised vertically. Determine the force, in kN, required to lift the gate when the water surface is 2 m above its top edge. There is no water on the downstream side of the gate. The coefficient of friction between the gate and the channel guides is 0.10. Neglect the buoyant force acting on the gate and the weight of the lifting cables.',
    options: [
      { label: 'A', text: '114' },
      { label: 'B', text: '94' },
      { label: 'C', text: '84' },
      { label: 'D', text: '104' },
    ],
    ...solved(7, 'D', '104 (Option D)'),
  },

  // Item 8
  {
    id: 'hpge-apr2025-q8',
    number: 8,
    pageNumber: 388,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Fluid Masses Subjected to Acceleration - Vertical Downward Acceleration',
    text: 'A container containing water to a depth of 0.5 m is inside the elevator that accelerates downwards at 2 m/s². What is the pressure (kPa) at the base of the container?',
    options: [
      { label: 'A', text: '3.9' },
      { label: 'B', text: '2.9' },
      { label: 'C', text: '1.9' },
      { label: 'D', text: '4.9' },
    ],
    ...solved(8, 'A', '3.9 (Option A)'),
  },

  // Item 9
  {
    id: 'hpge-apr2025-q9',
    number: 9,
    pageNumber: 388,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Rotating Vessels - Maximum Water Depth without Spillage',
    text: 'A cylindrical vessel with a diameter of 1.5 m and a depth of 4 m is rotated at 100 rpm about its axis. What is the maximum depth (m) of water to prevent spillage?',
    options: [
      { label: 'A', text: '3.4' },
      { label: 'B', text: '1.4' },
      { label: 'C', text: '0.4' },
      { label: 'D', text: '2.4' },
    ],
    ...solved(9, 'D', '2.4 (Option D)'),
  },

  // Item 10
  {
    id: 'hpge-apr2025-q10',
    number: 10,
    pageNumber: 388,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Open Channel Flow - Most Hydraulically Efficient Trapezoidal Section',
    text: 'A trapezoidal canal has a bottom width of 3 m and a depth of flow of 3 m. Determine the length (m) at the top surface of flow to have the most hydraulic efficiency.',
    options: [
      { label: 'A', text: '6.0' },
      { label: 'B', text: '7.5' },
      { label: 'C', text: '6.9' },
      { label: 'D', text: '8.0' },
    ],
    ...solved(10, 'B', '7.5 (Option B)'),
  },

  // Item 11
  {
    id: 'hpge-apr2025-q11',
    number: 11,
    pageNumber: 388,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Fluid Mechanics - Branch Classifications & Definitions',
    text: 'What branch of science deals with fluid motion?',
    options: [
      { label: 'A', text: 'Hydrostatics' },
      { label: 'B', text: 'Hydrokinetics' },
      { label: 'C', text: 'Hydrodynamics' },
      { label: 'D', text: 'Hydrology' },
    ],
    ...solved(11, 'C', 'Hydrodynamics (Option C)'),
  },

  // Item 12
  {
    id: 'hpge-apr2025-q12',
    number: 12,
    pageNumber: 388,
    subject: 'HPGE',
    year: 2025,
    month: 'April',
    category: 'Soil Mechanics - Effective Stress Concept & Definitions',
    text: 'Effective pressure is:',
    options: [
      { label: 'A', text: 'The pressure at soil contact points' },
      { label: 'B', text: 'Important because it is an engineering soil property' },
      { label: 'C', text: 'A physical quantity that can be measured' },
      { label: 'D', text: 'All of these' },
    ],
    ...solved(12, 'D', 'All of these (Option D)'),
  },
];
