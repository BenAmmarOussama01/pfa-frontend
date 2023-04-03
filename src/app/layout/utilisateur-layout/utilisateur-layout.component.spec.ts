import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurLayoutComponent } from './utilisateur-layout.component';

describe('UtilisateurLayoutComponent', () => {
  let component: UtilisateurLayoutComponent;
  let fixture: ComponentFixture<UtilisateurLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
