import { FC } from 'react';

type IframeProps = {
  src: string;
};
export const Iframe: FC<IframeProps> = ({ src }) => {
  const widthRules = 'min-w-full md:min-w-[386px] lg:min-w-[493px]';
  const heightRules = 'min-h-[327px] md:min-h-[384px] lg:min-h-[420px]';

  return (
    <div>
      <iframe
        allow="autoplay; fullscreen; xr-spatial-tracking"
        className={`${widthRules} ${heightRules}`}
        execution-while-not-rendered="true"
        execution-while-out-of-viewport="true"
        height="100%"
        loading="lazy"
        src={src}
        web-share="true"
        width="100%"
        xr-spatial-tracking="true"
      />
    </div>
  );
};
