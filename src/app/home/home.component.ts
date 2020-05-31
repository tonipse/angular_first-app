import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimelineMax, Power3 } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = '';
  password: string = '';
  tl = new TimelineMax();
  px;
  constructor() {}

  ngOnInit(): void {}

  countClick() {
    this.clickCounter += 1;
  }
  comeBack(gs) {
    this.tl.to(gs, 0.5, {
      css: { transform: ` translateX(0px) ` },
      ease: Power3.easeInOut,
    });
  }
  gsinput(gs) {
    this.tl.to(gs, 0.5, {
      css: { transform: ` translateX(${this.px}px) ` },
      ease: Power3.easeInOut,
    });
  }
}
