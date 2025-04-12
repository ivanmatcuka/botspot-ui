'use client';

import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export type GalleryProps = PropsWithChildren<{
  transparent?: boolean;
}>;
export const Gallery: FC<GalleryProps> = ({ children, transparent = true }) => (
  <Box
    columnGap={{ md: 2, xs: 0 }}
    justifyContent="center"
    mx="auto"
    px={3}
    display="flex"
    rowGap={{ md: 0, xs: 2 }}
    height={{ md: 420, xs: 320 }}
    bgcolor={transparent ? 'transparent' : 'grey.100'}
    borderRadius={1}
    flexDirection={{ xs: 'column', md: 'row' }}
  >
    {children}
  </Box>
);
