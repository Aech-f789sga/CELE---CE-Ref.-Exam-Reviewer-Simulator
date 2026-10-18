import React, { memo } from 'react';

/**
 * Underwave backdrop — ported from the Opera GX "Underwave" theme mod
 * (public/XThemes/aelmefcddnelhophneodelaokjogeemi).
 *
 * Recreates the mod's atmosphere without any of its Twitch sidebar chrome:
 *  - the crimson radial bloom that the mod paints behind its panels
 *  - the orthogonal + 45-degree circuit traces from gx_underwave_background.svg
 *  - travelling "signal" dashes that read as data moving through the board
 *  - slow drifting wave bands (the "underwave" itself)
 *
 * Pure SVG + CSS: no three.js, no canvas, no layout cost. Purely decorative,
 * so it stays pointer-events:none and is hidden from assistive tech.
 */

type Trace = {
  d: string;
  opacity: number;
  signal?: { dash: string; duration: number; delay: number };
};

const TRACES: Trace[] = [
  {
    d: 'M -60 172 H 196 L 244 220 H 402 L 470 152 H 664',
    opacity: 0.34,
    signal: { dash: '110 1500', duration: 11, delay: 0 },
  },
  {
    d: 'M -60 296 H 96 L 148 244 H 268',
    opacity: 0.22,
    signal: { dash: '70 900', duration: 9, delay: 3.4 },
  },
  {
    d: 'M 40 900 V 742 L 104 678 H 236 L 288 730 H 412',
    opacity: 0.26,
    signal: { dash: '90 1200', duration: 13, delay: 1.8 },
  },
  {
    d: 'M 1500 128 H 1268 L 1216 180 H 1064 L 1008 124 H 872',
    opacity: 0.34,
    signal: { dash: '110 1500', duration: 10, delay: 2.2 },
  },
  {
    d: 'M 1500 412 H 1332 L 1280 464 H 1148',
    opacity: 0.22,
  },
  {
    d: 'M 1500 796 V 706 L 1444 650 H 1300 L 1252 698 H 1128',
    opacity: 0.26,
    signal: { dash: '90 1200', duration: 12, delay: 5.1 },
  },
  {
    d: 'M 512 900 V 806 L 566 752 H 700 L 752 804 H 884 V 900',
    opacity: 0.18,
    signal: { dash: '80 1000', duration: 14, delay: 0.9 },
  },
];

/** PCB-style pads sitting on the trace bends. */
const NODES: Array<[number, number]> = [
  [196, 172],
  [244, 220],
  [402, 220],
  [470, 152],
  [96, 296],
  [148, 244],
  [104, 678],
  [236, 678],
  [288, 730],
  [1268, 128],
  [1216, 180],
  [1064, 180],
  [1332, 412],
  [1444, 650],
  [1300, 650],
  [566, 752],
  [700, 752],
  [752, 804],
];

const WAVES = [
  'M -80 612 C 120 566, 260 664, 460 618 S 760 552, 960 606 S 1260 668, 1520 616',
  'M -80 656 C 140 704, 300 596, 500 646 S 800 706, 1000 652 S 1280 592, 1520 650',
  'M -80 706 C 160 662, 320 742, 520 700 S 820 640, 1020 692 S 1300 748, 1520 700',
];

export const UnderwaveBackdrop: React.FC<{ className?: string }> = memo(({ className = '' }) => {
  return (
    <div className={`uw-backdrop ${className}`} aria-hidden="true">
      {/* crimson bloom + deep vignette, matching the mod's radial paint */}
      <div className="uw-backdrop-bloom" />

      <svg
        className="uw-backdrop-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="uw-trace-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fa1e4e" stopOpacity="0" />
            <stop offset="0.25" stopColor="#fa1e4e" stopOpacity="1" />
            <stop offset="0.75" stopColor="#fa1e4e" stopOpacity="1" />
            <stop offset="1" stopColor="#fa1e4e" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="uw-wave-fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fa1e4e" stopOpacity="0" />
            <stop offset="0.2" stopColor="#ff5c7f" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#fa1e4e" stopOpacity="0.5" />
            <stop offset="0.8" stopColor="#ff5c7f" stopOpacity="0.9" />
            <stop offset="1" stopColor="#fa1e4e" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* drifting wave bands */}
        <g className="uw-waves">
          {WAVES.map((d, i) => (
            <path
              key={`wave-${i}`}
              d={d}
              stroke="url(#uw-wave-fade)"
              strokeWidth={i === 1 ? 1.4 : 1}
              opacity={0.5 - i * 0.12}
              className="uw-wave"
              style={{ animationDelay: `${i * -7}s`, animationDuration: `${26 + i * 6}s` }}
            />
          ))}
        </g>

        {/* circuit traces */}
        <g className="uw-traces" strokeLinecap="square" strokeLinejoin="miter">
          {TRACES.map((t, i) => (
            <path
              key={`trace-${i}`}
              d={t.d}
              stroke="url(#uw-trace-fade)"
              strokeWidth={1}
              opacity={t.opacity}
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {TRACES.filter((t) => t.signal).map((t, i) => (
            <path
              key={`signal-${i}`}
              d={t.d}
              stroke="#ffd5de"
              strokeWidth={1.6}
              strokeDasharray={t.signal!.dash}
              opacity={0.75}
              vectorEffect="non-scaling-stroke"
              className="uw-signal"
              style={{
                animationDuration: `${t.signal!.duration}s`,
                animationDelay: `${t.signal!.delay}s`,
              }}
            />
          ))}
        </g>

        {/* solder pads on the bends */}
        <g className="uw-nodes">
          {NODES.map(([x, y], i) => (
            <rect
              key={`node-${i}`}
              x={x - 1.5}
              y={y - 1.5}
              width={3}
              height={3}
              fill="#fa1e4e"
              opacity={0.55}
            />
          ))}
        </g>
      </svg>

      {/* scanline + grain wash so flat areas never look empty */}
      <div className="uw-backdrop-scan" />
    </div>
  );
});

UnderwaveBackdrop.displayName = 'UnderwaveBackdrop';
