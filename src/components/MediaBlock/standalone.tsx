'use client';

import { FC } from 'react';

import { MediaBlock, MediaBlockProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneMediaBlock: FC<MediaBlockProps> = (props) => (
  <ThemeRegistry>
    <MediaBlock {...props} />
  </ThemeRegistry>
);
