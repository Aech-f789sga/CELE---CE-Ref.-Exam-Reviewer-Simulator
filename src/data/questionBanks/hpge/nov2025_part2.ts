import { Question } from '../../../types/exam';
import { solved, opts } from './nov2025Helpers';

export const HPGE_NOV2025_PART2: Question[] = [
  // Item 13
  {
    id: 'hpge-nov2025-q13',
    number: 13,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Mechanics - Principle of Continuity & Conservation Law',
    text: 'The equation of continuity is based on the principle of conservation of:\nA. Mass\nB. Energy\nC. Momentum\nD. None of the above',
    options: opts('Mass', 'Energy', 'Momentum', 'None of the above'),
    ...solved(13, 'A', 'Mass (Option A)'),
  },

  // Item 14
  {
    id: 'hpge-nov2025-q14',
    number: 14,
    pageNumber: 549,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Fluid Dynamics - Velocity Head in Pipe Flow',
    text: 'A water stream is flowing through a pipe with a constant velocity of 5 m/s. Calculate the velocity head of the water\nA. 0.815 m\nB. 1.42 m\nC. 1.27 m\nD. 1.12 m',
    options: opts('0.815 m', '1.42 m', '1.27 m', '1.12 m'),
    ...solved(14, 'C', '1.27 m (Option C)'),
  },

  // Item 15
  {
    id: 'hpge-nov2025-q15',
    number: 15,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Pipe Flow - Darcy-Weisbach Pipe Friction Head Loss',
    text: 'Water flows through a pipe with a length of 50 meters and a diameter of 100 mm at a velocity of 2 m/s. If the coefficient of friction (Darcy-Weisbach factor) is 0.02, determine the head loss in the pipe.\nA. 1.02 m\nB. 2.04 m\nC. 3.43 m\nD. 4.33 m',
    options: opts('1.02 m', '2.04 m', '3.43 m', '4.33 m'),
    ...solved(15, 'B', '2.04 m (Option B)'),
  },

  // Item 16
  {
    id: 'hpge-nov2025-q16',
    number: 16,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Hydraulic Machinery - Turbine Power & Required Water Discharge',
    text: 'A hydraulic turbine (or hydroelectric plant) operates with an effective head of 80 meters and an overall efficiency of 85%. If the plant generates a power output of 400 kW, determine the flow rate of water required.\nA. 0.60 m³/s\nB. 0.80 m³/s\nC. 0.75 m³/s\nD. 0.65 m³/s',
    options: opts('0.60 m³/s', '0.80 m³/s', '0.75 m³/s', '0.65 m³/s'),
    ...solved(16, 'A', '0.60 m³/s (Option A)'),
  },

  // Item 17
  {
    id: 'hpge-nov2025-q17',
    number: 17,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Phase Relationships - Degree of Saturation Physical Upper Bound',
    text: 'Given the following soil properties: Specific gravity of soil solids, Gs = 2.7; Void ratio, e = 0.6; water content, MC = 28%. Determine the degree of saturation of the soil.\nA. 26%\nB. 126%\nC. 85%\nD. 100%',
    options: opts('26%', '126%', '85%', '100%'),
    ...solved(17, 'D', '100% (Option D)'),
  },

  // Item 18
  {
    id: 'hpge-nov2025-q18',
    number: 18,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Classification - Unified Soil Classification System (USCS)',
    text: 'Classify the soil sample using USCS. Given: LL = 46 and PL = 29.\n\n| Sieve No. | Diameter (mm) | % Passing |\n| :--- | :--- | :--- |\n| 4 | 4.760 | 100 |\n| 8 | 2.380 | 90 |\n| 10 | 2.000 | 77 |\n| 20 | 0.840 | 59 |\n| 40 | 0.420 | 51 |\n| 60 | 0.250 | 42 |\n| 100 | 0.149 | 35 |\n| 200 | 0.074 | 33 |\n\nA. SC\nB. SM\nC. OH\nD. ML',
    options: opts('SC', 'SM', 'OH', 'ML'),
    ...solved(18, 'B', 'SM (Option B)'),
  },

  // Item 19
  {
    id: 'hpge-nov2025-q19',
    number: 19,
    pageNumber: 550,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Classification - USCS Limiting Liquid Limit Threshold',
    text: 'According to the Unified Soil Classification System (USCS), what is the limiting Liquid Limit (LL) value used to distinguish between a soil of "low plasticity" (L) and a soil of "high plasticity" (H)?\nA. 50\nB. 30\nC. 40\nD. 60',
    options: opts('50', '30', '40', '60'),
    ...solved(19, 'A', '50 (Option A)'),
  },

  // Item 20
  {
    id: 'hpge-nov2025-q20',
    number: 20,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Mechanics - Gradation Criteria & Poorly-Graded Classification',
    text: 'A sieve analysis was conducted on a coarse-grained soil sample. The particle size distribution curve yielded a Coefficient of Uniformity (Cu) of 2.8 and a Coefficient of Curvature (Cc) of 4.3. Based on the Unified Soil Classification System (USCS), how would this soil be classified?\nA. GW or SW (Well-graded)\nB. GM or SM (Silty)\nC. GP or SP (Poorly-graded)\nD. GC or SC (Clayey)',
    options: opts('GW or SW (Well-graded)', 'GM or SM (Silty)', 'GP or SP (Poorly-graded)', 'GC or SC (Clayey)'),
    ...solved(20, 'C', 'GP or SP (Poorly-graded) (Option C)'),
  },

  // Item 21
  {
    id: 'hpge-nov2025-q21',
    number: 21,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Permeability - Falling Head Permeameter Test',
    text: 'The permeameter in a falling head permeability test setup involves a cylindrical soil sample 50 mm in diameter and a height 255 mm. The hydraulic head in the 10-mm diameter standpipe through which test water passed dropped from 950 mm to 600 mm in three - minute of observation. In that duration, the water collected in the graduate was recorded at 2.5 liters. Evaluate the coefficient of permeability of the soil sample in cm/s.\nA. 0.00260 cm/s\nB. 0.00249 cm/s\nC. 0.00342 cm/s\nD. 0.00211 cm/s',
    options: opts('0.00260 cm/s', '0.00249 cm/s', '0.00342 cm/s', '0.00211 cm/s'),
    ...solved(21, 'A', '0.00260 cm/s (Option A)'),
  },

  // Item 22
  {
    id: 'hpge-nov2025-q22',
    number: 22,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Soil Permeability - Equivalent Horizontal Permeability of Stratified Soil',
    text: 'A soil profile consists of three horizontal layers. The first layer has a depth of 2.5 m and permeability K₁ = 1 × 10⁻⁴ cm/s; the second layer has a depth of 1 m and K₂ = 3 × 10⁻⁵ cm/s; and the third layer has a depth of 3 m and K₃ = 2.3 × 10⁻⁵ cm/s. Determine the equivalent horizontal permeability of the soil mass.\nA. 9.73×10⁻⁵ cm/s\nB. 6.67×10⁻⁵ cm/s\nC. 7.32×10⁻⁵ cm/s\nD. 5.37×10⁻⁵ cm/s',
    options: opts('9.73×10⁻⁵ cm/s', '6.67×10⁻⁵ cm/s', '7.32×10⁻⁵ cm/s', '5.37×10⁻⁵ cm/s'),
    ...solved(22, 'D', '5.37×10⁻⁵ cm/s (Option D)'),
  },

  // Item 23
  {
    id: 'hpge-nov2025-q23',
    number: 23,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Geotechnical Engineering - Overburden Vertical Stress & Total Force',
    text: 'A horizontal plane is located at a depth of 4 m below the ground surface in a dry sand deposit. The unit weight of the sand is 19 kN/m³. If the vertical pressure at this depth acts uniformly over a horizontal area of 2.0 m², determine the total vertical force acting on the area.\nA. 156 kN\nB. 139 kN\nC. 148 kN\nD. 152 kN',
    options: opts('156 kN', '139 kN', '148 kN', '152 kN'),
    ...solved(23, 'D', '152 kN (Option D)'),
  },

  // Item 24
  {
    id: 'hpge-nov2025-q24',
    number: 24,
    pageNumber: 551,
    subject: 'HPGE',
    year: 2025,
    month: 'November',
    category: 'Effective Stress - Fluctuating Water Table & Surcharge Bounds',
    text: 'A soil profile has a saturated unit weight of 19.2 kN/m³ and a moist unit weight of 20 kN/m³ above the water table. The ground surface is subjected to a uniform surcharge load of 80 kPa. Field observations show that the water table fluctuates between a depth of 0.5 m (highest level) and 2.5 m (lowest level) below the ground surface. Determine the range of effective stress at a point 2.0 meters below the ground surface.\nA. 106.6 kPa to 102.23 kPa\nB. 107.2 kPa to 112.3 kPa\nC. 103.6 kPa to 120.32 kPa\nD. 104.9 kPa to 118.4 kPa',
    options: opts('106.6 kPa to 102.23 kPa', '107.2 kPa to 112.3 kPa', '103.6 kPa to 120.32 kPa', '104.9 kPa to 118.4 kPa'),
    ...solved(24, 'D', '104.9 kPa to 118.4 kPa (Option D)'),
  },
];
