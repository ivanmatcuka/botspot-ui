import { FC, Fragment } from 'react';

import { ScrollableBlock } from '../__ScrollableBlock';
import { CustomFields, CustomPost } from '../../types/wordpress';
import { getFeaturedImageUrl } from '../../utils/getFeaturedImageUrl';
import { Button } from '../Button';
import { MediaBlock } from '../MediaBlock';
import { PageContainer } from '../PageContainer';
import { SecondaryBlock } from '../SecondaryBlock';

// Legacy leftover
const DOWNLOAD_AREA_FALLBACK = '/download-area';
const EXPLORE_CTA_FALLBACK = 'Explore';

export type ProductsListProps = {
  products: CustomPost[];
  scrollable: boolean;
};
export const ProductsList: FC<ProductsListProps> = ({
  products,
  scrollable = false,
}) => {
  return products?.map((product, index) => {
    if (!product?.acf) return null;

    const {
      'download-cta': downloadCta,
      'download-url': downloadUrl = DOWNLOAD_AREA_FALLBACK, // Legacy leftover
      'explore-cta': exploreCta = EXPLORE_CTA_FALLBACK, // Legacy leftover
      photo_gallery,
      picture,
      'short-name': shortName,
    }: Partial<CustomFields> = product.acf ?? {};

    const imagesUrls =
      photo_gallery?.animation.flat().map((url) => url.full_image_url) ?? [];

    const hasEnoughImages = imagesUrls.length > 9;
    const headline = product.acf['full-name'] || product.title.rendered;

    const contentBlock = (
      <PageContainer py={{ md: 10, xs: 5 }}>
        <SecondaryBlock
          headline={headline}
          sublineElement={product.excerpt.rendered}
        >
          <Button href={`/products/${product.slug}`} variant="primary">
            {exploreCta} {shortName || product.title.rendered}
          </Button>
          <Button
            href={`${downloadUrl}?default=${product.title.rendered}`}
            variant="secondary"
          >
            {downloadCta}
          </Button>
        </SecondaryBlock>
      </PageContainer>
    );

    const assetUrl = scrollable
      ? (imagesUrls[0] ?? getFeaturedImageUrl(product))
      : picture;

    return hasEnoughImages && scrollable ? (
      <ScrollableBlock
        imagesUrls={imagesUrls}
        key={`${product.id}_${index + 1}`}
      >
        {contentBlock}
      </ScrollableBlock>
    ) : (
      <Fragment key={`${product.id}_${index + 1}`}>
        <MediaBlock
          assetUrl={assetUrl}
          containerClassName="block md:hidden"
          objectFit="cover"
        />
        <MediaBlock
          assetUrl={assetUrl}
          containerClassName="hidden md:block"
          objectFit="contain"
        />
        {contentBlock}
      </Fragment>
    );
  });
};
