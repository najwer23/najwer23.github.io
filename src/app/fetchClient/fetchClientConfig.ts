import { storageItemGet } from '@app/storage/storageItemGet';
import type { FetchClientConfigOptions } from './fetchClient.types';

export const fetchClientConfig = <TBody>(options?: FetchClientConfigOptions<TBody>): RequestInit => {
  const { method = 'GET', body = {}, headers = {} } = options || {};

  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${storageItemGet(sessionStorage, 'tokenJWTaccess')}`,
  };

  const mergedHeaders = { ...defaultHeaders, ...headers };

  const requestInit: RequestInit = {
    method,
    credentials: 'include',
    headers: mergedHeaders,
  };

  if (method === 'POST' || method === 'PUT') {
    requestInit.body = JSON.stringify(body);
  }

  return requestInit;
};
