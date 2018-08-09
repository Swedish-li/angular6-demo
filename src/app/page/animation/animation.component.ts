import { Component, OnInit } from '@angular/core';
import { btnState, btnInlineState, flyInOut, shrinkOut } from '../../animate';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [btnState, btnInlineState, flyInOut, shrinkOut]
})
export class AnimationComponent implements OnInit {

  btnState: string;
  show: boolean;

  constructor() {
    this.btnState = 'inactive';
    this.show = true;
  }

  ngOnInit() {
  }

  btnToggle() {
    this.btnState = this.btnState === 'active' ? 'inactive' : 'active';
  }

  toggle() {
    this.show = !this.show;
  }

  animationStart(event: AnimationEvent) {
    console.log(event);
  }

  animationDone(event: AnimationEvent) {
    console.log(event);
  }

}
