import { FC, PropsWithChildren } from 'react';
export type PostProps = PropsWithChildren<{
    excerpt?: string;
    featuredImage?: string;
    objectFit?: 'cover' | 'contain';
    title: string;
}>;
export declare const Post: FC<PostProps>;
