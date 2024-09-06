import { configApiOrgin } from "@najwer23/config/configApiOrgin";
import { executeFetch } from "@najwer23/config/configFetch";

interface QueryApod {
  title: string;
  explanation: string;
  media_type: 'image' | 'video';
  date: string;
  url: string;
  hdurl: string;
}

export const queryApod = async (currentPage: number): Promise<QueryApod[]> => {
  const url = new URL(`${configApiOrgin()}/nasa/apod?offset=30&page=${currentPage}`);
  return await executeFetch(url);
};