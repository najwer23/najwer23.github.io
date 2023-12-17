import { useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { ForecastDataCurrent, ForecastDataStyle, ForecastDataWrapper, SelectWrapper, WeatherStyled } from "./Weather.styled";
import { dateFormatterFromDt, isEmpty, sortByKeyArrObj } from "../utils/Utils";
import Select from 'react-select';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "../carousel/Carousel";
import ChartLine from "../charts/ChartLine";
import ChartBar from "../charts/ChartBar";

export const Weather = (): JSX.Element => {
	const [coords, setCoords] = useState<{ value: string; label: string }>({ value: "51.1:17.0333", label: "Wrocław (PL)" });
	const lat = coords.value.split(":")[0];
	const lon = coords.value.split(":")[1];
	let origin = "https://zany-ray-bonnet.cyclic.app";

	const { data, status } = useFetch<any>(origin + `/najwer23api/forecast/onecall?lat=${lat}&lon=${lon}`, {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
		},
	});

	const townListForSelectCSS = {
		control: (base: any) => ({
			...base,
			border: 0,
			boxShadow: 'none'
		}),
		option: (base: any, state: any) => ({
			...base,
			width: "max-content",
			minWidth: "100%",
			backgroundColor: state.isSelected ? "#c4c4c4" : "",
			'&:hover': {
				backgroundColor: state.isSelected ? '#c4c4c4' : 'whitesmoke',
				cursor: "pointer"
			},
			color: state.isSelected ? "black" : "",
		}),
		input: (base: any, state: any) => ({
			...base,
			width: "max-content",
			minWidth: "100%",
		}),
		menu: (base: any) => ({
			...base,
			width: "max-content",
			minWidth: "100%",
		}),
	}

	const townListForSelect = useMemo(() => {
		return sortByKeyArrObj([
			{ value: "51.1:17.0333", label: "Wrocław (PL)" },
			{ value: "52.237049:21.017532", label: "Warszawa (PL)" },
			{ value: "50.270908:19.039993", label: "Katowice (PL)" },
			{ value: "51.1445731:16.2410821", label: "Legnickie Pole (PL)" },
			{ value: "41.3828939:2.1774322", label: "Barcelona (ES)" },
			{ value: "64.145981:-21.9422367", label: "Reykjavík (IS)" },
			{ value: "52.4006632:16.91973259", label: "Poznań (PL)" },
		]);
	}, []);

	const weather8Days = data?.data.daily;
	const weatherHourly = data?.data.hourly;
	const weatherCurrent = data?.data.current;

	return (
		<WeatherStyled>
			<h1>Weather </h1>

			<SelectWrapper>
				<Select
					styles={townListForSelectCSS}
					defaultValue={townListForSelect[0]}
					onChange={setCoords}
					options={townListForSelect}
					isSearchable={false}
				/>
			</SelectWrapper>

			<ForecastDataWrapper>
				<ForecastDataCurrent>
					{status === "done" ? (
						<>
							{forecastImgFormater(weatherCurrent!.weather)}
							<ForecastData title={"dayOfWeek"} value={weatherCurrent!.dt} />
							<ForecastData title={"Temp"} value={forecastDataFormat(weatherCurrent!.temp, 4)} />
							<ForecastData title={"Sunrise"} value={dateFormatterFromDt(weatherCurrent!.sunrise)?.split(",")[1]} />
							<ForecastData title={"Sunset"} value={dateFormatterFromDt(weatherCurrent!.sunset)?.split(",")[1]} />
							<ForecastData title={"Wind"} value={forecastDataFormat(weatherCurrent!.wind_speed, 1)} />
							<ForecastData title={"Pressure"} value={forecastDataFormat(weatherCurrent!.pressure, 3)} />
							<ForecastData title={"Humidity"} value={forecastDataFormat(weatherCurrent!.humidity, 2)} />
							<ForecastData title={"Clouds"} value={forecastDataFormat(weatherCurrent!.clouds, 2)} />
							<ForecastData title={"Lat"} value={forecastDataFormat(coords.value?.split(":")[0], 5)} />
							<ForecastData title={"Lon"} value={forecastDataFormat(coords.value?.split(":")[1], 5)} />
						</>
					) : (
						<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />
					)}
				</ForecastDataCurrent>

				{status === "done" ? (
					<Carousel>
						{weather8Days && weather8Days.filter((_: unknown, i: number) => i !== 0).map((x: any, i: number) => (
							<div key={x.dt}>
								{forecastImgFormater(x.weather)}
								<ForecastData title={"dayOfWeek"} value={x.dt} />
								<ForecastData title={"Temp"} value={forecastDataFormat(x.temp.day, 4)} />
								<ForecastData title={"Sunrise"} value={dateFormatterFromDt(x.sunrise)?.split(",")[1]} />
								<ForecastData title={"Sunset"} value={dateFormatterFromDt(x.sunset)?.split(",")[1]} />
								<ForecastData title={"Wind"} value={forecastDataFormat(x.wind_speed, 1)} />
								<ForecastData title={"Pressure"} value={forecastDataFormat(x.pressure, 3)} />
								<ForecastData title={"Humidity"} value={forecastDataFormat(x.humidity, 2)} />
								<ForecastData title={"Clouds"} value={forecastDataFormat(x.clouds, 2)} />
							</div>
						))}
					</Carousel>
				) : (
					<div style={{ minHeight: "365px" }}>
						<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />
					</div>
				)}
			</ForecastDataWrapper>


			{status === "done" ? (
				<div
					style={{
						marginTop: "30px",
						marginBottom: "50px",
						height: "700px",
					}}
				>
					<ChartLine
						title="Temeperature for next 48h"
						data={dataHourlyWeatherForLineChart(weatherHourly)}
						ySymbol={` ${"\u00b0"}C`}
					/>
				</div>
			) : (
				<div style={{ minHeight: "780px" }}>
					<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />
				</div>
			)}

			{status === "done" ? (
				<div
					style={{
						marginTop: "30px",
						marginBottom: "50px",
						height: "700px",
					}}
				>
					<ChartLine
						title="Speed of wind for next 48h"
						data={dataHourlyWeatherForLineChart2(weatherHourly)}
						ySymbol={` km/h`}
					/>
				</div>
			) : (
				<div style={{ minHeight: "780px" }}>
					<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />
				</div>
			)}

			{status === "done" ? (
				<div
					style={{
						marginTop: "30px",
						marginBottom: "50px",
						height: "700px",
					}}
				>
					<ChartBar
						title="Rain for next 48h"
						data={dataHourlyWeatherForLineChart3(weatherHourly)}
						ySymbol={` mm/h`}
					/>
				</div>
			) : (
				<div style={{ minHeight: "780px" }}>
					<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />
				</div>
			)}


			{status === "done" ? (
				<div
					style={{
						marginTop: "30px",
						marginBottom: "50px",
						height: "700px",
					}}
				>
					<ChartLine
						title="Pressure"
						data={dataHourlyWeatherForLineChart4(weatherHourly)}
						ySymbol={` hPa`}
					/>
				</div>
			) : (
				<div style={{ minHeight: "780px" }}>
					<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />
				</div>
			)}

		</WeatherStyled>
	);
}


function dataHourlyWeatherForLineChart4(obj: any) {
	if (obj == null) {
		return null;
	}

	let data = structuredClone(obj);
	let dataTempX: Array<number> = []
	let dataTempY: Array<any> = []

	for (let [, { dt, pressure }] of data.entries()) {
		dataTempY.push(dateFormatterFromDt(dt)?.split(",")[1].slice(0, 6))
		dataTempX.push(pressure)
	}
	return {
		labels: dataTempY,
		datasets: [
			{
				label: "Pressure",
				data: dataTempX,
				borderColor: "#086814",
				backgroundColor: "#187515",
			},
		],
	};

}


function dataHourlyWeatherForLineChart2(obj: any) {
	if (obj == null) {
		return null;
	}

	let data = structuredClone(obj);
	let dataTempX: Array<number> = []
	let dataTempY: Array<any> = []

	for (let [, { dt, wind_speed }] of data.entries()) {
		dataTempY.push(dateFormatterFromDt(dt)?.split(",")[1].slice(0, 6))
		dataTempX.push(wind_speed * 3.6)
	}
	return {
		labels: dataTempY,
		datasets: [
			{
				label: "Wind Speed",
				data: dataTempX,
				borderColor: "#736D63",
				backgroundColor: "#736D63",
			},
		],
	};

}


function dataHourlyWeatherForLineChart3(obj: any) {
	if (obj == null) {
		return null;
	}

	let data = structuredClone(obj);
	let dataTempXRain: Array<number> = []
	let dataTempXSnow: Array<number> = []
	let dataTempY: Array<any> = []

	for (let [, { dt, rain, snow }] of data.entries()) {
		dataTempY.push(dateFormatterFromDt(dt)?.split(",")[1].slice(0, 6))
		dataTempXRain.push((rain && rain["1h"]) || 0)
		dataTempXSnow.push((snow && snow["1h"]) || 0)
	}

	return {
		labels: dataTempY,
		datasets: [
			{
				label: "Rain",
				data: dataTempXRain,
				borderColor: "#3F4EA6",
				backgroundColor: "#3F4EA6",
			},
			{
				label: "Snow",
				data: dataTempXSnow,
				borderColor: "#3fa6a6",
				backgroundColor: "#3fa6a6",
			},
		],
	};

}

function dataHourlyWeatherForLineChart(obj: any) {
	if (obj == null) {
		return null;
	}

	let data = structuredClone(obj);
	let dataTempX: Array<number> = []
	let dataTempY: Array<any> = []
	let dataTempX_FeelsLike: Array<any> = [];

	for (let [, { dt, temp, feels_like }] of data.entries()) {
		dataTempY.push(dateFormatterFromDt(dt)?.split(",")[1].slice(0, 6))
		dataTempX.push(temp)
		dataTempX_FeelsLike.push(feels_like)
	}
	return {
		labels: dataTempY,
		datasets: [
			{
				label: "Temperature",
				data: dataTempX,
				borderColor: "#A80038",
				backgroundColor: "#A80038",
			},
			{
				label: "Temperature Feels Like",
				data: dataTempX_FeelsLike,
				borderColor: "orangered",
				backgroundColor: "orangered",
			},
		],
	};
}

function forecastImgFormater(v: Array<any>) {
	if (isEmpty(v)) {
		return <div style={{ width: "100px", height: "100px", marginBottom: "20px" }}>{" "}</div>;
	} else {
		return (
			<img
				width="100px"
				height="100px"
				alt="weather img"
				style={{ background: "burlywood", marginBottom: "20px" }}
				src={`https://openweathermap.org/img/wn/${v[0].icon}@2x.png`}
			/>
		);
	}
}

function ForecastData(props: any) {
	if (props.title === "empty") {
		return (
			<ForecastDataStyle>
				<div>{forecastDataFormat(props.value, 0) === "" ? <br></br> : <i>{props.value}</i>}  </div>
			</ForecastDataStyle>
		);
	}

	if (props.title === "dayOfWeek") {
		return (
			<ForecastDataStyle>
				<div><b>{forecastDataFormat(props.value, 0)}.</b></div>
				<div>{dateFormatterFromDt(props.value)}</div>
			</ForecastDataStyle>
		);
	}

	return (
		<ForecastDataStyle>
			<div>{props.title}:</div>
			<div><b>{props.value}</b></div>
		</ForecastDataStyle>
	);
}

function forecastDataFormat(v: any, n: number) {
	if (isEmpty(v)) {
		return "";
	} else if (n === 0) {
		return new Date(v * 1000).toLocaleString('en-us', { weekday: 'short' })
	} else if (n === 1) {
		return (v * 3.6).toFixed(2) + ` km/h`;
	} else if (n === 2) {
		return v + ` %`;
	} else if (n === 3) {
		return v + ` hPa`;
	} else if (n === 4) {
		return v + ` ${"\u00b0"}C`;
	} else if (n === 5) {
		return v + ` ${"\u00b0"}`;
	} else {
		return v;
	}
}