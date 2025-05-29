/**
 * Jobs displays a list of job postings. Each job includes a title and an excerpt. Use the stories to preview different job list states.
 * Figma reference: https://www.figma.com/file
 */

import { Box } from '@mui/material';
import { FC } from 'react';

import { Job } from './Job';

const NO_JOBS_MSG = 'No jobs available at the moment.';

export type Job = {
  excerpt?: string;
  id: number;
  title: string;
};
export type JobsProps = {
  jobs: Job[];
};
export const Jobs: FC<JobsProps> = ({ jobs }) => {
  return jobs.length ? (
    jobs.map(({ excerpt, id, title }) => (
      <Box display="flex" key={id}>
        <Job excerpt={excerpt} id={id} title={title} />
      </Box>
    ))
  ) : (
    <Box color="grey.500" p={4} textAlign="center" width="100%">
      {NO_JOBS_MSG}
    </Box>
  );
};
