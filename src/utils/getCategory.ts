import { WP_REST_API_Categories } from 'wp-types';
import { requestInit } from '.';

export const getCategory = async (
  slug: string,
): Promise<WP_REST_API_Categories[number] | null> => {
  const response = await fetch(`/categories?slug=${slug}`, requestInit);

  try {
    const data = (await response.json()) as WP_REST_API_Categories;
    return data[0];
  } catch (error) {
    return null;
  }
};
