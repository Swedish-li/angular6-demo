import { Subscription,Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { btnState, btnInlineState, flyInOut, shrinkOut } from '../../../animate';

@Component({
  selector: 'app-animation-ng',
  templateUrl: './animation-ng.component.html',
  styleUrls: ['./animation-ng.component.scss'],
  animations: [btnState, btnInlineState, flyInOut, shrinkOut]
})
export class AnimationNgComponent implements OnInit {


  /**
   * Btn state of animation AnimationNg component
   */
  btnState: string;


  /**
   * show of animation AnimationNg component
   */
  show: boolean;

  busy: Subscription;

  subject: Subject<string>;



   /**
   * Creates an instance of AnimationNg component.
   */
  constructor() {
    this.btnState = 'inactive';
    this.show = true;
  }

  ngOnInit() {
    this.subject = new Subject();
    this.busy = this.subject.subscribe(str => {
      console.log(str)
    });
    setTimeout(() => {
      this.subject.next('1s next');
    }, 1000);
  }

  btnToggle() {
    this.btnState = this.btnState === 'active' ? 'inactive' : 'active';
  }

  toggle() {
    this.show = !this.show;
  }


  /**
   * Animations start
   * @param event Animation start event
   */
  animationStart(event: AnimationEvent) {
    console.log(event);
  }


  /**
   * Animations done
   * @param event Animation done event
   */
  animationDone(event: AnimationEvent) {
    console.log(event);
  }
}
