import { formatDateFromDt } from '../Weather.utils';
import { Forecast } from './ChartData.types';

export const chartDataPressure = (obj: Forecast[], sunrise: number, sunset: number) => {
  if (obj == null) {
    return null;
  }

  let data = structuredClone(obj);
  let dataTempX: Array<number> = [];
  let dataTempY: Array<string | undefined> = [];
  let dataNight: Array<number> = [];
  let minDataNight = Infinity;
  let maxDataNight = -Infinity;

  for (let [, { pressure }] of data.entries()) {
    minDataNight = Math.min(pressure, minDataNight);
    maxDataNight = Math.max(pressure, maxDataNight);
  }

  for (let [, { dt, pressure }] of data.entries()) {
    dataTempY.push(formatDateFromDt(dt)?.split(',')[1].slice(0, 6));
    dataTempX.push(pressure);

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
        label: 'Pressure',
        data: dataTempX,
        borderColor: '#00FF00',
        pointBackgroundColor: '#00FF00',
        lineTension: 0,
        backgroundColor: '#00FF00',
        // backgroundColor: (context: ScriptableContext<"line">) => {
        // 	const ctx = context.chart.ctx;
        // 	const gradient = ctx.createLinearGradient(0, 0, 0, 600);
        // 	gradient.addColorStop(0, "rgba(24, 117, 21,1)");
        // 	gradient.addColorStop(1, "rgba(24, 117, 21,0)");
        // 	return gradient;
        // },
        // fill: true,
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
