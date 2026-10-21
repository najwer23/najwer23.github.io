import { apiOrigin } from '@app/api/apiOrigin';
import type { FetchClientBaseResponse } from '@app/fetchClient/fetchClient.types';
import { fetchClientConfig } from '@app/fetchClient/fetchClientConfig';
import { fetchClientExecute } from '@app/fetchClient/fetchClientExecute';

export interface Song {
  id: number;
  name: string;
  url: string;
  author: string;
  licence: string;
}

export type QueryPlaylistResponse = FetchClientBaseResponse & {
  data: {
    audios: Song[];
  };
};

export const queryPlaylist = (): Promise<QueryPlaylistResponse> => {
  const endpointUrl = new URL(`${apiOrigin()}/audio/playlist`);

  return fetchClientExecute<QueryPlaylistResponse>(
    endpointUrl,
    fetchClientConfig({
      method: 'GET',
    }),
  );
};
