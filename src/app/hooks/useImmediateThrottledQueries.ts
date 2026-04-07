import { type UseQueryOptions, type UseQueryResult, useQueries } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';

export function useImmediateThrottledQueries<TData>(
  queries: UseQueryOptions<TData, unknown, TData, any>[],
  minLoadingDurationMs = 1000,
): { resultsArray: UseQueryResult<TData, unknown>[]; isLoading: boolean } {
  const resultsArray = useQueries({ queries });

  const isPending = useMemo(() => resultsArray.some((r) => r.isFetching || r.isLoading), [resultsArray]);

  const [visibleIsLoading, setVisibleIsLoading] = useState(isPending);
  const loadingStartTime = useRef<number | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isPending) {
      if (loadingStartTime.current === null) loadingStartTime.current = Date.now();
      if (!visibleIsLoading) setVisibleIsLoading(true);

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }

      return;
    }

    if (loadingStartTime.current !== null) {
      const elapsed = Date.now() - loadingStartTime.current;

      if (elapsed < minLoadingDurationMs) {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => {
          setVisibleIsLoading(false);
          loadingStartTime.current = null;
          hideTimer.current = null;
        }, minLoadingDurationMs - elapsed);
        return;
      }
    }

    setVisibleIsLoading(false);
    loadingStartTime.current = null;
  }, [isPending, minLoadingDurationMs, visibleIsLoading]);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return { resultsArray, isLoading: visibleIsLoading };
}
