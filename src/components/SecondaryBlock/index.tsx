'use client';

import { Box, Grid, Typography } from '@mui/material';
import { FC, isValidElement, ReactNode } from 'react';

import { Button } from '../Button';

export type SecondaryBlockProps = {
  headline?: ReactNode;
  sublineElement?: ReactNode;
  primary?: {
    href: string;
    value: string;
  };
  secondary?: {
    href: string;
    value: string;
  };
};
export const SecondaryBlock: FC<SecondaryBlockProps> = ({
  headline,
  primary,
  secondary,
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
    {(primary || secondary) && (
      <Box display="flex">
        <Grid
          justifyContent={{ md: 'left', xs: 'center' }}
          spacing={2}
          container
        >
          {primary && (
            <Grid item>
              <Button href={primary.href} variant="primary">
                {primary.value}
              </Button>
            </Grid>
          )}
          {secondary && (
            <Grid item>
              <Grid item>
                <Button href={secondary.href} variant="secondary">
                  {secondary.value}
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
    )}
  </Box>
);
