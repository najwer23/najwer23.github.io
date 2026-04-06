import { configApiOrigin } from '@najwer23/config/configApiOrigin';
import { configFetch, executeFetch, type ResponseBase } from '@najwer23/config/configFetch';

export const queryAnalyticsHit = async (body: Record<string, string>): Promise<ResponseBase> => {
  const url = new URL(`${configApiOrigin()}/analytics/hit`);
  const options = { ...configFetch({ method: 'POST', body: body }) };
  return await executeFetch(url, options);
};

type QueryAnalyticsHits = {
  data: {
    items: {
      path: string;
      data: Record<string, number>[];
    }[];
  };
} & ResponseBase;

export const queryAnalyticsHits = async (): Promise<QueryAnalyticsHits> => {
  const url = new URL(
    `${configApiOrigin()}/analytics/hits/app-name/${import.meta.env.VITE_ANALYTICS_APP_NAME}/year/2026`,
  );
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};
