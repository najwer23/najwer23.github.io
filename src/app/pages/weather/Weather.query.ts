import { configApiOrigin } from '@app/config/configApiOrigin';
import { configFetch, executeFetch, type ResponseBase } from '@app/config/configFetch';

type QueryWeatherCoords = {
  resOpenWeatherMap: any;
} & ResponseBase;

export const queryWeatherCoords = async (lat: string, lon: string): Promise<QueryWeatherCoords> => {
  const url = new URL(`${configApiOrigin()}/openweathermap/forecast/onecall?lat=${lat}&lon=${lon}`);
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};
