'use client';

import { FC } from 'react';

import { MainBlock, MainBlockProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneMainBlock: FC<MainBlockProps> = (props) => (
  <ThemeRegistry>
    <MainBlock {...props} />
  </ThemeRegistry>
);
