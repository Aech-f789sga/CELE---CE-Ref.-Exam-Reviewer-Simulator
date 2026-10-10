import React from 'react';

/**
 * Compatibility shim component.
 * Prevents build crashes on external platforms like Vercel/GitHub
 * if older cached commits or references to MathView exist.
 */
interface MathViewProps {
  latex?: string;
  math?: string;
  text?: string;
  children?: React.ReactNode;
  inline?: boolean;
  className?: string;
}

export const MathView: React.FC<MathViewProps> = ({
  latex,
  math,
  text,
  children,
  inline = false,
  className = '',
}) => {
  const content = children || latex || math || text || '';
  if (inline) {
    return <span className={`font-tech-mono ${className}`}>{content}</span>;
  }
  return <div className={`font-tech-mono ${className}`}>{content}</div>;
};

export default MathView;
