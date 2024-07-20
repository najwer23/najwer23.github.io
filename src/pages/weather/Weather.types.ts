export interface Forecast {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  pop: number;
  rain?: Rain;
  snow?: Snow;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Rain {
  '1h': number;
}

export interface Snow {
  '1h': number;
}
