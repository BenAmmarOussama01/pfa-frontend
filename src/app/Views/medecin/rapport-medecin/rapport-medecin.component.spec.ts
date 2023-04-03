import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportMedecinComponent } from './rapport-medecin.component';

describe('RapportMedecinComponent', () => {
  let component: RapportMedecinComponent;
  let fixture: ComponentFixture<RapportMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportMedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
