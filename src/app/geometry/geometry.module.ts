import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeometryRoutingModule } from './geometry-routing.module';
import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { GeometryHomeComponent } from './geometry-home/geometry-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, GeometryRoutingModule],
  declarations: [
    Chapter1Component,
    Chapter2Component,
    GeometryHomeComponent,
    DashboardComponent
  ]
})
export class GeometryModule {}
