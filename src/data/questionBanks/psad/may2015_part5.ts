import { Question } from '../../../types/exam';
import { solved, opts } from './may2015Helpers';
import { psadMay2015Figure } from '../../psadMay2015Images';

export const PSAD_MAY2015_PART5: Question[] = [
  // Item 61
  {
    id: 'psad-may2015-q61',
    number: 61,
    pageNumber: 84,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Doubly Reinforced Beam',
    text: 'Situation 19 (continued) – If h = 500 mm, calculate the nominal moment strength of the beam.',
    options: opts('307 kN-m', '404 kN-m', '209 kN-m', '436 kN-m'),
    ...solved(61, 'B', '404 kN-m', 112, 115),
  },

  // Item 62
  {
    id: 'psad-may2015-q62',
    number: 62,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Prestressed Concrete - Basic Stresses',
    text: 'Situation 20 – A prestressed concrete beam is 250 mm wide by 450 mm deep. The initial prestressing force is 600 kN. Assume that there is a loss of prestress of 15% at service loads. What is the final compressive stress in the beam if the prestressing force is applied at the centroid of the beam?',
    options: opts('-5.33 MPa', '-4.53 MPa', '-4.8 MPa', '-5.65 MPa'),
    ...solved(62, 'B', '-4.53 MPa', 115),
  },

  // Item 63
  {
    id: 'psad-may2015-q63',
    number: 63,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Prestressed Concrete - Basic Stresses',
    text: 'Situation 20 (continued) – What is the final compressive stress in the beam if the prestressing force is applied at 100 mm below the centroid of the beam?',
    options: opts('-1.51 MPa', '-12.44 MPa', '-1.2 MPa', '-10.58 MPa'),
    ...solved(63, 'D', '-10.58 MPa', 115),
  },

  // Item 64
  {
    id: 'psad-may2015-q64',
    number: 64,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Prestressed Concrete - Basic Stresses',
    text: 'Situation 20 (continued) – What is the maximum eccentricity at which the prestressing force can be applied without producing tensile stress in the beam?',
    options: opts('100 mm', '125 mm', '150 mm', '75 mm'),
    ...solved(64, 'D', '75 mm', 115),
  },

  // Item 65
  {
    id: 'psad-may2015-q65',
    number: 65,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Shear Design',
    text: 'Situation 21 – Given the following data for the beam shown in figure: Beam Dimension: Beam width, $b_w$ = 260 mm; Overall depth, h = 600 mm; Effective depth, d = 540 mm; Beam length, L = 7.5 m. $f\u2019_c$ = 21 MPa (normal weight concrete); $f_y$ = 415 MPa; $f_{yt}$ = 275 MPa; Stirrup diameter, $d_h$ = 10 mm; U-stirrup. Loads (factored): $P_u$ = 147 kN; $w_u$ = 19.6 kN/m (including beam weight). Calculate the spacing of stirrups at critical section near the support.',
    figureSvg: psadMay2015Figure(
      21,
      'Figure 21: Beam of span L with two point loads P1 and P2 at the third points, a uniform factored load wu, and end moments M1 and M2.',
    ),
    figureCaption:
      'Figure 21: Beam with third-point loads and uniform load (Situation 21).',
    options: opts('124 mm', '112 mm', '148 mm', '136 mm'),
    ...solved(65, 'D', '136 mm', 115, 117),
  },

  // Item 66
  {
    id: 'psad-may2015-q66',
    number: 66,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Shear Design',
    text: 'Situation 21 (continued) – Calculate the spacing of stirrups at the third point of the beam.',
    options: opts('165 mm', '195 mm', '154 mm', '182 mm'),
    ...solved(66, 'B', '195 mm', 115, 117),
  },

  // Item 67
  {
    id: 'psad-may2015-q67',
    number: 67,
    pageNumber: 85,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Shear Design',
    text: 'Situation 21 (continued) – Calculate the spacing of stirrups at midspan.',
    options: opts('300 mm', '150 mm', '270 mm', '135 mm'),
    ...solved(67, 'C', '270 mm', 115, 117),
  },

  // Item 68
  {
    id: 'psad-may2015-q68',
    number: 68,
    pageNumber: 87,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Shear',
    text: 'Situation 22 – The column shown in the figure is subjected to 480 kN shear parallel to the short side. The nominal shear strength of concrete for shear parallel to the short side is 0.88 MPa. Use 2001 NSCP. Given the following data: b = 450 mm, h = 600 mm, $f\u2019_c$ = 27.5 MPa, $f_y$ = 415 MPa, $f_{yt}$ = 275 MPa. Calculate the nominal shear strength that must be provided by lateral reinforcement.',
    figureSvg: psadMay2015Figure(
      22,
      'Figure 22: Rectangular column section 450 mm by 600 mm with eight 28 mm longitudinal bars, 12 mm ties at 40 mm cover, and a 12 mm cross-tie.',
    ),
    figureCaption:
      'Figure 22: Column section with 28 mm longitudinal bars and 12 mm ties (Situations 22 and 23).',
    options: opts('362 kN', '372 kN', '346 kN', '387 kN'),
    ...solved(68, 'A', '362 kN', 117),
  },

  // Item 69
  {
    id: 'psad-may2015-q69',
    number: 69,
    pageNumber: 87,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Shear',
    text: 'Situation 22 (continued) – What is the required spacing of lateral reinforcement?',
    options: opts('140 mm', '130 mm', '110 mm', '120 mm'),
    ...solved(69, 'B', '130 mm', 117),
  },

  // Item 70
  {
    id: 'psad-may2015-q70',
    number: 70,
    pageNumber: 88,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Shear',
    text: 'Situation 22 (continued) – If the spacing of lateral reinforcements is 100 mm, what is the ultimate shear strength of the column for shear parallel to the short side?',
    options: opts('570 kN', '562 kN', '578 kN', '596 kN'),
    ...solved(70, 'C', '578 kN', 117),
  },

  // Item 71
  {
    id: 'psad-may2015-q71',
    number: 71,
    pageNumber: 88,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Seismic Detailing',
    text: 'Situation 23 – The lateral reinforcement of the column shown in the figure (above) is to be designed based on the special provisions for seismic design. The column dimension is b = 450 mm and h = 600 mm. Concrete strength $f\u2019_c$ = 27.5 MPa, longitudinal steel strength $f_y$ = 415 MPa and lateral reinforcement steel strength $f_{yt}$ = 275 MPa. Which of the following gives the required spacing of lateral reinforcement for shear parallel to the short side of the column.',
    figureSvg: psadMay2015Figure(
      23,
      'Figure 23: The same 450 mm by 600 mm column section as Figure 22, used for the seismic lateral-reinforcement design.',
    ),
    figureCaption:
      'Figure 23: Column section for the seismic lateral-reinforcement design (Situation 23).',
    options: opts('75 mm', '70 mm', '80 mm', '85 mm'),
    ...solved(71, 'B', '70 mm', 118, 119),
  },

  // Item 72
  {
    id: 'psad-may2015-q72',
    number: 72,
    pageNumber: 88,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Seismic Detailing',
    text: 'Situation 23 (continued) – Which of the following gives the required spacing of lateral reinforcement for shear parallel to the long side of the column.',
    options: opts('75 mm', '85 mm', '80 mm', '70 mm'),
    ...solved(72, 'A', '75 mm', 118, 119),
  },

  // Item 73
  {
    id: 'psad-may2015-q73',
    number: 73,
    pageNumber: 88,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Seismic Detailing',
    text: 'Situation 23 (continued) – Which of the following gives the maximum spacing of lateral reinforcement.',
    options: opts('124 mm', '103 mm', '112 mm', '98 mm'),
    ...solved(73, 'C', '112 mm', 118, 119),
  },

  // Item 74
  {
    id: 'psad-may2015-q74',
    number: 74,
    pageNumber: 90,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Centroids',
    text: 'Situation 24 – The column of a non-sway frame is shown in the figure. Concrete strength $f\u2019_c$ = 28 MPa and steel strength $f_y$ = 415 MPa. The diameter is 10 mm with clear cover of 40 mm. Consider bending parallel to line 1 and neglect the concrete area displaced by steel. Given the following dimensions: $x_1$ = 250 mm, $x_2$ = 350 mm, $y_1$ = 150 mm, $y_2$ = 200 mm. Determine the location of the geometric centroid from line 1.',
    figureSvg: psadMay2015Figure(
      24,
      'Figure 24: T-shaped column section with flange x1 wide and 2y1 deep, web x2 long and 2y2 deep, reinforced with 6-25 mm and 4-28 mm bars.',
    ),
    figureCaption:
      'Figure 24: T-shaped column section for the centroid calculations (Situation 24).',
    options: opts('0', '224 mm', '233 mm', '242 mm'),
    ...solved(74, 'C', '233 mm', 119, 120),
  },

  // Item 75
  {
    id: 'psad-may2015-q75',
    number: 75,
    pageNumber: 90,
    subject: 'PSAD',
    year: 2015,
    month: 'May',
    category: 'Reinforced Concrete - Column Centroids',
    text: 'Situation 24 (continued) – Determine the location of the plastic centroid from line 1.',
    options: opts('265 mm', '0', '255 mm', '248 mm'),
    ...solved(75, 'C', '255 mm', 119, 120),
  },
];
