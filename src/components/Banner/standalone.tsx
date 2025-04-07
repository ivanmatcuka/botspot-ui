'use client';

import { FC } from 'react';

import { Banner, BannerProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneBanner: FC<BannerProps> = (props) => (
  <ThemeRegistry>
    <Banner {...props} />
  </ThemeRegistry>
);
