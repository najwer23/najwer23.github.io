import { type StockQuotesRates } from './StockQuotes.query';

export const chartDataCurrency = (arr: StockQuotesRates) => {
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
        borderColor: '#00FF00',
        backgroundColor: '#00FF00',
        lineTension: 0,
      },
      {
        label: 'Bid',
        data: dataXBid,
        borderColor: '#FF0000',
        backgroundColor: '#FF0000',
        pointBackgroundColor: '#FF0000',
        lineTension: 0,
      },
    ],
  };
};
