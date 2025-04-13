import { WP_REST_API_Post } from 'wp-types';
export declare const getPeople: () => Promise<{
    count: number;
    data: WP_REST_API_Post[];
}>;
