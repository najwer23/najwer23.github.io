import { ChartBar } from '@najwer23/charts/ChartBar';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useImmediateThrottledQuery } from '@najwer23/hooks/useImmediateThrottledQuery';
import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { queryAnalyticsHits } from './Analytics.query';

export const Analytics: React.FC = () => {
  useDocumentTitle('Blog | Mariusz Najwer');

  const { result: resultQueryAnalytics, isLoading: isLoadingResultQueryAnalytics } = useImmediateThrottledQuery(
    {
      queryKey: ['queryAnalytics', 'queryAnalytics'],
      queryFn: () => queryAnalyticsHits(),
      staleTime: 30 * 1000 * 60,
      gcTime: 30 * 1000 * 60,
      retry: 0,
      enabled: true,
    },
    300,
  );

  const analytics = resultQueryAnalytics?.data.items;

  const totalsByDate = analytics?.reduce<Record<string, number>>((acc, item) => {
    for (const obj of item.data ?? []) {
      for (const [date, value] of Object.entries(obj)) {
        acc[date] = (acc[date] ?? 0) + value;
      }
    }
    return acc;
  }, {});

  const pageviews = Object.entries(totalsByDate ?? []).sort(([a], [b]) => a.localeCompare(b));

  return (
    <Grid layout="container" widthMax="1400px" padding="clamp(40px, 8vw, 60px) 20px 40px 20px">
      <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin="0">
        Analytics
      </TextBox>

      <Grid
        layout="container"
        widthMax={'1400px'}
        padding={'0 20px'}
        margin={'30px auto 50px auto'}
        minHeight="700px"
        loading={isLoadingResultQueryAnalytics}
      >
        {!isLoadingResultQueryAnalytics && (
          <div style={{ height: '700px' }}>
            <ChartBar
              title={'Daily Visitors Over Time'}
              ySymbol={''}
              data={{
                labels: pageviews.map((x) => x[0]),
                datasets: [
                  {
                    label: 'Visitors',
                    data: pageviews.map((x) => x[1]),
                  },
                ],
              }}
            />
          </div>
        )}
      </Grid>
    </Grid>
  );
};
