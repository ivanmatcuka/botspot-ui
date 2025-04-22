'use client';

import { Skeleton } from '@mui/material';
import { FC, MediaHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';

export type SkeletonVideoProps = {
  videoSrc: string;
} & Pick<
  MediaHTMLAttributes<HTMLVideoElement>,
  'autoPlay' | 'className' | 'loop' | 'muted'
>;
export const SkeletonVideo: FC<SkeletonVideoProps> = ({
  autoPlay,
  className = '',
  loop,
  videoSrc,
  muted = true,
}) => {
  const wrapperRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { inViewport } = useInViewport(wrapperRef);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canRenderVideo, setCanRenderVideo] = useState(false);

  useEffect(() => {
    if (inViewport) {
      console.log('inViewport');
      setCanRenderVideo(true);
    }
  }, [inViewport]);

  useEffect(() => {
    if (!autoPlay || !isLoaded) return;

    if (inViewport) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [autoPlay, inViewport, isLoaded]);

  console.log({ canRenderVideo });

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {canRenderVideo ? (
        <>
          {!isLoaded && (
            <Skeleton
              className="absolute inset-0"
              height="100%"
              variant="rectangular"
            />
          )}
          <video
            ref={videoRef}
            className="w-full h-full relative object-cover"
            onCanPlayThrough={() => setIsLoaded(true)}
            playsInline
            autoPlay={autoPlay}
            preload="auto"
            controls={false}
            loop={loop}
            muted={muted}
          >
            <source src={videoSrc} />
          </video>
        </>
      ) : (
        <Skeleton
          className="absolute inset-0"
          height="100%"
          variant="rectangular"
        />
      )}
    </div>
  );
};
