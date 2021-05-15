import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellBoxComponent } from './cell-box.component';

describe('CellBoxComponent', () => {
  let component: CellBoxComponent;
  let fixture: ComponentFixture<CellBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CellBoxComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
