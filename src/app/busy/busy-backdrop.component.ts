/**
 * @file Component: BusyBackdrop
 * @author yumao<yuzhang.lille@gmail.com>
 */

import {
  animate,
  // state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

import { PromiseTrackerService } from './promise-tracker.service';

const inactiveStyle = style({
  opacity: 0,
});
const timing = '.3s ease';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ng-busy-backdrop',
  template: `
    <div class="ng-busy-backdrop" @fadeInOut *ngIf="isActive()"></div>
  `,
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [inactiveStyle, animate(timing)]),
      transition('* => void', [animate(timing, inactiveStyle)]),
    ]),
  ],
})
export class BusyBackdropComponent {
  constructor(private tracker: PromiseTrackerService) {}

  isActive() {
    return this.tracker.isActive();
  }
}
