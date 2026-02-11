import { configApiOrigin } from '@najwer23/config/configApiOrigin';
import { configFetch, executeFetch, type ResponseBase } from '@najwer23/config/configFetch';

export interface Song {
  id: number;
  name: string;
  url: string;
  author: string;
  licence: string;
}

type QueryPlaylist = { data: { audios: Song[] } } & ResponseBase;

export const queryPlaylist = async (): Promise<QueryPlaylist> => {
  const url = new URL(`${configApiOrigin()}/audio/playlist`);
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};
