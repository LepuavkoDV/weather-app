import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppSettings, AppStateFeatures } from '../reducers/app.reducer';

export const selectTheme = createSelector(
  createFeatureSelector<IAppSettings>(AppStateFeatures.settings),
  state => {
    console.log(state);
    return state.theme;
  },
);
