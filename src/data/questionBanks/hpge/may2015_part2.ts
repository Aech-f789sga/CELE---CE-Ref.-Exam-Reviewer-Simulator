import { Question } from '../../../types/exam';
import { solved, recall, worked, opts } from './may2015Helpers';

export const HPGE_MAY2015_PART2: Question[] = [
  // Item 16
  {
    id: 'hpge-may2015-q16',
    number: 16,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Open Channel (Manning)',
    text: 'A rectangular canal 3.2 m wide and 1.2 m deep has a full capacity of 8.5 m³/s. Assuming n = 0.015 what is the slope of the canal bed?',
    options: opts('0.00506', '0.00081', '0.00283', '0.00182'),
    ...solved(16, 'D', '0.00182 (Option D)', 54),
  },

  // Item 17
  {
    id: 'hpge-may2015-q17',
    number: 17,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Hydraulics - Orifices and Jets',
    text: 'Water is issued vertically at the rate of 30 liters per second through a 50-mm-diameter nozzle. Neglecting losses, how high above the nozzle tip can the water jet support a load of 250 N?',
    options: opts('8.36 meters', '9.32 meters', '7.52 meters', '6.25 meters'),
    ...solved(17, 'A', '8.36 m (Option A)', 54),
  },

  // Item 18
  {
    id: 'hpge-may2015-q18',
    number: 18,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Definitions)',
    text: 'The ratio between the volume of water and the volume of voids:',
    options: opts('degree of saturation', 'moisture content', 'void ratio', 'porosity'),
    ...recall('A', 'degree of saturation (Option A)', 'S = Vw/Vv is the degree of saturation, expressed as a percentage.'),
  },

  // Item 19
  {
    id: 'hpge-may2015-q19',
    number: 19,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Definitions)',
    text: 'The ratio between the volume of voids and the volume of the soil mass:',
    options: opts('void ratio', 'porosity', 'degree of saturation', 'moisture content'),
    ...recall('B', 'porosity (Option B)', 'n = Vv/V is porosity; void ratio e = Vv/Vs uses the solids volume instead.'),
  },

  // Item 20
  {
    id: 'hpge-may2015-q20',
    number: 20,
    pageNumber: 39,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Definitions)',
    text: 'The ratio between the weight of water and the weight of solid particles:',
    options: opts('porosity', 'degree of saturation', 'moisture content', 'void ratio'),
    ...recall('C', 'moisture content (Option C)', 'w = Ww/Ws is the water content, always quoted on a dry-weight basis.'),
  },

  // Item 21
  {
    id: 'hpge-may2015-q21',
    number: 21,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'In its natural state, a soil mass has a unit weight of 21.7 kN/m³. When fully saturated with water, the soil weighs 22.57 kN/m³. If its moisture content is 8%, what is the porosity of the soil?',
    options: opts('22.69%', '24.12%', '23.65%', '25.25%'),
    ...solved(21, 'D', '25.25% (Option D)', 55),
  },

  // Item 22
  {
    id: 'hpge-may2015-q22',
    number: 22,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'A soil mass has Gs = 2.40. What is the largest possible unit weight of this soil?',
    options: opts('22.542 kN/m³', '20.896 kN/m³', '23.544 kN/m³', '24.000 kN/m³'),
    ...solved(22, 'C', '23.544 kN/m³ (Option C)', 55),
  },

  // Item 23
  {
    id: 'hpge-may2015-q23',
    number: 23,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'A soil sample has Gs = 2.60, e = 40%, and S = 20%. What is the saturated unit weight of this soil?',
    options: opts('18.78 kN/m³', '21.02 kN/m³', '19.63 kN/m³', '20.78 kN/m³'),
    ...solved(23, 'B', '21.02 kN/m³ (Option B)', 55),
  },

  // Item 24
  {
    id: 'hpge-may2015-q24',
    number: 24,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Soil Properties (Volume-Weight Relations)',
    text: 'A soil sample has Gs = 2.60, e = 40%, and S = 20%. What is the dry unit weight of this soil?',
    options: opts('17.85 kN/m³', '16.32 kN/m³', '18.69 kN/m³', '18.22 kN/m³'),
    ...solved(24, 'D', '18.22 kN/m³ (Option D)', 55),
  },

  // Item 25
  {
    id: 'hpge-may2015-q25',
    number: 25,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Triaxial Test)',
    text: 'In a triaxial test, a cohesionless soil is subjected to a confining pressure of 14 kPa. The soil fails when the increase in axial stress by the plunger reaches 40 kPa. What is the angle of shearing resistance of the soil?',
    options: opts('36°', '34°', '30°', '28°'),
    ...solved(25, 'A', '36° (Option A)', 56),
  },

  // Item 26
  {
    id: 'hpge-may2015-q26',
    number: 26,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Shear Strength (Triaxial Test)',
    text: 'The results of a triaxial test conducted on a cohesionless soil are as follows: confining pressure = 60 kPa, plunger pressure = 80 kPa. What is the angle of shearing resistance?',
    options: opts('24.3°', '25.8°', '22.5°', '23.6°'),
    ...solved(26, 'D', '23.6° (Option D)', 56),
  },

  // Item 27
  {
    id: 'hpge-may2015-q27',
    number: 27,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Consolidation',
    text: 'A 10-mm-thick soil sample has a void ratio of 1.8. If its void ratio is decreased to one-half, what would be its new thickness?',
    options: opts('6.79 mm', '5.00 mm', '4.36 mm', '8.52 mm'),
    ...solved(27, 'A', '6.79 mm (Option A)', 56),
  },

  // Item 28
  {
    id: 'hpge-may2015-q28',
    number: 28,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Geotechnical - Consolidation Settlement',
    text: 'For a normally consolidated clay layer in the field, the following values are given:\n\nThickness, H = 3 m\nNatural void ratio = 1.30\nCompression index, $C_c$ = 0.30\nAverage effective pressure in the layer is 125 kPa\n\nEstimate the primary consolidation settlement of the layer caused by an increase in pressure of 55 kPa.',
    options: opts('68 mm', '62 mm', '73 mm', '85 mm'),
    ...solved(28, 'B', '62 mm (Option B)', 56),
  },

  // Item 29
  {
    id: 'hpge-may2015-q29',
    number: 29,
    pageNumber: 40,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'Situation 1 – A stone weighs 350 N in air and 240 N in water. Determine the following: The volume of the stone.',
    options: opts('0.0112 m³', '0.0102 m³', '0.0092 m³', '0.0133 m³'),
    ...solved(29, 'A', '0.0112 m³ (Option A)', 57),
  },

  // Item 30
  {
    id: 'hpge-may2015-q30',
    number: 30,
    pageNumber: 41,
    subject: 'HPGE',
    year: 2015,
    month: 'May',
    category: 'Fluid Statics - Buoyancy and Flotation',
    text: 'Situation 1 (continued) – The unit weight of the stone.',
    options: opts('31.21 kN/m³', '37.06 kN/m³', '26.41 kN/m³', '34.34 kN/m³'),
    ...solved(30, 'A', '31.21 kN/m³ (Option A)', 57),
  },
];
