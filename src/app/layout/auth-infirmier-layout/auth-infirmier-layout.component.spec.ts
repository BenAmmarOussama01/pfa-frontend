import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthInfirmierLayoutComponent } from './auth-infirmier-layout.component';

describe('AuthInfirmierLayoutComponent', () => {
  let component: AuthInfirmierLayoutComponent;
  let fixture: ComponentFixture<AuthInfirmierLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthInfirmierLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthInfirmierLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
