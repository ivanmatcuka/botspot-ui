import { FC, ReactNode } from 'react';
type PostProps = {
    cta?: ReactNode;
    excerpt?: string;
    featuredImage?: string;
    objectFit?: 'cover' | 'contain';
    title: string;
};
export declare const Post: FC<PostProps>;
export {};
