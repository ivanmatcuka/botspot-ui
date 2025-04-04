import { ButtonProps } from '@/components/Button';
import { MenuItemProps as MuiMenuItemProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
export declare const MenuItem: FC<PropsWithChildren<MuiMenuItemProps>>;
type MenuProps = {
    className?: string;
    href?: string;
    label: string;
    variant?: ButtonProps['variant'];
};
export declare const Menu: FC<PropsWithChildren<MenuProps>>;
export {};
