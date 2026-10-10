import React, { useState } from 'react';
import { Sun, Moon, Maximize2, Minimize2, Eye } from 'lucide-react';

interface EngineeringFigureProps {
  figureSvg: string;
  figureCaption?: string;
  className?: string;
  initialMode?: 'blueprint' | 'paper' | 'slate';
}

export const EngineeringFigure: React.FC<EngineeringFigureProps> = ({
  figureSvg,
  figureCaption,
  className = '',
  initialMode = 'paper',
}) => {
  const [mode, setMode] = useState<'blueprint' | 'paper' | 'slate'>(initialMode);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Background styles
  const bgStyles = {
    blueprint: 'bg-[#091528] text-slate-100 border-[#1e3a5f] shadow-[0_4px_20px_rgba(0,0,0,0.5)]',
    slate: 'bg-slate-950 text-slate-100 border-slate-800 shadow-inner',
    paper: 'bg-white text-slate-900 border-slate-300 shadow-md',
  };

  const gridOverlay = {
    blueprint:
      'radial-gradient(circle, rgba(56,189,248,0.12) 1px, transparent 1px) 0 0 / 16px 16px',
    slate:
      'radial-gradient(circle, rgba(148,163,184,0.08) 1px, transparent 1px) 0 0 / 16px 16px',
    paper:
      'radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px) 0 0 / 16px 16px',
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden my-4 ${
        bgStyles[mode]
      } ${className} ${isZoomed ? 'fixed inset-4 z-50 flex flex-col justify-between p-6 max-w-5xl mx-auto overflow-y-auto' : 'p-4'}`}
    >
      {/* Top Header Controls: Mode Selector & Zoom */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-current/15 text-xs font-tech-mono">
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1 font-semibold tracking-wider uppercase opacity-80">
            <Eye className="w-3.5 h-3.5" />
            <span>Illustration Contrast</span>
          </span>
        </div>

        {/* Contrast / Background Mode Switcher */}
        <div className="flex items-center space-x-1.5">
          <button
            type="button"
            onClick={() => setMode('blueprint')}
            title="Navy Blueprint Mode (High Contrast)"
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-all ${
              mode === 'blueprint'
                ? 'bg-sky-500 text-white shadow-sm'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>Blueprint</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('paper')}
            title="Crisp Drafting Paper (White High Contrast)"
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-all ${
              mode === 'paper'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
            }`}
          >
            <Sun className="w-3 h-3 text-amber-500" />
            <span>White Paper</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('slate')}
            title="CAD Dark Mode"
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-all ${
              mode === 'slate'
                ? 'bg-slate-700 text-white shadow-sm'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
            }`}
          >
            <Moon className="w-3 h-3 text-slate-300" />
            <span>Dark</span>
          </button>

          {/* Zoom toggle button */}
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            title={isZoomed ? 'Exit Fullscreen' : 'Enlarge Illustration'}
            className="p-1.5 rounded-lg bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 hover:text-white transition-all ml-1"
          >
            {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* SVG Container with subtle drafting grid overlay */}
      <div
        className={`relative flex items-center justify-center p-3 rounded-xl transition-all ${
          mode === 'paper' ? 'bg-[#f8fafc]' : 'bg-[#030914]/80'
        }`}
        style={{
          backgroundImage: gridOverlay[mode],
        }}
      >
        <div
          className={`overflow-x-auto flex justify-center w-full ${isZoomed ? 'max-w-2xl py-4' : ''}`}
          dangerouslySetInnerHTML={{ __html: figureSvg }}
        />
      </div>

      {/* Figure Caption */}
      {figureCaption && (
        <div className="mt-3 pt-2 text-center text-xs font-tech-mono tracking-wide opacity-85 border-t border-current/10">
          <span className="font-semibold text-sky-400">NOTE:</span> {figureCaption}
        </div>
      )}

      {/* Close Zoom Button if Fullscreen */}
      {isZoomed && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            className="px-4 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-tech-mono hover:bg-slate-700 font-semibold"
          >
            Close Fullscreen View
          </button>
        </div>
      )}
    </div>
  );
};
