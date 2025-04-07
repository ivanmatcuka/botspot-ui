import { usePopupState } from 'material-ui-popup-state/hooks';
import { FC, PropsWithChildren } from 'react';
import { ButtonProps } from '../../components/Button';
type CustomHoverMenuProps = {
    className?: string;
    href?: string;
    label: string;
    popupState: ReturnType<typeof usePopupState>;
    variant: ButtonProps['variant'];
};
export declare const CustomHoverMenu: FC<PropsWithChildren<CustomHoverMenuProps>>;
export {};
