'use client';

import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { FC, PropsWithChildren } from 'react';

import { ButtonProps } from '../../components/Button';
import { CustomHoverMenu } from './HoverMenu';
import { MobileMenu } from './MobileMenu';

export const MenuItem: FC<PropsWithChildren<MuiMenuItemProps>> = styled(
  MuiMenuItem,
)(({ theme }) => ({
  '&.active': {
    backgroundColor: theme.palette.grey[100],

    a: {
      color: theme.palette.primary.main,
    },
  },
}));

type MenuProps = {
  className?: string;
  href?: string;
  label: string;
  variant?: ButtonProps['variant'];
};
export const Menu: FC<PropsWithChildren<MenuProps>> = ({
  children,
  className,
  href,
  label,
  variant = 'menu',
}) => {
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down('xl'));
  const popupState = usePopupState({ popupId: 'demoMenu', variant: 'popper' });

  return (
    <>
      {matches ? (
        <MobileMenu label={label} variant={variant}>
          {children}
        </MobileMenu>
      ) : (
        <CustomHoverMenu
          className={className}
          href={href}
          label={label}
          popupState={popupState}
          variant={variant}
        >
          {children}
        </CustomHoverMenu>
      )}
    </>
  );
};
