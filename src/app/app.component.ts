import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Todos } from './store/todos.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(public todos: Todos) {}

  addTodo() {
      this.todos.addTodo({ title: this.title });
      this.title = '';
  }
}
