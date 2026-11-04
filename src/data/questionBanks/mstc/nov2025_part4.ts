import { Question } from '../../../types/exam';
import { solved, opts } from './nov2025Helpers';
import { getMstcNov2025FigureHtml } from '../../mstcNov2025Images';

export const MSTC_NOV2025_PART4: Question[] = [
  // Item 49
  {
    id: 'mstc-nov2025-q49',
    number: 49,
    pageNumber: 496,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Project Management - Schedule Fast-Tracking Project Duration',
    text: 'A house-painting project consists of the following sequential activities. The original schedule requires each activity to be completed before the next begins, resulting in a total project duration of 30 hours.\nTo reduce the project duration, the project manager decides to use fast tracking by assigning a second crew. The second crew begins applying the primer 8 hours after the first crew starts scraping, while the first crew continues scraping the remaining portions of the house. After completing the scraping activity, the first crew immediately begins applying the finish coat to the areas that have already been primed.\nAssuming there are no interruptions and both crews work continuously, what is the new project duration after applying the fast-tracking technique?\n(Given activity durations: Scrape and chip = 12 hours, Apply primer = 8 hours, Apply paint = 10 hours)\nA. 20\nB. 24\nC. 22\nD. 26',
    options: opts('20', '24', '22', '26'),
    ...solved(49, 'C', '22 (Option C)'),
  },

  // Item 50
  {
    id: 'mstc-nov2025-q50',
    number: 50,
    pageNumber: 497,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Materials - Masonry Block Proportional Area',
    text: 'Calculate the proportional area of the blocks.\nA standard block with mortar is 450 × 225 mm = 101,250 mm²\nA standard block format of 440 × 215 mm = 94,600 mm²',
    figureCaption: 'Figure 50: Masonry block dimensions with mortar joint (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(50, 'Figure 50: Masonry block dimensions with mortar joint'),
    options: opts('0.9443', '0.9334', '0.9343', '0.9344'),
    ...solved(50, 'C', '0.9343 (Option C)'),
  },

  // Item 51
  {
    id: 'mstc-nov2025-q51',
    number: 51,
    pageNumber: 497,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Traffic Engineering - Intersection Conflict Points for Two-Lane Roads',
    text: 'If a two-lane national highway and a two-lane state highway intersect at right angles, the number of potential conflict points at the intersection, assuming that both the roads are two-way, is\nA. 12\nB. 18\nC. 24\nD. 32',
    options: opts('12', '18', '24', '32'),
    ...solved(51, 'C', '24 (Option C)'),
  },

  // Item 52
  {
    id: 'mstc-nov2025-q52',
    number: 52,
    pageNumber: 497,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Highway & Earthwork Engineering - Mass Haul Diagram Terminology',
    text: 'Is the separation of the centroids of the excavation and embankment areas on the profile diagram. This distance is usually determined for each section of earthwork rather than for the entire mass of earthwork in a project.\nA. Free haul distance\nB. Cross section\nC. Base line measurement\nD. Average haul distance',
    options: opts('Free haul distance', 'Cross section', 'Base line measurement', 'Average haul distance'),
    ...solved(52, 'D', 'Average haul distance (Option D)'),
  },

  // Item 53
  {
    id: 'mstc-nov2025-q53',
    number: 53,
    pageNumber: 498,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Transportation Planning - Four-Step Model Trip Generation Definition',
    text: 'The process of determining the number of trips that will begin or end in each traffic analysis zone within a study area. Since the trips are determined without regard to destination, they are referred to as trip ends. Each trip has two ends, and these are described in terms of trip purpose, or whether the trips are either produced by a traffic zone or attracted to a traffic zone. For example, a home-to-work trip would be considered to have a trip end produced in the home zone and attracted to the work zone.\nA. Trip activity\nB. Trip generation\nC. Trip ends\nD. Trip purpose',
    options: opts('Trip activity', 'Trip generation', 'Trip ends', 'Trip purpose'),
    ...solved(53, 'B', 'Trip generation (Option B)'),
  },

  // Item 54
  {
    id: 'mstc-nov2025-q54',
    number: 54,
    pageNumber: 498,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety - Excavation Spoil Berm Setback Requirement',
    text: 'Excavated material shall be kept from the edge of the excavation to provide a clear berm of a distance not less than _____ of the depth of the excavation.\nA. one fourth\nB. one fifth\nC. one third\nD. one half',
    options: opts('one fourth', 'one fifth', 'one third', 'one half'),
    ...solved(54, 'C', 'one third (Option C)'),
  },

  // Item 55
  {
    id: 'mstc-nov2025-q55',
    number: 55,
    pageNumber: 498,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Methods - Structural Shoring System Classification',
    text: 'Identify the type of shore shown below (Figure 55).\n(Figure 55 depicts vertical posts/needles supporting a wall to carry vertical downward load directly to the ground).\nA. Raking shore\nB. Flying shore\nC. Cantilever shore\nD. Dead shore',
    options: opts('Raking shore', 'Flying shore', 'Cantilever shore', 'Dead shore'),
    ...solved(55, 'D', 'Dead shore (Option D)'),
  },

  // Item 56
  {
    id: 'mstc-nov2025-q56',
    number: 56,
    pageNumber: 498,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Methods - Scaffolding Types & Working Platforms',
    text: 'Identify what type of scaffold is shown below (Figure 56).\n(Figure 56 depicts a cradle platform suspended by ropes/wire cables from outrigger beams at roof level).',
    figureCaption: 'Figure 56: Suspended scaffolding diagram (MSTC Nov 2025)',
    figureSvg: getMstcNov2025FigureHtml(56, 'Figure 56: Suspended scaffolding diagram'),
    options: opts('Bird cage scaffold', 'Suspended scaffold', 'Cantilever scaffold', 'Truss scaffold'),
    ...solved(56, 'B', 'Suspended scaffold (Option B)'),
  },

  // Item 57
  {
    id: 'mstc-nov2025-q57',
    number: 57,
    pageNumber: 499,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Sustainable Engineering - Green Buildings Definition & Standards',
    text: 'Can be defined as "healthy facilities designed and built in a resourceful manner, using ecologically based principles." Could also be called a sustainable or high-performance building. They use resources such as water and energy efficiently. They also reduce waste, lower pollution products, and protect the environment.\nA. Green buildings\nB. High-performance buildings\nC. Smart buildings\nD. Sustainable buildings',
    options: opts('Green buildings', 'High-performance buildings', 'Smart buildings', 'Sustainable buildings'),
    ...solved(57, 'A', 'Green buildings (Option A)'),
  },

  // Item 58
  {
    id: 'mstc-nov2025-q58',
    number: 58,
    pageNumber: 499,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Concrete Technology - Coarse Aggregate Sizing & Economy Effects',
    text: 'Which of the following statements regarding the size of coarse aggregate used in concrete are correct?\nI. Smaller coarse aggregates generally require more water than larger.\nII. For a given water-cement ratio, the required amount of Portland cement decreases as the maximum size of coarse aggregate increases.\nIII. The higher cost of obtaining and handling coarse aggregates larger than 2 in. (50.8 mm) may offset the savings in Portland cement.\nIV. The size of coarse aggregate has a significant effect on the economy of concrete.\nA. I and II only\nB. I only\nC. I, III, and IV only\nD. I, II, III, and IV',
    options: opts('I and II only', 'I only', 'I, III, and IV only', 'I, II, III, and IV'),
    ...solved(58, 'D', 'I, II, III, and IV (Option D)'),
  },

  // Item 59
  {
    id: 'mstc-nov2025-q59',
    number: 59,
    pageNumber: 499,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Steel Construction - Structural Steel Connection Methods',
    text: 'Which of the following are commonly recognized methods for connecting structural steel members in building and bridge construction? Identify the statement that is NOT considered a standard structural connection method.\nI. Bolted connections, which use bolts and nuts to securely fasten steel members together and are commonly used in field erection.\nII. Mechanical connections, which utilize devices such as rivets, pins, or proprietary mechanical fasteners to join structural steel members.\nIII. Welded connections, which fuse two or more steel members together through the application of heat to form a continuous structural joint.\nIV. Adhesion connections, which rely primarily on adhesives or bonding agents to transfer structural loads between steel members.\nA. I only\nB. II only\nC. IV only\nD. I and III only',
    options: opts('I only', 'II only', 'IV only', 'I and III only'),
    ...solved(59, 'C', 'IV only (Option C)'),
  },

  // Item 60
  {
    id: 'mstc-nov2025-q60',
    number: 60,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Building Fire Protection - Building Fire Load Computation Factors',
    text: 'When calculating the fire load of a building, which of the following is NOT considered a required factor in the computation?\nA. Caloric value\nB. Weight of the combustible material\nC. Building design\nD. Total floor area',
    options: opts('Caloric value', 'Weight of the combustible material', 'Building design', 'Total floor area'),
    ...solved(60, 'C', 'Building design (Option C)'),
  },

  // Item 61
  {
    id: 'mstc-nov2025-q61',
    number: 61,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Fire Safety Science - Fire Tetrahedron Essential Elements',
    text: 'Which of the following are the essential elements required to initiate and sustain a fire?\nA. Fuel, Heat, Oxidizing agent, and an uninhibited chemical chain reaction\nB. Heat, Water, Oxygen, and Electrical energy\nC. Fuel, Heat, Carbon dioxide, and Steam\nD. Fuel, Water, Heat, and Smoke',
    options: opts('Fuel, Heat, Oxidizing agent, and an uninhibited chemical chain reaction', 'Heat, Water, Oxygen, and Electrical energy', 'Fuel, Heat, Carbon dioxide, and Steam', 'Fuel, Water, Heat, and Smoke'),
    ...solved(61, 'A', 'Fuel, Heat, Oxidizing agent, and an uninhibited chemical chain reaction (Option A)'),
  },

  // Item 62
  {
    id: 'mstc-nov2025-q62',
    number: 62,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Structural Fire Safety - Wood Frame Building Collapse Modes',
    text: 'Limited to wood frame structures, this type of collapse is characterized by a wooden building that shifts at the upper levels, leaning into adjacent buildings or totally collapsing sideways in the absence of adjacent buildings.\nA. Inward outward collapse\nB. 90-degree wall collapse\nC. Curtain wall collapse\nD. Lean over collapse',
    options: opts('Inward outward collapse', '90-degree wall collapse', 'Curtain wall collapse', 'Lean over collapse'),
    ...solved(62, 'D', 'Lean over collapse (Option D)'),
  },

  // Item 63
  {
    id: 'mstc-nov2025-q63',
    number: 63,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety - OSHA Fatal Four & Primary Fatality Causes',
    text: 'Which of the following types of accidents is responsible for approximately 50% of construction-related fatalities?\nA. Falls\nB. Electrocution\nC. Trips\nD. Slips',
    options: opts('Falls', 'Electrocution', 'Trips', 'Slips'),
    ...solved(63, 'A', 'Falls (Option A)'),
  },

  // Item 64
  {
    id: 'mstc-nov2025-q64',
    number: 64,
    pageNumber: 500,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Construction Safety - Personal Protective Equipment (PPE) Definition',
    text: 'Which of the following refers to equipment worn by construction workers to minimize the risk of injury from workplace hazards such as falling objects, sharp materials, chemical splashes, excessive noise, and adverse weather conditions?\nA. Personal Safety Program (PSP)\nB. Personal Protective Equipment (PPE)\nC. Protective Construction Materials (PCM)\nD. Occupational Hazard Control System (OHCS)',
    options: opts('Personal Safety Program (PSP)', 'Personal Protective Equipment (PPE)', 'Protective Construction Materials (PCM)', 'Occupational Hazard Control System (OHCS)'),
    ...solved(64, 'B', 'Personal Protective Equipment (PPE) (Option B)'),
  },

  // Item 65
  {
    id: 'mstc-nov2025-q65',
    number: 65,
    pageNumber: 501,
    subject: 'MSTC',
    year: 2025,
    month: 'November',
    category: 'Engineering Economics & Accounting - Cost-Volume-Profit (CVP) Analysis Assumptions',
    text: 'Which of the following are assumptions underlying the basic Cost-Volume-Profit (CVP) analysis?\nI. The selling price per unit remains constant throughout the relevant range of activity.\nII. The variable cost per unit remains constant regardless of the level of production or sales.\nIII. The total fixed costs remain constant within the relevant range of activity.\nIV. Costs can be accurately classified into fixed and variable components.\nA. I and II only\nB. II and III only\nC. I, II, and III only\nD. I, II, III, and IV',
    options: opts('I and II only', 'II and III only', 'I, II, and III only', 'I, II, III, and IV'),
    ...solved(65, 'D', 'I, II, III, and IV (Option D)'),
  },
];
