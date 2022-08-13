import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { filterTypes } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  todos: Todo[] = [];
  filterCurrent: filterTypes = 'all';
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      // .select('todos')
      .subscribe({
        next: ({ todos, filter }) => {
          this.todos = todos;
          this.filterCurrent = filter;
        },
      });
  }
}
