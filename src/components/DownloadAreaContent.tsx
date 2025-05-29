'use client';
/**
 * This is a higly specific component that is used to display a download area.
 * Needs to be reconsidered in the future.
 * Figma reference: https://www.figma.com
 */
import { Grid } from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';

import { CustomPost } from '../types';
import { ApiResponse } from '../utils/getForm';
import { Button } from './Button';
import { DynamicForm } from './DynamicForm';
import { MainBlock } from './MainBlock';
import { Post } from './Post';

export type DownloadAreaContentProps = PropsWithChildren<{
  formId: number;
  products: CustomPost[];
  getForm: (formId: number) => Promise<ApiResponse | null>;
  submitForm: (formData: FormData, formId: number) => Promise<void>;
}>;
export const DownloadAreaContent: FC<DownloadAreaContentProps> = ({
  children,
  formId,
  getForm,
  products,
  submitForm,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return isSubmitted ? (
    <>
      <MainBlock
        headline="Exclusively access all relevant data about our 3D Scanners below."
        subline="Download Area"
      />
      <Grid mt={6} spacing={{ lg: 5, md: 3, xs: 2 }} container>
        {products.map((product, index) => {
          const { datasheet, picture } = product.acf ?? {};

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
      submitForm={async (formData, formId) => {
        setIsSubmitted(true);
        submitForm(formData, formId);
      }}
      formId={formId}
      getForm={getForm}
    >
      {children}
    </DynamicForm>
  );
};
