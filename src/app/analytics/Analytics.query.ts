import { configApiOrigin } from '../config/configApiOrigin';
import { configFetch, executeFetch, type ResponseBase } from '../config/configFetch';

export interface AnalyticsHitPayload {
  appName: string;
  pageName: string;
}

export type AnalyticsHitResponse = ResponseBase;

export const queryAnalyticsHit = (payload: AnalyticsHitPayload): Promise<AnalyticsHitResponse> => {
  const endpointUrl = new URL(`${configApiOrigin()}/analytics/hit`);
  return executeFetch<AnalyticsHitResponse>(endpointUrl, configFetch({ method: 'POST', body: payload }));
};
