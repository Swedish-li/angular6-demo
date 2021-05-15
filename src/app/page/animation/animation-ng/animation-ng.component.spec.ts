import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule } from 'src/app/busy';
import { AnimationNgComponent } from './animation-ng.component';

describe('AnimationNgComponent', () => {
  let component: AnimationNgComponent;
  let fixture: ComponentFixture<AnimationNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationNgComponent],
      imports: [BusyModule, BrowserAnimationsModule],
    }).compileComponents();
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
