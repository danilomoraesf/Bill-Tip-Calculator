import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bill-group',
  templateUrl: './bill-group.component.html',
  styleUrl: './bill-group.component.scss',
})
export class BillGroupComponent {
  @Input() billAmount: number = 0;

  @Output() billAmountChange = new EventEmitter<number>();

  onBillAmountChange() {
    this.billAmountChange.emit(this.billAmount);
  }

  constructor() {}

  onFocus() {
    if (this.billAmount === 0) {
      (this as any).billAmount = '';
    }
  }
}
