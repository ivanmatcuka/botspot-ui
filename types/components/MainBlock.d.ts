import { GridProps } from '@mui/material';
import { FC, ReactNode } from 'react';
export type MainBlockProps = {
    botomless?: boolean;
    children?: ReactNode;
    headline?: string;
    mt?: GridProps['mt'];
    subAssetUrl?: string;
    subline?: string;
};
export declare const MainBlock: FC<MainBlockProps>;
