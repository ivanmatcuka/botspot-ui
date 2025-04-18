import * as Icons from '@mui/icons-material';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import { FC } from 'react';
export { Icons };
export type ButtonProps = {
    target?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'menu' | 'menuItem' | 'topic';
} & Pick<MuiButtonProps, 'id' | 'onClick' | 'children' | 'endIcon' | 'startIcon' | 'disabled' | 'type' | 'component' | 'className' | 'href'>;
export declare const Button: FC<ButtonProps>;
