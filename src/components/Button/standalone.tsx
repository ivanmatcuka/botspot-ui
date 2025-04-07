'use client';

import { FC } from 'react';

import { Button, ButtonProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneButton: FC<ButtonProps> = (props) => (
  <ThemeRegistry>
    <Button {...props} />
  </ThemeRegistry>
);
