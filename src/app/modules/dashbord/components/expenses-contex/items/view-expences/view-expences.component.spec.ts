import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpencesComponent } from './view-expences.component';

describe('ViewExpencesComponent', () => {
  let component: ViewExpencesComponent;
  let fixture: ComponentFixture<ViewExpencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewExpencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExpencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
