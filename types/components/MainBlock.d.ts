/**
 * MainBlock is a prominent section component with headline, subline, optional image, and custom content.
 * Use the controls to explore all features and states.
 */
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
