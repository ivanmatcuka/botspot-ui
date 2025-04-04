import { GridProps } from '@mui/material';
import { FC, ReactNode } from 'react';
type MainBlockProps = {
    botomless?: boolean;
    cta?: ReactNode;
    headline?: string;
    mt?: GridProps['mt'];
    subAssetUrl?: string;
    subline?: string;
};
export declare const MainBlock: FC<MainBlockProps>;
export {};
