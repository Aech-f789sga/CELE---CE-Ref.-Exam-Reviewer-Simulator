import { Question } from '../../../types/exam';
import { solved, unsolved, opts } from './may2016Helpers';

export const MSTC_MAY2016_PART5: Question[] = [
  // ── Item 61 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q61',
    number: 61,
    pageNumber: 250,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Degree of Curve',
    text: 'Determine the degree of simple curve whose central angle is 26° if the shortest distance from the curve to the point of intersection of the tangents is 7.54 m. Use arc basis.',
    options: opts('3.8°', '4.3°', '4°', '4.5°'),
    ...solved(61, 'C', 'D = 4° (Option C)', 271),
  },

  // ── Item 62 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q62',
    number: 62,
    pageNumber: 250,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Superelevation',
    text: 'A 12-degrees simple curve is to be designed for a maximum speed of 89 kph. The coefficient of friction between the tires and the pavement is 0.40. Compute the required superelevation.',
    options: opts('23.86%', '24.36%', '25.84%', '22.12%'),
    ...solved(62, 'A', 'e = 23.86% (Option A)', 271),
  },

  // ── Item 63 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q63',
    number: 63,
    pageNumber: 250,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Reversed Curve',
    text: 'The perpendicular distance between two parallel tangents of a reversed curve is 7.5 m and the length of the long chord is equal to 75 m. Compute the common radius of the reversed curve.',
    options: opts('184.1 m', '175.4 m', '196.3 m', '187.5 m'),
    ...solved(63, 'D', 'R = 187.5 m (Option D)', 272),
  },

  // ── Item 64 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q64',
    number: 64,
    pageNumber: 250,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Reversed Curve Radius',
    text: 'A reversed curve of equal radii connects two parallel tangents 12m apart. The length of chord from P.C. to P.T. is 140 m. Determine the radius of the curve.',
    options: opts('408.3 m', '425.8 m', '387.6 m', '489.3 m'),
    ...solved(64, 'A', 'R = 408.33 m (Option A)', 272),
  },

  // ── Item 65 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q65',
    number: 65,
    pageNumber: 250,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Surveying — Spiral Easement Curve',
    text: 'A spiral easement curve has a length of 85 m and the radius of central curve is 200 m. Determine the maximum velocity that a car could pass through this curve?',
    options: opts('72.56 kph', '80.54 kph', '77.87 kph', '83.65 kph'),
    ...solved(65, 'C', 'v = 77.87 kph (Option C)', 273),
  },

  // ── Item 66 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q66',
    number: 66,
    pageNumber: 251,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Safety Barriers',
    text: 'The warrant for the use of safety barriers can be established considering:\n\nI. Fore slope or back slope steepness and height\nII. Unforgiving hazards within the clear zone\nIII. Water hazards within the clear zone',
    options: opts('II only', 'I only', 'II and III only', 'all of the three'),
    ...solved(66, 'D', 'All of the three (Option D)', 273),
  },

  // ── Item 67 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q67',
    number: 67,
    pageNumber: 251,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Pavement Markings',
    text: 'Messages when painted on pavement should be limited to how many words only?',
    options: opts('six words or less', 'five words or less', 'four words or less', 'three words or less'),
    ...solved(67, 'D', 'Three words or less (Option D)', 273),
  },

  // ── Item 68 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q68',
    number: 68,
    pageNumber: 251,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Pavement and Curb Markings',
    text: 'What are the four types of pavement and curb markings?',
    options: opts(
      'longitudinal lines, transverse lines, lane lines, and center lines',
      'longitudinal lines, transverse lines, stop lines, & center lines',
      'longitudinal lines, transverse lines, transition lines, & stop lines',
      'longitudinal lines, transverse lines, other lines, & other markings',
    ),
    ...solved(68, 'D', 'Longitudinal, transverse, other lines and other markings (Option D)', 273),
  },

  // ── Item 69 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q69',
    number: 69,
    pageNumber: 251,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Overtaking and Climbing Lanes',
    text: 'The design of overtaking lanes and climbing lanes requires the consideration of the following:\n\nI. Initial diverge taper\nII. Auxiliary lane length\nIII. End or merge taper',
    options: opts('I, II, & III', 'I & II only', 'II & III only', 'I & III only'),
    ...solved(69, 'A', 'I, II and III (Option A)', 274),
  },

  // ── Item 70 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q70',
    number: 70,
    pageNumber: 251,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Traffic Density',
    text: 'It is defined as the number of vehicles per unit distance occupying a section of roadway at a given instant in time, and is usually measured in vehicles per mile or vehicles per kilometre.',
    options: opts('flow', 'density', 'capacity', 'volume'),
    ...solved(70, 'B', 'Density (Option B)', 274),
  },

  // ── Item 71 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q71',
    number: 71,
    pageNumber: 251,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Port Structures',
    text: 'A continuous structure built parallel to along the margin of the sea or alongside riverbank, canals, or waterways where vessels may lie alongside to receive or discharge cargo, embark or disembark passengers or lie at rest.',
    options: opts('pier', 'wharf', 'port', 'lighthouse'),
    ...solved(71, 'B', 'Wharf (Option B)', 274),
  },

  // ── Item 72 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q72',
    number: 72,
    pageNumber: 251,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Sag Vertical Curve K Value',
    text: 'Minimum K value sag vertical should be selected on the basis of three controlling factors:\n\nI. Sight distance is a requirement in all situations for driver safety.\nII. Appearance is generally required in low fill and flat topography situations.\nIII. Riding comfort is a general requirement with specific need on approaches to a floodway where the length of depression needs to be minimized.\nIV. Vertical alignment should fit into the natural terrain earthwork balances.',
    options: opts('I, II, & III only', 'I, III, & IV only', 'I, II, & IV only', 'II, III, & IV only'),
    ...solved(72, 'A', 'I, II and III only (Option A)', 275, 276),
  },

  // ── Item 73 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q73',
    number: 73,
    pageNumber: 251,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Ramp Metering',
    text: 'A ramp meter operates during the morning peak period. Ramp meter cycles vary with time as shown in the table below. The metering scheme allows one vehicle per cycle to pass the signal. The table below gives the number of vehicles demanding service on the ramp during particular time intervals, the cumulative demand for the ramp for the morning peak, and the ramp meter cycle for each interval. What are the service rates for meter cycle 12, 10, and 6?\n\n| Time period | 15-min volume | Cumulative volume | Meter cycle (s) |\n| --- | --- | --- | --- |\n| 6:30 - 6:45 | 75 | 75 | 6 |\n| 6:45 - 7:00 | 100 | 175 | 10 |\n| 7:00 - 7:15 | 125 | 300 | 12 |\n| 7:15 - 7:30 | 110 | 410 | 12 |\n| 7:30 - 7:45 | 80 | 490 | 10 |\n| 7:45 - 8:00 | 65 | 555 | 6 |',
    options: opts(
      '145, 65, 85 vehicles',
      '75, 90, 150 vehicles',
      '85, 65, 145 vehicles',
      '150, 90, 75 vehicles',
    ),
    ...solved(73, 'B', 'R₁₂ = 75, R₁₀ = 90, R₆ = 150 vehicles (Option B)', 276),
  },

  // ── Item 74 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q74',
    number: 74,
    pageNumber: 252,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Deep Water Wave',
    text: 'Wave at a point where the water depth is equal to one-half of the wavelength or greater to be expressed in terms of the parameters of significant wave.',
    options: opts(
      'significant wave',
      'deep water wave',
      'equivalent deep water wave',
      'highest wave',
    ),
    ...unsolved(
      'B',
      'deep water wave (Option B)',
      276,
      'The booklet prints no worked solution for this item: its solution section runs straight from item 73 to item 75.',
      'The key marks B. Once the depth reaches half a wavelength the wave no longer feels the bottom, so it is treated as a deep water wave.',
    ),
  },

  // ── Item 75 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2016-q75',
    number: 75,
    pageNumber: 252,
    subject: 'MSTC',
    year: 2016,
    month: 'May',
    category: 'Transportation — Berth Water Depth',
    text: 'Planned water depth is considered as follows: (For a ship with draft of 7.5 m)',
    options: opts(
      'Standard water depth of berth tor the ship (5.5m) + Design low tide (0.55m) = 6.05 m',
      'Standard water depth of berth for the ship (-5.5m) + Design low tide (-0.55m) = 6.05m',
      'Standard water depth of berth for the ship (-7.5m) + Design low tide (-0.35m) = -7.85 m',
      'Standard water depth of berth for the ship (7.5 m) + Design low tide (0.35m) = 7.85m',
    ),
    ...solved(75, 'C', 'h = -7.85 m (Option C)', 276),
  },
];
