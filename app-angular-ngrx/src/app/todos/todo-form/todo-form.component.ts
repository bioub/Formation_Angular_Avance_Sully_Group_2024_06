import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {

  @Output()
  public onAddTodo = new EventEmitter<string>();

  @Output()
  public onEditTodo = new EventEmitter<string>();

  @Input() public todo: string;

  public addTodo() {
    this.onAddTodo.emit(this.todo);
  }

  public editTodo(value: string) {
    this.todo = value
    this.onEditTodo.emit(value);
  }
}
