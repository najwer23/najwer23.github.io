export const fetchClientExecuteExternal = async <TResponse>(url: URL, options?: RequestInit): Promise<TResponse> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`External request failed with status ${response.status}`);
  }

  return response.json();
};
