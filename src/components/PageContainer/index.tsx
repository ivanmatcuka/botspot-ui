import { Box, BoxProps, Container, Grid, GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type GridPick = Pick<GridProps, 'id' | 'm' | 'mx' | 'my'>;
type BoxPick = Pick<
  BoxProps,
  'pb' | 'pt' | 'mt' | 'mb' | 'my' | 'py' | 'bgcolor'
>;
export type PageContainerProps = PropsWithChildren<{
  banner?: boolean;
}> &
  GridPick &
  BoxPick;
export const PageContainer: FC<PageContainerProps> = ({
  banner = false,
  children,
  bgcolor = 'white',
  pb,
  pt,
  mb,
  mt,
  py,
  ...margins
}) => (
  <Box bgcolor={bgcolor} pb={pb} pt={pt} mt={mt} mb={mb} py={py}>
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
