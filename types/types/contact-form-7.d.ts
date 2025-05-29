export type CF7FormField = {
    labels?: string[];
    name: string;
    options?: string[];
    type: string;
    values?: string[];
};
export type CF7Form = {
    id: number;
    locale: string;
    title: string;
    properties: {
        form: {
            content: string;
            fields: Record<string, CF7FormField>;
        };
        mail: {
            additional_headers: string;
            attachments: string;
            body: string;
            exclude_blank: boolean;
            recipient: string;
            sender: string;
            subject: string;
            use_html: boolean;
        };
    };
};
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
