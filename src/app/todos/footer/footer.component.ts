import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterTypes } from 'src/app/filter/filter.actions';
import { setFilter } from '../../filter/filter.actions';
import { removeCompleted } from '../todo.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  filterCurrent: filterTypes = 'all';
  filters: filterTypes[] = ['all', 'active', 'completed'];
  slopes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe({
      next: ({ filter, todos }) => {
        this.filterCurrent = filter;
        this.slopes = todos.filter((todo) => !todo.completed).length;
      },
    });
  }

  // methods

  changeFilter(filter: filterTypes) {
    // console.log(typeof filter);
    this.store.dispatch(setFilter({ filter }));
  }

  removeCompleted() {
    this.store.dispatch(removeCompleted());
  }
}
