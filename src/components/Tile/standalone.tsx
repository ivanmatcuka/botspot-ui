'use client';

import { FC } from 'react';

import { Tile, TileProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneTile: FC<TileProps> = (props) => (
  <ThemeRegistry>
    <Tile {...props} />
  </ThemeRegistry>
);
