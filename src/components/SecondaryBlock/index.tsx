'use client';

import { Box, Typography } from '@mui/material';
import { FC, isValidElement, ReactNode } from 'react';

export type SecondaryBlockProps = {
  headline?: ReactNode;
  sublineElement?: ReactNode;
  children?: ReactNode;
};
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
  headline,
  sublineElement,
  children,
}) => (
  <Box textAlign={{ md: 'left', xs: 'center' }}>
    <Typography variant="h2">{headline}</Typography>
    {isValidElement(sublineElement) ? (
      sublineElement
    ) : (
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: sublineElement ?? '' }}
        mb={{ sm: 2, xs: 3 }}
        mt={{ sm: 0.5, xs: 1 }}
        variant="body1"
      />
    )}
    {children && (
      <Box display="flex" gap={2} justifyContent={{ md: 'left', xs: 'center' }}>
        {children}
      </Box>
    )}
  </Box>
);
