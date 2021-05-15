import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationCss3Component } from './animation-css3.component';

describe('AnimationCss3Component', () => {
  let component: AnimationCss3Component;
  let fixture: ComponentFixture<AnimationCss3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationCss3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationCss3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
