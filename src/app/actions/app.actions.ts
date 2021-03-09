import { createAction, props } from '@ngrx/store';
import { theme } from '../types/theme';

export enum AppActionTypes {
  setNewTheme = '[Settings] Set New Theme',
}

export const setNewTheme = createAction(
  AppActionTypes.setNewTheme,
  props<{ newTheme: theme }>(),
);
