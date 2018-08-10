import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Todos } from '../../store/todos.store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-section',
  styleUrls: ['./section.component.scss'],
  templateUrl: './section.component.html'
})
export class SectionComponent {
  constructor(public todos: Todos) {}
}
