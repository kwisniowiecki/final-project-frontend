import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogBackpackComponent } from './backlog-backpack.component';

describe('BacklogBackpackComponent', () => {
  let component: BacklogBackpackComponent;
  let fixture: ComponentFixture<BacklogBackpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklogBackpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogBackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
