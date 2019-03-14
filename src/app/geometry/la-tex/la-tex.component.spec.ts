import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaTexComponent } from './la-tex.component';

describe('LaTexComponent', () => {
  let component: LaTexComponent;
  let fixture: ComponentFixture<LaTexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaTexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaTexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
