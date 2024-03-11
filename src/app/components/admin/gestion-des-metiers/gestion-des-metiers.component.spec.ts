import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesMetiersComponent } from './gestion-des-metiers.component';

describe('GestionDesMetiersComponent', () => {
  let component: GestionDesMetiersComponent;
  let fixture: ComponentFixture<GestionDesMetiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDesMetiersComponent]
    });
    fixture = TestBed.createComponent(GestionDesMetiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
