import React, { useState } from 'react';
import { Sun, Moon, Maximize2, Minimize2, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PSAD_NOV_2024_SITUATIONS } from '../data/situationImages';
import { getMstcNov2025ImageUrl } from '../data/mstcNov2025Images';

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

  // Inspect figureSvg for MSTC November 2025 illustrations
  const isMstcNov25 =
    figureSvg.includes('MSTCNov2025') ||
    (figureCaption && figureCaption.includes('MSTC Nov 2025'));
  let mstcNov25Num: number | null = null;
  if (isMstcNov25) {
    const match =
      figureSvg.match(/MSTC[-_]November[-_]202[45][-_](\d+)\.png/i) ||
      figureSvg.match(/Figure\s*(\d+)/i) ||
      (figureCaption && figureCaption.match(/Figure\s*(\d+)/i));
    if (match && match[1]) {
      mstcNov25Num = parseInt(match[1], 10);
    }
  }

  // Inspect figureSvg for MSTC November 2024 illustrations
  const isMstcNov =
    !isMstcNov25 &&
    (figureSvg.includes('MSTC_November_2024_') || figureSvg.includes('MSTCNov2024'));
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

  // Inspect figureSvg for PSAD November 2024 illustrations
  const isPsadNov = figureSvg.includes('PSAD_November_2024_') || figureSvg.includes('PSADNov2024');
  let psadNovSitNum: number | null = null;
  if (isPsadNov) {
    const match = figureSvg.match(/PSAD[-_]November[-_]2024[-_](\d+)/i);
    if (match && match[1]) {
      psadNovSitNum = parseInt(match[1], 10);
    }
  }

  // Inspect figureSvg for MSTC April 2025 illustrations
  const isMstcApr25 =
    figureSvg.includes('MSTC_April_2025_') ||
    figureSvg.includes('MSTCApr2025') ||
    (figureCaption && figureCaption.includes('Figure') && figureCaption.includes('3: Stacks'));
  let mstcApr25Num: number | null = null;
  if (isMstcApr25) {
    const match = figureSvg.match(/MSTC[-_]April[-_]2025[-_](\d+)/i);
    if (match && match[1]) {
      mstcApr25Num = parseInt(match[1], 10);
    } else if (figureCaption) {
      const capMatch = figureCaption.match(/Figure\s*(\d+)/i);
      if (capMatch && capMatch[1]) {
        mstcApr25Num = parseInt(capMatch[1], 10);
      }
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
          {psadNovSitNum && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              PSAD Nov 2024 · Situation {psadNovSitNum} Figure
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
          {mstcApr25Num && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              MSTC Apr 2025 · Q{mstcApr25Num} Illustration
            </span>
          )}
          {mstcNov25Num && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
              MSTC Nov 2025 · Q{mstcNov25Num} Illustration
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
        ) : mstcNov25Num ? (
          // Optimized multi-source loader for MSTC November 2025 questions:
          // 1. Tries Vite-bundled asset URL (guaranteed 100% reliable on Vercel deployments)
          // 2. Tries /images/MSTCNov2025/MSTC_November_2024_{X}.png (Vite public folder)
          // 3. Tries /images/MSTCNov2025/MSTC_November_2025_{X}.png
          // 4. Tries /src/images/MSTCNov2025/MSTC_November_2024_{X}.png
          // 5. Tries /src/images/MSTCNov2025/MSTC_November_2025_{X}.png
          <div className={`overflow-x-auto flex justify-center w-full py-2 ${isZoomed ? 'max-w-4xl py-4' : ''}`}>
            <img
              src={getMstcNov2025ImageUrl(mstcNov25Num)}
              alt={figureCaption || `MSTC November 2025 Question ${mstcNov25Num} Illustration`}
              className="max-w-xl w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                const tried = target.getAttribute('data-load-phase') || 'phase-1';
                if (tried === 'phase-1') {
                  target.setAttribute('data-load-phase', 'phase-2');
                  target.src = `/images/MSTCNov2025/MSTC_November_2024_${mstcNov25Num}.png`;
                } else if (tried === 'phase-2') {
                  target.setAttribute('data-load-phase', 'phase-3');
                  target.src = `/images/MSTCNov2025/MSTC_November_2025_${mstcNov25Num}.png`;
                } else if (tried === 'phase-3') {
                  target.setAttribute('data-load-phase', 'phase-4');
                  target.src = `/src/images/MSTCNov2025/MSTC_November_2024_${mstcNov25Num}.png`;
                } else if (tried === 'phase-4') {
                  target.setAttribute('data-load-phase', 'phase-5');
                  target.src = `/src/images/MSTCNov2025/MSTC_November_2025_${mstcNov25Num}.png`;
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
        ) : psadNovSitNum && PSAD_NOV_2024_SITUATIONS[psadNovSitNum] ? (
          // Dedicated multi-source loader for PSAD November 2024 situations:
          // 1. Tries bundled Vite asset URL (dist/assets/...)
          // 2. Tries /images/PSADNov2024/{filename} (public directory)
          // 3. Tries /images/{filename}
          // 4. Tries /src/images/PSADNov2024/{filename}
          (() => {
            const sit = PSAD_NOV_2024_SITUATIONS[psadNovSitNum];
            return (
              <div
                className={`overflow-x-auto flex ${
                  sit.files.length > 1 ? 'flex-col md:flex-row gap-4' : 'flex-col'
                } items-center justify-center w-full py-2 ${isZoomed ? 'max-w-5xl py-4' : ''}`}
              >
                {sit.files.map((f) => (
                  <div
                    key={f.filename}
                    className={`flex flex-col items-center justify-center w-full ${
                      sit.files.length > 1 ? 'flex-1 max-w-lg' : 'max-w-xl'
                    }`}
                  >
                    <img
                      src={f.bundledUrl || `/src/images/PSADNov2024/${f.filename}`}
                      alt={f.subCaption || sit.caption}
                      className="max-w-full w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200"
                      loading="eager"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const tried = target.getAttribute('data-load-phase') || 'phase-1';
                        if (tried === 'phase-1') {
                          target.setAttribute('data-load-phase', 'phase-2');
                          target.src = `/images/PSADNov2024/${f.filename}`;
                        } else if (tried === 'phase-2') {
                          target.setAttribute('data-load-phase', 'phase-3');
                          target.src = `/images/${f.filename}`;
                        } else if (tried === 'phase-3') {
                          target.setAttribute('data-load-phase', 'phase-4');
                          target.src = `/src/images/PSADNov2024/${f.filename}`;
                        }
                      }}
                    />
                    {f.subCaption && sit.files.length > 1 && (
                      <span className="text-[11px] font-tech-mono text-slate-500 mt-1.5 text-center font-medium">
                        {f.subCaption}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            );
          })()
        ) : (
          <div
            className={`overflow-x-auto flex justify-center w-full ${isZoomed ? 'max-w-5xl py-4' : ''}`}
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
