import { Forecast } from '../Weather.types';
import { formatDateFromDt } from '../Weather.utils';

export const dataForLineChartTemp = (obj: Forecast[], sunrise: number, sunset: number) => {
  if (obj == null) {
    return null;
  }

  let data = structuredClone(obj);
  let dataTempX: Array<number> = [];
  let dataTempY: Array<string | undefined> = [];
  let dataTempX_FeelsLike: Array<number> = [];
  let dataNight: Array<number> = [];
  let minDataNight = Infinity;
  let maxDataNight = -Infinity;

  for (let [, { temp, feels_like }] of data.entries()) {
    minDataNight = Math.min(feels_like, temp, minDataNight);
    maxDataNight = Math.max(feels_like, temp, maxDataNight);
  }

  minDataNight = Math.floor(minDataNight);
  maxDataNight = Math.ceil(maxDataNight);

  for (let [, { dt, temp, feels_like }] of data.entries()) {
    dataTempY.push(formatDateFromDt(dt)?.split(',')[1]?.slice(0, 6));
    dataTempX.push(temp);
    dataTempX_FeelsLike.push(feels_like);

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
        label: 'Temperature',
        data: dataTempX,
        borderColor: '#A80038',
        backgroundColor: '#A80038',
        lineTension: 0.5,
      },
      {
        label: 'Temperature Feels Like',
        data: dataTempX_FeelsLike,
        borderColor: 'orangered',
        backgroundColor: 'orangered',
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
