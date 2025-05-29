import { ApiResponse } from './getForm';
type MockGetFormReturnType = (formId: number) => Promise<ApiResponse | null>;
export declare const mockGetForm: MockGetFormReturnType;
type MockSubmitFormReturnType = (formData: FormData, formId: number) => Promise<void>;
export declare const mockSubmitForm: MockSubmitFormReturnType;
export {};
