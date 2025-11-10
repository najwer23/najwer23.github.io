import { ChartLine } from '@najwer23/charts/ChartLine';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useImmediateThrottledQueries } from '@najwer23/hooks/useImmediateThrottledQueries';
import { Spinner } from '@najwer23/spinner/Spinner';
import { Grid } from 'najwer23snacks/lib/Grid';
import { TextBox } from 'najwer23snacks/lib/Textbox';
import { chartDataCurrency } from './chartDataCurrency';
import { queryStockQuotes } from './StockQuotes.query';

export const StockQuotes: React.FC<{ title: string }> = ({ title }) => {
  useDocumentTitle(title);

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
    <Grid widthMax={1400} layout="container" padding="10px" margin="auto">
      <div style={{ minHeight: '1400px' }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <TextBox tag="h1">Stock Quotes</TextBox>
            <Grid widthMax={700} layout="container" padding="0" margin="0">
              <TextBox>
                Bid Price (3.9852): This means that the highest price buyers are willing to pay for the asset is 3.9852.
                If you want to sell the asset, you can sell it at this price.
              </TextBox>
              <TextBox>
                Ask Price (4.0658): This indicates that the lowest price sellers are willing to accept is 4.0658. If you
                want to buy the asset, you will have to pay this price.
              </TextBox>
            </Grid>

            <div>
              {resultsArray.map((v, i) => (
                <div
                  key={v.data?.code ?? i}
                  style={{
                    marginTop: '30px',
                    marginBottom: i !== resultsArray.length - 1 ? '50px' : 0,
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
              ))}
            </div>
          </>
        )}
      </div>
    </Grid>
  );
};
