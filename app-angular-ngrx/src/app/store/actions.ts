import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Todos Component] Add Todo', props<{ payload: string }>())
export const updateTodoValue = createAction('[Todos Component] Update Todo Value', props<{ payload: string }>())
