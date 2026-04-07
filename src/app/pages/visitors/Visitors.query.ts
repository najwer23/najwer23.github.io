import { configApiOrigin } from '@app/config/configApiOrigin';
import { configFetch, executeFetch, type ResponseBase } from '@app/config/configFetch';

type QueryVisitorsHits = {
  data: {
    items: {
      path: string;
      data: Record<string, number>[];
    }[];
  };
} & ResponseBase;

export const queryVisitorsHits = async (): Promise<QueryVisitorsHits> => {
  const url = new URL(
    `${configApiOrigin()}/analytics/hits/app-name/${import.meta.env.VITE_ANALYTICS_APP_NAME}/year/2026`,
  );
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};
