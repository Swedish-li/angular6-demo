import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationNgComponent } from './animation-ng.component';

describe('AnimationNgComponent', () => {
  let component: AnimationNgComponent;
  let fixture: ComponentFixture<AnimationNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
