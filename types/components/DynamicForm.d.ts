import { FC, PropsWithChildren } from 'react';
import { ApiResponse } from '../utils/getForm';
export type DynamicFormProps = PropsWithChildren<{
    formId?: number;
    frameless?: boolean;
    secondary?: boolean;
    getForm?: (formId: number) => Promise<ApiResponse | null>;
    submitForm: (formData: FormData, formId: number) => Promise<void>;
}>;
export declare const DynamicForm: FC<DynamicFormProps>;
