import { createReducer, on } from '@ngrx/store';
import { setTheme } from '../actions/app.actions';
import { theme, Themes } from '../types/theme';

export interface IAppSettings {
  theme: theme;
}

export enum AppStateFeatures {
  settings = 'settings'
}

export interface AppState {
  [AppStateFeatures.settings]: IAppSettings;
}

export const initialState: IAppSettings = {
  theme: Themes.light,
};

export const appReducer = createReducer(
  initialState,
  on(setTheme, (state, { newTheme } ) => Object.assign(state.theme, { theme: newTheme }))
);
