import { formatDateFromDt } from '@najwer23/utils/functions/formatDateFromDt';
import { Forecast } from '../Weather.types';

export const dataForLineChartWind = (obj: Forecast[], sunrise: number, sunset: number) => {
  if (obj == null) {
    return null;
  }

  let data = structuredClone(obj);
  let dataTempX: Array<number> = [];
  let dataTempY: Array<string | undefined> = [];

  let dataNight: Array<number> = [];
  let minDataNight = Infinity;
  let maxDataNight = -Infinity;

  for (let [, { wind_speed }] of data.entries()) {
    minDataNight = Math.min(wind_speed * 3.6, minDataNight);
    maxDataNight = Math.max(wind_speed * 3.6, maxDataNight);
  }

  minDataNight = Math.floor(minDataNight);
  maxDataNight = Math.ceil(maxDataNight);

  for (let [, { dt, wind_speed }] of data.entries()) {
    dataTempY.push(formatDateFromDt(dt)?.split(',')[1].slice(0, 6));
    dataTempX.push(wind_speed * 3.6);

    if (
      (dt >= sunrise && dt <= sunset) ||
      (dt >= sunrise + 86400 && dt <= sunset + 86400) ||
      (dt >= sunrise + 86400 * 2 && dt <= sunset + 86400 * 2)
    ) {
      dataNight.push(minDataNight);
    } else {
      dataNight.push(maxDataNight);
    }
  }

  return {
    labels: dataTempY,
    datasets: [
      {
        label: 'Wind Speed',
        data: dataTempX,
        borderColor: 'rgb(128,0,128)',
        backgroundColor: 'rgb(128,0,128)',
        pointBackgroundColor: 'rgb(128,0,128)',
        lineTension: 0.5,
      },
      {
        label: 'Night',
        data: dataNight,
        lineTension: 0.2,
        radius: 0,
        backgroundColor: 'rgba(194, 194, 194,.1)',
        borderColor: 'transparent',
        fill: 'start',
      },
    ],
  };
};