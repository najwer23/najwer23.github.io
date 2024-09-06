import { useMemo, useState } from 'react';
import styles from './Weather.module.css';
import { WeatherImg } from './WeatherImg';
import { WeatherForecastData } from './WeatherForecastData';
import { ChartLine } from '@najwer23/charts/ChartLine';
import { ChartMixed } from '@najwer23/charts/ChartMixed';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';
import { useQuery } from '@tanstack/react-query';
import { queryWeatherCoords } from './Weather.query';
import { Grid } from 'najwer23snacks/lib/Grid';
import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Button } from 'najwer23snacks/lib/Button';
import { Carousel } from 'najwer23snacks/lib/Carousel';
import { dataForLineChartTemp } from './data/dataForLineChartTemp';
import { dataForLineChartWind } from './data/dataForLineChartWind';
import { dataForLineChartRainfall } from './data/dataForLineChartRainfall';
import { dataForLineChartPressure } from './data/dataForLineChartPressure';
import { forecastDataFormat, formatDateFromDt, sortArrOfObjByLabel } from './Weather.utils';

export const Weather: React.FC<{
  title: string;
}> = ({ title }): JSX.Element => {
  useDocumentTitle(title);

  const [coords, setCoords] = useState<{ value: string; label: string }>({
    value: '51.1:17.0333',
    label: 'Wrocław (PL)',
  });
  const lat = coords.value.split(':')[0];
  const lon = coords.value.split(':')[1];

  const { data, isLoading } = useQuery({
    queryKey: ['queryWeatherCoords', 'queryWeatherCoords' + coords.value],
    queryFn: () => queryWeatherCoords(lat, lon),
    staleTime: Infinity,
    gcTime: 30 * 1000 * 60,
    retry: 0,
    enabled: true,
  });

  const townListForSelect = useMemo(() => {
    return sortArrOfObjByLabel([
      { value: '51.1:17.0333', label: 'Wrocław (PL)' },
      { value: '52.237049:21.017532', label: 'Warszawa (PL)' },
      { value: '50.270908:19.039993', label: 'Katowice (PL)' },
      { value: '51.1445731:16.2410821', label: 'Legnickie Pole (PL)' },
      { value: '41.3828939:2.1774322', label: 'Barcelona (ES)' },
      { value: '64.145981:-21.9422367', label: 'Reykjavík (IS)' },
      { value: '52.4006632:16.91973259', label: 'Poznań (PL)' },
      { value: '50.06143:19.93658', label: 'Kraków (PL)' },
    ]);
  }, []);

  const weather8Days = data?.resOpenWeatherMap?.daily;
  const weatherHourly = data?.resOpenWeatherMap?.hourly;
  const weatherCurrent = data?.resOpenWeatherMap?.current;

  return (
    <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
      <TextBox tag="h1"> Weather </TextBox>

      <div className={styles.weatherSelectWrapper}>
        {townListForSelect.map(({ value, label }) => (
          <Button
            key={value}
            type={'button'}
            onClick={() => setCoords({ value, label })}
            disabled={coords.value === value}>
            {label}
          </Button>
        ))}
      </div>

      <div className={styles.weatherWrapper}>
        {!isLoading ? (
          <Carousel
            arrowLeftIcon={<div className={[styles.buttonLeft].join(' ')}></div>}
            arrowRightIcon={<div className={[styles.buttonRight].join(' ')}></div>}>
            <div className={styles.weatherCurrent}>
              <WeatherImg imgArr={weatherCurrent!.weather} />
              <WeatherForecastData title={'dayOfWeek'} value={weatherCurrent!.dt} />
              <WeatherForecastData title={'Temp'} value={forecastDataFormat(weatherCurrent!.temp, 4)} />
              <WeatherForecastData
                title={'Sunrise'}
                value={formatDateFromDt(weatherCurrent!.sunrise)?.split(',')[1] ?? ''}
              />
              <WeatherForecastData
                title={'Sunset'}
                value={formatDateFromDt(weatherCurrent!.sunset)?.split(',')[1] ?? ''}
              />
              <WeatherForecastData title={'Wind'} value={forecastDataFormat(weatherCurrent!.wind_speed, 1)} />
              <WeatherForecastData title={'Pressure'} value={forecastDataFormat(weatherCurrent!.pressure, 3)} />
              <WeatherForecastData title={'Humidity'} value={forecastDataFormat(weatherCurrent!.humidity, 2)} />
              <WeatherForecastData title={'Clouds'} value={forecastDataFormat(weatherCurrent!.clouds, 2)} />
              <WeatherForecastData title={'Lat'} value={forecastDataFormat(coords.value?.split(':')[0], 5)} />
              <WeatherForecastData title={'Lon'} value={forecastDataFormat(coords.value?.split(':')[1], 5)} />
            </div>

            {weather8Days &&
              weather8Days
                .filter((_: unknown, i: number) => i !== 0)
                .map((x: any) => (
                  <div key={x.dt}>
                    <WeatherImg imgArr={x.weather} />
                    <WeatherForecastData title={'dayOfWeek'} value={x.dt} />
                    <WeatherForecastData title={'Temp'} value={forecastDataFormat(x.temp.day, 4)} />
                    <WeatherForecastData title={'Sunrise'} value={formatDateFromDt(x.sunrise)?.split(',')[1] ?? ''} />
                    <WeatherForecastData title={'Sunset'} value={formatDateFromDt(x.sunset)?.split(',')[1] ?? ''} />
                    <WeatherForecastData title={'Wind'} value={forecastDataFormat(x.wind_speed, 1)} />
                    <WeatherForecastData title={'Pressure'} value={forecastDataFormat(x.pressure, 3)} />
                    <WeatherForecastData title={'Humidity'} value={forecastDataFormat(x.humidity, 2)} />
                    <WeatherForecastData title={'Clouds'} value={forecastDataFormat(x.clouds, 2)} />
                  </div>
                ))}
          </Carousel>
        ) : (
          <div style={{ minHeight: '440px' }}>
            <TextBox>Loading..</TextBox>
          </div>
        )}
      </div>

      {!isLoading ? (
        <div
          style={{
            marginTop: '30px',
            marginBottom: '50px',
            height: '700px',
          }}>
          <ChartLine
            title="Temeperature for next 48h"
            data={dataForLineChartTemp(weatherHourly, weather8Days[0].sunrise, weather8Days[0].sunset)}
            ySymbol={` ${'\u00b0'}C`}
          />
        </div>
      ) : (
        <div style={{ minHeight: '780px' }}>{/* <TextBox>Loading..</TextBox> */}</div>
      )}

      {!isLoading ? (
        <div
          style={{
            marginTop: '30px',
            marginBottom: '50px',
            height: '700px',
          }}>
          <ChartLine
            title="Speed of wind for next 48h"
            data={dataForLineChartWind(weatherHourly, weather8Days[0].sunrise, weather8Days[0].sunset)}
            ySymbol={` km/h`}
          />
        </div>
      ) : (
        <div style={{ minHeight: '780px' }}>{/* <TextBox>Loading..</TextBox> */}</div>
      )}

      {!isLoading ? (
        <div
          style={{
            marginTop: '30px',
            marginBottom: '50px',
            height: '700px',
          }}>
          <ChartMixed
            title="Rain / Snow for next 48h"
            data={dataForLineChartRainfall(weatherHourly, weather8Days[0].sunrise, weather8Days[0].sunset)}
            ySymbol={` mm/h`}
          />
        </div>
      ) : (
        <div style={{ minHeight: '780px' }}>{/* <TextBox>Loading..</TextBox> */}</div>
      )}

      {!isLoading ? (
        <div
          style={{
            marginTop: '30px',
            marginBottom: '0',
            height: '700px',
          }}>
          <ChartLine
            title="Pressure"
            data={dataForLineChartPressure(weatherHourly, weather8Days[0].sunrise, weather8Days[0].sunset)}
            ySymbol={` hPa`}
          />
        </div>
      ) : (
        <div style={{ minHeight: '780px' }}>{/* <TextBox>Loading..</TextBox> */}</div>
      )}
    </Grid>
  );
};
