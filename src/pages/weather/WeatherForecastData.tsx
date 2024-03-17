import { dateFormatterFromDt } from '../../functions/dateFormatterFromDt';
import { forecastDataFormat } from './forecastDataFormat';
import styles from './index.module.css'

export const WeatherForecastData = ({title, value}: any) => {
	if (title === "empty") {
		return (
			<div className={styles["forecastDataStyle"]} >
				<div>{forecastDataFormat(value, 0) === "" ? <br></br> : <i>{value}</i>}  </div>
			</div>
		);
	}

	if (title === "dayOfWeek") {
		return (
			<div className={styles["forecastDataStyle"]} >
				<div><b>{forecastDataFormat(value, 0)}.</b></div>
				<div>{dateFormatterFromDt(value)}</div>
			</div>
		);
	}

	return (
		<div className={styles["forecastDataStyle"]} >
			<div>{title}:</div>
			<div><b>{value}</b></div>
		</div>
	);
}