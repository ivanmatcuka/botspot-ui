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
export type ApiResponse = {
    fields: Field[];
    status: number;
};
