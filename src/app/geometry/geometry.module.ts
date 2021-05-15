import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../shared/material.module';

import { KatexModule } from 'ng-katex';
import { CellBoxComponent } from '../component/cell-box/cell-box.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeometryHomeComponent } from './geometry-home/geometry-home.component';
import { GeometryRoutingModule } from './geometry-routing.module';
import { LaTexComponent } from './la-tex/la-tex.component';

@NgModule({
  imports: [CommonModule, GeometryRoutingModule, KatexModule, MaterialModule],
  declarations: [
    Chapter1Component,
    Chapter2Component,
    GeometryHomeComponent,
    DashboardComponent,
    LaTexComponent,
    CellBoxComponent,
  ],
})
export class GeometryModule {}
