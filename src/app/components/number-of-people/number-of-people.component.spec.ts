import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfPeopleComponent } from './number-of-people.component';

describe('NumberOfPeopleComponent', () => {
  let component: NumberOfPeopleComponent;
  let fixture: ComponentFixture<NumberOfPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberOfPeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberOfPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
