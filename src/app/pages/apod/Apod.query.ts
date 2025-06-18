import { configApiOrigin } from '@najwer23/config/configApiOrigin';
import { executeFetch } from '@najwer23/config/configFetch';

interface QueryApod {
  title: string;
  explanation: string;
  media_type: 'image' | 'video';
  date: string;
  url: string;
  hdurl: string;
}

export const queryApod = async (currentPage: number): Promise<QueryApod[]> => {
  const url = new URL(`${configApiOrigin()}/nasa/apod?offset=30&page=${currentPage}`);
  return await executeFetch(url);
};
