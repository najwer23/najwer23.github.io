import { formatDateFromDt } from '@najwer23/utils/functions/formatDateFromDt';
import styles from './Weather.module.css';
import { forecastDataFormat } from './forecastDataFormat';

export const WeatherForecastData = ({ title, value }: { title: string; value: string | number }) => {
  if (title === 'empty') {
    return (
      <div className={styles.weatherForecastData}>
        <div>{forecastDataFormat(value, 0) === '' ? <br></br> : <i>{value}</i>} </div>
      </div>
    );
  }

  if (title === 'dayOfWeek') {
    return (
      <div className={styles.weatherForecastData}>
        <div>
          <div>{forecastDataFormat(value, 0)}.</div>
        </div>
        <b>{formatDateFromDt(Number(value))}</b>
      </div>
    );
  }

  return (
    <div className={styles.weatherForecastData}>
      <div>{title}:</div>
      <div>
        <b>{value}</b>
      </div>
    </div>
  );
};
