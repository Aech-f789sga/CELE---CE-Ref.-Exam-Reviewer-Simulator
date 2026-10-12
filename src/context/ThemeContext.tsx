import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  AppThemeId,
  FontFamilyId,
  FontSizeId,
  ThemeConfig,
  THEME_CONFIGS,
  FONT_OPTIONS,
  FONT_SIZE_OPTIONS,
} from '../types/theme';

interface ThemeContextType {
  themeId: AppThemeId;
  fontId: FontFamilyId;
  fontSizeId: FontSizeId;
  isHighContrastFigures: boolean;
  textOutlineMode: boolean; // Enables crisp contrast edge outline on problem text & headings
  themeConfig: ThemeConfig;
  setThemeId: (id: AppThemeId) => void;
  setFontId: (id: FontFamilyId) => void;
  setFontSizeId: (id: FontSizeId) => void;
  setIsHighContrastFigures: (val: boolean) => void;
  setTextOutlineMode: (val: boolean) => void;
  resetToDefaults: () => void;
}

const STORAGE_KEY_THEME = 'ce_board_theme_id';
const STORAGE_KEY_FONT = 'ce_board_font_id';
const STORAGE_KEY_FONT_SIZE = 'ce_board_font_size_id';
const STORAGE_KEY_FIGURE_CONTRAST = 'ce_board_fig_contrast';
const STORAGE_KEY_TEXT_OUTLINE = 'ce_board_text_outline';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<AppThemeId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_THEME) as AppThemeId;
    return saved && THEME_CONFIGS[saved] ? saved : 'aurora_glass';
  });

  const [fontId, setFontIdState] = useState<FontFamilyId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_FONT) as FontFamilyId;
    return saved && FONT_OPTIONS.some((f) => f.id === saved) ? saved : 'sans';
  });

  const [fontSizeId, setFontSizeIdState] = useState<FontSizeId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_FONT_SIZE) as FontSizeId;
    return saved && FONT_SIZE_OPTIONS.some((s) => s.id === saved) ? saved : 'medium';
  });

  const [isHighContrastFigures, setIsHighContrastFiguresState] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_FIGURE_CONTRAST);
    return saved !== null ? saved === 'true' : true;
  });

  const [textOutlineMode, setTextOutlineModeState] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_TEXT_OUTLINE);
    return saved !== null ? saved === 'true' : true; // Default ON so changing themes always guarantees contrast
  });

  const themeConfig = THEME_CONFIGS[themeId] || THEME_CONFIGS.aurora_glass;

  const setThemeId = (id: AppThemeId) => {
    setThemeIdState(id);
    localStorage.setItem(STORAGE_KEY_THEME, id);
  };

  const setFontId = (id: FontFamilyId) => {
    setFontIdState(id);
    localStorage.setItem(STORAGE_KEY_FONT, id);
  };

  const setFontSizeId = (id: FontSizeId) => {
    setFontSizeIdState(id);
    localStorage.setItem(STORAGE_KEY_FONT_SIZE, id);
  };

  const setIsHighContrastFigures = (val: boolean) => {
    setIsHighContrastFiguresState(val);
    localStorage.setItem(STORAGE_KEY_FIGURE_CONTRAST, String(val));
  };

  const setTextOutlineMode = (val: boolean) => {
    setTextOutlineModeState(val);
    localStorage.setItem(STORAGE_KEY_TEXT_OUTLINE, String(val));
  };

  const resetToDefaults = () => {
    setThemeId('aurora_glass');
    setFontId('sans');
    setFontSizeId('medium');
    setIsHighContrastFigures(true);
    setTextOutlineMode(true);
  };

  // Sync CSS variables to root document
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    const fontObj = FONT_OPTIONS.find((f) => f.id === fontId) || FONT_OPTIONS[0];
    const sizeObj = FONT_SIZE_OPTIONS.find((s) => s.id === fontSizeId) || FONT_SIZE_OPTIONS[1];

    // Set font family
    root.style.setProperty('--app-font-family', fontObj.familyCss);
    root.style.setProperty('--app-font-scale', `${sizeObj.scalePercent}%`);

    // Set theme colors
    root.style.setProperty('--app-bg-page', themeConfig.bgPage);
    root.style.setProperty('--app-bg-card', themeConfig.bgCard);
    root.style.setProperty('--app-bg-card-subtle', themeConfig.bgCardSubtle);
    root.style.setProperty('--app-border', themeConfig.border);
    root.style.setProperty('--app-text-primary', themeConfig.textPrimary);
    root.style.setProperty('--app-text-secondary', themeConfig.textSecondary);
    root.style.setProperty('--app-text-muted', themeConfig.textMuted);
    root.style.setProperty('--app-accent', themeConfig.accent);
    root.style.setProperty('--app-accent-hover', themeConfig.accentHover);
    root.style.setProperty('--app-accent-text', themeConfig.accentText);
    root.style.setProperty('--app-accent-badge', themeConfig.accentBadge);
    root.style.setProperty('--app-grid-line', themeConfig.gridStyle);

    // Apply font family and font size to body
    body.style.fontFamily = fontObj.familyCss;
    body.style.fontSize = `${sizeObj.scalePercent}%`;
    body.style.backgroundColor = themeConfig.bgPage;
    body.style.color = themeConfig.textPrimary;

    // Apply or remove dark class
    if (themeConfig.category === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    // Apply or remove text-outline-contrast attribute to html root
    if (textOutlineMode) {
      root.setAttribute('data-contrast-outline', 'true');
    } else {
      root.removeAttribute('data-contrast-outline');
    }

    // Set theme attribute
    root.setAttribute('data-theme', themeConfig.id);
  }, [themeConfig, fontId, fontSizeId, textOutlineMode]);

  return (
    <ThemeContext.Provider
      value={{
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
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
