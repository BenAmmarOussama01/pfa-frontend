import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfirmierComponent } from './dashboard-infirmier.component';

describe('DashboardInfirmierComponent', () => {
  let component: DashboardInfirmierComponent;
  let fixture: ComponentFixture<DashboardInfirmierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInfirmierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInfirmierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
