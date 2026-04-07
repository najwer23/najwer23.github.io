import { queryAnalyticsHit } from '@najwer23/app/analytics/Analytics.query';
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
      staleTime: Infinity,
      gcTime: Infinity,
      retry: 0,
      enabled: true, // !currentUrl.includes('localhost'),
    },
    0,
  );

  useEffect(() => {
    document.title = title;
  }, [title]);
};
