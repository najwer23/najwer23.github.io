import { ChartLine } from '@app/charts/ChartLine';
import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { useImmediateThrottledQueries } from '@app/hooks/useImmediateThrottledQueries';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
import { chartDataCurrency } from './chartDataCurrency';
import { queryStockQuotes } from './StockQuotes.query';

export const StockQuotes: React.FC = () => {
  useDocumentTitle('Stock Quotes | Mariusz Najwer');

  const queriesStockQuotes = ['usd', 'eur', 'chf'].map((currency) => ({
    queryKey: ['queryStockQuotes', currency],
    queryFn: () => queryStockQuotes(currency),
    staleTime: 30 * 60 * 1000, // 30 minutes
    gcTime: 30 * 60 * 1000,
    retry: 0,
    enabled: true,
  }));

  const { resultsArray, isLoading } = useImmediateThrottledQueries(queriesStockQuotes, 300);

  return (
    <>
      <Grid layout="container" widthMax={'1400px'} padding={'0 20px 0px 20px'}>
        <Grid layout="container" widthMax="900px" margin={'0 0 40px 0'}>
          <Typography appearance="light" variant="display">
            Stock Quotes
          </Typography>
        </Grid>
        <Grid widthMax={'700'} layout="container" padding="0" margin="0">
          <Typography appearance="light" variant="body">
            <b>Bid Price (3.9852)</b>: This means that the highest price buyers are willing to pay for the asset is
            3.9852.
            <br />
            If you want to sell the asset, you can sell it at this price.
          </Typography>
          <Typography appearance="light" variant="body">
            <b>Ask Price (4.0658)</b>: This indicates that the lowest price sellers are willing to accept is 4.0658.
            <br />
            If you want to buy the asset, you will have to pay this price.
          </Typography>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax={'1400px'} padding={'0 0 0px 0px'}>
        {resultsArray.map((v, i) => (
          <Grid
            key={i}
            layout="container"
            widthMax={'1400px'}
            padding={'0 20px'}
            margin={'30px auto 80px auto'}
            minHeight="700px"
            loading={isLoading}
          >
            {!isLoading && (
              <div
                key={v.data?.code}
                style={{
                  height: '700px',
                }}
              >
                <ChartLine
                  title={`${v.data?.code ?? 'N/A'}/PLN`}
                  data={chartDataCurrency(v.data?.rates ?? [])}
                  ySymbol=" PLN"
                  yStepSize={0.001}
                />
              </div>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
};
