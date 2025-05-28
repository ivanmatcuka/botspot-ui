import { useTheme } from '@mui/material';
import {
  bindHover,
  bindMenu,
  usePopupState,
} from 'material-ui-popup-state/hooks';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import { FC, PropsWithChildren } from 'react';

import { ButtonProps } from '../Button';
import { MenuButton } from './MenuButton';

type CustomHoverMenuProps = {
  className?: string;
  href?: string;
  label: string;
  popupState: ReturnType<typeof usePopupState>;
  variant: ButtonProps['variant'];
};
export const CustomHoverMenu: FC<PropsWithChildren<CustomHoverMenuProps>> = ({
  children,
  className,
  href,
  label,
  popupState,
  variant,
}) => {
  const { shadows } = useTheme();
  const open = popupState.isOpen;

  return (
    <>
      <MenuButton
        className={className}
        href={href}
        label={label}
        open={open}
        variant={variant}
        {...bindHover(popupState)}
      />
      <HoverMenu
        MenuListProps={{
          'aria-labelledby': `basic-button-${label}`,
        }}
        slotProps={{
          paper: {
            className: 'border-2 border-divider',
            sx: { boxShadow: shadows[1] },
          },
        }}
        {...bindMenu(popupState)}
      >
        {children}
      </HoverMenu>
    </>
  );
};
