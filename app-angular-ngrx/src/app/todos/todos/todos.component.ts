import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, updateTodoValue } from 'src/app/store/actions';
import { todoInputValueSelector, todosSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  // public todos = ['Item 1', 'Item 2', 'Item 3'];
  todos$: Observable<string[]>;
  inputValue$: Observable<string>;

  handleEditTodo(todo) {
    this.store.dispatch(updateTodoValue({payload: todo}))
  }

  public handleNewTodo(todo) {
    this.store.dispatch(addTodo({payload: todo}))
    // this.todos = [todo, ...this.todos];
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(todosSelector);
    this.inputValue$ = this.store.select(todoInputValueSelector);
  }
}
