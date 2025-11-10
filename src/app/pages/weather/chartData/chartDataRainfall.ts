import { ScriptableContext } from 'chart.js';
import { formatDateFromDt } from '../Weather.utils';
import { Forecast } from './ChartData.types';

export const chartDataRainfall = (obj: Forecast[], sunrise: number, sunset: number) => {
  if (obj == null) {
    return null;
  }

  let data = structuredClone(obj);
  let dataTempXRain: Array<number> = [];
  let dataTempXSnow: Array<number> = [];
  let dataTempY: Array<string | undefined> = [];

  let dataNight: Array<number> = [];
  let minDataNight = Infinity;
  let maxDataNight = 1;

  for (let [, { rain, snow }] of data.entries()) {
    minDataNight = Math.min((snow && snow['1h']) || 0, (rain && rain['1h']) || 0, minDataNight);
    maxDataNight = Math.max((snow && snow['1h']) || 0, (rain && rain['1h']) || 0, maxDataNight);
  }

  minDataNight = Math.floor(minDataNight);
  maxDataNight = Math.ceil(maxDataNight);

  for (let [, { dt, rain, snow }] of data.entries()) {
    dataTempY.push(formatDateFromDt(dt)?.split(',')[1].slice(0, 6));
    dataTempXRain.push((rain && rain['1h']) || 0);
    dataTempXSnow.push((snow && snow['1h']) || 0);

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

  let datasets = [
    {
      type: 'bar',
      label: 'Rain',
      data: dataTempXRain,
      borderColor: '#3F4EA6',
      backgroundColor: (context: ScriptableContext<'bar'>) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, '#5c6cc9');
        gradient.addColorStop(1, '#3F4EA6');
        return gradient;
      },
    },
    {
      type: 'line',
      label: 'Night',
      data: dataNight,
      lineTension: 0.2,
      radius: 0,
      backgroundColor: 'rgba(194, 194, 194,.1)',
      borderColor: 'transparent',
      fill: 'start',
    },
  ];

  if (Object.values(dataTempXSnow).reduce((a, b) => a + b, 0) > 0) {
    datasets.push({
      type: 'bar',
      label: 'Snow',
      data: dataTempXSnow,
      borderColor: '#3fa6a6',
      backgroundColor: (context: ScriptableContext<'bar'>) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, 'rgb(92, 241, 241)');
        gradient.addColorStop(1, '#3fa6a6');
        return gradient;
      },
    });
  }

  return {
    labels: dataTempY,
    datasets,
  };
};
