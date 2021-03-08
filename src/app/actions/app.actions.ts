import { createAction, props } from '@ngrx/store';
import { theme } from '../types/theme';

export enum AppActions {
  setNewTheme = '[Settings] Set New Theme',
}

export const setTheme = createAction(
  AppActions.setNewTheme,
  props<{ newTheme: theme }>(),
);
