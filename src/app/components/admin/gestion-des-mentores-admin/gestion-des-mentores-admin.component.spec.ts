import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesMentoresAdminComponent } from './gestion-des-mentores-admin.component';

describe('GestionDesMentoresAdminComponent', () => {
  let component: GestionDesMentoresAdminComponent;
  let fixture: ComponentFixture<GestionDesMentoresAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDesMentoresAdminComponent]
    });
    fixture = TestBed.createComponent(GestionDesMentoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
