import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';

export const selectTheme = createSelector(
  createFeatureSelector<AppState>('appReducer'),
  state => state.settings.theme,
);
