import { FC, PropsWithChildren } from 'react';
import { CustomPost } from '../types';
import { ApiResponse } from '../utils/getForm';
export type DownloadAreaContentProps = PropsWithChildren<{
    formId: number;
    products: CustomPost[];
    getForm: (formId: number) => Promise<ApiResponse | null>;
    submitForm: (formData: FormData, formId: number) => Promise<void>;
}>;
export declare const DownloadAreaContent: FC<DownloadAreaContentProps>;
