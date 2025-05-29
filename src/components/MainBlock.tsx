/**
 * MainBlock is a prominent section component with headline, subline, optional image, and custom content.
 * Use the controls to explore all features and states.
 */

import { Box, GridProps, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

export type MainBlockProps = {
  botomless?: boolean;
  children?: ReactNode;
  headline?: string;
  mt?: GridProps['mt'];
  subAssetUrl?: string;
  subline?: string;
};
export const MainBlock: FC<MainBlockProps> = ({
  children,
  headline,
  subAssetUrl,
  subline,
}) => (
  <Box textAlign={{ md: 'left', xs: 'center' }}>
    {subline && (
      <Typography mb={2} variant="body1">
        {subline}
      </Typography>
    )}
    {headline && (
      <Typography mb={children ? 4 : 0} variant="h2">
        {headline}
      </Typography>
    )}
    {children}
    {subAssetUrl && (
      <img
        alt={headline}
        className="object-cover w-full h-auto pt-[48px] min-h-[240px]"
        height={800}
        loading="lazy"
        src={subAssetUrl}
        width={800}
      />
    )}
  </Box>
);
