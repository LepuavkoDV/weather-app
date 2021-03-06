import { createReducer, on } from '@ngrx/store';
import { setTheme } from '../actions/app.actions';
import { theme } from '../types/theme';

export interface ISettings {
  theme: theme;
}

export interface AppState {
  settings: ISettings;
}

export const initialState: ISettings = {
  theme: 'light',
};

export const appReducer = createReducer(
  initialState,
  on(setTheme, (state, { theme } ) => Object.assign(state.theme, { theme }))
);
