import { ButtonProps } from '@/components/Button';
import { FC, MouseEvent } from 'react';
type MenuButtonProps = {
    className?: string;
    href?: string;
    label: string;
    open: boolean;
    variant: ButtonProps['variant'];
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
export declare const MenuButton: FC<MenuButtonProps>;
export {};
