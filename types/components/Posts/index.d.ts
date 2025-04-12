import { FC } from 'react';
import { WP_REST_API_Post } from 'wp-types';
export type PostsProps = {
    hidePagination?: boolean;
    list?: boolean;
    perPage?: number;
    posts?: Pick<WP_REST_API_Post, 'excerpt' | 'id' | 'title' | 'slug' | '_embedded'>[];
    loading?: boolean;
    count: number;
    setPage: (page: number) => void;
};
export declare const Posts: FC<PostsProps>;
