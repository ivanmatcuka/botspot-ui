import { FC } from 'react';
export declare const FORM_ID = 15422;
type DownloadFormProps = {
    defaultProductName?: string;
    isLoading: boolean;
    productNames: string[];
    onSubmit?: (formData: FormData) => void;
};
export declare const DownloadForm: FC<DownloadFormProps>;
export {};
