import { executeFetchExternal } from '@app/config/configFetch';
import type { BlogManifest, BlogPost } from './Blog.types';

const blogFileUrl = (fileName: string) =>
  new URL(`${import.meta.env.BASE_URL}blog/${fileName}`, window.location.origin);

export const queryBlog = (id: number): Promise<BlogPost> => executeFetchExternal<BlogPost>(blogFileUrl(`${id}.json`));

export const queryBlogManifest = (): Promise<BlogManifest> =>
  executeFetchExternal<BlogManifest>(blogFileUrl('0.config.json'));
