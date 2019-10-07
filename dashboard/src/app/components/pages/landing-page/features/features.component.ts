import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LandingPageService } from '../landing-page.service';

@Component({
  selector: 'features',
  templateUrl: './features.component.html',
})
export class FeaturesComponent implements OnInit {

  constructor(private lp: LandingPageService) { }

  public src: string = "../../../../assets/imgs/landing_page/"
  @ViewChild('container') container: ElementRef;

  ngOnInit() {
    this.lp.barWidth = "0";
  }

  public scroll() {
    this.lp.scroll(this.container) + "%";
  }
}
