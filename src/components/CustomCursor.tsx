import React, { useEffect, useState, useRef } from 'react';

/**
 * CustomCursor
 * Creates a smooth, transparent circular cursor follower with an optical negative filter
 * (backdrop invert + difference blend mode).
 * 
 * Perfect Centering Guarantee:
 * - Position is updated directly via pointer coordinates with translate3d(x, y, 0) translate(-50%, -50%).
 * - No CSS transitions are applied to the coordinate transform, ensuring zero lag and zero drift.
 * - Expanding when hovering over clickable panels / tabs is applied strictly to an inner wrapper
 *   using `transform-origin: center center` (scale only), so it NEVER moves away from the mouse point.
 * - Position is kept in a mutable ref and not overwritten by React re-renders.
 */
export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const cursorRef = useRef<HTMLDivElement>(null);
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
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
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
        setIsHovering(!!clickable);
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
      cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
    }
  });

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999999] transition-opacity duration-150 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      {/* 
        Inner Circle with Negative Inversion Filter:
        backdropFilter: invert(100%) and mixBlendMode: difference.
        Scale transition occurs smoothly around origin-center (50% 50%),
        guaranteeing the circle NEVER shifts or moves away from the mouse pointer.
      */}
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 ease-out origin-center ${
          isMouseDown ? 'scale-80' : isHovering ? 'scale-130' : 'scale-100'
        }`}
        style={{
          backdropFilter: 'invert(100%) contrast(115%)',
          WebkitBackdropFilter: 'invert(100%) contrast(115%)',
          mixBlendMode: 'difference',
          border: '1.5px solid rgba(255, 255, 255, 0.9)',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
        }}
      >
        {/* Precision center dot indicating exact mouse hot-spot */}
        <div
          className="w-1.5 h-1.5 rounded-full bg-white opacity-90 transition-transform duration-200"
          style={{
            mixBlendMode: 'difference',
          }}
        />
      </div>
    </div>
  );
};
