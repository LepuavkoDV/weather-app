import { createReducer, on } from '@ngrx/store';
import { setNewTheme } from '../actions/app.actions';
import { TTheme, ThemeTypes } from '../types/TTheme';

export interface IAppSettings {
  theme: TTheme;
}

export interface AppState {
  settings: IAppSettings;
}

export const initialState: AppState = {
  settings: {
    theme: ThemeTypes.light,
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
