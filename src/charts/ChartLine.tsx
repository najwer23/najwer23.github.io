import {
  CategoryScale,
  type ChartData,
  Chart as ChartJS,
  type ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const dataInit = {
  datasets: [
    {
      label: '',
      data: {},
      borderColor: 'white',
      backgroundColor: 'white',
    },
  ],
};

interface Props {
  title: string;
  ySymbol?: string;
  data: ChartData<'line'> | null;
  yStepSize?: number;
}

export const ChartLine = ({ title, ySymbol = '', data, yStepSize = 1 }: Props) => {
  const options: ChartOptions<'line'> = {
    maintainAspectRatio: false,
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            weight: 'normal',
          },
          color: 'black',
        },
      },
      title: {
        color: 'black',
        display: true,
        text: title,
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        //min: 90,
        //max: 130,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value) {
            return this.getLabelForValue(value as number) + ySymbol;
          },
          stepSize: yStepSize,
          color: 'black',
        },
        grid: {
          color: 'darkgrey',
        },
      },
      x: {
        grid: {
          color: 'darkgrey',
          // borderColor: "grey",
          // tickColor: "#FF6D83",
        },
        ticks: {
          color: 'black',
        },
      },
    },
  };

  return <Line options={options} data={data || dataInit} />;
};
