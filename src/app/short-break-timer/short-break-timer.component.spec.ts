import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBreakTimerComponent } from './short-break-timer.component';

describe('ShortBreakTimerComponent', () => {
  let component: ShortBreakTimerComponent;
  let fixture: ComponentFixture<ShortBreakTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortBreakTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBreakTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
