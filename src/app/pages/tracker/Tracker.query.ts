import { configApiOrigin } from '@najwer23/config/configApiOrigin';
import { configFetch, executeFetch, ResponseBase } from '@najwer23/config/configFetch';

export type QueryTrackerData = {
  data: {
    items: {
      duration: number;
      locationsList: {
        lat: number;
        lon: number;
        a: number;
      }[];
      totalDistance: number;
    }[];
  };
} & ResponseBase;

export const queryTrackerData = async (): Promise<QueryTrackerData> => {
  const url = new URL(`${configApiOrigin()}/tracker/map-tracker/user/najwer23@gmail.com`);
  const options = { ...configFetch({ method: 'GET' }) };
  return await executeFetch(url, options);
};
