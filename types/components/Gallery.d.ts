import { FC, PropsWithChildren } from 'react';
export declare const EMPTY_STATE_MSG = "No gallery items to display.";
export type GalleryProps = {
    transparent?: boolean;
};
export declare const Gallery: FC<PropsWithChildren<GalleryProps>>;
