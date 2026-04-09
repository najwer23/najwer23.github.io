import { queryAnalyticsHit } from '@app/analytics/Analytics.query';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useImmediateThrottledQuery } from './useImmediateThrottledQuery';

export const useDocumentTitle = (title: string) => {
  const location = useLocation();
  const currentUrl = window.location.href.toLowerCase();

  const trimTrailingSlashes = (path: string) => {
    const normalized = path.replace(/\/{2,}/g, '/').replace(/\/+$/, '');
    return normalized === '' ? '/' : normalized;
  };

  useImmediateThrottledQuery(
    {
      queryKey: [
        'useDocumentTitle',
        'useDocumentTitle' + trimTrailingSlashes(import.meta.env.BASE_URL + location.pathname),
      ],
      queryFn: () =>
        queryAnalyticsHit({
          appName: import.meta.env.VITE_ANALYTICS_APP_NAME,
          pageName: trimTrailingSlashes(import.meta.env.BASE_URL + location.pathname),
        }),
      staleTime: 0,
      gcTime: 0,
      retry: 0,
      enabled: !currentUrl.includes('localhost'),
    },
    0,
  );

  useEffect(() => {
    document.title = title;
  }, [title]);
};
