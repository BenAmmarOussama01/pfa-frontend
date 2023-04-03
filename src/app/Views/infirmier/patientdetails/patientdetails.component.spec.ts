import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdetailsComponent } from './patientdetails.component';

describe('PatientdetailsComponent', () => {
  let component: PatientdetailsComponent;
  let fixture: ComponentFixture<PatientdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
