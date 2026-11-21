/**
 * Physics — items 1–90, transcribed from the printed practice set.
 *
 * Source: Margallo's Buckling Review Center, "[PHYSICS]" practice problems,
 * nine landscape pages, two columns, numbered straight through 1–90 and ending
 * with a printed "--- END ---" on page 9. Same series as the Basic Math,
 * Calculus, Statics and Fluid Mechanics banks, so it lives beside them and is
 * drawn by the same "By topics" machinery.
 *
 * ## Key status
 *
 * No answer key has been supplied for this booklet, so **every** item is
 * `keyPending` and the UI must not score it. The arithmetic that keeps a
 * pending item out of a score, a pass mark and the leaderboard lives in
 * `grading.ts`; `keyPending` is the only switch, and it is set here once per
 * item by the factory below.
 *
 * ## Sections
 *
 *   RECTILINEAR MOTION ......................  1–13   phys-rectilinear
 *   PROJECTILE MOTION ...................... 14–24   phys-projectile
 *   ROTATIONAL MOTION ...................... 25–29   phys-rotational
 *   CIRCULAR MOTION ........................ 30–34   phys-circular
 *   NEWTON'S 2ND LAW OF MOTION ............. 35–54   phys-newton
 *   NEWTON'S LAW OF UNIVERSAL GRAVITATION .. 55–64   phys-gravitation
 *   WORK, ENERGY, AND POWER ................ 65–84   phys-work-energy
 *   IMPULSE AND MOMENTUM ................... 85–90   phys-momentum
 *
 * The eight headings are the booklet's own, verbatim, and they are what the
 * drill offers as topics: a learner who wants projectiles should not have to
 * sit Newton's second law to get them.
 *
 * ## Board area
 *
 * Every topic is filed under MSTC. Physics is not one of the three CE board
 * areas, and inventing a fourth would ripple through `SUBJECT_CONFIGS` and
 * every lookup keyed on it; the booklet's own footer groups these problems with
 * "APPLIED MATHEMATICS, SURVEYING, PRINCIPLES OF TRANSPORTATION...", which is
 * the MSTC grouping. As with the other banks, the real classification is
 * `topicId`/`category` and `subject` is only carried to satisfy the type.
 *
 * ## Figures
 *
 * Ten items carry a drawing that the prose cannot replace — a trajectory, an
 * incline, an elevator cab. Each points at a crop in `public/images/physics/`,
 * named `phys-q<item>`. The other eighty are self-contained prose.
 *
 * ## Transcription notes
 *
 * Text is as printed, including the booklet's own slips; nothing was silently
 * corrected, because an option that quietly disagrees with the page is worse
 * than one that looks odd. The known slips, left in place:
 *
 *   Item 1  options are labelled "mi" although the question asks *when*; the
 *           numbers only work as years (2.9×10³ mi ÷ 25 mm/yr ≈ 1.9×10⁸).
 *   Item 11 options are labelled "m/s" although the question asks for a
 *           horizontal *distance*.
 *   Item 19 prints no question line at all — the stem stops at "at a speed of
 *           11.0 m/s." and the options are distances. A bracketed note marks
 *           the gap so the item is still answerable.
 *   Item 23 reads "A bomb have to be ejected ... horizontal distance d = 9.40
 *           km?" — grammar and stray question mark as printed.
 *   Item 44 offers negative forces ("-0.20 Newtons") for a stem that asks for
 *           a magnitude.
 *   Items 72 and 75 print "unstained" where "unstretched" is meant.
 *   Item 78's options wrap onto a second line in the booklet; each is
 *           transcribed as the complete pair it was meant to be.
 */
import type { TopicQuestion } from './topicBanks';

/**
 * Figure crops, by item number.
 *
 * Kept as data rather than as a `figure` argument on every call so the ten
 * exceptions are visible in one place — the other eighty items are prose only.
 */
const PHYS_FIGURES: Record<number, { caption: string }> = {
  21: { caption: 'Ball thrown toward a building 50 m away' },
  22: { caption: 'Ski jumper leaving a horizontal track above a 35° incline' },
  23: { caption: 'Cross-section of Mt. Fuji with the bomb trajectory from A to B' },
  32: { caption: 'Ball on a 24-cm string whirling in a horizontal circle' },
  51: { caption: 'Car coasting down a 30° hill, 100 m to the stop point' },
  52: { caption: 'Elevator cabs A and B on a shared cable' },
  53: { caption: 'Three blocks on a frictionless surface under a 42-N force' },
  54: { caption: 'Conical pendulum: cord of length L sweeping a cone' },
  77: { caption: 'Block sliding into a spring on a rough floor' },
  80: { caption: 'Pendulum released from the vertical, rising to height h' },
};

/**
 * Wraps a figure crop in the markup `EngineeringFigure` expects.
 *
 * `figureSvg` is injected with `dangerouslySetInnerHTML`, so it must be HTML,
 * not a bare URL — handing it a URL string renders the path as text.
 *
 * Two bounds, not one: `max-w-md` caps the wide drawings (a trajectory is
 * landscape), `max-h-[32rem]` caps the tall ones. Item 52's elevator cabs are
 * 215×533 px, and at a fixed width that became a full screen of image with the
 * answer options pushed off the bottom. Both dimensions are `auto` so the
 * aspect ratio is preserved — clamping width while height is fixed would
 * stretch the drawing, which is worse than a small one.
 */
function physFigure(item: number, caption: string): string {
  return `<div class="flex flex-col items-center justify-center w-full py-2">
  <img
    src="/images/physics/phys-q${item}.png"
    alt="Physics figure — ${caption}"
    class="max-w-md max-h-[32rem] w-auto h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
    loading="eager"
  />
</div>`;
}

function makePhysItem(topicId: string, category: string) {
  return (
    number: number,
    text: string,
    opts: [string, string, string, string],
    page: number
  ): TopicQuestion => {
    const fig = PHYS_FIGURES[number];
    return {
      id: `phys-${String(number).padStart(3, '0')}`,
      number,
      pageNumber: page,
      subject: 'MSTC',
      year: 0,
      month: 'May',
      category,
      text,
      figureSvg: fig ? physFigure(number, fig.caption) : undefined,
      figureCaption: fig ? `Item ${number}` : undefined,
      options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
      correctAnswer: 'A',
      keyPending: true,
      topicId,
      solution: {
        summary: 'No printed key supplied for this booklet yet.',
        steps: [],
        finalAnswer: '',
        note: 'Answer key pending — this item is not scored.',
      },
    };
  };
}

const rm = makePhysItem('phys-rectilinear', 'Rectilinear Motion');
const pm = makePhysItem('phys-projectile', 'Projectile Motion');
const rot = makePhysItem('phys-rotational', 'Rotational Motion');
const cir = makePhysItem('phys-circular', 'Circular Motion');
const nl = makePhysItem('phys-newton', "Newton's 2nd Law of Motion");
const grav = makePhysItem('phys-gravitation', "Newton's Law of Universal Gravitation");
const wep = makePhysItem('phys-work-energy', 'Work, Energy, and Power');
const mom = makePhysItem('phys-momentum', 'Impulse and Momentum');

/** Section: RECTILINEAR MOTION — items 1–13. */
export const PHYS_RECTILINEAR: TopicQuestion[] = [
  rm(1,
    'The North American and European plates of the Earth\u2019s crust are drifting apart with a relative speed of about 25 mm/yr. Take the speed as constant and find when the rift between them started to open, to reach a current width of 2.9 × 10³ mi.',
    ['1.8×10⁸ mi', '1.9×10⁸ mi', '1.9×10⁹ mi', '1.8×10⁹ mi'], 1),
  rm(2,
    'A person takes a trip, driving with a constant speed of 89.5 km/h, except for a 22.0-min rest stop. If the person\u2019s average speed is 77.8 km/h, how much time is spent on the trip?',
    ['2.18 h', '1.82 h', '2.81 h', '1.28 h'], 1),
  rm(3,
    'A 50.0-g Super Ball traveling at 25.0 m/s bounces off a brick wall and rebounds at 22.0 m/s. A high-speed camera records this event. If the ball is in contact with the wall for 3.50 ms, what is the magnitude of the average acceleration (m/s²) of the ball during this time interval?',
    ['1.34×10³', '1.43×10³', '1.43×10⁴', '1.34×10⁴'], 1),
  rm(4,
    'An electron in a cathode-ray tube accelerates uniformly from 2.00 × 10⁴ m/s to 6.00 × 10⁶ m/s over 1.50 cm. In what time interval does the electron travel this 1.50 cm?',
    ['4.89×10⁻⁹ s', '4.98×10⁻⁹ s', '4.89×10⁻⁸ s', '4.98×10⁻⁸ s'], 1),
  rm(5,
    'A truck on a straight road starts from rest, accelerating at 2.00 m/s² until it reaches a speed of 20.0 m/s. Then the truck travels for 20.0 s at constant speed until the brakes are applied, stopping the truck in a uniform manner in an additional 5.00 s. How long is the truck in motion?',
    ['35.0 s', '30.0 s', '25.0 s', '20.0 s'], 1),
  rm(6,
    'A hockey player is standing on his skates on a frozen pond when an opposing player, moving with a uniform speed of 12.0 m/s, skates by with the puck. After 3.00 s, the first player makes up his mind to chase his opponent. If he accelerates uniformly at 4.00 m/s², how long does it take him to catch his opponent',
    ['7.2 s', '6.2 s', '5.2 s', '8.2 s'], 1),
  rm(7,
    'In coming to a stop, a car leaves a skid mark 92 m long on the highway. Assuming a deceleration of 7.00 m/s², estimate the speed of the car just before braking.',
    ['32 m/s', '36 m/s', '34 m/s', '38 m/s'], 1),
  rm(8,
    'An auto\u2019s velocity increases uniformly from 6.0 m/s to 20 m/s while covering 70 m in a straight line. Find the time taken.',
    ['3.2 s', '4.1 s', '5.4 s', '6.5 s'], 1),
  rm(9,
    'An attacker at the base of a castle wall 3.65 m high throws a rock straight up with speed 7.40 m/s from a height of 1.55 m above the ground. Will the rock reach the top of the wall? If so, what is its speed at the top? If not, what initial speed must it have to reach the top?',
    ['1.69 m/s', '2.69 m/s', '3.69 m/s', '4.69 m/s'], 1),
  rm(10,
    'A baseball is hit so that it travels straight upward after being struck by the bat. A fan observes that it takes 3.00 s for the ball to reach its maximum height. Find the ball\u2019s initial velocity.',
    ['29.4 m/s', '24.9 m/s', '42.9 m/s', '49.2 m/s'], 1),
  rm(11,
    'A daring ranch hand sitting on a tree limb wishes to drop vertically onto a horse galloping under the tree. The constant speed of the horse is 10.0 m/s, and the distance from the limb to the level of the saddle is 3.00 m. What must be the horizontal distance between the saddle and limb when the ranch hand makes his move?',
    ['7.82 m/s', '7.28 m/s', '8.72 m/s', '8.27 m/s'], 1),
  rm(12,
    'An astronaut on a strange planet finds that she can jump a maximum horizontal distance of 15.0 m if her initial speed is 3.00 m/s. What is the free-fall acceleration on the planet?',
    ['0.5 m/s²', '0.4 m/s²', '0.7 m/s²', '0.6 m/s²'], 1),
  rm(13,
    'A ball is thrown toward a cliff of height h with a speed of 30 m/s and an angle of 60° above horizontal. It lands on the edge of the cliff 4.0 s later. How high is the cliff?',
    ['52 m', '34 m', '26 m', '48 m'], 1),
];

/** Section: PROJECTILE MOTION — items 14–24. */
export const PHYS_PROJECTILE: TopicQuestion[] = [
  pm(14,
    'A ball is tossed from an upper-story window of a building. The ball is given an initial velocity of 8.00 m/s at an angle of 20.0° below the horizontal. It strikes the ground 3.00 s later. Find the height from which the ball was thrown.',
    ['53.2 m', '52.3 m', '35.2 m', '32.5 m'], 2),
  pm(15,
    'A home run is hit in such a way that the baseball just clears a wall 21.0 m high, located 130 m from home plate. The ball is hit at an angle of 35.0° to the horizontal, and air resistance is negligible. Find the initial speed of the ball.',
    ['47.1 m/s', '71.4 m/s', '74.1 m/s', '41.7 m/s'], 2),
  pm(16,
    'A placekicker kicks a football at an angle of 40.0° above the horizontal axis. The initial speed of the ball is 22 m/s. Ignore air resistance, and find the maximum height that the ball attains.',
    ['5 m', '10 m', '15 m', '20 m'], 2),
  pm(17,
    'A ball is thrown horizontally from the roof of a building 45.0 m tall and lands 24.0 m from the base. What was the ball\u2019s initial speed.',
    ['7.29 m/s', '9.27 m/s', '9.72 m/s', '7.92 m/s'], 2),
  pm(18,
    'An airplane is flying with a velocity of 90.0 m/s at an angle of 23.0° above the horizontal. When the plane is 114 m directly above a dog that is standing on level ground, a suitcase drops out of the luggage compartment. How far from the dog will the suitcase land? Ignore air resistance.',
    ['759 m', '795 m', '975 m', '957 m'], 2),
  pm(19,
    'A long jumper leaves the ground at an angle of 20.0° above the horizontal and at a speed of 11.0 m/s.\n\n[The booklet prints no question line here. Its options are distances, so it is asking how far the jumper travels.]',
    ['9.47 m', '7.49 m', '7.94 m', '9.74 m'], 2),
  pm(20,
    'A stone is thrown from the top of a building upward at an angle of 30.0° to the horizontal with an initial speed of 20.0 m/s. The height from which the stone is thrown is 45.0 m above the ground. What is the speed of the stone just before it strikes the ground?',
    ['35.8 m/s', '38.5 m/s', '53.8 m/s', '58.3 m/s'], 2),
  pm(21,
    'As shown in the figure, a ball is thrown from the top of one building toward a tall building 50 m away. The initial velocity of the ball is 20 m/s 40° ABOVE HORIZONTAL. How far above or below its original level will the ball strike the opposite wall?',
    ['0.22 km', '0.11 km', '0.33 km', '0.44 km'], 2),
  pm(22,
    'A ski jumper leaves the ski track moving in the horizontal direction with a speed of 25.0 m/s as shown. The landing incline below her falls off with a slope of 35.0°. Where does she land on the incline?',
    ['(83.9, -62.5)', '(83.9, -65.2)', '(89.3, -65.2)', '(89.3, -62.5)'], 2),
  pm(23,
    'During volcanic eruptions, chunks of solid rock can be blasted out of the volcano; these projectiles are called volcanic bombs. The figure shows a cross section of Mt. Fuji, in Japan. A bomb have to be ejected, at angle θ₀ = 35° to the horizontal, from the vent at A in order to fall at the foot of the volcano at B, at vertical distance h = 3.30 km and horizontal distance d = 9.40 km? Ignore, for the moment, the effects of air on the bomb\u2019s travel. What would be the time of flight?',
    ['25 sec', '35 sec', '45 sec', '55 sec'], 2),
  pm(24,
    'A ball is thrown upward at an angle of 30° to the horizontal and lands on the top edge of a building that is 20 m away. The top edge is 5.0 m above the throwing point. How fast was the ball thrown?',
    ['15 m/s', '20 m/s', '25 m/s', '30 m/s'], 3),
];

/** Section: ROTATIONAL MOTION — items 25–29. */
export const PHYS_ROTATIONAL: TopicQuestion[] = [
  rot(25,
    'A tire 0.500 m in radius rotates at a constant rate of 200 rev/min. Find the acceleration of a small stone lodged in the tread of the tire (on its outer edge).',
    ['291 m/s²', '129 m/s²', '192 m/s²', '219 m/s²'], 3),
  rot(26,
    'A belt passes over a wheel of radius 25 cm. If a point on the belt has a speed of 5.0 m/s, how fast is the wheel turning?',
    ['10 rad/s', '30 rad/s', '20 rad/s', '40 rad/s'], 3),
  rot(27,
    'A turntable rotates with a constant 2.25 rad/s² angular acceleration. After 4.00 s it has rotated through an angle of 30.0 rad. What was the angular velocity of the wheel at the beginning of the 4.00-s interval?',
    ['3.00 rad/s', '2.00 rad/s', '1.00 rad/s', '4.00 rad/s'], 3),
  rot(28,
    'A pulley of 5.0-cm radius, on a motor, is turning at 30 rev/s and slows down uniformly to 20 rev/s in 2.0 s. Calculate the length of belt it winds in this time.',
    ['16 m', '14 m', '18 m', '12 m'], 3),
  rot(29,
    'A seed is on a turntable rotating at 33 1/3 rev/min, 6.0 cm from the rotation axis. What is the seed\u2019s acceleration?',
    ['73 cm/s²', '64 cm/s²', '55 cm/s²', '41 cm/s²'], 3),
];

/** Section: CIRCULAR MOTION — items 30–34. */
export const PHYS_CIRCULAR: TopicQuestion[] = [
  cir(30,
    'The radius of the earth\u2019s very nearly circular orbit around the sun is 1.5 × 10¹¹ m. Find the magnitude of the earth\u2019s centripetal acceleration as it travels around the sun. Assume a year of 365 days.',
    ['0.00595 m/s²', '0.00495 m/s²', '0.00695 m/s²', '0.00795 m/s²'], 3),
  cir(31,
    'A train slows down as it rounds a sharp horizontal turn, going from 90.0 km/h to 50.0 km/h in the 15.0 s it takes to round the bend. The radius of the curve is 150 m. Compute the acceleration at the moment the train speed reaches 50.0 km/h. Assume the train continues to slow down at this time at the same rate. Hint: $a = \\sqrt{a_t^2 + a_r^2}$',
    ['1.48 m/s²', '1.84 m/s²', '4.18 m/s²', '4.81 m/s²'], 3),
  cir(32,
    'As shown in the figure, a ball B is fastened to one end of a 24-cm string, and the other end is held fixed at point Q. The ball whirls in the horizontal circle shown. Find the speed of the ball in its circular path if the string makes an angle of 30° to the vertical.',
    ['0.76 m/s', '0.61 m/s', '0.54 m/s', '0.82 m/s'], 3),
  cir(33,
    'What is the centripetal acceleration (m/s²) of the Earth as it moves in its orbit around the Sun?',
    ['5.39×10⁻³', '5.93×10⁻³', '3.95×10⁻³', '3.59×10⁻³'], 3),
  cir(34,
    'The athlete rotates a 1.00-kg discus along a circular path of radius 1.06 m. The maximum speed of the discus is 20.0 m/s. Determine the magnitude of the maximum radial acceleration of the discus.',
    ['477', '177', '377', '277'], 4),
];

/** Section: NEWTON'S 2ND LAW OF MOTION — items 35–54. */
export const PHYS_NEWTON: TopicQuestion[] = [
  nl(35,
    'An airplane has a mass of 3.1 × 10⁴ kg and takes off under the influence of a constant net force of 3.7 × 10⁴ N. What is the net force that acts on the plane\u2019s 78-kg pilot?',
    ['90 N', '97 N', '93 N', '99 N'], 4),
  nl(36,
    'A person in a kayak starts paddling, and it accelerates from 0 to 0.60 m/s in a distance of 0.41 m. If the combined mass of the person and the kayak is 73 kg, what is the magnitude of the net force acting on the kayak?',
    ['23 N', '32 N', '42 N', '53 N'], 4),
  nl(37,
    'A 1580-kg car is traveling with a speed of 15.0 m/s. What is the magnitude of the horizontal net force that is required to bring the car to a halt in a distance of 50.0 m?',
    ['3650 N', '3065 N', '3605 N', '3560 N'], 4),
  nl(38,
    'A 205-kg log is pulled up a ramp by means of a rope that is parallel to the surface of the ramp. The ramp is inclined at 30.0° with respect to the horizontal. The coefficient of kinetic friction between the log and the ramp is 0.900, and the log has an acceleration of magnitude 0.800 m/s². Find the tension in the rope.',
    ['3720 N', '3270 N', '2370 N', '2730 N'], 4),
  nl(39,
    'A person whose weight is 5.20 × 10² N is being pulled up vertically by a rope from the bottom of a cave that is 35.1 m deep. The maximum tension that the rope can withstand without breaking is 569 N. What is the shortest time, starting from rest, in which the person can be brought out of the cave?',
    ['7.7 s', '8.7 s', '9.7 s', '10.7 s'], 4),
  nl(40,
    'A speed skater goes around a turn that has a radius of 31 m. The skater has a speed of 14 m/s and experiences a centripetal force of 460 N. What is the mass of the skater?',
    ['70 kg', '76 kg', '73 kg', '79 kg'], 4),
  nl(41,
    'Two banked curves have the same radius. Curve A is banked at an angle of 13°, and curve B is banked at an angle of 19°. A car can travel around curve A without relying on friction at a speed of 18 m/s. At what speed can this car travel around curve B without relying on friction?',
    ['22 m/s', '11 m/s', '33 m/s', '44 m/s'], 4),
  nl(42,
    'A motorcycle has a constant speed of 25.0 m/s as it passes over the top of a hill whose radius of curvature is 126 m. The mass of the motorcycle and driver is 342 kg. Find the magnitudes of the normal force that acts on the cycle.',
    ['2.66 kN', '1.66 kN', '3.66 kN', '4.66 kN'], 4),
  nl(43,
    'A car is going 15 m/s is brought to rest in a distance of 2.0 m as it strikes a pile of dirt. How large an average force is exerted by seatbelts on a 90-kg passenger as the car is stopped?',
    ['5.1 kN', '4.1 kN', '3.1 kN', '6.1 kN'], 4),
  nl(44,
    'A hockey puck of mass 0.50 kg traveling at 10 m/s on a horizontal surface slows to 2.0 m/s over a distance of 80 m. Determine the magnitude of the frictional force acting on the puck.',
    ['-0.20 Newtons', '-0.10 Newtons', '-0.30 Newtons', '-0.40 Newtons'], 4),
  nl(45,
    'After an annual checkup, you leave your physician\u2019s office, where you weighed 683 N. You then get into an elevator that, conveniently, has a scale. Find the magnitude and direction of the elevator\u2019s acceleration if the scale reads 725 N.',
    ['0.360 m/s², downward', '0.360 m/s², upward', '0.603 m/s², upward', '0.603 m/s², downward'], 4),
  nl(46,
    'A ball on the end of a string is revolved at a uniform rate in a vertical circle of radius 72.0 cm. If its speed is 4.00 m/s and its mass is 0.300 kg, calculate the tension in the string when the ball is at the top of its path.',
    ['3.73 N, downward', '3.73 N, upward', '3.37 N, upward', '3.37 N, downward'], 4),
  nl(47,
    'How large must the coefficient of static friction be between the tires and the road if a car is to round a level curve at of radius 85 m at a speed of 95 km/h?',
    ['0.94', '0.84', '0.74', '0.64'], 5),
  nl(48,
    'A stone with mass 0.80 kg is attached to one end of a string 0.90 m long. The string will break if its tension exceeds 60.0 N. The stone is whirled in a horizontal circle on a frictionless tabletop; the other end of the string remains fixed. Find the maximum speed the stone can attain without the string breaking.',
    ['8.2 m/s', '7.3 m/s', '6.5 m/s', '9.4 m/s'], 5),
  nl(49,
    'If the coefficient of kinetic friction between tires and dry pavement is 0.80, what is the shortest distance in which you can stop a car by locking the brakes when the car is traveling at 28.7 m/s?',
    ['52.5 m', '55.2 m', '25.5 m', '42.5 m'], 5),
  nl(50,
    'An 8000-kg engine pulls a 40000-kg train along a level track and gives it an acceleration a₁ = 1.20 m/s². What acceleration (a₂) would the engine give to a 16000-kg train?',
    ['3.1 m/s²', '4.3 m/s²', '1.2 m/s²', '2.4 m/s²'], 5),
  nl(51,
    'A 1200-kg car is coasting down a 30° hill as shown in the figure. At a time when the car\u2019s speed is 12 m/s, the driver applies the brakes. What constant force F (parallel to the road) must result if the car is to stop after traveling 100 m?',
    ['6.7 kN', '8.1 kN', '7.3 kN', '9.5 kN'], 5),
  nl(52,
    'In the figure, elevator cabs A and B are connected by a short cable and can be pulled upward or lowered by the cable above cab A. Cab A has mass 1700 kg; cab B has mass 1300 kg. A 12.0 kg box of catnip lies on the floor of cab A. The tension in the cable connecting the cabs is 1.91 × 10⁴ N. What is the magnitude of the normal force on the box from the floor?',
    ['176 N', '167 N', '267 N', '276 N'], 5),
  nl(53,
    'Assume the three blocks portrayed in the figure move on a frictionless surface and a 42-N force acts as shown on the 3.0-kg block. Determine the force exerted by the 1.0-kg block on the 2.0-kg block.',
    ['18 N horizontal and to the right', '18 N horizontal and to the left', '14 N horizontal and to the left', '14 N horizontal and to the right'], 5),
  nl(54,
    'The figure shows a conical pendulum, in which the bob (the small object at the lower end of the cord) moves in a horizontal circle at constant speed. (The cord sweeps out a cone as the bob rotates.) The bob has a mass of 0.040 kg, the string has length L = 0.90 m and negligible mass, and the bob follows a circular path of circumference 0.94 m. What is the period of the motion?',
    ['1.89 sec', '0.89 sec', '2.89 sec', '3.89 sec'], 6),
];

/** Section: NEWTON'S LAW OF UNIVERSAL GRAVITATION — items 55–64. */
export const PHYS_GRAVITATION: TopicQuestion[] = [
  grav(55,
    'Mars has a mass of 6.46 × 10²³ kg and a radius of 3.39 × 10⁶ m. What is the acceleration due to gravity on Mars?',
    ['3.57 m/s²', '3.75 m/s²', '5.37 m/s²', '5.73 m/s²'], 6),
  grav(56,
    'On earth, two parts of a space probe weigh 11 000 N and 3400 N. These parts are separated by a center-to-center distance of 12 m and may be treated as uniform spherical objects. Find the magnitude of the gravitational force that each part exerts on the other out in space, far from any other objects.',
    ['1.8 × 10⁻⁷ N', '1.8 × 10⁻⁸ N', '1.8 × 10⁻⁶ N', '1.8 × 10⁻⁹ N'], 6),
  grav(57,
    'A spacecraft is on a journey to the moon. At what point, as measured from the center of the earth, does the gravitational force exerted on the spacecraft by the earth balance that exerted by the moon? This point lies on a line between the centers of the earth and the moon. The distance between the earth and the moon is 3.85 × 10⁸ m, and the mass of the earth is 81.4 times as great as that of the moon.',
    ['3.47×10⁸ m', '4.37×10⁸ m', '4.37×10⁷ m', '3.47×10⁷ m'], 6),
  grav(58,
    'A satellite is in a circular orbit around an unknown planet. The satellite has a speed of 1.70 × 10⁴ m/s, and the radius of the orbit is 5.25 × 10⁶ m. A second satellite also has a circular orbit around this same planet. The orbit of this second satellite has a radius of 8.60 × 10⁶ m. What is the orbital speed (m/s) of the second satellite?',
    ['1.33×10³', '1.44×10⁴', '1.33×10⁴', '1.44×10³'], 6),
  grav(59,
    'The radius of the Earth is about 6370 km, while that of Mars is about 3440 km. If an object weighs 200 N on Earth, what would it weigh on Mars? The mass of Mars is 0.11 that of Earth.',
    ['85 N', '65 N', '75 N', '95 N'], 6),
  grav(60,
    'What is the height above the earth\u2019s surface at which all synchronous satellites (regardless of mass) must be placed in orbit?',
    ['3.59 × 10⁷ m', '3.95 × 10⁷ m', '5.39 × 10⁷ m', '5.93 × 10⁷ m'], 6),
  grav(61,
    'Two satellites are in circular orbits around a planet that has radius 9.00 × 10⁶ m. One satellite has mass 68.0 kg, orbital radius 7.00 × 10⁷ m, and orbital speed 4800 m/s. The second satellite has mass 84.0 kg and orbital radius 3.00 × 10⁷ m. What is the orbital speed of this second satellite?',
    ['6330 m/s', '5330 m/s', '8330 m/s', '7330 m/s'], 6),
  grav(62,
    'At what altitude above Earth\u2019s surface would the gravitational acceleration be 4.9 m/s²?',
    ['4.6 × 10⁶ m', '3.6 × 10⁶ m', '1.6 × 10⁶ m', '2.6 × 10⁶ m'], 6),
  grav(63,
    'The radius of the Earth is about 6370 km, while that of Mars is about 3440 km. If an object weighs 200 N on Earth, what would be the acceleration due to gravity on Mars? The mass of Mars is 0.11 that of Earth.',
    ['2.7 m/s²', '3.7 m/s²', '1.7 m/s²', '4.7 m/s²'], 6),
  grav(64,
    'A curve of radius 30 m is to be banked so that a car may make the turn at a speed of 13 m/s without depending on friction. What must be the slope of the curve (the banking angle)?',
    ['25°', '30°', '15°', '20°'], 6),
];

/** Section: WORK, ENERGY, AND POWER — items 65–84. */
export const PHYS_WORK_ENERGY: TopicQuestion[] = [
  wep(65,
    'During a tug-of-war, team A pulls on team B by applying a force of 1100 N to the rope between them. The rope remains parallel to the ground. How much work does team A do if they pull team B toward them a distance of 2.0 m?',
    ['1.1 kJ', '3.3 kJ', '4.4 kJ', '2.2 kJ'], 7),
  wep(66,
    'A person pulls a toboggan for a distance of 35.0 m along the snow with a rope directed 25.0° above the snow. The tension in the rope is 94.0 N. How much work is done on the toboggan by the tension force?',
    ['1.98 kJ', '3.98 kJ', '2.98 kJ', '4.98 kJ'], 7),
  wep(67,
    'A golf club strikes a 0.045-kg golf ball in order to launch it from the tee. For simplicity, assume that the average net force applied to the ball acts parallel to the ball\u2019s motion, has a magnitude of 6800 N, and is in contact with the ball for a distance of 0.010 m. With what speed does the ball leave the club?',
    ['44 m/s', '55 m/s', '33 m/s', '22 m/s'], 7),
  wep(68,
    'A 16-kg sled is being pulled along the horizontal snow-covered ground by a horizontal force of 24 N. Starting from rest, the sled attains a speed of 2.0 m/s in 8.0 m. Find the coefficient of kinetic friction between the runners of the sled and the snow.',
    ['0.13', '0.10', '0.19', '0.25'], 7),
  wep(69,
    'A 35-kg girl is bouncing on a trampoline. During a certain interval after she leaves the surface of the trampoline, her kinetic energy decreases to 210 J from 440 J. How high does she rise during this interval? Neglect air resistance.',
    ['0.76 m', '0.67 m', '0.45 m', '0.54 m'], 7),
  wep(70,
    'A force of 5.0 N acts on a 15 kg body initially at rest. Compute the instantaneous power due to the force at the end of the third second. Hint: Power = Work/time',
    ['6 Watts', '7 Watts', '5 Watts', '8 Watts'], 7),
  wep(71,
    'A person is making homemade ice cream. She exerts a force of magnitude 22 N on the free end of the crank handle on the ice-cream maker, and this end moves on a circular path of radius 0.28 m. The force is always applied parallel to the motion of the handle. If the handle is turned once every 1.3 s, what is the average power being expended?',
    ['50 Watts', '30 Watts', '10 Watt', '70 Watts'], 7),
  wep(72,
    'In preparation for shooting a ball in a pinball machine, a spring (k = 675 N/m) is compressed by 0.0650 m relative to its unstained length. The ball (m = 0.0585 kg) is at rest against the spring at point A. When the spring is released, the ball slides (without rolling). It leaves the spring and arrives at point B, which is 0.300 m higher than point A. Ignore friction, and find the ball\u2019s speed at point B.',
    ['5.55 m/s', '7.55 m/s', '6.55 m/s', '8.55 m/s'], 7),
  wep(73,
    'A 400-g block with an initial speed of 80 cm/s slides along a horizontal tabletop against a friction force of 0.70 N. How far will it slide before stopping?',
    ['0.12 m', '0.18 m', '0.25 m', '0.29 m'], 7),
  wep(74,
    'An advertisement claims that a certain 1200-kg car can accelerate from rest to a speed of 25 m/s in a time of 8.0 s. What average power must the motor produce to cause this acceleration? Ignore friction losses.',
    ['63 hp', '66 hp', '33 hp', '36 hp'], 7),
  wep(75,
    'A vertical spring with a spring constant of 450 N/m is mounted on the floor. From directly above the spring, which is unstained, a 0.30-kg block is dropped from rest. It collides with and sticks to the spring, which is compressed by 2.5 cm in bringing the block to a momentary halt. Assuming air resistance is negligible, from what height (in cm) above the compressed spring was the block dropped?',
    ['3.8', '1.8', '2.8', '4.8'], 7),
  wep(76,
    'A 65 kg trampoline artist jumps vertically upward from the top of a platform with a speed of 5.0 m/s. How fast is he going as he lands on the trampoline, 3.0 m below?',
    ['9.2 m/s', '8.1 m/s', '7.3 m/s', '6.4 m/s'], 7),
  wep(77,
    'In the figure, a block of mass m = 2.5 kg slides head on into a spring of spring constant k = 320 N/m. When the block stops, it has compressed the spring by 7.5 cm. The coefficient of kinetic friction between block and floor is 0.25. While the block is in contact with the spring and being brought to rest, what are (a) the work done by the spring force and (b) the increase in thermal energy of the block-floor system? (c) What is the block\u2019s speed just as it reaches the spring?',
    ['2 m/s', '1 m/s', '3 m/s', '4 m/s'], 8),
  wep(78,
    'How many joules of energy does a 100-watt light bulb use per hour? How fast would a 70-kg person have to run to have that amount of kinetic energy?',
    ['630 kJ; 130 m/s', '360 kJ; 100 m/s', '360 kJ; 130 m/s', '630 kJ; 100 m/s'], 8),
  wep(79,
    'A force of 520 N keeps a certain spring stretched a distance of 0.200 m. What is the potential energy of the spring when it is stretched 0.200 m?',
    ['42.0 J', '52.0 J', '32.0 J', '22.0 J'], 8),
  wep(80,
    'A ball at the end of a 180-cm long string swings as a pendulum as shown in Fig. 6-5. The ball\u2019s speed is 400 cm/s as it passes through its lowest position. To what height h above this position will it rise before stopping? Hint: $KE_1 + PE_1 = KE_2 + PE_2$',
    ['0.816 m', '0.746 m', '0.651 m', '0.504 m'], 8),
  wep(81,
    'A car moving at 20 m/s along a horizontal road has its brakes suddenly applied and eventually comes to rest. What is the shortest distance in which it can be stopped if the friction coefficient between tires and road is 0.90? Assume that all four wheels brake identically. If the brakes don\u2019t lock the car stops via static friction.',
    ['20 m', '27 m', '23 m', '29 m'], 8),
  wep(82,
    'A 2,100-kg pile driver is used to drive a steel I-beam into the ground. The pile driver falls 5.00 m before coming into contact with the top of the beam, and it drives the beam 12.0 cm farther into the ground before coming to rest. Using energy considerations, calculate the average force the beam exerts on the pile driver while the pile driver is brought to rest.',
    ['892 kN', '835 kN', '878 kN', '814 kN'], 8),
  wep(83,
    'In unloading grain from the hold of a ship, an elevator lifts the grain through a distance of 12 m. Grain is discharged at the top of the elevator at a rate of 2.0 kg each second, and the discharge speed of each grain particle is 3.0 m/s. Find the minimum-horsepower motor that can elevate grain in this way.',
    ['0.54 kW', '0.44 kW', '0.34 kW', '0.24 kW'], 8),
  wep(84,
    'An elevator car has a mass of 1 600 kg and is carrying passengers having a combined mass of 200 kg. A constant friction force of 4 000 N retards its motion. How much power must a motor deliver to lift the elevator car and its passengers at a constant speed of 3.00 m/s?',
    ['9.46 × 10⁴ W', '6.49 × 10⁴ W', '6.94 × 10⁴ W', '9.64 × 10⁴ W'], 8),
];

/** Section: IMPULSE AND MOMENTUM — items 85–90. */
export const PHYS_MOMENTUM: TopicQuestion[] = [
  mom(85,
    'An 8.0-g bullet is fired horizontally into a 9.00-kg cube of wood, which is at rest, and sticks in it. The cube is free to move and has a speed of 40 cm/s after impact. Find the initial velocity of the bullet.',
    ['0.36 km/s', '0.59 km/s', '0.67 km/s', '0.45 km/s'], 8),
  mom(86,
    'Typically, a tennis ball hit during a serve travels away at about 51 m/s. If the ball is at rest mid-air when struck, and it has a mass of 0.058 kg, what is the change in its momentum on leaving the racket?',
    ['1.0 kg m/s', '2.0 kg m/s', '3.0 kg m/s', '4.0 kg m/s'], 9),
  mom(87,
    'A 23 g bullet traveling at 230 m/s penetrates a 2.0 kg block of wood and emerges cleanly at 170 m/s. If the block is stationary on a frictionless surface when hit, how fast does it move after the bullet emerges?',
    ['0.88 m/s', '0.95 m/s', '0.78 m/s', '0.69 m/s'], 9),
  mom(88,
    'On a frictionless, horizontal air table, puck A (with mass 0.250 kg) is moving toward puck B (with mass 0.350 kg), which is initially at rest. After the collision, puck A has a velocity of 0.120 m/s to the left, and puck B has a velocity of 0.650 m/s to the right. What was the speed of puck A before the collision?',
    ['0.970 m/s', '0.709 m/s', '0.790 m/s', '0.907 m/s'], 9),
  mom(89,
    'A 15-g bullet moving at 300 m/s passes through a 2.0 cm thick sheet of foam plastic and emerges with a speed of 90 m/s. What average force impeded its motion through the plastic? Hint: Use Impulse-Moment Theorem',
    ['-1.4×10⁴ N', '-2.3×10⁴ N', '-3.1×10⁴ N', '4.2×10⁴ N'], 9),
  mom(90,
    'A 2.0-kg brick is moving at a speed of 6.0 m/s. How large a force F is needed to stop the brick in a time of 7.0 × 10⁻⁴ s?',
    ['-7.1 × 10³ N', '-1.7 × 10³ N', '-1.7 × 10⁴ N', '-7.1 × 10⁴ N'], 9),
];
