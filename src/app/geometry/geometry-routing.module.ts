import { DashboardComponent } from './dashboard/dashboard.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { GeometryHomeComponent } from './geometry-home/geometry-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GeometryHomeComponent,
    // children: [
     
    // ]
  },
  { path: 'chapter1', component: Chapter1Component },
  { path: 'chapter2', component: Chapter2Component },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeometryRoutingModule {}
