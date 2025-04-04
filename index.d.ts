import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { LinkProps } from 'next/link';
import { FC } from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'menu'
  | 'menuItem'
  | 'topic';

export interface ButtonProps
  extends Pick<
      MuiButtonProps,
      | 'id'
      | 'onClick'
      | 'children'
      | 'endIcon'
      | 'disabled'
      | 'type'
      | 'component'
      | 'onMouseOver'
      | 'className'
      | 'href'
      | 'startIcon'
    >,
    Pick<LinkProps, 'prefetch'> {
  target?: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps>;
