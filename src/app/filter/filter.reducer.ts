import { createReducer, on } from '@ngrx/store';

import { setFilter, filterTypes } from './filter.actions';

let filterCurrent = 'all' as filterTypes;

export const initialState: filterTypes = filterCurrent;

export const filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);
