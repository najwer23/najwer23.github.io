import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../section/Section";
import { useEffect, useState, useRef } from "react";
import "./Forecast.css";
import * as Utils from "../utils/Utils";
import Select from "../components/select/Select";
import Loader from "../components/loader/Loader";
import Carousel from "../carousel/Carousel";


export default function Forecast(props) {
	const TITLE = "Forecast";

	return (
		<>
			<Header />
			<Section content={TITLE && <h2>{TITLE}</h2>} />
			<Section content={<CurrentForecast />} type={2} />
			<Footer />
		</>
	);
}

function CurrentForecast(props) {
	const [coords, setCoords] = useState("51.1:17.0333");
	const [forecast8Days, setForecast8Days] = useState(Utils.getLocalStorageCookie("forecast8Days_"+props.coords, true) || {});
	const [forecastCurrent, setForecastCurrent] = useState(Utils.getLocalStorageCookie("forecast_current_"+props.coords, true) || {});
	let forecast8DaysDivs = [];

	const selectedCity = useRef(null);
	const townListForSelect = [
		{ value: "51.1:17.0333", label: "Wrocław (PL)" },
		{ value: "51.1:17.0333", label: "Wrocław (PL)" },
		{ value: "51.1445731:16.2410821", label: "Legnickie Pole (PL)" },
		{ value: "41.3828939:2.1774322", label: "Barcelona (ES)" },
		{ value: "64.145981:-21.9422367", label: "Reykjavík (IS)" },
		{ value: "52.4006632:16.91973259", label: "Poznań (PL)" },
	];

	function handleChange(e) {
		setCoords(selectedCity.current.value);
	}

	function makeForecastCarousel(arr, arr2) {
		if (!Utils.isEmpty(arr)) {
			arr.map((x,i) => (
				arr2.push(<div key={i} className="forecast-data-current carousel-standard-item">
					{forecastImgFormater(x.weather)}
					<ForecastData title={"empty"} value={Utils.dateFormatterFromDt(x.dt)}  />
					<ForecastData title={"Lat"} value={forecastDataFormat(coords.split(":")[0],5)}/>
					<ForecastData title={"Lon"} value={forecastDataFormat(coords.split(":")[1],5)}/>
					<ForecastData title={"Temp"} value={forecastDataFormat(x.temp.day,4)}/>
					<ForecastData title={"Pressure"} value={forecastDataFormat(x.pressure,3)} />
					<ForecastData title={"Humidity"} value={forecastDataFormat(x.humidity,2)} />
					<ForecastData title={"Wind"} value={forecastDataFormat(x.wind_speed,1)} />
					<ForecastData title={"Clouds"} value={forecastDataFormat(x.clouds,2)} />
					<ForecastData title={"Sunrise"} value={Utils.dateFormatterFromDt(x.sunrise)?.split(",")[1]} />
					<ForecastData title={"Sunset"} value={Utils.dateFormatterFromDt(x.sunset)?.split(",")[1]} />
				</div>)
			))
		}

		arr2.shift()
	}


	makeForecastCarousel(forecast8Days, forecast8DaysDivs);

	return (
		<>
			<div className="forecast-wrapper">
				<div className="forecast-data-current-wrapper">
					<div className="forecast-data">
						<Select
							options={townListForSelect}
							onChange={handleChange}
							innerRef={selectedCity}
							id={"forcast-city"}
						/>
					</div>

					<CurrentForecastData
						coords={coords}
						passForecast8Days={setForecast8Days}
						passForecastCurrent={setForecastCurrent}
					/>

					{Utils.isEmpty(forecastCurrent) ? (
						<div className="forecast-data-current"  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Loader ldsGrid={true} />
						</div>
					) : (
						<div className="forecast-data-current">
						{forecastImgFormater(forecastCurrent.weather)}
						<ForecastData title={"empty"} value={Utils.dateFormatterFromDt(forecastCurrent.dt)}  />
						<ForecastData title={"Lat"} value={forecastDataFormat(coords.split(":")[0],5)}/>
						<ForecastData title={"Lon"} value={forecastDataFormat(coords.split(":")[1],5)}/>
						<ForecastData title={"Temp"} value={forecastDataFormat(forecastCurrent.temp,4)}/>
						<ForecastData title={"Pressure"} value={forecastDataFormat(forecastCurrent.pressure,3)} />
						<ForecastData title={"Humidity"} value={forecastDataFormat(forecastCurrent.humidity,2)} />
						<ForecastData title={"Wind"} value={forecastDataFormat(forecastCurrent.wind_speed,1)} />
						<ForecastData title={"Clouds"} value={forecastDataFormat(forecastCurrent.clouds,2)} />
						<ForecastData title={"Sunrise"} value={Utils.dateFormatterFromDt(forecastCurrent.sunrise)?.split(",")[1]} />
						<ForecastData title={"Sunset"} value={Utils.dateFormatterFromDt(forecastCurrent.sunset)?.split(",")[1]} />
					</div>
					)}
				</div>

				<div className="forecast-data-8Days-wrapper">

					{Utils.isEmpty(forecast8Days) ? (
						<div className="forecast-data-current"  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							{/* <Loader ldsGrid={true} /> */}
						</div>
					) : (
						<Carousel
							id="carousel2"
							type="forecast"
							arr={forecast8DaysDivs}
							itemName={"carousel-standard-item"}
							mobileItemWidth={300}
							desktopItemWidth={300}
						/>
					)}


				</div>
			</div>
		</>
	);
}

function CurrentForecastData(props) {

	useEffect(() => {
		if (!Utils.getLocalStorageCookie("forecast_current_" + props.coords)) {
			let lat = props.coords.split(":")[0];
			let lon = props.coords.split(":")[1];
			fetchForecast(lat, lon);
		} else {
			props.passForecast8Days(Utils.getLocalStorageCookie("forecast8Days_" + props.coords, true));
			props.passForecastCurrent(Utils.getLocalStorageCookie("forecast_current_" + props.coords, true))
		}
	}, [props.coords]);

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
				props.passForecast8Days(data.data.daily);
				props.passForecastCurrent(data.data.current);
				Utils.setLocalStorageCookie("forecast_current_" + lat + ":" + lon, data.data.current, 0.5);
				Utils.setLocalStorageCookie("forecast8Days_" + + lat + ":" + lon, data.data.daily, 0.5);
			}
		});
	}
}

function ForecastData(props) {
	if (props.title == "empty") {
		return (
			<div className="forecast-data">
				<div>{forecastDataFormat(props.value) == "" ? <br></br> : props.value}  </div>
			</div>
		);
	}

	return (
		<div className="forecast-data">
			<div>{props.title}:</div>
			<div>{props.value}</div>
		</div>
	);
}

function forecastImgFormater(v) {
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


function forecastDataFormat(v, n) {
	if (Utils.isEmpty(v)) {
		return "";
	} else if (n == 1) {
		return (v * 3.6).toFixed(2) + ` km/h`;
	} else if (n == 2) {
		return v + ` %`;
	} else if (n == 3) {
		return v + ` hPa`;
	} else if (n == 4) {
		return v + ` ${"\u00b0"}C`;
	} else if (n == 5) {
		return v + ` ${"\u00b0"}`;
	} else {
		return v;
	}
}