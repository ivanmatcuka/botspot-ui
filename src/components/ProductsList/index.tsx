import { FC } from 'react';
import { getFeaturedImageUrl } from '../../utils/getFeaturedImageUrl';
import { SecondaryBlock } from '../SecondaryBlock';
import { Button } from '../Button';
import { ScrollableBlock } from '../ScrollableBlock';
import { MediaBlock } from '../MediaBlock';
import { PageContainer } from '../PageContainer';
import { CustomFields } from '../../types/wordpress';

export type ProductsListProps = {
  products: any[];
  scrollable: boolean;
};
export const ProductsList: FC<ProductsListProps> = ({
  products,
  scrollable = false,
}) => {
  return products?.map((product) => {
    if (!product.acf) return null;

    const imagesUrls =
      (product.acf as any).photo_gallery?.animation
        .flat()
        .map((url: any) => url.full_image_url) ?? [];

    const { picture }: Partial<CustomFields> = product.acf ?? {};

    const hasEnoughImages = imagesUrls.length > 9;

    const contentBlock = (
      <SecondaryBlock
        headline={product?.acf?.['full-name'] || product.title.rendered}
        sublineElement={product.excerpt.rendered}
      >
        <Button href={`/products/${product.slug}`} variant="primary">
          Explore {product?.acf?.['short-name'] || product.title.rendered}
        </Button>
        <Button href={`/download-area/${product.slug}`} variant="secondary">
          Download Data Sheet
        </Button>
      </SecondaryBlock>
    );

    return hasEnoughImages && scrollable ? (
      <ScrollableBlock imagesUrls={imagesUrls} key={product.id}>
        {contentBlock}
      </ScrollableBlock>
    ) : (
      <>
        <MediaBlock
          assetUrl={
            scrollable
              ? (imagesUrls[0] ?? getFeaturedImageUrl(product))
              : picture
          }
          key={product.id}
          containerClassName="block md:hidden"
          objectFit="cover"
        />
        <MediaBlock
          assetUrl={
            scrollable
              ? (imagesUrls[0] ?? getFeaturedImageUrl(product))
              : picture
          }
          key={product.id}
          containerClassName="hidden md:block"
          objectFit="contain"
        />
        <PageContainer>{contentBlock}</PageContainer>
      </>
    );
  });
};
