import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-reset',
  templateUrl: './button-reset.component.html',
  styleUrl: './button-reset.component.scss',
})
export class ButtonResetComponent {
  @Output() resetRequested: EventEmitter<void> = new EventEmitter();
  resetApp() {
    this.resetRequested.emit();
  }
}
