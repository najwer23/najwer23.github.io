import { configFetch, executeFetch } from '@najwer23/config/configFetch';

export const queryBlog = async (id: number) => {
  const url = new URL(`${import.meta.env.BASE_URL}blog/${id}.json`, window.location.origin);
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};

export const queryBlogManifest = async () => {
  const url = new URL(`${import.meta.env.BASE_URL}blog/0.config.json`, window.location.origin);
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};
