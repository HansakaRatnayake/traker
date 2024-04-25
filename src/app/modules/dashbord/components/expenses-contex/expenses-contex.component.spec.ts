import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesContexComponent } from './expenses-contex.component';

describe('ExpensesContexComponent', () => {
  let component: ExpensesContexComponent;
  let fixture: ComponentFixture<ExpensesContexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesContexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpensesContexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
