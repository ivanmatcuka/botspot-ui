import { FC, Fragment } from 'react';

import { CustomFields, CustomPost } from '../types/wordpress';
import { ScrollableBlock } from './__ScrollableBlock';
import { Button } from './Button';
import { MediaBlock } from './MediaBlock';
import { PageContainer } from './PageContainer';
import { SecondaryBlock } from './SecondaryBlock';

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
    if (!product?.info) return null;

    const {
      'download-cta': downloadCta,
      'download-url': downloadUrl = DOWNLOAD_AREA_FALLBACK, // Legacy leftover
      'explore-cta': exploreCta = EXPLORE_CTA_FALLBACK, // Legacy leftover
      'full-name': fullName,
      photo_gallery,
      picture,
      'short-name': shortName,
    }: Partial<CustomFields> = product.info ?? {};

    const imagesUrls =
      photo_gallery?.animation.flat().map((url) => url.full_image_url) ?? [];

    const hasEnoughImages = imagesUrls.length > 9;
    const headline = fullName || product.title;

    const contentBlock = (
      <PageContainer py={{ md: 10, xs: 5 }}>
        <SecondaryBlock headline={headline} sublineElement={product.excerpt}>
          <Button href={`/products/${product.slug}`} variant="primary">
            {exploreCta} {shortName || product.title}
          </Button>
          <Button
            href={`${downloadUrl}?default=${product.title}`}
            variant="secondary"
          >
            {downloadCta}
          </Button>
        </SecondaryBlock>
      </PageContainer>
    );

    const assetUrl = scrollable
      ? (imagesUrls[0] ?? product.featuredImage)
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
