import { FC, Fragment } from 'react';
import { getFeaturedImageUrl } from '../../utils/getFeaturedImageUrl';
import { SecondaryBlock } from '../SecondaryBlock';
import { ScrollableBlock } from '../ScrollableBlock';
import { MediaBlock } from '../MediaBlock';
import { PageContainer } from '../PageContainer';
import { CustomFields, CustomPost } from '../../types/wordpress';
import { Button } from '../Button';

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
      // Legacy leftover
      'download-url': downloadLink = DOWNLOAD_AREA_FALLBACK,
      picture,
      photo_gallery,
      'short-name': shortName,
      'demo-cta': demoCta,
      'explore-cta':
        // Legacy leftover
        exploreCta = EXPLORE_CTA_FALLBACK,
    }: Partial<CustomFields> = product.acf ?? {};

    const imagesUrls =
      photo_gallery?.animation.flat().map((url: any) => url.full_image_url) ??
      [];

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
            href={`${downloadLink}?default=${product.title.rendered}`}
            variant="secondary"
          >
            {demoCta}
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
