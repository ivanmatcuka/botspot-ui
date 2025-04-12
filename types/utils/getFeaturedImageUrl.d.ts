import { WP_REST_API_Post } from 'wp-types';
export declare const getFeaturedImageUrl: (post?: Pick<WP_REST_API_Post, "excerpt" | "id" | "title" | "slug" | "_embedded">) => string;
