'use client';

import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';

type GalleryProps = {
  firstChild?: ReactNode;
  secondChild?: ReactNode;
  transparent?: boolean;
};
export const Gallery: FC<GalleryProps> = ({
  firstChild,
  secondChild,
  transparent = true,
}) => (
  <Grid
    columnGap={{ md: 2, xs: 0 }}
    justifyContent="center"
    maxWidth="xl"
    mx="auto"
    px={3}
    rowGap={{ md: 0, xs: 2 }}
    container
  >
    <Grid
      bgcolor={transparent ? 'transparent' : 'grey.100'}
      borderRadius={1}
      height={{ md: 420, xs: 320 }}
      md={5}
      overflow="hidden"
      xs={12}
      item
    >
      {firstChild}
    </Grid>
    <Grid
      bgcolor={transparent ? 'transparent' : 'grey.100'}
      borderRadius={1}
      height={{ md: 420, xs: 320 }}
      md={5}
      overflow="hidden"
      xs={12}
      item
    >
      {secondChild}
    </Grid>
  </Grid>
);
