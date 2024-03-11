import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionLegalComponent } from './mention-legal.component';

describe('MentionLegalComponent', () => {
  let component: MentionLegalComponent;
  let fixture: ComponentFixture<MentionLegalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentionLegalComponent]
    });
    fixture = TestBed.createComponent(MentionLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
