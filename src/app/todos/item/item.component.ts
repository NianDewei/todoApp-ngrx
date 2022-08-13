import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';

import { FormControl, Validators } from '@angular/forms';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputSelected') textInpuntSelected!: ElementRef;

  chkCompleted!: FormControl;
  textInpunt!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {
    this.todo = new Todo('');
  }

  ngOnInit(): void {
    this.chkCompleted = new FormControl<boolean>(this.todo.completed);
    this.textInpunt = new FormControl<string>(
      this.todo.text,
      Validators.required
    );

    this.chkCompleted.valueChanges.subscribe({
      next: (isChecked) =>
        this.store.dispatch(actions.toggle({ id: this.todo.id })),
    });
  }

  edit() {
    this.editing = true;
    // this.textInpunt.setValue(this.todo.text);
    setTimeout(() => {
      this.textInpuntSelected.nativeElement.select();
    }, 300);
  }

  finishedEdit() {
    this.editing = false;

    const { id } = this.todo;
    const text = this.textInpuntSelected.nativeElement.value;

    if (this.textInpunt.invalid) return;
    if (this.textInpunt.value === this.todo.text) return;

    this.store.dispatch(actions.edit({ id, text }));
  }

  delete() {
    this.store.dispatch(actions.remove({ id: this.todo.id }));
  }
}
