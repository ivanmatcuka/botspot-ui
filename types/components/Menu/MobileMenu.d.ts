import { FC, PropsWithChildren } from 'react';
import { ButtonProps } from '../Button';
type MobileMenuProps = {
    label: string;
    variant: ButtonProps['variant'];
};
export declare const MobileMenu: FC<PropsWithChildren<MobileMenuProps>>;
export {};
