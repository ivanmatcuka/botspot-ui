import { FC } from 'react';
import { CustomPost } from '../types';
export type PostsProps = {
    hidePagination?: boolean;
    list?: boolean;
    perPage?: number;
    getPosts: (page?: number, perPage?: number) => Promise<{
        count: number;
        data: CustomPost[];
    }>;
};
export declare const Posts: FC<PostsProps>;
