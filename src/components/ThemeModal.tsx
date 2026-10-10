import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  THEME_CONFIGS,
  FONT_OPTIONS,
  FONT_SIZE_OPTIONS,
  AppThemeId,
  FontFamilyId,
  FontSizeId,
} from '../types/theme';
import {
  Palette,
  Type,
  Sun,
  Moon,
  Check,
  X,
  RotateCcw,
  Sparkles,
  Sliders,
  Eye,
  ShieldCheck,
  Sparkle,
} from 'lucide-react';

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeModal: React.FC<ThemeModalProps> = ({ isOpen, onClose }) => {
  const {
    themeId,
    fontId,
    fontSizeId,
    isHighContrastFigures,
    textOutlineMode,
    themeConfig,
    setThemeId,
    setFontId,
    setFontSizeId,
    setIsHighContrastFigures,
    setTextOutlineMode,
    resetToDefaults,
  } = useTheme();

  const [activeTab, setActiveTab] = useState<'themes' | 'fonts' | 'display'>('themes');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors"
        style={{
          backgroundColor: themeConfig.bgCard,
          borderColor: themeConfig.border,
          color: themeConfig.textPrimary,
        }}
      >
        {/* Header */}
        <div
          className="px-6 py-4 border-b flex items-center justify-between"
          style={{ borderColor: themeConfig.border }}
        >
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
              style={{
                backgroundColor: themeConfig.accentBadge,
                color: themeConfig.accent,
                border: `1px solid ${themeConfig.accent}40`,
              }}
            >
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">Theme & Typography Customizer</h2>
              <p className="text-xs" style={{ color: themeConfig.textMuted }}>
                Personalize board exam color schemes, reading fonts, and guaranteed high-contrast outlines
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={resetToDefaults}
              title="Reset all settings to original theme"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors hover:opacity-80"
              style={{
                borderColor: themeConfig.border,
                color: themeConfig.textSecondary,
                backgroundColor: themeConfig.bgCardSubtle,
              }}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Original</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center border hover:opacity-75 transition-colors"
              style={{
                borderColor: themeConfig.border,
                color: themeConfig.textSecondary,
              }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab switcher */}
        <div
          className="flex border-b px-6 space-x-4 text-xs font-semibold"
          style={{ borderColor: themeConfig.border, backgroundColor: themeConfig.bgCardSubtle }}
        >
          <button
            onClick={() => setActiveTab('themes')}
            className={`py-3 flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'themes' ? 'border-current font-bold' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            style={{ color: activeTab === 'themes' ? themeConfig.accent : themeConfig.textSecondary }}
          >
            <Palette className="w-4 h-4" />
            <span>Color Themes ({Object.keys(THEME_CONFIGS).length})</span>
          </button>

          <button
            onClick={() => setActiveTab('fonts')}
            className={`py-3 flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'fonts' ? 'border-current font-bold' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            style={{ color: activeTab === 'fonts' ? themeConfig.accent : themeConfig.textSecondary }}
          >
            <Type className="w-4 h-4" />
            <span>Typography & Fonts ({FONT_OPTIONS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('display')}
            className={`py-3 flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'display' ? 'border-current font-bold' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            style={{ color: activeTab === 'display' ? themeConfig.accent : themeConfig.textSecondary }}
          >
            <Sliders className="w-4 h-4" />
            <span>Contrast Outline & Scale</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: THEMES */}
          {activeTab === 'themes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: themeConfig.textMuted }}>
                  Select Atmosphere & Workspace Palette
                </span>
                <span className="text-xs font-tech-mono" style={{ color: themeConfig.textMuted }}>
                  Currently Active: <strong style={{ color: themeConfig.accent }}>{themeConfig.name}</strong>
                </span>
              </div>

              {/* Informational banner about contrast safety */}
              <div
                className="p-3 rounded-xl border flex items-center space-x-3 text-xs leading-relaxed"
                style={{
                  backgroundColor: themeConfig.bgCardSubtle,
                  borderColor: themeConfig.border,
                  color: themeConfig.textSecondary,
                }}
              >
                <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: themeConfig.accent }} />
                <span>
                  <strong>High-Contrast Text Protection Active:</strong> When switching themes, all body fonts, question headers, and numerical options dynamically adapt with anti-glare contrast outlines so text never blends into background colors.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {Object.values(THEME_CONFIGS).map((item) => {
                  const isSelected = themeId === item.id;
                  const isOriginal = item.id === 'engineering_dark';
                  return (
                    <button
                      key={item.id}
                      onClick={() => setThemeId(item.id as AppThemeId)}
                      className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden group flex flex-col justify-between ${
                        isSelected ? 'ring-2 shadow-lg' : 'hover:border-opacity-100 hover:scale-[1.01]'
                      }`}
                      style={{
                        backgroundColor: item.bgCard,
                        borderColor: isSelected ? item.accent : item.border,
                        color: item.textPrimary,
                      }}
                    >
                      {/* Color Preview Swatches */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1.5">
                          <span
                            className="w-4 h-4 rounded-full border shadow-sm"
                            style={{ backgroundColor: item.bgPage, borderColor: item.border }}
                            title="Page Background"
                          />
                          <span
                            className="w-4 h-4 rounded-full border shadow-sm"
                            style={{ backgroundColor: item.bgCardSubtle, borderColor: item.border }}
                            title="Card Background"
                          />
                          <span
                            className="w-4 h-4 rounded-full shadow-sm"
                            style={{ backgroundColor: item.accent }}
                            title="Accent Color"
                          />
                        </div>

                        <div className="flex items-center space-x-1">
                          {isOriginal && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                              style={{
                                backgroundColor: item.accentBadge,
                                borderColor: `${item.accent}60`,
                                color: item.accent,
                              }}
                            >
                              ORIGINAL
                            </span>
                          )}
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                            style={{
                              backgroundColor: item.category === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.7)',
                              borderColor: item.border,
                              color: item.textSecondary,
                            }}
                          >
                            {item.category === 'dark' ? 'Dark' : 'Light Paper'}
                          </span>
                          {isSelected && (
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                              style={{ backgroundColor: item.accent, color: item.accentText }}
                            >
                              <Check className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-sm tracking-wide flex items-center space-x-1.5">
                          <span>{item.name}</span>
                        </h3>
                        <p className="text-xs mt-1 leading-relaxed opacity-85" style={{ color: item.textSecondary }}>
                          {item.description}
                        </p>
                      </div>

                      {/* Accent pill bottom */}
                      <div className="mt-3 pt-2.5 border-t flex items-center justify-between text-[11px]" style={{ borderColor: `${item.border}80` }}>
                        <span style={{ color: item.textMuted }}>Accent Tone:</span>
                        <span className="font-semibold" style={{ color: item.accent }}>
                          {item.accentName}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: FONTS */}
          {activeTab === 'fonts' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: themeConfig.textMuted }}>
                    Choose Primary Reading & Exam Typeface
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: themeConfig.textSecondary }}>
                    Includes classic <strong>Arial</strong>, modern geometric sans, official formal serifs, and technical engineering monospaces.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {FONT_OPTIONS.map((f) => {
                  const isSelected = fontId === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setFontId(f.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected ? 'ring-2 shadow-md' : 'hover:opacity-95 hover:scale-[1.005]'
                      }`}
                      style={{
                        backgroundColor: themeConfig.bgCardSubtle,
                        borderColor: isSelected ? themeConfig.accent : themeConfig.border,
                        color: themeConfig.textPrimary,
                      }}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span
                            className="font-bold text-base"
                            style={{ fontFamily: f.familyCss }}
                          >
                            {f.name}
                          </span>
                          <span
                            className="text-[10px] uppercase font-tech-mono px-2 py-0.5 rounded-md border"
                            style={{
                              borderColor: themeConfig.border,
                              color: themeConfig.textMuted,
                              backgroundColor: themeConfig.bgCard,
                            }}
                          >
                            {f.category}
                          </span>
                          {f.id === 'arnie' && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{
                                backgroundColor: themeConfig.accentBadge,
                                color: themeConfig.accent,
                              }}
                            >
                              Requested • Arnie Font
                            </span>
                          )}
                          {f.id === 'arial' && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{
                                backgroundColor: themeConfig.accentBadge,
                                color: themeConfig.accent,
                              }}
                            >
                              Requested • Arial
                            </span>
                          )}
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: themeConfig.textMuted }}>
                          {f.description}
                        </p>
                        {/* Live sample preview */}
                        <div
                          className="mt-2 text-sm p-2 rounded-lg border italic"
                          style={{
                            fontFamily: f.familyCss,
                            backgroundColor: themeConfig.bgCard,
                            borderColor: themeConfig.border,
                            color: themeConfig.textSecondary,
                          }}
                        >
                          "{f.sample}"
                        </div>
                      </div>

                      <div className="flex items-center sm:self-center">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                            isSelected ? 'shadow-sm' : 'opacity-40'
                          }`}
                          style={{
                            backgroundColor: isSelected ? themeConfig.accent : 'transparent',
                            borderColor: isSelected ? themeConfig.accent : themeConfig.border,
                            color: themeConfig.accentText,
                          }}
                        >
                          {isSelected && <Check className="w-4 h-4" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: DISPLAY SCALING, CONTRAST OUTLINE & FIGURE BACKING */}
          {activeTab === 'display' && (
            <div className="space-y-6">
              {/* Text Outline & High Contrast Feature */}
              <div
                className="p-4 rounded-2xl border space-y-3"
                style={{
                  backgroundColor: themeConfig.bgCardSubtle,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4" style={{ color: themeConfig.accent }} />
                      <span className="text-sm font-bold">Contrast Edge Outline on Texts</span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.2 rounded-full"
                        style={{
                          backgroundColor: themeConfig.accentBadge,
                          color: themeConfig.accent,
                        }}
                      >
                        Requested Feature
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed max-w-lg" style={{ color: themeConfig.textMuted }}>
                      Adds an adaptive anti-glare contrast shadow/outline behind problem statements, titles, and mathematical formulas so letters remain razor-sharp and pop out cleanly regardless of the selected theme background color.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setTextOutlineMode(!textOutlineMode)}
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                    style={{
                      backgroundColor: textOutlineMode ? themeConfig.accent : themeConfig.border,
                    }}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        textOutlineMode ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Font Size Scaling */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: themeConfig.textMuted }}>
                    Question & Problem Statement Font Size
                  </h3>
                  <span className="text-xs font-tech-mono font-bold" style={{ color: themeConfig.accent }}>
                    Scale: {FONT_SIZE_OPTIONS.find((s) => s.id === fontSizeId)?.scalePercent}%
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {FONT_SIZE_OPTIONS.map((size) => {
                    const isSelected = fontSizeId === size.id;
                    return (
                      <button
                        key={size.id}
                        onClick={() => setFontSizeId(size.id)}
                        className={`p-3.5 rounded-xl border text-center transition-all ${
                          isSelected ? 'ring-2 font-bold shadow-sm' : 'hover:opacity-90'
                        }`}
                        style={{
                          backgroundColor: themeConfig.bgCardSubtle,
                          borderColor: isSelected ? themeConfig.accent : themeConfig.border,
                          color: isSelected ? themeConfig.accent : themeConfig.textPrimary,
                        }}
                      >
                        <div className="text-base font-bold">{size.name}</div>
                        <div className="text-xs opacity-75 mt-0.5">{size.scalePercent}%</div>
                        <p className="text-[11px] mt-2 opacity-65 leading-tight" style={{ color: themeConfig.textMuted }}>
                          {size.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* High Contrast Figure Backing */}
              <div
                className="p-4 rounded-2xl border space-y-3"
                style={{
                  backgroundColor: themeConfig.bgCardSubtle,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" style={{ color: themeConfig.accent }} />
                      <span className="text-sm font-bold">High-Contrast Drafting Backplate</span>
                    </div>
                    <p className="text-xs leading-relaxed max-w-lg" style={{ color: themeConfig.textMuted }}>
                      Enforces a clean white architectural card backing on all diagram figures and postimg illustrations for maximum line clarity regardless of your dark theme selection.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsHighContrastFigures(!isHighContrastFigures)}
                    className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                    style={{
                      backgroundColor: isHighContrastFigures ? themeConfig.accent : themeConfig.border,
                    }}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        isHighContrastFigures ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Live Preview Box with Outline Contrast demonstration */}
              <div
                className="p-4 rounded-2xl border space-y-2"
                style={{
                  backgroundColor: themeConfig.bgCard,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="flex items-center justify-between text-xs" style={{ color: themeConfig.textMuted }}>
                  <span>Live Simulator Preview</span>
                  <span className="font-tech-mono">Contrast Outline: {textOutlineMode ? 'ON' : 'OFF'}</span>
                </div>
                <div
                  className={`text-sm font-semibold leading-relaxed ${textOutlineMode ? 'text-contrast-outline' : ''}`}
                >
                  Situation 1 - A force P is applied to move a crate weighing 30 kg.
                </div>
                <div
                  className="text-xs leading-relaxed opacity-90"
                  style={{ color: themeConfig.textSecondary }}
                >
                  Given: w = 1.2 m; h = 0.5 m; Coefficient of static friction μ = 0.25. Determine the maximum force P (N) to maintain equilibrium.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="px-6 py-4 border-t flex items-center justify-between"
          style={{ borderColor: themeConfig.border, backgroundColor: themeConfig.bgCardSubtle }}
        >
          <div className="text-xs flex items-center space-x-2" style={{ color: themeConfig.textMuted }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.accent }} />
            <span>Preferences are automatically saved to your browser session.</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold shadow-md transition-all hover:opacity-90"
            style={{
              backgroundColor: themeConfig.accent,
              color: themeConfig.accentText,
            }}
          >
            Apply & Done
          </button>
        </div>
      </div>
    </div>
  );
};
