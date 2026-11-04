import { Question } from '../../../types/exam';
import { solved } from './nov2024Helpers';

export const MSTC_NOV2024_PART2: Question[] = [
  // Item 13
  {
    id: 'mstc-nov2024-q13',
    number: 13,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Mathematics - Linear Interpolation / Pattern Recognition',
    text: 'The table below shows the shoe size conversions between US and EU measurements. Based on the data, what is the equivalent EU shoe size for a US size 48?\n\n| Measurement System | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n| **US Shoe Size** | 42 | 44 | 46 | 52 | 54 | 56 | 58 |\n| **EU Shoe Size** | 107 | 112 | 117 | 132 | 137 | 142 | 148 |',
    options: [
      { label: 'A', text: '124' },
      { label: 'B', text: '122' },
      { label: 'C', text: '120' },
      { label: 'D', text: '127' },
    ],
    ...solved(13, 'B', '122 (Option B)'),
  },

  // Item 14
  {
    id: 'mstc-nov2024-q14',
    number: 14,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Trigonometry - Angle of Depression',
    text: 'From the top of a control tower which is 150 m tall, an airplane is sighted on the ground below. If the airplane is 2200 m from the base of the tower, what is the angle of depression of the airplane from the top of the control tower?',
    options: [
      { label: 'A', text: '4.5°' },
      { label: 'B', text: '3.4°' },
      { label: 'C', text: '4.1°' },
      { label: 'D', text: '3.9°' },
    ],
    ...solved(14, 'D', '3.9° (Option D)'),
  },

  // Item 15
  {
    id: 'mstc-nov2024-q15',
    number: 15,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Surveying / Trigonometry - Cut Slope Distance on Inclined Ground',
    text: 'The ground of a subdivision lot slopes upward from the street at point A at an angle of 8°. The owner wants to build a house on a level lot that extends 60 feet from A to point B. The back of the lot at B must be cut to form a 25° slope. How far along the original slope will the excavation end?',
    figureCaption: 'Figure 15: Cut slope excavation geometry on inclined ground (Lot A to B)',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_15.png" 
        alt="Figure 15: Cut slope excavation geometry on inclined ground" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '84.5 ft' },
      { label: 'B', text: '85.4 ft' },
      { label: 'C', text: '86.7 ft' },
      { label: 'D', text: '87.6 ft' },
    ],
    ...solved(15, 'C', '86.7 ft (Option C)'),
  },

  // Item 16
  {
    id: 'mstc-nov2024-q16',
    number: 16,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Plane Geometry - Perimeter and Diagonal',
    text: 'The length and breadth of a room are 8 m and 6 m respectively. A molding is installed along all the four walls and a diagonal. What is the total length needed for the molding?',
    options: [
      { label: 'A', text: '10' },
      { label: 'B', text: '14' },
      { label: 'C', text: '38' },
      { label: 'D', text: '48' },
    ],
    ...solved(16, 'C', '38 (Option C)'),
  },

  // Item 17
  {
    id: 'mstc-nov2024-q17',
    number: 17,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Plane Geometry - Area of Border',
    text: 'Dana and her husband recently installed an inground rectangular swimming pool measuring 40 ft by 30 ft. They want to add a brick border of uniform width around all sides of the pool. How wide can they make the brick border if they purchased enough brick to cover an area of 296 ft²?',
    figureCaption: 'Figure 17: Inground rectangular swimming pool with uniform brick border',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_17.png" 
        alt="Figure 17: Swimming pool with uniform brick border diagram" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '1' },
      { label: 'B', text: '2' },
      { label: 'C', text: '4' },
      { label: 'D', text: '3' },
    ],
    ...solved(17, 'B', '2 (Option B)'),
  },

  // Item 18
  {
    id: 'mstc-nov2024-q18',
    number: 18,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Plane Geometry - Lawn Strip Surrounding Garden',
    text: 'Karen\'s backyard has a width of 20 meters and a length of 30 meters. Karen wants to put a rectangular flower garden in the middle of the back yard, leaving a strip of grass of uniform width around all sides of the flower garden. If she wants to have 336 square meters of grass, what will be the width and length of the garden?',
    options: [
      { label: 'A', text: 'width = 12 m, length = 22 m' },
      { label: 'B', text: 'width = 13 m, length = 23 m' },
      { label: 'C', text: 'width = 11 m, length = 21 m' },
      { label: 'D', text: 'width = 11 m, length = 23 m' },
    ],
    ...solved(18, 'A', 'width = 12 m, length = 22 m (Option A)'),
  },

  // Item 19
  {
    id: 'mstc-nov2024-q19',
    number: 19,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Solid Mensuration - Spheres Packed in Rectangular Box',
    text: 'Three spherical balls with radius r are contained in a rectangular box. Two of the balls are each touching 5 sides of the rectangular box and the middle ball. The middle ball also touches four sides of the rectangular box. What is the volume of the space between the balls and the rectangular box?',
    options: [
      { label: 'A', text: 'r³(3 - 4π)' },
      { label: 'B', text: '4r³(14 - π)' },
      { label: 'C', text: '4r³(6 - π)' },
      { label: 'D', text: '12r³(r - π)' },
    ],
    ...solved(19, 'C', '4r³(6 - π) (Option C)'),
  },

  // Item 20
  {
    id: 'mstc-nov2024-q20',
    number: 20,
    pageNumber: 3,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Trigonometry - Law of Cosines Aircraft Separation',
    text: 'A 757-passenger jet and a 737-passenger jet are on their final approaches to San Diego International Airport. How far apart are the jets?\nGiven from control tower: 757 is at altitude 20,000 ft with angle of elevation 6°; 737 is at altitude 15,000 ft with angle of elevation 3°.',
    figureCaption: 'Figure 20: Aircraft separation geometry and elevation angles from control tower',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_20.png" 
        alt="Figure 20: Aircraft separation angles and altitudes from control tower" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '96,600 ft' },
      { label: 'B', text: '96,060 ft' },
      { label: 'C', text: '90,606 ft' },
      { label: 'D', text: '90,660 ft' },
    ],
    ...solved(20, 'B', '96,060 ft (Option B)'),
  },

  // Item 21
  {
    id: 'mstc-nov2024-q21',
    number: 21,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Surveying / Coordinate Geometry - Trilateration Circle Intersection',
    text: 'Assume the following surveying data (in meters) are available from two base control stations:\n\n| Station | Easting ($X$) | Northing ($Y$) | Radius ($R$) |\n|:---:|:---:|:---:|:---:|\n| **A** | 2,851.28 m | 299.40 m | 2,000 m |\n| **B** | 3,898.72 m | 2,870.15 m | 1,500 m |\n\nCompute the $X$ and $Y$ coordinates of point $P$.',
    figureCaption: 'Figure 21: Trilateration survey network circle intersection for Point P',
    figureSvg: `<div class="flex flex-col items-center justify-center w-full py-2">
      <img 
        src="/src/images/MSTCNov2024/MSTC_November_2024_21.png" 
        alt="Figure 21: Trilateration survey network diagram" 
        class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
      />
    </div>`,
    options: [
      { label: 'A', text: '(4464.85, 1481.09) or (2523.02, 2272.28)' },
      { label: 'B', text: '(4464.85, 2523.02) or (1481.09, 2272.28)' },
      { label: 'C', text: '(1481.09, 4464.85) or (2272.2, 82523.02)' },
      { label: 'D', text: '(2523.02, 4464.85) or (2272.28, 1481.09)' },
    ],
    ...solved(21, 'A', '(4464.85, 1481.09) or (2523.02, 2272.28) (Option A)'),
  },

  // Item 22
  {
    id: 'mstc-nov2024-q22',
    number: 22,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Calculus / Engineering Economics - Profit Maximization',
    text: 'NRC is engaged in the manufacture of sugar whose selling price is ₱690 per unit. For the normal range of the monthly production, the total cost of production $y$ is approximately related to the number of units produced $x$ by: $y = 0.5x^2 + 400x + 24{,}000$. At what volume of production is the maximum profit earned by the department if we assume that the production is actually extended up to this point?',
    options: [
      { label: 'A', text: '270' },
      { label: 'B', text: '280' },
      { label: 'C', text: '260' },
      { label: 'D', text: '290' },
    ],
    ...solved(22, 'D', '290 (Option D)'),
  },

  // Item 23
  {
    id: 'mstc-nov2024-q23',
    number: 23,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Differential Calculus - Rate of Spread Optimization',
    text: 'It has been estimated that a rumor spreads at a rate $R$ that is proportional both to the ratio $r$ of individuals who have heard the rumor and to the ratio $(1 - r)$ who have not. Thus, $R = k r (1 - r)$, where $k$ is a positive constant. For what value of $r$ does the rumor spread fastest?',
    options: [
      { label: 'A', text: 'r/2' },
      { label: 'B', text: 'r/4' },
      { label: 'C', text: 'r/3' },
      { label: 'D', text: 'r/5' },
    ],
    ...solved(23, 'A', 'r/2 (Option A)', 'The booklet keys this item A and prints option A as $r/2$. Differentiating $R = kr(1-r)$ gives $r = 1/2$, and no option offers that value, so the printed $r/2$ is evidently a misprint of $1/2$. The key follows the booklet.'),
  },

  // Item 24
  {
    id: 'mstc-nov2024-q24',
    number: 24,
    pageNumber: 4,
    subject: 'MSTC',
    year: 2024,
    month: 'November',
    category: 'Differential Calculus - Point of Inflection & Diminishing Returns',
    text: 'Suppose a firm believes that the percentage $P(t)$ of the market that it can attain for its product by spending a certain amount on advertising each year for the next three years is given by $P(t) = -t^3 + 6t^2 + 10$, where $t$ is given in years. Find the inflection point. How might you characterize the inflection point in this case?',
    options: [
      { label: 'A', text: '(2, 3), We would characterize the inflection point as the point of increasing returns.' },
      { label: 'B', text: '(2, 26), We would characterize the inflection point as the point of diminishing returns.' },
      { label: 'C', text: '(2, 26), We would characterize the inflection point as the point of increasing returns.' },
      { label: 'D', text: '(2, 3), We would characterize the inflection point as the point of diminishing returns.' },
    ],
    ...solved(24, 'B', '(2, 26), We would characterize the inflection point as the point of diminishing returns. (Option B)'),
  },
];
