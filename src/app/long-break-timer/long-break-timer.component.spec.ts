import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongBreakTimerComponent } from './long-break-timer.component';

describe('LongBreakTimerComponent', () => {
  let component: LongBreakTimerComponent;
  let fixture: ComponentFixture<LongBreakTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongBreakTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongBreakTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
