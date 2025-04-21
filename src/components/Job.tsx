import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { Button } from './Button';
import { Tile } from './Tile';

export type JobProps = {
  excerpt: string;
  id: number;
  title: string;
};
export const Job: FC<JobProps> = ({ excerpt, id, title }) => (
  <Tile headline={title}>
    <Box
      alignItems="center"
      display="flex"
      flexDirection={{ md: 'row', xs: 'column' }}
      justifyContent="space-between"
      rowGap={{ md: 0, xs: 2 }}
    >
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Button href={`/about/careers/${id}`} variant="primary">
        <ArrowForwardIos />
      </Button>
    </Box>
  </Tile>
);
