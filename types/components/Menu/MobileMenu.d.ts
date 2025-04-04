import { ButtonProps } from '@/components/Button';
import { FC, PropsWithChildren } from 'react';
type MobileMenuProps = {
    label: string;
    variant: ButtonProps['variant'];
};
export declare const MobileMenu: FC<PropsWithChildren<MobileMenuProps>>;
export {};
