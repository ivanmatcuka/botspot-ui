import { FC } from 'react';
export type MediaBlockProps = {
    assetUrl?: string;
    autoplay?: boolean;
    banner?: boolean;
    containerClassName?: string;
    fullHeight?: boolean;
    objectFit?: 'contain' | 'cover';
    thumbSrc?: string;
};
export declare const MediaBlock: FC<MediaBlockProps>;
