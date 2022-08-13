import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO]  Toggle todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO]  Edit todo',
  props<{ id: number; text: string }>()
);

export const allCompleted = createAction(
  '[TODO] All Completed todo',
  props<{ completed: boolean }>()
);

export const remove = createAction(
  '[TODO] Remove todo',
  props<{ id: number }>()
);

export const removeCompleted = createAction('[TODO] Remove todo');
