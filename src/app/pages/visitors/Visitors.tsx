import { ChartBar } from '@app/charts/ChartBar';
import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { useImmediateThrottledQuery } from '@app/hooks/useImmediateThrottledQuery';
import { Grid } from 'najwer23morsels/lib/Grid';
import { Select } from 'najwer23morsels/lib/select';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import React, { useMemo, useState } from 'react';
import { queryVisitorsHits } from './Visitors.query';
import { buildChartData, sortByDate, sumByDate, sumByYear } from './Visitors.utils';

export const Visitors: React.FC = () => {
  const currentYear = String(new Date().getFullYear());

  const [year, setYear] = useState(currentYear);

  useDocumentTitle('Visitors | Mariusz Najwer');

  const { result, isLoading, isError } = useImmediateThrottledQuery(
    {
      queryKey: ['queryVisitorsHits', year],
      queryFn: () => queryVisitorsHits(year),
      staleTime: 0,
      gcTime: 0,
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
            options={Array.from({ length: Number(currentYear) + 1 - 2024 }, (_, i) => {
              const year = 2025 + i;
              return {
                value: year.toString(),
                label: year.toString(),
              };
            })}
            initialValue={{ value: currentYear, label: currentYear }}
            onBlur={(_, data) => setYear(data.value)}
          />
        </Grid>

        {!isError && (
          <Grid
            margin={0}
            layout="container"
            widthMax="1400px"
            minHeight="clamp(134px, calc(380px - 30vw), 380px)"
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
                    {percent.toFixed(2)}&nbsp;%
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
        )}
      </Grid>

      {isError && (
        <TextBox tag="p" desktopSize={16} mobileSize={16} fontWeight={500} margin={'30px 0 0'}>
          No results
        </TextBox>
      )}

      {!isError && (
        <>
          <Grid layout="container" widthMax="1400px" margin="30px auto 50px auto" minHeight="700px" loading={isLoading}>
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
        </>
      )}
    </Grid>
  );
};
