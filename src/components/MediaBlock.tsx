import { Box } from '@mui/material';
import { FC } from 'react';

import { SkeletonVideo } from './SkeletonVideo';

export type MediaBlockProps = {
  assetUrl?: string;
  autoplay?: boolean;
  banner?: boolean;
  containerClassName?: string;
  fullHeight?: boolean;
  objectFit?: 'contain' | 'cover';
  thumbSrc?: string;
};
export const MediaBlock: FC<MediaBlockProps> = ({
  assetUrl,
  autoplay = true,
  banner = false,
  containerClassName,
  fullHeight = false,
  objectFit = 'cover',
  thumbSrc,
}) => {
  if (!assetUrl) return null;
  const classes = `w-full !h-full !md:min-h-[768px] !lg:min-h-[800px] ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} ${banner ? '!xs:min-h-[420px]' : '!xs:min-h-auto'}`;
  const height = { lg: 800, md: 768, xs: banner ? 420 : 'auto' };
  const isVideo = ['mp4', 'mov', 'webm'].some((ext) => assetUrl.endsWith(ext));

  return isVideo ? (
    <Box
      className={containerClassName}
      height={height}
      minHeight={fullHeight ? '100vh' : undefined}
    >
      <SkeletonVideo
        autoPlay={autoplay}
        className={classes}
        thumbSrc={thumbSrc}
        videoSrc={assetUrl}
        loop
        muted
      />
    </Box>
  ) : (
    <Box
      className={containerClassName}
      height={height}
      minHeight={fullHeight ? '100vh' : undefined}
    >
      <img
        alt=""
        className={classes}
        height={1080}
        loading="lazy"
        src={assetUrl}
        width={1920}
      />
    </Box>
  );
};
