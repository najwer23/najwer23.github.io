import { configApiOrigin } from '@app/config/configApiOrigin';
import { configFetch, executeFetch, type ResponseBase } from '@app/config/configFetch';

export type ContactPayload = Record<string, string>;

export type ContactResponse = ResponseBase;

export const queryContact = (payload: ContactPayload): Promise<ContactResponse> => {
  const endpointUrl = new URL(`${configApiOrigin()}/mail/contact-me`);
  return executeFetch<ContactResponse>(endpointUrl, configFetch({ method: 'POST', body: payload }));
};
