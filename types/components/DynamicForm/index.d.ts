import { FC, PropsWithChildren } from 'react';
export type DynamicFormProps = PropsWithChildren<{
    formId: number;
    frameless?: boolean;
    secondary?: boolean;
    submitForm: (formData: FormData, formId: number) => Promise<void>;
}>;
export declare const DynamicForm: FC<DynamicFormProps>;
