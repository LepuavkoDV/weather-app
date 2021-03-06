import { createReducer, on } from '@ngrx/store';
import { setTheme } from '../actions/app.actions';
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
  }
};

export const appReducer = createReducer(
  initialState,
  on(setTheme, (state, { newTheme } ) => {
      return {
        ...state,
        settings: {
          ...state.settings,
          theme: newTheme,
        }
      };
    }
  )
);
