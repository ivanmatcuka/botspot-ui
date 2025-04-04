import { FC, MediaHTMLAttributes } from 'react';
type SkeletonVideoProps = {
    videoSrc: string;
} & MediaHTMLAttributes<HTMLVideoElement>;
export declare const SkeletonVideo: FC<SkeletonVideoProps>;
export {};
