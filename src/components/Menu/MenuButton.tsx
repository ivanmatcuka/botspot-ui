import { FC, MouseEvent } from 'react';

import { Button, ButtonProps } from '../Button';

type MenuButtonProps = {
  className?: string;
  href?: string;
  label: string;
  open: boolean;
  variant: ButtonProps['variant'];
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
export const MenuButton: FC<MenuButtonProps> = ({
  href,
  label,
  onClick,
  open,
  variant,
  ...props
}) => (
  <Button
    aria-controls={open ? `basic-menu-${label}` : undefined}
    aria-expanded={open ? 'true' : undefined}
    aria-haspopup="true"
    endIconName={open ? 'ExpandLess' : 'ExpandMore'}
    id={`basic-button-${label}`}
    onClick={onClick}
    variant={variant}
    {...props}
    href={href}
  >
    {label}
  </Button>
);
