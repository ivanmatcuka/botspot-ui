'use client';

import { Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { CustomPost } from '../types';
import { Button } from './Button';
import { LoadingSkeletons } from './LoadingSkeletons';
import { Pagination } from './Pagination';
import { Post } from './Post';

export type PostsProps = {
  hidePagination?: boolean;
  list?: boolean;
  perPage?: number;
  getPosts: (
    page?: number,
    perPage?: number,
  ) => Promise<{
    count: number;
    data: CustomPost[];
  }>;
};
export const Posts: FC<PostsProps> = ({
  getPosts,
  hidePagination = false,
  list = false,
  perPage = 12,
}) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<CustomPost[]>([]);

  useEffect(() => {
    setLoading(true);
    getPosts(page, perPage)
      .then(({ count, data }) => {
        setPosts(data);
        setCount(count);
      })
      .finally(() => setLoading(false));
  }, [page, perPage, getPosts]);

  return (
    <Grid spacing={{ lg: 5, md: 3, xs: 2 }} container>
      {loading ? (
        <LoadingSkeletons count={perPage} />
      ) : (
        posts.map((post) => (
          <Grid
            key={post.id}
            lg={list ? 12 : 4}
            md={list ? 12 : 6}
            xs={12}
            item
          >
            <Post featuredImage={post.featuredImage} title={post.title || ''}>
              <Button
                href={`/3d-academy/${post.slug}`}
                target="_blank"
                variant="secondary"
              >
                Read Full Article
              </Button>
            </Post>
          </Grid>
        ))
      )}
      {!hidePagination && (
        <Grid mx="auto" xs={12} item>
          <Pagination count={count} perPage={perPage} setPage={setPage} />
        </Grid>
      )}
    </Grid>
  );
};
