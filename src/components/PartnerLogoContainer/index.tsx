import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const PartnerLogoContainer: FC<PropsWithChildren> = ({ children }) => (
  <Box
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    maxWidth="xl"
    mx="auto"
    my={{ md: 10, xs: 8 }}
    px={{ md: 8, xs: 4 }}
  >
    {children}
  </Box>
);
