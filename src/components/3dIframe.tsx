// Embeds a 3D model or other content using an iframe. Provide a Sketchfab or other embeddable URL.
// Figma reference: https://www.figma.com/file/your-figma-link-here

import { FC, useEffect, useState } from 'react';

// Tailwind class variables for clarity and reuse
const IFRAME_WIDTH = 'min-w-full md:min-w-[386px] lg:min-w-[493px]';
const IFRAME_HEIGHT = 'min-h-[327px] md:min-h-[384px] lg:min-h-[420px]';
const CENTERED_BOX = 'flex items-center justify-center';
const EMPTY_BG = 'bg-gray-100 text-gray-400';
const ERROR_BG = 'bg-red-100 text-red-500';

const EMPTY_STATE_MSG = 'No 3D model URL provided.';
const ERROR_STATE_MSG = 'Failed to load 3D model.';

type IframeProps = {
  src: string;
};
export const Iframe: FC<IframeProps> = ({ src }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      new URL(src);
    } catch {
      console.error('Invalid URL:', src);
      setError(true);
    }
  }, [src]);

  if (!src) {
    return (
      <div
        className={`${IFRAME_WIDTH} ${IFRAME_HEIGHT} ${CENTERED_BOX} ${EMPTY_BG}`}
      >
        {EMPTY_STATE_MSG}
      </div>
    );
  }

  return (
    <div>
      {error ? (
        <div
          className={`${IFRAME_WIDTH} ${IFRAME_HEIGHT} ${CENTERED_BOX} ${ERROR_BG}`}
        >
          {ERROR_STATE_MSG}
        </div>
      ) : (
        <iframe
          allow="autoplay; fullscreen; xr-spatial-tracking"
          className={`${IFRAME_WIDTH} ${IFRAME_HEIGHT}`}
          execution-while-not-rendered="true"
          execution-while-out-of-viewport="true"
          height="100%"
          loading="lazy"
          onError={() => setError(true)}
          src={src}
          web-share="true"
          width="100%"
          xr-spatial-tracking="true"
        />
      )}
    </div>
  );
};
