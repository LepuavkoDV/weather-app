import { createAction, props } from '@ngrx/store';
import { IWeather } from '../types/IWeather';

export enum WeatherEffectsActionTypes {
  load = '[Weather page] Load Weather',
  loadSuccess = '[Weather API] Load Weather Success',
}

export const setWeather = createAction(
  WeatherEffectsActionTypes.loadSuccess,
  props<{ newWeather: IWeather }>(),
);
