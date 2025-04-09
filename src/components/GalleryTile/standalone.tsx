'use client';

import { FC } from 'react';

import { GalleryTile, GalleryTileProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneGalleryTile: FC<GalleryTileProps> = (props) => (
  <ThemeRegistry>
    <GalleryTile {...props} />
  </ThemeRegistry>
);
