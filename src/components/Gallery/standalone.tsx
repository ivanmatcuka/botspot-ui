'use client';

import { FC } from 'react';

import { Gallery, GalleryProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneGallery: FC<GalleryProps> = (props) => (
  <ThemeRegistry>
    <Gallery {...props} />
  </ThemeRegistry>
);
