import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KatexModule } from 'ng-katex';
import { MaterialModule } from './../../shared/material.module';

import { LaTexComponent } from './la-tex.component';

describe('LaTexComponent', () => {
  let component: LaTexComponent;
  let fixture: ComponentFixture<LaTexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaTexComponent],
      imports: [MaterialModule, KatexModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaTexComponent);
    fixture.componentRef.instance.laTex = {
      title: 'test',
      desc: 'test-desc',
      eq: 'a',
    };
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
