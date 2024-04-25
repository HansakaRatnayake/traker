import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordContextComponent } from './dashbord-context.component';

describe('DashbordContextComponent', () => {
  let component: DashbordContextComponent;
  let fixture: ComponentFixture<DashbordContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashbordContextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
