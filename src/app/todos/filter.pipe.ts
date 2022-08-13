import { Pipe, PipeTransform } from '@angular/core';
import { filterTypes } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: filterTypes): Todo[] {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
        break;

      case 'completed':
        return todos.filter((todo) => todo.completed);
        break;

      default:
        return todos;
        break;
    }
  }
}
