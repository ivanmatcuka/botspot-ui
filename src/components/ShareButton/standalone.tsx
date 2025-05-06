'use client';

import { FC } from 'react';

import ThemeRegistry from '../../theme/ThemeRegistry';
import { ButtonProps } from '../Button';
import { ShareButton } from '.';

export const StandaloneShareButton: FC<ButtonProps> = (props) => (
  <ThemeRegistry>
    <ShareButton {...props} />
  </ThemeRegistry>
);
