import { type UseQueryOptions, type UseQueryResult, useQueries } from '@tanstack/react-query';
import { useEffect, useMemo, useRef, useState } from 'react';

function arraysEqual(a: boolean[], b: boolean[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

export function useImmediateThrottledQueries<TData>(
  queries: UseQueryOptions<TData, unknown, TData, any>[],
  minLoadingDurationMs = 1000,
): { resultsArray: UseQueryResult<TData, unknown>[]; isLoading: boolean } {
  const resultsArray = useQueries({ queries });

  const isPendingArray = useMemo(
    () => resultsArray.map((r) => r.isFetching || r.isLoading),
    resultsArray.map((r) => r.isFetching || r.isLoading),
  );

  const [visibleIsPendingArray, setVisibleIsPendingArray] = useState<boolean[]>(isPendingArray);

  const loadingStartTime = useRef<number | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const anyPending = isPendingArray.some(Boolean);

    if (anyPending) {
      if (!loadingStartTime.current) loadingStartTime.current = Date.now();
      setVisibleIsPendingArray((prev) => (arraysEqual(prev, isPendingArray) ? prev : isPendingArray));
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
            setVisibleIsPendingArray(isPendingArray);
            loadingStartTime.current = null;
            hideTimer.current = null;
          }, minLoadingDurationMs - elapsed);
        } else {
          setVisibleIsPendingArray(isPendingArray);
          loadingStartTime.current = null;
        }
      } else {
        setVisibleIsPendingArray(isPendingArray);
      }
    }

    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };
  }, [isPendingArray, minLoadingDurationMs]);

  return { resultsArray, isLoading: visibleIsPendingArray.some(Boolean) };
}
