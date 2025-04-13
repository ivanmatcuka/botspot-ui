'use client';

import { FC } from 'react';

import { People, PeopleProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandalonePeople: FC<PeopleProps> = (props) => (
  <ThemeRegistry>
    <People {...props} />
  </ThemeRegistry>
);
