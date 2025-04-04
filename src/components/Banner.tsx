import { Box, Grid, Typography } from '@mui/material';
import { FC, isValidElement, ReactNode } from 'react';

import { MediaBlock, MediaBlockProps } from '@/components/MediaBlock';

type BannerProps = {
  headline: string;
  sublineElement: ReactNode;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  mediaBlockOptions?: Omit<MediaBlockProps, 'fullHeight'>;
};
export const Banner: FC<BannerProps> = ({
  headline,
  sublineElement,
  primaryCta,
  secondaryCta,
  mediaBlockOptions,
}) => (
  <Box minHeight={{ xs: '100vh', md: 768, lg: 800 }} position="relative">
    {mediaBlockOptions && <MediaBlock {...mediaBlockOptions} fullHeight />}

    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
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
          mb={{ xs: 'auto', md: 15, lg: 29 }}
          md={6}
          mt={{ xs: 'auto', md: 0 }}
          textAlign={{ xs: 'center', md: 'left' }}
          xs={12}
          item
        >
          <Typography color="white" fontWeight="medium" variant="h1">
            {headline}
          </Typography>

          {isValidElement(sublineElement) ? (
            sublineElement
          ) : (
            <Typography
              color="white"
              component="div"
              dangerouslySetInnerHTML={{ __html: sublineElement ?? '' }}
              mb={{ xs: 3, sm: 2 }}
              mt={{ xs: 1, sm: 0.5 }}
              variant="body1"
            />
          )}
          <Box display="flex" mt={{ xs: 3, md: 8 }}>
            <Grid
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'left' }}
              spacing={2}
              container
            >
              <Grid md="auto" xs={12} item>
                {primaryCta}
              </Grid>
              <Grid md="auto" xs={12} item>
                {secondaryCta}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid md={1} xs={0} />
      </Grid>
    </Box>
  </Box>
);
