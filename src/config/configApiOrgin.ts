export const configApiOrgin = (): string => {
  const currentUrl = window.location.href.toLowerCase();

  if (currentUrl.includes('localhost') || currentUrl.includes('127.0.0.1')) {
    return import.meta.env.VITE_NAJWER23API_FASTIFY_ORIGIN_DEV;
  }

  return import.meta.env.VITE_NAJWER23API_FASTIFY_ORIGIN_PROD;
};
