import { queryAnalyticsHit } from '@app/analytics/Analytics.query';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useImmediateThrottledQuery } from './useImmediateThrottledQuery';

export const useDocumentTitle = (title: string) => {
  const location = useLocation();
  const currentUrl = window.location.href.toLowerCase();

  useImmediateThrottledQuery(
    {
      queryKey: ['useDocumentTitle', 'useDocumentTitle' + location.pathname],
      queryFn: () =>
        queryAnalyticsHit({ appName: import.meta.env.VITE_ANALYTICS_APP_NAME, pageName: location.pathname }),
      staleTime: 0,
      gcTime: 0,
      retry: 0,
      enabled: true,
    },
    0,
  );

  useEffect(() => {
    document.title = title;
  }, [title]);
};
