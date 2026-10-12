import React from 'react';

/** Pure-CSS spinning 3D cube used as the brand mark. */
export const Cube3D: React.FC<{ size?: number }> = ({ size = 40 }) => {
  const half = size / 2;
  const face = (t: string) => ({ transform: t, width: size, height: size });
  return (
    <div className="cube3d-scene" style={{ width: size, height: size }} aria-hidden="true">
      <div className="cube3d">
        <span className="cube3d-face" style={face(`rotateY(0deg) translateZ(${half}px)`)} />
        <span className="cube3d-face" style={face(`rotateY(90deg) translateZ(${half}px)`)} />
        <span className="cube3d-face" style={face(`rotateY(180deg) translateZ(${half}px)`)} />
        <span className="cube3d-face" style={face(`rotateY(-90deg) translateZ(${half}px)`)} />
        <span className="cube3d-face" style={face(`rotateX(90deg) translateZ(${half}px)`)} />
        <span className="cube3d-face" style={face(`rotateX(-90deg) translateZ(${half}px)`)} />
      </div>
    </div>
  );
};
