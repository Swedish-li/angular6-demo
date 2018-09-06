import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationCss3Component } from '../page/animation/animation-css3/animation-css3.component';
import { AnimationNgComponent } from '../page/animation/animation-ng/animation-ng.component';
import { SvgDemo1Component } from '../svg/svg-demo1/svg-demo1.component';


const routes: Routes = [
  { path: '', redirectTo: 'animation-css3', pathMatch: 'full' },
  { path: 'animation-css3', component: AnimationCss3Component },
  { path: 'animation-ng', component: AnimationNgComponent },
  { path: 'svg-demo1', component: SvgDemo1Component }
];


/**
 * app routing module
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
