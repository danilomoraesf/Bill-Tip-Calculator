import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGroupComponent } from './bill-group.component';

describe('BillGroupComponent', () => {
  let component: BillGroupComponent;
  let fixture: ComponentFixture<BillGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
