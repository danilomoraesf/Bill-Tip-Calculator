import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-result',
  templateUrl: './account-result.component.html',
  styleUrl: './account-result.component.scss',
})
export class AccountResultComponent {
  @Input() tipAmountPerPerson: number = 0;
  @Input() totalPerPerson: number = 0;

  calculateResults(
    billAmount: number,
    selectedTip: number,
    numberOfPeople: number
  ): void {
    const tipTotal = billAmount * selectedTip;
    this.tipAmountPerPerson = tipTotal / numberOfPeople;
    this.totalPerPerson = (billAmount + tipTotal) / numberOfPeople;
  }
}
