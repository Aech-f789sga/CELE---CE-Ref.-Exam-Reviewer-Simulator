import { Question } from '../../../types/exam';
import { opts, solved } from './may2022Helpers';

/**
 * MSTC May 2022, items 46-55 — construction safety and contracts -- toolbox meetings,
 * excavation protective systems, benching, contract types,
 * project turnover, pavement profile, site safety, specifications
 * and plate-line capacity.
 */
export const MSTC_MAY2022_PART4: Question[] = [
  // ── Item 46 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q46',
    number: 46,
    pageNumber: 381,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Safety - Toolbox Meeting',
    text: 'It is an informal group discussion that focuses on a particular safety issue. These can be used daily to promote department safety culture as well as to facilitate health and safety discussions on job sites is known as:',
    options: opts(
      'Office Meeting',
      'Toolbox Meeting',
      'On-site Meeting',
      'Meeting de avance',
    ),
    ...solved(46, 'B', 'Toolbox Meeting'),
  },

  // ── Item 47 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q47',
    number: 47,
    pageNumber: 381,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Safety - Excavation Protective Systems',
    text: 'A method of protecting employees from cave-ins from material that could fall or roll from an excavation face or into an excavation or collapse of adjacent structures. This includes support systems, sloping and benching systems, shield systems and other systems that provide the necessary protection.',
    options: opts(
      'Fall arrest system',
      'Level arrest system',
      'Protective system',
      'Personnel protective system',
    ),
    ...solved(47, 'C', 'Protective system'),
  },

  // ── Item 48 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q48',
    number: 48,
    pageNumber: 381,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Safety - Benching Excavation Technique',
    text: 'A method of protecting workers from cave-ins by excavating the sides of an excavation to form one or a series of horizontal level or steps, usually with vertical or near vertical surfaces between levels.',
    options: opts('benching', 'shoring', 'shielding', 'fall arrest system'),
    ...solved(48, 'A', 'benching'),
  },

  // ── Item 49 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q49',
    number: 49,
    pageNumber: 381,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Management - Legal Contracts & Specifications',
    text: 'A formal or legally binding agreement between two parties is referred to as:',
    options: opts('Deal', 'Plan', 'Meeting', 'Contract'),
    ...solved(49, 'D', 'Contract'),
  },

  // ── Item 50 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q50',
    number: 50,
    pageNumber: 381,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Management - Project Closeout & Turnover',
    text: 'It occurs after the completion of construction and the resolution of the majority of punchlist and commissioning issues.',
    options: opts('Bidding', 'Deal', 'Turnover of a project', 'Payment'),
    ...solved(50, 'C', 'Turnover of a project'),
  },

  // ── Item 51 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q51',
    number: 51,
    pageNumber: 381,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Surveying & Highway Design - Profile Drawings',
    text: 'This drawing has elevation as its vertical axis, and horizontal distance as measured along the centerline of the facility (or other reference line), as its horizontal axis.',
    options: opts('cross-section', 'elevation', 'profile', 'horizontal view'),
    ...solved(51, 'C', 'profile'),
  },

  // ── Item 52 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q52',
    number: 52,
    pageNumber: 382,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Management - Gantt Bar Chart Drawbacks',
    text: 'Which of the following is/are main drawback (s) in adopting bar charts?\nI. All the activities are shown as being independent of each other\nII. The sequence of activities not defined at all\nIII. It is difficult to judge whether an activity is completed or not',
    options: opts('I only', 'II only', 'III only', 'I, II, and III'),
    ...solved(52, 'D', 'I, II, and III'),
  },

  // ── Item 53 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q53',
    number: 53,
    pageNumber: 382,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Management - PERT Three-Time Scheduling',
    text: 'If you are preparing a report on PERT CPM network in a construction job, what time scheduling should you consider in the preparation of the PERT CPM network diagram?',
    options: opts('pessimistic time', 'optimistic time', 'probable time', 'all of the above'),
    ...solved(53, 'D', 'all of the above'),
  },

  // ── Item 54 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q54',
    number: 54,
    pageNumber: 382,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Management - Contract Documents & Specifications',
    text: 'It provides the detailed requirements for the materials, equipments and workmanship to be incorporated into the project.',
    options: opts('estimates', 'plans', 'specifications', 'bid documents'),
    ...solved(54, 'C', 'specifications'),
  },

  // ── Item 55 ──────────────────────────────────────────────────────────────────
  {
    id: 'mstc-may2022-q55',
    number: 55,
    pageNumber: 382,
    subject: 'MSTC',
    year: 2022,
    month: 'May',
    category: 'Construction Equipment - Excavator & Loader Bucket Capacities',
    text: 'The bucket volume contained within the bucket when following the outline of the bucket sides is referred to as:',
    options: opts(
      'Heap volume',
      'Bucket load capacity',
      'Water line capacity',
      'Plate line capacity',
    ),
    ...solved(55, 'D', 'Plate line capacity'),
  },
];
