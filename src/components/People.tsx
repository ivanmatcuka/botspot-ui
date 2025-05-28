import { Grid } from '@mui/material';
import { FC } from 'react';

import { CustomPost } from '../types';
import { getFeaturedImageUrl } from '../utils';
import { Post } from './Post';

export type PeopleProps = {
  people: CustomPost[];
};
export const People: FC<PeopleProps> = ({ people }) => (
  <Grid spacing={{ lg: 5, md: 3, xs: 2 }} xs={12} container>
    {people?.map((post) => (
      <Grid key={post.id} lg={4} md={6} xs={12} item>
        <Post
          excerpt={post.excerpt.rendered}
          featuredImage={getFeaturedImageUrl(post)}
          title={post.title.rendered}
        />
      </Grid>
    ))}
  </Grid>
);
