import { ButtonProps as MuiButtonProps } from '@mui/material';
import { FC } from 'react';
export type ButtonProps = {
    prefetch?: boolean;
    target?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'menu' | 'menuItem' | 'topic';
} & Pick<MuiButtonProps, 'id' | 'onClick' | 'children' | 'endIcon' | 'disabled' | 'type' | 'component' | 'onMouseOver' | 'className' | 'href' | 'startIcon'>;
export declare const Button: FC<ButtonProps>;
