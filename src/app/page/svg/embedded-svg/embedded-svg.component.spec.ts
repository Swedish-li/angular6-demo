import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedSvgComponent } from './embedded-svg.component';

describe('EmbeddedSvgComponent', () => {
  let component: EmbeddedSvgComponent;
  let fixture: ComponentFixture<EmbeddedSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
