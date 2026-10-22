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
  Image,
  Layers,
  Upload,
  Minus,
  Plus,
  ZoomIn,
  ZoomOut,
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
    fontScale,
    isHighContrastFigures,
    textOutlineMode,
    themeConfig,
    setThemeId,
    setFontId,
    setFontSizeId,
    setFontScale,
    increaseFontScale,
    decreaseFontScale,
    resetFontScale,
    setIsHighContrastFigures,
    setTextOutlineMode,
    resetToDefaults,
  } = useTheme();

  const [activeTab, setActiveTab] = useState<'themes' | 'fonts' | 'display' | 'background'>('themes');
  const [customBg, setCustomBg] = useState<string | null>(() => {
    try { return localStorage.getItem('ce_custom_bg'); } catch { return null; }
  });
  const [mixedThemes, setMixedThemes] = useState<Record<string, AppThemeId>>(() => {
    try {
      const saved = localStorage.getItem('ce_mixed_themes');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  const handleBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setCustomBg(dataUrl);
      try { localStorage.setItem('ce_custom_bg', dataUrl); } catch {}
    };
    reader.readAsDataURL(file);
  };

  const clearCustomBg = () => {
    setCustomBg(null);
    try { localStorage.removeItem('ce_custom_bg'); } catch {}
  };

  const setPanelTheme = (panel: string, theme: AppThemeId) => {
    const next = { ...mixedThemes, [panel]: theme };
    setMixedThemes(next);
    try { localStorage.setItem('ce_mixed_themes', JSON.stringify(next)); } catch {}
  };

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
            <span>Font Scale ({fontScale}%) & Outline</span>
          </button>

          <button
            onClick={() => setActiveTab('background')}
            className={`py-3 flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'background' ? 'border-current font-bold' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            style={{ color: activeTab === 'background' ? themeConfig.accent : themeConfig.textSecondary }}
          >
            <Image className="w-4 h-4" />
            <span>Background & Mix</span>
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
                          {item.id === 'submerged_era' && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide flex items-center space-x-1"
                              style={{
                                backgroundColor: 'rgba(56, 217, 169, 0.2)',
                                borderColor: 'rgba(56, 217, 169, 0.45)',
                                color: '#a5d3cb',
                              }}
                            >
                              <Sparkles className="w-2.5 h-2.5 mr-0.5 text-emerald-300" />
                              <span>3D SUBMERGED ERA</span>
                            </span>
                          )}
                          {item.id === 'particle_flow' && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide flex items-center space-x-1"
                              style={{
                                backgroundColor: 'rgba(56, 189, 248, 0.2)',
                                borderColor: 'rgba(56, 189, 248, 0.45)',
                                color: '#7dd3fc',
                              }}
                            >
                              <Sparkles className="w-2.5 h-2.5 mr-0.5 text-cyan-300" />
                              <span>3D PARTICLES &amp; REACTIVE BG</span>
                            </span>
                          )}
                          {item.id === 'matilda_3d' && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide flex items-center space-x-1"
                              style={{
                                backgroundColor: 'rgba(224, 122, 104, 0.2)',
                                borderColor: 'rgba(224, 122, 104, 0.45)',
                                color: '#f3c8be',
                              }}
                            >
                              <Sparkles className="w-2.5 h-2.5 mr-0.5 text-amber-300" />
                              <span>3D MATILDA</span>
                            </span>
                          )}
                          {item.id === 'terrarium_orb' && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-emerald-500/20 border-emerald-500/40 text-emerald-300 tracking-wide"
                            >
                              3D WORLD
                            </span>
                          )}
                          {item.id === 'aurora_glass' && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-indigo-500/20 border-indigo-500/40 text-indigo-300 tracking-wide"
                            >
                              3D AURORA
                            </span>
                          )}
                          {item.id === 'underwave' && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide flex items-center space-x-1"
                              style={{
                                backgroundColor: 'rgba(250, 30, 78, 0.18)',
                                borderColor: 'rgba(250, 30, 78, 0.5)',
                                color: '#ff8fa5',
                              }}
                            >
                              <Sparkles className="w-2.5 h-2.5 mr-0.5 text-rose-300" />
                              <span>OPERA GX MOD</span>
                            </span>
                          )}
                          {item.id === 'cyberdeck_2077' && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-wide flex items-center space-x-1"
                              style={{
                                backgroundColor: 'rgba(234, 234, 34, 0.16)',
                                borderColor: 'rgba(234, 234, 34, 0.55)',
                                color: '#eaea22',
                              }}
                            >
                              <Sparkles className="w-2.5 h-2.5 mr-0.5" style={{ color: '#eaea22' }} />
                              <span>CYBERDECK · VIDEO + AUDIO</span>
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
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl border"
                style={{ backgroundColor: themeConfig.bgCardSubtle, borderColor: themeConfig.border }}
              >
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: themeConfig.textMuted }}>
                    Choose Primary Reading & Exam Typeface
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: themeConfig.textSecondary }}>
                    Includes classic <strong>Arial</strong>, modern geometric sans, official formal serifs, and technical engineering monospaces.
                  </p>
                </div>

                {/* Quick font scale stepper */}
                <div className="flex items-center space-x-2 self-start sm:self-auto flex-shrink-0">
                  <span className="text-[11px] font-semibold" style={{ color: themeConfig.textMuted }}>Global Scale:</span>
                  <div className="flex items-center space-x-1 p-1 rounded-lg border shadow-sm" style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}>
                    <button
                      type="button"
                      onClick={decreaseFontScale}
                      disabled={fontScale <= 80}
                      className="w-6 h-6 flex items-center justify-center rounded hover:opacity-80 disabled:opacity-30 cursor-pointer"
                      title="Decrease font scale (A-)"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold font-tech-mono px-2" style={{ color: themeConfig.accent }}>
                      {fontScale}%
                    </span>
                    <button
                      type="button"
                      onClick={increaseFontScale}
                      disabled={fontScale >= 140}
                      className="w-6 h-6 flex items-center justify-center rounded hover:opacity-80 disabled:opacity-30 cursor-pointer"
                      title="Increase font scale (A+)"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
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

              {/* Global Font Size Scaling (--app-font-scale) */}
              <div
                className="p-5 rounded-2xl border space-y-4 shadow-sm"
                style={{
                  backgroundColor: themeConfig.bgCardSubtle,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <Sliders className="w-4 h-4" style={{ color: themeConfig.accent }} />
                      <h3 className="text-sm font-bold tracking-tight">Global Font Size Scaling</h3>
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md border font-semibold"
                        style={{
                          backgroundColor: themeConfig.accentBadge,
                          borderColor: `${themeConfig.accent}50`,
                          color: themeConfig.accent,
                        }}
                      >
                        --app-font-scale: {fontScale}%
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: themeConfig.textMuted }}>
                      Dynamically updates the <code className="font-mono text-[11px] px-1 py-0.5 rounded bg-black/20">--app-font-scale</code> CSS variable across all exam questions, formulas, cards, and navigation.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={resetFontScale}
                    disabled={fontScale === 100}
                    className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all hover:opacity-85 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer self-start sm:self-auto"
                    style={{
                      borderColor: themeConfig.border,
                      backgroundColor: themeConfig.bgCard,
                      color: themeConfig.textSecondary,
                    }}
                    title="Reset to 100% standard font scale"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset 100%</span>
                  </button>
                </div>

                {/* Stepper Buttons & Large Readout */}
                <div
                  className="p-3.5 rounded-xl border flex items-center justify-between gap-3"
                  style={{ backgroundColor: themeConfig.bgCard, borderColor: themeConfig.border }}
                >
                  <button
                    type="button"
                    onClick={decreaseFontScale}
                    disabled={fontScale <= 80}
                    className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all hover:scale-105 active:scale-95 disabled:opacity-35 disabled:hover:scale-100 cursor-pointer"
                    style={{
                      backgroundColor: themeConfig.bgCardSubtle,
                      borderColor: themeConfig.border,
                      color: themeConfig.textPrimary,
                    }}
                    title="Decrease font scale by 5% (A-)"
                  >
                    <Minus className="w-4 h-4" />
                    <span>Smaller (A-)</span>
                  </button>

                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-black font-tech-mono tracking-tight" style={{ color: themeConfig.accent }}>
                      {fontScale}%
                    </span>
                    <span className="text-[10px] font-medium" style={{ color: themeConfig.textMuted }}>
                      {fontScale === 100
                        ? 'Standard (Default)'
                        : fontScale < 100
                        ? `${100 - fontScale}% Smaller`
                        : `+${fontScale - 100}% Larger`}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={increaseFontScale}
                    disabled={fontScale >= 140}
                    className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all hover:scale-105 active:scale-95 disabled:opacity-35 disabled:hover:scale-100 cursor-pointer"
                    style={{
                      backgroundColor: themeConfig.bgCardSubtle,
                      borderColor: themeConfig.border,
                      color: themeConfig.textPrimary,
                    }}
                    title="Increase font scale by 5% (A+)"
                  >
                    <span>Larger (A+)</span>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Range Slider for granular control */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px]" style={{ color: themeConfig.textMuted }}>
                    <span>80% Compact</span>
                    <span className="font-tech-mono">Continuous Scaling Slider</span>
                    <span>140% Maximum</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="140"
                    step="5"
                    value={fontScale}
                    onChange={(e) => setFontScale(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-700/50"
                    style={{ accentColor: themeConfig.accent }}
                    title={`Current scale: ${fontScale}%`}
                  />
                </div>

                {/* Quick Preset Buttons */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider block" style={{ color: themeConfig.textMuted }}>
                    Scale Presets:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'small', name: 'Compact', scale: 88, desc: 'Laptops & Split screens' },
                      { id: 'medium', name: 'Standard', scale: 100, desc: 'Balanced default' },
                      { id: 'large', name: 'Comfortable', scale: 112, desc: 'Relaxed reading' },
                      { id: 'xlarge', name: 'High Visibility', scale: 125, desc: 'Formulas & indices' },
                    ].map((preset) => {
                      const isSelected = fontScale === preset.scale;
                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => setFontScale(preset.scale)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            isSelected ? 'ring-2 font-bold shadow-md' : 'hover:opacity-90 hover:scale-[1.02]'
                          }`}
                          style={{
                            backgroundColor: isSelected ? themeConfig.bgCard : themeConfig.bgCardSubtle,
                            borderColor: isSelected ? themeConfig.accent : themeConfig.border,
                            color: isSelected ? themeConfig.accent : themeConfig.textPrimary,
                          }}
                        >
                          <div className="text-xs font-bold flex items-center justify-center space-x-1">
                            <span>{preset.name}</span>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <div className="text-[11px] font-tech-mono opacity-80 mt-0.5">{preset.scale}%</div>
                          <div className="text-[9px] opacity-60 mt-0.5 line-clamp-1">{preset.desc}</div>
                        </button>
                      );
                    })}
                  </div>
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

              {/* Live Preview Box with Outline Contrast & Scaling demonstration */}
              <div
                className="p-4 rounded-2xl border space-y-2.5 transition-all"
                style={{
                  backgroundColor: themeConfig.bgCard,
                  borderColor: themeConfig.border,
                }}
              >
                <div className="flex items-center justify-between text-xs" style={{ color: themeConfig.textMuted }}>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: themeConfig.accent }} />
                    <span className="font-semibold">Live Scaling Preview (Applies Globally)</span>
                  </div>
                  <span className="font-tech-mono">Scale: {fontScale}% · Outline: {textOutlineMode ? 'ON' : 'OFF'}</span>
                </div>
                <div
                  className={`text-sm font-semibold leading-relaxed transition-all ${textOutlineMode ? 'text-contrast-outline' : ''}`}
                >
                  Situation 1 - A force P is applied to move a crate weighing 30 kg.
                </div>
                <div
                  className="text-xs leading-relaxed opacity-90 transition-all"
                  style={{ color: themeConfig.textSecondary }}
                >
                  Given: w = 1.2 m; h = 0.5 m; Coefficient of static friction μ = 0.25. Determine the maximum force P (N) to maintain equilibrium.
                </div>
                <div className="pt-1 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md border" style={{ borderColor: themeConfig.border, backgroundColor: themeConfig.bgCardSubtle, color: themeConfig.textPrimary }}>
                    A. 73.58 N
                  </span>
                  <span className="px-2.5 py-1 rounded-md border font-bold" style={{ borderColor: themeConfig.accent, backgroundColor: themeConfig.accentBadge, color: themeConfig.accent }}>
                    B. 85.40 N (Selected)
                  </span>
                  <span className="px-2.5 py-1 rounded-md border" style={{ borderColor: themeConfig.border, backgroundColor: themeConfig.bgCardSubtle, color: themeConfig.textPrimary }}>
                    C. 98.10 N
                  </span>
                  <span className="px-2.5 py-1 rounded-md border" style={{ borderColor: themeConfig.border, backgroundColor: themeConfig.bgCardSubtle, color: themeConfig.textPrimary }}>
                    D. 112.50 N
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BACKGROUND & THEME MIXING */}
          {activeTab === 'background' && (
            <div className="space-y-6">
              {/* Custom Background Upload */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: themeConfig.textMuted }}>
                  Custom Background Image
                </h3>
                <div
                  className="p-4 rounded-2xl border space-y-3"
                  style={{ backgroundColor: themeConfig.bgCardSubtle, borderColor: themeConfig.border }}
                >
                  {customBg ? (
                    <div className="space-y-3">
                      <div className="relative rounded-xl overflow-hidden h-32">
                        <img src={customBg} alt="Custom background" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">Custom Background Active</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={clearCustomBg}
                          className="px-3 py-1.5 rounded-lg text-xs border transition-colors cursor-pointer"
                          style={{ borderColor: themeConfig.border, color: themeConfig.textSecondary }}
                        >
                          Remove Background
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl border-2 border-dashed cursor-pointer transition-colors hover:opacity-80"
                      style={{ borderColor: themeConfig.border, color: themeConfig.textMuted }}
                    >
                      <Upload className="w-6 h-6" />
                      <span className="text-xs font-medium">Click to upload a background image</span>
                      <span className="text-[10px] opacity-70">JPG, PNG, WEBP supported</span>
                      <input type="file" accept="image/*" onChange={handleBgUpload} className="hidden" />
                    </label>
                  )}
                </div>
              </div>

              {/* Theme Mixing */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: themeConfig.textMuted }}>
                  Mix Themes by Panel
                </h3>
                <p className="text-xs" style={{ color: themeConfig.textSecondary }}>
                  Assign different existing themes to different sections of the app for a personalized mixed look.
                </p>
                <div className="space-y-2">
                  {[
                    { key: 'header', label: 'Header / Navbar' },
                    { key: 'cards', label: 'Exam Cards & Panels' },
                    { key: 'sidebar', label: 'Sidebar / Side Panels' },
                    { key: 'scratchpad', label: 'Scratchpad Chrome' },
                  ].map((panel) => (
                    <div
                      key={panel.key}
                      className="flex items-center justify-between p-3 rounded-xl border"
                      style={{ backgroundColor: themeConfig.bgCardSubtle, borderColor: themeConfig.border }}
                    >
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" style={{ color: themeConfig.accent }} />
                        <span className="text-xs font-medium">{panel.label}</span>
                      </div>
                      <select
                        value={mixedThemes[panel.key] || themeId}
                        onChange={(e) => setPanelTheme(panel.key, e.target.value as AppThemeId)}
                        className="text-xs rounded-lg px-2 py-1 border outline-none cursor-pointer"
                        style={{
                          backgroundColor: themeConfig.bgCard,
                          borderColor: themeConfig.border,
                          color: themeConfig.textPrimary,
                        }}
                      >
                        <option value="">Same as main</option>
                        {Object.values(THEME_CONFIGS).map((t) => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                      </select>
                    </div>
                  ))}
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
