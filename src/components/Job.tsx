/**
 * Job displays a single job posting with a title, excerpt, and a call-to-action button.
 * Figma reference: https://www.figma.com/file
 */

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { CustomPost } from '../types';
import { Button } from './Button';
import { Tile } from './Tile';

const NO_DESCRIPTION_MSG = 'No description available.';

export type JobProps = Pick<CustomPost, 'excerpt' | 'title' | 'slug'>;
export const Job: FC<JobProps> = ({ excerpt, slug, title }) => (
  <Tile headline={title}>
    <Box
      alignItems="center"
      columnGap={{ md: 2, xs: 0 }}
      display="flex"
      flexDirection={{ md: 'row', xs: 'column' }}
      justifyContent="space-between"
      rowGap={{ md: 0, xs: 2 }}
    >
      {excerpt ? (
        <Typography
          component="div"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      ) : (
        <Typography color="grey.500" variant="body2">
          {NO_DESCRIPTION_MSG}
        </Typography>
      )}
      <Button href={`/about/careers/${slug}`} variant="primary">
        <ArrowForwardIos />
      </Button>
    </Box>
  </Tile>
);
