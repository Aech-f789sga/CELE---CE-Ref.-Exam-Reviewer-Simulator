/**
 * Cyberdeck audio engine — ported from the Opera GX "Cyberdeck" mod
 * (public/XThemes/Cyberpunk 2077/5.7_0/manifest.json).
 *
 * The mod declares:
 *   background_music  -> one track "Cyberdeck" made of three layered stems
 *                        (music/layer1..3.mp3) that must play in sync
 *   browser_sounds    -> HOVER, CLICK, SWITCH_TOGGLE, TAB_INSERT, TAB_CLOSE,
 *                        FEATURE_SWITCH_ON/OFF
 *   keyboard_sounds   -> TYPING_LETTER (8 variants), TYPING_BACKSPACE,
 *                        TYPING_ENTER
 *
 * Everything here is opt-in and persisted, so the exam simulator stays silent
 * for anyone who does not want sound.
 */

const THEME_ROOT = '/XThemes/Cyberpunk%202077/5.7_0';

const MUSIC_TRACKS = [
  `${THEME_ROOT}/music/layer1.mp3`,
  `${THEME_ROOT}/music/layer2.mp3`,
  `${THEME_ROOT}/music/layer3.mp3`,
];

const SFX = {
  hover: `${THEME_ROOT}/sounds/Hover.mp3`,
  click: `${THEME_ROOT}/sounds/spacebar.mp3`,
  toggleOn: `${THEME_ROOT}/sounds/FeatureSwitchON.mp3`,
  toggleOff: `${THEME_ROOT}/sounds/FeatureSwitchOFF.mp3`,
  tab: `${THEME_ROOT}/sounds/NewTab.mp3`,
  close: `${THEME_ROOT}/sounds/CloseTab.mp3`,
  backspace: `${THEME_ROOT}/sounds/backspace.mp3`,
  enter: `${THEME_ROOT}/sounds/spacebar.mp3`,
  keys: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${THEME_ROOT}/sounds/keyboard${n}.mp3`),
} as const;

export type CyberdeckSettings = {
  music: boolean;
  sfx: boolean;
  hover: boolean;
  typing: boolean;
  volume: number; // 0..1, applies to music + sfx
};

const STORAGE_KEY = 'ce_cyberdeck_audio';

export const DEFAULT_SETTINGS: CyberdeckSettings = {
  music: true,
  sfx: true,
  hover: true,
  typing: true,
  volume: 0.45,
};

export function loadSettings(): CyberdeckSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw);
    return {
      music: typeof parsed.music === 'boolean' ? parsed.music : DEFAULT_SETTINGS.music,
      sfx: typeof parsed.sfx === 'boolean' ? parsed.sfx : DEFAULT_SETTINGS.sfx,
      hover: typeof parsed.hover === 'boolean' ? parsed.hover : DEFAULT_SETTINGS.hover,
      typing: typeof parsed.typing === 'boolean' ? parsed.typing : DEFAULT_SETTINGS.typing,
      volume:
        typeof parsed.volume === 'number' && parsed.volume >= 0 && parsed.volume <= 1
          ? parsed.volume
          : DEFAULT_SETTINGS.volume,
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

type Listener = (s: CyberdeckSettings) => void;

class CyberdeckAudio {
  settings: CyberdeckSettings = { ...DEFAULT_SETTINGS };

  /** true once a user gesture has unlocked playback */
  unlocked = false;
  /** true when the browser refused to start the music on its own */
  blocked = false;

  private listeners = new Set<Listener>();
  private music: HTMLAudioElement[] = [];
  private sfxPool = new Map<string, HTMLAudioElement[]>();
  private sfxIndex = new Map<string, number>();
  private lastHoverAt = 0;
  private lastKeyAt = 0;
  private initialized = false;

  init() {
    if (this.initialized || typeof window === 'undefined') return;
    this.initialized = true;
    this.settings = loadSettings();

    // layered soundtrack — three stems, one clock
    this.music = MUSIC_TRACKS.map((src) => {
      const el = new Audio(src);
      el.loop = true;
      el.preload = 'auto';
      el.volume = this.musicVolume;
      return el;
    });

    // small round-robin pools so rapid hovers/keystrokes retrigger cleanly
    Object.entries(SFX).forEach(([name, src]) => {
      if (Array.isArray(src)) {
        this.sfxPool.set(name, src.slice(0, 3).map((s) => this.makeSfx(s)));
      } else {
        this.sfxPool.set(name, [this.makeSfx(src), this.makeSfx(src)]);
      }
    });
  }

  private makeSfx(src: string) {
    const el = new Audio(src);
    el.preload = 'auto';
    el.volume = this.sfxVolume;
    return el;
  }

  private get musicVolume() {
    return Math.min(1, this.settings.volume * 0.7);
  }

  private get sfxVolume() {
    return Math.min(1, this.settings.volume * 0.9);
  }

  subscribe(fn: Listener) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private emit() {
    this.listeners.forEach((fn) => fn({ ...this.settings }));
  }

  private persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
    } catch {
      /* storage may be unavailable */
    }
  }

  private update(patch: Partial<CyberdeckSettings>) {
    this.settings = { ...this.settings, ...patch };
    this.music.forEach((el) => (el.volume = this.musicVolume));
    this.sfxPool.forEach((pool) => pool.forEach((el) => (el.volume = this.sfxVolume)));
    this.persist();
    this.emit();

    if ('music' in patch) {
      if (this.settings.music) this.playMusic();
      else this.pauseMusic();
    }
    if ('sfx' in patch && patch.sfx) {
      this.play('toggleOn');
    } else if ('sfx' in patch && !patch.sfx) {
      this.play('toggleOff', true);
    }
  }

  setMusic(on: boolean) {
    if (on) this.play('toggleOn');
    this.update({ music: on });
  }

  setSfx(on: boolean) {
    this.update({ sfx: on });
  }

  setHover(on: boolean) {
    this.update({ hover: on });
    if (on) this.play('toggleOn');
  }

  setTyping(on: boolean) {
    this.update({ typing: on });
    if (on) this.play('toggleOn');
  }

  setVolume(v: number) {
    this.update({ volume: Math.max(0, Math.min(1, v)) });
  }

  /** Call from the first user gesture: browsers block audio before one. */
  unlock() {
    this.init();
    this.unlocked = true;
    this.blocked = false;
    // idempotent: also resumes the soundtrack when the theme is re-selected
    if (this.settings.music) this.playMusic();
  }

  private playMusic() {
    this.init();
    this.music.forEach((el) => {
      const p = el.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          this.blocked = true;
          this.emit();
        });
      }
    });
  }

  private pauseMusic() {
    this.music.forEach((el) => el.pause());
  }

  play(name: keyof typeof SFX | 'keys', force = false) {
    if (!this.settings.sfx && !force) return;
    const pool = this.sfxPool.get(name as string);
    if (!pool || pool.length === 0) return;
    const i = (this.sfxIndex.get(name as string) ?? 0) % pool.length;
    this.sfxIndex.set(name as string, i + 1);
    const el = pool[i];
    el.volume = this.sfxVolume;
    try {
      el.currentTime = 0;
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {
      /* ignore */
    }
  }

  hover() {
    if (!this.settings.sfx || !this.settings.hover) return;
    const now = performance.now();
    if (now - this.lastHoverAt < 90) return;
    this.lastHoverAt = now;
    this.play('hover');
  }

  click() {
    this.play('click');
  }

  tab() {
    this.play('tab');
  }

  closeTab() {
    this.play('close');
  }

  /** Typing sounds follow the mod's keyboard sample set. */
  key(key: string) {
    if (!this.settings.sfx || !this.settings.typing) return;
    const now = performance.now();
    if (now - this.lastKeyAt < 28) return;
    this.lastKeyAt = now;

    if (key === 'Backspace') return this.play('backspace');
    if (key === 'Enter' || key === ' ') return this.play('enter');

    const pool = this.sfxPool.get('keys');
    if (!pool) return;
    const el = pool[Math.floor(Math.random() * pool.length)];
    el.volume = this.sfxVolume;
    try {
      el.currentTime = 0;
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {
      /* ignore */
    }
  }

  /** Only the Cyberdeck theme should make noise. */
  stopAll() {
    this.pauseMusic();
  }

  get isPlayingMusic() {
    return this.music.some((el) => !el.paused);
  }
}

export const cyberdeckAudio = new CyberdeckAudio();
