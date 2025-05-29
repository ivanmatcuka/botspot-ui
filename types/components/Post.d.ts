import { FC, PropsWithChildren } from 'react';
export type PostProps = {
    excerpt?: string;
    featuredImage?: string;
    objectFit?: 'cover' | 'contain';
    title: string;
};
export declare const Post: FC<PropsWithChildren<PostProps>>;
