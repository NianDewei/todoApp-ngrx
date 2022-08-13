import { createAction, props } from '@ngrx/store';

export type filterTypes = 'all' | 'active' | 'completed';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: filterTypes }>()
);
