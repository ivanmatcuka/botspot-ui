/**
 * Post displays a single post tile with a title, excerpt, featured image, and optional children.
 * Figma reference: https://www.figma.com/file/
 */
import { FC, PropsWithChildren } from 'react';
export type PostProps = {
    excerpt?: string;
    featuredImage?: string;
    objectFit?: 'cover' | 'contain';
    title: string;
    titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};
export declare const Post: FC<PropsWithChildren<PostProps>>;
