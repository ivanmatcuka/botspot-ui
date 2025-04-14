import { FC, PropsWithChildren } from 'react';
import { WP_REST_API_Post } from 'wp-types';
import { ApiResponse } from '../../utils/getForm';
export type DownloadAreaContentProps = PropsWithChildren<{
    products: WP_REST_API_Post[];
    formId: number;
    submitForm: (formData: FormData, formId: number) => Promise<void>;
    getForm?: (formId: number) => Promise<ApiResponse | null>;
}>;
export declare const DownloadAreaContent: FC<DownloadAreaContentProps>;
