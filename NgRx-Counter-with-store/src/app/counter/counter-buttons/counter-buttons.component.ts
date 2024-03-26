import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreement, increement, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  constructor(private store: Store<{counter: {counter: number}}>) { }

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
