'use client';

import { Container, Grid, GridProps } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';

export type PageContainerProps = {
  banner?: boolean;
  children: ReactNode;
} & Pick<GridProps, 'mb' | 'mt' | 'mx' | 'my' | 'm' | 'id'>;
export const PageContainer: FC<PropsWithChildren<PageContainerProps>> = ({
  banner = false,
  children,
  ...margins
}) => (
  <Container maxWidth="xl">
    <Grid
      mb={{ md: 20, xs: 10 }}
      md={10}
      mt={{ md: 3, xs: 2 }}
      mx="auto"
      xs={12}
      container
      {...margins}
    >
      <Grid
        md={banner ? 7 : undefined}
        ml={banner ? 'auto' : undefined}
        mx={banner ? undefined : 'auto'}
        textAlign={{ md: 'left', xs: 'center' }}
        xl={banner ? 6 : undefined}
        xs={12}
        item
      >
        {children}
      </Grid>
    </Grid>
  </Container>
);
