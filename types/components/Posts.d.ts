import { FC } from 'react';
import { WP_REST_API_Post } from 'wp-types';
export type PostsProps = {
    hidePagination?: boolean;
    list?: boolean;
    perPage?: number;
    getPosts: (page?: number, perPage?: number) => Promise<{
        count: number;
        data: WP_REST_API_Post[];
    }>;
};
export declare const Posts: FC<PostsProps>;
