import { createAction, props } from '@ngrx/store';
import { TTheme } from '../types/TTheme';

export enum AppActionTypes {
  setNewTheme = '[Settings] Set New Theme',
}

export const setNewTheme = createAction(
  AppActionTypes.setNewTheme,
  props<{ newTheme: TTheme }>(),
);
