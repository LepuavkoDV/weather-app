import { createAction, props } from '@ngrx/store';
import { IWeather } from '../types/IWeather';

export enum WeatherActionTypes {
  loadWeather = '[Weather API] Loading Weather',
  setWeather = '[Weather API] Loading Weather Complete',
}

export const setWeather = createAction(
  WeatherActionTypes.setWeather,
  props<{ weather: IWeather }>(),
);
