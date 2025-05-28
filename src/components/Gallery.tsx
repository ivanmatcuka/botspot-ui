import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export type GalleryProps = PropsWithChildren<{
  transparent?: boolean;
}>;
export const Gallery: FC<GalleryProps> = ({ children, transparent = true }) => (
  <Box
    bgcolor={transparent ? 'transparent' : 'grey.100'}
    borderRadius={1}
    columnGap={{ md: 2, xs: 0 }}
    display="flex"
    flexDirection={{ md: 'row', xs: 'column' }}
    justifyContent="center"
    mx="auto"
    py={3}
    rowGap={{ md: 0, xs: 2 }}
  >
    {children}
  </Box>
);
