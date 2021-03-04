import { createReducer, on, Action } from '@ngrx/store';
import { setTheme } from './app.actions';
import { ISettings } from '../shared/types/ISettings';

export const initialState: ISettings = {
  theme: 'light',
};

export const appReducer = createReducer(
  initialState,
  on(setTheme, (state, { theme } ) => Object.assign(state, { theme }))
);
