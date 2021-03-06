import { createReducer, on } from '@ngrx/store';
import { setWeather } from '../actions/weather.actions';
import { IWeather } from '../types/IWeather';


export interface WeatherState {
  weather: IWeather | null;
}

export const initialState: WeatherState = {
  weather: null,
};

export const weather = createReducer(
  initialState,
  on(setWeather, (state, { weather }) => ({ ...state, weather })),
);
