import { WP_REST_API_Post } from 'wp-types';
import { DeepPartial, Seo } from './yoast';
export type CustomPost = {
    acf?: Partial<CustomFields>;
    yoast_head_json?: DeepPartial<Seo>;
} & WP_REST_API_Post;
export type CustomFields = {
    banner: string;
    closeup: string;
    datasheet: string;
    'demo-url': string;
    'demo-video': string;
    'download-link': string;
    'first-headline': string;
    'first-subline': string;
    'full-name': string;
    picture: string;
    'second-animation': string;
    'second-headline': string;
    'second-subline': string;
    'short-name': string;
    photo_gallery: {
        animation: {
            full_image_url: string;
        }[];
    };
    post: {
        post_excerpt: string;
        post_name: string;
        post_title: string;
    } & CustomPost;
};
