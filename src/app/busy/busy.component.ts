/**
 * @file Component: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import { animate, style, transition, trigger } from '@angular/animations';
import {
  Compiler,
  Component,
  DoCheck,
  NgModule,
  NgModuleFactory,
  OnDestroy,
} from '@angular/core';

import { PromiseTrackerService } from './promise-tracker.service';

const inactiveStyle = style({
  opacity: 0,
  transform: 'translateY(-40px)',
});
const timing = '.3s ease';

export interface IBusyContext {
  message: string;
}

// https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ng-busy',
  template: `
    <div [class]="wrapperClass" *ngIf="isActive()" @flyInOut>
      <ng-container
        *ngComponentOutlet="TemplateComponent; ngModuleFactory: nmf"
      >
      </ng-container>
    </div>
  `,
  animations: [
    trigger('flyInOut', [
      transition('void => *', [inactiveStyle, animate(timing)]),
      transition('* => void', [animate(timing, inactiveStyle)]),
    ]),
  ],
})
export class BusyComponent implements DoCheck, OnDestroy {
  TemplateComponent: any;
  nmf: NgModuleFactory<any>;
  wrapperClass: string;
  template: string;
  message: string;
  private lastMessage: string;

  constructor(
    private tracker: PromiseTrackerService,
    private compiler: Compiler
  ) {}

  ngDoCheck() {
    if (this.message === this.lastMessage) {
      return;
    }
    this.lastMessage = this.message;
    this.clearDynamicTemplateCache();
    this.createDynamicTemplate();
  }

  ngOnDestroy(): void {
    this.clearDynamicTemplateCache();
  }
  // 根据属性 template,message 动态生成模板
  // https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e
  createDynamicTemplate() {
    const { template, message } = this;

    @Component({ template })
    class TemplateComponent {
      message: string = message;
    }

    @NgModule({
      declarations: [TemplateComponent],
      entryComponents: [TemplateComponent],
    })
    class TemplateModule {}

    this.TemplateComponent = TemplateComponent;
    this.nmf = this.compiler.compileModuleSync(TemplateModule);
  }

  clearDynamicTemplateCache() {
    if (!this.nmf) {
      return;
    }

    this.compiler.clearCacheFor(this.nmf.moduleType);
    this.nmf = null;
  }

  isActive() {
    return this.tracker.isActive();
  }
}
