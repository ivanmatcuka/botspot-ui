import { WP_REST_API_Attachment, WP_REST_API_Post } from 'wp-types';
interface Sizes {
  [size: string]: {
    source_url: string;
  };
}
export const getFeaturedImageUrl = (
  post?: Pick<
    WP_REST_API_Post,
    'excerpt' | 'id' | 'title' | 'slug' | '_embedded'
  >,
) => {
  return (
    (
      (post?._embedded?.['wp:featuredmedia']?.[0] as WP_REST_API_Attachment)
        ?.media_details?.sizes as Sizes
    )?.large?.source_url ?? '/img/banners/innovation-lab.png'
  );
};
