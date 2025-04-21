import { FC, Fragment } from 'react';
import { getFeaturedImageUrl } from '../../utils/getFeaturedImageUrl';
import { SecondaryBlock } from '../SecondaryBlock';
import { ScrollableBlock } from '../ScrollableBlock';
import { MediaBlock } from '../MediaBlock';
import { PageContainer } from '../PageContainer';
import { CustomFields } from '../../types/wordpress';
import { Button } from '../Button';

const DOWNLOAD_AREA_FALLBACK = '/download-area';

export type ProductsListProps = {
  products: any[];
  scrollable: boolean;
};
export const ProductsList: FC<ProductsListProps> = ({
  products,
  scrollable = false,
}) => {
  return products?.map((product, index) => {
    if (!product?.acf) return null;

    const imagesUrls =
      (product.acf as any).photo_gallery?.animation
        .flat()
        .map((url: any) => url.full_image_url) ?? [];

    const { picture }: Partial<CustomFields> = product.acf ?? {};

    const hasEnoughImages = imagesUrls.length > 9;

    const contentBlock = (
      <PageContainer py={{ md: 10, xs: 5 }}>
        <SecondaryBlock
          headline={product.acf['full-name'] || product.title.rendered}
          sublineElement={product.excerpt.rendered}
        >
          <Button href={`/products/${product.slug}`} variant="primary">
            Explore {product.acf['short-name'] || product.title.rendered}
          </Button>
          <Button
            href={`${product.acf['download-link'] || DOWNLOAD_AREA_FALLBACK}?default=${product.title.rendered}`}
            variant="secondary"
          >
            Download Data Sheet
          </Button>
        </SecondaryBlock>
      </PageContainer>
    );

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
          assetUrl={
            scrollable
              ? (imagesUrls[0] ?? getFeaturedImageUrl(product))
              : picture
          }
          containerClassName="block md:hidden"
          objectFit="cover"
        />
        <MediaBlock
          assetUrl={
            scrollable
              ? (imagesUrls[0] ?? getFeaturedImageUrl(product))
              : picture
          }
          containerClassName="hidden md:block"
          objectFit="contain"
        />
        {contentBlock}
      </Fragment>
    );
  });
};
