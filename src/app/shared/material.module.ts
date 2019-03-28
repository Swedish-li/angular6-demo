import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
