import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
