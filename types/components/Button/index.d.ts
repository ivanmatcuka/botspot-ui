import * as MuiIcons from '@mui/icons-material';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import { FC } from 'react';
type IconName = keyof typeof MuiIcons;
export type ButtonProps = {
    target?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'menu' | 'menuItem' | 'topic';
    startIconName?: IconName;
    endIconName?: IconName;
} & Pick<MuiButtonProps, 'id' | 'onClick' | 'children' | 'disabled' | 'type' | 'component' | 'className' | 'href'>;
export declare const Button: FC<ButtonProps>;
export {};
