import { FC, ReactNode } from 'react';
import { MediaBlockProps } from '../MediaBlock';
export type BannerProps = {
    headline: string;
    children?: ReactNode;
    mediaBlockOptions?: Omit<MediaBlockProps, 'fullHeight'>;
    sublineElement: ReactNode;
};
export declare const Banner: FC<BannerProps>;
