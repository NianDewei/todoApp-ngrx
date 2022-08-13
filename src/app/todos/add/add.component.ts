import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { create } from '../todo.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass'],
})
export class AddComponent implements OnInit {
  textInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  addTodo() {
    if (this.textInput.invalid) return;

    const nameTodo = this.textInput;
    this.store.dispatch(create({ text: nameTodo.value }));

    // clear input
    nameTodo.reset();
  }
}
