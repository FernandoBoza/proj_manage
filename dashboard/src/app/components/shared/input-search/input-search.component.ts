import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent implements OnInit {

  constructor() { }
  @Input("model") model: any;

  ngOnInit() {
  }

}
