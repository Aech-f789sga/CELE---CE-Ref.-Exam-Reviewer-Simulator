import React, { useEffect, useState } from 'react';
import { Layers, RotateCcw, Sparkles } from 'lucide-react';
import type { ThemeConfig } from '../types/theme';
import { DEFAULT_FX, FX_PRESETS, loadV2Fx, saveV2Fx, type V2Fx } from '../data/v2Fx';

interface FluentFxPanelProps {
  /** Colours come from the active theme so the panel sits inside the dialog. */
  themeConfig: ThemeConfig;
}

/**
 * The only place the Fluent FX values can be changed.
 *
 * Everything here writes straight through to `saveV2Fx`, which applies the CSS
 * variables immediately — there is no preview/apply split, because the whole
 * point is watching the panels behind the dialog change as the slider moves.
 *
 * The controls are grouped by what they do to the *material*, not by which CSS
 * variable they touch: surface (glass, blur), motion (tilt, sheen), colour
 * (presets, anchors, angle). Someone tuning this should not need to know that
 * `--f-fx-surface-well` exists.
 */
export const FluentFxPanel: React.FC<FluentFxPanelProps> = ({ themeConfig }) => {
  const [fx, setFx] = useState<V2Fx>(() => loadV2Fx());

  /*
   * The dialog can be reopened after the settings were changed in another tab,
   * and localStorage is the shared source of truth. Re-reading on mount keeps
   * the sliders from disagreeing with what is actually painted.
   */
  useEffect(() => {
    setFx(loadV2Fx());
  }, []);

  const update = (patch: Partial<V2Fx>) => {
    const next = { ...fx, ...patch };
    setFx(next);
    saveV2Fx(next);
  };

  const activePreset = FX_PRESETS.find(
    (p) => p.a.toLowerCase() === fx.a.toLowerCase() && p.b.toLowerCase() === fx.b.toLowerCase() && p.c.toLowerCase() === fx.c.toLowerCase()
  );

  const surface = themeConfig.bgCardSubtle;
  const stroke = themeConfig.border;
  const ink = themeConfig.textPrimary;
  const muted = themeConfig.textMuted;

  const sliderClass = 'w-full h-1.5 rounded-full appearance-none cursor-pointer';
  const sliderStyle: React.CSSProperties = {
    accentColor: themeConfig.accent,
    background: `linear-gradient(90deg, ${themeConfig.accent} 0%, ${themeConfig.accent} var(--fill, 50%), ${stroke} var(--fill, 50%), ${stroke} 100%)`,
  };

  return (
    <div
      className="rounded-2xl border p-4 space-y-4"
      style={{ backgroundColor: surface, borderColor: stroke }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start space-x-2.5">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
            style={{ backgroundColor: themeConfig.accentBadge, color: themeConfig.accent }}
          >
            <Layers className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: ink }}>
              Fluent 2 · Glass &amp; Depth
            </h3>
            <p className="text-[11px] leading-relaxed mt-0.5" style={{ color: muted }}>
              Applies to the two Fluent 2 themes only. Every value here is a CSS variable, so the
              look can be tuned without touching stylesheets.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setFx({ ...DEFAULT_FX });
            saveV2Fx({ ...DEFAULT_FX });
          }}
          className="flex items-center space-x-1 px-2 py-1 rounded-lg border text-[10px] font-bold transition-colors hover:opacity-80 shrink-0 cursor-pointer"
          style={{ borderColor: stroke, color: muted, backgroundColor: themeConfig.bgCard }}
          title="Restore the default Aurora gradient and 22px glass"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* ---- surface ---- */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold" style={{ color: ink }}>
              Glass surfaces
            </div>
            <div className="text-[10px]" style={{ color: muted }}>
              Off restores plain Fluent: flat fills, no blur, no lean.
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={fx.glass}
            onClick={() => update({ glass: !fx.glass })}
            className="relative w-10 h-5 rounded-full transition-colors shrink-0 cursor-pointer"
            style={{ backgroundColor: fx.glass ? themeConfig.accent : stroke }}
          >
            <span
              className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all"
              style={{ left: fx.glass ? '1.375rem' : '0.125rem' }}
            />
          </button>
        </div>

        <label className="block space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span style={{ color: themeConfig.textSecondary }}>Backdrop blur</span>
            <span className="font-bold font-tech-mono" style={{ color: themeConfig.accent }}>
              {Math.round(fx.blur)}px
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={40}
            step={1}
            value={fx.blur}
            disabled={!fx.glass}
            onChange={(e) => update({ blur: Number(e.target.value) })}
            className={sliderClass}
            style={{ ...sliderStyle, ['--fill' as string]: `${(fx.blur / 40) * 100}%`, opacity: fx.glass ? 1 : 0.4 }}
          />
        </label>

        <label className="block space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span style={{ color: themeConfig.textSecondary }}>2.5D tilt</span>
            <span className="font-bold font-tech-mono" style={{ color: themeConfig.accent }}>
              {fx.tilt.toFixed(1)}°
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            step={0.5}
            value={fx.tilt}
            disabled={!fx.glass}
            onChange={(e) => update({ tilt: Number(e.target.value) })}
            className={sliderClass}
            style={{ ...sliderStyle, ['--fill' as string]: `${(fx.tilt / 10) * 100}%`, opacity: fx.glass ? 1 : 0.4 }}
          />
          <p className="text-[10px] leading-snug" style={{ color: muted }}>
            How far a panel leans toward the cursor. Past ~7° it reads as a toy rather than a pane.
          </p>
        </label>

        <label className="block space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span style={{ color: themeConfig.textSecondary }}>Specular sheen</span>
            <span className="font-bold font-tech-mono" style={{ color: themeConfig.accent }}>
              {Math.round(fx.sheen * 100)}%
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={fx.sheen}
            disabled={!fx.glass}
            onChange={(e) => update({ sheen: Number(e.target.value) })}
            className={sliderClass}
            style={{ ...sliderStyle, ['--fill' as string]: `${fx.sheen * 100}%`, opacity: fx.glass ? 1 : 0.4 }}
          />
        </label>
      </div>

      {/* ---- gradient ---- */}
      <div className="pt-3 space-y-3" style={{ borderTop: `1px solid ${stroke}` }}>
        <div className="flex items-center space-x-1.5">
          <Sparkles className="w-3.5 h-3.5" style={{ color: themeConfig.accent }} />
          <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: ink }}>
            Gradient
          </span>
          {activePreset && (
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
              style={{ backgroundColor: themeConfig.accentBadge, color: themeConfig.accent }}
            >
              {activePreset.name}
            </span>
          )}
        </div>

        <div className="grid grid-cols-5 gap-2">
          {FX_PRESETS.map((p) => {
            const on = activePreset?.id === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => update({ a: p.a, b: p.b, c: p.c, angle: p.angle })}
                className="group relative rounded-lg overflow-hidden border transition-transform hover:scale-[1.04] cursor-pointer"
                style={{
                  borderColor: on ? themeConfig.accent : stroke,
                  boxShadow: on ? `0 0 0 2px ${themeConfig.accentBadge}` : 'none',
                }}
                title={p.hint}
              >
                <span
                  className="block h-9 w-full"
                  style={{ background: `linear-gradient(${p.angle}deg, ${p.a}, ${p.b} 55%, ${p.c})` }}
                />
                <span
                  className="block text-[9px] font-bold py-0.5 text-center truncate"
                  style={{ color: on ? themeConfig.accent : muted, backgroundColor: themeConfig.bgCard }}
                >
                  {p.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-end gap-2">
          {(
            [
              { key: 'a', label: 'Anchor A', value: fx.a },
              { key: 'b', label: 'Anchor B', value: fx.b },
              { key: 'c', label: 'Anchor C', value: fx.c },
            ] as const
          ).map((slot) => (
            <label key={slot.key} className="flex flex-col items-center space-y-1">
              <span className="text-[9px] font-semibold" style={{ color: muted }}>
                {slot.label}
              </span>
              <input
                type="color"
                value={slot.value}
                onChange={(e) => update({ [slot.key]: e.target.value } as Partial<V2Fx>)}
                className="w-9 h-9 rounded-lg border cursor-pointer bg-transparent p-0.5"
                style={{ borderColor: stroke }}
                title={`Custom colour for ${slot.label}`}
              />
            </label>
          ))}

          <label className="flex-1 min-w-[110px] space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span style={{ color: themeConfig.textSecondary }}>Angle</span>
              <span className="font-bold font-tech-mono" style={{ color: themeConfig.accent }}>
                {Math.round(fx.angle)}°
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={360}
              step={5}
              value={fx.angle}
              onChange={(e) => update({ angle: Number(e.target.value) })}
              className={sliderClass}
              style={{ ...sliderStyle, ['--fill' as string]: `${(fx.angle / 360) * 100}%` }}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
