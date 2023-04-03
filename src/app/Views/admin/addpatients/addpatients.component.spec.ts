import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpatientsComponent } from './addpatients.component';

describe('AddpatientsComponent', () => {
  let component: AddpatientsComponent;
  let fixture: ComponentFixture<AddpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
