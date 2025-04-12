'use client';

import { FC } from 'react';

import { Jobs, JobsProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneJobs: FC<JobsProps> = (props) => (
  <ThemeRegistry>
    <Jobs {...props} />
  </ThemeRegistry>
);
