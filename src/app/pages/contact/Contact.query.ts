import { configApiOrgin } from '@najwer23/config/configApiOrgin';
import { configFetch, executeFetch, ResponseBase } from '@najwer23/config/configFetch';

export const queryContact = async (body: Record<string, string>): Promise<ResponseBase> => {
  const url = new URL(`${configApiOrgin()}/mail/contact-me`);
  const options = { ...configFetch({ method: 'POST', body: body }) };
  return await executeFetch(url, options);
};
