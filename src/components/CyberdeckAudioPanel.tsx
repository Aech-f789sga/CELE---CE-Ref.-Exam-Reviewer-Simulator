import React, { useEffect, useState } from 'react';
import {
  AudioLines,
  Film,
  Image as ImageIcon,
  Keyboard,
  MousePointer2,
  Music2,
  Power,
  Volume1,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { useCyberdeckAudio } from '../context/CyberdeckAudioContext';

const YELLOW = '#eaea22';
const CYAN = '#00b0f4';
const RED = '#fa1e46';
const INK = '#08050e';
const PANEL = 'rgba(10, 7, 18, 0.96)';

const Toggle: React.FC<{
  on: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}> = ({ on, onChange, disabled, label }) => (
  <button
    type="button"
    role="switch"
    aria-checked={on}
    aria-label={label}
    data-no-sfx="true"
    disabled={disabled}
    onClick={() => onChange(!on)}
    className="relative shrink-0 w-11 h-5 transition-colors duration-150 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
    style={{
      backgroundColor: on ? 'rgba(234, 234, 34, 0.18)' : 'rgba(255,255,255,0.06)',
      border: `1px solid ${on ? YELLOW : 'rgba(255,255,255,0.18)'}`,
      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
    }}
  >
    <span
      className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 transition-all duration-150"
      style={{
        left: on ? 'calc(100% - 17px)' : '3px',
        backgroundColor: on ? YELLOW : 'rgba(255,255,255,0.35)',
        boxShadow: on ? `0 0 8px ${YELLOW}` : 'none',
      }}
    />
  </button>
);

const Row: React.FC<{
  icon: React.ReactNode;
  label: string;
  hint?: string;
  children: React.ReactNode;
  dimmed?: boolean;
}> = ({ icon, label, hint, children, dimmed }) => (
  <div
    className="flex items-center justify-between gap-3 py-2 transition-opacity"
    style={{ opacity: dimmed ? 0.4 : 1 }}
  >
    <div className="flex items-center gap-2 min-w-0">
      <span style={{ color: YELLOW }} className="shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-white leading-tight">
          {label}
        </div>
        {hint && (
          <div className="text-[9px] tracking-[0.08em] uppercase" style={{ color: '#8a8f99' }}>
            {hint}
          </div>
        )}
      </div>
    </div>
    {children}
  </div>
);

export const CyberdeckAudioPanel: React.FC = () => {
  const { settings, blocked, isPlaying, setMusic, setSfx, setHover, setTyping, setVolume } =
    useCyberdeckAudio();
  const [open, setOpen] = useState(false);
  const [wallpaper, setWallpaper] = useState<'live' | 'still'>(() => {
    try {
      return localStorage.getItem('ce_cyberdeck_wallpaper') === 'still' ? 'still' : 'live';
    } catch {
      return 'live';
    }
  });

  // the mod ships animated.webm plus a first_frame.jpg poster — let the user pick
  useEffect(() => {
    const root = document.documentElement;
    if (wallpaper === 'still') root.setAttribute('data-cp-wallpaper', 'still');
    else root.removeAttribute('data-cp-wallpaper');
    try {
      localStorage.setItem('ce_cyberdeck_wallpaper', wallpaper);
    } catch {
      /* ignore */
    }
  }, [wallpaper]);

  const VolumeIcon = settings.volume === 0 ? VolumeX : settings.volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
      {open ? (
        <div
          className="w-[19rem] max-w-[calc(100vw-2rem)] border shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200"
          style={{
            backgroundColor: PANEL,
            borderColor: 'rgba(234, 234, 34, 0.45)',
            clipPath:
              'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
            boxShadow: '0 24px 60px -24px rgba(0,0,0,0.9), 0 0 24px -12px rgba(234,234,34,0.5)',
          }}
        >
          {/* header */}
          <div
            className="flex items-center justify-between px-3 py-2 border-b"
            style={{ borderColor: 'rgba(234, 234, 34, 0.25)' }}
          >
            <div className="flex items-center gap-2">
              <AudioLines className="w-3.5 h-3.5" style={{ color: YELLOW }} />
              <span
                className="text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ color: YELLOW }}
              >
                Cyberdeck Audio
              </span>
              <span
                className="text-[8px] font-mono px-1 py-0.5 border tracking-widest"
                style={{
                  color: blocked ? RED : isPlaying ? CYAN : '#8a8f99',
                  borderColor: blocked ? RED : isPlaying ? CYAN : '#8a8f99',
                }}
              >
                {blocked ? 'BLOCKED' : isPlaying ? 'LIVE' : 'IDLE'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              data-no-sfx="true"
              className="p-1 transition-colors cursor-pointer"
              style={{ color: '#8a8f99' }}
              aria-label="Close audio panel"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="px-3 py-1.5">
            <Row icon={<Music2 className="w-3.5 h-3.5" />} label="Soundtrack" hint="3 layers · synced">
              <Toggle on={settings.music} onChange={setMusic} label="Toggle soundtrack" />
            </Row>

            {/* layer meter + volume */}
            <div className="flex items-center gap-2 pb-2.5">
              <div className="flex items-end gap-[3px] h-4 shrink-0" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={settings.music ? 'cp-layer-bar' : ''}
                    style={{
                      width: 3,
                      height: `${[10, 16, 12][i]}px`,
                      backgroundColor: settings.music ? YELLOW : 'rgba(255,255,255,0.18)',
                      animationDelay: `${i * 0.18}s`,
                      opacity: settings.music ? 1 : 0.5,
                    }}
                  />
                ))}
              </div>
              <VolumeIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#8a8f99' }} />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={settings.volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                data-no-sfx="true"
                aria-label="Master volume"
                className="w-full h-1 appearance-none cursor-pointer cp-range"
                style={{ accentColor: YELLOW }}
              />
              <span
                className="text-[9px] font-mono w-7 text-right shrink-0"
                style={{ color: '#8a8f99' }}
              >
                {Math.round(settings.volume * 100)}
              </span>
            </div>

            <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />

            <Row icon={<Power className="w-3.5 h-3.5" />} label="Sound effects" hint="UI feedback">
              <Toggle on={settings.sfx} onChange={setSfx} label="Toggle sound effects" />
            </Row>
            <Row
              icon={<MousePointer2 className="w-3.5 h-3.5" />}
              label="Hover blips"
              hint="on control focus"
              dimmed={!settings.sfx}
            >
              <Toggle
                on={settings.hover}
                onChange={setHover}
                disabled={!settings.sfx}
                label="Toggle hover sounds"
              />
            </Row>
            <Row
              icon={<Keyboard className="w-3.5 h-3.5" />}
              label="Keystrokes"
              hint="scratchpad & inputs"
              dimmed={!settings.sfx}
            >
              <Toggle
                on={settings.typing}
                onChange={setTyping}
                disabled={!settings.sfx}
                label="Toggle typing sounds"
              />
            </Row>

            <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />

            {/* wallpaper: animated webm or the mod's first_frame poster */}
            <Row icon={<Film className="w-3.5 h-3.5" />} label="Wallpaper" hint="Night City skyline">
              <div className="flex shrink-0">
                {(
                  [
                    { id: 'live', label: 'Live', icon: <Film className="w-3 h-3" /> },
                    { id: 'still', label: 'Still', icon: <ImageIcon className="w-3 h-3" /> },
                  ] as const
                ).map((opt) => {
                  const active = wallpaper === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      data-no-sfx="true"
                      onClick={() => setWallpaper(opt.id)}
                      aria-pressed={active}
                      className="flex items-center gap-1 px-1.5 py-1 text-[9px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      style={{
                        color: active ? INK : '#8a8f99',
                        backgroundColor: active ? YELLOW : 'transparent',
                        border: `1px solid ${active ? YELLOW : 'rgba(255,255,255,0.18)'}`,
                        borderRight: opt.id === 'live' ? 'none' : undefined,
                      }}
                    >
                      {opt.icon}
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </Row>
          </div>

          <div
            className="px-3 py-2 border-t text-[9px] leading-relaxed tracking-wide"
            style={{ borderColor: 'rgba(255,255,255,0.08)', color: '#72767d' }}
          >
            {blocked
              ? 'Browser blocked autoplay — click anywhere on the page to start the soundtrack.'
              : 'Cyberdeck mod audio · soundtrack loops while this theme is active.'}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          data-no-sfx="true"
          className="flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] uppercase border shadow-xl transition-transform hover:scale-[1.03] cursor-pointer"
          style={{
            backgroundColor: PANEL,
            borderColor: 'rgba(234, 234, 34, 0.5)',
            color: YELLOW,
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
          }}
          title="Cyberdeck audio controls"
        >
          <AudioLines className="w-3.5 h-3.5" />
          <span>Cyberdeck</span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: isPlaying ? CYAN : blocked ? RED : '#72767d',
              boxShadow: isPlaying ? `0 0 8px ${CYAN}` : 'none',
            }}
          />
        </button>
      )}
    </div>
  );
};
