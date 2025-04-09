'use client';

import { Box, Grid } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';

export type GalleryTileProps = {
  alt?: string;
  bgColor?: string;
  children?: ReactNode;
  imgUrl: string;
};
export const GalleryTile: FC<PropsWithChildren<GalleryTileProps>> = ({
  alt,
  bgColor = 'grey.100',
  children,
  imgUrl,
}) => (
  <Box bgcolor={bgColor} py={{ md: 10, xs: 5 }}>
    <Grid alignItems="center" maxWidth="xl" mx="auto" px={3} container>
      <Grid md={1} xs={0} />
      <Grid md={5} xs={12} item>
        <img
          alt={alt ?? ''}
          className="rounded-xl"
          height={304}
          loading="lazy"
          src={imgUrl}
          width={493}
        />
      </Grid>
      <Grid md={1} xs={0} />
      <Grid md={4} mt={{ md: 0, xs: 2 }} xs={12} item>
        {children}
      </Grid>
      <Grid md={1} xs={0} />
    </Grid>
  </Box>
);
