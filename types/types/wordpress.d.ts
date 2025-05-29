export type CustomPost<T = unknown> = {
    blocks?: T[];
    content?: string;
    excerpt?: string;
    featuredImage?: string;
    id: number;
    info?: Partial<CustomFields>;
    slug?: string;
    title: string;
};
export type CustomFields = {
    banner: string;
    closeup: string;
    datasheet: string;
    'demo-cta': string;
    'demo-url': string;
    'download-cta': string;
    'download-url': string;
    'explore-cta': string;
    'first-headline': string;
    'first-subline': string;
    'full-name': string;
    'parent-page': string;
    picture: string;
    'post-cta': string;
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
