import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../section/Section";
import { useEffect, useState } from "react";
import "./Forecast.css";
import * as Utils from "../utils/Utils";

export default function Forecast(props) {
	const TITLE = "Forecast";
	const [forecastCurrent, setForecastCurrent] = useState(Utils.getCookie("forecast_current", true) || {});
	const [forecast8Days, setForecast8Days] = useState(Utils.getCookie("forecast8Days", true) || {});

	useEffect(() => {

		//setForecastCurrent({});

		if (!Utils.getCookie("forecast_current")) {
			let lat = "51.1";
			let lon = "17.0333";
			fetchForecast(lat, lon);
		}

	}, []);

	function fetchForecast(lat, lon) {
		let URL = `https://najwer23api.ue.r.appspot.com/najwer23api/forecast/onecall?lat=${lat}&lon=${lon}`;

		fetch(URL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			if (data.code == 200) {
				setForecastCurrent(data.data.current);
				setForecast8Days(data.data.daily);
				Utils.setCookie("forecast_current", data.data.current, 3);
				Utils.setCookie("forecast8Days", data.data.daily, 3);
			}
		});
	}

	function CurrentForecast() {
		return (
			<>
				<div>
					<div className="forecast-data">Wrocław</div>

					<ForecastData title={"empty"} value={Utils.dateFormatterFromDt(forecastCurrent.dt)} />
					<br></br>
					{forecastImgFormater(forecastCurrent.weather)}
					<ForecastData title={"Temp"} value={forecastDataFormat(forecastCurrent.temp,4)}/>
					<ForecastData title={"Pressure"} value={forecastDataFormat(forecastCurrent.pressure,3)} />
					<ForecastData title={"Humidity"} value={forecastDataFormat(forecastCurrent.humidity,2)} />
					<ForecastData title={"Wind"} value={forecastDataFormat(forecastCurrent.wind_speed,1)} />
					<ForecastData title={"Clouds"} value={forecastDataFormat(forecastCurrent.clouds,2)} />
					<ForecastData title={"Sunrise"} value={Utils.dateFormatterFromDt(forecastCurrent.sunrise)?.split(",")[1]} />
					<ForecastData title={"Sunset"} value={Utils.dateFormatterFromDt(forecastCurrent.sunset)?.split(",")[1]} />

				</div>
			</>
		);
	}

	function forecastImgFormater(v) {
		if (Utils.isEmpty(v)) {
			return <div style={{width:"100px", height:"100px"}}>weather img</div>
		} else {
			return <img
				width="100px"
				height="100px"
				alt="weather img"
				src={`https://openweathermap.org/img/wn/${v[0].icon}@2x.png`}
			/>;
		}
	}

	function forecastDataFormat(v,n) {
		if (Utils.isEmpty(v)) {
			return "";
		} else if (n==1) {
			return (v*3.6).toFixed(2) + ` km/h`;
		} else if (n==2) {
			return v + ` %`;
		} else if (n==3) {
			return v + ` hPa`;
		} else if (n==4) {
			return v + ` ${"\u00b0"}C`;
		} else {
			return v;
		}

	}

	function ForecastData(props) {
		if (props.title == "empty") {
			return (
				<div className="forecast-data">
					<div>{props.value}{" "}</div>
				</div>
			)
		}

		return (
			<div className="forecast-data">
				<div>{props.title}:</div>
				<div>{props.value}</div>
			</div>
		);
	}

	return (
		<>
			<Header />
			<Section content={TITLE && <h2>{TITLE}</h2>} />
			<Section content={<CurrentForecast />} type={2} />
			<Footer />
		</>
	);
}