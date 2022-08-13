import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  allCompleted,
  create,
  edit,
  remove,
  removeCompleted,
  toggle,
} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Love and love'),
  new Todo('All the love of world'),
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => changeIfCompleted(state, id)),
  on(edit, (state, { id, text }) => editTodoText(state, { id, text })),
  on(remove, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(allCompleted, (state, { completed }) =>
    allTodoCompleted(state, completed)
  ),
  on(removeCompleted, (state) => state.filter((todo) => !todo.completed))
);

const allTodoCompleted = (state: Todo[], completed: boolean): Todo[] => {
  // const options =
  const newState = state.map((todoCurrent) => {
    // const IfIsEqueal = todoCurrent.completed === completed;

    // return IfIsEqueal
    // ? todoCurrent //return
    // : { ...todoCurrent, completed: value }; //change status to completed
    return { ...todoCurrent, completed };
  });

  return newState;
};

const changeIfCompleted = (state: Todo[], id: number): Todo[] => {
  const newState = state.map((todoCurrent) => {
    const IfNotExistId = todoCurrent.id !== id;

    return IfNotExistId
      ? todoCurrent //return
      : { ...todoCurrent, completed: !todoCurrent.completed }; //change status to completed
  });

  return newState;
};

const editTodoText = (
  state: Todo[],
  { id, text }: { id: number; text: string }
): Todo[] => {
  const newState = state.map((todoCurrent) => {
    const IfNotExistId = todoCurrent.id !== id;

    return IfNotExistId
      ? todoCurrent //return
      : { ...todoCurrent, text }; //change text
  });

  return newState;
};

// const removeTodo = (state: Todo[], id: number): Todo[] => {
//   const newState = state.filter((todoCurrent) => todoCurrent.id !== id);
//   return newState;

//   // state.filter((todo) => todo.id !== id);
// };
