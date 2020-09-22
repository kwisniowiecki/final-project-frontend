import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBackpackComponent } from './about-backpack.component';

describe('AboutBackpackComponent', () => {
  let component: AboutBackpackComponent;
  let fixture: ComponentFixture<AboutBackpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBackpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
