export interface WeatherSliceState {
	status: WeatherStatus;
	coords: string;
	weather8Days: Daily[] | null;
	weatherCurrent: Current | null;
	weatherHourly: Current[] | null
}

export enum WeatherStatus {
	Idle = "idle",
	Loading = "loading",
	Done = "done",
	Error = "error",
}

export interface Weather {
	code: number;
	desc: string;
	data: Data;
}

export interface Data {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: Current;
	minutely: Minutely[];
	hourly: Current[];
	daily: Daily[];
}

export interface Current {
	dt: number;
	sunrise?: number;
	sunset?: number;
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
	weather: WeatherElement[];
	wind_gust?: number;
	pop?: number;
	rain?: Rain;
}

export interface Rain {
	"1h": number;
}

export interface WeatherElement {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Daily {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moon_phase: number;
	temp: Temp;
	feels_like: FeelsLike;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: WeatherElement[];
	clouds: number;
	pop: number;
	rain?: number;
	uvi: number;
}

export interface FeelsLike {
	day: number;
	night: number;
	eve: number;
	morn: number;
}

export interface Temp {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}

export interface Minutely {
	dt: number;
	precipitation: number;
}
