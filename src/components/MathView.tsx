import React from 'react';

/**
 * Universal compatibility MathView component.
 * Supports all props (latex, math, text, formula, block, inline, children, className)
 * so that both local builds and external deployments (Vercel, GitHub) always compile smoothly.
 */
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

export const MathView: React.FC<MathViewProps> = ({
  latex,
  math,
  text,
  children,
  inline = false,
  block = false,
  className = '',
}) => {
  const content = children || latex || math || text || '';
  if (inline && !block) {
    return <span className={`font-tech-mono ${className}`}>{content}</span>;
  }
  return <div className={`font-tech-mono ${className}`}>{content}</div>;
};

export default MathView;
