import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMedecinLayoutComponent } from './auth-medecin-layout.component';

describe('AuthMedecinLayoutComponent', () => {
  let component: AuthMedecinLayoutComponent;
  let fixture: ComponentFixture<AuthMedecinLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthMedecinLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthMedecinLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
