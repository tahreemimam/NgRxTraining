import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncreement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName: string;
  channelName$: Observable<string>;
  constructor(private store: Store<{counter: CounterState}>){}
  ngOnInit(): void {
    // this.store.select('counter').subscribe(counter => {
    //   this.channelName = counter.channelName;
    // })

    // this.store.select(getChannelName).subscribe(channelName => {
    //   console.log('channel name Observable')
    //   this.channelName = channelName;
    // })

    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd() {
    //convert string to number before dispatching hence '+' symbol
    this.store.dispatch(customIncreement({count: +this.value}))
  }

  changeChannelName() {
    this.store.dispatch(changeChannelName())
  }
}
