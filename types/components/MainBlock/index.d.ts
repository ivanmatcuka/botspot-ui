import { GridProps } from '@mui/material';
import { FC } from 'react';
import { ButtonProps } from '../Button';
type MainBlockProps = {
    botomless?: boolean;
    headline?: string;
    mt?: GridProps['mt'];
    subAssetUrl?: string;
    subline?: string;
    cta?: {
        href?: string;
        value: string;
        variant: ButtonProps['variant'];
    };
};
export declare const MainBlock: FC<MainBlockProps>;
export {};
