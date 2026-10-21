import type { FetchClientBaseResponse } from '@app/fetchClient/fetchClient.types';
import { fetchClientConfig } from '@app/fetchClient/fetchClientConfig';
import { fetchClientExecute } from '@app/fetchClient/fetchClientExecute';
import type { BlogManifest, BlogPost } from './Blog.types';

const blogFileUrl = (fileName: string) =>
  new URL(`${import.meta.env.BASE_URL}blog/${fileName}`, window.location.origin);

export type QueryBlogResponse = FetchClientBaseResponse & BlogPost;

export const queryBlog = (id: number): Promise<QueryBlogResponse> => {
  const endpointUrl = blogFileUrl(`${id}.json`);

  return fetchClientExecute<QueryBlogResponse>(
    endpointUrl,
    fetchClientConfig({
      method: 'GET',
    }),
  );
};

export type QueryBlogManifestResponse = FetchClientBaseResponse & BlogManifest;

export const queryBlogManifest = (): Promise<QueryBlogManifestResponse> => {
  const endpointUrl = blogFileUrl('0.config.json');

  return fetchClientExecute<QueryBlogManifestResponse>(
    endpointUrl,
    fetchClientConfig({
      method: 'GET',
    }),
  );
};
