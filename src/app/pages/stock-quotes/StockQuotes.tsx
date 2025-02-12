import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Grid } from 'najwer23snacks/lib/Grid';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';
import { queryStockQuotes } from './StockQuotes.query';
import { useQueries } from '@tanstack/react-query';
import { ChartLine } from '@najwer23/charts/ChartLine';
import { chartDataCurrency } from './chartDataCurrency';
import { Spinner } from '@najwer23/spinner/Spinner';

export const StockQuotes: React.FC<{
  title: string;
}> = ({ title }) => {
  useDocumentTitle(title);

  const queriesStockQuotes = ['usd', 'eur', 'chf'].map((currency) => ({
    queryKey: ['queryStockQuotes', 'queryStockQuotes' + currency],
    queryFn: () => queryStockQuotes(currency),
    staleTime: 30 * 1000 * 60,
    gcTime: 30 * 1000 * 60,
    retry: 0,
    enabled: true,
  }));

  const dataStockQuotes = useQueries({ queries: queriesStockQuotes });

  return (
    <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
      <div style={{ minHeight: '1400px' }}>
        {dataStockQuotes[0].isPending || dataStockQuotes[1].isPending || dataStockQuotes[2].isPending ? (
          <Spinner />
        ) : (
          <>
            <TextBox tag="h1"> Stock Quotes</TextBox>
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
              {dataStockQuotes.map((v, i) => (
                <div
                  key={i}
                  style={{
                    marginTop: '30px',
                    marginBottom: i != dataStockQuotes.length - 1 ? '50px' : 0,
                    height: '700px',
                  }}>
                  <ChartLine
                    title={`${v.data!.code}/PLN`}
                    data={chartDataCurrency(v.data!.rates)}
                    ySymbol={` PLN`}
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
