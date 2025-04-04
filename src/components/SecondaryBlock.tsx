'use client';

import { Box, Grid, Typography } from '@mui/material';
import { FC, isValidElement, ReactNode } from 'react';

type SecondaryBlockProps = {
  headline?: ReactNode;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  sublineElement?: ReactNode;
};
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
  headline,
  primaryCta,
  secondaryCta,
  sublineElement,
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
    {(primaryCta || secondaryCta) && (
      <Box display="flex">
        <Grid
          justifyContent={{ md: 'left', xs: 'center' }}
          spacing={2}
          container
        >
          {primaryCta && <Grid item>{primaryCta}</Grid>}
          {secondaryCta && <Grid item>{secondaryCta}</Grid>}
        </Grid>
      </Box>
    )}
  </Box>
);
