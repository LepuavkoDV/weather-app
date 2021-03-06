import { createAction, props } from '@ngrx/store';
import { theme } from '../types/theme';

export enum AppActions {
  SetTheme = '[SETTINGS] set theme',
}

export const setTheme = createAction(
  AppActions.SetTheme,
  props<{ newTheme: theme }>(),
);
