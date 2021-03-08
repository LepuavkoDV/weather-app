import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';

export const selectTheme = createSelector(
  createFeatureSelector<AppState>('app'),
  state => state.settings.theme,
);
