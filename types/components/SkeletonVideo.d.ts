import { FC, MediaHTMLAttributes } from 'react';
export type SkeletonVideoProps = {
    thumbSrc?: string;
    videoSrc: string;
} & Pick<MediaHTMLAttributes<HTMLVideoElement>, 'autoPlay' | 'className' | 'loop' | 'muted'>;
export declare const SkeletonVideo: FC<SkeletonVideoProps>;
