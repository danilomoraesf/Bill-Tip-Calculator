import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'automatizai-test';
  selectedTip: number = 0;
  billAmount: number = 0;
  numberOfPeople: number = 1;
  tipAmountPerPerson: number = 0;
  totalPerPerson: number = 0;

  onBillAmountChange(amount: number) {
    this.billAmount = amount;
    this.calculateResults();
  }

  onTipSelected(tip: number) {
    console.log(`Tip selected: ${tip}`);
    this.selectedTip = tip;
    this.calculateResults();
  }

  onNumberOfPeopleChange(people: number) {
    this.numberOfPeople = people;
    this.calculateResults();
  }

  calculateResults() {
    if (this.numberOfPeople === 0) {
      return;
    }
    const totalTip = this.billAmount * this.selectedTip;
    this.tipAmountPerPerson = totalTip / this.numberOfPeople;
    this.totalPerPerson = (this.billAmount + totalTip) / this.numberOfPeople;
    console.log(this.tipAmountPerPerson, this.totalPerPerson);
  }

  resetApp() {
    this.billAmount = 0;
    this.selectedTip = 0; // Ou o valor padrão inicial de gorjeta, se houver.
    this.numberOfPeople = 1; // Reseta para 1 ou o número padrão de pessoas.
    this.tipAmountPerPerson = 0;
    this.totalPerPerson = 0;
    // Você pode adicionar aqui qualquer outro estado que precise ser resetado.
  }
}
