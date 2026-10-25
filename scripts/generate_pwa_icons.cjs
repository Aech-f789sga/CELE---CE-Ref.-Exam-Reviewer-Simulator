const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
}

const crcTable = createCRC32Table();

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  }
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function makePngBuffer(width, height, getPixel) {
  const rowLen = 1 + width * 4;
  const raw = Buffer.alloc(rowLen * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowLen;
    raw[rowOffset] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y, width, height);
      const px = rowOffset + 1 + x * 4;
      raw[px] = Math.min(255, Math.max(0, Math.round(r)));
      raw[px + 1] = Math.min(255, Math.max(0, Math.round(g)));
      raw[px + 2] = Math.min(255, Math.max(0, Math.round(b)));
      raw[px + 3] = Math.min(255, Math.max(0, Math.round(a)));
    }
  }

  const deflated = zlib.deflateSync(raw, { level: 9 });

  // PNG Signature
  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type: RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = data.length;
  const header = Buffer.alloc(4);
  header.writeUInt32BE(len, 0);

  const toCrc = Buffer.concat([typeBuf, data]);
  const crcVal = crc32(toCrc);
  const footer = Buffer.alloc(4);
  footer.writeUInt32BE(crcVal, 0);

  return Buffer.concat([header, typeBuf, data, footer]);
}

// Distance from point to line segment
function distToSegment(px, py, x1, y1, x2, y2) {
  const l2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
  if (l2 === 0) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
}

function renderIcon(isMaskable) {
  return function (x, y, w, h) {
    const nx = x / w;
    const ny = y / h;

    // Background gradient: #020617 to #0f172a
    let bgR = 2 + (15 - 2) * ny;
    let bgG = 6 + (23 - 6) * ny;
    let bgB = 23 + (42 - 23) * ny;

    // Corner radius for non-maskable (standard squircle icon)
    let alpha = 255;
    if (!isMaskable) {
      const radius = 0.22;
      const rx = nx < radius ? radius - nx : nx > 1 - radius ? nx - (1 - radius) : 0;
      const ry = ny < radius ? radius - ny : ny > 1 - radius ? ny - (1 - radius) : 0;
      if (rx > 0 && ry > 0) {
        const d = Math.hypot(rx, ry);
        if (d > radius) {
          alpha = 0;
          return [0, 0, 0, 0];
        } else if (d > radius - 0.015) {
          alpha = 255 * (1 - (d - (radius - 0.015)) / 0.015);
        }
      }
    }

    // Grid lines in background
    const gridN = 8;
    const gx = (nx * gridN) % 1;
    const gy = (ny * gridN) % 1;
    if (Math.abs(gx) < 0.03 || Math.abs(gy) < 0.03) {
      bgR += 14;
      bgG += 35;
      bgB += 55;
    }

    // Outer circle ring
    const cd = Math.hypot(nx - 0.5, ny - 0.5);
    const ringRadius = isMaskable ? 0.36 : 0.40;
    if (Math.abs(cd - ringRadius) < 0.008) {
      return [56, 189, 248, alpha * 0.7]; // Cyan ring
    }

    // Scale coordinates inside safe zone
    const scale = isMaskable ? 0.72 : 0.82;
    const cx = (nx - 0.5) / scale + 0.5;
    const cy = (ny - 0.5) / scale + 0.5;

    // Triangle truss coordinates
    // Top pin: (0.5, 0.24)
    // Left pin: (0.24, 0.74)
    // Right pin: (0.76, 0.74)
    const tX = 0.5, tY = 0.24;
    const lX = 0.24, lY = 0.74;
    const rX = 0.76, rY = 0.74;

    // Distances to triangle sides
    const dLeft = distToSegment(cx, cy, tX, tY, lX, lY);
    const dRight = distToSegment(cx, cy, tX, tY, rX, rY);
    const dBottom = distToSegment(cx, cy, lX, lY, rX, rY);
    const minTrussDist = Math.min(dLeft, dRight, dBottom);

    const beamThickness = 0.045;
    if (minTrussDist < beamThickness) {
      // Golden beam gradient
      const factor = (cy - 0.24) / 0.5;
      const r = 251 - factor * 40;
      const g = 191 - factor * 70;
      const b = 36 - factor * 25;
      return [r, g, b, alpha];
    }

    // Internal vertical and diagonal webbing
    const dVert = distToSegment(cx, cy, tX, tY, 0.5, 0.74);
    const dDiag1 = distToSegment(cx, cy, 0.37, 0.74, 0.5, 0.49);
    const dDiag2 = distToSegment(cx, cy, 0.63, 0.74, 0.5, 0.49);
    const minWebDist = Math.min(dVert, dDiag1, dDiag2);

    if (minWebDist < 0.024 && cy >= 0.24 && cy <= 0.74 && cx >= 0.24 && cx <= 0.76) {
      return [56, 189, 248, alpha * 0.9]; // Cyan webbing
    }

    // Pin circles
    const dTopPin = Math.hypot(cx - tX, cy - tY);
    const dLeftPin = Math.hypot(cx - lX, cy - lY);
    const dRightPin = Math.hypot(cx - rX, cy - rY);

    if (Math.min(dTopPin, dLeftPin, dRightPin) < 0.038) {
      return [251, 191, 36, alpha];
    }

    return [bgR, bgG, bgB, alpha];
  };
}

const publicDir = path.resolve(__dirname, '../public');

// Generate 192x192
const pwa192 = makePngBuffer(192, 192, renderIcon(false));
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), pwa192);
console.log('Generated pwa-192x192.png');

// Generate 512x512
const pwa512 = makePngBuffer(512, 512, renderIcon(false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), pwa512);
console.log('Generated pwa-512x512.png');

// Generate maskable 512x512 (full bleed with safe zone padding)
const pwaMaskable = makePngBuffer(512, 512, renderIcon(true));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), pwaMaskable);
console.log('Generated pwa-maskable-512x512.png');

// Generate apple-touch-icon.png 180x180
const appleIcon = makePngBuffer(180, 180, renderIcon(false));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleIcon);
console.log('Generated apple-touch-icon.png');
