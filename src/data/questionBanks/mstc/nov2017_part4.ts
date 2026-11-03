import { Question } from '../../../types/exam';
import { mstcNov2017Figure } from '../../mstcNov2017Images';
import { solved, recall, opts } from './nov2017Helpers';

export const MSTC_NOV2017_PART4: Question[] = [
  // ── Item 58 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q58',
    number: 58,
    pageNumber: 560,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Instrument Geometry',
    text: 'To operate an instrument well, a field engineer needs to understand its construction. There are differences among a transit, an optical theodolite, and the new electronic theodolites or total stations; but geometrically, they are all the same. All instruments are designed around the same fundamental relationships or principle lines.\nWhich of the following are correct geometric relationships?\nI. The vertical axis should be perpendicular to the axis of the plate levels.\nII. The vertical crosshair should lie in a plane perpendicular to the horizontal axis.\nIII. The line of sight should be perpendicular to the horizontal axis.\nIV. The horizontal axis should be perpendicular to the vertical axis\nV. The axis of the telescope should be perpendicular to the line of sight',
    options: opts(
      'I, II, III and V only',
      'I, II, III and IV only',
      'I, II, IV and V only',
      'I, III, IV and V only',
    ),
    ...recall(
      'B',
      'I, II, III and IV only',
      'The booklet prints no working for this item. Statement V is the wrong one: the telescope axis is defined to be *coincident* with the line of sight, not perpendicular to it — a perpendicular relationship would make sighting impossible.',
    ),
  },

  // ── Item 59 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q59',
    number: 59,
    pageNumber: 561,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Tape Sag Correction',
    text: "A 50-m tape weighing 1.075 kg has a standard pull of 8 kg. The tape's cross-sectional area and modulus of elasticity are 0.05 cm² and 200 GPa, respectively. What pull (normal tension) is required in order that the effect of sag will be eliminated when the tape is supported at the end point only?",
    options: opts('214.8 N', '163.5 N', '145.8 N', '197.4 N'),
    ...solved(59, 'D', '197.4 N'),
  },

  // ── Item 60 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q60',
    number: 60,
    pageNumber: 561,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Tape Standardization',
    text: 'A chain was used to check the distance between two control points on a large building project. The distance was measured and recorded as 600.172 m. After the work was finished, it was decided to check that chain at the location baseline. Upon checking, it was found that the chain was actually 29.992 m rather than 30.000. What is the actual length between the two control points?',
    options: opts('600.012 m', '600.332 m', '600.052 m', '600.212 m'),
    ...solved(60, 'A', '600.012 m'),
  },

  // ── Item 61 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q61',
    number: 61,
    pageNumber: 561,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Transit Adjustment',
    text: 'The horizontal axis of a transit was inclined at 8\' with the horizontal due to non-adjustment. The first sight had a vertical angle of 40°, the next had -20°. Determine the error in the measured horizontal angle.',
    options: opts("9' 37.47\"", "9' 12.7\"", "10' 11.7\"", "8' 46.3\""),
    ...solved(61, 'A', "9' 37.47\""),
  },

  // ── Item 62 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q62',
    number: 62,
    pageNumber: 561,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Differential Levelling',
    text: 'A differential levelling was conducted from BM₁ to BM₂ 30 km apart. BM₁ is at elevation 124.08 m. The backsight distances averages 150 m in length and the foresight distances averages 100 m. The recorded elevation of BM₂ was 274.11 m. If the level used is out of adjustment such that when the bubble was centered the line of sight was inclined 0.003 m upward in distance of 100 m. What would be the corrected elevation of BM₂?',
    options: opts('273.93 m', '274.29 m', '273.16 m', '274.56 m'),
    ...solved(62, 'A', '273.93 m'),
  },

  // ── Item 63 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q63',
    number: 63,
    pageNumber: 561,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Traverse Discrepancy',
    text: 'From the given traverse chaining field notes, determine the discrepancy of each line.',
    figureSvg: mstcNov2017Figure(
      'fig63_traverse',
      'Traverse chaining field notes: line, forward distance, back distance, mean',
    ),
    options: opts(
      '.01, .01, .04, .01, .00',
      '.01, .01, .01, .04, .00',
      '.01, .04, .01, .00, .01',
      '.04, .01, .01, .00, .01',
    ),
    ...recall(
      'C',
      '.01, .04, .01, .00, .01',
      'The booklet prints no working for this item, only the hint "Forward - Back = Discrepancy". Taking forward minus back down the table: 157.86-157.87, 146.80-146.84, 142.70-142.71, 46.89-46.89, 136.33-136.32 gives .01, .04, .01, .00, .01.',
    ),
  },

  // ── Item 64 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q64',
    number: 64,
    pageNumber: 562,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Traverse Adjustment',
    text: 'Give the latitudes and departures of a certain traverse. Determine the adjusted direction and distance of line CD.',
    figureSvg: mstcNov2017Figure(
      'fig64_latdep',
      'Traverse latitudes and departures table for lines AB through EA',
    ),
    options: opts(
      "690.868 m, N 79° 3' 55\" E",
      "690.521 m, N 78° 54' 12\" E",
      "690.254 m, N 79° 24' 15\" E",
      "690.892 m, N 79° 4' 5\" E",
    ),
    ...solved(64, 'D', "690.892 m, N 79° 4' 5\" E"),
  },

  // ── Item 65 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q65',
    number: 65,
    pageNumber: 562,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Compound Curve',
    text: 'A common tangent of a compound curve makes an angle of 12° from the tangent passing through the PC and 18° from the tangent passing through the PT. If the radius of the second curve is 180 m, find the radius of the first curve if the length of the common tangent is 70 m long.',
    options: opts('412.7 m', '394.8 m', '365.4 m', '357.9 m'),
    ...solved(65, 'B', '394.8 m'),
  },

  // ── Item 66 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q66',
    number: 66,
    pageNumber: 562,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Spiral Easement',
    text: 'Compute the deflection angle at the first quarter point of the spiral if the length of spiral is 80 m with a degree of curve of the central curve of a spiral easement curve is 6.5°.',
    options: opts('0.342°', '0.458°', '0.271°', '0.813°'),
    ...solved(66, 'C', '0.271°'),
  },

  // ── Item 67 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q67',
    number: 67,
    pageNumber: 562,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Transportation — Sight Distance',
    text: 'What are the components of stopping sight distance?',
    options: opts(
      'Reaction Distance and Maneuver Distance',
      'Reaction Distance and Braking Distance',
      'Maneuver Distance and Braking Distance',
      'Reaction Time and Sight Distance',
    ),
    ...recall(
      'B',
      'Reaction Distance and Braking Distance',
      'The booklet prints no working for this item. Stopping sight distance is the sum of the distance travelled during perception-reaction time and the distance needed to brake to a stop; manoeuvre distance belongs to passing sight distance instead.',
    ),
  },

  // ── Item 68 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q68',
    number: 68,
    pageNumber: 562,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Transportation — Highway Cross-Section',
    text: 'Primary consideration in the design of geometric cross-section of, highways, runways and taxiways',
    options: opts('Shoulder', 'Drainage', 'Railway', 'Parking space'),
    ...recall(
      'B',
      'Drainage',
      'The booklet prints no working for this item. Drainage governs the cross-slope (crown) and the shoulder geometry of both highways and airfield pavements — shoulders, railways and parking are consequences of the layout, not the primary design consideration.',
    ),
  },

  // ── Item 69 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q69',
    number: 69,
    pageNumber: 563,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Transportation — Traffic Flow',
    text: 'The maximum number of vehicles, passengers, pedestrians or the like, which can be accommodated by a given facility under a given level of service.',
    options: opts('capacity', 'traffic', 'volume', 'density'),
    ...recall(
      'C',
      'volume',
      'The booklet prints no working for this item, and its key disagrees with the wording of the stem: the quantity defined — the maximum number a facility can accommodate at a given level of service — is **capacity** (choice A) in the Highway Capacity Manual. The printed key is C, "volume", which is the actual count observed, not the maximum the facility can carry. The key is reproduced as printed.',
    ),
  },

  // ── Item 70 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q70',
    number: 70,
    pageNumber: 563,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Control Surveys',
    text: 'This is commonly identified as primary, secondary and working control on the jobsite?',
    options: opts(
      'Referencing control',
      'Vertical control',
      'Monumentation control',
      'Horizontal control',
    ),
    ...recall(
      'D',
      'Horizontal control',
      'The booklet prints no working for this item. Primary, secondary and working control are the three orders of horizontal control network established for a project.',
    ),
  },

  // ── Item 71 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q71',
    number: 71,
    pageNumber: 563,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Volumes from Contours',
    text: 'Determine the volume of the depression that will be filled from the contour map with the following data. The contour interval of 2 meters.',
    figureSvg: mstcNov2017Figure(
      'fig71_contour',
      'Contour elevations and enclosed areas for the depression',
    ),
    options: opts('426 m³', '578 m³', '354 m³', '393 m³'),
    ...solved(71, 'D', '393 m³'),
  },

  // ── Item 72 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q72',
    number: 72,
    pageNumber: 563,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Hydraulics — Wave Classification',
    text: 'Waves which fall forward since the forward velocity of the crest particles exceeds the velocity of propagation of the wave length L is less than 7 times the wave height (L < 7H).',
    options: opts(
      'Intermediate water waves',
      'Breaking waves',
      'Shallow-water waves',
      'Significant waves',
    ),
    ...recall(
      'B',
      'Breaking waves',
      'The booklet prints no working for this item. When the crest particle velocity exceeds the wave celerity — which happens once L < 7H — the crest outruns the wave and topples forward, i.e. it breaks.',
    ),
  },

  // ── Item 73 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q73',
    number: 73,
    pageNumber: 563,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Hydraulics — Wave Parameters',
    text: 'The ratio of the wave height to its wave length is called:',
    options: opts('wave period', 'wave propagation', 'slope', 'steepness'),
    ...recall(
      'D',
      'steepness',
      'The booklet prints no working for this item. Wave steepness is defined as H/L and governs whether a wave is stable or breaks.',
    ),
  },

  // ── Item 74 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q74',
    number: 74,
    pageNumber: 563,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Hydraulics — Tide Datums',
    text: 'What is the meaning of MLLW?',
    options: opts(
      'Lower Mean Low Water',
      'Mean Lower Low Water',
      'Mean Low Level Water',
      'Mean Lower Level Water',
    ),
    ...recall(
      'B',
      'Mean Lower Low Water',
      'The booklet prints no working for this item. MLLW is the average of the lower of the two daily low tides over a 19-year tidal epoch — the chart datum used in Philippine and US waters.',
    ),
  },
];
