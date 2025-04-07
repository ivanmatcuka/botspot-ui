import { FC, ReactNode } from 'react';
import { MediaBlockProps } from './MediaBlock';
type BannerProps = {
    headline: string;
    mediaBlockOptions?: Omit<MediaBlockProps, 'fullHeight'>;
    primaryCta?: ReactNode;
    secondaryCta?: ReactNode;
    sublineElement: ReactNode;
};
export declare const Banner: FC<BannerProps>;
export {};
