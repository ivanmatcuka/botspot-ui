import { FC, PropsWithChildren, ReactNode } from 'react';
export type GalleryTileProps = {
    alt?: string;
    bgColor?: string;
    children?: ReactNode;
    imgUrl: string;
};
export declare const GalleryTile: FC<PropsWithChildren<GalleryTileProps>>;
