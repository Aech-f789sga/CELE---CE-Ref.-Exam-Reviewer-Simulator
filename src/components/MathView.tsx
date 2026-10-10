import React, { useMemo } from 'react';
import {
  parseMathText,
  renderLatexToHtml,
  toLatexEquation,
} from '../utils/latexParser';

interface MathViewProps {
  children?: string | null;
  text?: string | null;
  block?: boolean;
  formula?: boolean;
  className?: string;
}

/**
 * Universal LaTeX and Math renderer for Civil Engineering formulas,
 * equations, variables, choices, questions, and solution steps.
 */
export const MathView: React.FC<MathViewProps> = ({
  children,
  text,
  block = false,
  formula = false,
  className = '',
}) => {
  const content = text ?? children ?? '';

  // If the whole string is meant to be a pure formula (e.g. governing formula list or equation)
  const renderedHtml = useMemo(() => {
    if (!content || typeof content !== 'string') return null;

    if (formula) {
      const latex = toLatexEquation(content);
      return renderLatexToHtml(latex, block);
    }
    return null;
  }, [content, formula, block]);

  // If formula mode is active, render directly
  if (formula && renderedHtml) {
    return (
      <span
        className={`math-rendered-formula inline-block ${block ? 'my-1.5 w-full text-center overflow-x-auto py-1' : ''} ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  // Otherwise, handle mixed narrative text containing math equations or LaTeX
  const lines = useMemo(() => {
    if (!content || typeof content !== 'string') return [];
    return content.split('\n');
  }, [content]);

  if (!content) return null;

  return (
    <span className={`math-view-container ${className}`}>
      {lines.map((line, lineIdx) => {
        const segments = parseMathText(line);

        return (
          <React.Fragment key={lineIdx}>
            {lineIdx > 0 && <br />}
            {segments.map((seg, segIdx) => {
              if (seg.type === 'block-math') {
                return (
                  <span
                    key={segIdx}
                    className="block my-2 w-full text-center overflow-x-auto py-1 text-amber-300 font-semibold"
                    dangerouslySetInnerHTML={{ __html: seg.html }}
                  />
                );
              }

              if (seg.type === 'inline-math') {
                return (
                  <span
                    key={segIdx}
                    className="inline-math-item inline-block px-0.5 text-amber-300 font-medium"
                    dangerouslySetInnerHTML={{ __html: seg.html }}
                  />
                );
              }

              return (
                <span key={segIdx} className="text-segment">
                  {seg.content}
                </span>
              );
            })}
          </React.Fragment>
        );
      })}
    </span>
  );
};
