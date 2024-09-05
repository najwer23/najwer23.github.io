import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Filler,
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
}

export const ChartLine = ({ title, ySymbol = '', data }: Props) => {
  const options: ChartOptions<'line'> = {
    maintainAspectRatio: false,
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            weight: 'bold',
          },
          color: '#b0b3b7',
        },
      },
      title: {
        color: '#b0b3b7',
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
          stepSize: 1,
          color: '#b0b3b7',
        },
        grid: {
          color: '#2a2d2f',
        },
      },
      x: {
        grid: {
          color: '#2a2d2f',
          // borderColor: "grey",
          // tickColor: "#FF6D83",
        },
        ticks: {
          color: '#b0b3b7',
        },
      },
    },
  };

  return <Line options={options} data={data || dataInit} />;
};
