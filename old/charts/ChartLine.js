import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
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

const data = {
	datasets: [
		{
			label: "",
			data: {},
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

export default function ChartLine(props) {
	const options = {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			legend: {
				position: "bottom",
			},
			title: {
				display: true,
				text: props.title,
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
					callback: function (value, index, ticks) {
						return this.getLabelForValue(value) + props.ySymbol;
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

	return <Line options={options} data={props.data || data} />;
}
