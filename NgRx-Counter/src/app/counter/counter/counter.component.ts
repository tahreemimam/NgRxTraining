import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter:number = 0;
  constructor(){}

  onIncreement(){
    this.counter++;
  }

  onDecreement(){
    this.counter--;
  }

  onReset(){
    this.counter = 0;
  }

}
