import { Footer } from "../footer/Footer";
import { Nav } from "../nav/Nav";
import "./Weather.css"
import * as Utils from "../utils/Utils";

import { useAppSelector, useAppDispatch } from "./../hooks";
import { RootState } from "./../store";
import * as WeatherSlice from "../features/weather/weatherSlice";
import { useEffect, useState } from 'react'
import { WeatherStatus } from "../types/typesWeather";
import Select from 'react-select';
import { useWindowSize } from "../utils/Utils";

export const Weather = (): JSX.Element => {
	const weatherStatus = useAppSelector((state: RootState) => state.weather.status);
	const weatherCurrent = useAppSelector((state: RootState) => state.weather.weatherCurrent);
	const dispatch = useAppDispatch();
	const [width,] = useWindowSize();

	const [coords, setCoords] = useState<any>({ value: "51.1:17.0333", label: "Wrocław (PL)" });

	const townListForSelect = [
		{ value: "51.1:17.0333", label: "Wrocław (PL)" },
		{ value: "51.1445731:16.2410821", label: "Legnickie Pole (PL)" },
		{ value: "41.3828939:2.1774322", label: "Barcelona (ES)" },
		{ value: "64.145981:-21.9422367", label: "Reykjavík (IS)" },
		{ value: "52.4006632:16.91973259", label: "Poznań (PL)" },
	];

	const townListForSelectCSS = {
		control: (base: any) => ({
			...base,
			border: 0,
			boxShadow: 'none'
		}),
		option: (base:any, state:any) => ({
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
		menu: (base:any) => ({
			...base,
			width: "max-content",
			minWidth: "100%",
		}),
	}

	useEffect(() => {
		dispatch(WeatherSlice.getData(coords.value));
	}, [dispatch, coords]);

	return (
		<>
			<Nav />
			<div className="layout1">
				<h2 className="h2-fluid">Weather</h2>

				<div style={{
					width: width <= 575.98 ? "100%" : "250px",
					marginBottom: "30px"
				 }}>
					<Select
						styles={townListForSelectCSS}
						defaultValue={townListForSelect[0]}
						onChange={setCoords}
						options={townListForSelect}
					/>
				</div>

				<div className="forecast-wrapper">
					<div className="forecast-data-current-wrapper">
						{weatherStatus === WeatherStatus.Loading && (
							<>Loading..</>
						)}
						{weatherStatus === WeatherStatus.Done && (
							<div className="forecast-data-current">
								{forecastImgFormater(weatherCurrent!.weather)}
								<ForecastData title={"empty"} value={Utils.dateFormatterFromDt(weatherCurrent!.dt)} />
								<ForecastData title={"Lat"} value={forecastDataFormat(coords.value?.split(":")[0], 5)} />
								<ForecastData title={"Lon"} value={forecastDataFormat(coords.value?.split(":")[1], 5)} />
								<ForecastData title={"Temp"} value={forecastDataFormat(weatherCurrent!.temp, 4)} />
								<ForecastData title={"Pressure"} value={forecastDataFormat(weatherCurrent!.pressure, 3)} />
								<ForecastData title={"Humidity"} value={forecastDataFormat(weatherCurrent!.humidity, 2)} />
								<ForecastData title={"Wind"} value={forecastDataFormat(weatherCurrent!.wind_speed, 1)} />
								<ForecastData title={"Clouds"} value={forecastDataFormat(weatherCurrent!.clouds, 2)} />
								<ForecastData title={"Sunrise"} value={Utils.dateFormatterFromDt(weatherCurrent!.sunrise)?.split(",")[1]} />
								<ForecastData title={"Sunset"} value={Utils.dateFormatterFromDt(weatherCurrent!.sunset)?.split(",")[1]} />
							</div>
						)}

						</div>
					</div>

			</div>
			<Footer />
		</>
	);
}

function ForecastData(props:any) {
	if (props.title === "empty") {
		return (
			<div className="forecast-data">
				<div>{forecastDataFormat(props.value, 0) === "" ? <br></br> : <i>{props.value}</i>}  </div>
			</div>
		);
	}

	return (
		<div className="forecast-data">
			<div>{props.title}:</div>
			<div><b>{props.value}</b></div>
		</div>
	);
}

function forecastImgFormater(v: Array<any>) {
	if (Utils.isEmpty(v)) {
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


function forecastDataFormat(v:any, n: number) {
	if (Utils.isEmpty(v)) {
		return "";
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
