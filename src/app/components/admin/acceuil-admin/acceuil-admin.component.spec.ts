import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilAdminComponent } from './acceuil-admin.component';

describe('AcceuilAdminComponent', () => {
  let component: AcceuilAdminComponent;
  let fixture: ComponentFixture<AcceuilAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilAdminComponent]
    });
    fixture = TestBed.createComponent(AcceuilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
