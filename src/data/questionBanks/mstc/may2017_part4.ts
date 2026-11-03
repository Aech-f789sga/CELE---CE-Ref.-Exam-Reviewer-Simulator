import { Question } from '../../../types/exam';
import { mstcMay2017Figure } from '../../mstcMay2017Images';
import { solved, recall, opts } from './may2017Helpers';

export const MSTC_MAY2017_PART4: Question[] = [
  // ── Item 61 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q61',
    number: 61,
    pageNumber: 456,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Surveying — Site Plans',
    text: 'This should always be shown on site plans for orientation purposes. Displaying it prominently is the standard practice.',
    options: opts('North direction', 'Scale', 'Legends and Symbols', 'Vicinity Map'),
    ...recall(
      'A',
      'North direction',
      'A site plan is read against the ground, so the north arrow is what lets a reader orient the drawing. Scale, legend and vicinity map are all required too, but only the north direction answers "which way is this facing".',
    ),
  },

  // ── Item 62 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q62',
    number: 62,
    pageNumber: 457,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Surveying — Cross-section Area',
    text: 'Find the area of the given cross-section if the width of roadway is 12 m. The notes read: left 9.8 at height 3.2, center 0 at height 2.9, right 11.2 at height 4.21.',
    options: opts('63.21 m²', '44.58 m²', '58.42 m²', '52.68 m²'),
    figureSvg: mstcMay2017Figure('fig62_notes', 'Cross-section notes for the roadway'),
    ...solved(62, 'D', '52.68 m²', 481),
  },

  // ── Item 63 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q63',
    number: 63,
    pageNumber: 457,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Surveying — Area of Cut',
    text: 'Given the cross-section notes for a road grading work: -3.2 at x₁, +1.2 at 0, +1.2 at 3.5, +2.8 at x₂. The width of the road bed is 9 m and the side slope for cut is 1:1 and for fill is 1.5:1. Compute the area of cut.',
    options: opts('9.462 m²', '10.254 m²', '8.652 m²', '12.324 m²'),
    figureSvg: mstcMay2017Figure('fig63_fig', 'Cross-section notes for the road grading work'),
    ...solved(63, 'A', '9.462 m²', 481, 482),
  },

  // ── Item 64 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q64',
    number: 64,
    pageNumber: 457,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Surveying — Traverse Computation',
    text: 'The following are the step-by-step procedures for calculating azimuths clockwise. I. Plan and prepare. II. Perform the calculation. III. Repeat the calculation. IV. Check the calculation. V. Calculate the azimuths clockwise traverse. VI. Calculate azimuths counter-clockwise traverse. Which of these procedures are true?',
    options: opts(
      'I, II, IV, & V',
      'II, III, V, & VI',
      'I, II, III, & IV',
      'III, IV, V, & VI',
    ),
    ...recall(
      'C',
      'I, II, III, & IV',
      'The four general computational steps are plan and prepare, perform the calculation, repeat it, and check it. Statements V and VI name specific traverse directions rather than steps of the method, so they do not belong in the list.',
    ),
  },

  // ── Item 65 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q65',
    number: 65,
    pageNumber: 457,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Highway Engineering — Curve Speed',
    text: 'What is the maximum speed at which an automobile can round a curve of 28 m radius on a level road if the coefficient of friction between the tires and the road is 0.40?',
    options: opts('10.93 m/s', '9.56 m/s', '9.25 m/s', '10.48 m/s'),
    ...solved(65, 'D', '10.48 m/s', 482),
  },

  // ── Item 66 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q66',
    number: 66,
    pageNumber: 457,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Route Surveying — Circular Curve',
    text: "The angle of intersection of a circular curve is 45°30' and its radius is 192.54 m. PC is at sta. 0 + 700. Compute the right angle offset from sta. 0 + 732.24 on the curve to tangent through P.C.",
    options: opts('3.25 m', '4.55 m', '3.62 m', '2.69 m'),
    ...solved(66, 'D', '2.69 m', 482),
  },

  // ── Item 67 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q67',
    number: 67,
    pageNumber: 458,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Route Surveying — Curve Geometry',
    text: 'Given the geometric relationships, which of these statements are true? I. At the PC (Point of Curvature) and PT (Point of Tangency), the radius and tangent are perpendicular. II. The angle between the tangent and the long chord, originating at the PC (Point of Curvature) or PT (Point of Tangency), is equal to one half of the angle of PI. III. The curvature at the center of the circle that subtends the arc between the PC (Point of Curvature) and the PT (Point of Tangency) is called the central angle. Its value is the same as the "I" angle.',
    options: opts('I and II only', 'all of the above', 'II and III only', 'I only'),
    ...recall(
      'B',
      'All of the above',
      'A radius is perpendicular to the tangent at its own point of tangency, so I holds. The deflection angle from the tangent to the long chord is half the central angle, which is half the intersection angle, so II holds. The central angle subtending PC to PT equals the intersection angle, so III holds as well.',
    ),
  },

  // ── Item 68 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q68',
    number: 68,
    pageNumber: 458,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Route Surveying — Vertical Curves',
    text: 'They are normally parabolas centered about the point of intersection of the vertical tangents they join.',
    options: opts('vertical curve', 'vertical tangent', 'spiral curve', 'grade'),
    ...recall(
      'A',
      'Vertical curve',
      'A vertical curve joins two grades and is laid out as a parabola whose axis is vertical and whose high or low point sits under the intersection of the two tangents — that is what makes the rate of change of grade constant.',
    ),
  },

  // ── Item 69 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q69',
    number: 69,
    pageNumber: 458,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Route Surveying — Summit Curve',
    text: 'A +3% grade is connected to a -2% grade by a vertical summit curve having a length of 300 m. Find the radius of the summit curve.',
    options: opts('4000 m', '6000 m', '7000 m', '5000 m'),
    ...solved(69, 'B', '6000 m', 482, 483),
  },

  // ── Item 70 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q70',
    number: 70,
    pageNumber: 458,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Route Surveying — Vertical Curve Elevation',
    text: 'A descending grade of 4.2% intersects an ascending grade of 3% at station 12 + 325 at elevation 17.30 m. These two grades are to be connected by a 260-m vertical parabolic curve. A reinforced concrete culvert pipe with overall diameter of 105 cm is to be constructed with its top 30 cm below the subgrade. What will be the invert elevation?',
    options: opts('18.863 m', '18.225 m', '17.634 m', '19.214 m'),
    ...solved(70, 'B', '18.225 m', 483, 484),
  },

  // ── Item 71 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q71',
    number: 71,
    pageNumber: 458,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Traffic Engineering — Space Mean Speed',
    text: 'The following data were taken on five cars traversing a 2.6-kilometer highway in SRP: car A 1.1 min, car B 1.4 min, car C 1.3 min, car D 1.2 min, car E 1.5 min. Compute the space mean speed.',
    options: opts('110 m/s', '120 m/s', '100 m/s', '130 m/s'),
    figureSvg: mstcMay2017Figure('fig71_table', 'Travel times of five cars over a 2.6-km highway'),
    ...solved(
      71,
      'B',
      '120 km/h',
      484,
      484,
      'The choices are printed in m/s, but the arithmetic of the problem gives kilometres per hour: 5 cars × 2.6 km over a total of 6.5 minutes is 120. Read the keyed choice as 120 km/h.',
    ),
  },

  // ── Item 72 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q72',
    number: 72,
    pageNumber: 458,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Highway Engineering — Rigid Pavement',
    text: 'Compute the thickness of a rigid pavement with a wheel load capacity of 56 kN if the allowable tensile stress of concrete is 1.6 MPa. Neglect the effect of dowels.',
    options: opts('159 mm', '225 mm', '423 mm', '324 mm'),
    ...solved(72, 'D', '324 mm', 484, 485),
  },

  // ── Item 73 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q73',
    number: 73,
    pageNumber: 459,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Transportation — Capacity Headway',
    text: "An urban bus route has a patronage of 500 passengers per hour and a cycle of 2.5 h. It is operated with buses having a seating capacity of 50 passengers. The operating cost is P60/bus-h and the transit operator believes that passengers value waiting time at P10/h. The ratio of maximum load to the total number of passengers boarding is 0.60 and the operator's maximum load factor is 1.20. Determine the capacity headway.",
    options: opts('20 min', '15 min', '18 min', '12 min'),
    ...solved(73, 'D', '12 min', 485),
  },

  // ── Item 74 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q74',
    number: 74,
    pageNumber: 459,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Coastal Engineering — Wave',
    text: 'The wave length of a deep-water wave during typhoon Vinta at the port of Iligan is 310 m. The still water is located 0.95 m below the centerline of the rotation of the wave. If the steepness of the wave is 0.16 m, determine the vertical distance of the wave through from the bottom of the ocean if its depth of still water is 50 m above the bottom of the ocean.',
    options: opts('29.65 m', '30.10 m', '26.15 m', '22.30 m'),
    ...solved(74, 'C', '26.15 m', 485),
  },

  // ── Item 75 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2017-q75',
    number: 75,
    pageNumber: 459,
    subject: 'MSTC',
    year: 2017,
    month: 'May',
    category: 'Recreational Mathematics — Weights',
    text: 'What is the least number of links that must be disengaged from a 23-link chain so that any number of links from 1 to 23 can be obtained by taking one or more of the pieces?',
    options: opts('3', '4', '2', '5'),
    ...recall(
      'C',
      '2 links',
      'Disengaging two links splits the chain into five pieces: the two single links plus three runs. Choosing those runs as 3, 6 and 12 gives the set 1, 1, 3, 6, 12, which totals 23 and can form every length from 1 to 23 — for example 4 = 3 + 1 and 21 = 12 + 6 + 3. Four cuts would also work, but the question asks for the least number.',
    ),
  },
];
