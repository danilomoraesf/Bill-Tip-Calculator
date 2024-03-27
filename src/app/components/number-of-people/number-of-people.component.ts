import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-of-people',
  templateUrl: './number-of-people.component.html',
  styleUrl: './number-of-people.component.scss',
})
export class NumberOfPeopleComponent {
  @Input() numberOfPeople: number = 1;
  @Output() numberOfPeopleChange = new EventEmitter<number>();
  onNumberOfPeopleChange() {
    this.numberOfPeopleChange.emit(this.numberOfPeople);
  }
}
