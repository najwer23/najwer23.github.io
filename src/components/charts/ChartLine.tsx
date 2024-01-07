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
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
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
	data: ChartData<'line'> | null
}

export const ChartLine = ({ title, ySymbol, data }: Props) => {
	const options: ChartOptions<'line'> = {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				position: "bottom",
			},
			title: {
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
				},
				grid: {
					color: "#404040",
				},
			},
			x: {
				grid: {
					color: "#404040",
					// borderColor: "grey",
					// tickColor: "#FF6D83",
				},
				ticks: {
					// color: "#FF6D83",
				},
			},
		},
	};

	return <Line options={options} data={data || dataInit} />;
}