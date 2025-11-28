import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Weather.module.css';
import { forecastDataFormat, formatDateFromDt2 } from './Weather.utils';

export const WeatherForecastData: React.FC<{
  title: string;
  value: string | number;
}> = ({ title, value }) => {
  if (title === 'dayOfWeek') {
    return (
      <div className={styles.weatherForecastData}>
        <TextBox mobileSize={20} desktopSize={20}>
          {forecastDataFormat(value, 0)}.
        </TextBox>

        <TextBox mobileSize={20} desktopSize={20}>
          <b>{formatDateFromDt2(Number(value))}</b>
        </TextBox>
      </div>
    );
  }

  return (
    <div className={styles.weatherForecastData}>
      <TextBox mobileSize={16} desktopSize={16}>
        {title}:
      </TextBox>
      <TextBox mobileSize={16} desktopSize={16}>
        <b>{value}</b>
      </TextBox>
    </div>
  );
};
