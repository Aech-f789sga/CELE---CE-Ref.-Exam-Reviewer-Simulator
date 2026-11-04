import { Question } from '../../../types/exam';
import { mstcMay2022FigureStack } from '../../mstcMay2022Images';
import { opts, recall, solved } from './may2022Helpers';

/**
 * MSTC May 2022, items 31-45 — construction equipment production (dozer, loader, scraper,
 * excavator), highway signs and markings, reinforced-concrete
 * design, foundation types, scaffolding, pile driving and
 * construction safety.
 */
export const MSTC_MAY2022_PART3: Question[] = [
  // ── Item 31 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q31',
    number: 31,
    pageNumber: 377,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Management - Earthmoving Equipment Bucket Load',
    text: 'Estimate the actual bucket load in bank cubic meters whose heaped capacity is 3.82 m³. The soil\'s bucket fill factor is 0.90 and its load factor is 0.80.',
    options: opts('2.35 BCM', '2.75 BCM', '3.52 BCM', '2.57 BCM'),
    ...solved(31, 'B', '2.75 BCM'),
  },

  // ── Item 32 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q32',
    number: 32,
    pageNumber: 378,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Transportation & Earthmoving - Grade & Rolling Resistance',
    text: 'A crawler tractor weighing 36 t is towing a rubber-tired scraper weighing 45.5 t up a grade of 4%. What is the total resistance kg of the combination if the rolling resistance factor of the scraper is 50 kg/t? 1 t = 1000kg.',
    options: opts('4,556 kg', '4,655 kg', '5,355 kg', '5,535 kg'),
    ...solved(32, 'D', '5,535 kg'),
  },

  // ── Item 33 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q33',
    number: 33,
    pageNumber: 378,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Equipment - Dozer Cycle Time & Production',
    text: 'A power-shift crawler tractor has a rated blade capacity of 7.65 LCM. The dozer is excavating loose common earth and pushing it a distance of 61 m. Maximum reverse speed in third range is 8 km/h. Estimate the production of the dozer if job efficiency is 50 min/h. Use the two tables of typical dozer cycle times and operating speeds printed with the question.',
    figureSvg: mstcMay2022FigureStack([
      {
        key: 'fig_q33_table4',
        alt: 'Table 4, typical dozer fixed cycle times: power-shift transmission 0.05 min, direct-drive transmission 0.10 min, hard digging 0.15 min',
      },
      {
        key: 'fig_q33_table5',
        alt: 'Table 5, typical dozer operating speeds: dozing loose material over 100 ft (30 m) 2.5 mi/h (4.0 km/h); return over 100 ft is the maximum reverse speed in third range for a power-shift machine',
      },
    ]),
    options: opts('275 LCM/h', '251 LCM/h', '269 LCM/h', '243 LCM/h'),
    ...solved(33, 'C', '269 LCM/h'),
  },

  // ── Item 34 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q34',
    number: 34,
    pageNumber: 378,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Equipment - Hydraulic Excavator Production',
    text: 'Find the expected production in loose cubic meters (Lm³) per hour of small hydraulic excavator. Heaped bucket capacity is 0.57 m³. The material is sand and gravel with a bucket fill factor of 0.95. Job efficiency is 50 min/h. Average depth of cut 4.3 m. Maximum depth of cut is 6.1 m, and average swing is 90°.\nHint: Production (LCV/h) = C × S × V × B × E; Cycle output = 250 cycles/60 min, Swing-depth factor = 1.00.',
    options: opts('113 LCM/h', '111 LCM/h', '131 LCM/h', '133 LCM/h'),
    ...solved(34, 'A', '113 LCM/h'),
  },

  // ── Item 35 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q35',
    number: 35,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Highway Engineering - Traffic Signs & Delineation',
    text: 'Signs used to guide drivers through a change in horizontal alignment of the road.',
    options: opts('Chevron signs', 'Supplementary signs', 'Guide post signs', 'Delineators'),
    ...solved(35, 'A', 'Chevron signs'),
  },

  // ── Item 36 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q36',
    number: 36,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Highway Engineering - National Road Geometric Design Standards',
    text: 'The basic lane width appropriate for national roads is:',
    options: opts('6.70 m', '7.00 m', '3.35 m', '3.50 m'),
    ...solved(36, 'C', '3.35 m'),
  },

  // ── Item 37 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q37',
    number: 37,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Highway Engineering - Delineation Devices',
    text: 'Delineation of the road alignment needs to be considered as part of the design process, to ensure that adequate guidance is provided to road users. Delineation is generally provided by the use of the following devices:\nI. Pavement Markings\nII. Signs\nIII. Guide posts\nIV. Reflective delineators\nV. Lighting\nVI. Curb or other physical devices',
    options: opts(
      'I, II and IV only',
      'II, III, IV and VI only',
      'I, IV, V and VI only',
      'All of the above',
    ),
    ...solved(37, 'D', 'All of the above'),
  },

  // ── Item 38 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q38',
    number: 38,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Transportation Engineering - Human Factors & Driving Task',
    text: 'Operating a motor vehicle on a street or highway can be complex and demanding at times, but it can be boring at other times. These range of circumstances coupled with the range of driver capabilities presents a challenge to the highway designer. It is helpful to begin by considering the three essential elements such as navigation, guidance and control is referred to as:',
    options: opts('Engineering psychology', 'Ergonomics', 'Driving task', 'Range Index'),
    ...solved(38, 'C', 'Driving task'),
  },

  // ── Item 39 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q39',
    number: 39,
    pageNumber: 379,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Highway Engineering - Traffic Sign Categories',
    text: 'Sign that inform road users about the direction and distances of destinations on the route they are following or along other roads that intersect their route.',
    options: opts('supplementary signs', 'guide signs', 'warning signs', 'Stack signs'),
    ...solved(39, 'B', 'guide signs'),
  },

  // ── Item 40 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q40',
    number: 40,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Transportation Engineering - Queuing Theory & Cumulative Diagrams',
    text: 'What are some important properties of queuing diagrams?\nI. The slope of D(t) is the departure rate; the slope of A(t) is the arrival rate.\nII. The departure cannot exceed the service rate or capacity of the server. It may be less.\nIII. Cumulative departures can never exceed cumulative arrivals. D(t) can never be above A(t) in the queuing diagram.\nIV. When a queue is present, the departure rate will equal the service rate. When no queue is present, the departure rate will equal the arrival rate. The queue first forms when the arrival rate first exceeds the service rate.',
    options: opts(
      'I, II, and III only',
      'All of the above',
      'II, III, and IV only',
      'I, III, and IV only',
    ),
    ...solved(40, 'B', 'All of the above'),
  },

  // ── Item 41 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q41',
    number: 41,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Ports & Harbors Engineering - Coastal Marine Structures',
    text: 'Any structure built into the sea but not parallel to the coastline and includes any stage, stair, landing place, landing stage, jetty, floating barge or pontoon, and any bridge or other works connected therewith. A berth structure projecting out from the shoreline.',
    options: opts('Wharf', 'Pier', 'Port', 'Yard'),
    ...solved(41, 'B', 'Pier'),
  },

  // ── Item 42 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q42',
    number: 42,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Materials & Methods - Concrete Forming',
    text: 'Because concrete is unable to maintain a particular shape before it sets, it must be placed in a form or mold. In building construction, this is called:',
    options: opts('Formworks', 'Molder', 'Scaffoldings', 'Tube'),
    ...solved(42, 'A', 'Formworks'),
  },

  // ── Item 43 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q43',
    number: 43,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Safety - Scaffolding Load Capacity Requirements',
    text: 'What is the capacity requirement for all scaffoldings?',
    options: opts(
      'At least four times its own weight',
      'At least six times its own weight',
      'At most six times its own weight',
      'At most four times its own weight',
    ),
    ...solved(
      43,
      'D',
      'At most four times its own weight',
      'The booklet keys this item D and its working closes on "Choice D might be better", but the two disagree with each other: the working says the capacity requirement "is not determined by a fixed multiple of its own weight", while choice D does exactly that -- "At most four times its own weight". The scaffolding standards (OSHA 1926.451, NSCP) require support of at least four times the maximum intended load, which is choice A. The printed key is kept so the app scores the same way the booklet does.',
    ),
  },

  // ── Item 44 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q44',
    number: 44,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Structural Dynamics & Materials - Vibration Damping',
    text: 'It is a measure of a material\'s ability to dissipate or deaden mechanical vibrations.',
    options: opts('damping', 'frequency', 'resonance', 'transmissibility'),
    ...solved(44, 'A', 'damping'),
  },

  // ── Item 45 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q45',
    number: 45,
    pageNumber: 380,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Foundation Engineering - Dynamic Pile Driving Formulas',
    text: 'The safe capacity of piles driven by powered hammers is based on the following data:\nI. Average penetration per blow, last six blows\nII. Energy of hammer\nIII. Weight of hammer\nIV. Weight of pile including appurtenances\nV. Coefficient of restitution depending on the weight of piles',
    options: opts(
      'II, III, IV only',
      'I, II, IV and V only',
      'I, II, III only',
      'All of the above',
    ),
    ...recall(
      'D',
      'All of the above',
      'The booklet keys this item D but prints no worked solution for it: the solution run goes straight from item 44 to item 46. The five listed inputs -- penetration per blow over the last six blows, hammer energy, hammer weight, pile weight and the coefficient of restitution -- are the terms of the dynamic pile-driving formulas, so all of them bear on the safe capacity.',
    ),
  },
];
