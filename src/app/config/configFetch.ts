import { storageItemGet } from '@app/storage/storageItemGet';

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

export const executeFetchExternal = async <TResponse>(url: URL, options?: RequestInit): Promise<TResponse> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`External request failed with status ${response.status}`);
  }

  return response.json();
};

export const executeFetch = async <TResponse extends ResponseBase = ResponseBase>(
  url: URL,
  options?: RequestInit,
): Promise<TResponse> => {
  const response = await fetch(url, options);
  const data: TResponse = await response.json();

  if (data.error) {
    throw new Error(data.message);
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
