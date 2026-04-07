import { executeFetch } from '@app/config/configFetch';

type QueryStockQuotes = {
  code: string;
  rates: {
    ask: number;
    bid: number;
    effectiveDate: string;
  }[];
};

export type StockQuotesRates = QueryStockQuotes['rates'];

export const queryStockQuotes = async (currency: string): Promise<QueryStockQuotes> => {
  const url = new URL(`https://api.nbp.pl/api/exchangerates/rates/c/${currency}/last/255/?format=json`);
  return await executeFetch(url);
};
