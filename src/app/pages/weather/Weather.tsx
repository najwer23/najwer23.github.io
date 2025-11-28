import { ChartLine } from '@najwer23/charts/ChartLine';
import { ChartMixed } from '@najwer23/charts/ChartMixed';
import { useDocumentTitle } from '@najwer23/hooks/useDocumentTitle';
import { useImmediateThrottledQuery } from '@najwer23/hooks/useImmediateThrottledQuery';
import { Button } from 'najwer23morsels/lib/button';
import { Grid } from 'najwer23morsels/lib/grid';
import { useWindowSize } from 'najwer23morsels/lib/hooks';
import { SliderScroll } from 'najwer23morsels/lib/sliderscroll';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { useMemo, useState } from 'react';
import { chartDataPressure } from './chartData/chartDataPressure';
import { chartDataRainfall } from './chartData/chartDataRainfall';
import { chartDataTemp } from './chartData/chartDataTemp';
import { chartDataWind } from './chartData/chartDataWind';
import styles from './Weather.module.css';
import { queryWeatherCoords } from './Weather.query';
import { forecastDataFormat, formatDateFromDt, sortArrOfObjByLabel } from './Weather.utils';
import { WeatherForecastData } from './WeatherForecastData';
import { WeatherImg } from './WeatherImg';

export const Weather: React.FC = () => {
  useDocumentTitle('Weather | Mariusz Najwer');
  const { width } = useWindowSize();

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
    <>
      <Grid layout="container" widthMax={'1400px'} padding={'clamp(40px, 8vw, 60px) 20px 40px 20px'}>
        <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin={'0 0 10px 0'}>
          Weather
        </TextBox>
        <div className={styles.weatherSelectWrapper}>
          {townListForSelect.map(({ value, label }) => (
            <Button
              key={value}
              type={'button'}
              onClick={() => setCoords({ value, label })}
              disabled={coords.value === value}
              backgroundColor="orangered"
              height={'40px'}
              width={'auto'}
              padding={'0 10px'}
              backgroundColorDisabled="#4d4d4d"
            >
              <TextBox mobileSize={18} desktopSize={18} color="white">
                {label}
              </TextBox>
            </Button>
          ))}
        </div>
      </Grid>

      <Grid
        layout="container"
        widthMax={'1400px'}
        padding={
          (isLoading || !weatherCurrent?.weather || !weather8Days?.length) && width <= 767.98
            ? '0 20px'
            : width <= 767.98
              ? 0
              : '0 20px'
        }
        minHeight="415px"
        loading={isLoading || !weatherCurrent?.weather || !weather8Days?.length}
      >
        {!isLoading && weather8Days && weatherCurrent && (
          <div className={styles.weatherWrapper}>
            <SliderScroll gap="10px">
              <div
                style={{
                  width: '258px',
                  background: 'darkgrey',
                  padding: '10px',
                  border: '1px solid black',
                  margin: width <= 767.98 ? '0 0 0 20px' : 0,
                }}
              >
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
                {/* <WeatherForecastData title={'Lat'} value={forecastDataFormat(coords.value?.split(':')[0], 5)} /> */}
                {/* <WeatherForecastData title={'Lon'} value={forecastDataFormat(coords.value?.split(':')[1], 5)} /> */}
              </div>

              {weather8Days &&
                weather8Days
                  .filter((_: unknown, i: number) => i !== 0)
                  .map((x: any, i: number, arr: any) => (
                    <div
                      style={{
                        width: '258px',
                        background: '#cfcfcf',
                        padding: '10px',
                        border: '1px solid black',
                        margin: i === arr.length - 1 && width <= 767.98 ? '0 20px 0 0' : 0,
                      }}
                      key={x.dt}
                    >
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
            </SliderScroll>
          </div>
        )}
      </Grid>

      <Grid
        layout="container"
        widthMax={'1400px'}
        padding={'0 20px'}
        margin={'30px auto 50px auto'}
        minHeight="700px"
        loading={isLoading || !weatherCurrent?.weather || !weather8Days?.length}
      >
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartLine
              title="Temeperature for next 48h"
              data={chartDataTemp(weatherHourly, weather8Days[0]?.sunrise, weather8Days[0]?.sunset)}
              ySymbol={` ${'\u00b0'}C`}
            />
          </div>
        )}
      </Grid>

      <Grid
        layout="container"
        widthMax={'1400px'}
        padding={'0 20px'}
        margin={'30px auto 50px auto'}
        minHeight="700px"
        loading={isLoading || !weatherCurrent?.weather || !weather8Days?.length}
      >
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartLine
              title="Speed of wind for next 48h"
              data={chartDataWind(weatherHourly, weather8Days[0]?.sunrise, weather8Days[0]?.sunset)}
              ySymbol={` km/h`}
            />
          </div>
        )}
      </Grid>

      <Grid
        layout="container"
        widthMax={'1400px'}
        padding={'0 20px'}
        margin={'30px auto 50px auto'}
        minHeight="700px"
        loading={isLoading || !weatherCurrent?.weather || !weather8Days?.length}
      >
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartMixed
              title="Rain / Snow for next 48h"
              data={chartDataRainfall(weatherHourly, weather8Days[0]?.sunrise, weather8Days[0]?.sunset)}
              ySymbol={` mm/h`}
            />
          </div>
        )}
      </Grid>

      <Grid
        layout="container"
        widthMax={'1400px'}
        padding={'0 20px'}
        margin={'30px auto 80px auto'}
        minHeight="700px"
        loading={isLoading || !weatherCurrent?.weather || !weather8Days?.length}
      >
        {!isLoading && (
          <div style={{ height: '700px' }}>
            <ChartLine
              title="Pressure"
              data={chartDataPressure(weatherHourly, weather8Days[0]?.sunrise, weather8Days[0]?.sunset)}
              ySymbol={` hPa`}
            />
          </div>
        )}
      </Grid>
    </>
  );
};
