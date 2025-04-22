'use client';

import { Skeleton } from '@mui/material';
import { FC, MediaHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';

export type SkeletonVideoProps = {
  videoSrc: string;
} & MediaHTMLAttributes<HTMLVideoElement>;

export const SkeletonVideo: FC<SkeletonVideoProps> = ({
  autoPlay,
  className = '',
  videoSrc,
  ...props
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
    if (!autoPlay || !isLoaded) return;

    if (inViewport) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
    }
  }, [autoPlay, inViewport, isLoaded]);

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
            className="w-full h-full relative"
            onCanPlay={() => setIsLoaded(true)}
            playsInline
            src={videoSrc}
            autoPlay={isLoaded && autoPlay}
            {...props}
          />
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
