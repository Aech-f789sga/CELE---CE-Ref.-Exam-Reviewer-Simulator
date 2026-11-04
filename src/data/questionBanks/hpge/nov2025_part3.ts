import { Question } from '../../../types/exam';
import { solved, opts } from './nov2025Helpers';

export const HPGE_NOV2025_PART3: Question[] = [
  // Item 25
  {
    id: 'hpge-nov2025-q25',
    number: 25,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Consolidation - Primary Plastic Settlement of Clay Layer',
    text: 'Evaluate the plastic settlement, in meters, in a layer of plastic clay due to an increase of pressure caused by loads above it under the following conditions: Initial intergranular pressure = 205 kPa Increase in intergranular pressure = 150 kPa Thickness of the clay layer = 10 m Coefficient of consolidation = 0.315 Void ratio of the clay = 1.5.\nA. 0.18 m\nB. 0.30 m\nC. 0.25 m\nD. 0.35 m',
    options: opts('0.18 m', '0.30 m', '0.25 m', '0.35 m'),
    ...solved(25, 'B', '0.30 m (Option B)'),
  },

  // Item 26
  {
    id: 'hpge-nov2025-q26',
    number: 26,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Consolidation - Coefficient of Consolidation Cv under Double Drainage',
    text: 'Field monitoring data shows that a clay layer with a thickness of 4 m reached a degree of consolidation of 90% after 365 days. Assuming double drainage, calculate the coefficient of consolidation in m²/day.\nA. 0.00541\nB. 0.00929\nC. 0.00763\nD. 0.00464',
    options: opts('0.00541', '0.00929', '0.00763', '0.00464'),
    ...solved(26, 'B', '0.00929 (Option B)'),
  },

  // Item 27
  {
    id: 'hpge-nov2025-q27',
    number: 27,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Shear Strength - Triaxial Test on Cohesionless Soil',
    text: 'A cohesionless soil sample was subjected to a triaxial test. The soil is consolidated to an all-around chamber pressure of 60 kPa. The axial load was then increased, and failure occurred when the plunger stress reached 120 kPa. Obtain the angle of internal friction of the specimen.\nA. 40°\nB. 33°\nC. 42°\nD. 30°',
    options: opts('40°', '33°', '42°', '30°'),
    ...solved(27, 'D', '30° (Option D)'),
  },

  // Item 28
  {
    id: 'hpge-nov2025-q28',
    number: 28,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Shear Strength - Consolidated Drained Triaxial Test Angle of Friction',
    text: 'A consolidated drained triaxial test conducted on a consolidated clay specimen has the following results:\nChamber confining pressure = 150 kPa\nTotal axial stress at failure = 300 kPa\nObtain the angle of internal friction of the soil in degrees.\nA. 27°\nB. 42°\nC. 30°\nD. 33°',
    options: opts('27°', '42°', '30°', '33°'),
    ...solved(28, 'C', '30° (Option C)'),
  },

  // Item 29
  {
    id: 'hpge-nov2025-q29',
    number: 29,
    pageNumber: 552,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Foundation Engineering - Terzaghi Square Footing Allowable Column Load',
    text: 'A square footing with dimensions of 3 m × 3 m is designed to support a concentric column load, P. The footing is embedded in a layer of sand at a depth of 2.2 m below the ground surface.\nThe supporting sand layer possesses the following geotechnical properties:\n• Unit Weight of Sand: 18 kN/m³\n• Angle of Internal Friction: 35°\n• Bearing Capacity Factors: Nc = 58, Nq = 42, and Nγ = 46\nUsing Terzaghi\'s bearing capacity theory for square footings and a Factor of Safety of 2.6 based on the ultimate bearing capacity, compute the maximum allowable column load that the footing can support in kilonewtons (kN).\nA. 9197\nB. 9932\nC. 9439\nD. 8391',
    options: opts('9197', '9932', '9439', '8391'),
    ...solved(29, 'A', '9197 (Option A)'),
  },

  // Item 30
  {
    id: 'hpge-nov2025-q30',
    number: 30,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Stress Distribution - Boussinesq Vertical Stress at Culvert Crown',
    text: 'A concentrated load of 1,500 kN is applied at the ground surface. Directly below this load, a circular culvert with a diameter of 2.0 m is buried. The center of the culvert is located at a depth of 8.0 m from the ground surface. Determine the vertical stress at the top (crown) of the culvert.\nUse Boussinesq\'s equation:\np = (0.477 Q N) / z²; N = 1 / [1 + 2(r/z)²]^(2.5)\nA. 14.6\nB. 19.9\nC. 7.2\nD. 178.9',
    options: opts('14.6', '19.9', '7.2', '178.9'),
    ...solved(30, 'A', '14.6 (Option A)'),
  },

  // Item 31
  {
    id: 'hpge-nov2025-q31',
    number: 31,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Compaction - Factors Governing Maximum Dry Density',
    text: 'The maximum dry density up to which any soil can be compacted depends upon:\nA. Moisture content only\nB. Amount of compaction energy only\nC. Both moisture content and amount of compaction energy\nD. None of the above',
    options: opts('Moisture content only', 'Amount of compaction energy only', 'Both moisture content and amount of compaction energy', 'None of the above'),
    ...solved(31, 'C', 'Both moisture content and amount of compaction energy (Option C)'),
  },

  // Item 32
  {
    id: 'hpge-nov2025-q32',
    number: 32,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Compaction - Geotechnical Property Improvements',
    text: 'What property increases when soil is compacted?\nA. Void Ratio\nB. Compressibility\nC. Permeability\nD. Angle of internal friction',
    options: opts('Void Ratio', 'Compressibility', 'Permeability', 'Angle of internal friction'),
    ...solved(32, 'D', 'Angle of internal friction (Option D)'),
  },

  // Item 33
  {
    id: 'hpge-nov2025-q33',
    number: 33,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Testing - In-Situ Field Stress Fidelity Limitations',
    text: 'What test is not reliable to show the present field condition of soil?\nA. Unconfined Compression Test\nB. Direct Shear Test\nC. Standard Penetration Test\nD. Tri-axial Shear Test',
    options: opts('Unconfined Compression Test', 'Direct Shear Test', 'Standard Penetration Test', 'Tri-axial Shear Test'),
    ...solved(33, 'A', 'Unconfined Compression Test (Option A)'),
  },

  // Item 34
  {
    id: 'hpge-nov2025-q34',
    number: 34,
    pageNumber: 553,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Mechanics - Neutral Stress Definition & Physical Meaning',
    text: 'The neutral stress in soil mass is?\nA. Stress taken up by solid particles\nB. Stress taken up by the pore water\nC. Force per effective area\nD. Force per neutral area',
    options: opts('Stress taken up by solid particles', 'Stress taken up by the pore water', 'Force per effective area', 'Force per neutral area'),
    ...solved(34, 'B', 'Stress taken up by the pore water (Option B)'),
  },

  // Item 35
  {
    id: 'hpge-nov2025-q35',
    number: 35,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Shear Testing - Drainage Control & Pore Pressure Measurement',
    text: 'Which laboratory test can be performed under all three drainage conditions with complete control over pore pressure?\nA. Triaxial Shear Test\nB. Unconfined Compression Test\nC. Vane Shear Test\nD. Direct Shear Test',
    options: opts('Triaxial Shear Test', 'Unconfined Compression Test', 'Vane Shear Test', 'Direct Shear Test'),
    ...solved(35, 'A', 'Triaxial Shear Test (Option A)'),
  },

  // Item 36
  {
    id: 'hpge-nov2025-q36',
    number: 36,
    pageNumber: 554,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Shear Strength - Rapid Loading & Undrained Failure in Clay',
    text: 'In a rapid loading test, why is clay prone to shear failure?\nA. Because there is no drainage\nB. Because it will dissipate\nC. Because the void ratio remains constant\nD. Because the angle of internal friction is zero',
    options: opts('Because there is no drainage', 'Because it will dissipate', 'Because the void ratio remains constant', 'Because the angle of internal friction is zero'),
    ...solved(36, 'A', 'Because there is no drainage (Option A)'),
  },
];
