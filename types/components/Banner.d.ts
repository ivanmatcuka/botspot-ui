import { MediaBlockProps } from '@/components/MediaBlock';
import { FC, ReactNode } from 'react';
type BannerProps = {
    headline: string;
    mediaBlockOptions?: Omit<MediaBlockProps, 'fullHeight'>;
    primaryCta?: ReactNode;
    secondaryCta?: ReactNode;
    sublineElement: ReactNode;
};
export declare const Banner: FC<BannerProps>;
export {};
