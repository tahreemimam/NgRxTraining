import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  @Output() increement = new EventEmitter<void>();
  @Output() decreement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
  constructor() { }

  onIncreement() {
    this.increement.emit();
  }
  onDecreement() {
    this.decreement.emit();
  }
  onReset() {
    this.reset.emit();
  }
}
