import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesMentorComponent } from './gestion-des-mentor.component';

describe('GestionDesMentorComponent', () => {
  let component: GestionDesMentorComponent;
  let fixture: ComponentFixture<GestionDesMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDesMentorComponent]
    });
    fixture = TestBed.createComponent(GestionDesMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
