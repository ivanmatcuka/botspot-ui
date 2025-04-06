'use client';

import ThemeRegistry from '@/theme/ThemeRegistry';
import { FC } from 'react';

import { ButtonProps } from '.';

export const Button: FC<ButtonProps> = (props) => (
  <ThemeRegistry>
    <Button {...props} />
  </ThemeRegistry>
);
