import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMentorComponent } from './sidebar-mentor.component';

describe('SidebarMentorComponent', () => {
  let component: SidebarMentorComponent;
  let fixture: ComponentFixture<SidebarMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarMentorComponent]
    });
    fixture = TestBed.createComponent(SidebarMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
