import {
  BarElement,
  CategoryScale,
  type ChartData,
  Chart as ChartJS,
  type ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const dataInit = {
  datasets: [
    {
      label: '',
      data: {},
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(108, 105, 106, 0.5)',
    },
  ],
};

interface Props {
  title: string;
  ySymbol: string;
  data: ChartData<'bar'> | null;
}

export const ChartBar = ({ title, ySymbol, data }: Props) => {
  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: title,
        color: 'black',
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
          color: 'black',
        },
        grid: {
          color: 'lightgrey',
        },
      },
      x: {
        grid: {
          color: 'lightgrey',
          // borderColor: "grey",
          // tickColor: "#FF6D83",
        },
        ticks: {
          color: 'black',
        },
      },
    },
  };

  return <Bar options={options} data={data || dataInit} />;
};
