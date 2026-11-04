import { Question } from '../../../types/exam';
import { mstcMay2018Figure } from '../../mstcMay2018Images';
import { opts, recall, solved } from './may2018Helpers';

/**
 * MSTC May 2018, items 49-62 — traverse adjustment, horizontal and vertical
 * curves, then the five transportation-engineering recall questions that close
 * the paper (the booklet prints no working for 58-62).
 */
export const MSTC_MAY2018_PART4: Question[] = [
  // ── Item 49 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q49',
    number: 49,
    pageNumber: 666,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Traverse',
    text: 'A lot has the following dimensions. Compute the length of line 2-3.',
    figureSvg: mstcMay2018Figure(
      'fig_q49_table',
      'Table of lot lines: 1-2 N57°39\'W 145.16, 2-3 unknown, 3-4 S44°45\'E 62.10, 4-1 N31°16\'E 300.00',
    ),
    options: opts('298 m', '297 m', '290 m', '300 m'),
    ...solved(49, 'D', 'Line 2-3 = 300 m'),
  },

  // ── Item 50 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q50',
    number: 50,
    pageNumber: 666,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Traverse',
    text: 'Given the following data of a closed traverse. Find the bearing of line BC.',
    figureSvg: mstcMay2018Figure(
      'fig_q50_table',
      'Table of a closed traverse: AB 44.47, BC 137.84, CD N1°45\'E 12.83, DE N72°10\'E 64.86, EA S48°13\'E 107.72',
    ),
    options: opts("N 57°12' W", "N 55°21' W", "N 59°39' W", "N 62°12' W"),
    ...solved(50, 'A', "Bearing of BC = N 57°12' W"),
  },

  // ── Item 51 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q51',
    number: 51,
    pageNumber: 667,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Traverse Adjustment',
    text: 'Determine the latitude and departure corrections for line AB, using the formulas printed with the traverse.',
    figureSvg: mstcMay2018Figure(
      'fig_q51_table',
      'Table of a five-line traverse with azimuths and distances, and the latitude and departure correction formulas',
    ),
    options: opts(
      '0.0142 & 0.0148',
      '0.0148 & 0.0142',
      '-0.0142 & -0.0148',
      '-0.0148 & -0.0142',
    ),
    ...solved(
      51,
      'A',
      'Latitude Correction = 0.01423, Departure Correction = 0.01477',
    ),
  },

  // ── Item 52 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q52',
    number: 52,
    pageNumber: 667,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Simple Curve',
    text: 'An existing highway with bearing of N 20° E is to be connected to another highway, with bearing of N 75° E, by a 4-degree simple curve. What length of curve is required?',
    options: opts('275 m', '250 m', '350 m', '300 m'),
    ...solved(52, 'A', 'Length of curve = 275 m'),
  },

  // ── Item 53 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q53',
    number: 53,
    pageNumber: 667,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Simple Curve',
    text: 'Given $I = 44°$ and $R = 400$ feet. Determine the deflection/foot.',
    options: opts(
      '0.071620°/ft',
      '0.071260°/ft',
      '0.021760°/ft',
      '0.021670°/ft',
    ),
    ...solved(53, 'A', '$\\Delta = 0.07162°$ per foot'),
  },

  // ── Item 54 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q54',
    number: 54,
    pageNumber: 667,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Degree of Curve',
    text: 'A simple curve is to be designed for max. speed of 90 kph. The coefficient of friction between the tires and the pavement is 0.40. If the super elevation is to be limited to 10%, what would be the degree of curvature? Use Arc basis.',
    options: opts('9.54°', '9°', '10°', '11.36°'),
    ...solved(54, 'B', '$D = 9°$'),
  },

  // ── Item 55 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q55',
    number: 55,
    pageNumber: 667,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Vertical Curve',
    text: 'On a railroad, a +0.8% grade meets a -0.4% grade at station 2 + 700 and at elevation 30 m. The maximum allowable change in grade per station is 0.2%. Determine the length of the curve.',
    options: opts('120 m', '160 m', '80 m', '100 m'),
    ...solved(55, 'A', '$L = 120$ m'),
  },

  // ── Item 56 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q56',
    number: 56,
    pageNumber: 667,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Vertical Curve',
    text: 'Determine the minimum length of a sag vertical curve between a -7% grade and a +5% grade for a road with 110 kph design speed. The vertical curve must provide 220-meter stopping sight distance.',
    options: opts('526.32 m', '725.48 m', '652.6 m', '365.8 m'),
    ...solved(56, 'C', '$L = 652.6$ m'),
  },

  // ── Item 57 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q57',
    number: 57,
    pageNumber: 668,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Surveying — Compound Vertical Curve',
    text: 'With the geometry of the vertical curves shown, some preliminary components are required before the vertical curves themselves can be computed.\n\nStationing of PVI = 42 + 00\n$L_1$ = 600 feet, $L_2$ = 400 feet\nElevation of PVI = 686.45 feet\n$g_1$ = -3.34%, $g_2$ = +1.23%\n\nCalculate the stationing of BVC and EVC.',
    figureSvg: mstcMay2018Figure(
      'fig_q57_curve',
      'Compound vertical curve diagram showing BVC, CVC, PVI, EVC and the two tangent lengths L1 and L2',
    ),
    options: opts(
      '36 + 00 and 46 + 00',
      '38 + 00 and 48 + 00',
      '34 + 00 and 44 + 00',
      '40 + 00 and 50 + 00',
    ),
    ...solved(
      57,
      'A',
      'Stationing of BVC = 36 + 00, EVC = 46 + 00',
      'The compound-curve diagram the stem refers to is not printed beside the question on folio 668 — it appears only on the solution folio 689. The diagram is reproduced here cropped above the answer lines.',
    ),
  },

  // ── Item 58 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q58',
    number: 58,
    pageNumber: 668,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Transportation — Ocean Waves',
    text: 'Waves under the influence of the winds that generated them are called:',
    options: opts('Wakes', 'Sea', 'Swells', 'Seiching'),
    ...recall(
      'C',
      'Swells',
      'The booklet keys this item C but prints no working for it. Items 58-62 close the paper with transportation-engineering recall questions and the solution run stops at item 57.',
    ),
  },

  // ── Item 59 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q59',
    number: 59,
    pageNumber: 668,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Transportation — Traffic Flow',
    text: 'The maximum sustained 15-minute rate of flow, expressed in passenger cars per hour per lane, which can be accommodated by a uniform freeway segment under prevailing traffic and roadway conditions in one direction is called:',
    options: opts('Density', 'Traffic flow', 'Capacity', 'Design hourly volume'),
    ...recall(
      'C',
      'Capacity',
      'The booklet keys this item C but prints no working for it.',
    ),
  },

  // ── Item 60 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q60',
    number: 60,
    pageNumber: 668,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Transportation — Traffic Signs',
    text: 'Warn road users of condition on or adjacent to the road that may be unexpected or hazardous.',
    options: opts('Roadwork signs', 'Warning signs', 'Traffic signs', 'Guide signs'),
    ...recall(
      'B',
      'Warning signs',
      'The booklet keys this item B but prints no working for it.',
    ),
  },

  // ── Item 61 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q61',
    number: 61,
    pageNumber: 668,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Transportation — Pavement Markings',
    text: 'The purpose of installing edge lines is generally based on the following expect one.\n\nI. To discourage travel on road shoulders\nII. To make driving safer and more assured, particularly at night and during inclement weather by providing a continuous guide for the driver.\nIII. To act as a guide past objects, which are close to the edge of pavement and which constitute a hazard\nIV. To prevent parking at or near intersections\nV. To delineate the edge of the travelled way to distinguish it from the shoulder area',
    options: opts('I', 'IV', 'V', 'II'),
    ...recall(
      'C',
      'V',
      'The booklet keys this item C (statement V) and prints no working. The stem reads "expect one", i.e. "except one", and statement IV — preventing parking at or near intersections — is the one that is not an edge-line purpose, so option B is what the wording asks for. The key is reproduced as printed.',
    ),
  },

  // ── Item 62 ───────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2018-q62',
    number: 62,
    pageNumber: 668,
    subject: 'MSTC',
    year: 2018,
    month: 'May',
    category: 'Transportation — Traffic Flow',
    text: 'It is the maximum number of vehicles, which have a reasonable expectation of passing over a given section of a lane or a roadway in one direction or in both direction during one hour under prevailing road and traffic conditions.',
    options: opts('Road capacity', 'Flow of traffic', 'Density', 'Free flow'),
    ...recall(
      'A',
      'Road capacity',
      'The booklet keys this item A but prints no working for it.',
    ),
  },
];
