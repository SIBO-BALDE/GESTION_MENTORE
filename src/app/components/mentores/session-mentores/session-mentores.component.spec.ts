import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionMentoresComponent } from './session-mentores.component';

describe('SessionMentoresComponent', () => {
  let component: SessionMentoresComponent;
  let fixture: ComponentFixture<SessionMentoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionMentoresComponent]
    });
    fixture = TestBed.createComponent(SessionMentoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
