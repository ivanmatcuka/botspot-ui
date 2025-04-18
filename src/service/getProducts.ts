import { CustomPost } from '../types/wordpress';

const getBaseUrl = (url: string) => `${url}/wp-json/wp/v2`;

const requestInit: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
export const getProductsFunction =
  (url: string) =>
  async (): Promise<{
    count: number;
    data: CustomPost[];
  }> => {
    const response = await fetch(
      `${getBaseUrl(url)}/product?&per_page=100&acf_format=standard`,
      requestInit,
    );

    try {
      const data = await response.json();
      const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;

      if (data?.data?.status) {
        return { count: 0, data: [] };
      }

      return { count, data };
    } catch {
      return { count: 0, data: [] };
    }
  };
