import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartData,
	ChartOptions,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
	BarElement,
	CategoryScale,
	LinearScale,
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
	data: ChartData<'bar'> | null;
}

export const ChartBar = ({ title, ySymbol, data }: Props) => {
	const options: ChartOptions<'bar'> = {
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

	return <Bar options={options} data={data || dataInit} />;
}
