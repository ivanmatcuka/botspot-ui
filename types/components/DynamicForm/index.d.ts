import { FC, PropsWithChildren } from 'react';
import { ApiResponse } from '../../utils/getForm';
export type DynamicFormProps = PropsWithChildren<{
    formId?: number;
    frameless?: boolean;
    secondary?: boolean;
    submitForm: (formData: FormData, formId: number) => Promise<void>;
    getForm?: (formId: number) => Promise<ApiResponse | null>;
}>;
export declare const DynamicForm: FC<DynamicFormProps>;
