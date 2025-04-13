export type Field = {
    attr: string;
    basetype: string;
    content: string;
    labels: string[];
    name: string;
    options: string[];
    pipes: Record<string, unknown>;
    raw_name: string;
    raw_values: string[];
    type: string;
    values: string[];
};
type ApiResponse = {
    fields: Field[];
    status: number;
};
export declare const getForm: (formId: number) => Promise<ApiResponse | null>;
export {};
