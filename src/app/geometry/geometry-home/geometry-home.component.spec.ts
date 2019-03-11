import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryHomeComponent } from './geometry-home.component';

describe('GeometryHomeComponent', () => {
  let component: GeometryHomeComponent;
  let fixture: ComponentFixture<GeometryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
