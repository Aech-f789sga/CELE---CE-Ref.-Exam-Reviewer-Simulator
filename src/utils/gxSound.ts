/**
 * Opera GX Sound System for CE Board Exam Reviewer
 * Plays authentic Opera GX notification sounds and synthesized cyber audio cues
 */

const STORAGE_KEY_GX_SOUND = 'ce_board_gx_sound_enabled';
const NOTIFICATION_AUDIO_URL = '/opera-gx/notification.mp3';

let notificationAudio: HTMLAudioElement | null = null;
let audioCtx: AudioContext | null = null;

export const isGxSoundEnabled = (): boolean => {
  if (typeof window === 'undefined') return true;
  const stored = localStorage.getItem(STORAGE_KEY_GX_SOUND);
  return stored !== null ? stored === 'true' : true;
};

export const setGxSoundEnabled = (enabled: boolean): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_GX_SOUND, String(enabled));
  window.dispatchEvent(new CustomEvent('gx_sound_toggled', { detail: enabled }));
};

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
};

export type GxSoundType = 'notification' | 'click' | 'switch' | 'success' | 'alert';

export const playGxSound = (type: GxSoundType = 'click'): void => {
  if (!isGxSoundEnabled()) return;

  try {
    if (type === 'notification' || type === 'success') {
      if (!notificationAudio) {
        notificationAudio = new Audio(NOTIFICATION_AUDIO_URL);
        notificationAudio.volume = 0.45;
      }
      notificationAudio.currentTime = 0;
      notificationAudio.play().catch(() => {
        // Fallback to synth if audio file play blocked
        playSynthesizedCyberCue(type);
      });
      return;
    }

    playSynthesizedCyberCue(type);
  } catch {
    // Audio playback error ignored safely
  }
};

/**
 * High-tech synthesized cyber audio cues matching Opera GX interface sounds
 */
function playSynthesizedCyberCue(type: GxSoundType): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === 'click') {
    // Subtle crisp high-tech click
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.start(now);
    osc.stop(now + 0.045);
  } else if (type === 'switch') {
    // Opera GX tab switch swoosh
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(960, now + 0.08);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.085);
  } else if (type === 'alert') {
    // Futuristic warning ping
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(580, now);
    osc.frequency.setValueAtTime(880, now + 0.06);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.start(now);
    osc.stop(now + 0.185);
  } else {
    // Positive melodic chime
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.07); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.14); // G5
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc.start(now);
    osc.stop(now + 0.29);
  }
}
