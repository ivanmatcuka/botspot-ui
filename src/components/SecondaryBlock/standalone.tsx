'use client';

import { FC } from 'react';

import { SecondaryBlock, SecondaryBlockProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneSecondaryBlock: FC<SecondaryBlockProps> = (props) => (
  <ThemeRegistry>
    <SecondaryBlock {...props} />
  </ThemeRegistry>
);
