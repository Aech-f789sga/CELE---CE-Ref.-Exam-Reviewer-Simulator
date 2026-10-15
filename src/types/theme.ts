export type AppThemeId =
  | 'particle_flow'
  | 'matilda_3d'
  | 'aurora_glass'
  | 'terrarium_orb'
  | 'engineering_dark'
  | 'blueprint_navy'
  | 'pure_slate'
  | 'paper_light'
  | 'sepia_draft'
  | 'cyber_cad'
  | 'emerald_matrix';

export type FontFamilyId =
  | 'sans'
  | 'arial'
  | 'arnie'
  | 'roboto'
  | 'inter'
  | 'times'
  | 'mono';

export type FontSizeId = 'small' | 'medium' | 'large' | 'xlarge';

export interface ThemeConfig {
  id: AppThemeId;
  name: string;
  category: 'dark' | 'light';
  accentName: string;
  description: string;
  bgPage: string;
  bgCard: string;
  bgCardSubtle: string;
  border: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  accentText: string;
  accentBadge: string;
  gridStyle: string;
}

export interface FontOption {
  id: FontFamilyId;
  name: string;
  familyCss: string;
  description: string;
  sample: string;
  category: 'Modern Sans' | 'System & Classic' | 'Serif & Formal' | 'Technical' | 'Architectural Script';
}

export interface FontSizeOption {
  id: FontSizeId;
  name: string;
  scalePercent: number;
  description: string;
}

export const THEME_CONFIGS: Record<AppThemeId, ThemeConfig> = {
  // INTERACTIVE 3D PARTICLE SYSTEM THEME
  particle_flow: {
    id: 'particle_flow',
    name: 'Interactive 3D Particles',
    category: 'dark',
    accentName: 'Cosmic Cyan & Nebula Rose',
    description: 'Real-time 3D particle system: morph between hearts, lotus flowers, Saturn, Buddha statues, and fireworks with hand gesture camera tension control and custom color tuning.',
    bgPage: '#040714',
    bgCard: '#0a1026',
    bgCardSubtle: '#121b3b',
    border: '#22386e',
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    textMuted: '#818cf8',
    accent: '#38bdf8',
    accentHover: '#0ea5e9',
    accentText: '#030712',
    accentBadge: 'rgba(56, 189, 248, 0.22)',
    gridStyle: 'rgba(56, 189, 248, 0.08)',
  },
  // 3D ANIMATED COMPANION THEME - MATILDA
  matilda_3d: {
    id: 'matilda_3d',
    name: 'Matilda Study Companion (3D)',
    category: 'dark',
    accentName: 'Terracotta Rose & Plant Sage',
    description: 'Warm cinematic palette matching Matilda: terracotta rose blush (#e07a68), lush potted plant sage (#6c8c6a), vintage espresso noir, and warm ivory with realistic animated 3D hair, clothes, and botanical movement.',
    bgPage: '#161114',
    bgCard: '#241a20',
    bgCardSubtle: '#31232c',
    border: '#5e3f4b',
    textPrimary: '#fdf6f3',
    textSecondary: '#f3c8be',
    textMuted: '#ad928c',
    accent: '#e07a68',
    accentHover: '#cc6352',
    accentText: '#1c0c09',
    accentBadge: 'rgba(224, 122, 104, 0.22)',
    gridStyle: 'rgba(224, 122, 104, 0.08)',
  },
  // "Structural Aurora": glassmorphism + 3D depth over an animated wireframe scene
  aurora_glass: {
    id: 'aurora_glass',
    name: 'Structural Aurora (3D)',
    category: 'dark',
    accentName: 'Violet / Aurora Cyan',
    description: 'Glassy cards with 3D tilt, a living wireframe truss scene and aurora glow. The new default look.',
    bgPage: '#070a1f',
    bgCard: '#0e1334',
    bgCardSubtle: '#1a1f4a',
    border: '#3b3f9a',
    textPrimary: '#f5f6ff',
    textSecondary: '#cfd3ff',
    textMuted: '#9aa0d6',
    accent: '#8b7bff',
    accentHover: '#7461f5',
    accentText: '#0b0720',
    accentBadge: 'rgba(139, 123, 255, 0.2)',
    gridStyle: 'rgba(139, 123, 255, 0.10)',
  },
  // COZY MINIATURE WORLD BUILDER THEME - 3D Faceted Terrarium Planet inside Glass Orb on Walnut Stand
  terrarium_orb: {
    id: 'terrarium_orb',
    name: 'Cozy Terrarium Orb (3D World)',
    category: 'dark',
    accentName: 'Emerald Jade & Warm Walnut',
    description: 'A cozy miniature world builder in Three.js: a faceted terrarium planet suspended inside a glowing glass orb on a sculpted walnut stand with semi-interactive world controls.',
    bgPage: '#081313',
    bgCard: '#0f2220',
    bgCardSubtle: '#15302c',
    border: '#225d50',
    textPrimary: '#f0fdf4',
    textSecondary: '#bbf7d0',
    textMuted: '#6ee7b7',
    accent: '#10b981',
    accentHover: '#059669',
    accentText: '#022c22',
    accentBadge: 'rgba(16, 185, 129, 0.22)',
    gridStyle: 'rgba(16, 185, 129, 0.08)',
  },
  // ORIGINAL THEME - KEPT COMPLETELY PRESERVED AND UNCHANGED
  engineering_dark: {
    id: 'engineering_dark',
    name: 'Midnight Engineering (Original)',
    category: 'dark',
    accentName: 'Amber / Gold',
    description: 'The original default board exam simulator theme: midnight slate with signature golden PRC amber accents.',
    bgPage: '#020617', // slate-950
    bgCard: '#0f172a', // slate-900
    bgCardSubtle: '#1e293b', // slate-800
    border: '#334155', // slate-700
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    textMuted: '#94a3b8',
    accent: '#f59e0b', // amber-500
    accentHover: '#d97706',
    accentText: '#0f172a',
    accentBadge: 'rgba(245, 158, 11, 0.15)',
    gridStyle: 'rgba(56, 189, 248, 0.05)',
  },
  blueprint_navy: {
    id: 'blueprint_navy',
    name: 'Classic Blueprint',
    category: 'dark',
    accentName: 'Cyan / Electric Blue',
    description: 'Classic architectural cyan blueprint with crisp drafting lines and high-contrast electric cyan highlights.',
    bgPage: '#07162c',
    bgCard: '#0d2342',
    bgCardSubtle: '#14345d',
    border: '#2563eb',
    textPrimary: '#ffffff',
    textSecondary: '#bae6fd',
    textMuted: '#7dd3fc',
    accent: '#38bdf8', // sky-400
    accentHover: '#0ea5e9',
    accentText: '#082f49',
    accentBadge: 'rgba(56, 189, 248, 0.22)',
    gridStyle: 'rgba(56, 189, 248, 0.15)',
  },
  pure_slate: {
    id: 'pure_slate',
    name: 'Obsidian Minimal',
    category: 'dark',
    accentName: 'Ice Slate',
    description: 'Monochrome charcoal palette with pure white text and crisp borders for distraction-free problem solving.',
    bgPage: '#090d16',
    bgCard: '#131b2e',
    bgCardSubtle: '#1e293b',
    border: '#475569',
    textPrimary: '#ffffff',
    textSecondary: '#e2e8f0',
    textMuted: '#94a3b8',
    accent: '#60a5fa', // blue-400
    accentHover: '#3b82f6',
    accentText: '#0f172a',
    accentBadge: 'rgba(96, 165, 250, 0.18)',
    gridStyle: 'rgba(148, 163, 184, 0.08)',
  },
  paper_light: {
    id: 'paper_light',
    name: 'Official Exam Paper',
    category: 'light',
    accentName: 'Deep Royal Navy',
    description: 'High-contrast printed examination paper with deep black ink (#020617) for clear daytime readability.',
    bgPage: '#f1f5f9', // slate-100
    bgCard: '#ffffff', // pure white card
    bgCardSubtle: '#e2e8f0', // slate-200
    border: '#94a3b8', // slate-400 strong border
    textPrimary: '#020617', // near black for 100% sharp contrast
    textSecondary: '#1e293b', // slate-800
    textMuted: '#475569', // slate-600
    accent: '#1d4ed8', // royal blue-700
    accentHover: '#1e40af',
    accentText: '#ffffff',
    accentBadge: 'rgba(29, 78, 216, 0.12)',
    gridStyle: 'rgba(15, 23, 42, 0.07)',
  },
  sepia_draft: {
    id: 'sepia_draft',
    name: 'Warm Vellum & Sepia',
    category: 'light',
    accentName: 'Warm Mahogany',
    description: 'Warm architectural tracing vellum with deep espresso text (#1c120c) and clear outlines.',
    bgPage: '#f5efe6', // rich warm vellum
    bgCard: '#fdfbf7', // creamy light card
    bgCardSubtle: '#ebe0d0',
    border: '#b8a189', // distinct vellum border
    textPrimary: '#1c120c', // deep espresso brown for maximum contrast
    textSecondary: '#3d2b1f',
    textMuted: '#6e5340',
    accent: '#9a3412', // burnt amber-800
    accentHover: '#7c2d12',
    accentText: '#ffffff',
    accentBadge: 'rgba(154, 52, 18, 0.14)',
    gridStyle: 'rgba(154, 52, 18, 0.07)',
  },
  cyber_cad: {
    id: 'cyber_cad',
    name: 'AutoCAD Dark & Neon',
    category: 'dark',
    accentName: 'Laser Lime',
    description: 'Civil and mechanical CAD terminal mode with ultra-high contrast laser green signals.',
    bgPage: '#030805',
    bgCard: '#08170d',
    bgCardSubtle: '#0f2918',
    border: '#15803d',
    textPrimary: '#ffffff',
    textSecondary: '#dcfce7',
    textMuted: '#86efac',
    accent: '#22c55e', // green-500
    accentHover: '#16a34a',
    accentText: '#022c22',
    accentBadge: 'rgba(34, 197, 94, 0.22)',
    gridStyle: 'rgba(34, 197, 94, 0.12)',
  },
  emerald_matrix: {
    id: 'emerald_matrix',
    name: 'Forest Engineering',
    category: 'dark',
    accentName: 'Bright Teal',
    description: 'Deep forest engineering workstation with radiant teal contrast indicators.',
    bgPage: '#021313',
    bgCard: '#062424',
    bgCardSubtle: '#0a3636',
    border: '#0f766e',
    textPrimary: '#ffffff',
    textSecondary: '#ccfbf1',
    textMuted: '#5eead4',
    accent: '#14b8a6', // teal-500
    accentHover: '#0d9488',
    accentText: '#042f2e',
    accentBadge: 'rgba(20, 184, 166, 0.22)',
    gridStyle: 'rgba(20, 184, 166, 0.12)',
  },
};

export const FONT_OPTIONS: FontOption[] = [
  {
    id: 'sans',
    name: 'Plus Jakarta Sans',
    familyCss: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    description: 'Modern geometric UI sans-serif engineered for optimal legibility and screen clarity.',
    sample: 'CE Board Exam 2024: MSTC, HPGE, PSAD Review',
    category: 'Modern Sans',
  },
  {
    id: 'arnie',
    name: 'Arnie (Architects Daughter)',
    familyCss: "'Architects Daughter', cursive, sans-serif",
    description: 'Distinctive engineering drafting script modeled after hand-lettered architectural and structural blueprints.',
    sample: 'Situation 1: Calculate the moment developed at support D in kN·m.',
    category: 'Architectural Script',
  },
  {
    id: 'arial',
    name: 'Arial',
    familyCss: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
    description: 'Clean, universally recognized standard typeface used extensively in official board exam documents.',
    sample: 'Situation 1: Calculate the moment developed at support D in kN·m.',
    category: 'System & Classic',
  },
  {
    id: 'inter',
    name: 'Inter',
    familyCss: "'Inter', system-ui, -apple-system, sans-serif",
    description: 'Highly acclaimed tall x-height sans-serif fine-tuned for high-density mathematical notation.',
    sample: 'EI = 8,000 kN·m², L = 6 m, P = 14 kN @ midspan',
    category: 'Modern Sans',
  },
  {
    id: 'roboto',
    name: 'Roboto',
    familyCss: "'Roboto', system-ui, sans-serif",
    description: 'Balanced neo-grotesque font popular in digital technical publications and standards.',
    sample: 'Allowable shear stress τ = 0.40 Fy; σ_b = 0.66 Fy',
    category: 'Modern Sans',
  },
  {
    id: 'times',
    name: 'Times New Roman',
    familyCss: "'Times New Roman', Times, 'Noto Serif', Georgia, serif",
    description: 'Traditional academic & PRC printed questionnaire serif typography, matching official paper formats.',
    sample: 'REPUBLIC OF THE PHILIPPINES • Professional Regulation Commission',
    category: 'Serif & Formal',
  },
  {
    id: 'mono',
    name: 'JetBrains Mono',
    familyCss: "'JetBrains Mono', Consolas, Monaco, monospace",
    description: 'Monospace programming font with fixed glyph widths, perfect for column alignments and tables.',
    sample: 'w1=12.5kN/m w2=8.2kN/m e=200mm Ry=184.2kN',
    category: 'Technical',
  },
];

export const FONT_SIZE_OPTIONS: FontSizeOption[] = [
  {
    id: 'small',
    name: 'Compact',
    scalePercent: 92,
    description: 'More questions visible at once, best for large monitors or split screens.',
  },
  {
    id: 'medium',
    name: 'Standard',
    scalePercent: 100,
    description: 'Balanced default scale tailored for standard laptops and tablets.',
  },
  {
    id: 'large',
    name: 'Comfortable',
    scalePercent: 110,
    description: 'Larger text for effortless long reading sessions without straining eyes.',
  },
  {
    id: 'xlarge',
    name: 'High Visibility',
    scalePercent: 122,
    description: 'Maximum legibility for formula subscripts, superscripts, and fractions.',
  },
];
