import { Grid } from '@mui/material';
import { FC } from 'react';

import { Post } from './Post';

export type Person = {
  excerpt: string;
  featuredImage: string;
  id: number;
  title: string;
};
export type PeopleProps = {
  people: Person[];
};
export const People: FC<PeopleProps> = ({ people }) => (
  <Grid spacing={{ lg: 5, md: 3, xs: 2 }} xs={12} container>
    {people?.length === 0 ? (
      <Grid py={8} textAlign="center" xs={12} item>
        No people to display.
      </Grid>
    ) : (
      people?.map((person) => (
        <Grid key={person.id} lg={4} md={6} xs={12} item>
          <Post
            excerpt={person.excerpt}
            featuredImage={person.featuredImage}
            title={person.title}
          />
        </Grid>
      ))
    )}
  </Grid>
);
