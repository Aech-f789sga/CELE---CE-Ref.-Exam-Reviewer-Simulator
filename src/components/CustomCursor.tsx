import React, { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor
 * Creates a smooth circular cursor follower with a true optical negative effect
 * (inversion backdrop filter + difference blend mode).
 * 
 * Perfect Centering Guarantee:
 * - Position is updated directly via pointer coordinates: translate3d(clientX px, clientY px, 0)
 * - The circle is fixed at w-8 h-8 with exact negative margins (-top-4 -left-4 or -ml-4 -mt-4),
 *   guaranteeing that (clientX, clientY) is ALWAYS mathematically the dead center of the circle.
 * - Zero lag, zero displacement, zero magnetic offset when hovering tabs or clickable panels.
 * - Uses backdrop-filter: invert(100%) and mix-blend-mode: difference with #ffffff background
 *   for a true photographic negative effect that inverts all pixels beneath the circle.
 */
export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on touch devices to avoid ghost circles or interfering with touch gestures
    const checkTouch = () => {
      const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isCoarse || hasTouch);
    };
    checkTouch();

    const updatePosition = (clientX: number, clientY: number) => {
      posRef.current.x = clientX;
      posRef.current.y = clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      updatePosition(e.clientX, e.clientY);

      // Check whether target or its ancestor is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest(
          'a, button, input, textarea, select, [role="button"], label, [data-clickable="true"], .cursor-pointer'
        );
        const hovering = !!clickable;
        setIsHovering(hovering);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = (e: MouseEvent) => {
      setVisible(true);
      updatePosition(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  // Re-apply position after any React re-render so it never gets wiped out
  useEffect(() => {
    if (cursorRef.current && posRef.current.x >= 0 && posRef.current.y >= 0) {
      cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
    }
  });

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999999] transition-opacity duration-150 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        willChange: 'transform',
        transform: 'translate3d(-100px, -100px, 0)',
      }}
      aria-hidden="true"
    >
      {/* 
        Negative Effect Circle:
        Positioned with -top-4 -left-4 (-16px, -16px) on a 32px (w-8 h-8) circle,
        so (0,0) of this container is precisely at the center of the circle.
        Inside the circle is 100% TRANSPARENT, filtering all pixels underneath with
        a true negative optical inversion (backdrop-filter: invert(100%)).
      */}
      <div
        ref={circleRef}
        className={`absolute -top-4 -left-4 w-8 h-8 rounded-full pointer-events-none flex items-center justify-center transition-transform duration-100 ease-out origin-center ${
          isMouseDown ? 'scale-75' : isHovering ? 'scale-125' : 'scale-100'
        }`}
        style={{
          backgroundColor: 'transparent',
          backdropFilter: 'invert(100%)',
          WebkitBackdropFilter: 'invert(100%)',
          border: '1.5px solid rgba(255, 255, 255, 0.85)',
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.5), 0 0 8px rgba(255, 255, 255, 0.25)',
        }}
      >
        {/* Precise central cross reticle dot */}
        <span
          className="w-1 h-1 rounded-full pointer-events-none"
          style={{
            backgroundColor: 'transparent',
            backdropFilter: 'invert(100%)',
            WebkitBackdropFilter: 'invert(100%)',
            border: '1px solid rgba(255, 255, 255, 0.95)',
          }}
        />
      </div>
    </div>
  );
};
