import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

interface SolutionFiguresProps {
  images: string[];
  alt?: string;
}

/**
 * Renders the scanned worked-solution crops for a question.
 * Click any crop to open it full screen (small subscripts are unreadable
 * at card width on a phone).
 */
export const SolutionFigures: React.FC<SolutionFiguresProps> = ({ images, alt = 'Worked solution' }) => {
  const [zoomed, setZoomed] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="space-y-2">
        {images.map((src, index) => (
          <figure
            key={`${src}-${index}`}
            className="overflow-hidden rounded-xl border border-slate-700 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setZoomed(src)}
              className="group relative block w-full cursor-zoom-in"
              title="Click to view full size"
            >
              <img
                src={src}
                alt={`${alt} — part ${index + 1}`}
                loading="lazy"
                className="block h-auto w-full"
              />
              <span className="absolute right-2 top-2 rounded-md bg-slate-950/70 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
              </span>
            </button>
          </figure>
        ))}
      </div>

      {zoomed && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/92 p-4"
          onClick={() => setZoomed(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setZoomed(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={zoomed}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-lg bg-white object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default SolutionFigures;
