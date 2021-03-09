import { createAction, props } from '@ngrx/store';
import { IWeather } from '../types/IWeather';

export enum WeatherEffectsActionTypes {
  load = '[Weather API] Loading Weather',
  loadSuccess = '[Weather API] Loading Weather Complete',
}

export const setWeather = createAction(
  WeatherEffectsActionTypes.loadSuccess,
  props<{ newWeather: IWeather }>(),
);
