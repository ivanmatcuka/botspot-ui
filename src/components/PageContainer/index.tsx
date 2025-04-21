'use client';

import { Box, Container, Grid, GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export type PageContainerProps = PropsWithChildren<{
  banner?: boolean;
}> &
  Pick<
    GridProps,
    'pb' | 'pt' | 'mx' | 'my' | 'm' | 'id' | 'bgcolor' | 'mt' | 'mb' | 'my'
  >;
export const PageContainer: FC<PageContainerProps> = ({
  banner = false,
  children,
  bgcolor = 'white',
  pb,
  pt,
  mb,
  mt,
  ...margins
}) => (
  <Box bgcolor={bgcolor} pb={pb} pt={pt} mt={mt} mb={mb}>
    <Container maxWidth="xl">
      <Grid md={10} mx="auto" xs={12} container {...margins}>
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
  </Box>
);
