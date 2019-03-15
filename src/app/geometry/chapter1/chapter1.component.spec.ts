import { KatexModule } from 'ng-katex';
import { MaterialModule } from './../../shared/material.module';
import { LaTexComponent } from './../la-tex/la-tex.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter1Component } from './chapter1.component';

describe('Chapter1Component', () => {
  let component: Chapter1Component;
  let fixture: ComponentFixture<Chapter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter1Component, LaTexComponent],
      imports: [MaterialModule, KatexModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
