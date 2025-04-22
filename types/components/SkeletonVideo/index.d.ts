import { FC, MediaHTMLAttributes } from 'react';
export type SkeletonVideoProps = {
    videoSrc: string;
} & Pick<MediaHTMLAttributes<HTMLVideoElement>, 'autoPlay' | 'className' | 'loop' | 'muted'>;
export declare const SkeletonVideo: FC<SkeletonVideoProps>;
