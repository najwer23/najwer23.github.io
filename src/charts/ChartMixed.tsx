import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	ChartData,
	ChartOptions,
	LineController,
	BarController
} from "chart.js";

// @ts-ignore
import { Bar } from "react-chartjs-2";
// @ts-ignore
import { Line } from "react-chartjs-2";

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
	Filler
);

const dataInit = {
	datasets: [
		{
			label: "",
			data: {},
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
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
				position: "bottom",
			},
			title: {
				display: true,
				text: title,
				color: "black",
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
					// @ts-ignore
					callback: function (value) {
						// @ts-ignore
						return this.getLabelForValue(value as number) + ySymbol;
					},
					stepSize: 1,
					color: "black"
				},
				grid: {
					color: "lightgrey",
				},
			},
			x: {
				grid: {
					color: "lightgrey",
					// borderColor: "grey",
					// tickColor: "#FF6D83",
				},
				ticks: {
					color: "black",
				},
				offset: false
			},

		},
	};

	return <Line options={options} data={data || dataInit} />;
}
