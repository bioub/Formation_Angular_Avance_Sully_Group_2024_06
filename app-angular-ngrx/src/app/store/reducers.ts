import { createReducer, on } from '@ngrx/store';
import { addTodo, updateTodoValue } from './actions';
import { TodosState } from './interfaces';

export const initialState: TodosState = {
  data: ['Item 1', 'Item 2', 'Item 3'],
  value: '',
};

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, action) => {
    return {
      ...state,
      value: '',
      data: [...state.data, action.payload],
    };
  }),
  on(updateTodoValue, (state, action) => {
    return {
      ...state,
      value: action.payload
    };
  })
);
