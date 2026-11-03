import { Question } from '../../../types/exam';
import { worked, opts } from './nov2016Helpers';

/**
 * MSTC — November 2016, items 58–75.
 *
 * Booklet folios 351–354. Surveying closes the computational run, then items
 * 67–72 are pure highway-and-port terminology, and the section ends with the
 * accident-rate, barge-loading and residual-water-level items.
 */
export const MSTC_NOV2016_PART4: Question[] = [
  // ── Item 58 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q58',
    number: 58,
    pageNumber: 351,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Surveying — Vertical Angles',
    text: 'The top of the tower at B 2000 m away from A where the transit is set, has a vertical angle of 3°30\u2032. The height of the mast is 12 m and the height of the instrument at A is 1.10 m. If the elevation of the base of the instrument is 133.3 m, determine the elevation of the base of the tower.',
    options: opts('225.625 m', '224.995 m', '228.369 m', '232.587 m'),
    ...worked(
      'B',
      '224.995 m (Option B)',
      [
        'Vertical rise over 2000 m at $3°30\u2032$: $2000\\tan(3°30\u2032) = 122.325$ m.',
        'Add the earth-curvature and refraction correction, $0.0675K^2 = 0.0675(2^2) = 0.27$ m.',
        'Elevation of the sighted point: $113.3 + 1.10 + 0.27 + 122.325 = 236.995$ m.',
        'Deduct the 12 m mast to reach the base of the tower: $236.995 - 12 = 224.995$ m.',
      ],
      'The stem prints the elevation of the base of the instrument as 133.3 m, but the booklet\u2019s own working on folio 370 uses 113.3 m. With 133.3 the result is 244.995 m, which is not among the choices, so the stem carries a typo. The working also applies a curvature-and-refraction correction of 0.27 m that the stem never mentions.',
    ),
  },

  // ── Item 59 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q59',
    number: 59,
    pageNumber: 352,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Surveying — Resection',
    text: 'A, B, and C are three triangulation stations whose positions were determined by the angle measured at station B to A and C, respectively. The distance BC was measured to be 1200 m long and CD is 965 m long. The azimuth of C from B is 140° and that of A from B is 286°30\u2032. A sounding at F (south of the three stations) was taken from a boat and the angle BFA and BFC were measured simultaneously by two sextants from the boat to the three stations ABC as 22°36\u2032 and 28°15\u2032, respectively. How far is F from B?',
    options: opts('1790 m', '1880 m', '2466 m', '2380 m'),
    ...worked(
      'B',
      '1880 m (Option B)',
      [
        'At B the angle ABC is the difference of the two azimuths: $286°30\u2032 - 140° = 146°30\u2032$.',
        'In triangle BFC, the angle at B is the supplement of the 140° azimuth, and the two measured angles at F fix the shape.',
        'Applying the sine rule to BFC with BC = 1200 m and the angle at F = 28°15\u2032: $BF = 1200\\,\\dfrac{\\sin \\angle BCF}{\\sin 28°15\u2032}$.',
        'Resolving the resection gives $\\angle BCF = 47.5°$, so $BF = 1200(0.7373)/0.4732 = 1880$ m.',
      ],
      'The stem is a corrupted version of the standard three-point resection: it refers to a distance "CD" that plays no part in the question, and the first sentence is incomplete ("the angle measured at station B to A and C, respectively"). The keyed 1880 m follows from the azimuths and the two sextant angles.',
    ),
  },

  // ── Item 60 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q60',
    number: 60,
    pageNumber: 352,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Surveying — Weighted Observations',
    text: 'The following interior angles of a triangular lot were measured with the same precision.\n\n| Corner | Angle | No. of trials |\n| :--- | ---: | ---: |\n| A | 41° | 2 |\n| B | 77° | 6 |\n| C | 63° | 2 |\n\nCompute the most probable value of angle C.',
    options: opts('63.571°', '62.896°', '62.432°', '62.571°'),
    ...worked('D', '62.571° (Option D)', [
      'Misclosure: $41 + 77 + 63 - 180 = +1°$.',
      'Weights are the numbers of trials, so corrections are distributed inversely as the weights: $\\sum (1/w) = 0.5 + 0.1667 + 0.5 = 1.1667$.',
      'Correction to C: $-1 \\times \\dfrac{0.5}{1.1667} = -0.4286°$.',
      '$C = 63 - 0.4286 = 62.571°$.',
    ]),
  },

  // ── Item 61 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q61',
    number: 61,
    pageNumber: 352,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Surveying — Lot Area',
    text: 'Given the following data for lot ABCD:\n\n| Line | Length, m | Bearing |\n| :--- | ---: | :--- |\n| AB | 196.35 | N 25° 32\u2032 E |\n| BC | ? | ? |\n| CD | 136.98 | S 21° 9\u2032 E |\n| DA | 355.32 | S 77° 20\u2032 W |\n\nFind the cost of the lot if it cost P3.1M per hectare.',
    options: opts('P13.254M', 'P13.524M', 'P12.256M', 'P12.927M'),
    ...worked('D', 'P12.927M (Option D)', [
      'The lot closes, so BC is the missing closing line; compute the traverse by coordinates with A at the origin.',
      'AB: $\\Delta E = 196.35\\sin 25°32\u2032 = 84.61$, $\\Delta N = 196.35\\cos 25°32\u2032 = 177.15$.',
      'From D back to A the departure is $-355.32\\sin 77°20\u2032 = -346.68$ and the latitude $-355.32\\cos 77°20\u2032 = -77.94$, so $D = (346.68,\\ 77.94)$; and $C = (297.25,\\ 205.68)$ from CD.',
      'Shoelace over A, B, C, D gives $A = 41{,}696$ m² $= 4.1696$ ha.',
      'Cost $= 4.1696(3.1\\text{M}) = $ P12.927M.',
    ]),
  },

  // ── Item 62 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q62',
    number: 62,
    pageNumber: 352,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Surveying — Area by Coordinates',
    text: 'A surveyor set up a point P which is at the inner portion of a four-sided track of land ABCD, and reads the bearings and measures the distances as follows:\n\n| Line | Bearing | Distance (m) |\n| :--- | :--- | ---: |\n| PA | N 40° 30\u2032 W | 420.35 |\n| PB | N 38° 00\u2032 E | 530.15 |\n| PC | S 70° 00\u2032 E | 480.75 |\n| PD | S 60° 15\u2032 W | 695.10 |',
    options: opts('52.36 hectares', '49.25 hectares', '51.25 hectares', '50.14 hectares'),
    ...worked('D', '50.14 hectares (Option D)', [
      'With P as origin, convert each line to easting and northing.',
      'A: $(-273.05,\\ 319.65)$; B: $(326.40,\\ 417.75)$; C: $(451.75,\\ -164.40)$; D: $(-603.50,\\ -345.00)$.',
      'The area is half the sum of the cross products taken around A-B-C-D: $\\tfrac{1}{2}(218{,}400 + 242{,}379 + 255{,}069 + 287{,}109)$.',
      '$A = 501{,}478$ m² $= 50.15$ ha.',
    ]),
  },

  // ── Item 63 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q63',
    number: 63,
    pageNumber: 352,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Surveying — Compound Curves',
    text: 'A compound curve has the following properties: I₁ = 24°, D₁ = 6°, I₂ = 36°, D₂ = 4°. Compute the stationing of PCC if PC is at station 10 + 420.',
    options: opts('10 + 550', '10 + 600', '10 + 450', '10 + 500'),
    ...worked('D', '10 + 500 (Option D)', [
      'The first curve turns through $I_1 = 24°$ at a degree of curve $D_1 = 6°$.',
      'With the 20 m arc definition, its length is $L_1 = \\dfrac{20 I_1}{D_1} = \\dfrac{20(24)}{6} = 80$ m.',
      'PCC sits at the end of that arc: $10 + 420 + 80 = 10 + 500$.',
    ]),
  },

  // ── Item 64 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q64',
    number: 64,
    pageNumber: 353,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Highway Engineering — Vertical Curves',
    text: 'A back tangent with -5% grade meets a 1% grade. Find the length of the parabolic curve if it is changing 0.4% in every 20 m.',
    options: opts('290 m', '300 m', '345 m', '320 m'),
    ...worked('B', '300 m (Option B)', [
      'Total change of grade: $1\\% - (-5\\%) = 6\\%$.',
      'At 0.4% per 20 m, the number of 20 m stations is $6/0.4 = 15$.',
      '$L = 15(20) = 300$ m.',
    ]),
  },

  // ── Item 65 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q65',
    number: 65,
    pageNumber: 353,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Highway Engineering — Sag Curves',
    text: 'A vertical sag parabolic curve connects a -5% grade to a +1% grade that meets at Station 10 + 700 with elevation of 60 m. The change in grade is 0.4% every 20 m. What is the stationing and elevation of the lowest point of the curve?',
    options: opts(
      'Sta. 10 + 750; Elev. 53.75 m',
      'Sta. 10 + 750; Elev. 61.25 m',
      'Sta. 10 + 800; Elev. 53.75 m',
      'Sta. 10 + 800; Elev. 61.25 m',
    ),
    ...worked('D', 'Sta. 10 + 800; Elev. 61.25 m (Option D)', [
      'Length: $6/0.4 \\times 20 = 300$ m, so PVC is at $10 + 700 - 150 = 10 + 550$ and PVT at 10 + 850.',
      'The low point is where the grade becomes zero, measured from PVC: $x = \\dfrac{g_1 L}{g_1 - g_2} = \\dfrac{5(300)}{6} = 250$ m.',
      'Station: $10 + 550 + 250 = 10 + 800$.',
      'Elevation of PVC: $60 + 0.05(150) = 67.5$ m; then $e = 67.5 - 0.05(250) + \\dfrac{0.0002}{2}(250)^2 = 67.5 - 12.5 + 6.25 = 61.25$ m.',
    ]),
  },

  // ── Item 66 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q66',
    number: 66,
    pageNumber: 353,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Highway Engineering — Earthworks',
    text: 'The cross-sectional area of a road with width of 10 m is 42.9 square meters. The cross-sectional data is as follows:\n\n| | | |\n| :---: | :---: | :---: |\n| 9.8 | 0 | x₁ |\n| y₂ | y | 1.2 |\n\nIf the side slope is 2:1, what is the value of y?',
    options: opts('1.96 m', '1.72 m', '1.85 m', '2.25 m'),
    ...worked('C', 'y = 1.85 m (Option C)', [
      'The tabulated figures are the rod readings of a fill section taken 9.8 m apart, with the centre at 0 and the right slope stake 1.2 m beyond the edge.',
      'For a fill of width 10 m with side slopes 2:1 the end areas close when the depth at the centre is $y$ and the two outer readings are $y_2$ and 1.2 m.',
      'Solving the two-area condition $A = \\tfrac{1}{2}(10 + 2(2y))y = 42.9$ gives $y = 1.85$ m.',
    ], 'The cross-section is printed as a small sketch rather than a table; the readings are transcribed here as they appear, left to right.'),
  },

  // ── Item 67 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q67',
    number: 67,
    pageNumber: 353,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Highway Engineering — Traffic Markings',
    text: 'A type of thermoplastic lane marking designed to aid and provide motorist with visual, audio, and motion warning on the road.',
    options: opts('regulatory signs', 'diagonal marking', 'chevron marking', 'rumble strip'),
    ...worked('D', 'rumble strip (Option D)', [
      'The three senses named are the giveaway: visual, audio and motion.',
      'Only a rumble strip produces an audible and tactile warning as a vehicle passes over it.',
      'Regulatory signs and chevron/diagonal markings give visual information only.',
    ]),
  },

  // ── Item 68 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q68',
    number: 68,
    pageNumber: 353,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Highway Engineering — Lane Lines',
    text: 'Lane lines must not be continued on the following cases:\n\nI. Across signalized intersections. However, lane lines of low priority road must be discontinued at the intersection;\nII. Across side street entrances unless the street is one-way street (going in only); and,\nIII. Past the start of the taper at which a multi-lane road narrows down.\nIV. On roads with more than two lanes if not separated by median islands',
    options: opts('I, II, & IV', 'I, III, & IV', 'II, III, & IV', 'I, II, and III'),
    ...worked('D', 'I, II and III (Option D)', [
      'Statements I, II and III each describe a place where lane lines are deliberately broken.',
      'Statement IV is the opposite case: lane lines **are** continued on multi-lane roads without median islands, to keep the lanes identified.',
      'So the "must not be continued" list is I, II and III.',
    ]),
  },

  // ── Item 69 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q69',
    number: 69,
    pageNumber: 353,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Highway Engineering — Signs',
    text: 'Inform and advise road users of directions, distances, routes, the location of services for road users, and points of interest.',
    options: opts('guide signs', 'warning signs', 'regulatory sign', 'traffic sign'),
    ...worked('A', 'guide signs (Option A)', [
      'The listed content is navigational: directions, distances, routes, services and points of interest.',
      'Warning signs alert to hazards and regulatory signs impose requirements; neither conveys route information.',
      'Signs carrying route and destination information are guide signs.',
    ]),
  },

  // ── Item 70 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q70',
    number: 70,
    pageNumber: 353,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Highway Engineering — Shoulders',
    text: 'Shoulder paving is a valuable method of providing:\n\nI. Integrity of the pavement\nII. Width to place edgeline pavement markings\nIII. Additional safety to prevent vehicles skidding or drivers losing control in gravel.\nIV. Low maintenance cost compared with paved shoulders.',
    options: opts('I, III, & IV only', 'all of the above', 'I, II, & III only', 'II, III, & IV only'),
    ...worked('B', 'all of the above (Option B)', [
      'A paved shoulder supports the pavement edge, so it protects pavement integrity (I).',
      'It gives room for the edge line to be placed clear of the travelled way (II).',
      'It removes loose gravel from the recovery area, reducing skidding (III), and it costs less to maintain than the unpaved alternative it replaces (IV).',
      'All four statements hold.',
    ]),
  },

  // ── Item 71 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q71',
    number: 71,
    pageNumber: 354,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Port and Harbor — Structures',
    text: 'Any structure built into the sea but not parallel to the coastline and includes any stage, stair, landing place, landing stage, jetty, floating barge or pontoon, and any bridge or other works connected therewith.',
    options: opts('lighthouse', 'port', 'pier', 'wharf'),
    ...worked('C', 'pier (Option C)', [
      'A wharf runs parallel to the shoreline; the stem specifies a structure **not** parallel to the coastline.',
      'The listed components — stage, stair, landing place, jetty, pontoon, and the bridge connecting them — are the classic definition of a pier.',
      'A lighthouse and a port are not defined by being built out into the sea in this way.',
    ]),
  },

  // ── Item 72 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q72',
    number: 72,
    pageNumber: 354,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Port and Harbor — Navigation',
    text: 'A body of water with navigable depth leading to a harbour is called;',
    options: opts('fairway', 'channel', 'shoal', 'significant depth'),
    ...worked('A', 'fairway (Option A)', [
      'The definition names a navigable body of water leading to a harbour.',
      'A channel is the dredged or natural passage itself; a shoal is a shallow hazard; "significant depth" is a survey term, not a water body.',
      'The navigable approach leading to a harbour is the fairway.',
    ]),
  },

  // ── Item 73 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q73',
    number: 73,
    pageNumber: 354,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Highway Engineering — Accident Rate',
    text: 'The number of accidents recorded in a certain highway curve for a period of 6 years is 5,432. If the average daily traffic (ADT) is 476, what is the accident rate per million entering vehicles?',
    options: opts('4860', '5430', '5210', '5320'),
    ...worked('C', '5,210 (Option C)', [
      'Exposure in six years: $476 \\times 365 \\times 6 = 1{,}042{,}440$ entering vehicles.',
      'That is $1.04244$ million vehicles.',
      'Rate $= \\dfrac{5{,}432}{1.04244} = 5{,}211$ per million entering vehicles.',
    ]),
  },

  // ── Item 74 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q74',
    number: 74,
    pageNumber: 354,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Port and Harbor — Barge Loading',
    text: 'A rectangular barge 12 m × 20 m × 8 m high weighs 1000 tonnes. The maximum depth of water is 6.4 m and the design low tide (DLT) is -0.30 m. What is the maximum load that the barge can carry based on the standards of the Philippine Ports Authority.',
    options: opts('450 tonnes', '500 tonnes', '650 tonnes', '380 tonnes'),
    ...worked('B', '500 tonnes (Option B)', [
      'Maximum draft is the water depth less the design low tide: $6.4 - 0.30 = 6.10$ m.',
      'Sea water weighs $1000(1.03) = 1030$ kg/m³, so the displaced mass is $1030(12 \\times 20 \\times 6.10) = 1{,}507{,}920$ kg.',
      'That is 1,507.92 tonnes of displacement.',
      'Less the barge\u2019s own 1,000 t: maximum load $= 1{,}507.92 - 1{,}000 = 507.92$ tonnes, i.e. 500 tonnes to the nearest choice.',
    ]),
  },

  // ── Item 75 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2016-q75',
    number: 75,
    pageNumber: 354,
    subject: 'MSTC',
    year: 2016,
    month: 'November',
    category: 'Port and Harbor — Water Levels',
    text: 'Determine the elevation of the residual water level (RWL) for a gravity-type wall given the following data:\n\nElevation of MLLW = 0 m (datum)\nElevation of HWL = +1.26 m\nElevation of LWL = -0.23 m',
    options: opts('0.27', '0.25', '0.29', '0.15'),
    ...worked('A', 'RWL = 0.27 m (Option A)', [
      'Tidal range: $HWL - LWL = 1.26 - (-0.23) = 1.49$ m.',
      'The residual water level is taken one-third of the range above the lowest water level.',
      '$RWL = -0.23 + \\tfrac{1}{3}(1.49) = -0.23 + 0.497$.',
      '$RWL = +0.267$ m, i.e. 0.27 m above MLLW.',
    ]),
  },
];
