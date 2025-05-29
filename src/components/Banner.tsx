// A prominent banner component with headline, subline, media, and call-to-action support. Use the controls to explore all features.
// Figma reference: https://www.figma.com/file/your-figma-link-here

import { Box, Grid, Typography } from '@mui/material';
import { FC, isValidElement, ReactNode } from 'react';

import { MediaBlock, MediaBlockProps } from './MediaBlock';

const GRADIENT_CLASS =
  'absolute inset-0 bg-gradient-to-t from-black to-transparent';

export type BannerProps = {
  children?: ReactNode;
  headline: string;
  mediaBlockOptions?: Omit<MediaBlockProps, 'fullHeight'>;
  sublineElement: ReactNode;
};
export const Banner: FC<BannerProps> = ({
  children,
  headline,
  mediaBlockOptions,
  sublineElement,
}) => (
  <Box minHeight={{ lg: 800, md: 768, xs: '100vh' }} position="relative">
    {mediaBlockOptions && (
      <MediaBlock {...mediaBlockOptions} banner fullHeight />
    )}

    {/* Gradient */}
    <div className={GRADIENT_CLASS} />

    <Box
      bottom={0}
      left={0}
      maxWidth="xl"
      mx="auto"
      position="absolute"
      px={3}
      right={0}
      top={0}
    >
      <Grid alignItems="end" height="100%" justifyContent="end" container>
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mb={{ lg: 29, md: 15, xs: 'auto' }}
          md={6}
          mt={{ md: 0, xs: 'auto' }}
          textAlign={{ md: 'left', xs: 'center' }}
          xs={12}
          item
        >
          <Typography color="white" component="h1" variant="h1">
            {headline}
          </Typography>

          {isValidElement(sublineElement) ? (
            sublineElement
          ) : (
            <Typography
              color="white"
              component="div"
              dangerouslySetInnerHTML={{ __html: sublineElement ?? '' }}
              mb={{ sm: 2, xs: 3 }}
              mt={{ sm: 0.5, xs: 1 }}
              variant="body1"
            />
          )}
          {children && (
            <Box
              alignItems="center"
              display="flex"
              flexDirection={{ md: 'row', xs: 'column' }}
              gap={2}
              justifyContent={{ md: 'left', xs: 'center' }}
              mt={{ md: 8, xs: 3 }}
            >
              {children}
            </Box>
          )}
        </Grid>
        <Grid md={1} xs={0} />
      </Grid>
    </Box>
  </Box>
);
