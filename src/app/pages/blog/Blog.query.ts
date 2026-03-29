import { configFetch, executeFetch } from '@najwer23/config/configFetch';

export const queryBlog = async (id: number) => {
  const url = new URL(`${import.meta.env.BASE_URL}blog/${id}.json`, window.location.origin);
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};
