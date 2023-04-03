import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMedecinComponent } from './dashboard-medecin.component';

describe('DashboardMedecinComponent', () => {
  let component: DashboardMedecinComponent;
  let fixture: ComponentFixture<DashboardMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
