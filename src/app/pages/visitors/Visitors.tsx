import { ChartBar } from '@app/charts/ChartBar';
import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { useImmediateThrottledQuery } from '@app/hooks/useImmediateThrottledQuery';
import { Grid } from 'najwer23morsels/lib/grid';
import { Select } from 'najwer23morsels/lib/select';
import { TextBox } from 'najwer23morsels/lib/textbox';
import React, { useMemo, useState } from 'react';
import { queryVisitorsHits } from './Visitors.query';
import { buildChartData, sortByDate, sumByDate, sumByYear } from './Visitors.utils';

export const Visitors: React.FC = () => {
  const [year, setYear] = useState('2026');

  useDocumentTitle('Visitors | Mariusz Najwer');

  const { result, isLoading } = useImmediateThrottledQuery(
    {
      queryKey: ['queryVisitorsHits', year],
      queryFn: () => queryVisitorsHits(year),
      staleTime: 30 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 0,
      enabled: true,
    },
    300,
  );

  const analytics = result?.data.items ?? [];

  const yearlyViews = useMemo(() => {
    return sumByYear(analytics);
  }, [analytics]);

  const pageViewsByDate = useMemo(() => {
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

  const maxViewDay = useMemo(() => {
    return pageViewsByDate.reduce(
      (max, current) => (current[1] > max[1] ? current : max),
      pageViewsByDate[0] ?? ['-', 0],
    );
  }, [pageViewsByDate]);

  const minViewDay = useMemo(() => {
    return pageViewsByDate.reduce(
      (max, current) => (current[1] < max[1] ? current : max),
      pageViewsByDate[0] ?? ['-', 0],
    );
  }, [pageViewsByDate]);

  const current = pageViewsByDate.at(-1)?.[1] ?? 0;
  const previous = pageViewsByDate.at(-2)?.[1] ?? 0;
  const diff = current - previous;
  const percent = previous === 0 ? 0 : ((current - previous) / previous) * 100;
  const [maxDate, maxViews] = maxViewDay;
  const [minDate, minViews] = minViewDay;

  return (
    <Grid layout="container" widthMax="1400px" padding="clamp(40px, 8vw, 60px) 20px 40px 20px">
      <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin={'0 0 40px 0'}>
        Visitors
      </TextBox>

      <Grid
        layout="columns"
        gap={{ col: '100px', row: '20px' }}
        col={{
          smallDesktop: 2,
          desktop: 2,
          mobile: 1,
          tablet: 2,
        }}
      >
        <Grid layout="container" widthMax="1400px" margin={0}>
          <Select
            label="Year"
            name={'year'}
            options={[
              { value: '2025', label: '2025' },
              { value: '2026', label: '2026' },
              { value: '2027', label: '2027' },
            ]}
            initialValue={{ value: '2026', label: '2026' }}
            onBlur={(_, data) => setYear(data.value)}
          />
        </Grid>

        <Grid
          layout="container"
          widthMax="1400px"
          minHeight="clamp(134px, calc(380px - 20vw), 380px)"
          loading={isLoading}
        >
          <Grid
            layout="columns"
            gap={{ col: '100px', row: '20px' }}
            col={{
              smallDesktop: 2,
              desktop: 2,
              mobile: 1,
              tablet: 2,
            }}
          >
            <div>
              <TextBox tag="p" desktopSize={22} mobileSize={18} fontWeight={200}>
                Yearly Visits
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={600}>
                {yearlyViews[year] ?? 0}
              </TextBox>
            </div>
            <div>
              <TextBox tag="p" desktopSize={22} mobileSize={18} fontWeight={200}>
                Daily Change
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={600}>
                {diff},&nbsp;
                <TextBox
                  tag="span"
                  desktopSize={18}
                  mobileSize={16}
                  fontWeight={400}
                  color={diff >= 0 ? 'green' : 'red'}
                >
                  {percent.toFixed(2)} %
                </TextBox>
              </TextBox>
            </div>
            <div>
              <TextBox tag="p" desktopSize={22} mobileSize={18} fontWeight={200}>
                Max daily views
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={600}>
                {maxDate}, <b>{maxViews}</b>
              </TextBox>
            </div>
            <div>
              <TextBox tag="p" desktopSize={22} mobileSize={18} fontWeight={200}>
                Min daily views
              </TextBox>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={600}>
                {minDate}, <b>{minViews}</b>
              </TextBox>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax="1400px" margin="100px auto 50px auto" minHeight="700px" loading={isLoading}>
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartBar title="Daily Visitors Over Time" ySymbol="" data={buildChartData(pageViewsByDate)} />
          </div>
        )}
      </Grid>

      <Grid layout="container" widthMax="1400px" margin="30px auto 50px auto" minHeight="700px" loading={isLoading}>
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartBar title="Daily Visitors for /resume" ySymbol="" data={buildChartData(resumeViews)} />
          </div>
        )}
      </Grid>

      <Grid layout="container" widthMax="1400px" margin="30px auto 50px auto" minHeight="700px" loading={isLoading}>
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartBar title="Daily Visitors for /blog" ySymbol="" data={buildChartData(blogViews)} />
          </div>
        )}
      </Grid>
    </Grid>
  );
};
