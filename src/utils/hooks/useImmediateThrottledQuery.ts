import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useState, useEffect, useRef } from 'react';

export function useImmediateThrottledQuery<TData>(
  queryOptions: UseQueryOptions<TData, unknown, TData, any>,
  minLoadingDurationMs = 1000,
): { result: TData | undefined; isLoading: boolean } {
  const result = useQuery<TData, unknown, TData, any>(queryOptions);

  const isPending = result.isFetching || result.isLoading;

  const [visibleIsPending, setVisibleIsPending] = useState<boolean>(false);

  const loadingStartTime = useRef<number | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isPending) {
      if (!loadingStartTime.current) loadingStartTime.current = Date.now();

      setVisibleIsPending(true);

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    } else {
      if (loadingStartTime.current) {
        const elapsed = Date.now() - loadingStartTime.current;

        if (elapsed < minLoadingDurationMs) {
          if (hideTimer.current) clearTimeout(hideTimer.current);

          hideTimer.current = setTimeout(() => {
            setVisibleIsPending(false);
            loadingStartTime.current = null;
            hideTimer.current = null;
          }, minLoadingDurationMs - elapsed);
        } else {
          setVisibleIsPending(false);
          loadingStartTime.current = null;
        }
      } else {
        setVisibleIsPending(false);
      }
    }

    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };
  }, [isPending, minLoadingDurationMs]);

  return { result: result.data, isLoading: visibleIsPending || result.isLoading || result.isFetching };
}
