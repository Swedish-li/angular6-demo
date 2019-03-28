import { MaterialModule } from './shared/material.module';
import { BusyModule } from './busy/busy.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgZorroAntdModule, NZ_I18N, ja_JP } from 'ng-zorro-antd';
import {
  registerLocaleData,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import ja from '@angular/common/locales/ja';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './router/app-routing.module';
import { AnimationNgComponent } from './page/animation/animation-ng/animation-ng.component';
import { AnimationCss3Component } from './page/animation/animation-css3/animation-css3.component';
import { SvgDemo1Component } from './page/svg/svg-demo1/svg-demo1.component';
import { EmbeddedSvgComponent } from './page/svg/embedded-svg/embedded-svg.component';


registerLocaleData(ja);

/**
 * app core module
 */
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AnimationNgComponent,
    AnimationCss3Component,
    SvgDemo1Component,
    EmbeddedSvgComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BusyModule,
    MaterialModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
