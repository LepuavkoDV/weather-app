import { createReducer, on } from '@ngrx/store';
import { setNewTheme } from '../actions/app.actions';
import { theme, Themes } from '../types/theme';

export interface IAppSettings {
  theme: theme;
}

export interface AppState {
  settings: IAppSettings;
}

export const initialState: AppState = {
  settings: {
    theme: Themes.light,
  },
};

export const app = createReducer(
  initialState,
  on(setNewTheme, (state, { newTheme } ) => ({
      ...state,
      settings: {
        ...state.settings,
        theme: newTheme,
      }
    })
  ),
);
