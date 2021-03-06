import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppSettings } from '../reducers/app.reducer';

export const selectTheme = createSelector(
  createFeatureSelector<IAppSettings>('settings'),
  state => state.theme,
);
