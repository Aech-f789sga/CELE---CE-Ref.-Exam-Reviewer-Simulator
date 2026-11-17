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
  q(139, 'The tallest man-made structure in the world is a television transmitting tower located near Mayville, North Dakota. From a distance of 1 mile on level ground, its angle of elevation is $21^\\circ20\\prime24\\prime\\prime$. Determine its height to the nearest foot.',
    ['2036 ft', '2630 ft', '2063 ft', '2603 ft'], 12),
  q(140, 'To find the distance $d$ between two points $P$ and $Q$ on opposite shores of a lake, a surveyor locates a point $R$ that is 50.0 meters from $P$ such that $RP$ is perpendicular to $PQ$. Next, using a transit, the surveyor measures angle $PRQ$ as $72^\\circ40\\prime$. Find $d$.',
    ['160.2 m', '106.2 m', '126.0 m', '162.0 m'], 13),
  q(141, 'The elongation of the planet Venus is defined to be the angle determined by the sun, Earth, and Venus. Maximum elongation of Venus occurs when Earth is at its minimum distance $D_c$ from the sun and Venus is at its maximum distance $D_v$ from the sun. If $D_c=91{,}500{,}000$ mi and $D_v=68{,}000{,}000$ mi, approximate the maximum elongation of Venus. Assume that the orbit of Venus is circular.',
    ['$40^\\circ$', '$44^\\circ$', '$46^\\circ$', '$48^\\circ$'], 13),
  q(142, 'The Pentagon is the largest office building in the world in terms of ground area. The perimeter of the building has the shape of a regular pentagon with each side of length 921 feet. Find the area (square yard) enclosed by the perimeter of the building.',
    ['126,153', '162,153', '115,623', '151,623'], 13),
  q(143, 'A rectangular box has dimensions $8\\prime\\prime \\times 6\\prime\\prime \\times 4\\prime\\prime$. Approximate, to the nearest tenth of a degree, the angle formed by a diagonal of the base ($8\\prime\\prime \\times 6\\prime\\prime$) and the diagonal of the box.',
    ['$28.1^\\circ$', '$18.2^\\circ$', '$21.8^\\circ$', '$12.8^\\circ$'], 13),
  q(144, 'From a point $P$ on level ground, the angle of elevation of the top of a tower is $26^\\circ50\\prime$. From a point 25.0 meters closer to the tower and on the same line with $P$ and the base of the tower, the angle of elevation of the top is $53^\\circ30\\prime$. Approximate the height of the tower.',
    ['30.2 m', '10.2 m', '40.2 m', '20.2 m'], 13),
  q(145, 'From a point $A$ that is 8.20 meters above level ground, the angle of elevation of the top of a building is $31^\\circ20\\prime$ and the angle of depression of the base of the building is $12^\\circ50\\prime$. Approximate the height of the building.',
    ['30.1 m', '20.1 m', '40.1 m', '10.1 m'], 13),
  q(146, 'To determine the distance between two points $A$ and $B$, a surveyor chooses a point $C$ that is 375 yards from $A$ and 530 yards from $B$. If $\\angle BAC$ has measure $49^\\circ30\\prime$, approximate the distance between $A$ and $B$.',
    ['609 yards', '906 yards', '690 yards', '960 yards'], 13),
  q(147, 'A straight road makes an angle of $15^\\circ$ with the horizontal. When the angle of elevation of the sun is $57^\\circ$, a vertical pole at the side of the road casts a shadow 75 feet long directly down the road. Approximate the length of the pole.',
    ['91.24 ft', '92.14 ft', '94.21 ft', '90.21 ft'], 13),
  q(148, 'The angles of elevation of a balloon from two points $A$ and $B$ on level ground are $24^\\circ10\\prime$ and $47^\\circ40\\prime$, respectively. Points $A$ and $B$ are 8.4 miles apart, and the balloon is between the points, in the same vertical plane. Approximate the height of the balloon above the ground.',
    ['1.68 mi', '3.68 mi', '4.68 mi', '2.68 mi'], 13),
  q(149, 'A straight road makes an angle of $22^\\circ$ with the horizontal. From a certain point $P$ on the road, the angle of elevation of an airplane at point $A$ is $57^\\circ$. At the same instant, from another point $Q$, 100 meters farther up the road, the angle of elevation is $63^\\circ$. The points $P$, $Q$, and $A$ lie in the same vertical plane. Approximate the distance from $P$ to the airplane.',
    ['672.6 m', '627.6 m', '726.6 m', '762.6 m'], 13),
  q(150, 'A forest ranger at an observation point $A$, sights a fire in the direction N$27^\\circ10\\prime$E. Another ranger at an observation point $B$, 6.0 miles due east of $A$, sights the same fire at N$52^\\circ40\\prime$W. Approximate the distance from point $A$ to the fire.',
    ['2.7 mi', '1.7 mi', '4.7 mi', '3.7 mi'], 13),
  q(151, 'The leaning tower of Pisa was originally perpendicular to the ground and 179 feet tall. Because of sinking into the earth, it now leans at a certain angle $\\theta$ from the perpendicular. When the top of the tower is viewed from a point 150 feet from the center of its base, the angle of elevation is $53^\\circ$. Approximate the angle $\\theta$.',
    ['$1^\\circ$', '$3^\\circ$', '$7^\\circ$', '$5^\\circ$'], 13),
  q(152, 'The angle at one corner of a triangular plot of ground is $73^\\circ40\\prime$ and the sides that meet at this corner are 175 feet and 150 feet long. Approximate the length of the third side.',
    ['196 ft', '169 ft', '269 ft', '296 ft'], 13),
];
