import { WP_REST_API_Post } from 'wp-types';
import { requestInit } from '.';
import { getCategory } from './getCategory';

export const getPeople = async (): Promise<{
  count: number;
  data: WP_REST_API_Post[];
}> => {
  const category = await getCategory('people');
  if (!category) return { count: 0, data: [] };

  const response = await fetch(
    `/posts?&categories=${category.id}&per_page=100&_embed`,
    requestInit,
  );

  try {
    const data = await response.json();
    const count = Number(response.headers.get('X-WP-TotalPages')) ?? 1;
    return { count, data };
  } catch {
    return { count: 0, data: [] };
  }
};
