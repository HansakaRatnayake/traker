import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordDefaultComponent } from './dashbord-default.component';

describe('DashbordDefaultComponent', () => {
  let component: DashbordDefaultComponent;
  let fixture: ComponentFixture<DashbordDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashbordDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
