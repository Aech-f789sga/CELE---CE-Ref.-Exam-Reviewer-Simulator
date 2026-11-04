import { Question } from '../../../types/exam';
import { solved } from './apr2025Helpers';

export const PSAD_APR2025_PART3: Question[] = [
  // Item 31
  {
    id: 'psad-apr2025-q31',
    number: 31,
    pageNumber: 425,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Moving Loads on Bridge Girders',
    text: 'Situation 11 — The compound bridge girder shown is to be analyzed using a moving highway load consisting of uniformly distributed load and a concentrated load.\n\nGiven: $L_1 = L_3 = L_5 = 5$ m; $L_2 = L_4 = L_6 = 25$ m. Uniform highway load, $w = 9.35$ kN/m. Concentrated load for maximum reaction, $P = 115$ kN. Concentrated load for maximum moment, $P = 90$ kN.\n\n31. Compute the length (m) of uniform load for maximum reaction at $B$.',
    options: [
      { label: 'A', text: '35' },
      { label: 'B', text: '30' },
      { label: 'C', text: '60' },
      { label: 'D', text: '25' },
    ],
    ...solved(31, 'B', '30 m (Option B)'),
  },

  // Item 32
  {
    id: 'psad-apr2025-q32',
    number: 32,
    pageNumber: 425,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Moving Loads on Bridge Girders',
    text: 'Situation 11 — 32. Compute the maximum (kN) reaction at $F$.',
    options: [
      { label: 'A', text: '446.55' },
      { label: 'B', text: '746.55' },
      { label: 'C', text: '536.25' },
      { label: 'D', text: '625.85' },
    ],
    ...solved(32, 'A', '446.55 kN (Option A)'),
  },

  // Item 33
  {
    id: 'psad-apr2025-q33',
    number: 33,
    pageNumber: 425,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Moving Loads on Bridge Girders',
    text: 'Situation 11 — 33. Compute the length (m) of the uniform load for maximum positive shear at midspan of $BC$.',
    options: [
      { label: 'A', text: '30' },
      { label: 'B', text: '17.5' },
      { label: 'C', text: '22.5' },
      { label: 'D', text: '25' },
    ],
    ...solved(33, 'B', '17.5 m (Option B)'),
  },

  // Item 34
  {
    id: 'psad-apr2025-q34',
    number: 34,
    pageNumber: 425,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Static Indeterminacy',
    text: 'Situation 12 — The beam shown is fixed at supports $A$ and $C$, with an internal hinge at point $B$. If the beam is determinate, $n = 0$. Determine the degree of static indeterminacy $n$ in each of the following cases.\n\n34. If the internal hinge at $B$ is provided as shown.',
    options: [
      { label: 'A', text: '1' },
      { label: 'B', text: '0' },
      { label: 'C', text: '2' },
      { label: 'D', text: '3' },
    ],
    ...solved(34, 'C', '2 (Option C)'),
  },

  // Item 35
  {
    id: 'psad-apr2025-q35',
    number: 35,
    pageNumber: 425,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Static Indeterminacy',
    text: 'Situation 12 — 35. If the internal pin at $B$ is removed.',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '3' },
      { label: 'C', text: '1' },
      { label: 'D', text: '0' },
    ],
    ...solved(35, 'B', '3 (Option B)'),
  },

  // Item 36
  {
    id: 'psad-apr2025-q36',
    number: 36,
    pageNumber: 426,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Analysis - Static Indeterminacy',
    text: 'Situation 12 — 36. If the support at $C$ is changed from fixed to a hinge support, and the internal hinge at $B$ is retained.',
    options: [
      { label: 'A', text: '1' },
      { label: 'B', text: '0' },
      { label: 'C', text: '3' },
      { label: 'D', text: '2' },
    ],
    ...solved(36, 'A', '1 (Option A)'),
  },

  // Item 37
  {
    id: 'psad-apr2025-q37',
    number: 37,
    pageNumber: 426,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Eccentric Bolted Bracket',
    text: 'Situation 13 — The bracket on one side of the column shown is subjected to a load $P = 240$ kN applied at an eccentricity of $e = 120$ mm. Assume that the bracket is thick enough to carry the load.\n\nGiven: $s_1 = 40$ mm; $s_2 = 80$ mm; $s_3 = 160$ mm. Bolt diameter $= 22$ mm.\n\n37. Compute the shear stress (MPa) due to direct load only.',
    options: [
      { label: 'A', text: '85.4' },
      { label: 'B', text: '30.0' },
      { label: 'C', text: '78.9' },
      { label: 'D', text: '96.3' },
    ],
    ...solved(37, 'C', '78.9 MPa (Option C)'),
  },

  // Item 38
  {
    id: 'psad-apr2025-q38',
    number: 38,
    pageNumber: 426,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Eccentric Bolted Bracket',
    text: 'Situation 13 — 38. Compute the critical shear stress (MPa) due to torsional load only.',
    options: [
      { label: 'A', text: '65.2' },
      { label: 'B', text: '94.9' },
      { label: 'C', text: '36.1' },
      { label: 'D', text: '125.8' },
    ],
    ...solved(38, 'B', '94.9 MPa (Option B)'),
  },

  // Item 39
  {
    id: 'psad-apr2025-q39',
    number: 39,
    pageNumber: 426,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Eccentric Bolted Bracket',
    text: 'Situation 13 — 39. Compute the critical shear stress (MPa) due to the given eccentric load.',
    options: [
      { label: 'A', text: '96.8' },
      { label: 'B', text: '58.3' },
      { label: 'C', text: '173.8' },
      { label: 'D', text: '153.4' },
    ],
    ...solved(39, 'D', '153.4 MPa (Option D)'),
  },

  // Item 40
  {
    id: 'psad-apr2025-q40',
    number: 40,
    pageNumber: 427,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Welded Tension Member',
    text: 'Situation 14 — A tension member composed of 2L 76 mm × 76 mm × 10 mm is welded to a gusset plate as shown in the figure.\n\nGiven: Area of one angle, $A_1 = 1360$ mm$^2$; $y = 23$ mm; Allowable weld shear stress, $F_{vw} = 124$ MPa; Size of weld, $t_w = 6$ mm; Yield strength of angle, $F_y = 248$ MPa; Allowable tensile stress on gross area, $F_t = 0.6F_y$.\n\n40. Given: $L_1 = 200$ mm, $L_2 = 76$ mm, $L_3 = 300$ mm. Find the allowable load $P$ (kN) based on weld shear strength. Neglect the effect of eccentricity.',
    options: [
      { label: 'A', text: '785' },
      { label: 'B', text: '555' },
      { label: 'C', text: '606' },
      { label: 'D', text: '436' },
    ],
    ...solved(40, 'C', '606 kN (Option C)'),
  },

  // Item 41
  {
    id: 'psad-apr2025-q41',
    number: 41,
    pageNumber: 427,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Welded Tension Member',
    text: 'Situation 14 — 41. If $L_1 = 150$ mm, find the allowable load $P$ (kN) based on tensile strength of the angle.',
    options: [
      { label: 'A', text: '385.9' },
      { label: 'B', text: '404.7' },
      { label: 'C', text: '512.2' },
      { label: 'D', text: '425.8' },
    ],
    ...solved(41, 'B', '404.7 kN (Option B)'),
  },

  // Item 42
  {
    id: 'psad-apr2025-q42',
    number: 42,
    pageNumber: 427,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Welded Tension Member',
    text: 'Situation 14 — 42. Given: $L_1 = L_3 = 250$ mm; $P = 400$ kN. Find the maximum weld shear stress in weld $L_2$.',
    options: [
      { label: 'A', text: '85' },
      { label: 'B', text: '95' },
      { label: 'C', text: '90' },
      { label: 'D', text: '100' },
    ],
    ...solved(42, 'C', '90 MPa (Option C)'),
  },

  // Item 43
  {
    id: 'psad-apr2025-q43',
    number: 43,
    pageNumber: 428,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Beam Flexure and Shear',
    text: 'Situation 15 — A W450 × 97 wide-flange steel section is used as a simply supported beam with a clear span of 12 m. The beam is subjected to the following loads: a uniform dead load of 8 kN/m over its entire span (inclusive of the beam\'s self-weight), and two concentrated vertical loads of 60 kN each, located 3 m from each support.\n\nProperties of W450 × 97: Beam depth, $d = 465$ mm; Flange width, $b_f = 193$ mm; Flange thickness, $t_f = 19$ mm; Web thickness, $t_w = 11$ mm; Moment of inertia, $I_x = 437 \\times 10^6$ mm$^4$.\n\n43. Determine the maximum flexural stress (MPa) in the beam.',
    options: [
      { label: 'A', text: '172.4' },
      { label: 'B', text: '154.2' },
      { label: 'C', text: '196.3' },
      { label: 'D', text: '214.7' },
    ],
    ...solved(43, 'A', '172.4 MPa (Option A)'),
  },

  // Item 44
  {
    id: 'psad-apr2025-q44',
    number: 44,
    pageNumber: 428,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Beam Flexure and Shear',
    text: 'Situation 15 — 44. Determine the maximum web shear stress (MPa) in the beam.',
    options: [
      { label: 'A', text: '26.3' },
      { label: 'B', text: '21.1' },
      { label: 'C', text: '32.5' },
      { label: 'D', text: '15.4' },
    ],
    ...solved(44, 'B', '21.1 MPa (Option B)'),
  },

  // Item 45
  {
    id: 'psad-apr2025-q45',
    number: 45,
    pageNumber: 428,
    subject: 'PSAD',
    year: 2025,
    month: 'April',
    category: 'Structural Steel Design - Beam Flexure and Shear',
    text: 'Situation 15 — 45. Determine the maximum horizontal shear stress (MPa) in the beam.',
    options: [
      { label: 'A', text: '28' },
      { label: 'B', text: '18' },
      { label: 'C', text: '24' },
      { label: 'D', text: '36' },
    ],
    ...solved(45, 'C', '24 MPa (Option C)'),
  },
];
