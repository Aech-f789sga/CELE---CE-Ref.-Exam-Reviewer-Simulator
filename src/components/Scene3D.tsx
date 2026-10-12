import React, { useEffect, useRef } from 'react';

type Vec = [number, number, number];
type Edge = [number, number];
interface Model {
  verts: Vec[];
  edges: Edge[];
}

/* ---------- Wireframe models ---------- */

const cubeModel = (s: number): Model => {
  const v: Vec[] = [];
  for (const x of [-s, s]) for (const y of [-s, s]) for (const z of [-s, s]) v.push([x, y, z]);
  const e: Edge[] = [];
  for (let i = 0; i < 8; i++)
    for (let j = i + 1; j < 8; j++) {
      const d = (i ^ j);
      if (d === 1 || d === 2 || d === 4) e.push([i, j]);
    }
  return { verts: v, edges: e };
};

const octaModel = (s: number): Model => ({
  verts: [[s, 0, 0], [-s, 0, 0], [0, s, 0], [0, -s, 0], [0, 0, s], [0, 0, -s]],
  edges: [[0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]],
});

/** A Warren-truss bridge: two parallel trusses with cross bracing. */
const trussModel = (bays: number, len: number, h: number, w: number): Model => {
  const verts: Vec[] = [];
  const edges: Edge[] = [];
  const step = len / bays;
  const x0 = -len / 2;
  for (const z of [-w, w]) {
    const base = verts.length;
    // bottom nodes 0..bays, top nodes bays+1..2*bays
    for (let i = 0; i <= bays; i++) verts.push([x0 + i * step, h / 2, z]);
    for (let i = 0; i < bays; i++) verts.push([x0 + (i + 0.5) * step, -h / 2, z]);
    for (let i = 0; i < bays; i++) edges.push([base + i, base + i + 1]);
    for (let i = 0; i < bays - 1; i++) edges.push([base + bays + 1 + i, base + bays + 2 + i]);
    for (let i = 0; i < bays; i++) {
      edges.push([base + i, base + bays + 1 + i]);
      edges.push([base + i + 1, base + bays + 1 + i]);
    }
  }
  const per = verts.length / 2;
  for (let i = 0; i <= bays; i++) edges.push([i, per + i]); // deck cross beams
  for (let i = 0; i < bays; i++) edges.push([bays + 1 + i, per + bays + 1 + i]); // top cross
  return { verts, edges };
};

/* ---------- math ---------- */

const rot = (p: Vec, ax: number, ay: number, az: number): Vec => {
  let [x, y, z] = p;
  let c = Math.cos(ax), s = Math.sin(ax);
  [y, z] = [y * c - z * s, y * s + z * c];
  c = Math.cos(ay); s = Math.sin(ay);
  [x, z] = [x * c + z * s, -x * s + z * c];
  c = Math.cos(az); s = Math.sin(az);
  [x, y] = [x * c - y * s, x * s + y * c];
  return [x, y, z];
};

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

interface Props {
  /** 'background' = full-page ambient scene, 'hero' = a single big rotating truss bridge */
  variant?: 'background' | 'hero';
  className?: string;
  accent?: string;
}

interface Floater {
  model: Model;
  pos: Vec;
  rotV: Vec;
  rot: Vec;
  hue: number; // 0 = accent, 1 = cyan, 2 = magenta
  scale: number;
}

export const Scene3D: React.FC<Props> = ({ variant = 'background', className = '', accent = '#8b7bff' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const palette: [number, number, number][] = [hexToRgb(accent), [34, 211, 238], [244, 114, 182]];
    const isHero = variant === 'hero';

    let w = 0, h = 0, dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // pointer parallax (smoothed)
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    const hero = trussModel(6, 3.4, 1.0, 0.55);
    const floaters: Floater[] = [];
    if (!isHero) {
      const makers = [() => cubeModel(0.5), () => octaModel(0.7), () => trussModel(3, 1.6, 0.5, 0.3)];
      for (let i = 0; i < 9; i++) {
        floaters.push({
          model: makers[i % makers.length](),
          pos: [(Math.random() * 2 - 1) * 5.5, (Math.random() * 2 - 1) * 2.6, 3 + Math.random() * 5],
          rotV: [(Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.3],
          rot: [Math.random() * 6, Math.random() * 6, Math.random() * 6],
          hue: i % 3,
          scale: 0.7 + Math.random() * 0.9,
        });
      }
    }
    const dust = !isHero
      ? Array.from({ length: 70 }, () => ({
          x: (Math.random() * 2 - 1) * 8,
          y: (Math.random() * 2 - 1) * 4,
          z: 1 + Math.random() * 9,
          s: 0.4 + Math.random() * 1.2,
        }))
      : [];

    const project = (p: Vec, fov: number, camZ: number): [number, number, number] | null => {
      const z = p[2] + camZ;
      if (z < 0.2) return null;
      const f = fov / z;
      return [w / 2 + p[0] * f, h / 2 + p[1] * f, f];
    };

    const drawModel = (
      m: Model, rv: Vec, off: Vec, scale: number, color: [number, number, number],
      alpha: number, fov: number, camZ: number, glow: boolean,
    ) => {
      const pts = m.verts.map((v) => {
        const r = rot([v[0] * scale, v[1] * scale, v[2] * scale], rv[0], rv[1], rv[2]);
        return project([r[0] + off[0], r[1] + off[1], r[2] + off[2]], fov, camZ);
      });
      ctx.lineWidth = isHero ? 1.6 : 1;
      ctx.strokeStyle = `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
      if (glow) { ctx.shadowColor = `rgba(${color[0]},${color[1]},${color[2]},0.9)`; ctx.shadowBlur = 10; }
      ctx.beginPath();
      for (const [a, b] of m.edges) {
        const pa = pts[a], pb = pts[b];
        if (!pa || !pb) continue;
        ctx.moveTo(pa[0], pa[1]);
        ctx.lineTo(pb[0], pb[1]);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = `rgba(255,255,255,${Math.min(1, alpha + 0.25)})`;
      for (const p of pts) {
        if (!p) continue;
        const r = Math.max(1.2, p[2] * (isHero ? 0.035 : 0.02));
        ctx.beginPath();
        ctx.arc(p[0], p[1], r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawFloor = (t: number, camZ: number) => {
      // perspective grid receding to the horizon, scrolling toward the viewer
      const fov = Math.min(w, h) * 1.1;
      const horizon = h * 0.62;
      const [r, g, b] = palette[0];
      const lines = 16;
      const offset = (t * 0.25) % 1;
      ctx.lineWidth = 1;
      for (let i = 0; i < lines; i++) {
        const z = 1 + (i + 1 - offset) * 0.9;
        const y = horizon + (1.4 * fov) / (z + camZ - 3);
        if (y > h || y < horizon) continue;
        const a = Math.max(0, 0.22 * (1 - i / lines));
        ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      for (let i = -10; i <= 10; i++) {
        const xTop = w / 2 + i * w * 0.012 + mouse.x * 20;
        const xBot = w / 2 + i * w * 0.16 + mouse.x * 60;
        const grad = ctx.createLinearGradient(0, horizon, 0, h);
        grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0.2)`);
        ctx.strokeStyle = grad;
        ctx.beginPath(); ctx.moveTo(xTop, horizon); ctx.lineTo(xBot, h); ctx.stroke();
      }
    };

    let raf = 0;
    let last = performance.now();
    let time = 0;
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      time += reduce ? 0 : dt;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      ctx.clearRect(0, 0, w, h);

      if (isHero) {
        const fov = Math.min(w, h * 1.7) * 0.95;
        const rv: Vec = [0.45 + mouse.y * 0.25, time * 0.5 + mouse.x * 0.6, 0.05];
        drawModel(hero, rv, [0, 0, 0], 1, palette[1], 0.9, fov, 4.2, true);
        // soft inner ghost for depth
        drawModel(hero, [rv[0], rv[1] + 0.02, rv[2]], [0, 0.05, 0], 1.04, palette[0], 0.35, fov, 4.2, false);
      } else {
        drawFloor(time, 4);
        const fov = Math.min(w, h) * 1.25;
        const camZ = 1;
        for (const d of dust) {
          const p = project([d.x - mouse.x * 0.8, d.y - mouse.y * 0.5 + Math.sin(time + d.x) * 0.05, d.z], fov, camZ);
          if (!p) continue;
          ctx.fillStyle = `rgba(200,210,255,${Math.min(0.5, p[2] * 0.012)})`;
          ctx.fillRect(p[0], p[1], d.s, d.s);
        }
        for (const f of floaters) {
          f.rot[0] += f.rotV[0] * (reduce ? 0 : dt);
          f.rot[1] += f.rotV[1] * (reduce ? 0 : dt);
          f.rot[2] += f.rotV[2] * (reduce ? 0 : dt);
          const bob = Math.sin(time * 0.6 + f.pos[0]) * 0.18;
          const px = f.pos[0] - mouse.x * (0.25 + f.pos[2] * 0.12);
          const py = f.pos[1] + bob - mouse.y * (0.18 + f.pos[2] * 0.08);
          const depthFade = Math.max(0.12, 0.5 - f.pos[2] * 0.04);
          drawModel(f.model, f.rot, [px, py, f.pos[2]], f.scale, palette[f.hue], depthFade, fov, camZ, false);
        }
      }
      raf = requestAnimationFrame(frame);
    };

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) { last = performance.now(); raf = requestAnimationFrame(frame); }
    };
    document.addEventListener('visibilitychange', onVis);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [variant, accent]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
    />
  );
};
