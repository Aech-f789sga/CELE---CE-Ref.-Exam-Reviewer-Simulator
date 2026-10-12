import React, { useRef } from 'react';

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  /** max rotation in degrees */
  max?: number;
}

/** Pointer-driven 3D tilt with a moving glare. Purely visual; children keep their own behaviour. */
export const Tilt3D: React.FC<Tilt3DProps> = ({ children, className = '', max = 9 }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${((0.5 - py) * 2 * max).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${((px - 0.5) * 2 * max).toFixed(2)}deg`);
    el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div className={`tilt3d-wrap ${className}`}>
      <div ref={ref} className="tilt3d" onPointerMove={onMove} onPointerLeave={onLeave}>
        {children}
        <span className="tilt3d-glare" aria-hidden="true" />
      </div>
    </div>
  );
};
