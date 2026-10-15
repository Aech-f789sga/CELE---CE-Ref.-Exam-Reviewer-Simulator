import fs from 'fs';
import path from 'path';
import katex from 'katex';
import {
  AVAILABLE_EXAM_SETS,
  getQuestionsForExam,
} from '../data/questionBankManager';
import { Question } from '../types/exam';

interface Issue {
  subject: string;
  year: number;
  month: string;
  questionNumber: number;
  questionId: string;
  field: string;
  index?: number;
  content: string;
  issueType: 'katex-error' | 'words-in-formula' | 'slash-division' | 'unicode-math' | 'other';
  details: string;
}

const issues: Issue[] = [];

// Helper to test katex parsing
function testKatex(latex: string): { valid: boolean; error?: string } {
  try {
    katex.renderToString(latex, { throwOnError: true, strict: false });
    return { valid: true };
  } catch (err: any) {
    return { valid: false, error: err.message };
  }
}

// Check if a formula contains English words or \text{...}
function checkWordsInFormula(formula: string): string[] {
  const foundWords: string[] = [];
  // Check for \text{...}
  const textMatches = formula.match(/\\text[a-zA-Z]*\{([^}]+)\}/g);
  if (textMatches) {
    textMatches.forEach(m => foundWords.push(m));
  }
  // Check for bare English words (3 or more lowercase/uppercase letters not part of a LaTeX command)
  const stripped = formula
    .replace(/\\(frac|sqrt|times|approx|infty|alpha|beta|gamma|delta|epsilon|theta|lambda|mu|nu|pi|rho|sigma|tau|phi|omega|sum|int|prod|sin|cos|tan|log|ln|min|max|cdot|left|right|quad|qquad|le|ge|leq|geq|ne|neq|pm|to|partial|lim|exp|over|text|mathrm|mathbf|mathit|mathsf|mathtt|pm|cdot|bar|hat|tilde|vec|prime|circ)/g, ' ')
    .replace(/\\/g, ' ');
  
  const wordMatches = stripped.match(/\b[a-zA-Z]{3,}\b/g);
  if (wordMatches) {
    // Filter out common acceptable abbreviations like rad, rpm, sec, min, max, log, exp, tan, sin, cos, abs
    const allowed = new Set(['max', 'min', 'sin', 'cos', 'tan', 'sec', 'log', 'exp', 'deg', 'det', 'dim', 'gcd', 'hom', 'ker', 'lim', 'sup', 'inf', 'mod', 'Pr', 'rad']);
    wordMatches.forEach(w => {
      if (!allowed.has(w.toLowerCase())) {
        foundWords.push(w);
      }
    });
  }
  return foundWords;
}

// Inspect all sets
for (const set of AVAILABLE_EXAM_SETS) {
  for (const subject of set.subjects) {
    const questions: Question[] = getQuestionsForExam(subject, set.year, set.month);
    
    questions.forEach((q) => {
      // 1. Check solution.formulas
      if (q.solution && q.solution.formulas) {
        q.solution.formulas.forEach((f, idx) => {
          // Check KaTeX compile
          const kRes = testKatex(f);
          if (!kRes.valid) {
            issues.push({
              subject,
              year: set.year,
              month: set.month,
              questionNumber: q.number,
              questionId: q.id,
              field: 'formulas',
              index: idx,
              content: f,
              issueType: 'katex-error',
              details: kRes.error || 'KaTeX parse error',
            });
          }

          // Check words
          const words = checkWordsInFormula(f);
          if (words.length > 0) {
            issues.push({
              subject,
              year: set.year,
              month: set.month,
              questionNumber: q.number,
              questionId: q.id,
              field: 'formulas',
              index: idx,
              content: f,
              issueType: 'words-in-formula',
              details: `Contains words/text: ${words.join(', ')}`,
            });
          }

          // Check Unicode characters that should be LaTeX
          if (/[√γ²³×÷±]/.test(f)) {
            issues.push({
              subject,
              year: set.year,
              month: set.month,
              questionNumber: q.number,
              questionId: q.id,
              field: 'formulas',
              index: idx,
              content: f,
              issueType: 'unicode-math',
              details: 'Contains raw unicode math symbols (use \\sqrt, \\gamma, ^2, ^3, \\times, etc.)',
            });
          }
        });
      }

      // 2. Check $$...$$ in question text and solution
      const checkBlockMath = (text: string, fieldName: string) => {
        const blockMathMatches = text.match(/\$\$([\s\S]*?)\$\$/g);
        if (blockMathMatches) {
          blockMathMatches.forEach(m => {
            const rawMath = m.slice(2, -2).trim();
            const kRes = testKatex(rawMath);
            if (!kRes.valid) {
              issues.push({
                subject,
                year: set.year,
                month: set.month,
                questionNumber: q.number,
                questionId: q.id,
                field: fieldName,
                content: rawMath,
                issueType: 'katex-error',
                details: kRes.error || 'KaTeX error in $$ block',
              });
            }
          });
        }
      };

      if (q.text) checkBlockMath(q.text, 'text');
      if (q.solution?.summary) checkBlockMath(q.solution.summary, 'solution.summary');
      if (q.solution?.steps) {
        q.solution.steps.forEach((step, sIdx) => {
          checkBlockMath(step, `solution.steps[${sIdx}]`);
        });
      }
    });
  }
}

console.log('Total issues detected:', issues.length);

const groupedByType: Record<string, number> = {};
issues.forEach(i => {
  groupedByType[i.issueType] = (groupedByType[i.issueType] || 0) + 1;
});
console.log('Issues by type:', groupedByType);

const groupedByExam: Record<string, number> = {};
issues.forEach(i => {
  const key = `${i.subject} ${i.month} ${i.year}`;
  groupedByExam[key] = (groupedByExam[key] || 0) + 1;
});
console.log('Issues by exam:', groupedByExam);

// Print first 25 issues
console.log('\n--- First 25 issues: ---');
issues.slice(0, 25).forEach((i, idx) => {
  console.log(`[#${idx + 1}] ${i.subject} ${i.month} ${i.year} Q#${i.questionNumber} (${i.field}) [${i.issueType}]`);
  console.log(`   Formula: ${i.content}`);
  console.log(`   Detail:  ${i.details}`);
});
