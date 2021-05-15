import { Component, Input, OnInit } from '@angular/core';

export interface LaTex {
  eq: string;
  desc: string;
  title: string;
}

@Component({
  selector: 'app-la-tex',
  templateUrl: './la-tex.component.html',
  styleUrls: ['./la-tex.component.scss'],
})
export class LaTexComponent implements OnInit {
  @Input() laTex: LaTex;

  constructor() {}

  ngOnInit() {}
}
