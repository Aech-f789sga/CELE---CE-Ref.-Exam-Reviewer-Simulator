import React, { memo, useEffect, useRef } from 'react';

/**
 * Cyberdeck backdrop — ported from the Opera GX "Cyberdeck" mod
 * (public/XThemes/Cyberpunk 2077/5.7_0).
 *
 * Layers, in the mod's own order:
 *  1. wallpaper/animated.webm (with mobile_dark.mp4 for narrow screens and
 *     first_frame.jpg as the poster / reduced-motion still)
 *  2. the glitch shader's binary matrix rain (shaders/cyberdeck.txt paints
 *     MATRIX_COLOR digits over the wallpaper) — recreated on a canvas
 *  3. scanline + chromatic wash and a vignette so cards stay readable
 */

const THEME_ROOT = '/XThemes/Cyberpunk%202077/5.7_0';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Binary rain, mirroring the shader's matrix block. */
const MatrixRain: React.FC = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let cols = 0;
    let drops: number[] = [];
    const fontSize = 14;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(window.innerWidth / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -60);
    };

    resize();
    window.addEventListener('resize', resize);

    let last = 0;
    const step = (t: number) => {
      raf = requestAnimationFrame(step);
      if (t - last < 70) return; // ~14fps is plenty and keeps the CPU quiet
      last = t;

      ctx.fillStyle = 'rgba(8, 5, 14, 0.10)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;

      for (let i = 0; i < cols; i++) {
        const ch = Math.random() > 0.5 ? '1' : '0';
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        // mostly yellow, a few cyan "data" columns like the shader's palette
        ctx.fillStyle = i % 9 === 0 ? 'rgba(0, 176, 244, 0.55)' : 'rgba(234, 234, 34, 0.32)';
        ctx.fillText(ch, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="cp-matrix" aria-hidden="true" />;
};

export const CyberdeckBackdrop: React.FC<{ className?: string }> = memo(({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduced = prefersReducedMotion();

  // don't burn battery animating a hidden tab
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onVisibility = () => {
      if (document.hidden) video.pause();
      else if (!prefersReducedMotion()) video.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <div className={`cp-backdrop ${className}`} aria-hidden="true">
      <video
        ref={videoRef}
        className="cp-wallpaper"
        poster={`${THEME_ROOT}/wallpaper/first_frame.jpg`}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      >
        <source src={`${THEME_ROOT}/wallpaper/mobile_dark.mp4`} type="video/mp4" media="(max-width: 820px)" />
        <source src={`${THEME_ROOT}/wallpaper/animated.webm`} type="video/webm" />
      </video>

      <div className="cp-wallpaper-shade" />
      {!reduced && <MatrixRain />}
      <div className="cp-scanlines" />
      <div className="cp-vignette" />
    </div>
  );
});

CyberdeckBackdrop.displayName = 'CyberdeckBackdrop';
