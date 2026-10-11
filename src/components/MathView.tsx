import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  latex?: string;
  math?: string;
  text?: string;
  formula?: boolean;
  block?: boolean;
  inline?: boolean;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

interface ParsedTable {
  headers: string[];
  alignments: ('left' | 'center' | 'right')[];
  rows: string[][];
}

type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'math-block'; latex: string }
  | { type: 'table'; table: ParsedTable };

/**
 * Safely renders LaTeX string via KaTeX.
 */
function renderKatex(latex: string, displayMode: boolean = false): string {
  try {
    return katex.renderToString(latex.trim(), {
      displayMode,
      throwOnError: false,
      output: 'htmlAndMathml',
      strict: false,
    });
  } catch (err) {
    console.warn('KaTeX render error:', err);
    return `<span class="katex-fallback">${latex}</span>`;
  }
}

/**
 * Safely checks if a string between $ delimiters is genuine math.
 */
function isLegitimateMath(str: string): boolean {
  const trimmed = str.trim();
  if (!trimmed) return false;
  // Delimiters with spaces adjacent are not valid inline math (standard LaTeX convention)
  if (str.startsWith(' ') || str.endsWith(' ')) return false;
  // If it's a bare number or currency (e.g. 50, 1.50, 50,000)
  if (/^(\d{1,3}(?:,\d{3})+|\d+)(\.\d+)?(k|M|B)?(\/\w+)?$/.test(trimmed)) return false;

  const hasBackslash = trimmed.includes('\\');
  const hasMathSymbols = /[=^_{}∫√±≤≥≠×÷+\-*]/.test(trimmed);
  // Check for multiple regular English words separated by spaces
  const hasMultipleWords = /[a-zA-Z]{2,}\s+[a-zA-Z]{2,}/.test(trimmed);

  if (hasMultipleWords && !hasBackslash && !hasMathSymbols) {
    return false;
  }
  return true;
}

/**
 * Currency amount pattern (e.g. $50, $1.50, $677, $50,000, $120,000, $50/share, $75k)
 */
const CURRENCY_REGEX = /\$(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?(?:k|K|M|B)?(?:\/(?:share|unit|month|yr|year|week|hr|hour|day|package|lb|lane|wk|wks))?(?=[^a-zA-Z0-9_\\]|$)/g;

/**
 * Parses markdown inline formatting and $math$ into React elements.
 */
function renderInlineContent(text: string): React.ReactNode {
  if (!text) return null;

  // Step 1: Temporarily protect currency amounts so $50 or $100,000 are never mistaken for LaTeX delimiters
  const currencyMatches: string[] = [];
  const textWithCurrencyProtected = text.replace(CURRENCY_REGEX, (m) => {
    const placeholder = `___CURR_TOKEN_${currencyMatches.length}___`;
    currencyMatches.push(m);
    return placeholder;
  });

  // Step 2: Match candidate inline math $...$
  const parts: React.ReactNode[] = [];
  const mathRegex = /(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const restoreTokens = (str: string): string => {
    let out = str;
    currencyMatches.forEach((curr, idx) => {
      out = out.split(`___CURR_TOKEN_${idx}___`).join(curr);
    });
    return out;
  };

  while ((match = mathRegex.exec(textWithCurrencyProtected)) !== null) {
    if (match.index > lastIndex) {
      const textChunk = restoreTokens(textWithCurrencyProtected.slice(lastIndex, match.index));
      parts.push(...renderFormattedText(textChunk, `txt-${lastIndex}`));
    }

    const rawCandidate = match[1];
    if (isLegitimateMath(rawCandidate)) {
      const latex = restoreTokens(rawCandidate);
      const html = renderKatex(latex, false);
      parts.push(
        <span
          key={`math-${match.index}`}
          className="inline-math px-0.5 align-baseline"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } else {
      // It's not legitimate math (e.g. regular words) - render as normal formatted text!
      const plainChunk = restoreTokens(match[0]);
      parts.push(...renderFormattedText(plainChunk, `txt-raw-${match.index}`));
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < textWithCurrencyProtected.length) {
    const textChunk = restoreTokens(textWithCurrencyProtected.slice(lastIndex));
    parts.push(...renderFormattedText(textChunk, `txt-${lastIndex}`));
  }

  return parts;
}

/**
 * Helper to render bold (**...**) and italic (*...*) in text chunks
 */
function renderFormattedText(text: string, keyPrefix: string): React.ReactNode[] {
  // Simple bold and italic support
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
  return boldParts.map((bPart, bIdx) => {
    if (bPart.startsWith('**') && bPart.endsWith('**')) {
      return (
        <strong key={`${keyPrefix}-b-${bIdx}`} className="font-bold text-amber-300">
          {bPart.slice(2, -2)}
        </strong>
      );
    }
    const italicParts = bPart.split(/(\*[^*]+\*)/g);
    return italicParts.map((iPart, iIdx) => {
      if (iPart.startsWith('*') && iPart.endsWith('*')) {
        return (
          <em key={`${keyPrefix}-i-${bIdx}-${iIdx}`} className="italic text-slate-300">
            {iPart.slice(1, -1)}
          </em>
        );
      }
      return iPart;
    });
  });
}

/**
 * Checks if a string contains a markdown table structure and parses it.
 */
function parseMarkdownTable(lines: string[]): ParsedTable | null {
  if (lines.length < 2) return null;

  // Header line
  const headerLine = lines[0].trim();
  const sepLine = lines[1].trim();

  if (!headerLine.startsWith('|') || !sepLine.startsWith('|')) return null;

  const sepCols = sepLine.split('|').map((s) => s.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
  const isSeparator = sepCols.every((col) => /^:?-+:?$/.test(col));
  if (!isSeparator || sepCols.length === 0) return null;

  const alignments: ('left' | 'center' | 'right')[] = sepCols.map((col) => {
    const left = col.startsWith(':');
    const right = col.endsWith(':');
    if (left && right) return 'center';
    if (right) return 'right';
    return 'left';
  });

  const headers = headerLine
    .split('|')
    .map((s) => s.trim())
    .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);

  const rows: string[][] = [];
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || !line.startsWith('|')) continue;
    const cols = line
      .split('|')
      .map((s) => s.trim())
      .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
    rows.push(cols);
  }

  return { headers, alignments, rows };
}

/**
 * Splits raw content into text, math blocks, and tables.
 */
function parseBlocks(rawText: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = rawText.split('\n');
  let currentLines: string[] = [];

  const flushCurrentText = () => {
    if (currentLines.length > 0) {
      const text = currentLines.join('\n').trim();
      if (text) {
        blocks.push({ type: 'text', content: text });
      }
      currentLines = [];
    }
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();

    // Check for display math $$...$$
    if (line.startsWith('$$')) {
      flushCurrentText();
      let mathContent = '';
      if (line.endsWith('$$') && line.length > 4) {
        mathContent = line.slice(2, -2);
        i++;
      } else {
        mathContent = line.slice(2) + '\n';
        i++;
        while (i < lines.length && !lines[i].trim().endsWith('$$')) {
          mathContent += lines[i] + '\n';
          i++;
        }
        if (i < lines.length) {
          mathContent += lines[i].trim().replace(/\$\$$/, '');
          i++;
        }
      }
      blocks.push({ type: 'math-block', latex: mathContent.trim() });
      continue;
    }

    // Check for Markdown table beginning
    if (line.startsWith('|') && i + 1 < lines.length && lines[i + 1].trim().startsWith('|')) {
      const tableLines: string[] = [line];
      let j = i + 1;
      while (j < lines.length && lines[j].trim().startsWith('|')) {
        tableLines.push(lines[j]);
        j++;
      }

      const parsed = parseMarkdownTable(tableLines);
      if (parsed) {
        flushCurrentText();
        blocks.push({ type: 'table', table: parsed });
        i = j;
        continue;
      }
    }

    currentLines.push(lines[i]);
    i++;
  }

  flushCurrentText();
  return blocks;
}

export const MathView: React.FC<MathViewProps> = ({
  latex,
  math,
  text,
  formula = false,
  block = false,
  inline = false,
  children,
  className = '',
}) => {
  const rawInput = (children || latex || math || text || '').toString();

  // Pure single formula mode
  if (formula || latex || math) {
    const formulaStr = latex || math || rawInput;
    const isBlock = block || (!inline && formulaStr.includes('\\'));
    const html = renderKatex(formulaStr, isBlock);

    if (inline && !block) {
      return (
        <span
          className={`font-tech-mono inline-math ${className}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
    return (
      <div
        className={`font-tech-mono my-2 py-1 overflow-x-auto text-center ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // Parse structured blocks (text, tables, math blocks)
  const blocks = useMemo(() => parseBlocks(rawInput), [rawInput]);

  if (blocks.length === 0) {
    return null;
  }

  // Inline mode with no complex blocks
  if (inline && blocks.length === 1 && blocks[0].type === 'text') {
    return (
      <span className={`inline ${className}`}>
        {renderInlineContent(blocks[0].content)}
      </span>
    );
  }

  return (
    <div className={`space-y-3.5 leading-relaxed ${className}`}>
      {blocks.map((b, idx) => {
        if (b.type === 'math-block') {
          const html = renderKatex(b.latex, true);
          return (
            <div
              key={`math-block-${idx}`}
              className="my-3 py-2 px-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center overflow-x-auto shadow-inner"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        if (b.type === 'table') {
          const { headers, alignments, rows } = b.table;
          return (
            <div
              key={`table-${idx}`}
              className="exam-table-card my-4 overflow-hidden rounded-2xl border-2 shadow-xl"
            >
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs sm:text-sm font-sans">
                  <thead>
                    <tr className="exam-table-header border-b-2 font-semibold">
                      {headers.map((h, hIdx) => {
                        const align = alignments[hIdx] || 'left';
                        const alignClass =
                          align === 'center'
                            ? 'text-center'
                            : align === 'right'
                            ? 'text-right'
                            : 'text-left';
                        return (
                          <th
                            key={`th-${hIdx}`}
                            className={`px-4 py-3 font-tech-mono font-bold tracking-wider uppercase border-r border-slate-700/60 last:border-r-0 ${alignClass}`}
                          >
                            {renderInlineContent(h)}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-tech-mono">
                    {rows.map((row, rIdx) => (
                      <tr
                        key={`tr-${rIdx}`}
                        className={`transition-colors hover:bg-amber-500/10 ${
                          rIdx % 2 === 0 ? 'exam-table-row-even' : 'exam-table-row-odd'
                        }`}
                      >
                        {row.map((cell, cIdx) => {
                          const align = alignments[cIdx] || 'left';
                          const alignClass =
                            align === 'center'
                              ? 'text-center'
                              : align === 'right'
                              ? 'text-right'
                              : 'text-left';
                          return (
                            <td
                              key={`td-${rIdx}-${cIdx}`}
                              className={`exam-table-cell px-4 py-2.5 last:border-r-0 ${alignClass}`}
                            >
                              {renderInlineContent(cell)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }

        // Paragraph text with possible line breaks
        const paragraphs = b.content.split('\n\n');
        return (
          <div key={`txt-${idx}`} className="space-y-2">
            {paragraphs.map((p, pIdx) => {
              const lines = p.split('\n');
              return (
                <p key={`p-${idx}-${pIdx}`}>
                  {lines.map((l, lIdx) => (
                    <React.Fragment key={`l-${idx}-${pIdx}-${lIdx}`}>
                      {renderInlineContent(l)}
                      {lIdx < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MathView;
