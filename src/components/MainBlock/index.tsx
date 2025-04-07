'use client';

import { Box, GridProps, Typography } from '@mui/material';
import { FC } from 'react';

import { Button, ButtonProps } from '../Button';

type MainBlockProps = {
  botomless?: boolean;
  headline?: string;
  mt?: GridProps['mt'];
  subAssetUrl?: string;
  subline?: string;
  cta?: {
    href?: string;
    value: string;
    variant: ButtonProps['variant'];
  };
};
export const MainBlock: FC<MainBlockProps> = ({
  cta,
  headline,
  subAssetUrl,
  subline,
}) => (
  <Box textAlign={{ md: 'left', xs: 'center' }}>
    <Typography mb={2} variant="body1">
      {subline}
    </Typography>
    <Typography mb={cta ? 4 : 0} variant="h2">
      {headline}
    </Typography>
    {cta && (
      <Button href={cta.href} variant={cta.variant}>
        {cta.value}
      </Button>
    )}
    {subAssetUrl && (
      <img
        alt=""
        className="object-cover w-full h-auto pt-[48px] min-h-[240px]"
        height={800}
        loading="lazy"
        src={subAssetUrl}
        width={800}
      />
    )}
  </Box>
);
