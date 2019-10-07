import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../landing-page.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private lp: LandingPageService) { }

  public get barWidth(): string {
    return this.lp.barWidth
  }

  ngOnInit() {
  }

}
