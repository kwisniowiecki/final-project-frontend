import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureListItemComponent } from './adventure-list-item.component';

describe('AdventureListItemComponent', () => {
  let component: AdventureListItemComponent;
  let fixture: ComponentFixture<AdventureListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
