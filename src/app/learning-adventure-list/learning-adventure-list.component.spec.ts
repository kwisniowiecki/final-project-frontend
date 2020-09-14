import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAdventureListComponent } from './learning-adventure-list.component';

describe('LearningAdventureListComponent', () => {
  let component: LearningAdventureListComponent;
  let fixture: ComponentFixture<LearningAdventureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningAdventureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningAdventureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
