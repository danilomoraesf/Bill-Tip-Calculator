import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-tip',
  templateUrl: './select-tip.component.html',
  styleUrl: './select-tip.component.scss',
})
export class SelectTipComponent {
  @Output() tipSelected: EventEmitter<number> = new EventEmitter<number>();

  selectedTip: number = 0;
  selectTip(tip: number) {
    this.tipSelected.emit(tip);
  }
}
