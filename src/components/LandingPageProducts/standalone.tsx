'use client';

import { FC } from 'react';

import { LandingPageProducts, LandingPageProductsProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneLandingPageProducts: FC<LandingPageProductsProps> = (
  props,
) => (
  <ThemeRegistry>
    <LandingPageProducts {...props} />
  </ThemeRegistry>
);
