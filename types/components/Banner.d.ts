import { FC, ReactNode } from 'react';
import { MediaBlockProps } from './MediaBlock';
export type BannerProps = {
    children?: ReactNode;
    headline: string;
    mediaBlockOptions?: Omit<MediaBlockProps, 'fullHeight'>;
    sublineElement: ReactNode;
};
export declare const Banner: FC<BannerProps>;
