'use client';

import { Grid } from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';
import { WP_REST_API_Post } from 'wp-types';
import { ApiResponse } from '../../utils/getForm';
import { Button } from '../Button';
import { DynamicForm } from '../DynamicForm';
import { MainBlock } from '../MainBlock';
import { Post } from '../Post';

export type DownloadAreaContentProps = PropsWithChildren<{
  products: WP_REST_API_Post[];
  formId: number;
  submitForm: (formData: FormData, formId: number) => Promise<void>;
  getForm?: (formId: number) => Promise<ApiResponse | null>;
}>;
export const DownloadAreaContent: FC<DownloadAreaContentProps> = ({
  products,
  submitForm,
  formId,
  children,
  getForm,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return isSubmitted ? (
    <>
      <MainBlock
        headline="Exclusively access all relevant data about our 3D Scanners below."
        subline="Download Area"
      />
      <Grid spacing={{ lg: 5, md: 3, xs: 2 }} mt={6} container>
        {products.map((product, index) => {
          const { datasheet, picture }: Partial<any> = product.acf ?? {};

          return (
            <Grid key={index} lg={4} md={6} xs={12} item>
              <Post
                excerpt={product.excerpt.rendered}
                featuredImage={picture}
                objectFit="contain"
                title={product.title.rendered}
              >
                <Button href={datasheet} variant="secondary">
                  Download Data Sheet
                </Button>
              </Post>
            </Grid>
          );
        })}
      </Grid>
    </>
  ) : (
    <DynamicForm
      formId={formId}
      submitForm={async (formData, formId) => {
        setIsSubmitted(true);
        submitForm(formData, formId);
      }}
      getForm={getForm}
    >
      {children}
    </DynamicForm>
  );
};
