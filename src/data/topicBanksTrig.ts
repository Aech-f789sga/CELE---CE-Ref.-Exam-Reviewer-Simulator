/**
 * Basic Mathematics — Trigonometry.
 *
 * Source: Margallo's Buckling Review Center practice set, "Basic Mathematics –
 * Algebra, Trigonometry & Geometry", pages 12–16, items 126–189. Answers come
 * from the same printed key as Algebra, via `basicMathItems`.
 *
 * Math is LaTeX (`$...$`); ExamEngine typesets text and choices through
 * MathView/KaTeX. Degrees are written `$56^\circ$` rather than a bare degree
 * glyph so the superscript survives MathView's sanitiser intact.
 */
import type { TopicQuestion } from './topicBanks';
import { makeBmItem } from './basicMathItems';

const q = makeBmItem('bm-trig', 'Trigonometry', 'bm-trig');

export const BM_TRIG: TopicQuestion[] = [
  q(126, 'A bicycle with 20-in diameter wheels is traveling down a road at 15 mi/h. Find the angular velocity of the wheel in revolutions per minute.',
    ['252.1', '453.7', '752.9', '950.4'], 12),
  q(127, 'A swimming pool is 20 meters long and 12 meters wide. The bottom of the pool is slanted so that the water depth is 1.3 meters at the shallow end and 4 meters at the deep end. Find the angle of depression (in degrees) of the bottom of the pool.',
    ['6.6', '5.5', '4.4', '7.7'], 12),
  q(128, 'The distance between two points $A$ and $B$ on Earth is measured along a circle having center $C$ at the center of Earth and radius equal to the distance from $C$ to the surface. If the diameter of Earth is approximately 8000 miles, approximate the distance between $A$ and $B$ if angle $ACB$ has $1^\\circ$:',
    ['68.8 mi', '69.8 mi', '86.9 mi', '89.6 mi'], 12),
  q(129, 'A hexagon is inscribed in a circle. If the difference between the area of the circle and the area of the hexagon is $24\\ \\mathrm{m^2}$, approximate the radius $r$ of the circle.',
    ['5.65 m', '4.65 m', '6.65 m', '7.65 m'], 12),
  q(130, 'A rectangular window measures 54 inches by 24 inches. There is a 17-inch wiper blade attached by a 5-inch arm at the center of the base of the window. If the arm rotates $120^\\circ$, approximate the percentage of the window\u2019s area that is wiped by the blade.',
    ['37.1%', '31.7%', '13.7%', '17.3%'], 12),
  q(131, 'A simple model of the core of a tornado is a right circular cylinder that rotates about its axis. If a tornado has a core diameter of 200 feet and maximum wind speed of 180 mi/hr (or 264 ft/sec) at the perimeter of the core, approximate the number of revolutions the core makes each minute.',
    ['22.5', '25.2', '32.5', '35.2'], 12),
  q(132, 'Earth rotates about its axis once every 23 hours, 56 minutes, and 4 seconds. Approximate the number of radians Earth rotates in one second.',
    ['$6.3\\times10^{-5}$', '$7.3\\times10^{-5}$', '$5.3\\times10^{-5}$', '$4.3\\times10^{-5}$'], 12),
  q(133, 'The drive motor of a particular CD player is controlled to rotate at a speed of 200 rpm when reading a track 5.7 centimeters from the center of the CD. The speed of the drive motor must vary so that the reading of the data occurs at a constant rate. Find the angular speed (in radians per minute) of the drive motor when it is reading a track 5.7 centimeters from the center of the CD.',
    ['$100\\pi$', '$300\\pi$', '$400\\pi$', '$200\\pi$'], 12),
  q(134, 'A typical tire for a compact car is 22 inches in diameter. If the car is traveling at a speed of 60 mi/hr, find the number of revolutions the tire makes per minute.',
    ['917', '971', '719', '791'], 12),
  q(135, 'The geographic and magnetic north poles have different locations. Currently, the magnetic north pole is drifting westward through 0.0017 radian per year, where the angle of drift has its vertex at the center of Earth. If this movement continues, approximately how many years will it take for the magnetic north pole to drift a total of $5^\\circ$?',
    ['53.1 yrs', '31.5 yr', '35.1 yr', '51.3 yrs'], 12),
  q(136, 'A person flying a kite holds the string 4 feet above ground level. The string of the kite is taut and makes an angle of $60^\\circ$ with the horizontal. Approximate the height of the kite above level ground if 500 feet of string is paid out.',
    ['473 ft', '347 ft', '374 ft', '437 ft'], 12),
  q(137, 'An airplane takes off at a $10^\\circ$ angle and travels at the rate of 250 ft/sec. Approximately how long does it take the airplane to reach an altitude of 15,000 feet?',
    ['5.67 mins', '5.76 mins', '6.75 mins', '6.57 mins'], 12),
  q(138, 'A builder wishes to construct a ramp 24 feet long that rises to a height of 5.0 feet above level ground. Approximate the angle that the ramp should make with the horizontal.',
    ['$12^\\circ$', '$14^\\circ$', '$16^\\circ$', '$18^\\circ$'], 12),
];
