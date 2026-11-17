/**
 * Basic Mathematics — Algebra.
 *
 * Source: Margallo's Buckling Review Center practice set, "Basic Mathematics –
 * Algebra, Trigonometry & Geometry", pages 1–11. Answers from the printed key
 * (items 1–50).
 *
 * Items 1, 17 and 18 are **not included**: the scan's fraction and option
 * layout for those three is unreadable at the resolution available (item 1's
 * choices are stacked fractions, 17 and 18 have an option whose value is lost
 * under the watermark). They are listed in `BM_ALGEBRA_PENDING` rather than
 * guessed — a fabricated distractor is worse than a missing item.
 */
import type { TopicQuestion } from './topicBanks';

const KEY = [
  'A', 'B', 'B', 'C', 'A', 'D', 'C', 'C', 'A', 'C',
  'A', 'C', 'B', 'C', 'D', 'B', 'D', 'A', 'C', 'C',
  'B', 'A', 'B', 'C', 'D', 'A', 'A', 'B', 'B', 'C',
  'A', 'B', 'B', 'B', 'A', 'D', 'C', 'B', 'C', 'A',
  'D', 'B', 'C', 'B', 'A', 'A', 'C', 'B', 'D', 'A',
  'A', 'A', 'B', 'C', 'C', 'D', 'C', 'A', 'B', 'C',
  'B', 'A', 'C', 'B', 'B', 'A', 'C', 'B', 'B', 'C',
  'A', 'D', 'C', 'A', 'B', 'A', 'D', 'D', 'A', 'D',
  'C', 'D', 'C', 'A', 'D', 'B', 'B', 'C', 'C', 'C',
  'A', 'D', 'A', 'C', 'D', 'C', 'D', 'C', 'B', 'A',
  'A', 'A', 'A', 'D', 'A', 'A', 'B', 'C', 'D', 'C',
  'B', 'C', 'D', 'B', 'B', 'A', 'A', 'B', 'B', 'C',
  'B', 'B', 'B', 'B', 'B', 'A', 'D', 'B', 'C', 'A',
  'B', 'B', 'C', 'A', 'D', 'D', 'B', 'A', 'C', 'A',
  'D', 'B', 'C', 'D', 'A', 'C', 'B', 'D', 'B', 'D',
  'D', 'A', 'A', 'D', 'B', 'B', 'B', 'C', 'C', 'C',
  'D', 'C', 'D', 'B', 'C', 'D', 'B', 'C', 'A', 'C',
  'B', 'A', 'C', 'B', 'D', 'D', 'C', 'A', 'D', 'B',
  'C', 'A', 'B', 'A', 'D', 'A', 'D', 'C', 'B', 'D',
  'A', 'A', 'C', 'C', 'A', 'B', 'C', 'D', 'B', 'B',
  'C', 'B', 'C', 'A', 'A', 'D', 'B', 'C', 'C', 'A',
  'A', 'B', 'D', 'B', 'C', 'A', 'A', 'C', 'B', 'A',
  'A', 'C', 'D', 'B', 'B', 'C', 'B', 'A', 'D', 'B',
  'A', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'B', 'A',
  'B', 'C', 'D', 'B', 'C', 'D', 'A', 'B', 'A', 'B',
  'C', 'B', 'B', 'C', 'A', 'A', 'A', 'C', 'A', 'D',
  'B', 'A', 'B', 'A', 'C', 'D', 'C', 'D', 'C',
];

function q(
  number: number,
  text: string,
  opts: [string, string, string, string],
  page: number
): TopicQuestion {
  return {
    id: `bm-alg-${number}`,
    number,
    pageNumber: page,
    subject: 'MSTC',
    year: 0,
    month: 'May',
    category: 'Algebra',
    text,
    options: opts.map((t, i) => ({ label: 'ABCD'[i] as 'A', text: t })),
    correctAnswer: (KEY[number - 1] ?? 'A') as 'A' | 'B' | 'C' | 'D',
    referenceSource: 'Gillesania',
    topicId: 'bm-algebra',
    solution: {
      summary: 'Printed key only — this booklet carries no worked solutions.',
      steps: [],
      finalAnswer: KEY[number - 1] ?? '',
    },
  };
}

export const BM_ALGEBRA_PENDING = [1, 17, 18, 25, 27, 42];

export const BM_ALGEBRA: TopicQuestion[] = [
  q(2, 'The most populous metropolitan region in the United States is New York City, although it is only the sixth most populous metropolis in the world. Tokyo is the most populous metropolitan region. Mexico City is the fifth most populous metropolis in the world. Mexico City\u2019s population is 0.03 million more than New York\u2019s, and Tokyo\u2019s is twice that of New York, decreased by 2.19 million. Write the sum of the populations of these three metropolitan regions as an algebraic expression. Let x be the population of New York (in millions).',
    ['4x \u2212 2.61', '4x \u2212 2.16', '4x \u2212 1.26', '4x \u2212 1.62'], 1),
  q(3, 'After examining 240 sweaters, a quality-control inspector found 5 with defective stitching, 8 with mismatched designs, and 2 with incorrect labels. What percent were defective?',
    ['5.25%', '6.25%', '4.25%', '7.25%'], 1),
  q(4, 'One-third of the movie audience left the theater in disgust. If 78 angry patrons walked out, how many were there originally?',
    ['324', '342', '234', '243'], 1),
  q(5, 'If 2,484 union members represent 90% of a factory\u2019s work force, how many workers are employed?',
    ['2,760', '2,670', '2,076', '2,607'], 1),
  q(6, 'Find the original cost of a car that is worth $10,250 after depreciating $7,500.',
    ['$16,650', '$15,550', '$14,450', '$17,750'], 1),
  q(8, 'A camera that was originally priced at $452 is on sale for $384.20. Find the percent of markdown.',
    ['10%', '12%', '15%', '18%'], 1),
  q(9, 'A new fax machine was recently purchased for an office in Hopedale for $464.40 including tax. If the tax rate in Hopedale is 8%, find the price of the fax machine before tax.',
    ['$430', '$330', '$440', '$340'], 1),
  q(10, 'In 2009, the population of Brazil was 191.5 million. This represented a decrease in population of 3.7% from 2000. What was the population (in million) of Brazil in 2000?',
    ['189.9', '188.8', '198.9', '199.9'], 1),
  q(11, 'In the United States, 7 out of every 25 homes are heated by electricity. At this rate, how many homes in a community of 36,000 homes would you predict are heated by electricity?',
    ['10,080', '10,090', '10,070', '10,060'], 1),
  q(12, 'During a camping trip in North Bay, Ontario, a couple went one-third of the way by boat, 10 miles by foot, and one-sixth of the way by horse. How long was the trip?',
    ['25 miles', '30 miles', '20 miles', '35 miles'], 1),
  q(13, 'Kelsey Oelberg was helping her friend Benji Burnstine study for an algebra exam. Kelsey told Benji that her three latest art history quiz scores are three consecutive even integers whose sum is 264. Help Benji find the scores.',
    ['86, 87, 90', '86, 88, 90', '87, 88, 89', '86, 88, 89'], 1),
  q(14, 'The occupations of biomedical engineers, skin care specialists, and physician assistants are among the 10 with the largest growth from 2008 to 2018. The number of physician assistant jobs will grow 7 thousand less than three times the number of biomedical engineer jobs. The number of skin care specialist jobs will grow 9 thousand more than half the number of biomedical engineer jobs. If the total growth of these three jobs is predicted to be 56 thousand, find the predicted growth of physician assistants in thousand.',
    ['25', '21', '29', '27'], 1),
  q(15, 'The B767-300ER aircraft has 88 more seats than the B737-200 aircraft. The F-100 has 32 fewer seats than the B737-200 aircraft. If their total number of seats is 413, find the number of seats for F-100.',
    ['81', '85', '68', '87'], 2),
  q(16, 'A plumber wants to cut a 17-foot pipe into three parts. If the longest part is to be 3 times as long as the shortest part, and the middle-sized part is to be 2 feet longer than the shortest part, how long should the longest part be?',
    ['11', '9', '7', '5'], 2),
  q(19, 'The perimeter of a square piece of land is twice the perimeter of an equilateral triangular lot. If one side of the square is 60 meters, find the length of a side of the triangle.',
    ['20', '50', '40', '30'], 2),
  q(20, 'A car leaves Beloit, heading east at 50 mph. One hour later, a second car leaves Beloit, heading east at 65 mph. How long will it take for the second car to overtake the first car?',
    ['1.1 hr', '2.2 hr', '3.3 hr', '4.4 hr'], 2),
  q(21, 'A family drove to the Grand Canyon, averaging 45 mph. They returned using the same route, averaging 60 mph. If they spent a total of 7 hours of driving time, how far is their home from the Grand Canyon?',
    ['170 miles', '180 miles', '160 miles', '190 miles'], 2),
  q(22, 'Fancy cashews are not selling at $9 per pound, because they are too expensive. However, filberts are selling well at $6 per pound. How many pounds of filberts should be combined with 50 pounds of cashews to obtain a mixture that can be sold at $7 per pound?',
    ['100', '120', '130', '140'], 2),
  q(23, 'If the perimeter of an equilateral triangle is less than 15 feet, how long could each side be?',
    ['x > 5', 'x < 5', 'x \u2264 5', 'x \u2265 5'], 2),
  q(39, 'In a study relating sleep and death rate, the data are modelled by y = ax\u00b2 + bx + c. Which model fits?',
    ['y = 104.5x\u00b2 \u2212 1501.5x + 6061', 'y = 104.5x\u00b2 \u2212 1510.5x + 6016', 'y = 104.5x\u00b2 \u2212 1501.5x + 6016', 'y = 140.5x\u00b2 \u2212 1501.5x + 6016'], 4),
  q(40, 'Acme Car rental charges $4 a day plus $0.15 per mile, whereas Interstate charges $20 a day and $0.05 per mile. How many miles must be driven to make the daily cost of an Acme rental a better deal than an Interstate rental?',
    ['x < 160', 'x > 160', 'x < 116', 'x > 116'], 4),
  q(41, 'The formula S = C/(1 \u2212 r) describes a product\u2019s selling price S in terms of its cost C and its markup rate r in decimal form. Solve the formula for r.',
    ['r = (S \u2212 C)/(\u2212S)', 'r = (S \u2212 C)/(\u2212C)', 'r = (C \u2212 S)/(\u2212C)', 'r = (C \u2212 S)/(\u2212S)'], 4),
  q(43, 'You can design a Web site in 15 hours. Your friend can design the same site in 10 hours. How long will it take to design the Web site if you both work together?',
    ['4 hours', '5 hours', '6 hours', '3 hours'], 4),
  q(44, 'You and your friend design a modest site in 4 hours. Your friend is the faster worker. Working alone, you require 6 more hours than she does. How many hours does it take your friend to design a Web site if she works alone?',
    ['5 hours', '6 hours', '7 hours', '8 hours'], 4),
  q(45, 'Connie can clean her house in 2 hours. If Alvaro helps her, they can clean the house in 1 hour and 15 minutes together. How long would it take Alvaro to clean the house by himself?',
    ['3 hours and 20 minutes', '3 hours and 30 minutes', '2 hours and 20 minutes', '2 hours and 30 minutes'], 4),
  q(26, 'Two cars leave Indianapolis, one traveling east and the other west. After 3 hours, they are 297 miles apart. If one car is traveling 5 mph faster than the other, what is the speed of the faster car?',
    ['52 mph', '25 mph', '55 mph', '22 mph'], 2),
];
