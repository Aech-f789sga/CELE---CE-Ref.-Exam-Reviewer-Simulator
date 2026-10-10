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
