/**
 * Compatibility shim parser.
 * Prevents build crashes on external platforms like Vercel/GitHub
 * if older cached commits or references to latexParser exist.
 */
export function parseLatex(input: string): string {
  return input;
}

export function formatMathFormula(formula: string): string {
  return formula;
}

export default {
  parseLatex,
  formatMathFormula,
};
