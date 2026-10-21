export interface FetchClientBaseResponse {
  code: string;
  message: string;
  error: string;
  statusCode: number;
}

export interface FetchClientConfigOptions<TBody> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: TBody;
  headers?: Record<string, string>;
}
