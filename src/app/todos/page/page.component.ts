import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { allCompleted } from '../todo.actions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass'],
})
export class PageComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  isCompleted: boolean = false;

  ngOnInit(): void {}

  markAllCompleted() {
    this.isCompleted = !this.isCompleted;
    this.store.dispatch(allCompleted({ completed: this.isCompleted }));
  }
}
