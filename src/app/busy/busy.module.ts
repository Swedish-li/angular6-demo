/**
 * @file Module: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import { CommonModule } from '@angular/common';
import { Compiler, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { BusyBackdropComponent } from './busy-backdrop.component';
import { BusyConfig } from './busy-config';
import { BusyComponent } from './busy.component';
import { BusyDirective } from './busy.directive';
import { BusyService } from './busy.service';

// Workaround for Compiler in AOT
// https://github.com/angular/angular/issues/15510#issuecomment-294301758
export function createJitCompiler() {
  return new JitCompilerFactory().createCompiler([{ useJit: true }]);
}

@NgModule({
  imports: [CommonModule],
  declarations: [BusyDirective, BusyComponent, BusyBackdropComponent],
  providers: [
    BusyService,
    { provide: Compiler, useFactory: createJitCompiler },
  ],
  exports: [BusyDirective],
  entryComponents: [BusyComponent, BusyBackdropComponent],
})
export class BusyModule {
  static forRoot(config: BusyConfig): ModuleWithProviders {
    return {
      ngModule: BusyModule,
      providers: [{ provide: BusyConfig, useValue: config }],
    };
  }
}
