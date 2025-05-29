import { ApiResponse } from './getForm';

const mockFields = [
  {
    basetype: 'text',
    labels: ['Name'],
    name: 'name',
    raw_name: 'name',
    type: 'text*',
  },
  {
    basetype: 'email',
    labels: ['Email'],
    name: 'email',
    raw_name: 'email',
    type: 'email*',
  },
  {
    basetype: 'textarea',
    labels: ['Message'],
    name: 'message',
    raw_name: 'message',
    type: 'textarea',
  },
];

type MockGetFormReturnType = (formId: number) => Promise<ApiResponse | null>;
export const mockGetForm: MockGetFormReturnType = async (formId: number) => {
  console.log('Fetching form fields for formId:', formId);
  return {
    fields: mockFields,
    status: 200,
  };
};

type MockSubmitFormReturnType = (
  formData: FormData,
  formId: number,
) => Promise<void>;
export const mockSubmitForm: MockSubmitFormReturnType = async (
  formData: FormData,
  formId: number,
) => {
  console.log('Form submitted:', formId, formData);
  await new Promise((resolve) => setTimeout(resolve, 500));
};
