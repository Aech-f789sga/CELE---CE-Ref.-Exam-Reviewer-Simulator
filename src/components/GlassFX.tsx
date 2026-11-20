import React, { useEffect } from 'react';

/**
 * Pointer-driven 2.5D for the Fluent 2 skins.
 *
 * Mounted once at the app root. It does not wrap or clone any panel: a single
 * delegated `pointermove` listener finds the panel under the cursor and writes
 * four custom properties onto it —
 *
 *   --f-tx / --f-ty   pointer position, normalised to -1 … 1 from the centre
 *   --f-mx / --f-my   the same point as a percentage
 *
 * and section 17 of `index.css` turns those into a rotate and a specular
 * highlight. That indirection is the whole point: the effect works on markup it
 * has never seen, so panels added later inherit the behaviour for free, and
 * there is exactly one listener rather than one per card.
 *
 * It deliberately writes to *every* matching ancestor, not just the innermost
 * one. A well inside a panel should tilt with the panel it sits in, and each
 * element's angle is computed from its own rectangle, so nesting produces
 * parallax rather than compounding one rotation.
 */

/** Panels are the slate-filled, rounded wrappers — the same set section 17 targets. */
const PANEL_SELECTOR = '[class*="bg-slate-900"],[class*="bg-slate-950"],.app-card-bg,.hero-aurora';

/** Nesting deeper than this is a layout container, not a pane of glass. */
const MAX_DEPTH = 3;

const PANEL_CLASS = /(^|\s)rounded-(2xl|3xl)(\s|$)/;

export const GlassFX: React.FC = () => {
  useEffect(() => {
    /*
     * Motion is a preference, not a default. A tilt that follows the cursor is
     * exactly the kind of thing `prefers-reduced-motion` exists for, and on a
     * touch screen there is no cursor to follow — the pointer events that do
     * fire are finger drags, which would make panels lurch while scrolling.
     */
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const still = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || still.matches) return;

    let frame = 0;
    let lastX = 0;
    let lastY = 0;
    let active: HTMLElement[] = [];

    const clear = () => {
      for (const el of active) {
        el.style.removeProperty('--f-tx');
        el.style.removeProperty('--f-ty');
        el.style.removeProperty('--f-mx');
        el.style.removeProperty('--f-my');
      }
      active = [];
    };

    const paint = () => {
      frame = 0;

      // Only the two Fluent skins have a section 17 to read these. Checking
      // here rather than in CSS keeps the listener from doing work at all
      // while another theme is active.
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme !== 'v2' && theme !== 'v2_dark') {
        if (active.length) clear();
        return;
      }

      const hit = document.elementFromPoint(lastX, lastY);
      if (!hit) {
        if (active.length) clear();
        return;
      }

      // Walk up from the element under the cursor, collecting panels. The
      // cursor is usually over a <span> inside a <button> inside the panel.
      const found: HTMLElement[] = [];
      let node: Element | null = hit;
      while (node && found.length < MAX_DEPTH) {
        if (node instanceof HTMLElement && node.matches(PANEL_SELECTOR) && PANEL_CLASS.test(node.className)) {
          found.push(node);
        }
        node = node.parentElement;
      }

      // Drop properties from panels we have moved off, so they ease back to
      // rest instead of freezing mid-tilt.
      for (const el of active) {
        if (!found.includes(el)) {
          el.style.removeProperty('--f-tx');
          el.style.removeProperty('--f-ty');
          el.style.removeProperty('--f-mx');
          el.style.removeProperty('--f-my');
        }
      }
      active = found;

      for (const el of found) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        const px = (lastX - r.left) / r.width;
        const py = (lastY - r.top) / r.height;
        // Clamped because a panel can be partly off-screen, and a pointer
        // outside it should still produce a bounded tilt rather than a
        // rotation proportional to how far away it is.
        const tx = Math.max(-1, Math.min(1, (px - 0.5) * 2));
        const ty = Math.max(-1, Math.min(1, (py - 0.5) * 2));
        el.style.setProperty('--f-tx', tx.toFixed(3));
        el.style.setProperty('--f-ty', ty.toFixed(3));
        el.style.setProperty('--f-mx', `${(px * 100).toFixed(1)}%`);
        el.style.setProperty('--f-my', `${(py * 100).toFixed(1)}%`);
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      lastX = e.clientX;
      lastY = e.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      clear();
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', onLeave, { passive: true, capture: true });
    window.addEventListener('blur', onLeave);

    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onLeave, { capture: true });
      window.removeEventListener('blur', onLeave);
      if (frame) cancelAnimationFrame(frame);
      clear();
    };
  }, []);

  return null;
};
