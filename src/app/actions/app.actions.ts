import { createAction, props } from '@ngrx/store';
import { theme } from '../types/theme';

export const setTheme = createAction(
  '[SETTINGS] set theme',
  props<{ theme: theme }>(),
);
