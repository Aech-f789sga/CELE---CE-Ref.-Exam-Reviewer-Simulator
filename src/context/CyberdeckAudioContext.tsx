import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  CyberdeckSettings,
  cyberdeckAudio,
  DEFAULT_SETTINGS,
  loadSettings,
} from '../audio/cyberdeckAudio';

interface CyberdeckAudioContextType {
  settings: CyberdeckSettings;
  blocked: boolean;
  isPlaying: boolean;
  setMusic: (on: boolean) => void;
  setSfx: (on: boolean) => void;
  setHover: (on: boolean) => void;
  setTyping: (on: boolean) => void;
  setVolume: (v: number) => void;
}

const CyberdeckAudioContext = createContext<CyberdeckAudioContextType | undefined>(undefined);

const INTERACTIVE = 'button, a, [role="button"], summary, label[for], input[type="checkbox"]';

/**
 * Wires the Cyberdeck mod's sound design into the app while the Cyberdeck theme
 * is active: hover / click / tab / keystroke effects plus the layered soundtrack.
 * All of it is delegated from the document so no component needs to opt in.
 */
export const CyberdeckAudioProvider: React.FC<{ active: boolean; children: React.ReactNode }> = ({
  active,
  children,
}) => {
  const [settings, setSettings] = useState<CyberdeckSettings>(() => loadSettings());
  const [blocked, setBlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    cyberdeckAudio.init();
    const unsubscribe = cyberdeckAudio.subscribe((next) => setSettings(next));
    return () => {
      unsubscribe();
    };
  }, []);

  // start / stop the soundtrack with the theme
  useEffect(() => {
    if (!active) {
      cyberdeckAudio.stopAll();
      setIsPlaying(false);
      return;
    }

    const tryStart = () => {
      cyberdeckAudio.unlock();
      window.setTimeout(() => {
        setBlocked(cyberdeckAudio.blocked);
        setIsPlaying(cyberdeckAudio.isPlayingMusic);
      }, 250);
    };

    tryStart();

    const onFirstGesture = () => tryStart();
    window.addEventListener('pointerdown', onFirstGesture, { once: true });
    window.addEventListener('keydown', onFirstGesture, { once: true });

    return () => {
      window.removeEventListener('pointerdown', onFirstGesture);
      window.removeEventListener('keydown', onFirstGesture);
    };
  }, [active]);

  // keep the panel's "now playing" light honest
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      setBlocked(cyberdeckAudio.blocked);
      setIsPlaying(cyberdeckAudio.isPlayingMusic);
    }, 1500);
    return () => window.clearInterval(id);
  }, [active]);

  // delegated UI sound effects
  useEffect(() => {
    if (!active) return;

    const isOptedOut = (el: Element | null) =>
      !!el && (el as HTMLElement).closest('[data-no-sfx="true"]') !== null;

    const onPointerOver = (e: PointerEvent) => {
      const target = (e.target as Element | null)?.closest(INTERACTIVE);
      if (!target || isOptedOut(target)) return;
      const from = e.relatedTarget as Node | null;
      if (from && target.contains(from)) return; // moving inside the same control
      cyberdeckAudio.hover();
    };

    const onClick = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest(INTERACTIVE);
      if (!target || isOptedOut(target)) return;
      cyberdeckAudio.click();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const tag = el.tagName;
      const typing =
        tag === 'TEXTAREA' ||
        (tag === 'INPUT' &&
          !['checkbox', 'radio', 'range', 'button', 'submit', 'file'].includes(
            (el as HTMLInputElement).type
          )) ||
        el.isContentEditable;
      if (typing) cyberdeckAudio.key(e.key);
    };

    document.addEventListener('pointerover', onPointerOver, true);
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKeyDown, true);

    return () => {
      document.removeEventListener('pointerover', onPointerOver, true);
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('keydown', onKeyDown, true);
    };
  }, [active]);

  const value = useMemo<CyberdeckAudioContextType>(
    () => ({
      settings,
      blocked,
      isPlaying,
      setMusic: (on) => cyberdeckAudio.setMusic(on),
      setSfx: (on) => cyberdeckAudio.setSfx(on),
      setHover: (on) => cyberdeckAudio.setHover(on),
      setTyping: (on) => cyberdeckAudio.setTyping(on),
      setVolume: (v) => cyberdeckAudio.setVolume(v),
    }),
    [settings, blocked, isPlaying]
  );

  return (
    <CyberdeckAudioContext.Provider value={value}>{children}</CyberdeckAudioContext.Provider>
  );
};

export const useCyberdeckAudio = (): CyberdeckAudioContextType => {
  const ctx = useContext(CyberdeckAudioContext);
  if (!ctx) {
    // Safe fallback so the panel can be rendered anywhere without a hard crash.
    return {
      settings: DEFAULT_SETTINGS,
      blocked: false,
      isPlaying: false,
      setMusic: () => {},
      setSfx: () => {},
      setHover: () => {},
      setTyping: () => {},
      setVolume: () => {},
    };
  }
  return ctx;
};
