import { FC, PropsWithChildren } from 'react';
import { Field } from '../../utils/getForm';
export type DynamicFormContentProps = PropsWithChildren<{
    fields: Field[];
    frameless: boolean;
    isLoading: boolean;
    secondary: boolean;
    onSubmit: () => void;
}>;
export declare const DynamicFormContent: FC<DynamicFormContentProps>;
