import { useMemo, useState } from 'react';
import styles from './Weather.module.css';
import { WeatherImg } from './WeatherImg';
import { WeatherForecastData } from './WeatherForecastData';
import { ChartLine } from '@najwer23/charts/ChartLine';
import { ChartMixed } from '@najwer23/charts/ChartMixed';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';
import { queryWeatherCoords } from './Weather.query';
import { Grid } from 'najwer23snacks/lib/Grid';
import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Button } from 'najwer23snacks/lib/Button';
import { Carousel } from 'najwer23snacks/lib/Carousel';

import { forecastDataFormat, formatDateFromDt, sortArrOfObjByLabel } from './Weather.utils';
import { chartDataTemp } from './chartData/chartDataTemp';
import { chartDataWind } from './chartData/chartDataWind';
import { chartDataRainfall } from './chartData/chartDataRainfall';
import { chartDataPressure } from './chartData/chartDataPressure';
import { Spinner } from '@najwer23/spinner/Spinner';
import { useImmediateThrottledQuery } from '@najwer23/utils/hooks/useImmediateThrottledQuery';

export const Weather: React.FC<{
  title: string;
}> = ({ title }) => {
  useDocumentTitle(title);

  const [coords, setCoords] = useState<{ value: string; label: string }>({
    value: '51.1:17.0333',
    label: 'Wrocław (PL)',
  });
  const lat = coords.value.split(':')[0];
  const lon = coords.value.split(':')[1];

  const { result, isLoading } = useImmediateThrottledQuery({
    queryKey: ['queryWeatherCoords', 'queryWeatherCoords' + coords.value],
    queryFn: () => queryWeatherCoords(lat, lon),
    staleTime: 30 * 1000 * 60,
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

  const weather8Days = result?.resOpenWeatherMap?.daily ?? [];
  const weatherHourly = result?.resOpenWeatherMap?.hourly ?? [];
  const weatherCurrent = result?.resOpenWeatherMap?.current;

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

      {!isLoading && weather8Days && weatherCurrent ? (
        <>
          <div className={styles.weatherWrapper}>
            <Carousel>
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
          </div>
        </>
      ) : (
        <div style={{ minHeight: '440px' }}>
          <Spinner />
        </div>
      )}

      {!isLoading ? (
        <div style={{ marginTop: '30px', marginBottom: '50px', height: '700px' }}>
          <ChartLine
            title="Temeperature for next 48h"
            data={chartDataTemp(weatherHourly, weather8Days[0]?.sunrise, weather8Days[0]?.sunset)}
            ySymbol={` ${'\u00b0'}C`}
          />
        </div>
      ) : (
        <div style={{ minHeight: '780px' }}></div>
      )}

      {!isLoading ? (
        <div style={{ marginTop: '30px', marginBottom: '50px', height: '700px' }}>
          <ChartLine
            title="Speed of wind for next 48h"
            data={chartDataWind(weatherHourly, weather8Days[0]?.sunrise, weather8Days[0]?.sunset)}
            ySymbol={` km/h`}
          />
        </div>
      ) : (
        <div style={{ minHeight: '780px' }}></div>
      )}

      {!isLoading ? (
        <div style={{ marginTop: '30px', marginBottom: '50px', height: '700px' }}>
          <ChartMixed
            title="Rain / Snow for next 48h"
            data={chartDataRainfall(weatherHourly, weather8Days[0]?.sunrise, weather8Days[0]?.sunset)}
            ySymbol={` mm/h`}
          />
        </div>
      ) : (
        <div style={{ minHeight: '780px' }}></div>
      )}

      {!isLoading ? (
        <div style={{ marginTop: '30px', marginBottom: '0', height: '700px' }}>
          <ChartLine
            title="Pressure"
            data={chartDataPressure(weatherHourly, weather8Days[0]?.sunrise, weather8Days[0]?.sunset)}
            ySymbol={` hPa`}
          />
        </div>
      ) : (
        <div style={{ minHeight: '780px' }}></div>
      )}
    </Grid>
  );
};
