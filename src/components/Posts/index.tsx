'use client';

import { Grid } from '@mui/material';
import { FC } from 'react';

import { WP_REST_API_Post } from 'wp-types';
import { getFeaturedImageUrl } from '../../utils/getFeaturedImageUrl';
import { Button } from '../Button';
import { LoadingSkeletons } from '../LoadingSkeletons';
import { Pagination } from '../Pagination';
import { Post } from '../Post';

export type PostsProps = {
  hidePagination?: boolean;
  list?: boolean;
  perPage?: number;
  posts?: Pick<
    WP_REST_API_Post,
    'excerpt' | 'id' | 'title' | 'slug' | '_embedded'
  >[];
  loading?: boolean;
  count: number;
  setPage: (page: number) => void;
};
export const Posts: FC<PostsProps> = ({
  hidePagination = false,
  list = false,
  perPage = 12,
  posts,
  loading,
  count,
  setPage,
}) => {
  return (
    <Grid spacing={{ lg: 5, md: 3, xs: 2 }} container>
      {loading ? (
        <LoadingSkeletons count={perPage} />
      ) : (
        posts?.map((post) => (
          <Grid
            key={post.id}
            lg={list ? 12 : 4}
            md={list ? 12 : 6}
            xs={12}
            item
          >
            <Post
              featuredImage={getFeaturedImageUrl(post)}
              title={post.title.rendered}
            >
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
