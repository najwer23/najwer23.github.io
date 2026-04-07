import { ChartBar } from '@najwer23/charts/ChartBar';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useImmediateThrottledQuery } from '@najwer23/hooks/useImmediateThrottledQuery';
import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import React, { useMemo } from 'react';
import { queryVisitorsHits } from './Visitors.query';
import { buildChartData, sortByDate, sumByDate } from './Visitors.utils';

export const Visitors: React.FC = () => {
  useDocumentTitle('Visitors | Mariusz Najwer');

  const { result, isLoading } = useImmediateThrottledQuery(
    {
      queryKey: ['queryVisitorsHits'],
      queryFn: () => queryVisitorsHits(),
      staleTime: 30 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 0,
      enabled: true,
    },
    300,
  );

  const analytics = result?.data.items ?? [];

  const pageViews = useMemo(() => {
    return sortByDate(sumByDate(analytics));
  }, [analytics]);

  const resumeViews = useMemo(() => {
    const resumeItems = analytics.filter((item) => item.path === '/resume');
    return sortByDate(sumByDate(resumeItems));
  }, [analytics]);

  const blogViews = useMemo(() => {
    const resumeItems = analytics.filter((item) => item.path.startsWith('/blog'));
    return sortByDate(sumByDate(resumeItems));
  }, [analytics]);

  return (
    <Grid layout="container" widthMax="1400px" padding="clamp(40px, 8vw, 60px) 20px 40px 20px">
      <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin="0">
        Visitors
      </TextBox>

      <Grid
        layout="container"
        widthMax="1400px"
        padding="0 20px"
        margin="30px auto 50px auto"
        minHeight="700px"
        loading={isLoading}
      >
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartBar title="Daily Visitors Over Time" ySymbol="" data={buildChartData(pageViews)} />
          </div>
        )}
      </Grid>

      <Grid
        layout="container"
        widthMax="1400px"
        padding="0 20px"
        margin="30px auto 50px auto"
        minHeight="700px"
        loading={isLoading}
      >
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartBar title="Daily Visitors for /resume" ySymbol="" data={buildChartData(resumeViews)} />
          </div>
        )}
      </Grid>

      <Grid
        layout="container"
        widthMax="1400px"
        padding="0 20px"
        margin="30px auto 50px auto"
        minHeight="700px"
        loading={isLoading}
      >
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartBar title="Daily Visitors for /blog" ySymbol="" data={buildChartData(blogViews)} />
          </div>
        )}
      </Grid>
    </Grid>
  );
};
