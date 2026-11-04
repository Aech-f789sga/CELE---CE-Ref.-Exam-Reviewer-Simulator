import { Question } from '../../../types/exam';
import { solved, opts } from './nov2025Helpers';
import { getMstcNov2025FigureHtml } from '../../mstcNov2025Images';

export const MSTC_NOV2025_PART3: Question[] = [
  // Item 33
  {
    id: 'mstc-nov2025-q33',
    number: 33,
    pageNumber: 491,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Economics - Semi-Annual Loan Equal Installment Amortization',
    text: 'A loan of ₱15,000,000 is granted at a nominal annual interest rate of 12%, compounded semi-annually. The loan is to be repaid twice a year in equal installments over 4 years. Determine the amount of each payment.\nA. ₱4,215,539.14\nB. ₱1,425,539.14\nC. ₱2,415,539.14\nD. ₱5,412,539.14',
    options: opts('₱4,215,539.14', '₱1,425,539.14', '₱2,415,539.14', '₱5,412,539.14'),
    ...solved(33, 'C', '₱2,415,539.14 (Option C)'),
  },

  // Item 34
  {
    id: 'mstc-nov2025-q34',
    number: 34,
    pageNumber: 491,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Probability & Linear Algebra - Markov Chain Transition Matrix',
    text: 'In a survey investigating changes in housing patterns in one urban area, it was found that 75% of the population lived in single-family dwellings and 25% in multiple housing of some kind. Five years later, in a follow-up survey, of those who had been living in single-family dwellings, 90% still did so, but 10% had moved to multiple-family dwellings. Of those in multiple-family housing, 95% were still living in that type of housing, while 5% had moved to single-family dwellings. Assume that these trends continue. Write a transition matrix for this information.\n\nA. \n| | single | multiple |\n| :--- | :--- | :--- |\n| single | 0.9 | 0.1 |\n| multiple | 0.05 | 0.95 |\n\nB. \n| | single | multiple |\n| :--- | :--- | :--- |\n| single | 0.1 | 0.9 |\n| multiple | 0.95 | 0.05 |\n\nC. \n| | single | multiple |\n| :--- | :--- | :--- |\n| single | 0.05 | 0.95 |\n| multiple | 0.9 | 0.1 |\n\nD. \n| | single | multiple |\n| :--- | :--- | :--- |\n| single | 0.95 | 0.05 |\n| multiple | 0.1 | 0.9 |',
    options: opts('single to single: 0.9, single to multiple: 0.1; multiple to single: 0.05, multiple to multiple: 0.95', 'single to single: 0.1, single to multiple: 0.9; multiple to single: 0.95, multiple to multiple: 0.05', 'single to single: 0.05, single to multiple: 0.95; multiple to single: 0.9, multiple to multiple: 0.1', 'single to single: 0.95, single to multiple: 0.05; multiple to single: 0.1, multiple to multiple: 0.9'),
    ...solved(34, 'A', 'Option A (Row 1: 0.9, 0.1; Row 2: 0.05, 0.95)'),
  },

  // Item 35
  {
    id: 'mstc-nov2025-q35',
    number: 35,
    pageNumber: 491,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Probability - Fundamental Counting Principle Sample Space',
    text: 'The Flotterons plan to purchase paint for the walls and paint for the trim in their living room. They will select one color for the walls and one color for the trim at random from the following colors.\n\n| Walls | Trim |\n| :--- | :--- |\n| Sable | Alabaster |\n| Java | White |\n| Chocolate | Oyster |\n\nDetermine the number of sample points in the sample space.\nA. 1\nB. 3\nC. 6\nD. 9',
    options: opts('1', '3', '6', '9'),
    ...solved(35, 'D', '9 (Option D)'),
  },

  // Item 36
  {
    id: 'mstc-nov2025-q36',
    number: 36,
    pageNumber: 491,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Discrete Mathematics - Recurrence Relation for Checkerboard Tiling',
    text: 'In how many ways can a 2 × n rectangular checkerboard be tiled using 1 × 2 and 2 × 2 pieces?\nA. [2ⁿ⁺¹ + (-1)ⁿ] / 3\nB. [2ⁿ + (-1)ⁿ⁺¹] / 3\nC. [2ⁿ⁺¹ + (-1)ⁿ] / 2\nD. [2ⁿ + (-1)ⁿ⁺¹] / 2',
    options: opts('[2ⁿ⁺¹ + (-1)ⁿ] / 3', '[2ⁿ + (-1)ⁿ⁺¹] / 3', '[2ⁿ⁺¹ + (-1)ⁿ] / 2', '[2ⁿ + (-1)ⁿ⁺¹] / 2'),
    ...solved(36, 'A', '[2ⁿ⁺¹ + (-1)ⁿ] / 3 (Option A)'),
  },

  // Item 37
  {
    id: 'mstc-nov2025-q37',
    number: 37,
    pageNumber: 492,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Operations Research & Inventory Theory - Spare Parts Stocking Policy Optimization',
    text: 'Suppose that for a particular item, only 3 possible parts might need to be replaced. By studying past records of failures of the item, and finding necessary inventory costs, suppose that the following values have been found.\n\n| p₁ | p₂ | p₃ |\n| :--- | :--- | :--- |\n| 0.09 | 0.24 | 0.17 |\n\n| H₁ | H₂ | H₃ |\n| :--- | :--- | :--- |\n| $15 | $40 | $9 |\n\nSuppose N = 3 and L is $54. Which policy leads to the lowest expected cost?\nHint:\nC(M₁) = H₁ + NL[1 - (1 - p₂)(1 - p₃)]\nC(M₂₃) = H₂ + H₃ + NL[1 - (1 - p₁)]\nA. C(M₁) = 74.81\nB. C(M₂₃) = 63.58\nC. C(M₁₃) = 62.88\nD. C(M₃) = 58.96',
    options: opts('C(M₁) = 74.81', 'C(M₂₃) = 63.58', 'C(M₁₃) = 62.88', 'C(M₃) = 58.96'),
    ...solved(37, 'D', 'C(M₃) = 58.96 (Option D)'),
  },

  // Item 38
  {
    id: 'mstc-nov2025-q38',
    number: 38,
    pageNumber: 492,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Surveying - Precise Base Line Measurement Corrections in Catenary',
    text: 'A base line was measured in catenary in four lengths giving 30.126 m, 29.973 m, 30.066 m, and 22.536 m. The differences of level were respectively 0.45, 0.60, 0.30, and 0.45 m. The temperature during observation was 10°C and the tension applied was 15 kgf. The tape was standardized as 30 m at 20°C, on the flat with a tension of 5 kgf. The coefficient of expansion was 0.000011 per °C, the weight of the tape 1 kg, the cross-sectional area 3 mm², E = 210 × 10³ N/mm² (210 kN/mm²), and gravitational acceleration g = 9.80665 m/s². Quote each equation used and calculate the length of the base.\nA. 121.760 m\nB. 171.620 m\nC. 116.270 m\nD. 112.670 m',
    options: opts('121.760 m', '171.620 m', '116.270 m', '112.670 m'),
    ...solved(38, 'D', '112.670 m (Option D)'),
  },

  // Item 39
  {
    id: 'mstc-nov2025-q39',
    number: 39,
    pageNumber: 492,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Surveying - Area of Irregular Boundary via Simpson\'s 1/3 Rule',
    text: 'A boundary and traverse bordering an irregular area are shown. The spacing between successive ordinates is 5 m. Using Simpson\'s 1/3 rule, the total area between the boundary and traverse line is most nearly:\nHint:\n$A = \\frac{w}{3} \\left( h_1 + 2\\sum h_{\\text{odd}} + 4\\sum h_{\\text{even}} + h_n \\right)$\n(Given ordinates: $h_1 = 4.2\$, $h_2 = 8.1\$, $h_3 = 6.7\$, $h_4 = 7.6\$, $h_5 = 8.3\$ with spacing $w = 5\$)',
    figureCaption: 'Figure 39: Irregular boundary and traverse ordinates for Simpson\'s 1/3 Rule (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(39, "Figure 39: Irregular boundary and traverse ordinates for Simpson's 1/3 Rule"),
    options: opts('141 m²', '148 m²', '151 m²', '143 m²'),
    ...solved(39, 'B', '148 m² (Option B)'),
  },

  // Item 40
  {
    id: 'mstc-nov2025-q40',
    number: 40,
    pageNumber: 493,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Surveying - Angle Adjustment of Horizon Closure',
    text: 'At a survey station, three horizontal angles x, y, and z were observed to completely surround the station. The measured values are:\nx = 112°18\'24"\ny = 74°35\'18"\nz = 173°06\'30"\nAssuming that all observations are of equal precision, determine the corrected values of the three angles.',
    figureCaption: 'Figure 40: Station horizon closure angles x, y, and z (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(40, 'Figure 40: Station horizon closure angles x, y, and z'),
    options: opts('x = 112°18\'20", y = 74°35\'14", z = 173°06\'26"', 'x = 112°18\'24", y = 74°35\'18", z = 173°06\'30"', 'x = 112°18\'28", y = 74°35\'22", z = 173°06\'34"', 'x = 112°18\'22", y = 74°35\'16", z = 173°06\'28"'),
    ...solved(40, 'A', 'x = 112°18\'20", y = 74°35\'14", z = 173°06\'26" (Option A)'),
  },

  // Item 41
  {
    id: 'mstc-nov2025-q41',
    number: 41,
    pageNumber: 493,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation Engineering - Horizontal Curve Middle Ordinate Sight Distance Clearance',
    text: 'A 2-way horizontal curve has a length of 200 m, radius of 300 m, and width of pavement is 8 m. For an SSD of 75 m, what is the required set back distance from the centerline of the inner lane of the pavement?\nHint: m = Rᵢ [1 - cos(S / 2Rᵢ)]\nA. 2.36 m\nB. 2.16 m\nC. 2.26 m\nD. 1.16 m',
    options: opts('2.36 m', '2.16 m', '2.26 m', '1.16 m'),
    ...solved(41, 'A', '2.36 m (Option A)'),
  },

  // Item 42
  {
    id: 'mstc-nov2025-q42',
    number: 42,
    pageNumber: 494,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation Engineering - Cumulative Standard Axles Pavement Design',
    text: 'A two-lane single carriage way is to be designed for a design life of 15 years. Total two-way traffic intensity in the year completion of construction is expected to be 2000 commercial vehicle per day. The vehicle damage factor is 3.0, and lane distribution factor = 0.75. Assuming an annual rate of 7.5%, the design traffic expressed as commutative number of standard axles, is:\nHint: For pavement design, the cumulative number of standard axles (CSA) is computed using\nN = 365 × A × [((1 + r)ⁿ - 1) / r] × D × F\nA. 22.6×10⁶\nB. 5.3×10⁶\nC. 42.9×10⁶\nD. 10.1×10⁶',
    options: opts('22.6×10⁶', '5.3×10⁶', '42.9×10⁶', '10.1×10⁶'),
    ...solved(42, 'C', '42.9×10⁶ (Option C)'),
  },

  // Item 43
  {
    id: 'mstc-nov2025-q43',
    number: 43,
    pageNumber: 494,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation Engineering - Greenshields Macroscopic Traffic Flow Model',
    text: 'A linear relationship is observed between speed and density on a certain section of a highway. The free flow speed is observed to be 80 km per hour, and the jam density is estimated as 100 vehicles per km length. Based on the above relationship, the maximum flow expected on this section and the speed at the maximum flow will respectively be\nA. 8000 vehicles per hour and 80 km per hour\nB. 8000 vehicles per hour and 25 km per hour\nC. 2000 vehicles per hour and 40 km per hour\nD. 2000 vehicles per hour and 80 km per hour',
    options: opts('8000 vehicles per hour and 80 km per hour', '8000 vehicles per hour and 25 km per hour', '2000 vehicles per hour and 40 km per hour', '2000 vehicles per hour and 80 km per hour'),
    ...solved(43, 'C', '2000 vehicles per hour and 40 km per hour (Option C)'),
  },

  // Item 44
  {
    id: 'mstc-nov2025-q44',
    number: 44,
    pageNumber: 494,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation Engineering & Queuing - Ramp Metering Queue Length',
    text: 'Given the following data:\n• Ramp will hold 15 vehicles\n• Vehicles can enter expressway at 1 vehicle every 6 seconds\n• Vehicles arrive at ramp at 1 vehicle every 8 seconds\nDetermine the expected number of vehicles on ramp in peak hour.\nHint:\nE(n) = [ρ / (1 - ρ)] · [(1 - (N + 1)ρᴺ + N ρᴺ⁺¹) / (1 - ρᴺ⁺¹)]\nA. 4\nB. 3\nC. 5\nD. 2',
    options: opts('4', '3', '5', '2'),
    ...solved(44, 'B', '3 (Option B)'),
  },

  // Item 45
  {
    id: 'mstc-nov2025-q45',
    number: 45,
    pageNumber: 495,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation Engineering - Webster\'s Optimal Signal Cycle Length',
    text: 'Calculate the optimal cycle lengths for the intersection of Oak Street and Washington Avenue, given that the critical v/c ratio is 0.9, the two critical approaches have a v/s ratio of 0.3, and the lost time equals 15 seconds.\nHint:\n$C_{\\text{opt}} = \\frac{1.5L + 5}{1.0 - \\sum Y_i}$',
    options: opts('78.65', '88.75', '68.75', '75.68'),
    ...solved(45, 'C', '68.75 (Option C)'),
  },

  // Item 46
  {
    id: 'mstc-nov2025-q46',
    number: 46,
    pageNumber: 495,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation Planning - Multinomial Logit Modal Split Model',
    text: 'The utility functions for auto and transit are as follows.\nAuto: $U_A = -0.46 - 0.35 T_1 - 0.08 T_2 - 0.005 C$\nTransit: $U_T = -0.07 - 0.05 T_1 - 0.15 T_2 - 0.005 C$\nwhere $T_1$ = total travel time (minutes), $T_2$ = waiting time (minutes), $C$ = cost (cents).\nThe travel characteristics between two zones are as follows:\n\n| | Auto | Transit |\n| :--- | :--- | :--- |\n| $T_1$ | 20 | 30 |\n| $T_2$ | 8 | 6 |\n| $C$ | 320 | 100 |\n\nUse the logit model to determine the percent of travel in the zone by auto and transit.\nHint: $P_A = \\frac{e^{U_A}}{e^{U_A} + e^{U_T}}$',
    options: opts('0.86 and 0.14', '0.76 and 0.24', '0.14 and 0.86', '0.00 and 1.00'),
    ...solved(46, 'D', '0.00 and 1.00 (Option D)'),
  },

  // Item 47
  {
    id: 'mstc-nov2025-q47',
    number: 47,
    pageNumber: 495,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Engineering - Earthwork Load & Shrinkage Factors',
    text: 'A soil weigh 1163 kg/LCM, 1661 kg/BCM, and 2077 kg/CCM. Find the load factor and shrinkage factor for the soil.\nA. 0.7 and 0.8\nB. 0.6 and 0.7\nC. 0.8 and 0.7\nD. 0.5 and 0.8',
    options: opts('0.7 and 0.8', '0.6 and 0.7', '0.8 and 0.7', '0.5 and 0.8'),
    ...solved(47, 'A', '0.7 and 0.8 (Option A)'),
  },

  // Item 48
  {
    id: 'mstc-nov2025-q48',
    number: 48,
    pageNumber: 496,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Statistics - Sample Size Determination for Estimating Population Mean',
    text: 'A municipality plans to estimate the number of households that dispose of garbage weekly. A pilot survey was conducted in which households were classified according to family size (Single, Double, and Three or More occupants) and the number of garbage bags disposed of per week. The results are summarized below. From the pilot survey, the estimated mean number of garbage bags disposed of per household per week is 2.65 bags, with an estimated standard deviation of 1.30 bags. Determine the minimum number of households required for the full survey if a 95% confidence level and a margin of error of 0.025 bags are desired.\nHint: n = (z · σ / E)²\n\n| No. of Garbage Bags | Single | Double | Three or More |\n| :--- | :--- | :--- | :--- |\n| 1 | 24 | 18 | 10 |\n| 2 | 36 | 52 | 45 |\n| 3 | 20 | 48 | 60 |\n| 4 | 10 | 26 | 54 |\n| 5 | 5 | 6 | 16 |\n| Total | 95 | 150 | 185 |\n\nA. 13,053\nB. 13,880\nC. 10,388\nD. 13,388',
    options: opts('13,053', '13,880', '10,388', '13,388'),
    ...solved(48, 'C', '10,388 (Option C)'),
  },
];
