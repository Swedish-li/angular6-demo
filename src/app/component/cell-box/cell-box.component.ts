import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-cell-box',
  templateUrl: './cell-box.component.html',
  styleUrls: ['./cell-box.component.scss']
})
export class CellBoxComponent implements OnInit, AfterViewInit {
  @ViewChild('textBox')
  textBox: ElementRef;

  @Input()
  text: string;

  hasToolTip: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.hasToolTip = true;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    console.warn(this.textBox);
    const ele = this.textBox.nativeElement as HTMLElement;

    if (ele.offsetWidth < ele.scrollWidth) {
      this.hasToolTip = true;
    } else {
      this.hasToolTip = false;
    }
    this.changeDetectorRef.detectChanges();
  }
}
