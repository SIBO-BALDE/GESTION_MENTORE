import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesMentoresComponent } from './gestion-des-mentores.component';

describe('GestionDesMentoresComponent', () => {
  let component: GestionDesMentoresComponent;
  let fixture: ComponentFixture<GestionDesMentoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDesMentoresComponent]
    });
    fixture = TestBed.createComponent(GestionDesMentoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
