import { WP_REST_API_Categories } from 'wp-types';
export declare const getCategory: (slug: string) => Promise<WP_REST_API_Categories[number] | null>;
