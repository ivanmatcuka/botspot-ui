'use client';

import { FC } from 'react';

import { SkeletonVideo, SkeletonVideoProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneSkeletonVideo: FC<SkeletonVideoProps> = (props) => (
  <ThemeRegistry>
    <SkeletonVideo {...props} />
  </ThemeRegistry>
);
