import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteBackComponent } from './invite-back.component';

describe('InviteBackComponent', () => {
  let component: InviteBackComponent;
  let fixture: ComponentFixture<InviteBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
