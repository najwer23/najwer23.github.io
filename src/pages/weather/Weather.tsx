import { useMemo, useState } from "react";
import { faAngleLeft, faAngleRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "najwer23storybook/lib/Carousel";
import { Button } from "najwer23storybook/lib/Button";
import { ChartLine } from "../../charts/ChartLine"
import { useFetch } from "../../hooks/useFetch";
import { sortByKeyArrObj } from "../../functions/sortByKeyArrObj";
import { dateFormatterFromDt } from "../../functions/dateFormatterFromDt";
import styles from './index.module.css'
import { Text } from "najwer23storybook/lib/Text";
import { dataForLineChartTemp } from "./dataForLineChartTemp";
import { dataForLineChartPressure } from "./dataForLineChartPressure";
import { dataForLineChartWind } from "./dataForLineChartWind";
import { dataForLineChartRainfall } from "./dataForLineChartRainfall";
import { ChartMixed } from "../../charts/ChartMixed";
import { forecastDataFormat } from "./forecastDataFormat";
import { WeatherImg } from "./WeatherImg";
import { WeatherForecastData } from "./WeatherForecastData";
import { Container } from "najwer23storybook/lib/Container";
import { Footer } from "najwer23storybook/lib/Footer";

export const Weather = (): JSX.Element => {
	const [coords, setCoords] = useState<{ value: string; label: string }>({ value: "51.1:17.0333", label: "Wrocław (PL)" });
	const lat = coords.value.split(":")[0];
	const lon = coords.value.split(":")[1];

	const { data, status } = useFetch<any>(import.meta.env.VITE_NAJWER23API_ORIGIN_PROD + `/najwer23api/forecast/onecall?lat=${lat}&lon=${lon}`, {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
		},
	});

	const townListForSelect = useMemo(() => {
		return sortByKeyArrObj([
			{ value: "51.1:17.0333", label: "Wrocław (PL)" },
			{ value: "52.237049:21.017532", label: "Warszawa (PL)" },
			{ value: "50.270908:19.039993", label: "Katowice (PL)" },
			{ value: "51.1445731:16.2410821", label: "Legnickie Pole (PL)" },
			{ value: "41.3828939:2.1774322", label: "Barcelona (ES)" },
			{ value: "64.145981:-21.9422367", label: "Reykjavík (IS)" },
			{ value: "52.4006632:16.91973259", label: "Poznań (PL)" },
			{ value: "50.06143:19.93658", label: "Kraków (PL)" },
		]);
	}, []);

	const weather8Days = data?.data.daily;
	const weatherHourly = data?.data.hourly;
	const weatherCurrent = data?.data.current;

	return (
		<Container kind="section">
			<Text kind='h2'> Weather </Text>

			<div className={styles.weatherSelectWrapper}>
				{townListForSelect.map(({ value, label }) => (
					<Button
						key={value}
						text={label}
						type={"button"}
						ariaLabel={`button town -${label}`}
						onClick={() => setCoords({ value, label })}
						disabled={coords.value === value}
					/>
				))}
			</div>

			<div className={styles.weatherWrapper}>

				{status === "done" ? (
					<Carousel
						arrowLeftIcon={<FontAwesomeIcon icon={faAngleLeft} color={"white"} size={"lg"} />}
						arrowRightIcon={<FontAwesomeIcon icon={faAngleRight} color={"white"} size={"lg"} />}
					>
						<div className={styles.weatherCurrent}>
							<WeatherImg imgArr={weatherCurrent!.weather} />
							<WeatherForecastData title={"dayOfWeek"} value={weatherCurrent!.dt} />
							<WeatherForecastData title={"Temp"} value={forecastDataFormat(weatherCurrent!.temp, 4)} />
							<WeatherForecastData title={"Sunrise"} value={dateFormatterFromDt(weatherCurrent!.sunrise)?.split(",")[1] ?? ""} />
							<WeatherForecastData title={"Sunset"} value={dateFormatterFromDt(weatherCurrent!.sunset)?.split(",")[1] ?? ""} />
							<WeatherForecastData title={"Wind"} value={forecastDataFormat(weatherCurrent!.wind_speed, 1)} />
							<WeatherForecastData title={"Pressure"} value={forecastDataFormat(weatherCurrent!.pressure, 3)} />
							<WeatherForecastData title={"Humidity"} value={forecastDataFormat(weatherCurrent!.humidity, 2)} />
							<WeatherForecastData title={"Clouds"} value={forecastDataFormat(weatherCurrent!.clouds, 2)} />
							<WeatherForecastData title={"Lat"} value={forecastDataFormat(coords.value?.split(":")[0], 5)} />
							<WeatherForecastData title={"Lon"} value={forecastDataFormat(coords.value?.split(":")[1], 5)} />
						</div>

						{weather8Days && weather8Days.filter((_: unknown, i: number) => i !== 0).map((x: any) => (
							<div key={x.dt}>
								<WeatherImg imgArr={x.weather} />
								<WeatherForecastData title={"dayOfWeek"} value={x.dt} />
								<WeatherForecastData title={"Temp"} value={forecastDataFormat(x.temp.day, 4)} />
								<WeatherForecastData title={"Sunrise"} value={dateFormatterFromDt(x.sunrise)?.split(",")[1] ?? ""} />
								<WeatherForecastData title={"Sunset"} value={dateFormatterFromDt(x.sunset)?.split(",")[1] ?? ""} />
								<WeatherForecastData title={"Wind"} value={forecastDataFormat(x.wind_speed, 1)} />
								<WeatherForecastData title={"Pressure"} value={forecastDataFormat(x.pressure, 3)} />
								<WeatherForecastData title={"Humidity"} value={forecastDataFormat(x.humidity, 2)} />
								<WeatherForecastData title={"Clouds"} value={forecastDataFormat(x.clouds, 2)} />
							</div>
						))}
					</Carousel>
				) : (
					<div style={{ minHeight: "365px" }}>
						<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />
					</div>
				)}
			</div>


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
						data={dataForLineChartTemp(weatherHourly, weather8Days[0].sunrise, weather8Days[0].sunset)}
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
						data={dataForLineChartWind(weatherHourly, weather8Days[0].sunrise, weather8Days[0].sunset)}
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
					<ChartMixed
						title="Rain / Snow for next 48h"
						data={dataForLineChartRainfall(weatherHourly, weather8Days[0].sunrise, weather8Days[0].sunset)}
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
						marginBottom: "0",
						height: "700px",
					}}
				>
					<ChartLine
						title="Pressure"
						data={dataForLineChartPressure(weatherHourly, weather8Days[0].sunrise, weather8Days[0].sunset)}
						ySymbol={` hPa`}
					/>
				</div>
			) : (
				<div style={{ minHeight: "780px" }}>
					<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="2x" />
				</div>
			)}
			<Footer />
		</Container>
	);
}
