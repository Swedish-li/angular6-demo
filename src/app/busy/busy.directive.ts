/**
 * @file Directive: Busy
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  DoCheck,
  Injector,
  Input,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { BusyBackdropComponent } from './busy-backdrop.component';
import { IBusyConfig } from './busy-config';
import { BusyComponent } from './busy.component';
import { BusyService } from './busy.service';
import { PromiseTrackerService } from './promise-tracker.service';
import { equals } from './util';

/**
 * ### Syntax
 *
 * - `<div [ngBusy]="busy">...</div>`
 * - `<div [ngBusy]="[busyA, busyB, busyC]">...</div>`
 * - `<div [ngBusy]="{busy: busy, message: 'Loading...', backdrop: false, delay: 200, minDuration: 600}">...</div>`
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngBusy]',
  providers: [PromiseTrackerService],
})
export class BusyDirective implements DoCheck, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('ngBusy') options: any;
  private optionsRecord: any;
  private optionsNorm: IBusyConfig;
  template: string;
  backdrop: boolean;
  private busyRef: ComponentRef<BusyComponent>;
  private backdropRef: ComponentRef<BusyBackdropComponent>;

  constructor(
    private service: BusyService,
    private tracker: PromiseTrackerService,
    private cfResolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef,
    private injector: Injector
  ) {}

  private normalizeOptions(options: any) {
    if (!options) {
      options = { busy: null };
    } else if (
      Array.isArray(options) ||
      options instanceof Promise ||
      options instanceof Subscription
    ) {
      options = { busy: options };
    }
    options = { ...this.service.config, ...options };
    if (!Array.isArray(options.busy)) {
      options.busy = [options.busy];
    }

    return options;
  }

  private dectectOptionsChange() {
    if (equals(this.optionsNorm, this.optionsRecord)) {
      return false;
    }
    this.optionsRecord = this.optionsNorm;
    return true;
  }

  // As ngOnChanges does not work on Object detection, ngDoCheck is using
  ngDoCheck() {
    const options = (this.optionsNorm = this.normalizeOptions(this.options));

    if (!this.dectectOptionsChange()) {
      return;
    }

    if (this.busyRef) {
      this.busyRef.instance.message = options.message;
    }

    // tslint:disable-next-line: no-unused-expression
    !equals(options.busy, this.tracker.promiseList) &&
      this.tracker.reset({
        promiseList: options.busy,
        delay: options.delay,
        minDuration: options.minDuration,
      });

    if (
      !this.busyRef ||
      this.template !== options.template ||
      this.backdrop !== options.backdrop
    ) {
      this.destroyComponents();

      this.template = options.template;
      this.backdrop = options.backdrop;

      // tslint:disable-next-line: no-unused-expression
      options.backdrop && this.createBackdrop();

      this.createBusy();
    }
  }

  ngOnDestroy() {
    this.destroyComponents();
  }

  private destroyComponents() {
    // tslint:disable-next-line: no-unused-expression
    this.busyRef && this.busyRef.destroy();
    // tslint:disable-next-line: no-unused-expression
    this.backdropRef && this.backdropRef.destroy();
  }

  private createBackdrop() {
    const backdropFactory = this.cfResolver.resolveComponentFactory(
      BusyBackdropComponent
    );
    this.backdropRef = this.vcRef.createComponent(
      backdropFactory,
      null,
      this.injector
    );
  }

  private createBusy() {
    const busyFactory = this.cfResolver.resolveComponentFactory(BusyComponent);
    this.busyRef = this.vcRef.createComponent(busyFactory, null, this.injector);

    const { message, wrapperClass, template } = this.optionsNorm;
    const instance = this.busyRef.instance;
    instance.message = message;
    instance.wrapperClass = wrapperClass;
    instance.template = template;
  }
}
