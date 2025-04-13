import { Box } from '@mui/material';
import { FC } from 'react';
import type { WP_REST_API_Post } from 'wp-types';
import { Job } from '../Job';

export type JobsProps = {
  jobs: Pick<WP_REST_API_Post, 'excerpt' | 'id' | 'title'>[];
};
export const Jobs: FC<JobsProps> = ({ jobs }) => {
  return jobs.map(({ excerpt, id, title }) => (
    <Box display="flex" key={id}>
      <Job excerpt={excerpt.rendered} id={id} title={title.rendered} />
    </Box>
  ));
};
