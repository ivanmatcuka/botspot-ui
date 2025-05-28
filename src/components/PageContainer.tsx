import { Box, BoxProps, Container, Grid, GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type GridPick = Pick<GridProps, 'id' | 'm' | 'mx' | 'my'>;
type BoxPick = Pick<
  BoxProps,
  'pb' | 'pt' | 'mt' | 'mb' | 'my' | 'py' | 'bgcolor'
>;
export type PageContainerProps = {
  banner?: boolean;
} & (BoxPick & GridPick);
export const PageContainer: FC<PropsWithChildren<PageContainerProps>> = ({
  banner = false,
  bgcolor = 'white',
  children,
  mb,
  mt,
  pb,
  pt,
  py,
  ...margins
}) => (
  <Box bgcolor={bgcolor} mb={mb} mt={mt} pb={pb} pt={pt} py={py}>
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
