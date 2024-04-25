import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpencesComponent } from './new-expences.component';

describe('NewExpencesComponent', () => {
  let component: NewExpencesComponent;
  let fixture: ComponentFixture<NewExpencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewExpencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
