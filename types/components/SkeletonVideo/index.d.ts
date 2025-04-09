import { FC, MediaHTMLAttributes } from 'react';
export type SkeletonVideoProps = {
    videoSrc: string;
} & MediaHTMLAttributes<HTMLVideoElement>;
export declare const SkeletonVideo: FC<SkeletonVideoProps>;
