import { Injectable, ViewChild, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor() { }
  public barWidth: string;

  scroll(event: ElementRef) {
    let {
      scrollTop,
      scrollHeight,
      clientHeight
    } = event.nativeElement;
    this.barWidth = (scrollTop / (scrollHeight - clientHeight)) * 100 + "%";
  }
}
