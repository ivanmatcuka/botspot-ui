'use client';

import { Menu as MuiMenu, useTheme } from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';

import { ButtonProps } from '../Button';
import { MenuButton } from './MenuButton';

type MobileMenuProps = {
  label: string;
  variant: ButtonProps['variant'];
};
export const MobileMenu: FC<PropsWithChildren<MobileMenuProps>> = ({
  children,
  label,
  variant,
}) => {
  const { shadows } = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <MenuButton
        label={label}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        open={open}
        variant={variant}
      />
      <MuiMenu
        MenuListProps={{
          'aria-labelledby': `basic-button-${label}`,
        }}
        slotProps={{
          paper: {
            className: 'border-2 border-divider',
            sx: { boxShadow: shadows[1] },
          },
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
      >
        {children}
      </MuiMenu>
    </>
  );
};
