import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule } from './busy/busy.module';
import { MaterialModule } from './shared/material.module';

import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ja from '@angular/common/locales/ja';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AnimationCss3Component } from './page/animation/animation-css3/animation-css3.component';
import { AnimationNgComponent } from './page/animation/animation-ng/animation-ng.component';
import { EmbeddedSvgComponent } from './page/svg/embedded-svg/embedded-svg.component';
import { SvgDemo1Component } from './page/svg/svg-demo1/svg-demo1.component';
import { AppRoutingModule } from './router/app-routing.module';

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
    MaterialModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
