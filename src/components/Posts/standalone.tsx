'use client';

import { FC } from 'react';

import { Posts, PostsProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandalonePosts: FC<PostsProps> = (props) => (
  <ThemeRegistry>
    <Posts {...props} />
  </ThemeRegistry>
);
