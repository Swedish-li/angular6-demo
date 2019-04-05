import { ResizeSensor } from './../../common/utils/resize-sensor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.scss']
})
export class Chapter2Component implements OnInit {

  resizeSensor: ResizeSensor;

  constructor() {
    this.resizeSensor = new ResizeSensor(document.body, () => {
      console.info(document.body.getBoundingClientRect());
    });
  }

  ngOnInit() {
  }

}
