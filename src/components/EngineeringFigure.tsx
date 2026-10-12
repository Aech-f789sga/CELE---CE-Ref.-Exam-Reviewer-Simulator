import React, { useState } from 'react';
import { Sun, Moon, Maximize2, Minimize2, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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
  const { themeConfig, isHighContrastFigures } = useTheme();

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

  // Inspect figureSvg: if it contains an image reference for PSAD April 2024,
  // extract the situation number so we can support both local files (/src/images/...)
  // and cloud fallback (https://i.postimg.cc/...) with smooth image error handling.
  const isPostimg = figureSvg.includes('PSAD-April-2024-') || figureSvg.includes('PSAD_April_2024_');
  let situationNum: number | null = null;
  if (isPostimg) {
    const match = figureSvg.match(/PSAD[-_]April[-_]2024[-_](\d+)\.png/i);
    if (match && match[1]) {
      situationNum = parseInt(match[1], 10);
    }
  }

  // Inspect figureSvg for MSTC November 2024 illustrations
  const isMstcNov = figureSvg.includes('MSTC_November_2024_') || figureSvg.includes('MSTCNov2024');
  let mstcNum: number | null = null;
  if (isMstcNov) {
    const match = figureSvg.match(/MSTC[-_]November[-_]2024[-_](\d+)\.png/i);
    if (match && match[1]) {
      mstcNum = parseInt(match[1], 10);
    }
  }

  // Inspect figureSvg for HPGE November 2024 illustrations
  const isHpgeNov = figureSvg.includes('HPGE_November_2024_') || figureSvg.includes('HPGENov2024');
  let hpgeNum: number | null = null;
  if (isHpgeNov) {
    const match = figureSvg.match(/HPGE[-_]November[-_]2024[-_](\d+)\.png/i);
    if (match && match[1]) {
      hpgeNum = parseInt(match[1], 10);
    }
  }

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden my-4 ${
        bgStyles[mode]
      } ${className} ${
        isZoomed
          ? 'fixed inset-4 z-50 flex flex-col justify-between p-6 max-w-5xl mx-auto overflow-y-auto'
          : 'p-4'
      }`}
    >
      {/* Top Header Controls: Mode Selector & Zoom */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-current/15 text-xs font-tech-mono">
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1 font-semibold tracking-wider uppercase opacity-80">
            <Eye className="w-3.5 h-3.5" />
            <span>Illustration Contrast</span>
          </span>
          {situationNum && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Situation {situationNum} Figure
            </span>
          )}
          {mstcNum && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
              MSTC Nov 2024 · Q{mstcNum} Illustration
            </span>
          )}
          {hpgeNum && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              HPGE Nov 2024 · Q{hpgeNum} Illustration
            </span>
          )}
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
            className="p-1.5 rounded-lg bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 hover:text-white transition-all ml-1 cursor-pointer"
          >
            {isZoomed ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Image / SVG Container with subtle drafting grid overlay */}
      <div
        className={`relative flex items-center justify-center p-3 rounded-xl transition-all ${
          mode === 'paper' || isHighContrastFigures ? 'bg-[#f8fafc]' : 'bg-[#030914]/80'
        }`}
        style={{
          backgroundImage: gridOverlay[mode],
        }}
      >
        {situationNum ? (
          // Optimized multi-source loader for situations 1-17 and 20-21:
          // 1. Tries /src/images/PSAD_April_2024_{X}.png (as user uploaded in src/images/)
          // 2. Tries /images/PSAD_April_2024_{X}.png (Vite standard public assets)
          // 3. Fallbacks to cloud hosted postimg CDN image
          <div className={`overflow-x-auto flex justify-center w-full py-2 ${isZoomed ? 'max-w-3xl py-4' : ''}`}>
            <img
              src={`/src/images/PSAD_April_2024_${situationNum}.png`}
              alt={figureCaption || `PSAD April 2024 Situation ${situationNum} Illustration`}
              className="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                const tried = target.getAttribute('data-load-phase') || 'phase-1';
                if (tried === 'phase-1') {
                  target.setAttribute('data-load-phase', 'phase-2');
                  target.src = `/images/PSAD_April_2024_${situationNum}.png`;
                } else if (tried === 'phase-2') {
                  target.setAttribute('data-load-phase', 'phase-3');
                  // Extract original cloud url from figureSvg
                  const cloudMatch = figureSvg.match(/https:\/\/[^"\s]+/);
                  if (cloudMatch && cloudMatch[0]) {
                    target.src = cloudMatch[0];
                  }
                }
              }}
            />
          </div>
        ) : mstcNum ? (
          // Optimized multi-source loader for MSTC November 2024 questions:
          // 1. Tries /src/images/MSTCNov2024/MSTC_November_2024_{X}.png
          // 2. Tries /images/MSTCNov2024/MSTC_November_2024_{X}.png
          // 3. Tries /images/MSTC_November_2024_{X}.png
          <div className={`overflow-x-auto flex justify-center w-full py-2 ${isZoomed ? 'max-w-4xl py-4' : ''}`}>
            <img
              src={`/src/images/MSTCNov2024/MSTC_November_2024_${mstcNum}.png`}
              alt={figureCaption || `MSTC November 2024 Question ${mstcNum} Illustration`}
              className="max-w-xl w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget;
                const tried = target.getAttribute('data-load-phase') || 'phase-1';
                if (tried === 'phase-1') {
                  target.setAttribute('data-load-phase', 'phase-2');
                  target.src = `/images/MSTCNov2024/MSTC_November_2024_${mstcNum}.png`;
                } else if (tried === 'phase-2') {
                  target.setAttribute('data-load-phase', 'phase-3');
                  target.src = `/images/MSTC_November_2024_${mstcNum}.png`;
                }
              }}
            />
          </div>
        ) : hpgeNum ? (
          // Multi-source loader for HPGE November 2024 illustrations:
          // 1. Tries /src/images/HPGENov2024/HPGE_November_2024_{X}.png
          // 2. Tries /images/HPGENov2024/HPGE_November_2024_{X}.png
          // 3. Tries /images/HPGE_November_2024_{X}.png
          // 4. Tries /src/images/HPGE_November_2024_{X}.png
          <div className={`overflow-x-auto flex justify-center w-full py-2 ${isZoomed ? 'max-w-4xl py-4' : ''}`}>
            <img
              src={`/src/images/HPGENov2024/HPGE_November_2024_${hpgeNum}.png`}
              alt={figureCaption || `HPGE November 2024 Question ${hpgeNum} Illustration`}
              className="max-w-xl w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget;
                const tried = target.getAttribute('data-load-phase') || 'phase-1';
                if (tried === 'phase-1') {
                  target.setAttribute('data-load-phase', 'phase-2');
                  target.src = `/images/HPGENov2024/HPGE_November_2024_${hpgeNum}.png`;
                } else if (tried === 'phase-2') {
                  target.setAttribute('data-load-phase', 'phase-3');
                  target.src = `/images/HPGE_November_2024_${hpgeNum}.png`;
                } else if (tried === 'phase-3') {
                  target.setAttribute('data-load-phase', 'phase-4');
                  target.src = `/src/images/HPGE_November_2024_${hpgeNum}.png`;
                }
              }}
            />
          </div>
        ) : (
          <div
            className={`overflow-x-auto flex justify-center w-full ${isZoomed ? 'max-w-2xl py-4' : ''}`}
            dangerouslySetInnerHTML={{ __html: figureSvg }}
          />
        )}
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
            className="px-4 py-1.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-tech-mono hover:bg-slate-700 font-semibold cursor-pointer"
          >
            Close Fullscreen View
          </button>
        </div>
      )}
    </div>
  );
};
