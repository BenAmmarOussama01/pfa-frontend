import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmierLayoutComponent } from './infirmier-layout.component';

describe('InfirmierLayoutComponent', () => {
  let component: InfirmierLayoutComponent;
  let fixture: ComponentFixture<InfirmierLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmierLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfirmierLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
