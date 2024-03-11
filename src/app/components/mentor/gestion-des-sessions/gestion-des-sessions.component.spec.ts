import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesSessionsComponent } from './gestion-des-sessions.component';

describe('GestionDesSessionsComponent', () => {
  let component: GestionDesSessionsComponent;
  let fixture: ComponentFixture<GestionDesSessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDesSessionsComponent]
    });
    fixture = TestBed.createComponent(GestionDesSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
