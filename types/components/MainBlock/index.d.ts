import { GridProps } from '@mui/material';
import { FC, ReactNode } from 'react';
export type MainBlockProps = {
    botomless?: boolean;
    headline?: string;
    mt?: GridProps['mt'];
    subAssetUrl?: string;
    subline?: string;
    children?: ReactNode;
};
export declare const MainBlock: FC<MainBlockProps>;
