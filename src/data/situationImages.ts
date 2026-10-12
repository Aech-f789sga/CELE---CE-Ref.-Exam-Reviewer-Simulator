/**
 * Map of situation number to fallback cloud image URL and local image paths.
 * If local image in /src/images/ or /images/ exists (e.g. on GitHub / Vercel),
 * it seamlessly displays the local image, with automatic fallback to cloud hosted image.
 */
export const SITUATION_IMAGES: Record<number, { localPath: string; cloudUrl: string }> = {
  1: {
    localPath: '/images/PSAD_April_2024_1.png',
    cloudUrl: 'https://i.postimg.cc/Fs8K5LV2/PSAD-April-2024-1.png',
  },
  2: {
    localPath: '/images/PSAD_April_2024_2.png',
    cloudUrl: 'https://i.postimg.cc/fTpbn9fp/PSAD-April-2024-2.png',
  },
  3: {
    localPath: '/images/PSAD_April_2024_3.png',
    cloudUrl: 'https://i.postimg.cc/YqZSKWzT/PSAD-April-2024-3.png',
  },
  4: {
    localPath: '/images/PSAD_April_2024_4.png',
    cloudUrl: 'https://i.postimg.cc/QxwMGTJy/PSAD-April-2024-4.png',
  },
  5: {
    localPath: '/images/PSAD_April_2024_5.png',
    cloudUrl: 'https://i.postimg.cc/ncgLbDGw/PSAD-April-2024-5.png',
  },
  6: {
    localPath: '/images/PSAD_April_2024_6.png',
    cloudUrl: 'https://i.postimg.cc/MKNG2QmP/PSAD-April-2024-6.png',
  },
  7: {
    localPath: '/images/PSAD_April_2024_7.png',
    cloudUrl: 'https://i.postimg.cc/BQkv9KBh/PSAD-April-2024-7.png',
  },
  8: {
    localPath: '/images/PSAD_April_2024_8.png',
    cloudUrl: 'https://i.postimg.cc/ZK2qtdxV/PSAD-April-2024-8.png',
  },
  9: {
    localPath: '/images/PSAD_April_2024_9.png',
    cloudUrl: 'https://i.postimg.cc/bNWvct9g/PSAD-April-2024-9.png',
  },
  10: {
    localPath: '/images/PSAD_April_2024_10.png',
    cloudUrl: 'https://i.postimg.cc/gkQ0FZH4/PSAD-April-2024-10.png',
  },
  11: {
    localPath: '/images/PSAD_April_2024_11.png',
    cloudUrl: 'https://i.postimg.cc/4Nq3k9Q5/PSAD-April-2024-11.png',
  },
  12: {
    localPath: '/images/PSAD_April_2024_12.png',
    cloudUrl: 'https://i.postimg.cc/3JVw5vFF/PSAD-April-2024-12.png',
  },
  13: {
    localPath: '/images/PSAD_April_2024_13.png',
    cloudUrl: 'https://i.postimg.cc/bNWvct9H/PSAD-April-2024-13.png',
  },
  14: {
    localPath: '/images/PSAD_April_2024_14.png',
    cloudUrl: 'https://i.postimg.cc/NfS0qHk8/PSAD-April-2024-14.png',
  },
  15: {
    localPath: '/images/PSAD_April_2024_15.png',
    cloudUrl: 'https://i.postimg.cc/vHkmFVtW/PSAD-April-2024-15.png',
  },
  16: {
    localPath: '/images/PSAD_April_2024_16.png',
    cloudUrl: 'https://i.postimg.cc/dtp0PyjZ/PSAD-April-2024-16.png',
  },
  17: {
    localPath: '/images/PSAD_April_2024_17.png',
    cloudUrl: 'https://i.postimg.cc/GhVpwyxY/PSAD-April-2024-17.png',
  },
  20: {
    localPath: '/images/PSAD_April_2024_20.png',
    cloudUrl: 'https://i.postimg.cc/HsRLDy97/PSAD-April-2024-20.png',
  },
  21: {
    localPath: '/images/PSAD_April_2024_21.png',
    cloudUrl: 'https://i.postimg.cc/5NTtdCSC/PSAD-April-2024-21.png',
  },
};

/**
 * Generates the figure HTML string for a given situation.
 * Includes local image support as first priority (supporting /src/images/PSAD_April_2024_X.png,
 * /images/PSAD_April_2024_X.png, and relative src/images/), with automatic fallback to cloud CDN.
 */
export function getSituationFigureHtml(
  situationNumber: number,
  caption: string = `Figure S${situationNumber}: PSAD April 2024 Illustration`
): string {
  const cfg = SITUATION_IMAGES[situationNumber];
  if (!cfg) return '';

  const filename = `PSAD_April_2024_${situationNumber}.png`;
  const primarySrc = `/src/images/${filename}`;
  const secondarySrc = `/images/${filename}`;
  const cloudUrl = cfg.cloudUrl;

  return `<div class="flex flex-col items-center justify-center w-full py-2">
    <img 
      src="${primarySrc}" 
      alt="${caption}" 
      class="max-w-md w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
      loading="eager" 
      referrerpolicy="no-referrer"
      onerror="if(this.dataset.tried === 'secondary'){ this.src = '${cloudUrl}'; this.dataset.tried = 'done'; } else if(!this.dataset.tried){ this.dataset.tried = 'secondary'; this.src = '${secondarySrc}'; }"
    />
  </div>`;
}

/**
 * Registry of PSAD November 2024 situations and their illustration images.
 * File names are "PSAD_November_2024_{X}.png" located in src/images/PSADNov2024.
 * Situation 18 has two illustrations: "PSAD_November_2024_18.png" and "PSAD_November_2024_18(1).png".
 */
export const PSAD_NOV_2024_SITUATIONS: Record<
  number,
  {
    caption: string;
    files: {
      filename: string;
      subCaption?: string;
    }[];
  }
> = {
  2: {
    caption: 'Figure S2: PSAD November 2024 Situation 2 - Truss Configuration with Cable Diagonals',
    files: [{ filename: 'PSAD_November_2024_2.png', subCaption: 'Truss Configuration with Cable Diagonals' }],
  },
  3: {
    caption: 'Figure S3: PSAD November 2024 Situation 3 - Flagpole Guy Cable System',
    files: [{ filename: 'PSAD_November_2024_3.png', subCaption: 'Flagpole Guy Cable Assembly' }],
  },
  4: {
    caption: 'Figure S4: PSAD November 2024 Situation 4 - Equilibrium and Friction on Incline',
    files: [{ filename: 'PSAD_November_2024_4.png', subCaption: 'Equilibrium & Friction Diagram' }],
  },
  6: {
    caption: 'Figure S6: PSAD November 2024 Situation 6 - Pinned Frame Assembly',
    files: [{ filename: 'PSAD_November_2024_6.png', subCaption: 'Pinned Frame Structure' }],
  },
  7: {
    caption: 'Figure S7: PSAD November 2024 Situation 7 - Hoisting Beam Assembly',
    files: [{ filename: 'PSAD_November_2024_7.png', subCaption: 'Hoisting Beam Assembly with Anchor Bolts' }],
  },
  8: {
    caption: 'Figure S8: PSAD November 2024 Situation 8 - Torsion & Shear in Rod BD',
    files: [{ filename: 'PSAD_November_2024_8.png', subCaption: 'Rod BD Torque & Shear Assembly' }],
  },
  11: {
    caption: 'Figure S11: PSAD November 2024 Situation 11 - Wide Flange Purlin on Sloping Truss',
    files: [{ filename: 'PSAD_November_2024_11.png', subCaption: 'Sloping Truss Purlin System' }],
  },
  12: {
    caption: 'Figure S12: PSAD November 2024 Situation 12 - Frame Support Indeterminacy',
    files: [{ filename: 'PSAD_November_2024_12.png', subCaption: 'Continuous Frame & Support Indeterminacy' }],
  },
  13: {
    caption: 'Figure S13: PSAD November 2024 Situation 13 - Beam Moment and Shear Diagram',
    files: [{ filename: 'PSAD_November_2024_13.png', subCaption: 'Beam Loading & Shear/Moment Diagram' }],
  },
  14: {
    caption: 'Figure S14: PSAD November 2024 Situation 14 - Two-Span Continuous Beam',
    files: [{ filename: 'PSAD_November_2024_14.png', subCaption: 'Two-Span Continuous Beam Elevation' }],
  },
  15: {
    caption: 'Figure S15: PSAD November 2024 Situation 15 - Propped Cantilever Beam',
    files: [{ filename: 'PSAD_November_2024_15.png', subCaption: 'Propped Cantilever Beam Loading' }],
  },
  16: {
    caption: 'Figure S16: PSAD November 2024 Situation 16 - Compound Bridge Girder System',
    files: [{ filename: 'PSAD_November_2024_16.png', subCaption: 'Compound Bridge Girder System' }],
  },
  17: {
    caption: 'Figure S17: PSAD November 2024 Situation 17 - Fillet-Welded Bracket Plate Connection',
    files: [{ filename: 'PSAD_November_2024_17.png', subCaption: 'Fillet-Welded Bracket Connection' }],
  },
  18: {
    caption: 'Figure S18: PSAD November 2024 Situation 18 - Axially Loaded Members & Section Table',
    files: [
      { filename: 'PSAD_November_2024_18.png', subCaption: 'Figure S18-A: Axially Loaded Frame System' },
      { filename: 'PSAD_November_2024_18(1).png', subCaption: 'Figure S18-B: Member Specifications & Table 510' },
    ],
  },
  19: {
    caption: 'Figure S19: PSAD November 2024 Situation 19 - Prestressed Concrete Section & Cable Profile',
    files: [{ filename: 'PSAD_November_2024_19.png', subCaption: 'Prestressed Concrete Joist & Cable Profile' }],
  },
  22: {
    caption: 'Figure S22: PSAD November 2024 Situation 22 - Eccentric Bolt Group Bracket Connection',
    files: [{ filename: 'PSAD_November_2024_22.png', subCaption: 'Eccentric Bolt Group Pattern' }],
  },
  25: {
    caption: 'Figure S25: PSAD November 2024 Situation 25 - Building Elevation and Seismic Force Distribution',
    files: [{ filename: 'PSAD_November_2024_25.png', subCaption: 'Building Elevation & Story Lateral Force' }],
  },
};

/**
 * Generates figure HTML string for PSAD November 2024 situations.
 * Handles both single-image situations and multi-image situations (e.g. Situation 18).
 * Provides robust fallback chain:
 * 1. /src/images/PSADNov2024/{filename}
 * 2. /images/PSADNov2024/{filename}
 * 3. /images/{filename}
 */
export function getPsadNov2024FigureHtml(situationNumber: number): string {
  const sit = PSAD_NOV_2024_SITUATIONS[situationNumber];
  if (!sit) return '';

  if (sit.files.length === 1) {
    const f = sit.files[0];
    const filename = f.filename;
    const primarySrc = `/src/images/PSADNov2024/${filename}`;
    const secondarySrc = `/images/PSADNov2024/${filename}`;
    const tertiarySrc = `/images/${filename}`;

    return `<div class="flex flex-col items-center justify-center w-full py-2">
    <img 
      src="${primarySrc}" 
      alt="${sit.caption}" 
      class="max-w-xl w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
      loading="eager" 
      referrerpolicy="no-referrer"
      onerror="if(this.dataset.tried === 'phase-2'){ this.src = '${tertiarySrc}'; this.dataset.tried = 'done'; } else if(!this.dataset.tried){ this.dataset.tried = 'phase-2'; this.src = '${secondarySrc}'; }"
    />
  </div>`;
  }

  // Multi-image situation (e.g. Situation 18 with 2 illustrations)
  const renderedImgs = sit.files
    .map((f, idx) => {
      const filename = f.filename;
      const primarySrc = `/src/images/PSADNov2024/${filename}`;
      const secondarySrc = `/images/PSADNov2024/${filename}`;
      const tertiarySrc = `/images/${filename}`;
      const subCap = f.subCaption || `Illustration ${idx + 1}`;

      return `<div class="flex flex-col items-center flex-1 max-w-lg w-full">
      <img 
        src="${primarySrc}" 
        alt="${subCap}" 
        class="max-w-full w-full h-auto object-contain rounded-lg bg-white p-2.5 shadow-sm border border-slate-200" 
        loading="eager" 
        referrerpolicy="no-referrer"
        onerror="if(this.dataset.tried === 'phase-2'){ this.src = '${tertiarySrc}'; this.dataset.tried = 'done'; } else if(!this.dataset.tried){ this.dataset.tried = 'phase-2'; this.src = '${secondarySrc}'; }"
      />
      <span class="text-[11px] font-tech-mono text-slate-500 mt-1.5 text-center font-medium">${subCap}</span>
    </div>`;
    })
    .join('');

  return `<div class="flex flex-col md:flex-row items-center justify-center gap-4 w-full py-2">
    ${renderedImgs}
  </div>`;
}
