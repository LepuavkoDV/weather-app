import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export interface FeatureState {
  counter: number;
}

export const selectSettings = (state: AppState) => state.settings;

export const selectFeatureCount = createSelector(
  // @ts-ignore
  selectSettings,
  (state: FeatureState) => state.counter
);
