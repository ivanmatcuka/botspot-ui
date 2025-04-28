'use client';

import { Skeleton } from '@mui/material';
import { FC, MediaHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';

const Thumb = ({ thumbSrc }: { thumbSrc?: string }) => {
  if (!thumbSrc)
    return (
      <Skeleton
        className="absolute inset-0 w-full h-full"
        height="100%"
        variant="rectangular"
      />
    );

  return (
    <img
      height="100%"
      width="100%"
      src={thumbSrc}
      loading="lazy"
      className="absolute inset-0 w-full h-full "
    />
  );
};

export type SkeletonVideoProps = {
  videoSrc: string;
  thumbSrc?: string;
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
  thumbSrc,
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
          {!isLoaded && <Thumb thumbSrc={thumbSrc} />}
          <video
            ref={videoRef}
            className="w-full h-full relative object-cover"
            onCanPlayThrough={() => setIsLoaded(true)}
            playsInline
            preload="auto"
            controls={false}
            loop={loop}
            muted={muted}
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
