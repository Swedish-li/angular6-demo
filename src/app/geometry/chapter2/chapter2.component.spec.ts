import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CellBoxComponent } from 'src/app/component/cell-box/cell-box.component';
import { MaterialModule } from 'src/app/shared/material.module';

import { Chapter2Component } from './chapter2.component';

describe('Chapter2Component', () => {
  let component: Chapter2Component;
  let fixture: ComponentFixture<Chapter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Chapter2Component, CellBoxComponent],
      imports: [MaterialModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
