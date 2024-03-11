import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMentorComponent } from './header-mentor.component';

describe('HeaderMentorComponent', () => {
  let component: HeaderMentorComponent;
  let fixture: ComponentFixture<HeaderMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMentorComponent]
    });
    fixture = TestBed.createComponent(HeaderMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
