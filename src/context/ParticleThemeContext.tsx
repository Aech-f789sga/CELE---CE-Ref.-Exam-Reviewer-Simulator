import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

export type ParticleTemplateId = 'heart' | 'flower' | 'saturn' | 'buddha' | 'fireworks' | 'galaxy';

export interface ParticleColorPreset {
  name: string;
  primary: string;
  secondary: string;
  bgAtmosphere: string;
}

export const PARTICLE_COLOR_PRESETS: ParticleColorPreset[] = [
  {
    name: 'Cosmic Cyan',
    primary: '#38bdf8',
    secondary: '#ec4899',
    bgAtmosphere: 'rgba(56, 189, 248, 0.16)',
  },
  {
    name: 'Solar Gold',
    primary: '#f59e0b',
    secondary: '#fbbf24',
    bgAtmosphere: 'rgba(245, 158, 11, 0.16)',
  },
  {
    name: 'Sacred Jade',
    primary: '#10b981',
    secondary: '#34d399',
    bgAtmosphere: 'rgba(16, 185, 129, 0.16)',
  },
  {
    name: 'Violet Nebula',
    primary: '#8b5cf6',
    secondary: '#c084fc',
    bgAtmosphere: 'rgba(139, 92, 246, 0.16)',
  },
  {
    name: 'Supernova',
    primary: '#ef4444',
    secondary: '#f97316',
    bgAtmosphere: 'rgba(239, 68, 68, 0.16)',
  },
  {
    name: 'Pure Starlight',
    primary: '#ffffff',
    secondary: '#94a3b8',
    bgAtmosphere: 'rgba(255, 255, 255, 0.14)',
  },
];

export interface HandTrackingState {
  handsDetected: number;
  distance: number;
  tension: number;
  status: string;
}

interface ParticleThemeContextType {
  activeTemplate: ParticleTemplateId;
  setActiveTemplate: (t: ParticleTemplateId) => void;
  primaryColor: string;
  setPrimaryColor: (c: string) => void;
  secondaryColor: string;
  setSecondaryColor: (c: string) => void;
  tensionScale: number;
  setTensionScale: (val: number) => void;
  effectiveTension: number;
  setEffectiveTension: (val: number) => void;
  autoPulse: boolean;
  setAutoPulse: (val: boolean) => void;
  autoRotate: boolean;
  setAutoRotate: (val: boolean) => void;
  isCameraActive: boolean;
  setIsCameraActive: (val: boolean) => void;
  handTrackingInfo: HandTrackingState;
  setHandTrackingInfo: (info: HandTrackingState) => void;
  cameraPermissionError: string | null;
  setCameraPermissionError: (err: string | null) => void;
  applyColorPreset: (preset: ParticleColorPreset) => void;
  resetParticles: () => void;
  backgroundIntensity: number; // 0.2 to 2.5 derived from tension & manipulation
  backgroundStyle: React.CSSProperties;
}

const ParticleThemeContext = createContext<ParticleThemeContextType | undefined>(undefined);

export const ParticleThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTemplate, setActiveTemplate] = useState<ParticleTemplateId>('heart');
  const [primaryColor, setPrimaryColor] = useState<string>('#38bdf8');
  const [secondaryColor, setSecondaryColor] = useState<string>('#ec4899');
  const [tensionScale, setTensionScale] = useState<number>(1.0);
  const [effectiveTension, setEffectiveTension] = useState<number>(1.0);
  const [autoPulse, setAutoPulse] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [cameraPermissionError, setCameraPermissionError] = useState<string | null>(null);
  const [handTrackingInfo, setHandTrackingInfo] = useState<HandTrackingState>({
    handsDetected: 0,
    distance: 0,
    tension: 1.0,
    status: 'Camera gesture detection ready',
  });

  const applyColorPreset = useCallback((preset: ParticleColorPreset) => {
    setPrimaryColor(preset.primary);
    setSecondaryColor(preset.secondary);
  }, []);

  const resetParticles = useCallback(() => {
    setActiveTemplate('heart');
    setPrimaryColor('#38bdf8');
    setSecondaryColor('#ec4899');
    setTensionScale(1.0);
    setEffectiveTension(1.0);
    setAutoPulse(false);
    setAutoRotate(true);
  }, []);

  // Compute reactive background atmosphere based on manipulated particle state
  const backgroundIntensity = Math.max(0.3, Math.min(2.5, effectiveTension));

  // Dynamically update documentElement CSS variables when particles are manipulated
  useEffect(() => {
    const root = document.documentElement;

    // Convert hex to rgb for opacity-enabled css properties
    const hexToRgb = (hex: string): [number, number, number] => {
      const clean = hex.replace('#', '');
      if (clean.length === 3) {
        return [
          parseInt(clean[0] + clean[0], 16) || 56,
          parseInt(clean[1] + clean[1], 16) || 189,
          parseInt(clean[2] + clean[2], 16) || 248,
        ];
      }
      return [
        parseInt(clean.substring(0, 2), 16) || 56,
        parseInt(clean.substring(2, 4), 16) || 189,
        parseInt(clean.substring(4, 6), 16) || 248,
      ];
    };

    const [r1, g1, b1] = hexToRgb(primaryColor);
    const [r2, g2, b2] = hexToRgb(secondaryColor);

    // Dynamic background spread expands with tension
    const glowRadius = Math.round(30 + backgroundIntensity * 30);
    const glowOpacity1 = (0.08 + backgroundIntensity * 0.10).toFixed(2);
    const glowOpacity2 = (0.06 + backgroundIntensity * 0.08).toFixed(2);
    const glowOpacity3 = (0.04 + backgroundIntensity * 0.06).toFixed(2);

    root.style.setProperty('--particle-p-color', primaryColor);
    root.style.setProperty('--particle-s-color', secondaryColor);
    root.style.setProperty('--particle-tension', String(backgroundIntensity));
    root.style.setProperty('--particle-glow-radius', `${glowRadius}rem`);
    root.style.setProperty('--particle-glow-alpha1', glowOpacity1);
    root.style.setProperty('--particle-glow-alpha2', glowOpacity2);
    root.style.setProperty(
      '--particle-dynamic-bg',
      `radial-gradient(${glowRadius}rem ${glowRadius * 0.75}rem at 50% 12%, rgba(${r1}, ${g1}, ${b1}, ${glowOpacity1}), transparent 70%),
       radial-gradient(${glowRadius * 0.9}rem ${glowRadius * 0.7}rem at 85% 85%, rgba(${r2}, ${g2}, ${b2}, ${glowOpacity2}), transparent 70%),
       radial-gradient(${glowRadius * 0.8}rem ${glowRadius * 0.65}rem at 15% 75%, rgba(${Math.round(
        (r1 + r2) / 2
      )}, ${Math.round((g1 + g2) / 2)}, ${Math.round((b1 + b2) / 2)}, ${glowOpacity3}), transparent 75%),
       #040714`
    );

    // Also sync the theme accent so that buttons, badges, borders react dynamically!
    root.style.setProperty('--app-accent', primaryColor);
    root.style.setProperty('--app-accent-badge', `rgba(${r1}, ${g1}, ${b1}, 0.25)`);
  }, [primaryColor, secondaryColor, backgroundIntensity, activeTemplate]);

  // Derived background style for elements that want to directly apply dynamic particle background
  const [r1, g1, b1] = [
    parseInt(primaryColor.slice(1, 3), 16) || 56,
    parseInt(primaryColor.slice(3, 5), 16) || 189,
    parseInt(primaryColor.slice(5, 7), 16) || 248,
  ];
  const [r2, g2, b2] = [
    parseInt(secondaryColor.slice(1, 3), 16) || 236,
    parseInt(secondaryColor.slice(3, 5), 16) || 72,
    parseInt(secondaryColor.slice(5, 7), 16) || 153,
  ];

  const glowRadius = Math.round(32 + backgroundIntensity * 28);
  const glowAlpha1 = 0.08 + backgroundIntensity * 0.12;
  const glowAlpha2 = 0.06 + backgroundIntensity * 0.09;

  const backgroundStyle: React.CSSProperties = {
    background: `radial-gradient(${glowRadius}rem ${glowRadius * 0.75}rem at 50% 15%, rgba(${r1}, ${g1}, ${b1}, ${glowAlpha1}), transparent 70%),
                 radial-gradient(${glowRadius * 0.9}rem ${glowRadius * 0.75}rem at 85% 85%, rgba(${r2}, ${g2}, ${b2}, ${glowAlpha2}), transparent 70%),
                 #040714`,
    transition: 'background 0.3s ease-out',
  };

  return (
    <ParticleThemeContext.Provider
      value={{
        activeTemplate,
        setActiveTemplate,
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        tensionScale,
        setTensionScale,
        effectiveTension,
        setEffectiveTension,
        autoPulse,
        setAutoPulse,
        autoRotate,
        setAutoRotate,
        isCameraActive,
        setIsCameraActive,
        handTrackingInfo,
        setHandTrackingInfo,
        cameraPermissionError,
        setCameraPermissionError,
        applyColorPreset,
        resetParticles,
        backgroundIntensity,
        backgroundStyle,
      }}
    >
      {children}
    </ParticleThemeContext.Provider>
  );
};

export const useParticleTheme = (): ParticleThemeContextType => {
  const context = useContext(ParticleThemeContext);
  if (!context) {
    throw new Error('useParticleTheme must be used within a ParticleThemeProvider');
  }
  return context;
};
