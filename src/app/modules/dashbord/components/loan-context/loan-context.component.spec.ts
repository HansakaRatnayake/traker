import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanContextComponent } from './loan-context.component';

describe('LoanContextComponent', () => {
  let component: LoanContextComponent;
  let fixture: ComponentFixture<LoanContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanContextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
