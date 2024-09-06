import { configApiOrgin } from '@najwer23/config/configApiOrgin';
import { configFetch, executeFetch, ResponseBase } from '@najwer23/config/configFetch';

type QueryWeatherCoords = {
  data: {
    level: string;
    repsMax: string;
  };
} & ResponseBase;

export const queryWeatherCoords = async (lat: string, lon: string): Promise<any> => {
  const url = new URL(`${configApiOrgin()}/openweathermap/forecast/onecall?lat=${lat}&lon=${lon}`);
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};
