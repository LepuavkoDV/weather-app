import { createAction, props } from '@ngrx/store';
import { IWeather } from '../types/IWeather';

export enum WeatherActionTypes {
  load = '[Weather API] Loading Weather',
  loadSuccess = '[Weather API] Loading Weather Complete',
}

export const setWeather = createAction(
  WeatherActionTypes.loadSuccess,
  props<{ weather: IWeather }>(),
);
