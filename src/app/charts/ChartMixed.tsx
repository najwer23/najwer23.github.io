import {
  BarController,
  BarElement,
  CategoryScale,
  type ChartData,
  Chart as ChartJS,
  type ChartOptions,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

// import { Bar } from 'react-chartjs-2';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Line } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  LineElement,
  LineController,
  BarController,
  Title,
  Tooltip,
  Legend,
  Filler,
);

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
  ySymbol: string;
  data: ChartData<'bar' | 'line' | any> | null;
}
export const ChartMixed = ({ title, ySymbol, data }: Props) => {
  const options: ChartOptions<any> = {
    maintainAspectRatio: false,
    responsive: true,
    animation: false,
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          callback: function (value) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.getLabelForValue(value as number) + ySymbol;
          },
          stepSize: 1,
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
        offset: false,
      },
    },
  };

  return <Line options={options} data={data || dataInit} />;
};
