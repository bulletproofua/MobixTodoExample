import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todos } from '../../store/todos.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filters',
  styleUrls: ['./filters.component.scss'],
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  constructor(public todos: Todos) {}
}
