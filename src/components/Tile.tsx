'use client';

import { Container, Grid, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type TileProps = {
  headline: string;
};

export const Tile: FC<PropsWithChildren<TileProps>> = ({
  children,
  headline,
}) => {
  return (
    <Container maxWidth="xl">
      <Grid
        className="border-t border-gray-700"
        mb={{ md: 6, xs: 3 }}
        md={10}
        mx="auto"
        pt={{ md: 6, xs: 3 }}
        textAlign={{ md: 'left', xs: 'center' }}
        xs={12}
        container
      >
        <Grid md={6} mt={0.5} pr={4} xs={12} item>
          <Typography component="h3" mb={2} variant="h4">
            {headline}
          </Typography>
        </Grid>
        <Grid md={6} xs={12} item>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};
