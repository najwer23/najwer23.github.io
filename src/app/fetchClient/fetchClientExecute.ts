import type { FetchClientBaseResponse } from './fetchClient.types';

export const fetchClientExecute = async <TResponse extends FetchClientBaseResponse = FetchClientBaseResponse>(
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
