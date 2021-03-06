import { APP_BASE_HREF } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BusyModule } from './busy';
import { MenuComponent } from './component/menu/menu.component';
import { AnimationCss3Component } from './page/animation/animation-css3/animation-css3.component';
import { AnimationNgComponent } from './page/animation/animation-ng/animation-ng.component';
import { EmbeddedSvgComponent } from './page/svg/embedded-svg/embedded-svg.component';
import { SvgDemo1Component } from './page/svg/svg-demo1/svg-demo1.component';
import { AppRoutingModule } from './router/app-routing.module';
import { MaterialModule } from './shared/material.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        AnimationNgComponent,
        AnimationCss3Component,
        SvgDemo1Component,
        EmbeddedSvgComponent,
      ],
      imports: [
        AppRoutingModule,
        BusyModule,
        BrowserAnimationsModule,
        MaterialModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular demo');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain(
      'angular demo'
    );

    fixture.componentInstance.title = 'angular2';
    fixture.detectChanges();
    expect(compiled.querySelector('.title').textContent).toContain('angular2');
  }));
});
