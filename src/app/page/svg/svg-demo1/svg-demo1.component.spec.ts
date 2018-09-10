import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDemo1Component } from './svg-demo1.component';

describe('SvgDemo1Component', () => {
  let component: SvgDemo1Component;
  let fixture: ComponentFixture<SvgDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
