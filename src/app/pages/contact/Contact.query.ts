import { configApiOrigin } from '@najwer23/config/configApiOrigin';
import { configFetch, executeFetch, type ResponseBase } from '@najwer23/config/configFetch';

export const queryContact = async (body: Record<string, string>): Promise<ResponseBase> => {
  const url = new URL(`${configApiOrigin()}/mail/contact-me`);
  const options = { ...configFetch({ method: 'POST', body: body }) };
  return await executeFetch(url, options);
};
