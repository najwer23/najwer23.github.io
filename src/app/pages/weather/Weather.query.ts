import { configApiOrigin } from '@najwer23/config/configApiOrigin';
import { configFetch, executeFetch, ResponseBase } from '@najwer23/config/configFetch';

type QueryWeatherCoords = {
  resOpenWeatherMap: any;
} & ResponseBase;

export const queryWeatherCoords = async (lat: string, lon: string): Promise<QueryWeatherCoords> => {
  const url = new URL(`${configApiOrigin()}/openweathermap/forecast/onecall?lat=${lat}&lon=${lon}`);
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};
