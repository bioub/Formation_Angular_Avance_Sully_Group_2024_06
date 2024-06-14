import { State } from "./interfaces";

export function todosSelector(state: State) {
  return state.todos.data;
}

export function todoInputValueSelector(state: State) {
  return state.todos.value;
}
