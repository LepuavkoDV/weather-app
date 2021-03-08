import { createAction, props } from '@ngrx/store';

export enum WeatherEffectsActionTypes {
  load = '[Weather page] Load Weather',
  loadSuccess = '[Weather API] Load Weather Success',
}

export const setWeather = createAction(
  WeatherEffectsActionTypes.loadSuccess,
  props<{ weather: any }>(),
);
