import { createAction, props } from '@ngrx/store';
import { theme } from '../shared/types/theme';

export const setTheme = createAction(
  '[SETTINGS] set theme',
  props<{ theme: theme }>(),
);
