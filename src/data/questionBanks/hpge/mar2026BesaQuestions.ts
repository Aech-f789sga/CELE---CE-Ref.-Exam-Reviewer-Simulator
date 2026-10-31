import { Question } from '../../../types/exam';
import { BESA_HPGE_MAR2026_PART1 } from './mar2026Besa_part1';
import { BESA_HPGE_MAR2026_PART2 } from './mar2026Besa_part2';
import { BESA_HPGE_MAR2026_PART3 } from './mar2026Besa_part3';
import { BESA_HPGE_MAR2026_PART4 } from './mar2026Besa_part4';
import { BESA_HPGE_MAR2026_PART5 } from './mar2026Besa_part5';

/**
 * HPGE of March 2026 — 47 items, transcribed from Venancio I. Besavilla Jr.,
 * "Civil Engineering Licensure Examinations — Hydraulics and Geotechnical
 * Engineering, March 2026" (booklet pages H-222 to H-231).
 *
 * Items 1–20 are four-choice concept questions; the booklet keys each by
 * italicising the option and setting a pointing hand beside it. Items 21–47
 * print a worked "Solution:" block, so they carry no choices and are answered
 * by revealing the scanned working and self-marking.
 *
 * Item 21 is the only item that asks several things at once (a, b, c) under a
 * single printed solution, so it stays one item whose final answer lists all
 * three parts rather than being cut into three crops mid-derivation.
 */
export const BESA_HPGE_MAR2026_QUESTIONS: Question[] = [
  ...BESA_HPGE_MAR2026_PART1,
  ...BESA_HPGE_MAR2026_PART2,
  ...BESA_HPGE_MAR2026_PART3,
  ...BESA_HPGE_MAR2026_PART4,
  ...BESA_HPGE_MAR2026_PART5,
];
