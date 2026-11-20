/**
 * Runtime knobs for the Fluent 2 skin's FX layer.
 *
 * The v2 skin is flat by default, because that is what Fluent 2 is: neutral
 * surfaces separated by a 1px stroke and one step of elevation. This module
 * adds an optional glass + gradient layer *on top of* that skin, and exposes
 * the four values that actually decide its character, so the look can be tuned
 * without editing CSS:
 *
 *   glass  — off returns the skin to plain Fluent
 *   blur   — px of backdrop blur behind every panel
 *   sheen  — strength of the pointer-tracked specular highlight
 *   a/b/c  — the three gradient anchors, plus the angle between them
 *
 * Everything is written to :root as custom properties. The stylesheet reads
 * them through var(), so no rule anywhere else has to know they are editable,
 * and swapping a theme never has to re-apply them (they are theme-agnostic —
 * the light and dark skins differ only in how much of each colour they mix in).
 *
 * Nothing here is read outside the v2 themes: the properties sit unused while
 * any other theme is active, so switching away is a no-op and switching back
 * restores the learner's last configuration.
 */

export type FxPresetId = 'azure' | 'aurora' | 'sunset' | 'mint' | 'graphite';

export interface V2Fx {
  /** Master switch. Off = plain Fluent surfaces, no blur, no tilt. */
  glass: boolean;
  /** Backdrop blur in px, 0–40. */
  blur: number;
  /** Specular highlight strength, 0–1. */
  sheen: number;
  /**
   * 2.5D tilt in degrees, 0–10. This is the knob that decides whether the
   * panels read as *panes of glass* or as printed cards: 0 is flat, 4 is
   * perceptible depth, and anything past ~7 starts to feel like a toy.
   */
  tilt: number;
  /** Gradient anchors. Three stops, because two always reads as a duotone. */
  a: string;
  b: string;
  c: string;
  /** Gradient direction in degrees. */
  angle: number;
}

export interface FxPreset {
  id: FxPresetId;
  name: string;
  hint: string;
  a: string;
  b: string;
  c: string;
  angle: number;
}

/**
 * Presets only ever set the gradient. Glass, blur and sheen are orthogonal —
 * someone who likes the Aurora hues on flat surfaces should not have their
 * blur preference reset by picking a colour.
 */
export const FX_PRESETS: FxPreset[] = [
  {
    id: 'azure',
    name: 'Azure',
    hint: 'Fluent’s own brand ramp, nothing added',
    a: '#0f6cbd',
    b: '#479ef5',
    c: '#115ea3',
    angle: 135,
  },
  {
    id: 'aurora',
    name: 'Aurora',
    hint: 'Blue into violet into teal',
    a: '#0f6cbd',
    b: '#7f56d9',
    c: '#0fa8b4',
    angle: 135,
  },
  {
    id: 'sunset',
    name: 'Sunset',
    hint: 'Coral into rose into plum',
    a: '#e2622c',
    b: '#d1345b',
    c: '#6d4aff',
    angle: 120,
  },
  {
    id: 'mint',
    name: 'Mint',
    hint: 'Teal into green into lime',
    a: '#0d9488',
    b: '#0f9d58',
    c: '#7cb342',
    angle: 150,
  },
  {
    id: 'graphite',
    name: 'Graphite',
    hint: 'Neutral greys, for when colour is noise',
    a: '#3f3f46',
    b: '#6b7280',
    c: '#27272a',
    angle: 135,
  },
];

const STORAGE_KEY = 'ce_board_v2_fx_v1';

export const DEFAULT_FX: V2Fx = {
  glass: true,
  blur: 22,
  sheen: 0.55,
  tilt: 6,
  a: '#0f6cbd',
  b: '#7f56d9',
  c: '#0fa8b4',
  angle: 135,
};

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/** Only #rgb / #rrggbb reach a CSS variable; anything else falls back. */
const isHex = (v: unknown): v is string => typeof v === 'string' && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v);

/**
 * Reads the saved configuration. Every field is validated independently, so a
 * half-corrupt entry (a stale key from an older shape, a hand-edited value)
 * degrades to the default for that field instead of discarding the whole
 * configuration — losing someone's gradient because one number was NaN is a
 * worse failure than a slightly off default.
 */
export function loadV2Fx(): V2Fx {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_FX };
    const parsed = JSON.parse(raw) as Partial<V2Fx>;
    return {
      glass: typeof parsed.glass === 'boolean' ? parsed.glass : DEFAULT_FX.glass,
      blur: typeof parsed.blur === 'number' && isFinite(parsed.blur) ? clamp(parsed.blur, 0, 40) : DEFAULT_FX.blur,
      sheen:
        typeof parsed.sheen === 'number' && isFinite(parsed.sheen) ? clamp(parsed.sheen, 0, 1) : DEFAULT_FX.sheen,
      tilt: typeof parsed.tilt === 'number' && isFinite(parsed.tilt) ? clamp(parsed.tilt, 0, 10) : DEFAULT_FX.tilt,
      a: isHex(parsed.a) ? parsed.a : DEFAULT_FX.a,
      b: isHex(parsed.b) ? parsed.b : DEFAULT_FX.b,
      c: isHex(parsed.c) ? parsed.c : DEFAULT_FX.c,
      angle:
        typeof parsed.angle === 'number' && isFinite(parsed.angle)
          ? clamp(Math.round(parsed.angle), 0, 360)
          : DEFAULT_FX.angle,
    };
  } catch {
    return { ...DEFAULT_FX };
  }
}

/**
 * Writes the configuration to the document.
 *
 * Glass-off is an attribute rather than a variable, because the stylesheet has
 * to *drop* backdrop-filter entirely in that case — blur(0) still promotes the
 * element to its own compositing layer and still costs a paint, so a zeroed
 * variable would keep paying for a feature that is switched off.
 *
 * The attribute is removed rather than set to 'on' when glass is enabled, so
 * the default state of a fresh document needs no JavaScript at all.
 */
export function applyV2Fx(fx: V2Fx): void {
  const root = document.documentElement;
  root.style.setProperty('--f-fx-blur', `${clamp(fx.blur, 0, 40)}px`);
  root.style.setProperty('--f-fx-sheen', String(clamp(fx.sheen, 0, 1)));
  root.style.setProperty('--f-fx-tilt', String(clamp(fx.tilt, 0, 10)));
  root.style.setProperty('--f-grad-a', fx.a);
  root.style.setProperty('--f-grad-b', fx.b);
  root.style.setProperty('--f-grad-c', fx.c);
  root.style.setProperty('--f-grad-angle', `${clamp(fx.angle, 0, 360)}deg`);

  if (fx.glass) root.removeAttribute('data-v2fx');
  else root.setAttribute('data-v2fx', 'flat');
}

export function saveV2Fx(fx: V2Fx): void {
  applyV2Fx(fx);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fx));
  } catch {
    /* private mode / quota — the look still applies for this session */
  }
  window.dispatchEvent(new CustomEvent('ce_board_v2fx_updated'));
}

/** True when the active theme is one of the two Fluent skins. */
export function isFluentTheme(themeId: string): boolean {
  return themeId === 'v2' || themeId === 'v2_dark';
}
