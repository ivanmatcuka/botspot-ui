'use client';

import { FC } from 'react';

import { DownloadAreaContent, DownloadAreaContentProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneDownloadAreaContent: FC<DownloadAreaContentProps> = (
  props,
) => (
  <ThemeRegistry>
    <DownloadAreaContent {...props} />
  </ThemeRegistry>
);
