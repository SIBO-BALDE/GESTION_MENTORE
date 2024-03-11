import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilMentorComponent } from './acceuil-mentor.component';

describe('AcceuilMentorComponent', () => {
  let component: AcceuilMentorComponent;
  let fixture: ComponentFixture<AcceuilMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilMentorComponent]
    });
    fixture = TestBed.createComponent(AcceuilMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
