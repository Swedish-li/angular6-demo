import { Component, OnInit } from '@angular/core';
import { ResizeSensor } from './../../common/utils/resize-sensor';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.scss'],
})
export class Chapter2Component implements OnInit {
  resizeSensor: ResizeSensor;

  constructor() {
    this.resizeSensor = new ResizeSensor(document.body, () => {
      console.log(document.body.getBoundingClientRect());
    });
  }

  ngOnInit() {}
}
