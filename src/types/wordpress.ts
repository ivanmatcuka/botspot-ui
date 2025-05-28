import { WP_REST_API_Post } from 'wp-types';

import { DeepPartial, Seo } from './yoast';

export type CustomPost<T = unknown> = {
  acf?: Partial<CustomFields>;
  block_data?: T[];
  has_blocks?: boolean;
  yoast_head_json?: DeepPartial<Seo>;
} & WP_REST_API_Post;

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
    animation: { full_image_url: string }[];
  };

  post: {
    post_excerpt: string;
    post_name: string;
    post_title: string;
  } & CustomPost;
};
