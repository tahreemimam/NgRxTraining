import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreement, increement, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  constructor(private store: Store<AppState>) { }

  onIncreement() {
    this.store.dispatch(increement());
  }
  onDecreement() {
    this.store.dispatch(decreement())
  }
  onReset() {
    this.store.dispatch(reset())
  }
}
