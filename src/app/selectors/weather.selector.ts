import { createSelector, createFeatureSelector } from '@ngrx/store';
import { WeatherState } from '../reducers/weather.reducer';

export const selectWeather = createSelector(
  createFeatureSelector<WeatherState>('weather'),
  state => state.weather,
);
