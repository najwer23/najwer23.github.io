import { storageItemGet } from '@najwer23/utils/storage/storageItemGet';

export interface ResponseBase {
  code: string;
  message: string;
  error: string;
  statusCode: number;
}
interface RequestOptions<T> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: T;
  headers?: Record<string, string>;
}

export const executeFetch = async (url: URL, options?: RequestInit) => {
  const response = await fetch(url, options);
  const data = await response.json();

  if (data.error) {
    throw Error(data.message);
  }

  return data;
};

export const configFetch = <T>(opts?: RequestOptions<T>): RequestInit => {
  const { method = 'GET', body = {}, headers = {} } = opts || {};

  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${storageItemGet(sessionStorage, 'tokenJWTaccess')}`,
  };

  const mergedHeaders = { ...defaultHeaders, ...headers };

  const requestOptions: RequestInit = {
    method,
    credentials: 'include',
    headers: mergedHeaders,
  };

  if (method === 'POST' || method === 'PUT') {
    requestOptions.body = JSON.stringify(body);
  }

  return requestOptions;
};
