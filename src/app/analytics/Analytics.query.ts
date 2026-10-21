import { apiOrigin } from '@app/api/apiOrigin';
import type { FetchClientBaseResponse } from '@app/fetchClient/fetchClient.types';
import { fetchClientConfig } from '@app/fetchClient/fetchClientConfig';
import { fetchClientExecute } from '@app/fetchClient/fetchClientExecute';

export interface QueryAnalyticsHitPayload {
  appName: string;
  pageName: string;
}

export type QueryAnalyticsHitResponse = FetchClientBaseResponse;

export const queryAnalyticsHit = (payload: QueryAnalyticsHitPayload): Promise<QueryAnalyticsHitResponse> => {
  const endpointUrl = new URL(`${apiOrigin()}/analytics/hit`);

  return fetchClientExecute<QueryAnalyticsHitResponse>(
    endpointUrl,
    fetchClientConfig({
      method: 'POST',
      body: payload,
    }),
  );
};
