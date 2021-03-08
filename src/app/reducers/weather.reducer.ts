import { createReducer, on } from '@ngrx/store';
import { setWeather } from '../actions/weather.actions';

export interface IWeather {
  coord: {
    lon: string,
    lat: number,
  };
  weather: Array<any>;
  base: string;
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
  };
  visibility: number;
  wind: {
    speed: number,
    deg: number,
  };
  clouds: {};
  dt: number;
  sys: {};
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

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
