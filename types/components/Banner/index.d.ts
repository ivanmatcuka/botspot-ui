import { FC, ReactNode } from 'react';
import { MediaBlockProps } from '../MediaBlock';
type BannerProps = {
    headline: string;
    mediaBlockOptions?: Omit<MediaBlockProps, 'fullHeight'>;
    sublineElement: ReactNode;
    primary?: {
        href: string;
        value: string;
    };
    secondary?: {
        href: string;
        value: string;
    };
};
export declare const Banner: FC<BannerProps>;
export {};
