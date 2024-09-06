import { StockQuotesRates } from './StockQuotes.query';

export const dataForLineChartCurrency = (arr: StockQuotesRates) => {
  if (arr == null) {
    return null;
  }

  let dataY = arr.map((x) => x.effectiveDate);
  let dataXAsk = arr.map((x) => x.ask);
  let dataXBid = arr.map((x) => x.bid);

  return {
    labels: dataY,
    datasets: [
      {
        label: 'Ask',
        data: dataXAsk,
        borderColor: '#A80038',
        backgroundColor: '#A80038',
        lineTension: 0,
      },
      {
        label: 'Bid',
        data: dataXBid,
        borderColor: 'orangered',
        backgroundColor: 'orangered',
        lineTension: 0,
      },
    ],
  };
};
