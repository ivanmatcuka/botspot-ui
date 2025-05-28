'use client';

import { Skeleton } from '@mui/material';
import { FC, MediaHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';

const Thumb = ({ thumbSrc }: { thumbSrc?: string }) => {
  if (!thumbSrc) {
    return (
      <Skeleton
        className="absolute inset-0 w-full h-full"
        height="100%"
        variant="rectangular"
      />
    );
  }

  return (
    <img
      className="absolute inset-0 w-full h-full "
      height="100%"
      loading="lazy"
      src={thumbSrc}
      width="100%"
    />
  );
};

export type SkeletonVideoProps = {
  thumbSrc?: string;
  videoSrc: string;
} & Pick<
  MediaHTMLAttributes<HTMLVideoElement>,
  'autoPlay' | 'className' | 'loop' | 'muted'
>;
export const SkeletonVideo: FC<SkeletonVideoProps> = ({
  autoPlay,
  className = '',
  loop,
  muted = true,
  thumbSrc,
  videoSrc,
}) => {
  const wrapperRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { inViewport } = useInViewport(wrapperRef);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canRenderVideo, setCanRenderVideo] = useState(false);

  useEffect(() => {
    if (inViewport) {
      setCanRenderVideo(true);
    }
  }, [inViewport]);

  useEffect(() => {
    if (!autoPlay || !isLoaded || !canRenderVideo) return;

    if (inViewport) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [autoPlay, inViewport, isLoaded, canRenderVideo]);

  return (
    <div className={`relative ${className}`} ref={wrapperRef}>
      {canRenderVideo ? (
        <>
          {!isLoaded && <Thumb thumbSrc={thumbSrc} />}
          <video
            autoPlay={autoPlay}
            className="w-full h-full relative object-cover"
            controls={false}
            loop={loop}
            muted={muted}
            onCanPlayThrough={() => setIsLoaded(true)}
            preload="auto"
            ref={videoRef}
            playsInline
          >
            <source src={videoSrc} />
          </video>
        </>
      ) : (
        <Thumb thumbSrc={thumbSrc} />
      )}
    </div>
  );
};
