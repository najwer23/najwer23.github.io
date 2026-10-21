import { apiOrigin } from '@app/api/apiOrigin';
import type { FetchClientBaseResponse } from '@app/fetchClient/fetchClient.types';
import { fetchClientConfig } from '@app/fetchClient/fetchClientConfig';
import { fetchClientExecute } from '@app/fetchClient/fetchClientExecute';

export type QueryContactPayload = Record<string, string>;

export type QueryContactResponse = FetchClientBaseResponse;

export const queryContact = (payload: QueryContactPayload): Promise<QueryContactResponse> => {
  const endpointUrl = new URL(`${apiOrigin()}/mail/contact-me`);

  return fetchClientExecute<QueryContactResponse>(
    endpointUrl,
    fetchClientConfig({
      method: 'POST',
      body: payload,
    }),
  );
};
