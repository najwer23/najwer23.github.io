import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Current, Daily, WeatherStatus, WeatherSliceState, Weather } from "../../types/typesWeather";
import * as Utils from "../../utils/Utils";

const initialState: WeatherSliceState = {
	status: WeatherStatus.Idle,
	coords: "51.1:17.0333",
	weather8Days: null,
	weatherCurrent: null,
};

export const WeatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		initWeatherCurrent: (state, action: PayloadAction<Current>) => {
			state.weatherCurrent = action.payload;
		},
		initWeather8Days: (state, action: PayloadAction<Daily[]>) => {
			state.weather8Days = action.payload;
		},
		setStatus: (state, action: PayloadAction<WeatherStatus>) => {
			state.status = action.payload;
		},
	},
});


export const getData = (coords: string) => async (dispatch: any) => {
	try {
		dispatch(setStatus(WeatherStatus.Loading));

		if (!Utils.getLocalStorageCookie("forecast_current_" + coords)) {
			let lat = coords.split(":")[0];
			let lon = coords.split(":")[1];

			let fetchObj = {
				url: `/najwer23api/forecast/onecall?lat=${lat}&lon=${lon}`,
				method: "GET",
			};

			let data = (await Utils.useFetch(
				...(Object.values(fetchObj) as [string, number, any])
			)) as Weather;

			if (data.code === 200) {
				dispatch(initWeatherCurrent(data.data.current));
				dispatch(initWeather8Days(data.data.daily));
				dispatch(setStatus(WeatherStatus.Done));

				Utils.setLocalStorageCookie(
					"forecast_current_" + lat + ":" + lon,
					data.data.current,
					0.5
				);
				Utils.setLocalStorageCookie(
					"forecast8Days_" + +lat + ":" + lon,
					data.data.daily,
					0.5
				);
			} else {
				dispatch(setStatus(WeatherStatus.Error));
			}
		} else {
			dispatch(initWeatherCurrent(Utils.getLocalStorageCookie("forecast_current_" + coords)));
			dispatch(initWeather8Days(Utils.getLocalStorageCookie("forecast8Days_" + coords)));
			dispatch(setStatus(WeatherStatus.Done));
		}

	} catch (err: any) {
		throw new Error(err);
	}
};



export const { initWeatherCurrent, initWeather8Days, setStatus } =
	WeatherSlice.actions;
export default WeatherSlice.reducer;