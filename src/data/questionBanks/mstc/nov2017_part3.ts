import { Question } from '../../../types/exam';
import { solved, recall, opts } from './nov2017Helpers';

export const MSTC_NOV2017_PART3: Question[] = [
  // ── Item 39 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q39',
    number: 39,
    pageNumber: 558,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Probability — Expected Value',
    text: 'A raffle offers a first prize of P3,000, 5 second prizes of P1,000, and 20 third prizes of P100 each. If 10,000 tickets are sold at P1.5 each, find the expected winnings for a person buying 1 ticket.',
    options: opts('-0.50', '-0.60', '0.70', '0.40'),
    ...solved(39, 'A', '-0.50'),
  },

  // ── Item 40 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q40',
    number: 40,
    pageNumber: 558,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Probability — Mutually Exclusive Events',
    text: 'The probabilities that a student will receive an A, B, or C grades are 0.1, 0.4, 0.3 respectively. Find the probability that a student will receive at least C grade.',
    options: opts('0.50', '0.80', '0.70', '0.40'),
    ...solved(40, 'B', '0.80'),
  },

  // ── Item 41 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q41',
    number: 41,
    pageNumber: 558,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Probability — Combinations',
    text: 'Suppose a poker hand is dealt to an engineer at a casino and the engineer would like to know how many poker hands are possible when 5 cards are dealt from 52. How many different poker hands could the engineer be dealt?',
    options: opts('2598690', '31187520', '2598960', '311875200'),
    ...solved(41, 'A', '2598960'),
  },

  // ── Item 42 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q42',
    number: 42,
    pageNumber: 558,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Probability — Total Probability',
    text: 'A Ford has engines in three sizes. Of the Ford cars sold, 50% have the smallest engine, 40% have the medium engine, and 10% have the largest. Of the cars with the smallest engine, 15% fail an emissions test within two years of purchase. The failure figure for medium size engines is 10%, and the failure figure for the largest engines is 5%. What is the probability that this Ford will fail the emissions test within two years?',
    options: opts('0.12', '0.20', '0.18', '0.22'),
    ...solved(42, 'A', '0.12'),
  },

  // ── Item 43 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q43',
    number: 43,
    pageNumber: 558,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Probability — Simple Events',
    text: "Throughout history many people have contributed to the development of Mathematics. These mathematicians include Pythagoras, Hyptia, Euclid, Euler, Einstein, Fibonacci, Agnesia and Pascal. What is the probability that a mathematician's name selected at random from those listed will start with either the letter E or the letter A?",
    options: opts('1.3', '1.2', '0.5', '0.2'),
    ...solved(43, 'C', '0.5'),
  },

  // ── Item 44 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q44',
    number: 44,
    pageNumber: 558,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Statistics — Normal Curves',
    text: 'Which of the following is true?\nI. All histograms are single peaked?\nII. All bell-shaped curves are normal curves and symmetrical\nIII. All normal curves are bell shaped and symmetrical',
    options: opts('I only', 'II only', 'III only', 'I and II only'),
    ...recall(
      'C',
      'III only',
      'The booklet prints no working for this item. Statement I fails because a histogram may be bimodal; statement II fails because a bell-shaped curve is not necessarily normal (the total area need not be 1), while every normal curve is bell-shaped and symmetric about its mean.',
    ),
  },

  // ── Item 45 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q45',
    number: 45,
    pageNumber: 559,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Engineering Economy — Rate of Return',
    text: 'A fixed capital investment of P10,000,000 is required for a proposed manufacturing plant and an estimated working capital of P2,000,000. Annual depreciation is estimated to be 10% of the fixed capital investment. Determine the rate of return on the total investment if the annual profit is P2,500,000.',
    options: opts('21.36%', '21.87%', '20.83%', '22.98%'),
    ...solved(45, 'C', '20.83%'),
  },

  // ── Item 46 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q46',
    number: 46,
    pageNumber: 559,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Engineering Economy — Present Worth',
    text: 'Slick Oil Company is considering the purchase of a new machine that will last 5 years and cost P50,000, maintenance will cost P6,000 the first year, decreasing by P1,000 each year to P2,000 the fifth year. If the interest rate is 8% per year, compounded annually, how much money should the company set aside for this machine?\nHint:\n$(A/P, 8\\%, 5) = 0.25046$\n$(A/G, 8\\%, 5) = 1.8465$',
    options: opts('P63,586.49', 'P65,683.49', 'P66,583.49', 'P66,349.86'),
    ...solved(
      46,
      'C',
      'P66,583.49',
      'The booklet\'s own working totals P66,583.84, while the choice printed as C is P66,583.49 — the digits 8 and 4 are transposed in one of the two places. The key is C and the four choices differ by far more than the 35-centavo gap, so the item is still unambiguous.',
    ),
  },

  // ── Item 47 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q47',
    number: 47,
    pageNumber: 559,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Engineering Economy — Service Life',
    text: 'How long must a temporary warehouse last to be a desirable investment if it costs Php1.6M to build, has annual maintenance and operating costs of Php36,000, provides storage space valued at Php360,000 per year, and if the company MARR is 10%?',
    options: opts('20', '15', '10', '36'),
    ...solved(47, 'B', '15'),
  },

  // ── Item 48 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q48',
    number: 48,
    pageNumber: 559,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Engineering Economy — Annual Cost',
    text: 'Talisay City is considering a new P5M street cleaner. The new machine will operate at a savings of P60,000 per day compared to the present equipment. Assume the MARR is 12%, and the machine life is 10 years with zero resale value at the time. How many days per year must the machine be used to justify the investment.',
    options: opts('10 days', '15 days', '12 days', '13 days'),
    ...solved(48, 'B', '15 days'),
  },

  // ── Item 49 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q49',
    number: 49,
    pageNumber: 559,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Physics — Free Fall',
    text: 'A ball is thrown downward from the top of a 180-foot building with an initial velocity of 20 feet per second. The height of the ball $h$ after $t$ seconds is given by the equation $h = -16t^2 - 20t + 180$. How long after the ball is thrown will it strike the ground? Round the result to the nearest tenth of a second.',
    options: opts('2.4 s', '4.9 s', '3.2 s', '2.8 s'),
    ...solved(49, 'D', '2.8 s'),
  },

  // ── Item 50 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q50',
    number: 50,
    pageNumber: 559,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Physics — Kinematics',
    text: 'The motion of a particle starting at rest is given by the function $s = \\tfrac{1}{2}t^3$, where $t$ is in seconds and $s$ is in meters. What is the velocity after 2 seconds?',
    options: opts('4', '5', '6', '7'),
    ...solved(50, 'C', '6'),
  },

  // ── Item 51 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q51',
    number: 51,
    pageNumber: 560,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Physics — Uniform Acceleration',
    text: 'How long will it take for a vehicle to accelerate from 80 kph to 110 kph if it is capable of accelerating at 1.6 m/s²?',
    options: opts('4.8 s', '3.4 s', '6.3 s', '5.2 s'),
    ...solved(51, 'D', '5.2 s'),
  },

  // ── Item 52 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q52',
    number: 52,
    pageNumber: 560,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Physics — Apparent Weight',
    text: 'A 65-kg woman descends in an elevator that briefly accelerates at 0.20g downward. She stands on a scale that reads in kg. What does the scale read when the elevator descends at a constant speed of 2.0 m/s?',
    options: opts('65 kg', '52 kg', '55 kg', '78 kg'),
    ...solved(52, 'A', '65 kg'),
  },

  // ── Item 53 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q53',
    number: 53,
    pageNumber: 560,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Physics — Circular Motion',
    text: 'A propeller with a radius of 1.9 m revolves 400 rpm. Find the velocity in m/s of a point on the tip of the propeller.',
    options: opts('96.3', '62.4', '47.8', '79.6'),
    ...solved(53, 'D', '79.6'),
  },

  // ── Item 54 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q54',
    number: 54,
    pageNumber: 560,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Physics — Banked Curve Friction',
    text: 'How large must the coefficient of static friction be between the tires and the pavement if the vehicle can round a level curve of radius 85 m at a speed of 95 kph?',
    options: opts('0.785', '0.875', '0.625', '0.835'),
    ...solved(54, 'D', '0.835'),
  },

  // ── Item 55 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q55',
    number: 55,
    pageNumber: 560,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Physics — Energy Conservation',
    text: 'A 500-N object was dropped from a height of 1.3 m to a spring with k = 20 N/mm. What is the velocity of the object when the spring deflected 100 mm?',
    options: opts('4.45 m/s', '5.05 m/s', '4.85 m/s', '4.65 m/s'),
    ...solved(55, 'C', '4.85 m/s'),
  },

  // ── Item 56 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q56',
    number: 56,
    pageNumber: 560,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Map Scale',
    text: 'The scale of a certain map is 1:x. A lot having an area of 640 square meters is represented by an area of 25.6 cm² on the map. What is the value of x?',
    options: opts('25', '50', '500', '100'),
    ...solved(56, 'C', '500'),
  },

  // ── Item 57 ────────────────────────────────────────────────────────────────
  {
    id: 'mstc-nov2017-q57',
    number: 57,
    pageNumber: 560,
    subject: 'MSTC',
    year: 2017,
    month: 'November',
    category: 'Surveying — Photo Scale',
    text: 'A vertical photograph was exposed with a 6-in. focal length camera at a flying height of 10,000 ft above datum. What is the photo scale at point "A" if its elevation on the ground is 2500 ft above datum?',
    options: opts('1:15,000', '1:10,000', '1:20,000', '1:30,000'),
    ...solved(57, 'A', '1:15,000'),
  },
];
