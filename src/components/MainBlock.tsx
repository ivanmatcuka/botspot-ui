'use client';

import { Box, GridProps, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type MainBlockProps = {
  botomless?: boolean;
  cta?: ReactNode;
  headline?: string;
  mt?: GridProps['mt'];
  subAssetUrl?: string;
  subline?: string;
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
    {cta}
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
