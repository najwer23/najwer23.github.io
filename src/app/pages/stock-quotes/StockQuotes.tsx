import { ChartLine } from '@najwer23/charts/ChartLine';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useImmediateThrottledQueries } from '@najwer23/hooks/useImmediateThrottledQueries';
import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
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

  const { resultsArray, isLoading } = useImmediateThrottledQueries(queriesStockQuotes);

  return (
    <>
      <Grid layout="container" widthMax={'1400px'} padding={'clamp(40px, 8vw, 60px) 20px 40px 20px'}>
        <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin={'0 0 10px 0'}>
          Stock Quotes
        </TextBox>
        <Grid widthMax={'700'} layout="container" padding="0" margin="0">
          <TextBox tag={'p'} desktopSize={14} mobileSize={14}>
            Bid Price (3.9852): This means that the highest price buyers are willing to pay for the asset is 3.9852.
            <br />
            If you want to sell the asset, you can sell it at this price.
          </TextBox>
          <TextBox tag={'p'} desktopSize={14} mobileSize={14} margin={'20px 0 0 0'}>
            Ask Price (4.0658): This indicates that the lowest price sellers are willing to accept is 4.0658.
            <br />
            If you want to buy the asset, you will have to pay this price.
          </TextBox>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax={'1400px'} padding={'0 0 80px 0px'}>
        {resultsArray.map((v, i) => (
          <Grid
            key={i}
            layout="container"
            widthMax={'1400px'}
            padding={'0 20px'}
            margin={'30px auto 50px auto'}
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
