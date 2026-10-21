import { fetchClientExecuteExternal } from '@app/fetchClient/fetchClientExecuteExternal';
import type { BlogManifest, BlogPost } from './Blog.types';

const blogFileUrl = (fileName: string) =>
  new URL(`${import.meta.env.BASE_URL}blog/${fileName}`, window.location.origin);

export type QueryBlogResponse = BlogPost;

export const queryBlog = (id: number): Promise<QueryBlogResponse> => {
  const endpointUrl = blogFileUrl(`${id}.json`);
  return fetchClientExecuteExternal<QueryBlogResponse>(endpointUrl);
};

export type QueryBlogManifestResponse = BlogManifest;

export const queryBlogManifest = (): Promise<QueryBlogManifestResponse> => {
  const endpointUrl = blogFileUrl('0.config.json');
  return fetchClientExecuteExternal<QueryBlogManifestResponse>(endpointUrl);
};
