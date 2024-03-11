import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMentorComponent } from './main-mentor.component';

describe('MainMentorComponent', () => {
  let component: MainMentorComponent;
  let fixture: ComponentFixture<MainMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMentorComponent]
    });
    fixture = TestBed.createComponent(MainMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
