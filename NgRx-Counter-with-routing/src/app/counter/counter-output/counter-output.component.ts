import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit,OnDestroy {
  counter: number = 0;
  // counter$: Observable<CounterState>;
  counter$: Observable<number>;
  counterSubscription: Subscription = new Subscription;
  constructor(private store: Store<AppState>) { }
  ngOnDestroy(): void {
    // if(this.counterSubscription){
    //   this.counterSubscription.unsubscribe();
    // }
  }
  ngOnInit(): void {
    // this.counterSubscription = this.store.select(getCounter).subscribe(data => {
    //   console.log('counter Observable')
    //   this.counter = data
    // })

    // this.counter$ = this.store.select('counter');

    this.counter$ = this.store.select(getCounter);
  }
}
